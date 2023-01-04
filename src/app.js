const express = require("express");
const app = express();
const fs = require("fs");
const port = 3002;



app.get("/get_prod_list", (request, response) => {
  fs.readFile("src/models/data.json", "utf8", (error, data) => {
    if (error) {
      console.error(error);
    } else {
      try {
        const prod = JSON.parse(data);
        response.send(prod);
      } catch (error) {
        console.error(error);
      }
    }
  });
});

app.get("/get_prod_by_id/:id", (request, response) => {
    
})


app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
