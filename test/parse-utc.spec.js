import test from 'ava';
import { parseUTC } from '../src';

test('parses a full ISO-8601 string in UTC', (t) => {
  t.is(
    parseUTC('2019-08-16T22:55:00Z').toISOString(),
    new Date(Date.UTC(2019, 7, 16, 22, 55, 0, 0)).toISOString(),
  );
});

test('parses a full ISO-8601 string with offset', (t) => {
  t.is(
    parseUTC('2019-08-16T22:55:00-0700').toISOString(),
    new Date(2019, 7, 16, 22, 55, 0, 0).toISOString(),
  );
});

test('parses a full ISO-8601 string with offset with colon (:)', (t) => {
  t.is(
    parseUTC('2019-08-16T22:55:00-07:00').toISOString(),
    new Date(2019, 7, 16, 22, 55, 0, 0).toISOString(),
  );
});

test('parses a full ISO-8601 string with no timezone', (t) => {
  t.is(
    parseUTC('2019-08-16T22:55:00').toISOString(),
    new Date(2019, 7, 16, 15, 55, 0, 0).toISOString(),
  );
});

test('parses an ISO-8601 string with milliseconds', (t) => {
  t.is(
    parseUTC('2019-10-23T05:28:41.506245').toISOString(),
    new Date(Date.UTC(2019, 9, 23, 5, 28, 41, 506.245)).toISOString(),
  );
});

test('parses an ISO-8601 string with milliseconds (rounding up)', (t) => {
  t.is(
    parseUTC('2019-10-23T05:28:41.506789').toISOString(),
    new Date(Date.UTC(2019, 9, 23, 5, 28, 41, 506.789)).toISOString(),
  );
});

test('parses an ISO-8601 string with milliseconds in hundredths', (t) => {
  t.is(
    parseUTC('2019-10-23T05:28:41.57').toISOString(),
    new Date(Date.UTC(2019, 9, 23, 5, 28, 41, 570)).toISOString(),
  );
});

test('parses an ISO-8601 string with less than 100 milliseconds', (t) => {
  t.is(
    parseUTC('2020-04-29T18:47:45.042003').toISOString(),
    new Date(Date.UTC(2020, 3, 29, 18, 47, 45, 42.003)).toISOString(),
  );
});

test('parses a partial ISO-8601', (t) => {
  t.is(parseUTC('2019-08-16').toISOString(), new Date(2019, 7, 15, 17, 0, 0, 0).toISOString());
});
