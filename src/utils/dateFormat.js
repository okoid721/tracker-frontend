import moment from 'moment';

const dateFormat = (date) => {
  return moment(date).format('YYYY-MM-DD');
};

export default dateFormat;
