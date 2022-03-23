console.log("JS OK")

/*
Milestone 1
Partendo dalla struttura dati fornita,
visualizzare in pagina un box per ogni icona, 
in cui è presente il nome dell'icona e l'icona stessa.

Milestone 2
Ciascuna icona ha una proprietà "color": 
utilizzare questa proprietà per visualizzare le icone del colore corrispondente.

Milestone 3
Aggiungere alla pagina una select 
in cui le options corrispondono ai vari tipi di icone (animal, vegetable, user). 
Quando l'utente seleziona un tipo dalla select, 
visualizzare solamente le icone corrispondenti.
*/

const icons = [
    {
        name: 'cat',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'crow',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'dog',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'dove',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'dragon',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'horse',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'hippo',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'fish',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'carrot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
        color: 'green'
    },
    {
        name: 'apple-alt',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
        color: 'green'
    },
    {
        name: 'lemon',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
        color: 'green'
    },
    {
        name: 'pepper-hot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
        color: 'green'
    },
    {
        name: 'user-astronaut',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
        color: 'blue'
    },
    {
        name: 'user-graduate',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
        color: 'blue'
    },
    {
        name: 'user-ninja',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
        color: 'blue'
    },
    {
        name: 'user-secret',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
        color: 'blue'
    }
];

// seleziono tramite query selector la classe .container-icon
const containerIcon = document.querySelector('.container-icon');

// ciclo array
icons.forEach((icons, index, array) => {
    creoBox(icons)
});

// funzione per creare box che contiene icon
function creoBox(elemento) {
    // creo elemento div
    const box = document.createElement('div');
    // lo inserisco nel documento come figlio di containerIcon
    containerIcon.appendChild(box);
    // assegno una classe
    box.className = 'box-icon';
    // modifico HTML
    box.innerHTML = `<i class="${elemento.family} ${elemento.prefix}${elemento.name} ${elemento.color} fa-3x"></i>
	<p class="text">${elemento.name}</p>`
}