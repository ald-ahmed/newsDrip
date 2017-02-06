var content = localStorage.getItem("newsDripData");

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
