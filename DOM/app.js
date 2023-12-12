// const h1Element = document.getElementsByTagName("h1");
// console.log(h1Element);

// const h1Element = document.getElementsByClassName("title-with-class");
// console.log(h1Element);

// const h1Element = document.querySelectorAll("h1");
// console.log(h1Element);

// ELEMENT CREATION

const paragraphElement = document.createElement("p");
paragraphElement.innerText = "Mis iganes siin võiks olla";

const wrapper = document.querySelector(".wrapper");
wrapper.appendChild(paragraphElement);