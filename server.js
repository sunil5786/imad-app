var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    articleone : {    },
    articletwo : { },
    articlethree : { },
};


      function createtemplate(data){
    var title = data.file;
    var date = data.date;
    var heading = data.header;
    var content = data.content ;
    
var htmlTemplate = `
<html>
  <head>
  
      <title> 
      
      ${title} 
      
      </title>
      
   <link href="/ui/style.css" rel="stylesheet" />
</head>

<body>
    <div class="container">
    <div>
        
        <a href="/">Home </a>
        
        </div>
        <hr/>
<h3>
    ${heading}
    
    </h3>    
    
    <div>
        ${date}
        
    </div>
    
    <div>
       ${content}
    </div>
    </div>
</body>
</html>

`;
return htmlTemplate;
}








    
    
`
    <p>
    this is my content for my first article .this is my content for my first article .this is my content for my first article .this is my content for my first article .this is my content for my first article .this is my content for my first article .this is my content for my first article .this is my content for my first article .this is my content for my first article .this is my content for my first article .
    </p>
    <p>
    this is my content for my first article .this is my content for my first article .this is my content for my first article .this is my content for my first article .this is my content for my first article .this is my content for my first article .this is my content for my first article .this is my content for my first article .this is my content for my first article .this is my content for my first article .
    </p>
    <p>
    this is my content for my first article .this is my content for my first article .this is my content for my first article .this is my content for my first article .this is my content for my first article .this is my content for my first article .this is my content for my first article .this is my content for my first article .this is my content for my first article .this is my content for my first article .
    </p>
        `
    
};


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one', function(req,res){
  res.sendcreateTemplate(articleone));
});

app.get('/article-two', function(req,res){
  res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three', function(req,res){
   res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
