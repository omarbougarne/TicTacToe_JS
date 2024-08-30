document.addEventListener('DOMContentLoaded', function(){
    let container = document.getElementById('gameContainer');
    
    for(let i = 0 ; i < 400 ; i++){
    let item = document.createElement('div');
    item.classList.add('item');
    item.setAttribute("id",i);
    container.appendChild(item);

    item.addEventListener('click', function() {
        // console.log('Grid item ' + i + ' clicked');
        // (item.textContent =="x")?;
        let checkEmpty = (item.textContent =="")?"X":""
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