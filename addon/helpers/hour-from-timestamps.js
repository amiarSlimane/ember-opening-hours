import { helper } from '@ember/component/helper';

export default helper(function hourFromTimestamps([timestamp]/*, named*/) {
  console.log('timestamp',timestamp);
  let date = new Date(timestamp);
  console.log('date',date);
  const withPmAm = date.toLocaleTimeString('en-US', {
    // en-US can be set to 'default' to use user's browser settings
    hour: '2-digit',
    minute: '2-digit',
  });

  const hoursAndMinutes = date.getHours() + ':' + date.getMinutes();
  return withPmAm;
});
