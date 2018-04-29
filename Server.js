const express = require("express");
const app = express();

const DataStructure = require("./mongo");
const Mongo = new DataStructure();

var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

var myobj = {
  login: "maecapozzi",
  id: 11462208,
  avatar_url: "https://avatars2.githubusercontent.com/u/11462208?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/maecapozzi",
  html_url: "https://github.com/maecapozzi",
  followers_url: "https://api.github.com/users/maecapozzi/followers",
  following_url:
    "https://api.github.com/users/maecapozzi/following{/other_user}",
  gists_url: "https://api.github.com/users/maecapozzi/gists{/gist_id}",
  starred_url: "https://api.github.com/users/maecapozzi/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/maecapozzi/subscriptions",
  organizations_url: "https://api.github.com/users/maecapozzi/orgs",
  repos_url: "https://api.github.com/users/maecapozzi/repos",
  events_url: "https://api.github.com/users/maecapozzi/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/maecapozzi/received_events",
  type: "User",
  site_admin: false,
  name: "Mae Capozzi",
  company: null,
  blog: "maecapozzi.github.io",
  location: "Brooklyn, New York",
  email: null,
  hireable: true,
  bio: "Software Engineer ",
  public_repos: 45,
  public_gists: 12,
  followers: 11,
  following: 14,
  created_at: "2015-03-13T15:26:37Z",
  updated_at: "2018-04-19T21:32:55Z"
};

class Server {
  constructor(myServer) {
    this.myServer = app;
  }

  startServer(PORT) {
    app.listen(PORT, () => console.log(`Server starting on port ${PORT}`));
    //HandleRoutes();
  }

  HandleRoutes() {
    app.get("/", (req, res) => res.send(myobj));
    app.get("/Data", (req, res) => res.send("dataaaaa"));
    app.post("/Accounts", function(req, res) {
      Mongo.createAccount(req.body.username, req.body.password, req.body.email);
      res.send(`Account Created for ${req.body.username}`);
    });
  }
}

//app.get('/', (req, res) => res.send('Hello World!'))

//app.listen(3000, () => console.log('Example app listening on port 3000!'))

module.exports = Server;
