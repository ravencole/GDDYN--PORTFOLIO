function formatDate( rawDate ) {

  var Months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec',
  ];

  rawDate = rawDate.split(':');

  var date = { 
    year : rawDate[0], 
    month: rawDate[1], 
    day  : rawDate[2] 
  };
  
  var re = /0(\d)/;
  
  if (re.test( date.month ))
    date.month = date.month.replace(re, '$1');
  
  Number(date.month);
  
  date.month = Months[ date.month - 1 ];
  
  return date.month + ' ' + date.day + ', ' + date.year;
  
}