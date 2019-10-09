import { monthsPrefix, months } from './months';

// date in prefixMonth format like 20 Oct 1997
const dateFormatDDMMMYYYY = date => {
  const d = new Date(date);
  return `${d.getDate()} ${monthsPrefix[d.getMonth()]} ${d.getFullYear()}`;
};

// date in full format like 20 October 1997
const dateFormatFull = date => {
  const d = new Date(date);
  return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
};

// get time format hh:mm
const timeFormatHHMMAMPM = time => {
  const date = new Date(time);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';

  let hh = hours % 12;
  hh = hh ? hh : 12; // the hour '0' should be '12'
  const mm = minutes < 10 ? `0${minutes}` : minutes;
  return `${hh}:${mm} ${ampm}`;
};

export default {
  dateFormatDDMMMYYYY,
  dateFormatFull,
  timeFormatHHMMAMPM
};
