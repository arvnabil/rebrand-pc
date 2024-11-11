<?php

namespace ValueObjects\Web\Url;

use ValueObjects\Base\StringLiteral\StringLiteralInterface;
use ValueObjects\ValueObjectInterface;
use ValueObjects\Web\Domain\DomainInterface;
use ValueObjects\Web\Port\PortInterface;

/**
 * Interface UrlInterface
 * @package ValueObjects\Web\Url
 */
interface UrlInterface extends ValueObjectInterface
{

    /**
     * Url constructor.
     * @param SchemeNameInterface $schemeName
     * @param DomainInterface $domain
     * @param PortInterface $port
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
        StringLiteralInterface $user = null,
        StringLiteralInterface $password = null,
        PathInterface $path = null,
        QueryStringInterface $queryString = null,
        FragmentIdentifierInterface $fragment = null
    );

    /**
     * @param string $url
     * @return self
     */
    public static function fromString($url): self;

    /**
     * @return SchemeNameInterface
     */
    public function getSchemeName(): SchemeNameInterface;

    /**
     * @return DomainInterface
     */
    public function getDomain(): DomainInterface;

    /**
     * @return PortInterface|null
     */
    public function getPort();

    /**
     * @return StringLiteralInterface
     */
    public function getUser(): StringLiteralInterface;

    /**
     * @return StringLiteralInterface
     */
    public function getPassword(): StringLiteralInterface;

    /**
     * @return PathInterface
     */
    public function getPath(): PathInterface;

    /**
     * @return QueryStringInterface
     */
    public function getQueryString(): QueryStringInterface;

    /**
     * @return FragmentIdentifierInterface
     */
    public function getFragment(): FragmentIdentifierInterface;
}
