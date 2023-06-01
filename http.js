console.log("you are enterig your javascript")
const username = document.getElementById('username');
username.addEventListener('click',getusername, true);
function getusername(){
    console.log("clicking the username button");
        // Instantiate an xhr object
    const request = new XMLHttpRequest();
             //open object
    request.open('GET','https://dummyjson.com/products',true);
    //progress code is here like spinning.. loading... 
    request.onprogress = function(){
        console.log("ajax progress going on ")
    }
    //when request is successful
    request.onload = function(){
        console.log("ajax request successful");
        let result = JSON.parse(this.responseText)
        console.log(result.products);
        let data = document.getElementById('name');
        str = "";
        for(var i = 0; i < result.products.length; i++){
            str += `<td>${result.products[i].title}</td><br>`;        }
        data.innerHTML = str;
    }
    
    request.send();

}

const userage = document.getElementById('userprice');
userage.addEventListener('click',getuserage, true);

function getuserage(){
    console.log("clicking the userage button");
    const request = new XMLHttpRequest();
    request.open('GET','https://dummyjson.com/products',true);
    request.onprogress = function(){
        console.log("progress is going on ");
    }
    request.onload = function(){
        console.log("ID is loading ");
        let result = JSON.parse(this.responseText);
        console.log(result);
        let data2 = document.getElementById('price');
        str1 = "";
        for (var i = 0; i < result.products.length; i++) {
            str1 += `<td>${result.products[i].price}</td><br>`;
        }
        data2.innerHTML = str1;
    }
    request.onerror = function(){
        console.log("Error loading");
    }
    request.send();
}

const userid = document.getElementById('userid');
userid.addEventListener('click', getuserid, true);

function getuserid(){
console.log("you are clicking the id button");
const request = new XMLHttpRequest();
request.open('GET', 'https://dummyjson.com/products', true);
request.onprogress = function(){
    console.log("your data is cooking");
} 
request.onload = function(){
    let result = JSON.parse(this.responseText);
    console.log(result);
    let data3 = document.getElementById('id');
    let str = "";
    for(var i = 0; i < result.products.length; i++){
        str += `<td>${result.products[i].id}</td><br>`;
    }
    data3.innerHTML= str;
}
request.send();
}

const alldata = document.getElementById('alldata');
alldata.addEventListener('click', getalldata, true);

function getalldata(){
    console.log("you are clinked all data button");
    request = new XMLHttpRequest();
    request.open('GET', 'https://dummyjson.com/products', true);
    
    request.onload = function(){
        result = JSON.parse(this.responseText);
        console.log(result);
        let data1 = document.getElementById('id')
        let data2 = document.getElementById('name')
        let data3 = document.getElementById('price')
        str1 = "";
        str2 = "";
        str3 = "";
        for(i=0; i< result.products.length;i++){
            str1 += `<td>${result.products[i].id}</td><br>`;
            str2 += `<td>${result.products[i].title}</td><br>`;
            str3 += `<td>${result.products[i].price}</td><br>`;

        }
        data1.innerHTML = str1;
        data2.innerHTML = str2;
        data3.innerHTML = str3;
    }
  request.send();

}