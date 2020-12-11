import test from 'ava';
import sinon from 'sinon';
import { reformWithLocale } from '../src';
import { fr, pt, de } from '../locale';

test.beforeEach((t) => {
  t.context.locale = fr;
});

test('errors out if invalid date passed in', (t) => {
  t.throws(
    () => reformWithLocale(t.context.locale)('E, N o, Y H:T:S.L')('1988-04-11T00:00:00.000Z'),
    TypeError,
  );
});

test('uses the current time by default', (t) => {
  const clock = sinon.useFakeTimers(new Date('1985-05-22T00:00:00.000Z'));
  t.is(
    reformWithLocale(t.context.locale)('E, N o, Y H:T:S.L')(),
    'mardi, mai 21e, 1985 17:00:00.000',
  );
  clock.restore();
});

test('uses English by default if locale is not supported', (t) => {
  t.context.locale = undefined;
  const reformWithLocaleFn = reformWithLocale(t.context.locale)('E, N o, Y H:T:S.L');
  t.is(
    reformWithLocaleFn(new Date('1988-04-11T12:45:00.000Z')),
    'Monday, April 11th, 1988 05:45:00.000',
  );
});

test('can be composed', (t) => {
  t.context.locale = pt;
  const reformWithLocaleFn = reformWithLocale(t.context.locale)('E, N o, Y H:T:S.L');
  t.is(
    reformWithLocaleFn(new Date('1988-04-11T12:45:00.000Z')),
    'segunda-feira, abril 11a, 1988 05:45:00.000',
  );
});

test('can be run with all arguments at once', (t) => {
  t.context.locale = de;
  t.is(
    reformWithLocale(t.context.locale, 'E, N o, Y H:T:S.L z', new Date('1988-04-11T12:45:00.000Z')),
    'Montag, April 11th, 1988 05:45:00.000 UTC-07:00',
  );
});
