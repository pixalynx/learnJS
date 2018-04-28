var fs = require("fs");
var string = fs.readFileSync("setting.json", "utf8");
var obj = JSON.parse(string);

const MongoClient = require("mongodb").MongoClient;

var url = `mongodb://${obj.Host}:${obj.Port}/${obj.Database}`;

class DataStructure {
  constructor(client) {
    this.client = MongoClient;
  }

  connect() {
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      console.log("Successfully Connected to mongoDB ? ");
      db.close();
    });

    return "test";
  }

  createCollection(collectionName) {
    this.collectionName = collectionName;

    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      console.log("Successfully Connected to mongoDB ? ");
      var dbo = db.db(`${obj.Database}`);
      dbo.createCollection(collectionName, function(err, res) {
        if (err) throw err;
        console.log("Collection Created");
        db.close();
      });
    });
  }

  createAccount(username, password, email) {
    this.username = username;
    this.password = password;
    this.email = email;

    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db(`${obj.Database}`);
      var myobj = {
        Username: `${username}`,
        Password: `${password}`,
        Email: `${email}`
      };
      dbo.collection("Accounts").insertOne(myobj, function(err, res) {
        if (err) throw err;
        console.log(`User ${username} has been added to the database`);
        db.close();
      });
    });
  }

  TestConnect(){

    //this.dbCallBack = doCallBack;

    MongoClient.connect(url, function(err, dbCallBack) {
      if (err) throw err;
      console.log("Successfully Connected to mongoDB ? ");
      return dbCallBack;
    });


  }


  createEntry(SomeEntry){

    this.SomeEntry = SomeEntry;
     
    MongoClient.connect(url, function(err, db){
      if(err) throw err;   
      var dbo = db.db(`${obj.Database}`);
      var myobj = {
        SomeEntry : `${SomeEntry}`
      }

      dbo.collection("TestEntry").insertOne(myobj, function(err, res){
        if(err) throw err;
        console.log(`Some Entry has been made with the value ${SomeEntry}`);
        db.close();
      })

    })
    
    

    }

   
  

}

module.exports = DataStructure;
