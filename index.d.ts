import { F } from 'ts-toolbelt';

export interface LocaleOptions {
  daysShort: Array<string>,
  daysLong: Array<string>,
  monthsShort: Array<string>
  monthsLong: Array<string>
  ordinals: {
    [key: number]: string;
    default: string;
  },
  periods: Array<string>
  utc: string;
  delimiter: string;
}

export type Increment =
  'l' | // millisecond
  's' | // second
  't' | // minute
  'h' | // hour
  'd' | // day
  'w' | // week
  'm' | // month (position will be on the same date and time of the month)
  'y'; // year (position will be on the same date and time of the year)

export type SetIncrement =
  'l' | // millisecond
  's' | // second
  't' | // minute
  'h' | // hour
  'd' | // day of the month (1-indexed)
  'e' | // day of the week (1-indexed)
  'w' | // week of the year (1-indexed)
  'm' | // month (1-indexed; position will be on the same date and time of the month)
  'y'; // year (position will be on the date and time of the year)

export type GetIncrement =
  'z' | // the time zone offset in hours, always returns 0 when used with getUTC()
  'l' | // the millisecond
  's' | // the second
  't' | // the minute
  'h' | // the hour
  'd' | // the day of the month (1-indexed)
  'e' | // the day of the week (1-indexed)
  'w' | // the week of the year (1-indexed)
  'm' | // the month (1-indexed)
  'y'; // the year

export type IncrementDict = { [key in Increment]: number };
export type SetIncrementDict = { [key in SetIncrement]: number };
export type GetIncrementArray = Array<GetIncrement>;

export function reform(format: string, date: Date):  string;
export function reform(format: string): F.Curry<(date: Date) => string>;

export function reformWithOverrides(overrides: Partial<LocaleOptions>, format: string, date: Date): string;
export function reformWithOverrides(overrides: Partial<LocaleOptions>, format: string): (date: Date) => string;
export function reformWithOverrides(overrides: Partial<LocaleOptions>): F.Curry<(format: string, date: Date) => string>;

export function reformWithLocale(locale: LocaleOptions, format: string, date: Date): string;
export function reformWithLocale(locale: LocaleOptions, format: string): (date: Date) => string;
export function reformWithLocale(locale: LocaleOptions): F.Curry<(format: string, date: Date) => string>;

export function isDate(value: unknown): value is Date;

export function isLeapYear(date: Date): boolean;
export function isLeapYearUTC(date: Date): boolean;

export function parse(input: string | Date): Date;
export function parseUTC(input: string | Date): Date;

export function add(increment: Increment, n: number, date: Date): Date;
export function add(increment: Increment, n: number): (date: Date) => Date;
export function add(increment: Increment): F.Curry<(n: number, date: Date) => Date>;

export function add(increment: Increment, n: number, fn: Function): Date;
export function add(increment: Increment, n: number): (fn: Function) => Date;
export function add(increment: Increment): F.Curry<(n: number, fn: Function) => Date>;

export function addFor(dict: IncrementDict, n: number, date: Date): Date;
export function addFor(dict: IncrementDict, n: number): (date: Date) => Date;
export function addFor(dict: IncrementDict): F.Curry<(n: number, date: Date) => Date>;

export function addFor(dict: IncrementDict, n: number, fn: Function): Date;
export function addFor(dict: IncrementDict, n: number): (fn: Function) => Date;
export function addFor(dict: IncrementDict): F.Curry<(n: number, fn: Function) => Date>;

export function subtract(increment: Increment, n: number, date: Date): Date;
export function subtract(increment: Increment, n: number): (date: Date) => Date;
export function subtract(increment: Increment): F.Curry<(n: number, date: Date) => Date>;

export function subtract(increment: Increment, n: number, fn: Function): Date;
export function subtract(increment: Increment, n: number): (fn: Function) => Date;
export function subtract(increment: Increment): F.Curry<(n: number, fn: Function) => Date>;

export function subtractFor(dict: IncrementDict, n: number, date: Date): Date;
export function subtractFor(dict: IncrementDict, n: number): (date: Date) => Date;
export function subtractFor(dict: IncrementDict): F.Curry<(n: number, date: Date) => Date>;

export function subtractFor(dict: IncrementDict, n: number, fn: Function): Date;
export function subtractFor(dict: IncrementDict, n: number): (fn: Function) => Date;
export function subtractFor(dict: IncrementDict): F.Curry<(n: number, fn: Function) => Date>;

export function startOf(increment: Exclude<SetIncrement, 'l'>, date: Date): Date;
export function startOf(increment: Exclude<SetIncrement, 'l'>): F.Curry<(date: Date) => Date>;


export function startOf(increment: Exclude<SetIncrement, 'l'>, fn: Function): Date;
export function startOf(increment: Exclude<SetIncrement, 'l'>): F.Curry<(fn: Function) => Date>;


export function startOfUTC(increment: Exclude<SetIncrement, 'l'>): (date: Date) => Date;
export function startOfUTC(increment: Exclude<SetIncrement, 'l'>, date: Date): Date;

export function startOfUTC(increment: Exclude<SetIncrement, 'l'>, fn: Function): Date;
export function startOfUTC(increment: Exclude<SetIncrement, 'l'>): F.Curry<(fn: Function) => Date>;


export function endOf(increment: Exclude<SetIncrement, 'l'>, date: Date): Date;
export function endOf(increment: Exclude<SetIncrement, 'l'>): F.Curry<(date: Date) => Date>;

export function endOf(increment: Exclude<SetIncrement, 'l'>, fn: Function): Date;
export function endOf(increment: Exclude<SetIncrement, 'l'>): F.Curry<(fn: Function) => Date>;


export function endOfUTC(increment: Exclude<SetIncrement, 'l'>, date: Date): Date;
export function endOfUTC(increment: Exclude<SetIncrement, 'l'>): F.Curry<(date: Date) => Date>;

export function endOfUTC(increment: Exclude<SetIncrement, 'l'>, fn: Function): Date;
export function endOfUTC(increment: Exclude<SetIncrement, 'l'>): F.Curry<(fn: Function) => Date>;


export function set(increment: SetIncrement, value: number, date: Date): Date;
export function set(increment: SetIncrement, value: number): (date: Date) => Date;
export function set(increment: SetIncrement): F.Curry<(value: number, date: Date) => Date>;

export function set(increment: SetIncrement, value: number, fn: Function): Date;
export function set(increment: SetIncrement, value: number): (fn: Function) => Date;
export function set(increment: SetIncrement): F.Curry<(value: number, fn: Function) => Date>;


export function setUTC(increment: SetIncrement, value: number, date: Date): Date;
export function setUTC(increment: SetIncrement, value: number): (date: Date) => Date;
export function setUTC(increment: SetIncrement): F.Curry<(value: number, date: Date) => Date>;

export function setUTC(increment: SetIncrement, value: number, fn: Function): Date;
export function setUTC(increment: SetIncrement, value: number): (fn: Function) => Date;
export function setUTC(increment: SetIncrement): F.Curry<(value: number, fn: Function) => Date>;



export function setFor(dict: SetIncrementDict, value: number, date: Date): Date;
export function setFor(dict: SetIncrementDict, value: number): (date: Date) => Date;
export function setFor(dict: SetIncrementDict): F.Curry<(value: number, date: Date) => Date>;

export function setFor(dict: SetIncrementDict, value: number, fn: Function): Date;
export function setFor(dict: SetIncrementDict, value: number): (fn: Function) => Date;
export function setFor(dict: SetIncrementDict): F.Curry<(value: number, fn: Function) => Date>;



export function setUTCFor(dict: SetIncrementDict, value: number, date: Date): Date;
export function setUTCFor(dict: SetIncrementDict, value: number): (date: Date) => Date;
export function setUTCFor(dict: SetIncrementDict): F.Curry<(value: number, date: Date) => Date>;

export function setUTCFor(dict: SetIncrementDict, value: number, fn: Function): Date;
export function setUTCFor(dict: SetIncrementDict, value: number): (fn: Function) => Date;
export function setUTCFor(dict: SetIncrementDict): F.Curry<(value: number, fn: Function) => Date>;


export function get(increment: GetIncrement, date: Date): number;
export function get(increment: GetIncrement): F.Curry<(date: Date) => number>;

export function getUTC(increment: GetIncrement, date: Date): number;
export function getUTC(increment: GetIncrement): F.Curry<(date: Date) => number>;

export function getFor(arr: GetIncrementArray, date: Date): Array<number>;
export function getFor(arr: GetIncrementArray): F.Curry<(date: Date) => Array<number>>;

export function getUTCFor(arr: GetIncrementArray, date: Date): Array<number>;
export function getUTCFor(arr: GetIncrementArray): F.Curry<(date: Date) => Array<number>>;

export function diff(increment: Increment, date1: Date, date2: Date): number;
export function diff(increment: Increment, date1: Date): (date2: Date) => number;
export function diff(increment: Increment): F.Curry<(date1: Date, date2: Date) => number>;

export function compare(date1: Date, date2: Date): -1 | 0 | 1;
export function compare(date1: Date): F.Curry<(date2: Date) => -1 | 0 | 1>;

