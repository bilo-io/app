export const getTimeDifferences = (isoString: string): {
    seconds: number,
    minutes: number,
    hours: number,
    days: number,
    weeks: number,
    months: number,
    years: number
} => {
  const now = new Date();
  const date = new Date(isoString);
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  const years = Math.floor(diffInSeconds / (3600 * 24 * 365));
  const months = Math.floor(diffInSeconds / (3600 * 24 * 30));
  const weeks = Math.floor(diffInSeconds / (3600 * 24 * 7));
  const days = Math.floor(diffInSeconds / (3600 * 24));
  const hours = Math.floor(diffInSeconds / 3600);
  const minutes = Math.floor(diffInSeconds / 60);
  const seconds = diffInSeconds;

  return { days, hours, minutes, months, seconds, weeks, years };
};

export const timeAgoString = (isoString: string): string => {
  const timeDifferences = getTimeDifferences(isoString);

  if (timeDifferences.years > 0) {
    return `${timeDifferences.years} year${timeDifferences.years > 1 ? 's' : ''} ago`;
  }
  if (timeDifferences.months > 0) {
    return `${timeDifferences.months} month${timeDifferences.months > 1 ? 's' : ''} ago`;
  }
  if (timeDifferences.weeks > 0) {
    return `${timeDifferences.weeks} week${timeDifferences.weeks > 1 ? 's' : ''} ago`;
  }
  if (timeDifferences.days > 0) {
    return `${timeDifferences.days} day${timeDifferences.days > 1 ? 's' : ''} ago`;
  }
  if (timeDifferences.hours > 0) {
    return `${timeDifferences.hours} hour${timeDifferences.hours > 1 ? 's' : ''} ago`;
  }
  if (timeDifferences.minutes > 0) {
    return `${timeDifferences.minutes} minute${timeDifferences.minutes > 1 ? 's' : ''} ago`;
  }
  return `${timeDifferences.seconds} second${timeDifferences.seconds > 1 ? 's' : ''} ago`;
};

export const prettyPrintDate = (format: 'short' | 'medium' | 'long' | 'full', inputDate: Date | string): string => {
  const date = new Date(inputDate);


  // Define options based on the format string
  const options: Intl.DateTimeFormatOptions = {};

  switch (format) {
    case 'short':
      options.year = 'numeric';
      options.month = 'short';
      options.day = 'numeric';
      break;
    case 'medium':
      options.year = 'numeric';
      options.month = 'long';
      options.day = 'numeric';
      break;
    case 'long':
      options.weekday = 'long';
      options.year = 'numeric';
      options.month = 'long';
      options.day = 'numeric';
      break;
    case 'full':
      options.weekday = 'long';
      options.year = 'numeric';
      options.month = 'long';
      options.day = 'numeric';
      options.hour = 'numeric';
      options.minute = 'numeric';
      options.second = 'numeric';
      break;
    default:
      throw new Error(`Unsupported format: ${format}`);
  }

  return new Intl.DateTimeFormat('en-US', options).format(date);
};

export const printDate = (format: string, inputDate: Date | string): string => {
  const date = new Date(inputDate);

  // Helper function to add leading zeroes
  const padZero = (num: number, length = 2): string => num.toString().padStart(length, '0');

  const replacements: Record<string, string> = {
    // Months are zero-based
    'DD': padZero(date.getDate()),
    'HH': padZero(date.getHours()),
    'MM': padZero(date.getMonth() + 1),
    'SSS': padZero(date.getMilliseconds(), 3),
    'YYYY': date.getFullYear().toString(),
    'mm': padZero(date.getMinutes()),
    'ss': padZero(date.getSeconds()),
  };

  // Replace the format string placeholders with actual date values
  return format.replace(/YYYY|MM|DD|HH|mm|ss|SSS/g, match => replacements[match]);
};

