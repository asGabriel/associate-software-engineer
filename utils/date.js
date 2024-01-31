const MILISECONDS_PER_SECOND = 1000;
const SECONDS_PER_MINUTE = 60;
const MINUTES_PER_HOUR = 60;
const HOUR_PER_DAY = 24;
const DAYS_PER_YEAR = 365;

const daysUntilBirthDate = (birthDate) => {
  const birthDateWithCurrentYear = new Date(birthDate).setFullYear(
    new Date().getFullYear()
  );

  const days = Math.round(
    (new Date() - new Date(birthDateWithCurrentYear)) /
      (MILISECONDS_PER_SECOND *
        SECONDS_PER_MINUTE *
        MINUTES_PER_HOUR *
        HOUR_PER_DAY)
  );

  return days < 0 ? -days : days;
};

const convertMilissecondsToDays = (milissecondsDate) => {
  const days =
    new Date(milissecondsDate) /
    (MILISECONDS_PER_SECOND *
      SECONDS_PER_MINUTE *
      MINUTES_PER_HOUR *
      HOUR_PER_DAY) /
    DAYS_PER_YEAR;

  return days;
};

const convertInLegibleData = (date) => {
  // format: YYYY-MM-DD
  const formatedDate = new Intl.DateTimeFormat("pt-br", {
    dateStyle: "medium",
  }).format(new Date(date));

  return formatedDate;
};

export { daysUntilBirthDate, convertMilissecondsToDays, convertInLegibleData };
