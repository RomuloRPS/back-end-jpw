var express = require('express');
var cors = require('cors')


app = express();
app.use(cors())
port = process.env.PORT || 8080;
mongoose = require('mongoose')
computador = require('./api/models/computadorModel');
pessoa = require('./api/models/pessoaModel');
carro = require('./api/models/carroModel');
bodyParser = require('body-parser');
  
mongoose.connect('mongodb://localhost:27017/gssapiServiceName=mongodb', { useNewUrlParser: true });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var ns_computador = require('./api/routes/computadorRoutes');
var ns_pessoa = require('./api/routes/pessoaRoutes');
var ns_carro = require('./api/routes/carroRoutes');

ns_computador(app);
ns_pessoa(app);
ns_carro(app);

app.use(function (req,res,next){
	res.status(404).json({"Error": "Page not founded"});
});

app.listen(port);