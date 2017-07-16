import test from 'ava';
import sinon from 'sinon';
import { reformWithOverrides } from '../src';

test.beforeEach(t => {
  t.context.overridesComplete = {
    daysShort: ['di', 'lun', 'mar', 'mer', 'jeu', 'ven', 'sam'],
    daysLong: ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'],
    monthsShort: [
      'janv',
      'févr',
      'mars',
      'avril',
      'mai',
      'juin',
      'juil',
      'août',
      'sept',
      'oct',
      'nov',
      'déc',
    ],
    monthsLong: [
      'janvier',
      'février',
      'mars',
      'avril',
      'mai',
      'juin',
      'juillet',
      'août',
      'septembre',
      'octobre',
      'novembre',
      'décembre',
    ],
    ordinals: {
      1: 'er',
      default: 'e',
    },
    periods: ['am', 'pm'],
    utc: 'UTC',
    delimiter: '*',
  };
  t.context.overridesIncomplete = {
    daysLong: ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'],
  };
});

test('errors out if invalid date passed in', t => {
  t.throws(
    () =>
      reformWithOverrides(t.context.overridesComplete)('E, N o, Y H:T:S.L')(
        '1988-04-11T00:00:00.000Z',
      ),
    TypeError,
  );
});

test('uses the current time by default', t => {
  const clock = sinon.useFakeTimers(new Date('1985-05-22T00:00:00.000Z'));
  t.is(
    reformWithOverrides(t.context.overridesComplete)('E, N o, Y H:T:S.L')(),
    'mardi, mai 21e, 1985 17:00:00.000',
  );
  clock.restore();
});

test('can be composed', t => {
  const reformWithOverridesFn = reformWithOverrides(t.context.overridesComplete)(
    'E, N o, Y H:T:S.L',
  );
  t.is(
    reformWithOverridesFn(new Date('1988-04-11T12:45:00.000Z')),
    'lundi, avril 11e, 1988 05:45:00.000',
  );
});

test('can be run with all arguments at once', t => {
  t.is(
    reformWithOverrides(
      t.context.overridesComplete,
      'E, N o, Y H:T:S.L z',
      new Date('1988-04-11T12:45:00.000Z'),
    ),
    'lundi, avril 11e, 1988 05:45:00.000 UTC-07:00',
  );
});

test('can be run with an incomplete override list', t => {
  t.is(
    reformWithOverrides(
      t.context.overridesIncomplete,
      'E, N o, Y H:T:S.L z',
      new Date('1988-04-11T12:45:00.000Z'),
    ),
    'lundi, April 11th, 1988 05:45:00.000 UTC-07:00',
  );
});

test('allows for the customization of the delimiter used', t => {
  t.is(
    reformWithOverrides(t.context.overridesComplete)('E, n Y-m-d H:T.L*p')(new Date('09/25/2015')),
    'vendredi, sept 2015-9-25 00:00.000am',
  );
});
