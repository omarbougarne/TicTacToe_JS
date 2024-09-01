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
         let five = true;
        for(let i = event.target.id; i<=event.target.id+5; i++){
             if(event.target.id.textContent !="X"){
                console.log(i);
                 five = false;
                 break;
             }else{
                console.log('winwinwin');
             }

            //  for(let i = event.target.id; i<)
//              var arr =[[2,3,[2,3]], [2,3], [2,3]];
// var product = 1;

// For (i=0; i<arr.length; i++) {
//     For (j=0; j<arr[i].length; j++) {
//     For (k=0; k<arr[j].lenght; k++) {
//         product *=arr[i][j][k];  
//     }
// }
            // if (elements[i].textContent == "X" && elements[i+1].textContent == ""){
            //     break;
            // }else if(elements[i].textContent == "X" && elements[i+1].textContent == "X" && elements[i+2].textContent == ""){
            //     break;
            // }
            // else if(elements[i].textContent == "X" && elements[i+1].textContent == "X" && elements[i+2].textContent == "X" && elements[i+3].textContent == ""){
            //     break;
            // }else if(elements[i].textContent == "X" && elements[i+1].textContent == "X" && elements[i+2].textContent == "X"&& elements[i+3].textContent == "X" && elements[i+4].textContent == ""){
            //     break;
            // }else if(elements[i].textContent == "X" && elements[i+1].textContent == "X" && elements[i+2].textContent == "X"&& elements[i+3].textContent == "X" && elements[i+4].textContent == "X"){
            //     console.log('winning');
            // }
            //     break;
            // }if(elements[i].textContent == "X" && elements[i+1].textContent == "X" && elements[i+2].textContent == ""){

            // }
        }
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