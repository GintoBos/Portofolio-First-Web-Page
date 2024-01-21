//when you click on search it will send you a window alert about the product you wrote in the search bar
document.querySelector(".searchform").addEventListener('submit' , function(event){ 
   event.preventDefault();

   var product = document.querySelector("#product").value;

   window.alert(`You searched for : ${product}`);
   
});