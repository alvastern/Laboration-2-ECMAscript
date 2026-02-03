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

async function init() {
    const courses = await getData();
    console.log('Hämtad data', courses)
    renderTable(courses);
}

init();

// Skapar nya element för kurskoder i tabellen
let courses = [];
let tabell = document.getElementById('body-tabell');

function renderTable(courseList) {

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