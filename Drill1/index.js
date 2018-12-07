'use strict';
function handleImgClick(){
  $('.thumbnail').on ('click', function(e){

    let imgSrc = $(this).find('img').attr("src");


    let imgAlt = $(this).find('img').attr("alt");
    $('.hero').find('img').attr("src",imgSrc);
    $('.hero').find('img').attr("alt",imgAlt);


    console.log(imgSrc, imgAlt)
    // change the source of main hero div image to the one clicked


  });


}
$(handleImgClick);