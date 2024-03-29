import test from 'ava';
import sinon from 'sinon';
import { set } from '../src';

test.beforeEach((t) => {
  t.context.date = new Date('1988-04-11T00:00:00.000Z');
});

test('errors out if invalid date passed in', (t) => {
  t.throws(() => set('y', 1989)('beep'), { instanceOf: TypeError });
});

test('uses the current time by default', (t) => {
  const clock = sinon.useFakeTimers(new Date('1985-05-22T00:00:00.000Z'));
  t.is(set('y', 1989)().toISOString(), '1989-05-22T00:00:00.000Z');
  clock.restore();
});

test('sets the year to the specified year', (t) => {
  t.is(set('y', 1989)(t.context.date).toISOString(), '1989-04-11T00:00:00.000Z');
});

test('sets the month to the specified month', (t) => {
  t.is(set('m', 3)(t.context.date).toISOString(), '1988-03-11T00:00:00.000Z');
});

test('sets the week to the specified week', (t) => {
  t.is(set('w', 15)(t.context.date).toISOString(), '1988-04-11T00:00:00.000Z');
});

test('sets the date to the specified date', (t) => {
  t.is(set('d', 1)(t.context.date).toISOString(), '1988-04-02T00:00:00.000Z');
});

test('sets the day to the specified day of the week', (t) => {
  t.is(set('e', 1)(t.context.date).toISOString(), '1988-04-11T00:00:00.000Z');
});

test('sets the hour to the specified hour', (t) => {
  t.is(set('h', 3)(t.context.date).toISOString(), '1988-04-10T10:00:00.000Z');
});

test('sets the minute to the specified minute', (t) => {
  t.is(set('t', 8)(t.context.date).toISOString(), '1988-04-11T00:08:00.000Z');
});

test('sets the second to the specified second', (t) => {
  t.is(set('s', 8)(t.context.date).toISOString(), '1988-04-11T00:00:08.000Z');
});

test('sets the millisecond to the specified millisecond', (t) => {
  t.is(set('l', 123)(t.context.date).toISOString(), '1988-04-11T00:00:00.123Z');
});

test('can be nested', (t) => {
  t.is(set('d', 5)(set('m', 10)(t.context.date)).toISOString(), '1988-10-06T00:00:00.000Z');
});

test('can be quasi-chained', (t) => {
  const setFn = set('d', 5)(set('m', 10));
  t.is(setFn(t.context.date).toISOString(), '1988-10-06T00:00:00.000Z');
});

test('can be composed', (t) => {
  const setYearFn = set('y');
  const set1989Fn = setYearFn(1989);
  t.is(set1989Fn(t.context.date).toISOString(), '1989-04-11T00:00:00.000Z');
});

test('can be run with all arguments at once', (t) => {
  t.is(set('y', 1989, t.context.date).toISOString(), '1989-04-11T00:00:00.000Z');
});

test('can be run with varying arguments', (t) => {
  t.is(set('y', 1989)(t.context.date).toISOString(), '1989-04-11T00:00:00.000Z');
});

test('can handle leap years', (t) => {
  t.is(set('d', 29)(t.context.date).toISOString(), '1988-04-30T00:00:00.000Z');
});

test('can handle arguments of varying lengths', (t) => {
  t.is(set('m', 2)(t.context.date).toISOString(), '1988-02-11T00:00:00.000Z');
});

test('is is timezone-agnostic', (t) => {
  t.is(set('h', 3)(t.context.date).toISOString(), '1988-04-10T10:00:00.000Z');
});
