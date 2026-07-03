 // Prompt 
        function posNeg(){
            var num = parseInt(prompt("Enter a number:"));
            if(num >0){
                alert("The number is positive.");
            }
            else if(num <0){
                alert("The number is negative.");
            }
            else{
                alert("The number is zero.");
            }
        }

        // WeekDay Number Progaram

        function weekDay(){
            var dayNum = parseInt(prompt("enter the number of the days:-"));    
            switch(dayNum){
                case 1:
                    alert("Monday");
                    break;
                case 2:
                    alert("Tuesday");
                    break;
                case 3:
                    alert("Wednesday");
                    break;
                case 4:
                    alert("Thursday");
                    break;
                case 5:
                    alert("Friday");
                    break;
                case 6:
                    alert("Saturday");
                    break;
                case 7:
                    alert("Sunday");
                    break;
                default:
                    alert("Invalid day number. Please enter a number between 1 and 7.");
            }
        }

        // Checking the Number of days in a month

        function monthDays(){
            var monthNum = parseInt(prompt("Enter the number of the month (1-12):")); 
            if(monthNum == 1 || monthNum == 3 || monthNum == 5 || monthNum == 7 || monthNum == 8 || monthNum == 10 || monthNum == 12){
                alert("The month has 31 days.");
            }else if(monthNum == 4 || monthNum == 6 || monthNum == 9 || monthNum == 11){
                alert("The month has 30 days.");
            }else if(monthNum == 2){
                alert("The month has 28 days or 29 days in a leap year.");
            }else{
                alert("Invalid month number. Please enter a number between 1 and 12.");
            }
        }