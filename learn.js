var Wasif = 'wasif123';
var wazzy = getName();

const mymodule = require('./mymodule');

const rectange = require('./myClass');

const Server = require('./Server');

const server = new Server;


const rec1 = new rectange(100,100);

function getWasif(test){

    console.log(Wasif + ' ' + test);
}

function getName(){
    return "Hello world";
}

//getWasif('lets see if this works' + '  ' + getName);
//mymodule.getAccount(123);

//rec1.test(); //lol
//console.log(rec1.getArea());

rec1.setVars(Wasif);

//console.log(rec1.getVars());

//Mongo.connect();
//Mongo.createCollection();

//Mongo.createCollection("NewCollection");

//Mongo.createAccount('Another Test','123','pixalynx@gmail.com');

//Mongo.TestConnect();

//Mongo.createEntry("Wooooooot it works");

server.startServer(2000);
server.HandleRoutes();








