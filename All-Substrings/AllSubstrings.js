// JavaScript Document
function print_Substring() //function to print all substrings.
{
    let word;
    let message = "Enter a string or an empty string to terminate the program:"; //message.
    do{ //Use the do-while loop until the user enters an empty string.
        word = prompt(message); //Enter a value and the message will be displayed on the page.
        let n = word.length;
        if (word == "") //If statement to print "Done..." when the user enters an empty string.
            document.write("Enter a string or an empty string to terminate the program: <br />Done...");
        else //Display on the page the word the user enters.
            document.write("Enter a string or an empty string to terminate the program: " + word + "<br />");
        
        for (let i = 1; i <= n; i++) //nested loops to get the result we want.
        {
            for (let j = 0; j <= n - i; j++) 
            {
                let k = j + i - 1;
                for (let l = j; l <= k; l++) 
                {
                    document.write(word[l]); //Printing characters on the page.
                }

            document.write("<br />"); //Makes a new line.
            }
        }
        document.write("<br />");
    }while(word != "");//Condition to end loop.
}