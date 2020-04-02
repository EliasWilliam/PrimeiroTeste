var express = require('express');
var app = express();

app.post('/users', (request, response) => {
    return response.json({
        evento: 'Semana omniStack 11.0',
        aluno: 'Will Santana'
    });
});

app.listen(3333);