const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

//MIDDLEWARE
app.use(express.static(path.join(__dirname, "../public")));
// app.use("/styles", express.static(path.join(__dirname, "../public")));


//ENDPOINTS

// do this if you are storing multiple things locally in the public folder 
// and it will handle them all

// app.get("/", function(req, res) {
//     res.sendFile(path.join(__dirname, "../public"))
// })


// app.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname, "../public/index.html"));
// });

// app.get('/styles', function(req,res) {
//     res.sendFile(path.join(__dirname, "../public/styles.css"))
// })

// we don't designate a port because the cloud service will
const port = process.env.PORT || 4005;

app.listen(port, () => {
    console.log(`We vibin on port ${port}`)
});


