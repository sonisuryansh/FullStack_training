var n = 5;
var i = 1;
while(i<=10){
    document.write("<br/>" + "5 * "+i+"=" + (n*i));
    i++;
}

// 54321,5432,543,54,5

document.write("<br>=================================================<br>");

        for(let i=5; i>=1; i--) {
            for(let j=5; j>=6-i; j--) {
                document.write(j);
            }
            document.write("<br>");
        }
        document.write("<br>=================================================<br>");

        for(let i=5; i>=1; i--) {
            for(let j=5; j>=6-i; j--) {
                document.write("*");
            }
            document.write("<br>");
        }



function minPrice() {
    let product_price = [10, 20, 30, 40, 50];
    let min = product_price[0];

    for (let i of product_price)
        if (i < min) min = i;

    console.log(min);
}

minPrice();

// Positve and Negative Numbers

function countNumbers() {
    let arr = [10, -5, 20, -8, 15, -2, 0, 25];

    let positive = 0;
    let negative = 0;
    

    for (let i of arr) {
        if (i > 0)
            positive++;
        else if (i < 0)
            negative++;
    }

     document.write("Positive Number:= "+ positive);
     document.write("Negative Number:= "+ Negative);
}

countNumbers();