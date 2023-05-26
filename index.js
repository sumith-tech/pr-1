//parent node
var itemlist=document.querySelector('#items')
itemlist.parentNode.style.backgroundColor="#f4f4f4"

//parent elemnet

itemlist.parentElement.style.backgroundColor="#00FFFF"
//childnode
console.log(itemlist.childNodes)

//childrennode
console.log(itemlist.children)
itemlist.children[1].style.backgroundColor='yellow'
itemlist.firstElementChild.textContent='hii'
itemlist.lastElementChild.textContent='bye'
//nextchild
var titile=document.querySelector('.title');
console.log(titile.nextElementSibling)

//prev child
console.log(itemlist.previousSibling)
itemlist.previousElementSibling.style.color='green'

//add element

var newDiv=document.createElement('div');
//addclass
newDiv.className='hello'
//addid
// newDiv.id='hello1'
//addatrivbute
newDiv.setAttribute('id','hello world')

// create text node

var divText=document.createTextNode('hello world')

newDiv.appendChild(divText);
//add text to div

var containor=document.querySelector('header div');
var h1=document.querySelector('header #header-title')
newDiv.style.fontSize='30px'
containor.insertBefore(newDiv,h1)


console.log(newDiv)
