window.addEventListener("focus", event => { //Window should be used to refer the navigator window

    console.log("Focus");

});

document.addEventListener('click', event => { //Document should be used to refer the site

    console.log("click detectado");

});


let agora = new Date();
console.log(`${agora.getDate()}/${agora.getMonth()+1}/${agora.getFullYear()}`);
console.log(agora.toLocaleDateString("pt-BR"))