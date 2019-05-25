var fs = require('fs');


function loadAndWriteCP(CAPITAL_CODE){
    var dataset = fs.readFileSync('resource/CP/dataset.json');
    var newDataset = new Array();

    centroPoblado = JSON.parse(dataset);

    centroPoblado.forEach(CP => {

        if(CP.CAPITAL == CAPITAL_CODE){
            newDataset.push(CP);
        }
        
    });

    var json = JSON.stringify(newDataset);

    fs.writeFileSync('resource/CP/CP_DISTRITOS.json', json, 'utf8');
}

loadAndWriteCP("3");