document.addEventListener('DOMContentLoaded', function(){
    let container = document.getElementById('gameContainer');
    let current = "X";
    for(let i = 0 ; i < 400 ; i++){
    let item = document.createElement('div');
    item.classList.add('item');
    item.setAttribute("id",i);
    container.appendChild(item);
        
    item.addEventListener('click', function() {
        
        if(current == "X" && item.textContent ==""){
            item.textContent ="X";
            current = "O";
        } else if(current == "O" && item.textContent ==""){
            item.textContent ="O";
            current = "X";
        }
        // if(content == "" )
        console.log(content); 
        
    });
    

    }
});
document.addEventListener('click', function(){
    let elements = document.getElementsByClassName('item');
    if (event.target.classList.contains('item')) {
        console.log(event.target.id); 
    }
});


// item.append(checkEmpty);
        // (item.textContent =="x")?;
// console.log('Grid item ' + i + ' clicked');
        // (item.textContent =="x")?;
        // let checkEmpty = (item.textContent =="")?"X":""
        // let content = ; // idk later
// let items = document.querySelectorAll('item');
// for(let i = 0; i<items.length; i++){
//     items[i].addEventListener('click', function(){
//         items.appendChild('p');
//         console.log('weowo');
//     });
// }

//let p = document.createElement('p'); 
        // p.textContent = 'New Paragraph'; 
        // items[i].appendChild(p);
        // console.log('fuck');