const habit = {
    name: '',
    description: '',
    frequency: undefined,
    name_polz: undefined,
}; 

const nameMeta = {
    select: document.querySelector("#habit-name"),
    handler: (ev) => {
        habit.name = ev.target.value;
    }
}

const frequencyMeta = {
    select: document.querySelector("#frequency"),
    handler(ev) {
        if(ev.target.value == undefined){
            habit.frequency = 0;
        }
        else{
            habit.frequency = parseInt(ev.target.value)
        }
        setSum()
        console.log(frequency)
    }
}

const descriptionMeta = {
    select: document.querySelector("#description"),
    handler: (ev) => {
        habit.description = ev.target.value;
    }
}

const name_polzMeta = {
    select: document.querySelector("#name_polz"),
    handler(ev) {
        if(ev.target.value == undefined){
            habit.name_polz = 0;
        }
        else{
            habit.name_polz = parseInt(ev.target.value)
        }
        setSum()
        console.log(habit.name_polz) //МБ ОШИБКА
    }
}
const metaData = [nameMeta, descriptionMeta, frequencyMeta, name_polzMeta];

/*
for(const meta of metaData){
    if (meta.select && meta.select.tagName.toLowerCase() === "select"){
        meta.select.addEventListener('change', meta.handler);
    }
    else if (meta.select){
        meta.select.addEventListener('input', meta.handler);  
    }
}
*/
/**/
for(const meta of metaData){
    if(meta.select.tagName.toLowerCase() 
        == "select".toLowerCase()){
        meta.select.addEventListener('change', meta.handler);
    }
    else{
        meta.select.addEventListener('input', meta.handler);  
    }
}
/**/

const sumElement = document.querySelector('#sum');

const formElem = document.querySelector('form');
formElem.addEventListener('submit', (ev) => {
    ev.preventDefault();
    for(const key in habit){
        console.log(key, habit[key])
    }
    console.log(JSON.stringify(habit));
});