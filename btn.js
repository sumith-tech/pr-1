var form=document.getElementById('addForm');
var itemList=document.getElementById('items');
var filter=document.getElementById('filter')
//click for add
form.addEventListener('submit' ,addItem);
//click for delete
itemList.addEventListener('click',dltItem)
//for filter
filter.addEventListener('keyup',filterItems)

//add event function
function addItem(e){
    e.preventDefault();
//get new input
    var newitem=document.getElementById('item').value+' '+document.getElementById('item2').value;
    // var newitem2=document.getElementById('item2').value;

//create new li
 var li=document.createElement('li');
 li.className='list-group-item'
 //add text
 li.appendChild(document.createTextNode(newitem));
//  li.appendChild(document.createTextNode(' '+newitem2));

//add li in list
 itemList.appendChild(li)
 //add delt btn
 var dlt=document.createElement('button');
 var edt=document.createElement('button');
 edt.className='btn btn-success  btn-sm float-right edit'
 dlt.className='btn btn-danger btn-sm float-right delete';
 dlt.appendChild(document.createTextNode('X'))
 edt.appendChild(document.createTextNode('Edit'))
 console.log(dlt)
 li.appendChild(dlt)
 li.appendChild(edt)



}
function dltItem(e){
    
    if(e.target.classList.contains('delete')){
        var li=e.target.parentElement;
        itemList.removeChild(li);
    }
}

function filterItems(e){
    //conver to lowercase
    var textlc=e.target.value.toLowerCase(); 
    //get items
    var items=itemList.getElementsByTagName('li');
    //conver to array
    Array.from(items).forEach(function(item){
        var itemName=item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(textlc) != -1){
            item.style.display='block';
        }
        else{
            item.style.display='none';
        }
    });
}