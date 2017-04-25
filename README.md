# Gregorian

_The tiny, composable, modular date library._

[![Circle CI](https://circleci.com/gh/patrickfatrick/gregorian.svg?style=shield)](https://circleci.com/gh/patrickfatrick/gregorian)
[![codecov.io](https://codecov.io/github/patrickfatrick/gregorian/coverage.svg?branch=master)](https://codecov.io/github/patrickfatrick/gregorian?branch=master)
[![bitHound Score](https://www.bithound.io/github/patrickfatrick/gregorian/badges/score.svg)](https://www.bithound.io/github/patrickfatrick/gregorian)
[![bitHound Dependencies](https://www.bithound.io/github/patrickfatrick/gregorian/badges/dependencies.svg)](https://www.bithound.io/github/patrickfatrick/gregorian/master/dependencies/npm)
[![MIT License][license-image]][license-url]

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

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
$ npm install gregorian --save
$ yarn add gregorian
$ jspm install npm:gregorian
$ bower install gregorian
$ git clone git@github.com:patrickfatrick/gregorian.git
```

You can install it into your site using `<script src="./gregorian/dist/gregorian.min.js"></script>` as usual, or you can include it as a module using `require('gregorian').reform` or `import { reform } from 'gregorian'`, etc., with your favorite module loader.

To run the tests, `$ yarn test`.

## Basic Usage

Each function in Gregorian can be imported and used individually to save you a few kilobytes in your javascript bundle.

```javascript
import { reform } from 'gregorian'
```

Each function has a similar signature. For instance, `reform(/* Arguments */)(/* Date Object */)`. This makes all of the functions composable, allowing you to basically create a custom function that can be run with different dates very easily.

```javascript
const reformFnUS = reform('M/D/Y')
const reformFnEurope = reformFn('D/M/Y')
const string1 = reformFnUS(new Date('1988-04-11T12:45:00.000Z')) // 04/11/1988
const string2 = reformFnEurope(new Date('1988-04-11T12:45:00.000Z')) // 11/04/1988 
```

But you can also run each function with all arguments

```javascript
addTime('y', 1, new Date('1988-04-11T12:45:00.000Z')) // 1989-04-11T12:45:00.000Z
```

Or any combination in between

```javascript
const addYearFn = addTime('y')
addYearFn(1, new Date('1988-04-11T12:45:00.000Z')) // 1989-04-11T12:45:00.000Z
const addOneYearFn = addYearFn(1)
addOneYearFn(new Date('1988-04-11T12:45:00.000Z')) // 1989-04-11T12:45:00.000Z
```

By default if no date is passed, these functions will use the current time via `new Date()`. You should always run the function or pass in null though, like this:

```javascript
addTime('y')(1)() // Correct
addTime('y', 1, null) // Correct
addTime('y', 1) // Wrong, this will return a function
addTime('y')(1) // Wrong, this will return a function
```

For even greater flexibility you can also pass another function as the last argument rather than a date. This allows you to compose seriously custom functions that can be applied to any number of Date objects easily. Please note that the functions are called in a left-right manner, so in the following example `setUTC` would be called before `resetUTC`.

```javascript
const setTimeTo6am = setUTC('h', 6)(resetUTC('h'))
setTimetTo6am(new Date('1988-04-11T12:45:00.000Z')) // 1988-04-11T06:00:00.000Z
```

## Outputting a formatted date for display

To create a pretty date string, use the `reform` function with a format strange as the only argument. This returns a function that can then be called on a Date object.

```javascript
reform('M/D/Y')(new Date('1988-04-11T12:45:00.000Z')) // 04/11/1988
```

### Accepted formats

The following are plug-n-play formats that are simply wrappers for existing Javascript `Date` methods and should not be used with any other formats. The `-short` methods extend the existing methods by removing the time from the output.

```javascript
// Given the date 1988-04-11T12:45:00.000Z, assuming a locale in Eastern Standard Time:

'unix' // 576747900000
'utc-short' // Mon, 11 Apr 1988
'utc' // Mon, 11 Apr 1988 12:45:00 GMT
'iso-short' // 1988-04-11
'iso' // 1988-04-11T12:45:00.000Z
```

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
**NOTE:** Any format strings directly touching each other should be separated with a `|` character. This delimiter will be removed from the final string. This allows us to do some extra fancy things like mix in real words with the format strings without conflicts.

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

## Manipulation

#### Adding and subtracting

You can manipulate dates like 

```javascript
addTime('d')(5)(new Date('2015-10-31')) // 2015-11-05
subtractTime('m')(7)(new Date('2015-10-31')) // 2015-03-31
```

There's also methods for combining multiple add and subtract operations:

```javascript
addTimeSequence([
  [ 'y', 1 ],
  [ 'm', 3 ],
  [ 'd', -1 ]
])(new Date('2015-10-31')) // 2017-02-01

subtractTimeSequence([
  [ 'y', 1 ],
  [ 'm', 3 ],
  [ 'y', 1 ]
])(new Date('2015-10-31')) // 2013-07-31
```

This accepts an array or arrays

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
setLocal('d')(5)(new Date('2015-10-31')) // 2015-10-05 05:00:00.000 UTC
setLocal('m')(7)(new Date('2015-10-31')) // 2015-07-31 05:00:00.000 UTC
```

There is also a method for setting with UTC time.

```javascript
setUTC('d')(5)(new Date('2015-10-31')) // 2015-10-05 00:00:000 UTC
setUTC('m')(7)(new Date('2015-10-31')) // 2015-07-31 00:00:000 UTC
```

But wait, there's more! You can also run multiple set operations with one function call like so

```javascript
setUTCGroup({ y: 1985, m: 5, d: 22 })(new Date('2015-10-31')) // 1985-05-22
setLocalGroup({ y: 1985, m: 5, d: 22 }, new Date('2015-10-31')) // 1985-05-21
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
getLocal('h')(new Date('2015-10-31T00:00:00.000Z')) // 1
getLocal('m')(new Date('2015-10-31T00:00:00.000Z')) // 10
```

There is also a method for getting the UTC value.

```javascript
getUTC('h')(new Date('2015-10-31T00:00:00.000Z')) // 0
getUTC('m')(new Date('2015-10-31T00:00:00.000Z')) // 9
```

And you can also get multiple increments at the same time, like so:

```javascript
getUTCGroup([ 'h', 'y', 'm' ])(new Date('2015-10-31T00:00:00.000Z')) // [ 0, 2015, 10 ]
getLocalGroup([ 'm', 'd' ])(new Date('2015-10-31T00:00:00.000Z')) // [ 10, 30 ]
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
resetLocal('s')(new Date('April 11, 1988 8:23:15.123')) // '1988-04-11 13:23:15 UTC'
resetLocal('t')(new Date('April 11, 1988 8:23:15.123')) // '1988-04-11 13:23:00 UTC'
resetLocal('h')(new Date('April 11, 1988 8:23:15.123')) // '1988-04-11 13:00:00 UTC'
resetLocal('d')(new Date('April 11, 1988 8:23:15.123')) // '1988-04-11 05:00:00 UTC'
resetLocal('w')(new Date('April 11, 1988 8:23:15.123')) // '1988-04-10 05:00:00 UTC'
resetLocal('m')(new Date('April 11, 1988 8:23:15.123')) // '1988-04-01 05:00:00 UTC'
resetLocal('y')(new Date('April 11, 1988 8:23:15.123')) // '1988-01-01 05:00:00 UTC'
```

There is also a method for reset in UTC.

```javascript
resetUTC('d')(new Date('2015-10-31T03:42:877Z')) // 2015-10-31 00:00:000 UTC
resetUTC('m')(new Date('2015-10-31T03:42:877Z')) // 2015-10-01 00:00:000 UTC
// etc.
```

## Why not use MomentJS or date-fns?

[Moment](http://momentjs.com/) is awesome but is also much bigger in scope. It also forces you to use a special `moment` object which is mutable. Gregorian works with native dates and outputs new dates each time. Because Gregorian uses individual functions you get to import only what you need and nothing more.

[date-fns](https://date-fns.org) is also awesome and much more in line with Gregorian's intentions at this point. That said it's also larger in scope, but like Gregorian you can import individual functions to reduce overhead. The main benefit to Gregorian is that if you're using the library the traditional way by adding it to the global scope via `<script>`, the entire library for Gregorian is much, much smaller, totaling out to less than 10KB compared with date-fns at over 60KB for a lot of functions you won't be using. date-fns also continues the unfortunate tradition of mixing zero-indexed with one-indexed methods in ways that don't make much practical sense, and which Gregorian does not, but that may be a benefit or a hindrance depending on your use case. Lastly, the functions in date-fns are not designed with composability in mind. So if you'd like to store custom functions to run on different dates, you would be out of luck with date-fns.

Both of the above libraries were clearly intended to be widely used and so represent many use cases. Gregorian is something I came up with for my personal projects, with a more focused set of features. You absolutely should use Moment or date-fns if it makes sense.

## License

Gregorian is freely distributable under the terms of the [MIT license](./LICENSE).

[license-image]: http://img.shields.io/badge/license-MIT-blue.svg?style=flat
[license-url]: LICENSE

_Each Gregorian release is linted and tested._

![Gregorian Calendar](./images/gregorian-calendar.jpg)
