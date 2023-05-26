var form=document.getElementById('addForm');
var itemList=document.getElementById('items');
//click for add
form.addEventListener('submit' ,addItem);
//click for delete
itemList.addEventListener('click',dltItem)

function addItem(e){
    e.preventDefault();
//get new input
    var newitem=document.getElementById('item').value;

//create new li
 var li=document.createElement('li');
 li.className='list-group-item'
 //add text
 li.appendChild(document.createTextNode(newitem));

//add li in list
 itemList.appendChild(li)
 //add delt btn
 var dlt=document.createElement('button');
 dlt.className='btn btn-danger btn-sm float-right delete';
 dlt.appendChild(document.createTextNode('X'))
 console.log(dlt)
 li.appendChild(dlt)



}
function dltItem(e){
    
    if(e.target.classList.contains('delete')){
        var li=e.target.parentElement;
        itemList.removeChild(li);
    }
}