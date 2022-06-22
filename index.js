const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');

const {mongoose}=require('./db.js');
var employeeController= require('./controllers/employeeControllers.js');
var eventControllers=require('./controllers/eventControllers');

var app = express();
app.use(bodyParser.json());
app.use(cors({origin:'http://localhost:4200'}));


app.use('/employees',employeeController);
app.use('/event',eventControllers);

app.listen(3000,()=>console.log('Server started at port : 3000'));
