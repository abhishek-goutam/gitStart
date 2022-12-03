// console.log("I Love Git");
// console.log("I want to learn in depth");

// console.dir(document);
// console.log(document.URL);
// console.log(document.domain);
// console.log(document.title);
// console.log(document.all)
// console.log(document.images);
// console.log(document.links);
// console.log(document.all[10])

// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// headerTitle.textContent ="Hello";
// headerTitle.innerHTML = "GoodBye!";
// header.style.borderBottom = 'solid 3px #000'
// headerTitle.style.borderBottom = 'solid 3px #000'
// var itemHeader = document.getElementsByTagName('h2');

// var items = document.querySelector('.list-group');
// items.style.fontWeight ='bold';

// var thirdItem = document.querySelector('.list-group-item:nth-child(2)');
// var seconddItem = document.querySelector('.list-group-item:nth-child(2)');
// seconddItem.style.color ="green"
// var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
// thirdItem.style.display ='none'
// thirdItem.style.backgroundColor ="green"

// var header = document.querySelector('.title');
// header.style.borderBottom = 'solid 4 px black';
// header.style.color = 'green';
// header.style.fontWeight ='bold';

// var li = document.getElementsByClassName('list-group-item');
// for(let i =0;i<li.length;i++){
//     li[i].style.backgroundColor = 'green';
// }

// var odd = document.querySelectorAll('li:nth-child(odd)');
// for(let i =0;i < odd.length;i++){
//     odd[i].style.backgroundColor = "green";
// }

var listItems = document.querySelector('#items');
console.log(listItems.parentNode);
listItems.parentNode.style.backgroundColor ='#f4f4f4';
console.log(listItems.parentNode.parentNode.parentNode);

// parentElement

console.log(listItems.parentElement);
listItems.parentElement.style.backgroundColor ='#f4f4f4';
console.log(listItems.parentElement.parentElement.parentElement);


