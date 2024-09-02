// document.addEventListener('DOMContentLoaded', function(){
//     let container = document.getElementById('gameContainer');
//     let current = "X";
//     for(let i = 0 ; i < 400 ; i++){
//     let item = document.createElement('div');
//     item.classList.add('item');
//     item.setAttribute("id",i);
//     container.appendChild(item);
        
//     item.addEventListener('click', function() {
        
//         if(current == "X" && item.textContent ==""){
//             item.textContent ="X";
//             current = "O";
//         } else if(current == "O" && item.textContent ==""){
//             item.textContent ="O";
//             current = "X";
//         }
//         // if(content == "" )
//         console.log(content); 
        
//     });
    

//     }
// });
document.addEventListener('DOMContentLoaded', function(){
    let container = document.getElementById('gameContainer');
    let box = {};
    let current = "X";
    for(let i = 0 ; i < 20 ; i++){
        box[i] = {};
    
    for(let j = 0; j < 20; j++){
        let item = document.createElement('div');
        item.classList.add('item');
        // item.style.flexWrap = 'wrap';
        item.setAttribute("id", `${i}_${j}`);
        item.dataset.row = i;
        item.dataset.col = j;
        container.appendChild(item);
        box[i][j] = item;
        
        item.addEventListener('click', function() {
            console.log(box[i][j]);
            if(current == "X" && item.textContent ==""){
                item.textContent ="X";
                current = "O";
            } else if(current == "O" && item.textContent ==""){
                item.textContent ="O";
                current = "X";
            }
            
            for (j = box[i]; j <= 4; j++) {
                console.log(id);
              }
            
            // if(content == "" )
            console.log(item.textContent); 
            
        });
        
            
        
    }

    }

    
});
        //     let go = document.getElementById('go');
        //     go.addEventListener('click', function(){
        //     let p1 = document.getElementById("player1").value;
        //     console.log(p1);
        //     let p2 = document.getElementById("player2").value;
        //     localStorage.setItem('name1', p1);
        //     localStorage.setItem('name2', p2);
        // });
        //     function displayUserName () {
        //         const name1FromLocalStorage = localStorage.getItem("name1");
        //         const name2FromLocalStorage = localStorage.getItem("name2");
        //         let displayedName = document.querySelector(".name1");
        //         let displayedName2 = document.querySelector(".name2");
              
        //         if (name1FromLocalStorage) {
        //             displayedName.innerHTML = name1FromLocalStorage;
        //         } else {
        //             displayedName.textContent = "No name data in local storage"
        //         }
        //         if (name2FromLocalStorage) {
        //             displayedName2.innerHTML = name2FromLocalStorage;
        //         } else {
        //             displayedName2.textContent = "No name data in local storage"
        //         }
        //       }
            
        //     document.addEventListener('DOMContentLoaded',  displayUserName);
// document.addEventListener('click', function(){
//     let elements = document.getElementsByClassName('item');
//     if (event.target.classList.contains('item')) {
//         console.log(event.target.id); 
//          let five = true;
//         for(let i = event.target.id; i<=event.target.id+5; i++){
//              if(event.target.id.textContent !="X"){
//                 console.log(i);
//                  five = false;
//                  break;
//              }else{
//                 console.log('winwinwin');
//              }
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
//         }
//     }
// });


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