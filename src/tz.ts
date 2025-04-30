import { TZDate } from '@date-fns/tz';
import { setHours } from 'date-fns';

const utc = new Date(Date.UTC(2025, 3, 25, 0));
console.log('UTC', utc.toISOString());

const tzDate = new TZDate(utc, 'Asia/Shanghai');
console.log('UTC to local', tzDate.toLocaleString());
const hour1 = setHours(tzDate, 1);
console.log(hour1.toLocaleString());
console.log(new Date(hour1).toISOString());
const hour0 = setHours(hour1, 0);
console.log(hour0.toLocaleString());
console.log(new Date(hour0).toISOString());
