
/**
 * Returns the name of the month given an index.
 * @param index - Must be a number from 0 to 11.
 * @returns {string}
 */
export const useGetMonthByName = (index) => {

  const months = [
    'enero',
    'febrero',
    'marzo',
    'abril',
    'mayo',
    'junio',
    'julio',
    'agosto',
    'septiembre',
    'octubre',
    'noviembre',
    'diciembre',
  ];

  return months[index];
};

/**
 * Returns a number from 0 to 12 representing the 12 hours format.
 * @param hours - Must be a number from 0 to 24.
 * @returns {number|number}
 */
export const turn24HoursTo12 = (hours) => hours % 12 || 12;

/**
 * Returns the argument with a zero before if is lower than 10 otherwise returns the same number.
 * Util when formatting from 24 to 12 hours.
 * @param arg - Minutes or hours.
 * @returns {string|*}
 */
export const ensure00 = (arg) => (arg < 10 ? '0' + arg : arg);

/**
 * Returns AM if hours is lower than 12 or PM otherwise.
 * Util when formatting from 24 to 12 hours.
 * @param hours - The hours.
 * @returns {string}
 */
export const getAMorPM = (hours) => (hours < 12 ? 'AM' : 'PM');

/**
 * Returns the elapsed time in seconds, minutes, hours, days, weeks, months or years comparing now with the given date.
 * @param date - The date to compare.
 * @param conf - An object to set the texts of the result. The object has the following structure
 * {
 *    seconds: "s",
 *     minutes: "m",
 *     hours: "h",
 *     days: "d",
 *     weeks: "w",
 *     months: "months",
 *     years: "y"
 * }
 * @returns {string}
 */
export const useGetElapsedTime = (date, conf) => {
  const now = new Date();
  const timeDifference = now - date;

  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);

  let result;
  let text;

  if (seconds < 60) {
    result = seconds;
    text = (conf && conf['seconds']) || 'seconds';
  } else if (minutes < 60) {
    result = minutes;
    text = (conf && conf['minutes']) || 'minutes';
  } else if (hours < 24) {
    result = hours;
    text = (conf && conf['hours']) || 'hours';
  } else if (days < 7) {
    result = days;
    text = (conf && conf['days']) || 'days';
  } else if (weeks < 4) {
    result = weeks;
    text = (conf && conf['weeks']) || 'weeks';
  } else if (months < 12) {
    result = months;
    text = (conf && conf['months']) || 'months';
  } else {
    result = years;
    text = (conf && conf['years']) || 'years';
  }
  return `${result} ${text}`;
};

export const isExpired = (date) => new Date() >= date;
