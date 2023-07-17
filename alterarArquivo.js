const { error } = require('console');
let {readFile, writeFile} = require('fs');

readFile("texto.txt", "utf8", (error, texto) => {
    if(error) {
        throw error;
    } else {
        console.log(texto);
    }
});

writeFile("texto.txt", "Novo texto.", (error) => {
    if(error) {
        throw error;
    } else {
        console.log("Alterado.");
    }
})