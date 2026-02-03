"use strict"

let courses = [];
let tabell = document.getElementById('body-tabell');

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

async function init() {
    courses = await getData();
    console.log('Hämtad data', courses)
    renderTable(courses);
}

init();

// Skapar nya element för kurskoder i tabellen
function renderTable(courseList) {
    tabell.innerHTML = "";

    courseList.forEach(course => {
        let rowCourse = document.createElement('tr');

        let codeTd = document.createElement('td');
        codeTd.textContent = course.code;

        let nameTd = document.createElement('td');
        nameTd.textContent = course.coursename;

        let progTd = document.createElement('td');
        progTd.textContent = course.progression;

        rowCourse.appendChild(codeTd);
        rowCourse.appendChild(nameTd);
        rowCourse.appendChild(progTd);

        tabell.appendChild(rowCourse);
    });
};

// Soterar kurskoderna i tabellen utifrån bokstavsordning vid klick
let kurskod = document.getElementById('kurskod');

kurskod.addEventListener('click', () => {
    courses.sort((a, b) => a.code.localeCompare(b.code));
    renderTable(courses);
});

// Soterar kursnamnen i tabellen utifrån bokstavsordning vid klick
let kursnamn = document.getElementById('kursnamn');

kursnamn.addEventListener('click', () => {
    courses.sort((a, b) => a.coursename.localeCompare(b.coursename));
    renderTable(courses);
});

// Soterar kursnamnen i tabellen utifrån bokstavsordning vid klick
let prog = document.getElementById('progression');

prog.addEventListener('click', () => {
    courses.sort((a, b) => a.progression.localeCompare(b.progression));
    renderTable(courses);
});