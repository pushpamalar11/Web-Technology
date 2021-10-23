http=require("http");
url=require('url');
querystring=require('querystring');
function onRequest(request,response)
{
    var path=url.parse(request.url).pathname;
    console.log("URL"+url);
    var query=url.parse(request.url).query;
    console.log("QUERY"+query);
    
    var name1=querystring.parse(query)["name"];
    var name2=querystring.parse(query)["rno"];
    var name3=querystring.parse(query)["gender"];
    var name4=querystring.parse(query)["year"];
    var name5=querystring.parse(query)["dname"];
    var name6=querystring.parse(query)["email"];
    var name7=querystring.parse(query)["mno"];
    response.write("NAME :"+name1+"  \n\nROLLNUMBER :"+name2+" \n\nGENDER : "+name3+" \n\nYEAR OF STUDY : "+name4+" \n\nDEPARTMENT NAME   : "+name5+" \n\nEMAIL : "+name6+" \n\nMOBILE NUMBER:   "+name7);
    response.end();
}
http.createServer(onRequest).listen(8001);