// const jsonData='http://forklift-advantage.com/json/especificaciones.json';
const json='https://webdeveloperintraining.github.io/Forklift-Website/json/especificaciones.json';
async function waitForData (json){
    const getJsondata = await fetch(json);
    if (response.ok) {
        const jsonToData= await getJsondata.json();
        doStuff(jsonToData);
    }
}

function doStuff(data){
    let test = data[1];
    console.log(test);
}
waitForData (json);