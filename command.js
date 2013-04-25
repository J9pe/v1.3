//define the table search as an object, which can implement both functions and properties
var command = {};

var time = 80;
var timer2 = null;
var time2=10;
var timeForPlayer=2000;
var enlargeVal=new Array();
enlargeVal[0]='60%';enlargeVal[1]='50%';enlargeVal[2]='40%';enlargeVal[3]='30%';enlargeVal[4]='20%';enlargeVal[5]='10%';enlargeVal[6]='0%';


var decreaser=enlargeVal.length-1;
var decreaserForBat=enlargeVal.length-1;

var increaserLeft=0;
var increaserForBatLeft=0;

//initialize the search, setup the current object
command.init = function () {
}


command.quit = function () {
    setTimeout(function () {
        var ww = window.open(window.location, '_self');
        ww.close();
    }, 1000);
}





command.repaint=function(id){
var e = document.getElementById(id);
(e.style.display = 'none') ;
(e.style.display = 'block');

}

command.toggleVisibility = function (id) {
	try
	{
		this.repaint(id);
		var e = document.getElementById(id);
		e.style.display = ((e.style.display != 'none') ? 'none' : 'block');
		
		this.repaint(id);
	}
	catch (err)
	{	
		;
	}
}
command.stretchImage = function (id) 
{
	for(var i=0;i<enemyNumber;i++)
	{
		if(enemyPosition[i] != null)
		{
			var e = document.getElementById(id);
			
			
				f=enemyPosition[i].enemySize();
			
			
			e.style.width=f;
			e.style.height=f;
		
		}
	}
}




command.moveImageToPlayer = function (id, minus) {

	}
	




clearTimer=function(id)
{
alert("Nope");
clearInterval(timer2);
timer2 = null
$('#'+id).text("");

}


command.throwAction=function(id)
{
				random();time2=10;
				if (time2>=10)
				{timing('countdown',1000,10);}
}
		
timing = function (id, t2)
{
	if(timer2 == null)
	{			
		timer2 = setInterval(function(){intTimer2()},t2);
		time2 = 10;
				var oneTime=false;
				function intTimer2()
				{
					if(time2 <= 0)
					{
						clearInterval(timer2);
						alert("You Lose");
						document.getElementById('throwButton').disabled = true;	
						answeredQuestion=true;
						random();
					}
						
					else
					{	
						
						time2--;
						$('#'+id).text(time2);
						document.getElementById('throwButton').disabled = false;

					}
				}
			}	
		}
	
	timingForPlayer = function (id, t3)
{
		/*	
		timerForPlayer = setInterval(function(){intTimer3()},t3);
		timeForPlayer = 10000;
		var p=0;
		
				
				function intTimer3()
				{p++;
					if(timeForPlayer <= 0)
					{
					
						clearInterval(timerForPlayer);
					}
						
					else
					{	
						alert(2);
						var a = $(id);
						var position = a.position();
						if(p%11==0){	
						
							
							$("#"+id).css("up",position+10);
						}
						else if(p%13==0){	
						
							
							$("#"+id).css("up",position);
						}

					}
				}
			*/
		}
	
	


var characterTurn =new Boolean(false);
var enemyTurn =new Boolean(true);
var enemyNumber;
var difficulty = 1;
var eDistance = new Array();
var time = 30;
var a = 1;
var aa = 1;
var playerHP = 3;
var eRandom;
var timer = null;
var tempSize = new Array();
var enemyPosition = new Array();
var tempDist = new Array();
var test;
  
var enemyType =new Array();
enemyType.push(new enemyChar ("Ghost", 1, 1, 'batFly.bmp'));
enemyType.push(new enemyChar ("Frankenstein", 2, 1, 'smiley.gif')); 
enemyType.push(new enemyChar ("Vampire", 1, 2, 'batFly.bmp')); 
enemyType.push(new enemyChar ("enemyType 4", 1, 1, 'smiley.gif')); 
enemyType.push(new enemyChar ("enemyType 5", 1, 1, 'batFly.bmp')); 
enemyType.push(new enemyChar ("enemyType 6", 1, 1, 'smiley.gif'));

var charType =new Array();
enemyType.push(new charAttr ("1", 1));
enemyType.push(new charAttr ("2", 2)); 
enemyType.push(new charAttr ("3", 3));


var candyType =new Array();
candyType.push(new candyAttributes ("candyType 1", 1));
candyType.push(new candyAttributes ("candyType 2", 2)); 
candyType.push(new candyAttributes ("candyType 3", 1)); 
candyType.push(new candyAttributes ("candyType 4", 1)); 
candyType.push(new candyAttributes ("candyType 5", 1)); 
candyType.push(new candyAttributes ("candyType 6", 1)); 



function charAttr(hpPic, health) {
	this.hpPic = hpPic;
	this.health = health;
}


function enemyChar(name, health, speed, eImage) {
	this.health = health;
	this.speed = speed;
	this.name = name;
	this.eImage = eImage;
}

function enemyPos(name, health, speed, distance, image, X, Y) {//INITIALIZES IT
	this.health = health;
	this.speed = speed;
	this.name = name;
	this.distance = distance;
	this.image = image;
	this.X = X;
	this.Y = Y
}

function candyAttributes(name, damage) {
	this.damage = damage;
	this.name = name;
}



candyAttributes.prototype.dmg = function () {

	return this.damage;
}

candyAttributes.prototype.title = function () {

	return this.name;
}



enemyChar.prototype.movement = function () {

	return this.speed;
}

enemyChar.prototype.HP = function () {

	return this.health;
}

enemyChar.prototype.tempImage = function () {

	return this.eImage;
}

enemyChar.prototype.title = function () {
	
	return this.name;
}





	if (difficulty == 1)
	{
		enemyNumber = 3;
	}
	else if (difficulty == 2)
	{
		enemyNumber = 4;
	}
	else
	{
		enemyNumber = 5;
	}
		
	
	enemyPos.prototype.title = function () 
	{
			return this.name;
		}
	
	enemyPos.prototype.HP = function () 
	{
			return this.health;
		}
		
	enemyPos.prototype.movement = function () 
	{
			return this.speed;
		}
		
	enemyPos.prototype.enemyDistance = function () 
	{
		return this.distance;
	}

	enemyPos.prototype.enemyImage = function () 
	{	
		return this.image;
	}
	
	//ANKUN
	enemyPos.prototype.enemyX = function () 
	{
		return this.X;
	}
		enemyPos.prototype.enemyY = function () 
	{
		return this.Y;
	}
		
	
	for(var i=0;i<enemyNumber;i++)
	{
	
		id= "smile"+ i;
		
		eDistance[i] = Math.floor((Math.random()*4)+2);
		eRandom = Math.floor((Math.random()*6)+0);
		
		tempImage = new Image();
		
		var gapX = 0;
			if(i != 0)
			{
				gapX = 	enemyPosition[i-1].enemyX();
			}
		
		enemyPosition[i] = new enemyPos(enemyType[eRandom].title(), 
		enemyType[eRandom].HP(), enemyType[eRandom].movement(), eDistance[i],
		enemyType[eRandom].tempImage(), 100 + gapX, 5);//MONSTER Y IS 5, MONSTER X IS 100 GAP
		
		
		
		
		
		/*$("#"+id).css("left",enemyPosition[i].enemyX());
				
					$("#"+id).css("top",(6-enemyPosition[i].enemyDistance())*60+enemyPosition[i].enemyY()+enemyPosition[i].movement()*40);
					
					
					
					
					if ($("#"+id).position().top>600){$("#"+id).position().top=500;}
					if (enemyPosition[i].enemyDistance()==0){$("#"+id).css("top",(500));}
					command.repaint(id);*/
		
		//document.write(enemyPosition[i].enemyDistance() + ", " + enemyPosition[i].title() + ", "
		//+ enemyPosition[i].HP() + ", " + enemyPosition[i].movement() + ", " + enemyPosition[i].enemyImage() +"<br>");

	}

	


function cTurn()
{
	
	if (characterTurn == true)
	{
		if (playerHP == 3)
		{
		
		}
		
		else if (playerHP == 2)
		{
		
		}
		
		else if (playerHp == 1)
		{
		
		}
		
		else
		{
		
		}
		
		
		
	
	}

}

eTurn = function(id, minus)
{
	
	
	if (enemyTurn == true)
	{
		
		
		for(var i=0;i<enemyNumber;i++)
		{
			id= "smile"+ i;
			if(playerHP > 0)
			{
				
				if(enemyPosition[i] != null)
				{
					tempDist[i] = enemyPosition[i].enemyDistance() - enemyPosition[i].movement();
						
				
				
					enemyPosition[i] = new enemyPos(enemyPosition[i].title(), 
						enemyPosition[i].HP(), enemyPosition[i].movement(), 
						tempDist[i], enemyPosition[i].enemyImage(), enemyPosition[i].enemyX(), enemyPosition[i].enemyY()+enemyPosition[i].movement()*20);
						
					//ANKUN'S FUNCTION
					//
					$("#"+id).css("left",enemyPosition[i].enemyX());
				
					$("#"+id).css("top",(6-enemyPosition[i].enemyDistance())*60+enemyPosition[i].enemyY()+enemyPosition[i].movement()*40);
					
					
					
					
					if ($("#"+id).position().top>600){$("#"+id).position().top=500;}
					if (enemyPosition[i].enemyDistance()==0){$("#"+id).css("top",(500));}
					command.repaint(id);
					//
					
					//when minus is positive 1, it is shrinking the image
					//when minus is negative 1, it is enlarging the image
					/*var e = document.getElementById(id);
					(e.style.display = 'none') ;
					(e.style.display = 'block');
						
						decreaser=decreaser+minus;
						if (decreaser<0)
						{

							e.style.display = ((e.style.display != 'none') ? 'none' : 'block');
							decreaser=enlargeVal.length-1;
							increaserLeft=0;
						}
						else if (decreaser>enlargeVal.length)
						{

							e.style.display = ((e.style.display != 'none') ? 'none' : 'block');
							alert("he is gone");
							decreaser=0;
						}
						
						e.style.width=enemyPosition[i].enemyDistance();
						e.style.height=enemyPosition[i].enemyDistance();

						(e.style.display = 'none') ;
						(e.style.display = 'block');
				
				*/
					if (enemyPosition[i].enemyDistance() <= 0)
					{

						playerHP = playerHP - 1;
						enemyPosition[i] = null;
					}
						
						
				
					
					//this.stretchImage(id); 
					//this.repaint(id);	
					
					
					if(playerHP <=0)
					{
						//this.toggleVisibility(id);
						alert("your dead");
						decreaser=enlargeVal.length-1;
					}
				}
				
					
					
			}
		}
		
		//document.write("Player HP = " + playerHP)
	}
	
}



/*
command.timingForBat = function (id, t, time)
{
	var oTime=time;
	var oneTime=true;
	timer = setInterval(function(){intTimer()},t);
	var a=false;
	function intTimer()
	{
		if(time <= 0)
		{	clearInterval(timer);	
			a=true;
			$("#"+id).css("left",600);
			$('#bat').attr('src','batSleep.jpg');
			if(oneTime==true){
			document.getElementById('throwButton').disabled = false;oneTime=false;}	
			
			
		}
	
		else if (!a)
		{	
			
			time = time-1;
			var minus=1;
			if (oTime>(time*(2))){minus=minus*-1;};	
			command.batSpam(id,minus,time);
			document.getElementById('throwButton').disabled = true;	
		
		}
	}
	
	
}	
*/
