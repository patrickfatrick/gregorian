import test from 'ava';
import sinon from 'sinon';
import { endOfUTC } from '../src';

test.beforeEach((t) => {
  t.context.date = new Date('1988-04-11T08:23:15.347Z');
});

test('errors out if invalid date passed in', (t) => {
  t.throws(() => endOfUTC('y')('1988-04-11T00:00:00.000Z'), { instanceOf: TypeError });
});

test('uses the current time by default', (t) => {
  const clock = sinon.useFakeTimers(new Date('1985-05-22T00:00:00.000Z'));
  t.is(endOfUTC('y')().toISOString(), '1985-12-31T23:59:59.999Z');
  clock.restore();
});

test('sets the date/time to the end of the year', (t) => {
  t.is(endOfUTC('y')(t.context.date).toISOString(), '1988-12-31T23:59:59.999Z');
});

test('sets the date/time to the end of the month', (t) => {
  t.is(endOfUTC('m')(t.context.date).toISOString(), '1988-04-30T23:59:59.999Z');
});

test('sets the date/time to the end of the month (31 days)', (t) => {
  t.is(
    endOfUTC('m')(new Date('1988-05-11T08:23:15.347Z')).toISOString(),
    '1988-05-31T23:59:59.999Z',
  );
});

test('sets the date/time to the end of the month (February)', (t) => {
  t.is(
    endOfUTC('m')(new Date('1987-02-11T08:23:15.347Z')).toISOString(),
    '1987-02-28T23:59:59.999Z',
  );
});

test('sets the date/time to the end of the month (Leap Month)', (t) => {
  t.is(
    endOfUTC('m')(new Date('1988-02-11T08:23:15.347Z')).toISOString(),
    '1988-02-29T23:59:59.999Z',
  );
});

test('sets the date/time to the end of the week', (t) => {
  t.is(endOfUTC('w')(t.context.date).toISOString(), '1988-04-17T23:59:59.999Z');
});

test('sets the date/time to the end of the day', (t) => {
  t.is(endOfUTC('d')(t.context.date).toISOString(), '1988-04-11T23:59:59.999Z');
});

test('sets the date/time to the end of the hour', (t) => {
  t.is(endOfUTC('h')(t.context.date).toISOString(), '1988-04-11T08:59:59.999Z');
});

test('sets the date/time to the end of the minute', (t) => {
  t.is(endOfUTC('t')(t.context.date).toISOString(), '1988-04-11T08:23:59.999Z');
});

test('sets the date/time to the end of the second', (t) => {
  t.is(endOfUTC('s')(t.context.date).toISOString(), '1988-04-11T08:23:15.999Z');
});

test('can be composed', (t) => {
  const endOfUTCYearFn = endOfUTC('y');
  t.is(endOfUTCYearFn(t.context.date).toISOString(), '1988-12-31T23:59:59.999Z');
});

test('can be quasi-chained', (t) => {
  const endOfUTCFn = endOfUTC('y')(endOfUTC('h'));
  t.is(endOfUTCFn(t.context.date).toISOString(), '1988-12-31T23:59:59.999Z');
});
