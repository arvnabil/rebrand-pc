<?php
/**
 * @author Petr Chelpanov <chelpanov@trueconf.ru>
 */

declare(strict_types=1);

namespace Schedulerman;

/**
 * Class Week
 * @package Schedulerman
 */
class Week
{
    /**
     * Полный формат дней (например Monday)
     */
    public const FORMAT_L = 0;

    /**
     * Трехбуквенный формат дней (например Mon)
     */
    public const FORMAT_M = 1;

    /**
     * Двухбуквенный формат дней (например Mo)
     */
    public const FORMAT_S = 2;

    /**
     * Схема соответствия дней недели к битам по ключам.
     * @var int[string]
     */
    private static $schemaForBit = [
        'Su' => 0, 'Sun' => 0, 'Sunday' => 0,
        'Mo' => 1, 'Mon' => 1, 'Monday' => 1,
        'Tu' => 2, 'Tue' => 2, 'Tuesday' => 2,
        'We' => 3, 'Wed' => 3, 'Wednesday' => 3,
        'Th' => 4, 'Thu' => 4, 'Thursday' => 4,
        'Fr' => 5, 'Fri' => 5, 'Friday' => 5,
        'Sa' => 6, 'Sat' => 6, 'Saturday' => 6
    ];
    /**
     * Схема соответствия формата к списку дней недели.
     * @var array[int]
     */
    private static $schemaForString = [
        self::FORMAT_L => ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        self::FORMAT_M => ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        self::FORMAT_S => ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
    ];

    /**
     * Соддержит дни недели в представлении двоичного числа разложенного в массиве.
     * @example [0,0,0,0,1,0,0]
     * @var int[]
     */
    private $bits;

    /**
     * Week constructor.
     */
    protected function __construct()
    {
    }

    /**
     * @param array $bits
     * @return Week
     */
    public static function createFromBits(array $bits): Week
    {
        $week = new Week();
        $week->setBits($bits);

        return $week;
    }

    /**
     * @param array $days
     * @return Week
     */
    public static function createFromDays(array $days): Week
    {
        $week = new Week();
        $bits = $week->convertWeekdaysToBit($days);
        $week->setBits($bits);

        return $week;
    }

    /**
     * Конвертирует дни недели в число в двоичной системе исчесления.
     * @param string[] $weekdays Список дней недели в строком представлении.
     * @return int[] Число в двоичной системе исчисления.
     * @example ["Monday"] => ["0", "1", "0", "0", "0", "0", "0"]
     */
    public function convertWeekdaysToBit(array $weekdays): array
    {
        $bits = ["0", "0", "0", "0", "0", "0", "0"];

        foreach ($weekdays as $weekday) {
            $weekday = ucfirst(trim(strtolower($weekday)));

            if (isset(static::$schemaForBit[$weekday])) {
                $bit = static::$schemaForBit[$weekday];
                $bits[$bit] = "1";
                continue;
            }
        }

        return $bits;
    }

    /**
     * @param int $number
     * @return Week
     */
    public static function createFromDecimalNumber(int $number): Week
    {
        $week = new Week();
        $bits = $week->decodeToBin($number);
        $week->setBits($bits);
        return $week;
    }

    /**
     * Кодирует число из десятичной системы исчисления в двоичную.
     * @param int $binary Число в десятичной системе исчисления.
     * @return int[] Чисдлв в двоичной системе исчесления.
     * @example 8 => ["0", "0", "0", "1", "0", "0", "0"]
     */
    public function decodeToBin(int $binary): array
    {
        $binary = decbin($binary); // декодируем в двоичный формат.
        $binary = strrev($binary); // переворачиваем строку.
        $binary = str_split($binary); // разбиваем по символу в массив.
        $binary = $this->prepareWeekIntArray($binary);

        return $binary;
    }

    protected function prepareWeekIntArray(array $week)
    {
        $count = count($week);
        if ($count > 7) {
            $week = array_slice($week, 0, 6);
            return $week;
        }

        $need = 7 - $count;

        for ($i = 0; $i < $need; $i++) {
            array_push($week, "0");
        }

        return $week;
    }

    /**
     * Извлекает бит из числа.
     * @param int $value Числов в десятичной системе исчисления.
     * @param int $bit Позиция бита из числа в двоичной системе исчесления.
     * @return int Бит в двоичной системе исчесления.
     * @example
     *  $value=8, $bit=0 => 0
     *  $value=8, $bit=1 => 0
     *  $value=8, $bit=2 => 0
     *  $value=8, $bit=3 => 1
     *  $value=8, $bit=4 => 0
     *  $value=8, $bit=5 => 0
     *  $value=8, $bit=6 => 0
     */
    public function getBitValue(int $value, int $bit): int
    {
        return $value >> $bit & 1;
    }

    /**
     * @return int
     */
    public function getDecimalNumber(): int
    {
        return $this->encodeToInt($this->getBits());
    }

    /**
     * Кодирует число из двоичной системы исчисления в десятичную.
     * @param int[] $binary Число в двоичной системе исчисления.
     * @return int Число в дестяичной системе исчисления.
     * @example ["0", "0", "0", "1", "0", "0", "0"] => 8
     */
    public function encodeToInt(array $binary): int
    {
        $binary = implode('', $binary);
        $binary = strrev($binary);
        $binary = bindec($binary);

        return $binary;
    }

    /**
     * @return array
     */
    public function getBits(): array
    {
        return $this->bits;
    }

    /**
     * @param array $bits
     */
    protected function setBits(array $bits): void
    {
        $this->bits = $bits;
    }

    /**
     * @param int $format
     * @return array
     */
    public function getDays(int $format): array
    {
        return $this->convertBitToWeekdays($this->getBits(), $format);
    }

    /**
     * Конвертирует число в двоичной системе исчесления в строкое представление.
     * @param int[] $bits Число в двоичной системе исчисления.
     * @param int $format Формат дней недели.
     * @return string[] Список дней недели в строковом представлении.
     * @example ["0", "1", "0", "0", "0", "0", "0"] => ["Monday"]
     */
    public function convertBitToWeekdays(array $bits, int $format): array
    {
        $weekdays = [];

        foreach ($bits as $index => $bit) {
            if ($bit === "0") {
                continue;
            }

            $weekday = static::$schemaForString[$format][$index];
            array_push($weekdays, $weekday);
        }

        return $weekdays;
    }

    /**
     * Смещает биты вперед.
     * @return int[] Число в двоичной системе исчисления.
     * @example [0,0,0,1,0,0,0] => [0,0,0,0,1,0,0]
     */
    public function shiftForward(): array
    {
        array_unshift($this->bits, array_pop($this->bits));
        return $this->bits;
    }

    /**
     * Смещает биты назад.
     * @return int[] Число в двоичной системе исчисления.
     * @example [0,0,0,1,0,0,0] => [0,0,1,0,0,0,0]
     */
    public function shiftBack(): array
    {
        array_push($this->bits, array_shift($this->bits));
        return $this->bits;
    }

    public function jsonSerialize(): mixed
    {
        return $this->getWeekdaysAsArrayString(static::FORMAT_L);
    }

    /**
     * @param int $format Формат дней недели.
     * @return string[] Список дней недели в строковом представлении.
     */
    public function getWeekdaysAsArrayString(int $format)
    {
        return $this->convertBitToWeekdays($this->bits, $format);
    }
}