
//click function
//find out which one was clicked
//replace item in .hero element
//
$(".thumbnails").click(function(item) {

  console.log(item.target.src);
  let newImg = item.target;
  let previousImage = $(".hero img");

  previousImage.attr({
    src: item.target.src,
    alt: item.target.alt
  });

});
