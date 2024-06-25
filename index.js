// Code your solution in this file!
const hqBlock = 42;
const blockInFeet = 264;

function distanceFromHqInBlocks(block) {
    return Math.abs(block - hqBlock);
}
console.log(distanceFromHqInBlocks(43));
console.log(distanceFromHqInBlocks(50));

function distanceFromHqInFeet(block){
    return distanceFromHqInBlocks(block) * blockInFeet
}
console.log(distanceFromHqInFeet(43));
console.log(distanceFromHqInFeet(34));

function distanceTravelledInFeet(start, destination) {
    return Math.abs(destination - start) * blockInFeet;
}

console.log(distanceTravelledInFeet(34, 44));
console.log(distanceTravelledInFeet(50, 42));

function calculatesFarePrice(start, destination){
    const distance = distanceTravelledInFeet(start, destination)
    if (distance <= 400) {
        return 0;
    } else if (distance > 400 && distance <=2000) {
        return (distance - 400) * 0.02; 
    }else if (distance > 2000 && distance <= 2500) {
        return 25;
    }else{
        return "cannot travel that far";
    }
}
console.log(calculatesFarePrice(34, 42));
console.log(calculatesFarePrice(34,  24));

