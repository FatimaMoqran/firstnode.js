'use strict'
var firstName;
/* 
firstName = 'John'

if(firstName ==='John') {
    console.log('Hello John');
} else if (firstName === 'James') {
    console.log('Hello James');
} else{
    console.log('Hello Unknown'); */
/* }

for(var i=0; i<10; i++) {
    console.log(i);
}

var myArr = [1,2,3,true,'John'];

for(var i=0; i<myArr.length; i++) {
    console.log(`${i} element is ${myArr[i]}`);

}
 */

//function sayHi(name) {
    //console.log('Hi'+name);
//}
/* var sayHi = function(name) {
    console.log('Hi' +name);
}
sayHi('Jonh');

function callHi(func, name) {
    func(name);
}

callHi(function(name) {
    console.log('Hi'+name);
},'John');

myArr.forEach(function(element) {
    console.log(element);
});
function myforEach(arr, callback) {
    for(var i =0; i<arr.lenght; i++) {
        callback(arr[i]);
    }
}

myforEach(myArr,function(element) {
    console.log(element)
});
 */
/* var p1 = {
    name:'John',
    title:'Mr.',
    city: 'chicago',
    get_name: function() {
        return this.title+this.name;
    }
};
console.log(p1.get_name());*/

function Person(name, title, city) {
    this.name = name;
    this.title = title;
    this.city = city;
    this.get_name = function() {
        return this.title+this.name;
    }
} 

exports.Person = Person;

var p1 = new Person('John','Mr. ', 'chicago');
var p2 = new Person('James', 'Mr', 'Chicago');

console.log(p1.get_name());
console.log(p2.get_name());

console.log('=============================');
var fs = require('fs');

//var data = fs.readFileSync('./tmp.txt','utf8');
//console.log(data);
 fs.readFile('.tmp.txt','utf8', function(err,data) {
     console.log(data);
 });
 console.log('coming here');

 var http = require('http');

 var url = "http://api.forismatic.com/api/1.0/";
 http.get(url,function(res) {
     var body = '';

     res.on('data', function(chunk) {
         body += chunk;
        });
     res.on('end',function() {
         body = body.replace(/\\/g, '');
         var quote = JSON.parse(body);
         console.log(quote.quoteText);
     }));
 });


