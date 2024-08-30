document.addEventListener('DOMContentLoaded', function(){
    let container = document.getElementById('gameContainer');
    let current = "X";
    for(let i = 0 ; i < 400 ; i++){
    let item = document.createElement('div');
    item.classList.add('item');
    item.setAttribute("id",i);
    container.appendChild(item);
        //might change later i mean same loop
    item.addEventListener('click', function() {
        // console.log('Grid item ' + i + ' clicked');
        // (item.textContent =="x")?;
        // let checkEmpty = (item.textContent =="")?"X":""
        // let content = ; // idk later
        if(current == "X" && item.textContent ==""){
            item.textContent ="X";
            current = "O";
        } else if(current == "O" && item.textContent ==""){
            item.textContent ="O";
            current = "X";
        }
        // if(content == "" )
        console.log(content); //fix please check only ones per grid-area
        item.append(checkEmpty);
        // (item.textContent =="x")?;
    });
    }
});

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