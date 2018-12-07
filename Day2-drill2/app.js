'use strict';
function returnOfTheFizzBuzz(){
  $('#number-chooser').on('submit',function(event){
    event.preventDefault();
   var userNo = $('#number-chooser').find("input").val();
   console.log(userNo);
   for(let i=1;i<=userNo;i++){
     if (i%15===0){
       $('.js-results').append (`<div class="fizz-buzz-item fizzbuzz"><span>fizzbuzz</span></div>`);
     }
     if(i%5===0){
       $('.js-results').append (`<div class="fizz-buzz-item buzz"><span>buzz</span></div>`);
     }
     if (i%3===0){
       $('.js-results').append(`<div class="fizz-buzz-item fizz">
  <span>fizz</span>
</div>`);
     }
     else $('.js-results').append(`<div class="fizz-buzz-item">
  <span>${i}</span>
</div>`);

    }

  });
}



$(returnOfTheFizzBuzz);