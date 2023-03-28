// declaring a function
  //created a function that takes details  as an argument 
function changeCardOnHover( details ){ 
// attached the details object  to the target that is our get_card so that it 
//change the style of the cad when details mouseover is triggered
    details[`target`][`style`][`backgroundColor`] = `#e3333b`
    
}
//using the DOM selection method to get a targeted element form the DOM
let get_card = document.querySelectorAll( `.main_card` )
//lopping throuhg the elements that have the same selector  and adding event-listners to each 
// one that will be triggered when onmouseover  and the function that js will call to add the event 
for ( let i = 0; i < get_card.length; i++ ){
    get_card[i].addEventListener( `mouseover`, changeCardOnHover )

}
function changeCardOout( details ){
//attached the details object  to the target that is our get_card so that it 
//change the style of the cad when details mouseout is triggered 
details[`target`][`style`][`backgroundColor`] = `#ffffff`
    
}

//lopping throuhg the elements that have the same selector  and adding event-listners to each 
//one that will be triggered when onmouseout  and the function that js will call to add the event 
for ( let x = 0; x < get_card.length; x++ ){
get_card[x].addEventListener(`mouseout`, changeCardOout)

}

function changeOnClick( details )
{
    
    details[`target`].insertAdjacentHTML( `beforebegin`, `<p >this is a lovely ice cream</p>` )
}

let get_btn = document.querySelectorAll(`.btn`)


for ( let x = 0; x < get_card.length; x++ ){
    get_btn[x].addEventListener(`click`, changeOnClick)
}
//crated a function that takes a details argument 
function onDoubleClick(details){
      

    details[`target`].insertAdjacentHTML( `afterend`, `<div class="add"><p>Menu</p><p>List</p></div>` )

 }

let get_menu = document.querySelector('.nav' )
get_menu.addEventListener( 'dblclick', onDoubleClick )

function changeOnKeyPress(details){
    details[`target`][`style`][`backgroundColor`]= `#e3333b`
}

let get_body = document.querySelector( `body` )


get_body.addEventListener( 'keypress', changeOnKeyPress)
