$(document).ready(function(){
	
	var numToMatch;
	var total = 0;
	var superman;
	var flash;
	var captainamerica;
	var batman;
	var wins = 0;
	var losses = 0;
	
	var getRandNum = function(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
	}


	//START//
	function start() {
	// Random number for user to match 
	$("#numToMatch").html(function(){
		numToMatch = getRandNum(19, 120);
		
		return(numToMatch);
	});

	// Sets values for each Super Hero  :)
	superman = getRandNum(1, 7);
	console.log(superman)
	flash = getRandNum(6, 12);
	console.log(flash)
	captainamerica = getRandNum(1, 7);
	console.log(captainamerica)
	batman = getRandNum(6, 12);
	console.log(batman)

	total = 0;
	$('#total').html(total);
	};

     // Main Game //
	//==========================================================================//

	start();

	// Function for Superhero #1 - Superman
	$("#superman").click(function(){
		total = superman + total;
		
		
		if (total < numToMatch) {
			$("#total").html(total);
			return(total);
		}
		else if (total > numToMatch) {
			$("#total").html(total);
			alert("You Lose! , Yeah sure blame it on Kryptonite");
			losses++;
			$("#losses").html(losses);
			start();
		}
		else {
			$("#total").html(total);
			wins++;
			$('#wins').html(wins);
			alert("You win, Clark Kent..I mean sorry Superman");
			start();
		}
	});

	// Function for Superhero #2 - Flash
	$("#flash").click(function(){
		total = flash + total;
	
		
		if (total < numToMatch) {
			$("#total").html(total);
			return(total);
		}
		else if (total > numToMatch) {
			$("#total").html(total);
			alert("You Lose, I thought Flash would figure this out!");
			losses++;
			$("#losses").html(losses);
			start();
		}
		else {
			$("#total").html(total);
			wins++;
			$('#wins').html(wins);
			alert("You Win, you super hero you!");
			start();
		}

	});
	// Funtion for Superhero #3 - Captain America
	$("#captainamerica").click(function(){
		total = captainamerica + total;
		
		
		if (total < numToMatch) {
			$("#total").html(total);
			return(total);
		}
		else if (total > numToMatch) {
			$("#total").html(total);
			alert("Captain better luck next time!");
			losses++;
			$("#losses").html(losses);
			start();
		}
		else {
			$("#total").html(total);
			wins++;
			$('#wins').html(wins);
			alert("You won, that is one cool shield!");
			start();
		}

	});
	// Function for Superhero #4 - Batman
	$("#batman").click(function(){
		total = batman + total;
	
		
		if (total < numToMatch) {
			$("#total").html(total);
			return(total);
		}
		else if (total > numToMatch) {
			$("#total").html(total);
			losses++;
			$("#losses").html(losses);
			alert("You lost, Gotham City is now in danger!");
			start();
		}
		else {
			$("#total").html(total);
			wins++;
			$('#wins').html(wins);
			alert("You won, the Joker is no match for you!");
			start();
		}
	});


	// reset button
	$('#reset').on('click', function(){
		wins = 0;
		losses = 0;
		total = 0;
		$('#wins').html(wins);
		$('#losses').html(losses);
		start();
	});


}); 