if (!String.prototype.contains) {
    String.prototype.contains = function(s) {
        return this.indexOf(s) > -1;
    };
}


jQuery.fn.justtext = function() {

    return $(this).clone()
            .children()
            .remove()
            .end()
            .text();

};

var title = $(document).prop('title');

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
$('aside').remove();
$('blockquote').remove();
$('span').remove();
$('title').remove();


$('*').each(function() {

    $(this).removeAttr('alt');

    var text = $(this).justtext();

    if (text.length<=max){
      return;
    }

    if (text.contains(".")) {

    max = $(this).justtext().length;

    console.log($(this).justtext());

    if ($(this).attr('class')===null) {

      console.log("does not have class name  ");

      var elementWithoutClass = $(this);
      var completePath="";

      while (elementWithoutClass.attr('class') === null){
        completePath = ">"+ elementWithoutClass.prop("tagName").toLowerCase() + completePath;
        elementWithoutClass= elementWithoutClass.parent();
        console.log("the path to it is  " + completePath);
      }

      elementClass=elementWithoutClass.attr('class');

      elementClass= "."+elementClass;
      elementClass=elementClass.replace(/\s{2}/g," ").trim().replace(/\s/g,".");

      completePath = elementClass  +" "+ completePath;
      console.log("complete path  " + completePath);
      console.log("class is finally " + elementClass);
      elementClass = completePath;
    }
    else {
      elementClass=$(this).attr('class');
      elementClass= "."+elementClass;
      elementClass=elementClass.replace(/\s{2}/g," ").trim().replace(/\s/g,".");
      console.log("has class name, and it is " + elementClass);
    }

  }

});

var content = $(elementClass).text();


console.log("got this content " + content);


$('body').append("<div class='drip'></div>");
$('.drip').append("<style>.drip{margin: 0 auto;position: relative;width: 40%;}<style>");
$('.drip').append("<h1 class='title'>"+ title+"</h1>");

$(elementClass).each(function() {
  if ($(this).text().length===0){
    return;
  }
  $('.drip').append("<p class='bodyText'>"+$(this).text()+"</p>");


});


$('html:not(.drip)').remove();
