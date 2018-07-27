var fruits=[{
	name:"apple",
	category:"fruits",
    prize:50,
    quantity:0	
},
{
	name:"kiwi",
	category:"fruits",
    prize:20,
    quantity:0	
},
{
	name:"mango",
	category:"fruits",
	prize:30,
    quantity:0	
},
{
	name:"watermelon",
	category:"fruits",
	prize:30,
    quantity:0	
},
{
	name:"banana",
	category:"fruits",
	prize:20,
    quantity:0
},
{
	name:"pomegranate",
	category:"fruits",
	prize:50,
    quantity:0	
},
{
	name:"papaya",
	category:"fruits",
	prize:36,
    quantity:0	
},
{
	name:"orange",
	category:"fruits",
	prize:80,
    quantity:0	
},
{
	name:"avocada",
	category:"fruits",
	prize:135,
    quantity:0	
},
{
	name:"muskmelon",
	category:"fruits",
	prize:34,
    quantity:0	
}];


var vegetables=[{
	name:"beans",
	category:"vegetables",
	prize:20,
    quantity:0	
},
{
	name:"palak",
	category:"vegetables",
	prize:19,
    quantity:0	
},
{
	name:"onion",
	category:"vegetables",
	prize:24,
    quantity:0	
},
{
	name:"potato",
	category:"vegetables",
	prize:28,
    quantity:0	
},
{
	name:"tomato",
	category:"vegetables",
	prize:10,
    quantity:0	
},
{
	name:"cauliflower",
	category:"vegetables",
	prize:19,
    quantity:0	
},
{
	name:"capsicum",
	category:"vegetables",
	prize:100,
    quantity:0	
},
{
	name:"carror",
	category:"vegetables",
	prize:80,
    quantity:0	
},
{
	name:"mashrooms",
	category:"vegetables",
	prize:52,
    quantity:0	
},
{
	name:"cucumber",
	category:"vegetables",
	prize:24,
    quantity:0	
}];

var grocery=[{
	name:"soyabin oil",
	category:"grocery",
	prize:99,
    quantity:0	
},
{
	name:"rice",
	category:"grocery",
	prize:44,
    quantity:0	
},
{
	name:"salt",
	category:"grocery",
	prize:18,
    quantity:0	
},
{
	name:"haldi",
	category:"grocery",
	prize:38,
    quantity:0	
},
{
	name:"ghee",
	category:"grocery",
	prize:349,
    quantity:0	
},
{
	name:"ata",
	category:"grocery",
	prize:256,
    quantity:0	
},
{
	name:"besan",
	category:"grocery",
	prize:46,
    quantity:0	
},
{
	name:"red chilli powder",
	category:"grocery",
	prize:22,
    quantity:0	
},
{
	name:"hing",
	category:"grocery",
	prize:56,
    quantity:0	
},
{
	name:"poha",
	category:"grocery",
	prize:49,
    quantity:0
}];


var dairy=[{
	name:"milk",
	category:"dairy",
	prize:35,
    quantity:0
},
{
	name:"cream",
	category:"dairy",
	prize:59,
    quantity:0
},
{
	name:"chaas",
	category:"dairy",
	prize:5,
    quantity:0
},
{
	name:"buttermilk",
	category:"dairy",
	prize:10,
    quantity:0
},
{
	name:"dessert",
	category:"dairy",
	prize:34,
    quantity:0
},
{
	name:"icecream",
	category:"dairy",
	prize:56,
    quantity:0
},
{
	name:"yoghurt",
	category:"dairy",
	prize:58,
    quantity:0
},
{
	name:"milk",
	category:"dairy",
	prize:38,
    quantity:0
},
{
	name:"cheese",
	category:"dairy",
	prize:71,
    quantity:0
},
{
	name:"ghee",
	category:"dairy",
	prize:47,
    quantity:0
}];
myRow ="<tr><th>Name</th><th>Category</th><th>Prize</th><th>Quantity</th></tr>";
function search()
{
	document.getElementById("myTable").innerHTML="";
    rowNo=0;
    var search=document.getElementById("iField").value;
    var regex=new RegExp(search,"g");
    fruits.forEach((fruit)=>{
        if(fruit.name.toLowerCase().match(regex))
            printRows(fruit);
    });
    vegetables.forEach((vegitable)=>{
        if(vegitable.name.toLowerCase().match(regex))
            printRows(vegitable);
    });
    grocery.forEach((groc)=>{
        if(groc.name.toLowerCase().match(regex))
            printRows(groc);
    });
    dairy.forEach((dair)=>{
        if(dair.name.toLowerCase().match(regex))
            printRows(dair);
    });
    document.getElementById("myTable").innerHTML=myRow;

}
function printRows(object)
{
    myRow = myRow + "<tr><td id=name"+rowNo+">" + object.name + "</td><td>" +object.category + "</td><td>" +
                     object.prize + "</td><td><input type='number' id=row"+rowNo+" name='quantity' min='0' max='5'></td></tr>";
    rowNo++;
}
cartRow="<th>Name</th><th>Quantity</th>";
i=0;
function addToCart()
{   
    for(;i<rowNo;i++){
        var qnt=document.getElementById("row"+i).value;
        if(qnt>0){
           var itemName= document.getElementById("name"+i).innerHTML;
		   cartRow=cartRow+"<tr><td>"+itemName+"</td><td>"+qnt+"</td></tr>";
        }
    }   
    document.getElementById("rightCart").innerHTML=cartRow;
}
function clearTable(){
    var tableRef = document.getElementById('itemTable');
     while ( tableRef.rows.length > 0 )
 {
  tableRef.deleteRow(0);
 }
}
function checkOut(){
    var itemNo=1;
    var tableLength = document.getElementById('rightCart').rows.length;
    console.log(tableLength);
    while ( itemNo < tableLength )
    {
       var item=document.getElementById("nameInCart"+itemNo).value;
       searchJSON(item);
       itemNo++;
    }   
}
function searchJSON(myItemName){

    var regex=new RegExp(myItemName,"i");
    fruits.forEach((fruit)=>{
        if(fruit.name.match(regex))
            printRowsBill(fruit);
    });
    vegetables.forEach((vegitable)=>{
        if(vegitable.name.toLowerCase().match(regex))
            printRowsBill(vegitable);
    });
    grocery.forEach((groc)=>{
        if(groc.name.toLowerCase().match(regex))
            printRowsBill(groc);
    });
    dairy.forEach((dair)=>{
        if(dair.name.toLowerCase().match(regex))
            printRowsBill(dair);
    });

}
billRow="<tr><th>Name</th><th>cetegory</th><th>MRP</th><th>Quantity</th><th>Price</th>";
function printRowsBill(my)
{
    billRow+="<tr><td>"+my.name+"</td><td>"+my.category+"</td><td>"+my.price+"</td><td>"+my.price+"<tr/>";
}
