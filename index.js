/*const http=require('http');

http.createServer(function(req,res){
res.write('hello node.js')
res.end();
}).listen(3000,function(){
    console.log('Server at http://localhost:3000');
})

 
 }
 xhr.send() */


 const requestURL='https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3'
 let request = new XMLHttpRequest();
 request.open('GET', requestURL);
 request.onload = function() {
  let array=JSON.parse(request.response)
  for(let i=0;i<array.length;i++){
  oneUl.children[i].textContent=array[i].ccy
   twoUl.children[i].textContent=array[i].base_ccy
    threeUl.children[i].textContent=array[i].buy
     fourUl.children[i].textContent=array[i].sale
   }
 };
 
 request.send();