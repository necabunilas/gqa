//Hover on headers
$('ul.navbar-nav li.firm').hover(function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(200);
}, function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(200);
});

$('ul.navbar-nav li.practice').hover(function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(200);
}, function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(200);
});

//Hover on each item
//firm
$('ul.navbar-nav li.firm a.about').hover(function() {
  $(this).css("color", "black");
}, function() {
  $(this).css("color", "white");
});

$('ul.navbar-nav li.firm a.partners').hover(function() {
  $(this).css("color", "black");
}, function() {
  $(this).css("color", "white");
});

$('ul.navbar-nav li.firm a.clients').hover(function() {
  $(this).css("color", "black");
}, function() {
  $(this).css("color", "white");
});

$('ul.navbar-nav li.firm a.facilities').hover(function() {
  $(this).css("color", "black");
}, function() {
  $(this).css("color", "white");
});

//practice
$('ul.navbar-nav li.practice a.corp').hover(function() {
  $(this).css("color", "black");
}, function() {
  $(this).css("color", "white");
});

$('ul.navbar-nav li.practice a.ladr').hover(function() {
  $(this).css("color", "black");
}, function() {
  $(this).css("color", "white");
});

$('ul.navbar-nav li.practice a.intel').hover(function() {
  $(this).css("color", "black");
}, function() {
  $(this).css("color", "white");
});

$('ul.navbar-nav li.practice a.labor').hover(function() {
  $(this).css("color", "black");
}, function() {
  $(this).css("color", "white");
});

$('ul.navbar-nav li.practice a.tax').hover(function() {
  $(this).css("color", "black");
}, function() {
  $(this).css("color", "white");
});
