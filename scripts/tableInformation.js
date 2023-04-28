// const jsonData='http://forklift-advantage.com/json/especificaciones.json';
const json='https://webdeveloperintraining.github.io/Forklift-Website/json/especificaciones.json';
async function waitForData (json){
    const getJsondata = await fetch(json);
    if (getJsondata.ok) {
        const jsonToData= await getJsondata.json();
        doStuff(jsonToData);
    }
}

function doStuff(data){
    console.log(data);
}
waitForData (json);