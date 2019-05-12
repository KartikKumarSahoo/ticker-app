export const timeSince = timestamp => {
  const date = new Date(timestamp);
  const seconds = Math.floor((new Date() - date) / 1000);

  var interval = Math.floor(seconds / 31536000); // Interval in years
  if (interval > 1) {
    return '19 Dec 2019 12:30 PM';
  }

  interval = Math.floor(seconds / 86400); // Interval in days
  if (interval > 2) {
    return '19 Dec 12:30 PM';
  }
  if (interval > 1) {
    return 'Yesterday 12:30 PM';
  }

  // interval = Math.floor(seconds / 3600); // Interval in hours
  // if (interval > 1) {
  //   return interval + " hours";
  // }
  
  interval = Math.floor(seconds / 60); // Interval in minutes
  if (interval > 30) {
    return '12:30 PM';
  }
  if (interval > 1) {
    return interval + ' minutes ago';
  }
  if (seconds > 5) {
    return seconds + ' seconds ago';
  }
  if (seconds > 1) {
    return 'a few seconds ago';
  }
  return 'now';
}