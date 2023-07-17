let {readFile} = require('fs');

readFile("texto.txt", "utf8", (error, texto) => {
    if(error) {
        throw error;
    } else {
        console.log(texto);
    }
});