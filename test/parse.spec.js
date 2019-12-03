import test from 'ava';
import { parse } from '../src';

test('parses a full ISO-8601 string in UTC', t => {
  t.is(
    parse('2019-08-16T22:55:00Z').toISOString(),
    new Date(Date.UTC(2019, 7, 16, 22, 55, 0, 0)).toISOString(),
  );
});

test('parses a full ISO-8601 string with offset', t => {
  t.is(
    parse('2019-08-16T22:55:00-0700').toISOString(),
    new Date(2019, 7, 16, 22, 55, 0, 0).toISOString(),
  );
});

test('parses a full ISO-8601 string with offset with colon (:)', t => {
  t.is(
    parse('2019-08-16T22:55:00-07:00').toISOString(),
    new Date(2019, 7, 16, 22, 55, 0, 0).toISOString(),
  );
});

test('parses a full ISO-8601 string with no timezone', t => {
  t.is(
    parse('2019-08-16T22:55:00').toISOString(),
    new Date(2019, 7, 16, 22, 55, 0, 0).toISOString(),
  );
});

test('parses a partial ISO-8601', t => {
  t.is(parse('2019-08-16').toISOString(), new Date(2019, 7, 16, 0, 0, 0, 0).toISOString());
});
