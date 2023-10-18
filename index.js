const gifts = ["Teddy Bear","Drone","Doll"];
function wrapGifts(gifts) {
    for (let i = 0;i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger
}
return gifts;
}
wrapGifts(gifts);


function writeCards(names,event) {
    let messages = [];
    for (let i = 0; i < names.length; i++) {
        let message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
        messages.push(message);
    }
    return messages;
}
let names = ["Guadalupe","Ollie","Aki"];
let event = ["Surprise"];

function countDown(number) {
    while (number >= 0) {
        console.log(number);
        number--;
    }
}
writeCards("Guadalupe","Surprise");