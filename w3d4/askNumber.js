const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

function sum(inp = 0) {
    readline.question('Type a number ', num => {
        if(num === 'stop'){
            console.log(`The sum is : ${inp}`);
            readline.close();
        }else{
            sum(inp + parseInt(num));
        }
    });
}

sum();

