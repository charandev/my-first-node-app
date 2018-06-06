const express = require('express');
const hbs = require('hbs');
const app = express();
const port = process.env.PORT || 2000;
hbs.registerPartials(__dirname+'/views/partials');
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'hbs');
app.get('/', (req, res) =>{
  res.render('about',{
    pageTitle:"My New Page",
    content:"Hi there!!",
    footerYear: new Date().getFullYear()
  })
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
