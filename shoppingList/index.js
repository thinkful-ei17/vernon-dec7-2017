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


let ifCheckButton;
let ifCheckWord;
let ifDeleteButton;
let ifDeleteWord;

function checkItem() {
 //attaching a listener to ul since
 //if all of li items have one, but newly created ones dont

  $("ul").on("click", "li", function(event) {
    //When check button is clicked, add strikethrough
    //when delete button is clicked, delete li!

    //if user clicks check button
      //do this
   //if other button
      //do this

    //variables to check whether or not elements specific to a button
    //were clicked
    ifCheckButton = $(event.target).hasClass("shopping-item-toggle") ;
    ifCheckWord = event.target.outerText === "check" ? true : false;

    ifDeleteButton = $(event.target).hasClass("shopping-item-delete");
    ifDeleteWord = event.target.outerText === "delete" ? true : false;

    //since we a listener is attaced to all things in li
    //we listen for specific events/items that were clicked
    // a button can have its label and outerbutton clicked
    if (ifCheckButton || ifCheckWord) {
      console.log("BAM");
      $(this).find(".shopping-item").toggleClass("shopping-item__checked");
    }

    if (ifDeleteButton || ifDeleteWord) {
      console.log("BOOM");
      $(this).remove();
    }

  });

}


$(addItem);
$(checkItem);




// append a div to the end of the list
// append to <ul class="shopping-list">
