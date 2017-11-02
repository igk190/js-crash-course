const fs = require('fs');

const chooseDataJson = {
    CarryBuddy: {
        name: 'CarryBuddy',
        file: './Data/CarryBuddy_data.json'
    },
    Request: {
        name: 'Request',
        file: './Data/Request_data.json'
    },
    Review: {
        name: 'Review',
        file: './Data/Review_data.json'
    },
}

exports.save = (database, item) => {
    const name = chooseDataJson[database].name
    const file = chooseDataJson[database].file

    fs.writeFileSync(file, JSON.stringify({
        [name]: item
    }))
}

exports.load = (database) => {
    const file = chooseDataJson[database].file
    return JSON.parse(fs.readFileSync(file, 'utf8'));
}


