var app = {};

app.getNumbers = function() {
  var delivered_begin = new Date().getTime();
  var url = 'http://bvworks.lv5.org:8080/numbers/api/prime/numbers?count=' + app.num;
  $.ajax({
    url: url,
    type: 'get',
    datatype: 'jsonp'
  }).done(function(response) {
    var delivered_end = new Date().getTime();
    app.delivered = delivered_end - delivered_begin;
    app.response = response;
    app.typeNumbers();
  }).error(function(err) {
    console.log(err);
    app.errorMessage();
  });
};

app.errorMessage = function() {
  $('.numbers').append('there was a problem with the server :( <br /> please try again').css('color', '#faebd7').hide().fadeIn();
};

app.typeNumbers = function() {
  app.formatNumbers();
  app.timeout(0);
  $('.elapsed').html('');
  $('.elapsed').append('calculated in ' + app.response.elapsed + ' ms <br />').fadeIn('slow');
  $('.elapsed').append('delivered in ' + app.delivered + ' ms').fadeIn('slow');
};

app.timeout = function(count) {
  if (count === app.len) { clearTimeout(app.draw); return; }
  app.draw = setTimeout(function() {
    $('.numbers').append($(app.formatted_numbers[count]).fadeIn(200));
    ++count;
    app.timeout(count);
  }, 10);
};

app.formatNumbers = function() {
  app.formatted_numbers = [];
  for (var x = 0, len = app.response.numbers.length; x < len; ++x) {
    if (x === len - 1) {
      app.formatted_numbers.push("<span style='color:" + app.matrixify() +";'>" + app.response.numbers[x] + "</span>");
    } else {
      app.formatted_numbers.push("<span style='color:" + app.matrixify() +";'>" + app.response.numbers[x] + ", </span>");
    }
  }
  app.len = app.formatted_numbers.length;
};

app.matrixify = function() {
  var colors = [
    '#006400',
    '#00CC00',
    '#008000',
    '#00FF00',
    '#32CD32',
    '#00FF7F',
    '#2E8B57',
    '#00e500',
    '#00b200',
    '#009900',
    '#007f00',
    '#006600',
    '#4cff4c',
    '#66ff66',
    '#7CFC00',
    '#66CD00',
    '#76EE00',
    '#629632',
    '#488214',
    '#83F52C',
    '#476A34',
    '#93DB70',
    '#5DFC0A',
    '#84BE6A',
    '#659D32',
    '#4CBB17'
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

app.run = function() {
  $('.numbers').hide().html('').show();
  $('.elapsed').hide().fadeIn();
  app.num = $('.input').val();
  if (filterInt(app.num)) {
    app.getNumbers();
  } else {
    $('.numbers').append('integers only, please').css('color', '#faebd7').hide().fadeIn();
  }
};

filterInt = function(value) {
  if(/^(\-|\+)?([0-9]+|Infinity)$/.test(value)) {
    return Number(value);
  }
  return NaN;
};

$(document).ready(function() {
  $('.form').submit(function(e) {
    e.preventDefault();
    if (app.draw) {
      clearInterval(app.draw);
    }
      app.run();
  });

  $('.submit').click(function(e) {
    e.preventDefault();
    if (app.draw) {
      clearInterval(app.draw);
    }
      app.run();
  });
});





