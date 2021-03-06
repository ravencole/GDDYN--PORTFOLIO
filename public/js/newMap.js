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
function formatTime( time ) {
  
  this.time   = time;
  var re      = /(\d{2}):(\d{2}):(\d{2})/,
      matches = re.exec( this.time );
  this.hour   = matches[1];
  this.minute = matches[2];
  this.second = matches[3];
  this.amPm   = '';
  
  this.formatHour = function() {
    var re0Test = /0(\d)/;
    if ( re0Test.test( this.hour ) ) {
      this.hour = this.hour.replace(re0Test, "$1");
    }
    
    Number(this.hour);
    
    if ( this.hour > 12 ) {
      this.hour = this.hour - 12;
      this.hour.toString();
    } else if  ( this.hour == 0 ) {
      this.hour = 12;
      this.hour.toString();
    } else {
      this.hour.toString();
    }
    
  }
  
  this.formatAmPm = function() {
    if ( matches[1] > 11 ) {
      this.amPm = "pm";
    } else {
      this.amPm = "am";
    }
  }
  
  this.getTime = function() {
    var currentTime = {
      
      hour: this.hour,
      minute: this.minute,
      second: this.second,
      amPm: this.amPm
      
    };
    return currentTime;
  }
  
}

//# sourceMappingURL=newMap.js.map
