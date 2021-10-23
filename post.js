var http=require('http');
var querystring=require('querystring');
http.createServer(function(req,res)
{
        var data1='';
        req.on('data',function (chunk)
        { 
             data1+=chunk;
        });
        req.on('end',function()
        {
               qs=querystring.parse(data1);
    var name1= qs["name"];
    var name2= qs["rno"];
    var name3= qs["gender"];
    var name4= qs["year"];
    var name5= qs["dname"];
    var name6= qs["email"];
    var name7= qs["mno"];
    res.write("NAME :"+name1+"  \n\nROLLNO :"+name2+" \n\nGENDER  : "+name3+" \n\nYEAR :"+name4+" \n\nDEPARTMENT NAME :"+name5+" \n\nEMAIL :"+name6+" \n\nMOBILE NUMBER :"+name7);
    res.end();
        });
}).listen (8011);