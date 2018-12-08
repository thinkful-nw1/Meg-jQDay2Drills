'use strict';
function handleImgClick(){
  $('.thumbnail').on ('click', function(e){
  //find and store the src attribute of thumbnail image clicked
    let imgSrc = $(this).find('img').attr("src");
  //find and store the alt attribute of thumbnail image clicked
    let imgAlt = $(this).find('img').attr("alt");
    // change the  image source of main hero div image to the one clicked
    
    console.log(imgSrc, imgAlt);
    $('.hero').find('img').attr("src",imgSrc);
    //// change the  alt source of main hero div image to the one clicked
    $('.hero').find('img').attr("alt",imgAlt);

  });
}
$(handleImgClick);
