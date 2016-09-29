$(document).ready(function () {


$("#calculate").click(function(){

/* 

First, get the input of payment, then subtract the amount due.
Then, get output the answer in dollars using the modulo operator.
Then, output the amount left in quarters, dimes, nickels, and pennies.

 */

	var amountDue = $("#amountDue").val();
	var paid = $("#payment").val();

	var totalChange = paid - amountDue;

	amountDue = Math.floor(amountDue);
	paid = Math.floor(paid*100);

	var change = paid - amountDue; // 20.00 - 14.71 = 5.29

	var dollars = Math.floor(change/100); // 20 - 14.71 = 5.29
	change -= dollars * 100; // 

	var quarters = Math.floor(change/25); //
	change -= quarters * 25;

	var dimes = Math.floor(change/10); //
	change -= dimes * 10;

	var nickels = Math.floor(change/5); //
	change -= nickels * 5;

	var pennies = Math.floor(change/1); //
	change -= pennies * 1;

	$("#output1").html("Your change is: $" + totalChange);
	$("#output2").html("Dollars: " + dollars);
	$("#output3").html("Quarters: " + quarters);
	$("#output4").html("Dimes: " + dimes);
	$("#output5").html("Nickels: " + nickels);
	$("#output6").html("Pennies: " + pennies);
});

	$("#calculate").click(function(){
 		$("h1").addClass("animated flip");
 		$(".transbox").show().addClass("animated bounce");
});
});