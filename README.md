#Gregorian
"A micro library for converting and displaying dates".

----- CURRENTLY A WORK IN PROGRESS AND NOT RECOMMENDED FOR USE JUST YET. -----

>reform |riˈfôrm|  
>verb [ with obj. ]  
>1 make changes in (something, typically a social, political, or economic institution or practice) in order to improve it: an opportunity to reform and restructure an antiquated schooling model._

##What does it do?
Gregorian is a wrapper for the native Javascript `Date` object that allows you to customize how to display and write dates pretty minutely.

You can take the same date object and express it like:

- `'April 11, 1988'`
- `'1988-04-11'`
- `'4/11/88'`
- `'Monday, 11 Apr 1988 12:00:00.000AM UTC 00:00'`
- `'Monday'`
- `'Mon, April 11'`
- `'1988-04-11T00:00:00.000Z' // ISO string`
- `'Mon, 11 Apr 1988 00:00:00 GMT' // UTC string`
- `576720000000 // UNIX time`
- and more!

##What doesn't it do?
This does not accept native language input. For instance `gregorian.reform('next Tuesday')` will return a TypeError.
It accepts anything Javascript natively accepts when creating a date object. `gregorian.reform('April 11, 1988 00:00 UTC')` is valid as is `gregorian.reform('04/11/1988')`.

This does not deal with localization. The library is currently in English.

Currently this does not convert to a 24-hour clock. This will be implemented soon, however.

##Install
- `npm install gregorian --save`
- `jspm install npm:gregorian`

You can install it into your site using `<script src="./node_modules/gregorian/dist/gregorian.min.js"></script>` as usual, or you can include it in a concatenated build using `require('./node_modules/gregorian')`, etc.

##Usage
To create a gregorian object, call `gregorian.reform()` with either a date object or a date-string. For instance `gregorian.reform('2015-10-31')` or `gregorian.reform(new Date())`.

But that's kind of boring. To do stuff with it, chain a `.to()` method to it, passing a string for the format you'd like to use. For instance `gregorian.reform('2015-10-31').to('unix')` or `gregorian.reform('2015-10-31').to('iso')`. The will return the converted string or else the number of milliseconds passed since January 1, 1970 in the case of `'unix'`.

###Accepted formats
The following are plug-n-play formats that are simply wrappers for existing Javascript Date methods and should not be used with any other formats. The `-short` methods extend the existing methods by removing the time from the output.

- `'unix'`
- `'utc'`
- `'utc-short'`
- `'iso'`
- `'iso-short'`

The following are components you can use to construct a format string like `'mmm/ddd/yyyy'` or `'DDD, MMM yyyy-mm-dd hhh:ttt.mllap zz'`.

- `'yyyy // four-digit year 2015`
- `'yy' // two-digit year (20)15`
- `'DDD' // full day of the week Sunday-Saturday`
- `'ddd' // two-digit date of the month 01-31`
- `'DD' // abbreviated day of the week Sun-Sat`
- `'dd' // date of the month with no leading zeros 1-31`
- `'MMM' // full month January-December`
- `'MM' // abbreviated month Jan-Dec`
- `'mmm' // two-digit month 00-12`
- `'mm' // month with no leading zeros 1-12`
- `'hhh' // two-digit hours 01-12`
- `'hh' // hour with no leading zeros 1-12`
- `'ttt' // two-digit minutes 00-59`
- `'tt' // minutes with no leading zeros 0-59`
- `'AP' // AM or PM`
- `'ap', // am or pm`
- `'mll' // milliseconds 000-999`
- `'ml' // milliseconds with no leading zeros 0-999`
- `'zz' // timezone offset UTC -6:00`

###Adding and subtracting
You can add amounts to a gregorian object like `gregorian.reform('2015-10-31').add(1, 'd')` or `gregorian.reform('2015-10-31').subtract(1, 'm')`.

This will return a new gregorian object that can then be formatted into a string as usual `gregorian.reform('2015-10-31').subtract(1, 'm').to('iso')`

Accepted increments you can use for adding and subtracts are

- `ms // 1 millisecond`
- `s // 1 second (1000 milliseconds)`
- `min // 1 minute (60000 milliseconds)`
- `h // 1 hour (3600000 milliseconds)`
- `d // 1 day (86400000 milliseconds)`
- `w // 1 week (604800000 milliseconds)`
- `m // 1 month (varies; position will be on the same day of the month)`
- `y // 1 year (31536000000 milliseconds)`

It's not recommended to add or subtract more than 12 months at a time.
Adding and subtracting currently does not handle leap days either, so you'll need to add or subtract a day to make up for that. I promise this will be addressed before 2016. ;)

##Why not use MomentJS?
[Moment](http://momentjs.com/) is awesome and I personally use it in a lot of projects. This is not intended to replace Moment by any means, it's simply intended to provide a more focused set of features at a fraction of the weight. Moment's unminified .js file is 104KB while Gregorian's is 16KB. If you need the date manipulation or the other many awesome features found in Moment, you're better off using that of course!

## What's with the name?
![Pope Gregory XIII](./images/gregory.jpg)

Gregorian is named after the calendar introduced in 1582 by under Pope Gregory XIII's papacy, the calendar we currently use today. It was a reform of the Julian calendar to make the year 0.002% shorter and also slightly changed the leap year schedule to omit 3 leap days every 400 years.
