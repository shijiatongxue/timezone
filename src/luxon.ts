import { DateTime } from 'luxon';

const utcDate = new Date(Date.UTC(2025, 3, 25, 0));
console.log('UTC', utcDate.toISOString());

// 在区域中创建时区
const localDate = DateTime.fromJSDate(utcDate, { zone: 'Asia/Shanghai' });
console.log(localDate.toString());

const hour1 = localDate.set({ hour: 1 });
console.log(hour1.toString());
console.log(hour1.toJSDate().toISOString());

const hour0 = hour1.set({ hour: 0 });
console.log(hour0.toString());
console.log(hour0.toJSDate().toISOString());
