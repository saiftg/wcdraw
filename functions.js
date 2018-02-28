
 var potA = [
 			{"name":"Russia","init":"RUS","rank":"A"},
 			{"name":"Germany","init":"GER","rank":"A"},
 			{"name":"Brazil","init":"BRA","rank":"B"},
 			{"name":"Portugal","init":"POR","rank":"A"},
 			{"name":"Argentina","init":"ARG","rank":"B"},
 			{"name":"Belgium","init":"BEL","rank":"A"},
 			{"name":"Poland","init":"POL","rank":"A"},
 			{"name":"France","init":"FRA","rank":"A"}

 ];

 var conmebol = [];


 // function conm(group){
 // 	if(group[0].rank === 'B'){

 // 		conmebol.push
 // 	}

 // }

 function spread1(){

 	document.getElementById("pot10").innerHTML = `<img src="images/Russia.png" />`
 	document.getElementById("pot11").innerHTML = `<img src="images/Germany.png" />`
 	document.getElementById("pot12").innerHTML = `<img src="images/Brazil.png" />`
 	document.getElementById("pot13").innerHTML = `<img src="images/Portugal.png" />`
 	document.getElementById("pot14").innerHTML = `<img src="images/Argentina.png" />`
 	document.getElementById("pot15").innerHTML = `<img src="images/Belgium.png" />`
 	document.getElementById("pot16").innerHTML = `<img src="images/Poland.png" />`
 	document.getElementById("pot17").innerHTML = `<img src="images/France.png" />`


 }
 function spread2(){

 	document.getElementById("2a").innerHTML = `<img src="images/Spain.png" />`
 	document.getElementById("2b").innerHTML = `<img src="images/Peru.png" />`
 	document.getElementById("2c").innerHTML = `<img src="images/Switzerland.png" />`
 	document.getElementById("2d").innerHTML = `<img src="images/England.png" />`
 	document.getElementById("2e").innerHTML = `<img src="images/Colombia.png" />`
 	document.getElementById("2f").innerHTML = `<img src="images/Mexico.png" />`
 	document.getElementById("2g").innerHTML = `<img src="images/Uruguay.png" />`
 	document.getElementById("2h").innerHTML = `<img src="images/Croatia.png" />`


 }

 function spread3(){

 	document.getElementById("3a").innerHTML = `<img src="images/Denmark.png" />`
 	document.getElementById("3b").innerHTML = `<img src="images/Iceland.png" />`
 	document.getElementById("3c").innerHTML = `<img src="images/Costa Rica.png" />`
 	document.getElementById("3d").innerHTML = `<img src="images/Sweden.png" />`
 	document.getElementById("3e").innerHTML = `<img src="images/Tunisia.png" />`
 	document.getElementById("3f").innerHTML = `<img src="images/Egypt.png" />`
 	document.getElementById("3g").innerHTML = `<img src="images/Senegal.png" />`
 	document.getElementById("3h").innerHTML = `<img src="images/Iran.png" />`


 }

function spread4(){

 	document.getElementById("4a").innerHTML = `<img src="images/Serbia'.png" />`
 	document.getElementById("4b").innerHTML = `<img src="images/Nigeria.png" />`
 	document.getElementById("4c").innerHTML = `<img src="images/Australia.png" />`
 	document.getElementById("4d").innerHTML = `<img src="images/Japan.png" />`
 	document.getElementById("4e").innerHTML = `<img src="images/Morocco.png" />`
 	document.getElementById("4f").innerHTML = `<img src="images/Panama.png" />`
 	document.getElementById("4g").innerHTML = `<img src="images/South Korea.png" />`
 	document.getElementById("4h").innerHTML = `<img src="images/Saudi Arabia.png" />`


 }
 var potB = [
 			{"name":"Spain","init":"ESP","rank":"A"},
 			{"name":"Peru","init":"PER","rank":"B"},
 			{"name":"Switzerland","init":"SUI","rank":"A"},
 			{"name":"England","init":"ENG","rank":"A"},
 			{"name":"Colombia","init":"COL","rank":"B"},
 			{"name":"Mexico","init":"MEX","rank":"E"},
 			{"name":"Uruguay","init":"URU","rank":"B"},
 			{"name":"Croatia","init":"CRO","rank":"A"}
 ];

 var potC = [
 			{"name":"Denmark","init":"DEN","rank":"A"},
 			{"name":"Iceland","init":"ISL","rank":"A"},
 			{"name":"Costa Rica","init":"CRC","rank":"E"},
 			{"name":"Sweden","init":"SWE","rank":"A"},
 			{"name":"Tunisia","init":"TUN","rank":"C"},
 			{"name":"Egypt","init":"EGY","rank":"C"},
 			{"name":"Senegal","init":"SEN","rank":"C"},
 			{"name":"Iran","init":"IRN","rank":"D"}
 ];

 var potD = [
 			{"name":"Serbia","init":"SRB","rank":"A"},
 			{"name":"Nigeria","init":"NGR","rank":"C"},
 			{"name":"Australia","init":"AUS","rank":"D"},
 			{"name":"Japan","init":"JAP","rank":"D"},
 			{"name":"Morocco","init":"MAR","rank":"C"},
 			{"name":"Panama","init":"PNM","rank":"E"},
 			{"name":"South Korea","init":"KOR","rank":"D"},
 			{"name":"Saudi Arabia","init":"KSA","rank":"D"}
 ]


var groupA=[];
var groupB=[];
var groupC=[];
var groupD=[];
var groupE=[];
var groupF=[];
var groupG=[];
var groupH=[];




function pot1(){

	
	
	console.log("===========");


	document.getElementById("a1").innerHTML = (`<img src="images/${potA[0].name}.png" />` +" "+ potA[0].name);
	groupA.push(potA[0]);
	potA.splice(0,1);
	
	// potA.push({"init": "BOOBS"});



    var randz = Math.floor(Math.random() * potA.length)
 	console.log(randz);
	var select1 = potA.splice(randz,1)
	console.log(select1)
	groupB.push(select1[0]);
	console.log(groupA);

setTimeout(function(){document.getElementById("b1").innerHTML = `<img src="images/${select1[0].name}.png" />` +" "+ select1[0].name},1000);

	var randz = Math.floor(Math.random() * potA.length)
 	console.log(randz);
	var select2 = potA.splice(randz,1)
	console.log(select2)
	groupC.push(select2[0]);

setTimeout(function(){document.getElementById("c1").innerHTML = `<img src="images/${select2[0].name}.png" />` +" "+ select2[0].name},2000);
	
	var randz= Math.floor(Math.random() * potA.length)
 	console.log(randz);
	var select3 = potA.splice(randz,1)
	console.log(select3)
	groupD.push(select3[0]);

setTimeout(function(){document.getElementById("d1").innerHTML = `<img src="images/${select3[0].name}.png" />` +" "+ select3[0].name},3000);

setTimeout(function(){pot4()},3000);


	var randz = Math.floor(Math.random() * potA.length)
 	console.log(randz);
	var select4 = potA.splice(randz,1)
	console.log(select4)
	groupE.push(select4[0]);

setTimeout(function(){document.getElementById("e1").innerHTML = `<img src="images/${select4[0].name}.png" />` +" "+ select4[0].name},4000);

	var randz = Math.floor(Math.random() * potA.length)
 	console.log(randz);
	var select5 = potA.splice(randz,1)
	console.log(select5)
	groupF.push(select5[0]);

setTimeout(function(){document.getElementById("f1").innerHTML = `<img src="images/${select5[0].name}.png" />` +" "+ select5[0].name},5000);



	var randz = Math.floor(Math.random() * potA.length)
 	console.log(randz);
	var select6 = potA.splice(randz,1)
	console.log(select6)
	groupG.push(select6[0]);

setTimeout(function(){document.getElementById("g1").innerHTML = `<img src="images/${select6[0].name}.png" />` +" "+ select6[0].name},6000);

	var randz = Math.floor(Math.random() * potA.length)
 	console.log(randz);
	var select7 = potA.splice(randz,1)
	console.log(select7)
	groupH.push(select7[0]);

setTimeout(function(){document.getElementById("h1").innerHTML = `<img src="images/${select7[0].name}.png" />` +" "+ select7[0].name},7000);

setTimeout(function(){spread1()},8000);	


	var mySpans = document.getElementsByName("pot1");


	// console.log(mySpans);

for(var i=0;i<mySpans.length;i++){

if(mySpans[i].innerHTML == select1[0].name){

mySpans[i].parentNode.removeChild(mySpans[i]);


}

}
}

 //    var elem = document.getElementById("pot1");
 // elem.parentNode.removeChild(elem);

 //  	}

 function pot4(){

	

	console.log("=D===D====D===D");


	var randz0 = Math.floor(Math.random() * potD.length)
 	console.log(randz0);
	var select0 = potD.splice(randz0,1)
	console.log(select0);
	groupA.push(select0[0]);

setTimeout(function(){document.getElementById("a4").innerHTML = `<img src="images/${select0[0].name}.png" />` +" "+ select0[0].name},0);



    var randz1 = Math.floor(Math.random() * potD.length)
 	console.log(randz1);
	var select1 = potD.splice(randz1,1)
	console.log(select1);
	groupB.push(select1[0]);

setTimeout(function(){document.getElementById("b4").innerHTML = `<img src="images/${select1[0].name}.png" />` +" "+ select1[0].name},1000);


	var randz2 = Math.floor(Math.random() * potD.length)
 	console.log(randz2);
	var select2 = potD.splice(randz2,1)
	console.log(select2);
	groupC.push(select2[0]);

setTimeout(function(){document.getElementById("c4").innerHTML = `<img src="images/${select2[0].name}.png" />` +" "+ select2[0].name},2000);

	
	var randz3= Math.floor(Math.random() * potD.length)
 	console.log(randz3);
	var select3 = potD.splice(randz3,1)
	console.log(select3);
	groupD.push(select3[0]);

setTimeout(function(){document.getElementById("d4").innerHTML = `<img src="images/${select3[0].name}.png" />` +" "+ select3[0].name},3000);

setTimeout(function(){pot3()},3000);


	var randz4 = Math.floor(Math.random() * potD.length)
 	console.log(randz4);
	var select4 = potD.splice(randz4,1)
	console.log(select4);
	groupE.push(select4[0]);

setTimeout(function(){document.getElementById("e4").innerHTML = `<img src="images/${select4[0].name}.png" />` +" "+ select4[0].name},4000);


	var randz5 = Math.floor(Math.random() * potD.length)
 	console.log(randz5);
	var select5 = potD.splice(randz5,1)
	console.log(select5);
	groupF.push(select5[0]);

setTimeout(function(){document.getElementById("f4").innerHTML = `<img src="images/${select5[0].name}.png" />` +" "+ select5[0].name},5000);



	var randz6 = Math.floor(Math.random() * potD.length)
 	console.log(randz6);
	var select6 = potD.splice(randz6,1)
	console.log(select6);
	groupG.push(select6[0]);

setTimeout(function(){document.getElementById("g4").innerHTML = `<img src="images/${select6[0].name}.png" />` +" "+ select6[0].name},6000);


	var randz7 = Math.floor(Math.random() * potD.length)
 	console.log(randz7);
	var select7 = potD.splice(randz7,1)
	console.log(select7);
	groupH.push(select7[0]);

setTimeout(function(){document.getElementById("h4").innerHTML = `<img src="images/${select7[0].name}.png" />` +" "+ select7[0].name},7000);

setTimeout(function(){spread4()},8000);	


	console.log(groupH)

	var mySpans = document.getElementsByName("pot1");


	// console.log(mySpans);

for(var i=0;i<mySpans.length;i++){

if(mySpans[i].innerHTML == select1[0].name){

mySpans[i].parentNode.removeChild(mySpans[i]);


}

}
}



function pot3(){

	

	console.log("=C===C====C===C");


	var randz0 = Math.floor(Math.random() * potC.length)
 	console.log(randz0);
	var select0 = potC.splice(randz0,1)
	console.log(select0);
	groupA.splice(1,0,select0[0]);

setTimeout(function(){document.getElementById("a3").innerHTML = `<img src="images/${select0[0].name}.png" />` +" "+ select0[0].name},00);



    var randz1 = Math.floor(Math.random() * potC.length)
 	console.log(randz1);
	var select1 = potC.splice(randz1,1)
	console.log(select1);
	groupB.splice(1,0,select1[0]);

setTimeout(function(){document.getElementById("b3").innerHTML = `<img src="images/${select1[0].name}.png" />` +" "+ select1[0].name},1000);
 

	var randz2 = Math.floor(Math.random() * potC.length)
 	console.log(randz2);
	var select2 = potC.splice(randz2,1)
	console.log(select2);
	groupC.splice(1,0,select2[0]);

setTimeout(function(){document.getElementById("c3").innerHTML = `<img src="images/${select2[0].name}.png" />` +" "+ select2[0].name},2000);
 
	
	var randz3= Math.floor(Math.random() * potC.length)
 	console.log(randz3);
	var select3 = potC.splice(randz3,1)
	console.log(select3);
	groupD.splice(1,0,select3[0]);

setTimeout(function(){document.getElementById("d3").innerHTML = `<img src="images/${select3[0].name}.png" />` +" "+ select3[0].name},3000);
 
setTimeout(function(){pot2()},3000);


	var randz4 = Math.floor(Math.random() * potC.length)
 	console.log(randz4);
	var select4 = potC.splice(randz4,1)
	console.log(select4);
	groupE.splice(1,0,select4[0]);

setTimeout(function(){document.getElementById("e3").innerHTML = `<img src="images/${select4[0].name}.png" />` +" "+ select4[0].name},4000);
 

	var randz5 = Math.floor(Math.random() * potC.length)
 	console.log(randz5);
	var select5 = potC.splice(randz5,1)
	console.log(select5);
	groupF.splice(1,0,select5[0]);

setTimeout(function(){document.getElementById("f3").innerHTML = `<img src="images/${select5[0].name}.png" />` +" "+ select5[0].name},5000);
 


	var randz6 = Math.floor(Math.random() * potC.length)
 	console.log(randz6);
	var select6 = potC.splice(randz6,1)
	console.log(select6);
	groupG.splice(1,0,select6[0]);

setTimeout(function(){document.getElementById("g3").innerHTML = `<img src="images/${select6[0].name}.png" />` +" "+ select6[0].name},6000);
 

	var randz7 = Math.floor(Math.random() * potC.length)
 	console.log(randz7);
	var select7 = potC.splice(randz7,1)
	console.log(select7);
	groupH.splice(1,0,select7[0]);

setTimeout(function(){document.getElementById("h3").innerHTML = `<img src="images/${select7[0].name}.png" />` +" "+ select7[0].name},7000);
 
setTimeout(function(){spread3()},8000);	


console.log(groupA)

	var mySpans = document.getElementsByName("pot1");


	// console.log(mySpans);

for(var i=0;i<mySpans.length;i++){

if(mySpans[i].innerHTML == select1[0].name){

mySpans[i].parentNode.removeChild(mySpans[i]);


}

}
}


function pot2(){

	

	console.log("=B===B====B===B");


	var randz0 = Math.floor(Math.random() * potB.length)
 	console.log(randz0);
 	if(groupA[0].rank && potB[randz0].rank !== 'B'){
	var select0 = potB.splice(randz0,1)
}else{
	var randz0 = Math.floor(Math.random() * potB.length)
	var select0 = potB.splice(randz0,1) 
}
	console.log(select0);
	groupA.splice(1,0,select0[0]);


setTimeout(function(){document.getElementById("a2").innerHTML = `<img src="images/${select0[0].name}.png" />` +" "+ select0[0].name},0);



    var randz1 = Math.floor(Math.random() * potB.length)
 	console.log(randz1);
	var select1 = potB.splice(randz1,1)
	console.log(select1);
	groupB.splice(1,0,select1[0]);

setTimeout(function(){document.getElementById("b2").innerHTML = `<img src="images/${select1[0].name}.png" />` +" "+ select1[0].name},1000);


	var randz2 = Math.floor(Math.random() * potB.length)
 	console.log(randz2);
	var select2 = potB.splice(randz2,1)
	console.log(select2);
	groupC.splice(1,0,select2[0]);

setTimeout(function(){document.getElementById("c2").innerHTML = `<img src="images/${select2[0].name}.png" />` +" "+ select2[0].name},2000);

	
	var randz3= Math.floor(Math.random() * potB.length)
 	console.log(randz3);
	var select3 = potB.splice(randz3,1)
	console.log(select3);
	groupD.splice(1,0,select3[0]);

setTimeout(function(){document.getElementById("d2").innerHTML = `<img src="images/${select3[0].name}.png" />` +" "+ select3[0].name},3000);


	var randz4 = Math.floor(Math.random() * potB.length)
 	console.log(randz4);
	var select4 = potB.splice(randz4,1)
	console.log(select4);
	groupE.splice(1,0,select4[0]);

setTimeout(function(){document.getElementById("e2").innerHTML = `<img src="images/${select4[0].name}.png" />` +" "+ select4[0].name},4000);


	var randz5 = Math.floor(Math.random() * potB.length)
 	console.log(randz5);
	var select5 = potB.splice(randz5,1)
	console.log(select5);
	groupF.splice(1,0,select5[0]);

setTimeout(function(){document.getElementById("f2").innerHTML = `<img src="images/${select5[0].name}.png" />` +" "+ select5[0].name},5000);



	var randz6 = Math.floor(Math.random() * potB.length)
 	console.log(randz6);
	var select6 = potB.splice(randz6,1)
	console.log(select6);
	groupG.splice(1,0,select6[0]);

setTimeout(function(){document.getElementById("g2").innerHTML = `<img src="images/${select6[0].name}.png" />` +" "+ select6[0].name},6000);


	var randz7 = Math.floor(Math.random() * potB.length)
 	console.log(randz7);
	var select7 = potB.splice(randz7,1)
	console.log(select7);
	groupH.splice(1,0,select7[0]);

setTimeout(function(){document.getElementById("h2").innerHTML = `<img src="images/${select7[0].name}.png" />` +" "+ select7[0].name},7000);

setTimeout(function(){spread2()},8000);	

console.log(groupA);
console.log(groupB);
console.log(groupC);
console.log(groupD);
console.log(groupE);
console.log(groupF);
console.log(groupG);
console.log(groupH);


	var mySpans = document.getElementsByName("pot1");


	// console.log(mySpans);

for(var i=0;i<mySpans.length;i++){

if(mySpans[i].innerHTML == select1[0].name){

mySpans[i].parentNode.removeChild(mySpans[i]);


}

}
}



