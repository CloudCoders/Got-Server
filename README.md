# Got-Server
Nodejs, Express, Passport, mongose api server

<h2>Initialize</h2>
Download and install node.js <br/>
Download and install mongodb (Create db folder or when mongo start throw an error) <br/>

1) Open a terminal and go to the project folder. <br/>
  Download all the dependencies with: npm install <br/>

2) Open other terminal for start mongodb, go to mongodb folder and open mongod.exe <br/>

<h2>Run options</h2>
3.1) To run in production <br/>
  In the terminal with the node project folder run : node app.js <br/>
  and the server will start on <a src="http://localhost:3000/">http://localhost:3000/</a> <br/>
  If all go fine in the terminal appear the next message 'Node server running on http://localhost:3000 Connected to Database' <br/>

3.1) To debug<br/>
  Download node-inspector: npm install -g node-inspector<br/>
  Open a terminal and write: node-inspector &<br/>
  Open other terminal in the project folder and write: node --debug app.js<br/>
  Open in chrome the url that the terminal say and debug.<br/>

3.3) To develop fast use nodemon for dont restart the server all the time.<br/>
  Open a terminal in the project folder and write: npm start.<br/>
  When change the code and save u can see how nodemon restart the server.<br/>


  <h2>Model examples</h2>

-- House --
```json
  {
    "_id": "57697694bd33bee81c000001", // Autogenerated, dont include in post method
    "name": "Stark",
    "watchword": "Winter is comming",
    "imageurl": "http://st-listas.20minutos.es/images/2012-07/338740/3645213_249px.jpg?1343563047",
    "__v": 0
  }
```
-- Character --
```json
  {
    "_id": "57697992bd33bee81c000008", // Autogenerated, dont include in post method
    "name": "Daenerys Targaryen",
    "imageurl": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRWnZAMq3RfivCTchW6O0hMRa-nBP7B6j2r4It7xL3xhneMx29NhWQ",
    "house_id": "576976cebd33bee81c000002",
    "__v": 0
  }
```

<h2>Request</h2>

-- House -- <br/>
```
method: get   req: /houses  (findAllHouses)
method: get   req: /house/:id (findById)
method: post  req: /house   (addHouse) In the body request send the object with type json
method: put   req: /house/:id   (updateHouse) In the body request send the object with type json
method: delete  req: /house/:id   (deleteHouse)
```
-- Character -- <br/>
```
method: get   req: /characters  (findAllCharacters)
method: get   req: /character/:id (findById)
method: post  req: /character   (addCharacter) In the body request send the object with type json
method: put   req: /character/:id   (updateCharacter) In the body request send the object with type json
method: delete  req: /character/:id   (deleteCharacter)
```
-- User -- <br/>
```
method: get   req: /users  (findAllUsers)
method: get   req: /user/:id (findById)

method: put   req: /user/:id   (updateUser) Only login in
method: delete  req: /user/:id   (deleteUser) Only login in

method: post   req: /signin (adduser) In the body request send the object with type json
method: post   req: /login (CheckUser) In the body request send the object with type json
method: get   req: /logout 
```
