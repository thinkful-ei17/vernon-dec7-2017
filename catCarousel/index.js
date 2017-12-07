
//click function
//find out which one was clicked
//replace item in .hero element
//
$(".thumbnail").on("click", function (item) {
//args --> this === event.currentTarget !== event.target
//$(args) to use jquery functionality/lib
//tests to understand what the Event object is.
  // console.log(event.currentTarget);
  // console.log("====");
  // console.log(event.target);
  // console.log("====");
  // console.log(event);


  $(".hero img").previousImage.attr({
      src: $(event.currentTarget).find("img").attr('src'),
      alt: $(event.currentTarget).find("img").attr('alt')
    });

})
