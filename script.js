const btn=document.getElementById('btn');
const colors=['green','red','grey','pink','yellow','brown', 'black', 'white', 'orange', 'yellowgreen', 'violet', 'purple'];
const colorId=document.querySelector('.color-id');

btn.addEventListener('click', ()=> {
    const randomNumber=getRandomNumber();
    document.body.style.backgroundColor=colors[randomNumber];
    colorId.textContent=(colors[randomNumber]);
    
});

const getRandomNumber=()=>{
    const randomNumber=Math.floor(Math.random()*colors.length);
    return randomNumber;
}