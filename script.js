document.addEventListener('DOMContentLoaded', function(){
    let container = document.getElementById('gameContainer');
    for(let i = 0 ; i < 400 ; i++){
    let item = document.createElement('div');
    item.classList.add('item');
    container.appendChild(item);
    }
});