import test from 'ava';
import sinon from 'sinon';
import { add } from '../src';

test.beforeEach((t) => {
  t.context.date = new Date('1988-04-11T00:00:00.000Z');
});

test('errors out if invalid date passed in', (t) => {
  t.throws(() => add('y')(1)('1988-04-11T00:00:00.000Z'), { instanceOf: TypeError });
});

test('errors out if invalid increment passed in', (t) => {
  t.throws(() => add('invalid')(1)(t.context.date), { instanceOf: TypeError });
});

test('uses the current time by default', (t) => {
  const clock = sinon.useFakeTimers(new Date('1985-05-22T00:00:00.000Z'));
  t.is(add('y')(1)().toISOString(), '1986-05-22T00:00:00.000Z');
  clock.restore();
});

test('adds years to the date', (t) => {
  t.is(add('y')(1)(t.context.date).toISOString(), '1989-04-11T00:00:00.000Z');
});

test('adds months to the date', (t) => {
  t.is(add('m')(1)(t.context.date).toISOString(), '1988-05-11T00:00:00.000Z');
});

test('adds weeks to the date', (t) => {
  t.is(add('w')(2)(t.context.date).toISOString(), '1988-04-25T00:00:00.000Z');
});

test('adds days to the date', (t) => {
  t.is(add('d')(1)(t.context.date).toISOString(), '1988-04-12T00:00:00.000Z');
});

test('adds hours to the date', (t) => {
  t.is(add('h')(3)(t.context.date).toISOString(), '1988-04-11T03:00:00.000Z');
});

test('adds minutes to the date', (t) => {
  t.is(add('t')(10)(t.context.date).toISOString(), '1988-04-11T00:10:00.000Z');
});

test('adds seconds to the date', (t) => {
  t.is(add('s')(8)(t.context.date).toISOString(), '1988-04-11T00:00:08.000Z');
});

test('adds milliseconds to the date', (t) => {
  t.is(add('l')(123)(t.context.date).toISOString(), '1988-04-11T00:00:00.123Z');
});

test('can be nested', (t) => {
  t.is(add('d')(5)(add('m')(11)(t.context.date)).toISOString(), '1989-03-16T00:00:00.000Z');
});

test('can be quasi-chained', (t) => {
  const addFn = add('y')(1)(add('h')(5));
  t.is(addFn(t.context.date).toISOString(), '1989-04-11T05:00:00.000Z');
});

test('can be composed', (t) => {
  const addYearFn = add('y');
  const addOneYearFn = addYearFn(1);
  t.is(addOneYearFn(t.context.date).toISOString(), '1989-04-11T00:00:00.000Z');
});

test('can be run with all arguments at once', (t) => {
  t.is(add('y', 1, t.context.date).toISOString(), '1989-04-11T00:00:00.000Z');
});

test('can be run with varying arguments', (t) => {
  t.is(add('y', 1)(t.context.date).toISOString(), '1989-04-11T00:00:00.000Z');
});

test('can handle leap years', (t) => {
  t.is(add('y')(5)(t.context.date).toISOString(), '1993-04-11T00:00:00.000Z');
});

test('can handle months of varying lengths', (t) => {
  t.is(add('m')(1)(t.context.date).toISOString(), '1988-05-11T00:00:00.000Z');
});

test('is timezone-agnostic', (t) => {
  t.is(add('h')(3)(t.context.date).toISOString(), '1988-04-11T03:00:00.000Z');
});
