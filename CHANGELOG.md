## Changelog

#### v3.0

This is a huge rewrite of Gregorian. It honestly might be best to look at the readme to see what all changed. The gist of it is that now Gregorian outputs individual curried functions instead of an object wrapper. This means the function names have changed to be less generic and prevent collisions with any functions you might be using, and it also means several APIs have been removed entirely: `reagent` (no longer needed because the validite of the date is checked in the function), `recite` (no longer needed because the functions return a new `Date` where it makes sense. `reform` still exists but it provides the same functionality `to` did previously.

There's no wrapping of dates or strings anymore, each function should have a valid `Date` passed in (or the default is the current time).

Moreover, some of the format strings have changed to be much simpler, completely avoiding the use of repeated letters.

#### v2.0

- Breaking change: `+` is no longer the default delimiter in the `to()` method. It is now `|`.
- Breaking change: `zz` in the `to()` method now returns something like `UTC+07:00` or `UTC-07:00`. Hence why the default delimiter was changed.
- Breaking change: `get('z')` will now return the negative of what it formerly did. UTC-07:00 will now return a more sensible `-7`.

#### v1.6.3

- `D` parameter added to `set()` and `setUTC()`.

#### v1.6

- New `get()` and `getUTC()` methods.

#### v1.5

- New UTC-based manipulation functions where it makes sense (`setUTC()`, `restartUTC()`).
- Converted the module setup to CommonJS to work with Node out of the box. Sorry ES6 modules :(
- Testing has been improved with many more descriptions that indicate what's being tested.