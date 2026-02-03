"use strict"

// Funktioner för att hämta data från API med try/catch och async/await
async function getData() {
    try {
        const response = await fetch("ramschema.json");
        const data = await response.json();

        return data;

    } catch (error) {
        console.error('Det uppstod ett fel', error.message);
    }
}

getData();

async function init() {
    const data = await getData();
    console.log('Hämtad data', data)
    renderTable(courses);
}

init();


