import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);

const utcDate = new Date(Date.UTC(2025, 3, 25, 0));
console.log('UTC', utcDate.toISOString());

const tzDate = dayjs.tz('2025-04-25T08:00:00', 'Asia/Shanghai');
console.log(tzDate.toString());

const hour1 = tzDate.set('hour', 1);
console.log(hour1.toString());
console.log(hour1.toISOString());

const hour0 = tzDate.set('hour', 0);
console.log(hour0.toString());
console.log(hour0.toISOString());
