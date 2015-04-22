/**
 * Created by Morten on 21/04/15.
 */



function getData(amount, data){
    var arr = [];

    var typeArr = data.split(", ");

    for(var i = 0; i < amount; i++){

        var dataObj = {};

        typeArr.forEach(function(elem){
            if(elem == "fname"){
                dataObj[elem] = fnames[Math.floor(Math.random() * fnames.length)]
            }
            if(elem == "lname"){
                dataObj[elem] = lnames[Math.floor(Math.random() * lnames.length)]
            }
            if(elem == "street"){
                dataObj[elem] = streets[Math.floor(Math.random() * streets.length)]
            }
            if(elem == "city"){
                dataObj[elem] = cities[Math.floor(Math.random() * cities.length)]
            }
            if(elem == "zip"){
                dataObj[elem] = zipes[Math.floor(Math.random() * zipes.length)]
            }
        });
        arr.push(dataObj);
    }

    return arr;

};



var fnames = ["Hans", "Peter", "Olga", "Kurt"];

var lnames = ["Hansen", "Petersen", "Henriksen", "Smith"];

var streets = ["Valbygade", "Lyngbyvej", "HC andersensvej"];

var cities = ["Lyngby", "Kokkedal", "Hørsholm", "KBH", "Virum"];

var zipes = [1000, 2000, 3000, 4000, 5000, 6000];

module.exports = {
    getData: getData
}