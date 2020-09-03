const express = require("express");
const app = express();
const port = 8001;

app.listen(port, function(err){
    if(err)
    {
        console.log(`Error Encountered: ${err}`);
    }
    console.log(`Server is running at port number: ${port}`);
});