const express = require('express');
const app = express();
const port = 8080;
const operacoes = require('./matematica/operacoes');

app.listen(port);

  app.get('/somar/:a/:b', function (req, res) {
    let firstElement = parseInt(req.params.a);
    let secondElement = parseInt(req.params.b);
    res.send('Soma : ' + operacoes.somar(firstElement, secondElement));
  })

  app.get('/multiplicar/:a/:b', function(req, res){
    let firstElement = parseInt(req.params.a);
    let secondElement = parseInt(req.params.b);
    res.send('Multiplicacao : ' + operacoes.multiplicar(firstElement,secondElement));
  })

  app.get('/dividir/:a/:b', function(req, res){
    let firstElement = parseInt(req.params.a);
    let secondElement = parseInt(req.params.b);
    res.send('divisao : ' + operacoes.dividir(firstElement,secondElement));
  })

  app.get('/subtrair/:a/:b', function(req, res){
    let firstElement = parseInt(req.params.a);
    let secondElement = parseInt(req.params.b);
    res.send('subtração : ' + operacoes.subtrair(firstElement,secondElement));
  })
