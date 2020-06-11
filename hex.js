document.body.style.backgroundColor="#FFFFF";
const hex=[0,1,2,3,4,5,6,7,8,9, 'A','B','C','D','E','F'];
const btn=document.getElementById('btn');
const colorId=document.querySelector('.color-id');


btn.addEventListener('click', ()=> {
    let hexColor='#';
    for(let i=0; i<6; i++){
        hexColor += hex[getRandomNumber()];
    }
    document.body.style.backgroundColor=hexColor;
    colorId.textContent=(hexColor);
    
});


const getRandomNumber=()=>{
    const randomNumber=Math.floor(Math.random()* hex.length);
    return randomNumber;
}