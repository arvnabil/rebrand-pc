<?php

namespace ValueObjects\Web\Url;

use function is_null;
use function mb_strlen;
use function parse_url;
use Throwable;
use ValueObjects\AbstractValueObject;
use ValueObjects\Base\StringLiteral\StringLiteral;
use ValueObjects\Base\StringLiteral\StringLiteralInterface;
use ValueObjects\ValueObjectInterface;
use ValueObjects\Web\Domain\Domain;
use ValueObjects\Web\Domain\DomainInterface;
use ValueObjects\Web\Port\PortInterface;
use ValueObjects\Web\Port\PortNumber;

/**
 * Class Url
 * @package ValueObjects\Web\Url
 */
class Url extends AbstractValueObject implements UrlInterface
{

    /**
     * @var SchemeNameInterface
     */
    private $schemeName;
    /**
     * @var DomainInterface
     */
    private $domain;
    /**
     * @var PortInterface|null
     */
    private $port;
    /**
     * @var StringLiteralInterface
     */
    private $user;
    /**
     * @var StringLiteralInterface
     */
    private $password;
    /**
     * @var PathInterface
     */
    private $path;
    /**
     * @var QueryStringInterface
     */
    private $queryString;
    /**
     * @var FragmentIdentifierInterface
     */
    private $fragment;

    /**
     * Url constructor.
     * @param SchemeNameInterface $schemeName
     * @param DomainInterface $domain
     * @param PortInterface|null $port
     * @param StringLiteralInterface|null $user
     * @param StringLiteralInterface|null $password
     * @param PathInterface|null $path
     * @param QueryStringInterface|null $queryString
     * @param FragmentIdentifierInterface|null $fragment
     */
    public function __construct(
        SchemeNameInterface $schemeName,
                                DomainInterface $domain,
                                PortInterface $port = null,
                                ?StringLiteralInterface $user = null,
                                ?StringLiteralInterface $password = null,
                                ?PathInterface $path = null,
                                ?QueryStringInterface $queryString = null,
        ?FragmentIdentifierInterface $fragment = null
    ) {
        $this->schemeName = $schemeName;
        $this->domain = $domain;
        $this->port = $port;
        $this->user = $user;
        $this->password = $password;
        $this->path = $path;
        $this->queryString = $queryString;
        $this->fragment = $fragment;
    }

    /**
     * @param string $value
     * @return Throwable|null
     */
    public static function validate($value)
    {
        try {
            static::fromString($value);
        } catch (Throwable $exception) {
            return $exception;
        }

        return null;
    }

    /**
     * @param string $url
     * @return UrlInterface
     * @throws Throwable
     */
    public static function fromString($url): UrlInterface
    {
        $scheme = parse_url($url, PHP_URL_SCHEME);
        $user = parse_url($url, PHP_URL_USER);
        $pass = parse_url($url, PHP_URL_PASS);
        $domain = parse_url($url, PHP_URL_HOST);
        $port = parse_url($url, PHP_URL_PORT);
        $path = parse_url($url, PHP_URL_PATH);
        $queryString = parse_url($url, PHP_URL_QUERY);
        $fragmentId = parse_url($url, PHP_URL_FRAGMENT);

        $schemeName = new SchemeName($scheme ?: '');
        $user = new StringLiteral($user ?: '');
        $password = new StringLiteral($pass ?: '');
        $domain = Domain::specifyType($domain ?: '');
        $port = $port ? new PortNumber($port) : null;
        $path = new Path($path ?: '');
        $queryString = new QueryString($queryString ?: '');
        $fragment = new FragmentIdentifier($fragmentId ?: '');

        return new static($schemeName, $domain, $port, $user, $password, $path, $queryString, $fragment);
    }

    /**
     * @return string
     */
    public function __toString(): string
    {
        $schemeName_raw = is_null($this->getSchemeName()) ? '' : $this->getSchemeName()->__toString();
        $user_raw = is_null($this->getUser()) ? '' : $this->getUser()->__toString();
        $password_raw = is_null($this->getPassword()) ? '' : $this->getPassword()->__toString();
        $domain_raw = is_null($this->getDomain()) ? '' : $this->getDomain()->__toString();
        $port_raw = is_null($this->getPort()) ? '' : $this->getPort()->__toString();
        $path_raw = is_null($this->getPath()) ? '' : $this->getPath()->__toString();
        $queryString_raw = is_null($this->getQueryString()) ? '' : $this->getQueryString()->__toString();
        $fragment_raw = is_null($this->getFragment()) ? '' : $this->getFragment()->__toString();

        $schemeName_raw = mb_strlen($schemeName_raw) === 0 ? ''
            : $schemeName_raw . '://';
        $user_raw = mb_strlen($user_raw) === 0 ? ''
            : $user_raw . '@';
        $password_raw = mb_strlen($password_raw) === 0 ? ''
            : $password_raw;
        $domain_raw = mb_strlen($domain_raw) === 0 ? ''
            : $domain_raw;
        $port_raw = mb_strlen($port_raw) === 0 || $this->portIsDefault() ? ''
            : ':' . $port_raw;
        $path_raw = mb_strlen($path_raw) === 0 ? ''
            : '/' . $path_raw;
        $queryString_raw = mb_strlen($queryString_raw) === 0 ? ''
            : '?' . $queryString_raw;
        $fragment_raw = mb_strlen($fragment_raw) === 0 ? ''
            : '#' . $fragment_raw;

        return $schemeName_raw .
            $user_raw . $password_raw .
            $domain_raw . $port_raw .
            $path_raw . $queryString_raw . $fragment_raw;
    }

    /**
     * @return bool
     */
    protected function portIsDefault(): bool
    {
        $default_ports = [
            'ftp' => 21,
            'http' => 80,
            'https' => 443
        ];

        return $default_ports[$this->getSchemeName()->__toString()] === $this->getPort();
    }

    /**
     * @param ValueObjectInterface $other
     * @return bool
     */
    protected function compare(ValueObjectInterface $other): bool
    {
        if (!$other instanceof self) {
            return false;
        }

        /**
         * @var static $other
         */
        $object = $other;
        return $object->getSchemeName() === $this->getSchemeName()
            && $object->getDomain() === $this->getDomain()
            && $object->getPort() === $this->getPort()
            && $object->getUser() === $this->getUser()
            && $object->getPassword() === $this->getPassword()
            && $object->getPath() === $this->getPath()
            && $object->getQueryString() === $this->getQueryString()
            && $object->getFragment() === $this->getFragment();
    }

    /**
     * @return SchemeNameInterface
     */
    public function getSchemeName(): SchemeNameInterface
    {
        return $this->schemeName;
    }

    /**
     * @return DomainInterface
     */
    public function getDomain(): DomainInterface
    {
        return $this->domain;
    }

    /**
     * @return PortInterface|null
     */
    public function getPort()
    {
        return $this->port;
    }

    /**
     * @return StringLiteralInterface
     */
    public function getUser(): StringLiteralInterface
    {
        return $this->user;
    }

    /**
     * @return StringLiteralInterface
     */
    public function getPassword(): StringLiteralInterface
    {
        return $this->password;
    }

    /**
     * @return PathInterface
     */
    public function getPath(): PathInterface
    {
        return $this->path;
    }

    /**
     * @return QueryStringInterface
     */
    public function getQueryString(): QueryStringInterface
    {
        return $this->queryString;
    }

    /**
     * @return FragmentIdentifierInterface
     */
    public function getFragment(): FragmentIdentifierInterface
    {
        return $this->fragment;
    }
}
