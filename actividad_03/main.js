const fs = require ('fs/promises')
const os = require ('os')

// Parte 01
async function parte01() {
    await fs.writeFile('./nota1.txt', 'Los módulos son unidades de código reutilizables');
    await fs.writeFile('./nota2.txt', 'que permiten organizar y encapsular funcionalidades en archivos separados');

    const n1 = await fs.readFile('./nota1.txt', 'utf8');
    const n2 = await fs.readFile('./nota2.txt', 'utf8');
    const frase = n1 + ' ' + n2

    await fs.writeFile('./frase.txt', frase.toUpperCase());
    
}
parte01()


// Parte 02
async function parte02() {
    const data = {
        "CPU": os.cpus()[0].model, 
        "Plataforma": os.platform(), 
        "Arquitectura": os.arch()
    }

    await fs.writeFile('./data.json', JSON.stringify(data, null, 4));

    console.table(data)
}
parte02()