<h1> DOCUMENTATION
</h1>

<h3> Standard API formats for requests and responses for all CRUD endpoints.
</h3>

<h4> CREATE PERSON(USER) REQUEST
</h4>

<h4> PLEASE NOTE THE REQUEST BODY PARAMETERS ARE "name, email, track, slack_name" to perform all CRUD operations
</h4>

<p>METHOD: POST
</p>
<p>URL: [POST](  )
</p>
<p>EXAMPLE BODY
</p>
<code>
 {
 "name": "Akalonu Chukwuduzie Blaise",
 "email": "duziebalise9@gmail.com",
  "track": "backend",
 "slack_name": "Duzie Akalonu",
}
</code>

<p>EXPECTED RESPONSE
</p>
<code>
{
    "message": "Person successfully created",
    "user": {
        "name": "Akalonu Chukwuduzie Blaise",
        "email": "duzieblaise@gmail.com",
        "track": "backend",
        "slack_name": "Duzie Akalonu",
        "_id": "650063a5a239d95504044a57",
        "__v": 0
    }
}
</code>

<h4> FETCH PERSON DETAIL REQUEST
</h4>
<p>METHOD: GET
</p>
<p>URL: [GET](  )
</p>
<p>EXPECTED RESPONSE
</p>
<code>
{
    "message": "Person successfully found",
    "user": {
        "name": "Akalonu Chukwuduzie Blaise",
        "email": "duzieblaise@gmail.com",
        "track": "backend",
        "slack_name": "Duzie Akalonu",
        "_id": "650063a5a239d95504044a57",
        "__v": 0
    }
}
</code>

<h4> UPDATE PERSON DETAIL REQUEST
</h4>
<p>METHOD: PATCH
</p>
<p>URL: [GET](    )
</p>
<p>EXAMPLE BODY: Updating person's firstName and email
</p>
<code>
 {
 "firstName": "Chidubem",
  "email": "brysontech2020@gmail.com",
}
</code>
<p>EXPECTED RESPONSE
</p>
<code>
{
    "message": "Person successfully found and Updated",
    "user": {
        "_id": "650063a5a239d95504044a57",
        "name": "Akalonu Chukwuduzie Blaise",
        "email": "duzieblaise9@gmail.com",
        "track": "backend",
        "slack_name": "Duzie Akalonu",
        "__v": 0
    }
}
</code>

<h4> DELETE PERSON 
</h4>
<p>METHOD: DELETE
</p>
<p>URL: [GET]( )
</p>
<p>EXPECTED RESPONSE
</p>
<code>
{
    success: true,
    message: "Person successfully deleted"
}
</code>

<h3> Instructions for setting up and deploying the API locally or on a server.
</h3>
<h3>deploying locally</h3>
<div align="center">
    <a href="https://drive.google.com/file/d/1vxmcVpUPf0ru4f_Sz65wOKSbPuUEfgcm/view?usp=sharing" target="_blank">Link to view the UML Diagram
</a>
</div>

<h3>HOW TO SETUP LOCALLY
</h3>
<p>==> Clone the repository
</p>
<p>==> Run the "npm install" command in the root of directory.
</p>
<p>==> Create a mongodb cluster or setup a mongodb service on you machine if available.
</p>
<p>==> crete a .env file in the root directory
</p>
<p>==> get your connection string from your mongoDB database and add it to the .env file
</p>
<p>==> add a PORT in the env and set it to 2500 or any port number of your choice
</p>
<p>==> add a MONGO_URI in the env and set it to your mongoDb connection string
</p>
<p>==> run the command on your terminal: nodemon app.js 
</p>
<p>==> the CRUD API should start running
</p>

<h3>THE SOURCE CODE FOR THE API:</h3>
<p>https://github.com/vector-10/HNGx_task_2/blob/main/Controller/userController.js </p>

<h3>UML diagrams (or links to view them)</h3>
https://drive.google.com/file/d/1vxmcVpUPf0ru4f_Sz65wOKSbPuUEfgcm/view?usp=sharing

<h3> Technolgy used</h3>
<ul>
    <li>NodeJS</li>
    <li>MongoDb</li>

</ul>

</p>
