# Got-Server
Nodejs, Express, mongose api server

<h2>Initialize</h2>
Download and install node.js <br/>
Download and install mongodb (Create db folder or when mongo start throw an error) <br/>

1) Open a terminal and go to the project folder. <br/>
  Download all the dependencies with: npm install <br/>
  
2) Open other terminal for start mongodb, go to mongodb folder and open mongod.exe <br/>

3) In the terminal with the node project folder run : node app.js  <br/>
  and the server will start on <a src="http://localhost:3000/">http://localhost:3000/</a> <br/>
  
  If all go fine in the terminal appear the next message 'Node server running on http://localhost:3000 Connected to Database' <br/>
  
  <h2>Model examples</h2>
  
-- House -- 
```json
{
  "name": "Baratheon",
  "imageurl": "http://ia.media-imdb.com/images/M/MV5BMjA3NzMyMzU1MV5BMl5BanBnXkFtZTcwNjc1ODUwMg@@._V1_SY317_CR17,0,214,317_.jpg" 
}
```
-- Character --
```json
{
  "name": "Daenerys Targaryen", 
  "description": "Daenerys Targaryen is the daughter of King Aerys II Targaryen", 
  "house_id": 19000, 
  "imageurl": "http://ia.media-imdb.com/images/M/MV5BMjA3NzMyMzU1MV5BMl5BanBnXkFtZTcwNjc1ODUwMg@@._V1_SY317_CR17,0,214,317_.jpg" 
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
