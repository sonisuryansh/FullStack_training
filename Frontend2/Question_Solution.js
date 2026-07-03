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