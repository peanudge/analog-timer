const ANGLE_PER_HOUR = 360 / 12;
const ANGLE_PER_MINUTE = 360 / 60;
const ANGLE_PER_SECOND = 360 / 60;

export const convertTimeToHourDeg = (hours: number, minutes: number = 0) => {
  return ANGLE_PER_HOUR * hours + ANGLE_PER_HOUR * (minutes / 60);
};

export const convertTimeToMinuteDeg = (
  minutes: number,
  seconds: number = 0
) => {
  return ANGLE_PER_MINUTE * minutes + ANGLE_PER_MINUTE * (seconds / 60);
};

export const convertTimeToSecondDeg = (seconds: number) => {
  return ANGLE_PER_SECOND * seconds;
};
