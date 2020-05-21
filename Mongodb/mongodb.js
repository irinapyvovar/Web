const fs = require('fs');
const osmosis = require('osmosis');
let savedData = [];

const MongoClient = require("mongodb").MongoClient; 
const url = "mongodb://localhost:27017/";
const сlient = new MongoClient(url, { useNewUrlParser: true }); 

osmosis
  .get('https://www.google.co.in/search?q=Data+Mininghttps://www.google.com/search?q=african+hedgehog&oq=african+hedgehog&aqs=chrome.0.69i59j46j0l6.9020j0j7&sourceid=chrome&ie=UTF-8')
  .paginate('#foot table tr > td a[href]',3)
  .find('#search')
  .find('.g .r')
  .set({
    'Name': 'h3',
    'Link': 'a@href'
    })
  .data(function(data) {
    console.log(data);
    savedData.push(data);
    сlient.connect(err => {
      const collection = сlient.db("MyDataBase").collection("Datas");

      collection.insertOne(data, function(err, result) {

          if (err) {
              return console.log(err);
          }
          console.log(result.ops);
          сlient.close();
        })
    })
  })
  .done(function() {
    fs.writeFile('data.json', JSON.stringify( savedData, null, 4), function(err) {
      if(err) console.error(err);
      else console.log('Data Saved to data.json file');
    });
  });
