<?php

declare(strict_types=1);

namespace TrueConf\Serviceman\Adapters\Windows\PhpExtension;

use Throwable;
use TrueConf\Serviceman\Exceptions\AccessDenied;
use TrueConf\Serviceman\Exceptions\DependencyException;
use TrueConf\Serviceman\Exceptions\LogicException;
use TrueConf\Serviceman\Exceptions\ServiceWasNotFound;
use TrueConf\Serviceman\Exceptions\UnknownSystemError;
use TrueConf\Serviceman\ServiceInterface;
use TrueConf\Serviceman\Utils\Util;
use function is_array;
use function is_int;
use function win32_query_service_status;
use function win32_start_service;
use function win32_stop_service;

/**
 * Class Win32Service
 * @package TrueConf\Serviceman\Adapters\Windows\PhpExtension
 */
class Win32Service implements ServiceInterface
{
    const EXTENSION_NAME = "win32service";

    /**
     * Обработчик к базе данных SCM не имеет нужных прав доступа.
     */
    const WIN32_ERROR_ACCESS_DENIED = 1260;

    /**
     * Задана взаимная зависимость служб.
     */
    const WIN32_ERROR_CIRCULAR_DEPENDENCY = 1059;

    /**
     * Указанная база данных отсутствует.
     */
    const WIN32_ERROR_DATABASE_DOES_NOT_EXIST = 1065;

    /**
     * Службу нельзя остановить, поскольку от нее зависит другая запущенная служба.
     */
    const WIN32_ERROR_DEPENDENT_SERVICES_RUNNING = 1051;

    /**
     * Отображаемое имя уже существует в базе данных диспетчера служб либо в качестве имени службы
     * или как другое отображаемое имя.
     */
    const WIN32_ERROR_DUPLICATE_SERVICE_NAME = 1078;

    /**
     * Эта ошибка возвращается, если программа запускается как консольное приложение, а не в качестве службы.
     * Если программа выполняется как консольное приложение в целях отладки, структурируйте его таким образом,
     * что бы код, специфичный для служб, не вызывался.
     */
    const WIN32_ERROR_FAILED_SERVICE_CONTROLLER_CONNECT = 1063;

    /**
     * Указанное имя службы некорректно.
     */
    const WIN32_ERROR_BAD_DEVICE = 1200;

    /**
     * Имя аккаунта пользователя, указанное в user отсутствует.
     * Смотри win32_create_service().
     */
    const WIN32_ERROR_INVALID_SERVICE_ACCOUNT = 1057;

    /**
     * Запрошенный контрольный код является недействительным, или неприемлемым для службы.
     */
    const WIN32_ERROR_INVALID_SERVICE_CONTROL = 1052;

    /**
     * Исполняемый файл службы не найден.
     */
    const WIN32_ERROR_SERVICE_NOT_IN_EXE = 1083;

    /**
     * Экземпляр службы уже запущен.
     */
    const WIN32_ERROR_SERVICE_ALREADY_RUNNING = 1056;

    /**
     * Запрошенный управляющий код не может быть послан службе, поскольку ее статус of the service is
     * WIN32_SERVICE_STOPPED, WIN32_SERVICE_START_PENDING, или WIN32_SERVICE_STOP_PENDING.
     */
    const WIN32_ERROR_SERVICE_CANNOT_ACCEPT_CTRL = 1061;

    /**
     * База данных заблокирована.
     */
    const WIN32_ERROR_SERVICE_DATABASE_LOCKED = 1055;

    /**
     * Служба зависит от службы которой нет, либо которая отмечена для удаления.
     */
    const WIN32_ERROR_SERVICE_DEPENDENCY_DELETED = 1075;

    /**
     * Служба зависит от другой службы, которая не может запуститься.
     */
    const WIN32_ERROR_SERVICE_DEPENDENCY_FAIL = 1075;

    /**
     * Служба запрещена.
     */
    const WIN32_ERROR_SERVICE_DISABLED = 1058;

    /**
     * Указанная служба не установлена.
     */
    const WIN32_ERROR_SERVICE_DOES_NOT_EXIST = 1060;

    /**
     * Указанная служба уже есть в базе данных.
     */
    const WIN32_ERROR_SERVICE_EXISTS = 1073;

    /**
     * Служба не может запустится из-за проблем авторизации.
     * Такая ошибка случается, если служба настроена на запуск под учетной записью,
     * у которой нет пра запускаться как службе (Log on as a service).
     */
    const WIN32_ERROR_SERVICE_LOGON_FAILED = 1069;

    /**
     * Указанная служба уже помечена для удаления.
     */
    const WIN32_ERROR_SERVICE_MARKED_FOR_DELETE = 1072;

    /**
     * Для данной службы не может быть создан поток.
     */
    const WIN32_ERROR_SERVICE_NO_THREAD = 1054;

    /**
     * Служба не запущена.
     */
    const WIN32_ERROR_SERVICE_NOT_ACTIVE = 1062;

    /**
     * Процесс службы стартован, но он не вызывал StartServiceCtrlDispatcher, либо поток,
     * вызывавший StartServiceCtrlDispatcher заблокирован функцией управляющей обработкой.
     */
    const WIN32_ERROR_SERVICE_REQUEST_TIMEOUT = 1053;

    /**
     *  Система останавливается; эта функция не может быть вызвана.
     */
    const WIN32_ERROR_SHUTDOWN_IN_PROGRESS = 1115;

    /**
     *  Нет ошибок.
     */
    const WIN32_NO_ERROR = 0;

    /**
     * Служба в ожидании выхода из состояния паузы.
     */
    const WIN32_SERVICE_CONTINUE_PENDING = 0x00000005;

    /**
     * Служба ожидает перехода в состояние паузы.
     */
    const WIN32_SERVICE_PAUSE_PENDING = 0x00000006;

    /**
     * Служба в состоянии паузы.
     */
    const WIN32_SERVICE_PAUSED = 0x00000007;

    /**
     * Служба запущена.
     */
    const WIN32_SERVICE_RUNNING = 0x00000004;

    /**
     * Служба стартует.
     */
    const WIN32_SERVICE_START_PENDING = 0x00000002;

    /**
     * Служба останавливается.
     */
    const WIN32_SERVICE_STOP_PENDING = 0x00000003;

    /**
     * Служба не запущена.
     */
    const WIN32_SERVICE_STOPPED = 0x00000001;

    /**
     * @var string
     */
    private $serviceName;

    /**
     * Win32Service constructor.
     * @param string $serviceName
     * @throws DependencyException
     */
    public function __construct(string $serviceName)
    {
        if (!extension_loaded(static::EXTENSION_NAME)) {
            throw new DependencyException('Extension "' . static::EXTENSION_NAME . '" was not found!');
        }

        $this->serviceName = $serviceName;
    }

    /**
     * @return bool
     * @throws AccessDenied
     * @throws ServiceWasNotFound
     * @throws Throwable
     */
    public function start(): bool
    {
        try {
            win32_start_service($this->getName());
        } catch (Throwable $exception) {
            $code = $exception->getCode();

            if ($code !== static::WIN32_ERROR_SERVICE_ALREADY_RUNNING &&
                $code !== static::WIN32_NO_ERROR) {
                throw $this->newException($code);
            }
        }

        return true;
    }

    /**
     * @return string
     */
    public function getName(): string
    {
        return $this->serviceName;
    }

    /**
     * @param int $errorCode
     * @return AccessDenied|ServiceWasNotFound|UnknownSystemError
     */
    protected function newException(int $errorCode)
    {
        $serviceName = $this->getName();

        switch ($errorCode) {
            case(static::WIN32_ERROR_ACCESS_DENIED):
                return new AccessDenied('Access is denied.');

            case(static::WIN32_ERROR_SERVICE_DOES_NOT_EXIST):
                return new ServiceWasNotFound('Service "' . $serviceName . '" was not found.');

            default:
                return new UnknownSystemError('Unknown error code "' . Util::getConstantAsStringByValue(__CLASS__, $errorCode) . '".');
        }
    }

    /**
     * @return int
     * @throws AccessDenied
     * @throws LogicException
     * @throws ServiceWasNotFound
     * @throws UnknownSystemError
     */
    public function status(): int
    {
        $serviceName = $this->getName();
        $status = win32_query_service_status($serviceName);

        if (is_int($status)) {
            throw $this->newException($status);
        }

        if (!is_array($status)) {
            throw new LogicException("LogicException");
        }

        $state = $status['CurrentState'];

        switch ($state) {
            case(static::WIN32_SERVICE_STOPPED):
                return static::SERVICE_STOPPED;
            case(static::WIN32_SERVICE_RUNNING):
                return static::SERVICE_RUNNING;
            case(static::WIN32_SERVICE_START_PENDING):
                return static::SERVICE_START_PENDING;
            case(static::WIN32_SERVICE_STOP_PENDING):
                return static::SERVICE_STOP_PENDING;
            default:
                return static::SERVICE_UNKNOWN;
        }
    }

    /**
     * @return bool
     * @throws AccessDenied
     * @throws ServiceWasNotFound
     * @throws Throwable
     */
    public function stop(): bool
    {
        try {
            win32_stop_service($this->getName());
        } catch (Throwable $exception) {
            $code = $exception->getCode();

            if ($code !== static::WIN32_ERROR_SERVICE_NOT_ACTIVE &&
                $code !== static::WIN32_NO_ERROR) {
                throw $this->newException($code);
            }
        }

        return true;
    }
}