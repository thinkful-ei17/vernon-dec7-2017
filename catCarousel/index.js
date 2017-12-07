
//click function
//find out which one was clicked
//replace item in .hero element
//
$(".thumbnails").on("click", function (item) {

  const clickedNavImg = item.target;
  const accessibleNavImg = $(item.target).find("img")[0];

  const previousImage = $(".hero img");

  //accessing the img through tab-tab-enter aka accessibleNav
  //gives us <a><img> instead of just <img>
  //line 9 retrieves img from <a><img><img></a>. find() gives an obj. obj[0] gives me the html.
  //so calling/accessing accessibleNavImg when user clicks will return undefined - img couldnt be found in img element lol
  //      -> changes img with clickedimg
  //calling/accessing accessibleNavImg when user tab-tab-enter will return the image - img is found in <a elemen
 //      -> changes img with clickedimg
  if (!accessibleNavImg){

    previousImage.attr({
      src: clickedNavImg.src,
      alt: clickedNavImg.alt
    });
  }

  else {
    previousImage.attr({
      src: accessibleNavImg.src,
      alt: accessibleNavImg.alt
    });
  }

})
