// JavaScript Document
let numberOfTerms;
let message = 'Number of terms:'; //message.

		do { //Use the do-while loop to allow the user to enter values until they are correct. 
  				numberOfTerms = parseInt(prompt(message));//parseInt to let the user enter an integer value.

				if (!(numberOfTerms > 0))  //If the user enters invalid input, this message will display.
				{
				// The user entered invalid input.
				message = 'Error: Zero or negative number of terms not accepted!';
				}
			} while (!(numberOfTerms > 0));

		document.write('Enter number of terms: ' + numberOfTerms); //to show the page number of terms the user enters.

		let x;
		message = 'Enter the value of x in the interval (-1, 1]: ';

		do { //Use the do-while loop to allow the user to enter values until they are correct. 
  				x = parseFloat(prompt(message)); //parseFloat to let the user enter an Float value.

				if (!(x > -1 && x <= 1)) //If the user enters invalid input, this message will display.
				{
				// The user entered invalid input
				message = 'Error: number must be in the (-1, 1] interval: ';
				}
			} while (!(x > -1 && x <= 1));
			//to show the interval that the user enters on the page.
			document.write('<br />Enter the value of x in the interval (-1, 1]: ' + x); 

			let sum = 0; //summation formula.
				for (let i = 0; i <= numberOfTerms; i++) 
				{
					sum += ((-1)**i) * (x**(i+1) / (i+1));
				}
		//display the summation result.
document.write("<br />The approximate value of ln(1+" + x + ") up to " + numberOfTerms + " terms is: " + sum);