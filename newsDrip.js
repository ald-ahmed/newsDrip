

jQuery.fn.justtext = function() {

    return $(this).clone()
            .children()
            .remove()
            .end()
            .text();

};


var max=0;
var elementClass;


$('img').remove();
$('script').remove();
$('noscript').remove();
$('style').remove();
$('nav').remove();
$('table').remove();
$('footer').remove();
$('meta').remove();
$('link').remove();
$('textarea').remove();
$('input').remove();
$('iframe').remove();
$('header').remove();

$('*').each(function() {

    $(this).removeAttr('alt');

    if (($(this).justtext()).length>max && ($(this).justtext()).contains(".")) {


    max = $(this).justtext().length;

    console.log($(this).justtext());

    if ($(this).attr('class')===null) {

      var elementWithoutClass = $(this);

      while (elementWithoutClass.attr('class') === null){
        elementWithoutClass= elementWithoutClass.parent();
      }

      elementClass=elementWithoutClass.attr('class');
      console.log("null - " + elementClass);

    }
    else {
      elementClass=$(this).attr('class');
      console.log("not null");

    }


  }

});

elementClass= "."+elementClass;
console.log(elementClass);

elementClass=elementClass.replace(/\s{2}/g," ").trim().replace(/\s/g,".");

var content = $(elementClass).text();
console.log(content);


$('body').append("<div class='drip'></div>");

$('.drip').append("<style>.drip{margin: 0 auto;position: relative;width: 40%;}<style>");

$('.drip').append("<h1 class='title'>"+ $(document).prop('title')+"</h1>");

$(elementClass).each(function() {
  if ($(this).text().length===0){
    return;
  }
  $('.drip').append("<p class='bodyText'>"+$(this).text()+"</p>");


});


$('div:not(.drip)').remove();
