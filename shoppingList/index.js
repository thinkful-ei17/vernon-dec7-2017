'use strict';

function addItem() {
  $('#js-shopping-list-form').submit(function(event) {

    event.preventDefault();
  
    let userText = $(this).find('.js-shopping-list-entry').val();
    console.log(userText);

    $('ul').append(
      `<li>
      <span class="shopping-item">${userText}</span>
      <div class="shopping-item-controls">
        <button class="shopping-item-toggle">
          <span class="button-label">check</span>
        </button>
        <button class="shopping-item-delete">
          <span class="button-label">delete</span>
        </button>
      </div>
    </li>`
    );

  });
}

function checkItem() {
  $('.shopping-item-controls').on('click', (function(event) {
    //When check button is clicked, add strikethrough
    //class to span class 'shopping-item'
    // console.log($(event.currentTarget).parent());

    $('.shopping-item').addClass('.shopping-item__checked');
      
  }));
}
  

$(addItem);
$(checkItem);

  


// append a div to the end of the list
// append to <ul class="shopping-list">
  
