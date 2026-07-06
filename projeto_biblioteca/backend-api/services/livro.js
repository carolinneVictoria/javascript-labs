const fs = require('fs');


function getAllBooks () {
    return JSON.parse(fs.readFileSync('../livros.json', 'utf-8'));
}

module.exports = {
    getAllBooks
}