let userNum = +prompt('Enter number');

if (userNum <= 4){
    alert('Sorry, no numbers')
} else {
    for (let i = 0; i <= userNum; i++) {
        if (i % 5 === 0) {
            console.log(i)
        }
    }
}