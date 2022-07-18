const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

export function sortDaysArray(array) {
  return array.sort(sortDays);
}

const sortDays = function (a, b) {
  let aIndex = days.indexOf(a);
  let bIndex = days.indexOf(b);
  return aIndex < bIndex ? -1 : 1;
};
