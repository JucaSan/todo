const title = document.querySelector('#title');
const description = document.querySelector('#description');
const form = document.querySelector('.form');
const taskDiv = document.querySelector('.tasks');
const taskDefault = document.querySelector('.task')
const taskImageDefault = document.querySelector('.task__img')

const content = {
    title : '',
    description : ''
}

// EVENTO PARA GUARDAR LOS VALORES DE LOS INPUT
title.addEventListener('input', readContent);
description.addEventListener('input', readContent);


// EVENTO PARA ELIMINAR UNA TAREA DEL VALOR PREDETERMINADO
taskImageDefault.addEventListener('click', () => {
    taskDefault.remove()
}) 

// EVENTO PARA CREAR LAS TAREAS
form.addEventListener('submit', (e) => {
    e.preventDefault();

    createTask();
});

// EVENTO PARA MARCAR Y DESMARCAR COMPLETADO POR DEFAULT

taskDefault.addEventListener('click', () => {
    taskDefault.classList.toggle('complete')
})



function readContent(e) {
    content[e.target.id] = e.target.value;
}

function createTask() {
    const task = document.createElement('div');
    const taskTitle = document.createElement('h3');
    const taskDescription = document.createElement('p')
    const taskContent = document.createElement('div')
    const taskIcon = document.createElement('img')


    task.classList.add('task');
    taskTitle.textContent = content.title;
    taskDescription.textContent = content.description;
    taskIcon.src = "IMG/eliminar.png"
    taskIcon.classList.add('task__img')


    taskContent.appendChild(taskTitle)
    taskContent.appendChild(taskDescription)
    task.appendChild(taskContent)
    task.appendChild(taskIcon)
    taskDiv.appendChild(task)
    

    task.addEventListener('click', () => {
        task.classList.toggle('complete')
    });

    taskIcon.addEventListener('click', () => {
        task.remove()
    })
}


