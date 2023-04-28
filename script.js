const getcolor=() =>{
    const randomnum =Math.floor( Math.random()*16777215 );
    const randome_code= "#"+randomnum.toString(16);
    console.log(randomnum,randome_code);
    document.body.style.backgroundColor=randome_code;
    document.getElementById("color_code").innerText=randome_code;
    navigator.clipboard.writeText(randome_code);
}

document.getElementById("btn").addEventListener(
    "click",getcolor
)

getcolor();