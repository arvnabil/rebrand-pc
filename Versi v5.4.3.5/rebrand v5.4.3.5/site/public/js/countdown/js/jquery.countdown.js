/*
 * jquery-countdown plugin
 *
 * Copyright (c) 2009 Martin Conte Mac Donell <Reflejo@gmail.com>
 * Dual licensed under the MIT and GPL licenses.
 * http://docs.jquery.com/License
 *
 */

// Draw digits in given container
var createDigits = function(where, options) {
    var counter = 0;
    // Iterate each startTime digit, if it is not a digit
    // we'll asume that it's a separator
    var mFirstPos, sFirstPos;
    // reset digits and intervals array.
    digits = [];
    intervals = [];
    
    //////////////////Добавлено А.Кузнецовым/////////////////////
    var digitsBlock = $('<div class="digitsBlock"></div>');
    var localeBlock = $('<div class="localeBlock"></div>');
    where.append(digitsBlock);
    where.append(localeBlock);
    
    var order = "dhms";
    var dg = options.startTime.split(":");
    for(var i = 0; i<dg.length; i++){
        var c = $('<div class="cntDigitBlock"></div>');
        for(var k = 0; k<dg[i].length; k++){
            elem = $('<div id="cnt_' + counter + '" class="cntDigit" />').css({
              height: options.digitHeight,
              background: 'url(\'' + options.image + '\')',
              width: options.digitWidth
            });
            elem.current = parseInt(dg[i][k]);
            digits.push(elem);
            margin(counter, -elem.current * options.digitHeight * options.digitImages);

            if (options.continuous === true) {
                digits[counter]._max = function() { return 9; };
            } else {
                // Add max digits, for example, first digit of minutes (mm) has
                // a max of 5. Conditional max is used when the left digit has reach
                // the max. For example second "hours" digit has a conditional max of 4
                switch (order[i]) {
                  case 'h':
                    digits[counter]._max = function(pos, isStart) {
                      if (pos % 2 == 0)
                        return 2;
                      else
                        return (isStart) ? 3: 9;
                    };
                    break;
                  case 'd':
                    digits[counter]._max = function() { return 9; };
                    break;
                  case 'm':
                    digits[counter]._max = function(pos) {
                      if(!mFirstPos) { mFirstPos = pos; } 
                      return pos == mFirstPos ? 9 : 5;
                    };
                    break;
                  case 's':
                    digits[counter]._max = function(pos) {
                      if(!sFirstPos) { sFirstPos = pos; } 
                      return pos == sFirstPos ? 9 : 5;
                    };
                }
            }
            c.append(elem);
            counter++;
        }
        digitsBlock.append(c);
        if(i<dg.length - 1){
            digitsBlock.append('<div class="cntDigitBlock"><span class="cntSeparator">:</span></div>');
        }
    }
    
    for(var i = 0; i<dg.length; i++){
        localeBlock.append('<div class="cntDigitLocale">' + options.locale[order[i]] + '</div>');
        if(i<dg.length - 1){
            localeBlock.append('<div></div>');
        }
    }
};

var makeMovement = function(elem, steps, isForward, options) {
  // Stop any other movement over the same digit.
  if (intervals[elem])
    window.clearInterval(intervals[elem]);

  // Move to the initial position (We force that because in chrome
  // there are some scenarios where digits lost sync)
  var initialPos = -(options.digitHeight * options.digitImages *
		     digits[elem].current);
  margin(elem, initialPos);
  digits[elem].current = digits[elem].current + ((isForward) ? steps: -steps);

  var x = 0;
  intervals[elem] = setInterval(function() {
    if (x++ === options.digitImages * steps) {
      window.clearInterval(intervals[elem]);
      delete intervals[elem];
      return;
    }

    var diff = isForward ? -options.digitHeight: options.digitHeight;
    margin(elem, initialPos + (x * diff));
  }, options.stepTime / steps);
};

// Set or get element margin
var margin = function(elem, val) {
  if (val !== undefined) {
    digits[elem].margin = val;
    return digits[elem].css({'backgroundPosition': '0 ' + val + 'px'});
  }

  return digits[elem].margin || 0;
};


// Makes the movement. This is done by "digitImages" steps.
var moveDigit = function(elem, options) {
  if (digits[elem].current == 0) {
    // Is there still time left?
    if (elem > 0) {
      var isStart = (digits[elem - 1].current == 0);

      makeMovement(elem, digits[elem]._max(elem, isStart), true, options);
      moveDigit(elem - 1, options);
    } else { // That condition means that we reach the end! 00:00.
      for (var i = 0; i < digits.length; i++) {
	clearInterval(intervals[i]);
	clearInterval(intervals.main);
	margin(i, 0);
      }
      options.timerEnd();
    }
    return;
  }
  makeMovement(elem, 1, false, options);
};



// parses a date of the form hh:mm:ss, for example, where
// ... precision is the same as the format.
var parseRelativeDate = function(form, options) {
  // give the date the values of now by default
  var now = new Date();
  var d = now.getDate();
  var m = now.getMonth() + 1;
  var y = now.getFullYear();
  var h = now.getHours(), mm, s;

  // read in components and render based on format
  var format = options.format;
  var parts = form.split(':');
  if( format.indexOf('dd') == 0 ) {
      d = parts[0];
      parts = parts.slice(1);
      format = format.substr(3);
  }
  if( format.indexOf('hh') == 0 ) {
      h = parts[0];
      parts = parts.slice(1);
      format = format.substr(3);
  }
  if( format.indexOf('mm') == 0 ) {
      mm = parts[0];
      parts = parts.slice(1);
      format = format.substr(3);
  }
  if( format.indexOf('ss') == 0 ) {
      s = parts[0];
      parts = parts.slice(1);
      format = format.substr(3);
  }
  // return our constructed date object
  return new Date([m, d, y].join('/') + ' ' + [h, mm, s].map(pad).join(':') + ' GMT-0900');
};


// convert a date object to the format specified
var formatCompute = function(d, options) {
      var format = options.format;

      var parse = {
          //Добавлена правка для поддежки дат больше года
	d: Math.floor(( d - Date.UTC(1970, 0, 1 )) / ( 1000 * 60 * 60 * 24 ) ),
	h: d.getUTCHours(),
	m: d.getUTCMinutes(),
	s: d.getUTCSeconds()
      };

      return format.replace(/(dd|hh|mm|ss)/g, function($0, form) {
	      return pad(parse[form[0]]);
      });
};

// add leading zeros
var pad = function(x){
    return x < 10 ? "0" + x : x.toString();
};

var start = function (element) {
	if (element.attr('started') != 'true') {	
		element.attr('started', true)
		intervals.main = setInterval(function () {
				moveDigit(digits.length - 1, element.data('options'));
			},
			1000);
	}
};

var digits = [];
var intervals = [];
jQuery.fn.countdown = function(userOptions) {
  // Default options
  var options = {
    stepTime: 60,
    // startTime and format MUST follow the same format.
    // also you cannot specify a format unordered (e.g. hh:ss:mm is wrong)
    format: "dd:hh:mm:ss",
    startTime: "01:12:32:55",
    digitImages: 6,
    digitWidth: 67,
    digitHeight: 90,
    timerEnd: function(){},
    locale : {
        d : "days",
        h : "hours",
        m : "minutes",
        s : "seconds"
    },
    image: "digits.png",
    continuous: false,
	start: true
  };
  $.extend(options, userOptions);

  // if an endTime is provided...
  if( userOptions.endTime ) {
    // calculate the difference between endTime and present time
    var endDate = userOptions.endTime instanceof Date ? userOptions.endTime : parseRelativeDate(userOptions.endTime, options);
    var diff = endDate.getTime() - (new Date()).getTime();
    // and set that as the startTime
    userOptions.startTime = formatCompute(new Date(diff), options);
    delete userOptions.endTime;
  }
  $.extend(options, userOptions);
  if (this.length) {
    clearInterval(intervals.main);
    createDigits(this, options);
	this.data('options', options);
	if (options.start === true) {
		start(this);
	}
  }
};

// start the counter
jQuery.fn.start = function () {
	start(this);
};