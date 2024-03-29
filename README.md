# Gregorian

_The tiny, composable, modular date library._

[![Circle CI](https://circleci.com/gh/patrickfatrick/gregorian.svg?style=shield)](https://circleci.com/gh/patrickfatrick/gregorian)
[![codecov.io](https://codecov.io/github/patrickfatrick/gregorian/coverage.svg?branch=master)](https://codecov.io/github/patrickfatrick/gregorian?branch=master)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](#badge)
[![MIT License][license-image]][license-url]

![Gregorian Page](./images/gregorian-page.jpg)

Gregorian is named after the calendar introduced in 1582 by under Pope Gregory XIII's papacy, the calendar we currently use today. It was a reform of the Julian calendar to make the year 0.002% shorter and also slightly changed the leap year schedule to omit 3 leap days every 400 years.

## What does it do?

Gregorian is a set of functions that allows you to customize how to display and write dates pretty minutely. It also allows you to do some basic date manipulation (See section 'Manipulation' below). It has no dependencies and can be run either in the browser as a global or as a module.

You can take the same date object and express it like:

```javascript
'April 11, 1988'
'1988-04-11'
'4/11/88'
'Monday, 11 Apr 1988 12:00:00.000AM UTC 0:00'
'Monday'
'Mon, April 11'
'1988-04-11T00:00:00.000Z' // ISO string
'Mon, 11 Apr 1988 00:00:00 GMT' // UTC string
576720000000 // UNIX time
// and more!
```

## What doesn't it do?

It does not extend the native `Date` object, nor does it accept anything other than a Date object as input (strings are not automatically converted to a Date). It does not come with timezone and locale support, and is in English only. 

It also does not export a monolithic library, so you can use any functions without having to bring the unused code into your bundle.

It also does not manipulate the input Date; these functions always return a new Date instance.

## Install

```bash
# Choose one
$ npm install gregorian --save
$ yarn add gregorian
$ jspm install npm:gregorian
$ bower install gregorian
$ git clone git@github.com:patrickfatrick/gregorian.git
```

You can install it into your site using `<script src="./gregorian/dist/gregorian.min.js"></script>` as usual, or you can include it as a module using `require('gregorian').reform` or `import { reform } from 'gregorian'`, etc., with your favorite module loader.

To run the tests, `$ npm test`.

## Basic Usage

Each function in Gregorian can be imported and used individually to save you a few kilobytes in your javascript bundle.

```javascript
import { reform } from 'gregorian'
```

Each function has a similar signature. For instance, `reform(/* Arguments */)(/* Date Object */)`. This makes all of the functions composable, allowing you to basically create a custom function that can be run with different dates very easily.

```javascript
const reformFnUS = reform('M/D/Y')
const reformFnEurope = reform('D/M/Y')
const string1 = reformFnUS(new Date('1988-04-11T12:45:00.000Z')) // 04/11/1988
const string2 = reformFnEurope(new Date('1988-04-11T12:45:00.000Z')) // 11/04/1988 
```

But you can also run each function with all arguments

```javascript
add('y', 1, new Date('1988-04-11T12:45:00.000Z')) // 1989-04-11T12:45:00.000Z
```

Or any combination in between

```javascript
const addYearFn = add('y')
addYearFn(1, new Date('1988-04-11T12:45:00.000Z')) // 1989-04-11T12:45:00.000Z
const addOneYearFn = addYearFn(1)
addOneYearFn(new Date('1988-04-11T12:45:00.000Z')) // 1989-04-11T12:45:00.000Z
```

By default if no date is passed, these functions will use the current time via `new Date()`. You should always run the function or pass in null though, like this:

```javascript
add('y')(1)() // Correct
add('y', 1, null) // Correct
add('y', 1) // Wrong, this will return a function
add('y')(1) // Wrong, this will return a function
```

For even greater flexibility you can also pass another function as the last argument rather than a date. This allows you to compose seriously custom functions that can be applied to any number of Date objects easily. Please note that the functions are called in a left-right manner, so in the following example `setUTC` would be called before `startOfUTC`.

```javascript
const setTimeTo6am = setUTC('h', 6)(startOfUTC('h'))
setTimetTo6am(new Date('1988-04-11T12:45:00.000Z')) // 1988-04-11T06:00:00.000Z
```

## Outputting a formatted date for display

To create a pretty date string, use the `reform` function with a format strange as the only argument. This returns a function that can then be called on a Date object.

```javascript
reform('M/D/Y')(new Date('1988-04-11T12:45:00.000Z')) // 04/11/1988
```

### Accepted formats

The following are components you can use to construct a format string like `'M/D/Y'` or `'E, N o, Y G:T:S.L|P'`. 

```javascript
// Given the date 1988-04-11T12:45:00.000Z, assuming a locale in Eastern Standard Time:

'Y' // full year: 1988
'y' // abbreviated year: 88
'E' // full day of the week: Monday
'e' // abbreviated date of the week: Mon
'o' // date of the month with ordinal: 11th
'D' // date of the month: 11 (adds leading zeros)
'd' // date f the month: 11
'N' // month name: April
'n' // abbreviated month name: Apr
'M' // month: 04 (adds leading zeros)
'm' // month: 4
'G' // hour: 07 (12-hour clock; adds leading zeros)
'g' // hour: 7 (12-hour clock)
'H' // hour: 07 (24-hour clock; adds leading zeros)
'h' // hour: 7 (24-hour clock)
'T' // minute: 45 (adds leading zeros)
't' // minute: 45
'P' // period: AM
'p' // period: am
'S' // second: 00 (adds leading zeros)
's' // second: 0
'L' // millisecond: 000 (adds leading zeros)
'l' // millisecond: 0
'z' // timezone offset: UTC-05:00
'w' // week of the year: 14
```
**NOTE:** Any format strings directly touching anything besides for punctuation and whitespace should be separated with a `|` character. This delimiter will be removed from the final string. This allows us to do some extra fancy things like mix in real words with the format strings without conflicts.

Some examples:

```javascript
reform('E, the o of N, Y')(new Date('04/01/1988')) // 'Friday, the 1st of April, 1988'
reform('E, Y-m-d H:T.L|p z')(new Date('09/25/2015 00:00 UTC -06:00')) // 'Friday, 2015-9-25 12:00.000am UTC -6:00'
reform('e, y-M-D h:t.l|P z')(new Date('09/25/2015 UTC -06:00')) // 'Fri, 15-09-25 12:0.0AM UTC -6:00'
reform('E, N Y-m-d H:T.L|p z')(new Date('09/25/2015 UTC -06:00')) // 'Friday, September 2015-9-25 12:00.000am UTC -6:00'
reform('E, n Y-m-d H:T:s.L z')(new Date('09/25/2015 23:59 UTC')) // 'Friday, Sept 2015-9-25 17:59:0.000 UTC -6:00'
reform('E, n Y-m-d H:T:ss.L z')(new Date('09/25/2015 01:00 UTC')) // 'Thursday, Sept 2015-9-24 19:00:00.000 UTC -6:00'
```

**NOTE:** Since `reform` is primarily intended for display, it currently only supports local time, not UTC.

### Translating and delimiter customization

Say you don't like English generally, you can provide your own words to use with a plain object passed as the first argument to an alternative function called reformWithOverrides

```javascript
const overrides = {
  daysShort: [ /* an array from 0-6, like [ 'di', 'lun', ... 'sam' ] */ ],
  daysLong: [ /* an array from 0-6, like [ 'dimanche', 'lundi', ... 'samedi' ] */ ],
  monthsShort: [ /* an array from 0-11, like [ 'jan', 'fév', ... 'déc' ] */ ],
  monthsLong: [ /* an array from 0-11, like [ 'janvier', 'février', ... 'décembre' ] */ ],
  ordinals: {
    1: 'er', // specify each date of the month that has a non-default ordinal, like 'er' for '1er'
    default: 'e' // the default to use for any numbers not directly passed in as a key, like 'e' for '2e'
  },
  periods: [ /* an array from 0-1 of case-insensitive period names, like [ 'am', 'pm' ] */ ],
  utc: 'UTC', // a string to specify what the UTC timezone is called, like 'UTC'
  delimiter: '*' // a string indicating a delimiter to use instead of the default pipe character ('|')
}

reformWithOverrides(overrides)('E, N o, Y')('2015-10-01T00:00:00.000Z') // 'Jeudi, Octobre 1er, 2015'
```

**NOTE:** You do not have to provide a full override object; you can provide only the options you want to override, otherwise the default English will be used.

### Included locale support

Gregorian comes bundled with translations for several languages. To use these you will need to use the following:

```javascript
import { fr } from 'gregorian/locale'
reformWithLocale(fr)('E, N o, Y')('2015-10-01T00:00:00.000Z') // 'Jeudi, Octobre 1er, 2015'
```

Included locales are:

- French ('fr')
- German ('de')
- Spanish ('es')
- Italian ('it')
- Portuguese ('pt')
- Dutch ('nl')
- English ('en') (though you should obviously just use `reform` since it defaults to English)

If you have any issues with existing translations or want a new translation included, please open an issue.


## Parse

You can parse an ISO-8601 string into a Date instance, using two methods.

### parse

This method assumes the date is in local time ONLY if the timezone is not specified in the string.

```javascript
// Assuming UTC-8:00
parse('2019-12-01T05:34:27.987') === new Date(2019, 11, 1, 5, 34, 27, 987)
parse('2019-12-01 05:34:27.987Z') === new Date(2019, 10, 30, 21, 34, 27, 987)
parse('2019-12-01 05:34:27.987-0800') === new Date(2019, 11, 1, 5, 34, 27, 987)
parse('2019-12-01') === new Date(2019, 11, 1)
```

### parseUTC

This method assumes the date is in UTC time ONLY if the timezone is not specified in the string.

```js
// Assuming UTC-8:00
parseUTC('2019-12-01T05:34:27.987') === new Date(2019, 10, 30, 21, 34, 27, 987)
parseUTC('2019-12-01 05:34:27.987Z') === new Date(2019, 10, 30, 21, 34, 27, 987)
parseUTC('2019-12-01 05:34:27.987-0800') === new Date(2019, 11, 1, 5, 34, 27, 987)
parseUTC('2019-12-01') === new Date(2019, 10, 30, 14)
```

## Manipulation

#### Adding and subtracting

You can manipulate dates like 

```javascript
add('d')(5)(new Date('2015-10-31')) // 2015-11-05
subtract('m')(7)(new Date('2015-10-31')) // 2015-03-31
```

There are also methods for combining multiple add and subtract operations (accepting an object or a Map):

```javascript
addFor({
  y: 1,
  m: 3,
  d: -1,
})(new Date('2015-10-31')) // 2017-02-01

subtractFor({
  y: 1,
  m: 3,
  y: 1
})(new Date('2015-10-31')) // 2013-07-31
```

This accepts an array of arrays

All of these methods return a new `Date` object.

Accepted increments you can use for additions and subtractions are

```javascript
'l' // millisecond
's' // second
't' // minute
'h' // hour
'd' // day
'w' // week
'm' // month (position will be on the same date and time of the month)
'y' // year (position will be on the same date and time of the year)
```

#### Setting

Setting specific values for different time increments is much like adding and subtracting

```javascript
// Let's say your user is in New York...
set('d')(5)(new Date('2015-10-31')) // 2015-10-05 05:00:00.000 UTC
set('m')(7)(new Date('2015-10-31')) // 2015-07-31 05:00:00.000 UTC
```

There is also a method for setting with UTC time.

```javascript
setUTC('d')(5)(new Date('2015-10-31')) // 2015-10-05 00:00:000 UTC
setUTC('m')(7)(new Date('2015-10-31')) // 2015-07-31 00:00:000 UTC
```

But wait, there's more! You can also run multiple set operations with one function call like so

```javascript
setUTCFor({ y: 1985, m: 5, d: 22 })(new Date('2015-10-31')) // 1985-05-22
setFor({ y: 1985, m: 5, d: 22 }, new Date('2015-10-31')) // 1985-05-21
```

This accepts an object where the keys correspond to the increments below.

This will return a new `Date` object.

Accepted increments you can use for setting are

```javascript
'l' // millisecond
's' // second
't' // minute
'h' // hour
'd' // day of the month (1-indexed)
'e' // day of the week (1-indexed)
'w' // week of the year (1-indexed)
'm' // month (1-indexed; position will be on the same date and time of the month)
'y' // year (position will be on the date and time of the year)
```

#### Getting

This will retrieve specific numeric time increments for the Date.

```javascript
// Let's say your user is in mainland Europe...
get('h')(new Date('2015-10-31T00:00:00.000Z')) // 1
get('m')(new Date('2015-10-31T00:00:00.000Z')) // 10
```

There is also a method for getting the UTC value.

```javascript
getUTC('h')(new Date('2015-10-31T00:00:00.000Z')) // 0
getUTC('m')(new Date('2015-10-31T00:00:00.000Z')) // 9
```

And you can also get multiple increments at the same time, like so:

```javascript
getUTCFor({ h: true, y: true, m : true })(new Date('2015-10-31T00:00:00.000Z')) // { h: 0, y: 2015, m: 10 }
getFor({ m: true, d: true })(new Date('2015-10-31T00:00:00.000Z')) // { m: 10, d: 30 }
```

This accepts an array of increments, and returns the corresponding values as an array.

Accepted increments you can use for getting are

```javascript
'z' // the time zone offset in hours, always returns 0 when used with getUTC()
'l' // the millisecond
's' // the second
't' // the minute
'h' // the hour
'd' // the day of the month (1-indexed)
'e' // the day of the week (0-indexed)
'w' // the week of the year (0-indexed)
'm' // the month (0-indexed)
'y' // the year
```

#### Reset

You can set the date or time to the start of the increment specified in local time. For instance,

```javascript
// Let's say your user is in New York...
startOf('s')(new Date('April 11, 1988 8:23:15.123')) // '1988-04-11 13:23:15 UTC'
startOf('t')(new Date('April 11, 1988 8:23:15.123')) // '1988-04-11 13:23:00 UTC'
startOf('h')(new Date('April 11, 1988 8:23:15.123')) // '1988-04-11 13:00:00 UTC'
startOf('d')(new Date('April 11, 1988 8:23:15.123')) // '1988-04-11 05:00:00 UTC'
startOf('w')(new Date('April 11, 1988 8:23:15.123')) // '1988-04-10 05:00:00 UTC'
startOf('m')(new Date('April 11, 1988 8:23:15.123')) // '1988-04-01 05:00:00 UTC'
startOf('y')(new Date('April 11, 1988 8:23:15.123')) // '1988-01-01 05:00:00 UTC'
```

There is also a method for reset in UTC.

```javascript
startOfUTC('d')(new Date('2015-10-31T03:42:877Z')) // 2015-10-31 00:00:000 UTC
startOfUTC('m')(new Date('2015-10-31T03:42:877Z')) // 2015-10-01 00:00:000 UTC
// etc.
```

## Utility Functions

### diff

This returns the numeric difference between two dates expressed in terms of the provided time increment. The difference will be positive if the second date is greater, and negative if the first date is great, and 0 if they are the same date. All the same increments allowed in the manipulation functions are allowed here as well.

```javascript
diff('s')(new Date('1988-04-11T07:45:00.000Z'))(new Date('1989-04-11T07:45:00.000Z')) // 31536000
diff('d')(new Date('1988-04-11T07:45:00.000Z'))(new Date('1989-04-11T07:45:00.000Z')) // 365
```

For months and years, a year that 365.25 days long is assumed, and a month is assumed to be 1/12th of that. Which is why you won't always get a nice clean integer when you think you should.

```javascript
diff('m')(new Date('1988-04-11T07:45:00.000Z'))(new Date('1989-04-11T07:45:00.000Z')) // 11.990801576872535
diff('y')(new Date('1988-04-11T07:45:00.000Z'))(new Date('1989-04-11T07:45:00.000Z')) // 0.999315537303217
```

### compare

This compares two dates to see which is greater. If the second date is greater, 1 is returned. If the first date is greater, -1 is returned. And if they are the same date and time, 0 is returned. Examples:

```javascript
compare(new Date('1988-04-11T00:00:00.000Z'))(new Date('1989-04-11T00:00:00.000Z')) // 1
compare(new Date('1989-04-11T00:00:00.000Z'))(new Date('1988-04-11T00:00:00.000Z')) // -1
compare(new Date('1988-04-11T00:00:00.000Z'))(new Date('1988-04-11T00:00:00.000Z')) // 0
```

### isDate

This can be used to validate a date object (for instance before passing it into another function where it will error out). Returns true if the input is an instance of Date and if it also is a valid date (since not all Date objects are valid dates). Examples:

```javascript
isDate(new Date('1988-04-11T00:00:00.000Z')) // true
isDate(new Date()) // true
isDate('1988-04-11T00:00:00.000Z') // false
isDate(new Date('invalid date')) // false
```

### isLeapYear

Simple utility function used internally but exposed for consumption. Validates whether the given date is in a leap year.

```javascript
isLeapYear(new Date('1988-04-11T00:00:00.000Z')) // true
isLeapYear(new Date('1987-04-11T00:00:00.000Z')) // false
isLeapYear(new Date('2100-04-11T00:00:00.000Z')) // false
isLeapYear(new Date('2000-04-11T00:00:00.000Z')) // true
isLeapYear(new Date('2000-01-01T00:00:00.000Z')) // false
isLeapYearUTC(new Date('2000-01-01T00:00:00.000Z')) // true
```

## Differences between Moment and date-fns

[Moment](http://momentjs.com/) is the OG date library. It has a pretty jquery-esque approach, so you're forced to work with an overloaded and mutable `moment` object to do everything and then convert it to a date at the end, or whatever. Gregorian works with native dates and is completely mutable. Because Gregorian uses individual functions you get to import only what you need and nothing more.

[date-fns](https://date-fns.org) is more in line with gregorian but is larger in scope. APIs are a bit different though, for instance gregorian has currying built-in so it's trivial to make your own utility functions. IMO many of gregorian's APIs provide more utility and flexibility than date-fn's equivalents. Comparison functions (isBefore, isAfter) only return a boolean, while gregorian's compare returns a number indicating which date comes after. Difference functions return an integer while gregorian's return a float. There's very little support for UTC.

Both of the above libraries were clearly intended to be widely used and so represent many use cases. Gregorian is something I came up with for my personal projects, with a more focused set of features. You absolutely should use Moment or date-fns if it makes sense.

## License

Gregorian is freely distributable under the terms of the [MIT license](./LICENSE).

[license-image]: http://img.shields.io/badge/license-MIT-blue.svg?style=flat
[license-url]: LICENSE

_Each Gregorian release is linted and tested._

![Gregorian Calendar](./images/gregorian-calendar.jpg)
