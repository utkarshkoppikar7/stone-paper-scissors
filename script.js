function select(id2){
	var id=id2.alt;
	var s1;
	var x = Math.floor((Math.random() * 3) + 1);
	if(x==1){
		//console.log("Computer Selected:"+"Stone");
		s1="Stone";
	}
	else if(x==2){
		//console.log("Computer Selected:"+"Paper");
		s1="Paper";
	}
	else if(x==3){
		//console.log("Computer Selected:"+"Scissors");
		s1="Scissors";
	}
	//console.log("You selected :"+id);
	var res="";
	if(id==s1){
		//console.log("It's a draw");
		res="It's a draw";
	}
	else
	{
		if(id=="Stone"){
			if(s1=="Paper"){
				//console.log("You Won!! :)");
				res="You Won!! :)";
			}
			else{
				//console.log("You Lost!! :(");
				res="You Lost!! :(";
			}
		}
		else if(id=="Paper"){
			if(s1=="Scissors"){
				//console.log("You Won!! :)");
				res="You Won!! :)";
			}
			else{
				//console.log("You Lost!! :(");
				res="You Lost!! :(";
			}
		}
		else if(id=="Scissors"){
			if(s1=="Stone"){
				//console.log("You Won!! :)");
				res="You Won!! :)";
			}
			else{
				//console.log("You Lost!! :(");
				res="You Lost!! :(";
			}
		}
	}
	//res+="      ";
	//setTimeout(disp,2000);
	var str=res+"\nComputer selected:"+s1+"\nYou selected:"+id+"\n\nClick here to continue";
	console.log(str);
	document.getElementById('cnt').innerHTML=str;	
	document.getElementById('rect').style.display="block";
}
function disp(){
	document.getElementById('rect').style.display="none";
	//alert(res)
}