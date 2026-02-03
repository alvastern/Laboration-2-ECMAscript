"use strict"

// Funktion för att hämta data från API med try/catch och async/await
async function getData() {
    try {
        const response = await fetch("https://webbutveckling.miun.se/files/ramschema.json");
        const data = await response.json();

        return data;
    } catch (error) {
        console.error('Det uppstod ett fel', error.message);
    }
}