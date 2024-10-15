const fs = require('fs');

const count = Number(process.argv[2]) || 5; 
let models = []; 

fs.readFile('./scripts/data/models.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    models = data.split("\n").map(s => s.trim()).filter(n => n.length != 0);

    let content = "export const data = [";
    
    for (let i = 0; i < count; i++) {
        const id = i + 1;
        const model = models[~~(Math.random() * models.length)];
        const year = Math.floor(Math.random() * (2022 - 1990 + 1)) + 1990; 
        const color = ["red", "blue", "green", "black", "white", "silver"][Math.floor(Math.random() * 6)]; 

        content += `
        {
            id: ${id},
            model: "${model}",
            year: ${year},
            color: "${color}"
        },`;
    }

    content += "];";

    // Zapisz dane do pliku w katalogu src
    fs.writeFile('./src/module-data.js', content, (err) => {
        if (err) {
            console.error(err);
        }
        console.log("module-data.js generated in src/");
    });
});
