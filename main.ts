// // Question:2
// let personName = 'Ali';
// let message1 = 'would you like to learn some Python today?';
// console.log(`Hello ${personName}, ${message1}`);



// //Question:3
// let myTeacher = 'zia kHaN';
// let lowerCaseName = myTeacher.toLowerCase();
// let upperCaseName = myTeacher.toUpperCase();
// let titleCaseName = lowerCaseName.replace(/\b\w/g, (char)=>{
//     return char.toUpperCase();
// })
// console.log(lowerCaseName);
// console.log(upperCaseName);
// console.log(titleCaseName);



// // Question:4
// console.log('Napolean Hills once said, "Keep on keeping on, no matter how hard the going may be".');



// // Question:5
// let famous_person = 'Napolean Hills';
// let message2 = '"Keep on keeping on, no matter how hard the going may be".';
// console.log(`${famous_person} once said, ${message2}`);



// // Question:5
// let xyzName = "\t \n Nelson Mandela \n \t";
// // Print the name with whitespace
// console.log("Name with whitespace:", xyzName);
// // Strip whitespace using trim() function
// let trimmedName = xyzName.trim();
// // Print the name after stripping whitespace
// console.log("Name without whitespace:", trimmedName);



// Question:6
// Print the name with whitespace
// let nameWithSpace = '\n \t Shahid Ali \t \n';
// console.log("Name with whitespace:"+ nameWithSpace);
// let withoutSpace = nameWithSpace.trim();
// console.log('Name without White spaces = '+withoutSpace);




// Question:8
// let addition = 6+2;
// let subtraction = 100-92;
// let multiplication = 2*4;
// let division = 24/3;
// console.log('Addition = '+addition+ '\nSubtraction = '+subtraction+'\nMultiplication = '+multiplication+'\nDivision= '+division);




// Question:8
// console.log(5+3);
// console.log(10-2);
// console.log(4*2);
// console.log(16/2);




// Quesstion:9
// let favoriteNumber = 100;
// let message = 'I prefere ' + favoriteNumber + ' out of 100.';
// console.log(message);





// // Question:10 --> Adding comments in atleast 2 programes.
// in question:8 I have made a program of addition, subtraction, multiplication and division such that the answer in each case 8. The program is repeateed here:
// console.log(5+3);
// console.log(10-2);
// console.log(4*2);
// console.log(16/2);
// In question:9 i have made a program containing favorite number and a statement, which is once again repeated here:
// let favoriteNumber = 100;
// let message = 'I prefere ' + favoriteNumber + ' out of 100.';
// console.log(message);





// // Question:11
// let friendList = ['shafiq','rizwan','shahid','nadir','daniyal','azlan','affan'];
// for(let friend of friendList){
//     console.log(friend);
// }




// // Question:12
// let friendList = ['shafiq','rizwan','shahid','nadir','daniyal','azlan','affan'];
// for(let friend of friendList){
//     console.log('Hello Dear '+friend+', Inshallah we will meet today at 7pm in Pak Tea House Lahore. ');
// }




// //Question13
// let examples = ['I would like to purchase',
// 'I would like to travel Gorakh Hill on ', 
// 'I would like to visit my grand father on',
// 'I would like to let my friends to enjoy on'];
// for(let statements of examples){
//     console.log(statements + ' Suzuki-150 MotorBike.');
// }



// // Question14
// let guestsList = ['Arman','Maaz','Humayu','Faizan','Azlan','Nadeem'];
// guestsList.forEach((guests)=>{
//     console.log('Dear '+guests+', I cordially invite you to the Welcome Party.');
// })




// // Question15
// let guestsList = ['Arman','Maaz','Humayu','Faizan','Azlan','Nadeem'];
// console.log('I invited all the guests listed below:')
// guestsList.forEach((guests)=>{
//     console.log(guests);
// })
// let indexOfAbsent = Math.floor(Math.random()*guestsList.length);
// let absentGuest = guestsList[indexOfAbsent];
// let newGuest = 'Siraj';
// guestsList[indexOfAbsent] = newGuest;
// console.log('\nI am sorry that Mr. '+absentGuest+' could not come to party. \nSo here are the new invitations:\n')
// guestsList.forEach((guests)=>{
//     console.log('Dear '+guests+', I cordially invite you to the Welcome Party.');
// })




// // Question16
// let guestsList = ['Arman','Maaz','Humayu','Faizan','Azlan','Nadeem'];
// console.log('I invited all the guests listed below:')
// guestsList.forEach((guests)=>{
//     console.log(guests);
// })
// console.log('But now I have got a bigger dining table so 3 extra guests will be called.')
// let newGuest1 = 'Shahjahan';
// let newGuest2 = 'Amir';
// let newGuest3 = 'Zain';

// let midPosition = guestsList.length/2;

// guestsList.unshift(newGuest1);
// guestsList.splice(midPosition,0,newGuest2);
// guestsList.push(newGuest3);

// console.log('I welcome all the guests including '+newGuest1+', '+newGuest2+', '+newGuest3+'. ');
// guestsList.forEach((guests)=>{
//         console.log('Dear '+guests+', I cordially invite you to the Welcome Party.');
//     })




// // Q-17
// let guestsList = ['Arman','Maaz','Humayu','Faizan','Azlan','Nadeem'];
// console.log('\nI am sorry i can only invite two of you, so i will have to eleminate others.')
// console.log('\n========================== Eliminated Guests ==========================')
// let totalGuests = guestsList.length;
// for(let i =totalGuests; i>2; i--){
//     let deleted= guestsList.pop();
//     console.log(`Hello ${deleted}, I am sorry there is a change in plan, I cant invite you to the party.`);
// }
// console.log('\n========================== Invited Guests ==========================')
// guestsList.forEach((guests)=>{
//     console.log(`Congratulations Mr. ${guests}, You are invited to the party.`);
// })

// for(let i=2; i>0; i--){
//     guestsList.pop();
// }
// console.log('\n========================== Empty List ==========================')
// console.log('Here is empty guests List: '+ guestsList)




// // Q18:
// let places = ['Lahore','Naran','Kaghan','Shogran','Skardu'];
// console.log("Original order:", places);

// console.log("Alphabetical order:", [...places].sort());
// console.log("Original order:", places);

// console.log("Reverse alphabetical order:", [...places].sort().reverse());
// console.log("Original order:", places);

// places.reverse();
// console.log("Reversed order:", places);

// places.reverse();
// console.log("Original order:", places);

// places.sort();
// console.log("Sorted in alphabetical order:", places);

// places.sort((a, b) => b.localeCompare(a));
// console.log("Sorted in reverse alphabetical order:", places);





// // Q19
// let guestsList = ['Arman','Maaz','Humayu','Faizan','Azlan','Nadeem'];
// console.log('total number of guests that i am inviting to dinner are: '+guestsList.length);




// // Q-20
// let riverArray = ['indus','ravi','sutlej','jhelum','chenab'];
// riverArray.forEach((river)=>{
//     console.log('this is a pakistani river called: river '+river);
// })




// // Question-21
// let object = {};
// object.studentName = 'Asad';



// // Question-22
// let myArray = [1, 2, 3, 4, 5];
// console.log(myArray[10]); //error
// console.log(myArray[2]); //error correction



// // Question23
// let car = 'toyota';
// let age = 25;
// let isRaining = false;
// let fruits = ['apple', 'banana', 'orange'];
// let city = 'Karachi';
// let electricity = 'off';
// let married = 'no';
// let weight = 60;

// console.log("Is car == 'toyota'? I predict True.");
// console.log(car == 'toyota');

// console.log("Is age >= 18? I predict True.");
// console.log(age >= 18);

// console.log("Is isRaining == false? I predict True.");
// console.log(isRaining == false);

// console.log("Is 'apple' in fruits array? I predict True.");
// console.log(fruits.includes('apple'));

// console.log("Is city != 'sukkur'? I predict True.");
// console.log(city != 'Sukkur');

// console.log("Is electricity == 'on'? I predict False.");
// console.log(electricity == 'on');

// console.log("Is married = yes? I predict False.");
// console.log(married == 'yes');

// console.log("Is weight > 60? I predict False.");
// console.log(weight > 60);

// console.log("Is 'grape' in fruits array? I predict False.");
// console.log(fruits.includes('grape'));

// console.log("Is city == 'karachi City'? I predict False.");
// console.log(city == 'karachi City');





// // Question-24
// Tests for equality and inequality with strings
// let country = 'PAKISTAN';
// console.log("Is country equal to 'PAKISTAN'? I predict True.");
// console.log(country == 'PAKISTAN');
// console.log("Is country not equal to 'Canada'? I predict True.");
// console.log(country != 'Canada');

// //using the lower case function
// let city = 'New York';
// console.log("Is city lowercase equal to 'new york'? I predict True.");
// console.log(city.toLowerCase() == 'new york');

// // involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// let num1 = 10;
// let num2 = 5;
// console.log("Is num1 greater than num2? I predict True.");
// console.log(num1 > num2);
// console.log("Is num1 less than or equal to num2? I predict False.");
// console.log(num1 <= num2);

// //using "and" and "or" operators:
// let isOk = true;
// let isNotOk = false;
// console.log("Is it a weekend and sunny? I predict False.");
// console.log(isOk && isNotOk);
// console.log("Is it a weekend or sunny? I predict True.");
// console.log(isOk || isNotOk);

// // array
// let fruits = ['apple', 'banana', 'orange'];
// console.log("Is 'banana' in the fruits array? I predict True.");
// console.log(fruits.includes('banana'));
// console.log("Is 'grape' not in the fruits array? I predict True.");
// console.log(!fruits.includes('grape'));





// // Question.25
// let  alien_color = 'green';
// if (alien_color == 'green'){
//     console.log('Player Earned 5 Points');
// }




// // Question.26
// version-1
// let  alien_color = 'green';
// if (alien_color == 'green'){
//     console.log('Player Earned 5 Points for Shooting the Alien');
// } else{
//     console.log('the player just earned 10 points.')
// }
// // version-2
// alien_color = 'yellow';
// if (alien_color == 'green'){
//     console.log('Player Earned 5 Points for Shooting the Alien');
// } else{
//     console.log('the player just earned 10 points.')
// }





// // // Q-27
// // // version-1
// let  alien_color = 'green';
// if (alien_color == 'green'){
//     console.log('Player Earned 5 Points');
// } else if(alien_color == 'yellow') {
//     console.log('Player Earned 10 Points');
// } else {
//     console.log('Player Earned 15 Points');
// }
// // version-2
// alien_color = 'yellow';
// if (alien_color == 'green'){
//     console.log('Player Earned 5 Points');
// } else if(alien_color == 'yellow') {
//     console.log('Player Earned 10 Points');
// } else {
//     console.log('Player Earned 15 Points');
// }
// // version-3
// alien_color = 'red';
// if (alien_color == 'green'){
//     console.log('Player Earned 5 Points');
// } else if(alien_color == 'yellow') {
//     console.log('Player Earned 10 Points');
// } else {
//     console.log('Player Earned 15 Points');
// }





// // Question-28
// let  age = 1;
// if (age<2){
//     console.log('The person is a baby.');
// } else if(age>=2 && age<4){
//     console.log('The person is a  toddler.');
// } else if(age>=4 && age<13){
//     console.log('The person is a  kid.');
// } else if(age>=13 && age<20){
//     console.log('The person is a  teenager.');
// } else if(age>=20 && age<65){
//     console.log('The person is an adult.');
// } else if(age>=65){
//     console.log('The person is an elder.');
// } 





// // Question-29
// let favorite_fruits = ['banana', 'strawberry', 'mango'];

// if (favorite_fruits.includes('banana')) {
//     console.log("You really like bananas!");
// }
// if (favorite_fruits.includes('apple')) {
//     console.log("You really like apples!");
// }
// if (favorite_fruits.includes('strawberry')) {
//     console.log("You really like strawberries!");
// }
// if (favorite_fruits.includes('kiwi')) {
//     console.log("You really like kiwis!");
// }
// if (favorite_fruits.includes('mango')) {
//     console.log("You really like mangoes!");
// }





// //Question.30
// let usernames = ['admin', 'shanzey', 'asad', 'ali', 'daniyal'];

// for (let i = 0; i < usernames.length; i++) {
//     if (usernames[i] === 'admin') {
//         console.log("Hello admin, would you like to see a status report?");
//     } else {
//         console.log("Hello " + usernames[i] + ", thank you for logging in again.");
//     }
// }





// //Question-31
// let usernames = ['admin', 'shanzey', 'asad', 'ali', 'daniyal'];
// for (let i = 0; i < usernames.length; i++) {
//     if (usernames[i] === 'admin') {
//         console.log("Hello admin, would you like to see a status report?");
//     } else {
//         console.log("Hello " + usernames[i] + ", thank you for logging in again.");
//     }
// }

// usernames = [];

// if (usernames.length === 0) {
//     console.log("We need to find some users!");
// }





// //Question-32
// let current_users = ['ali', 'shan', 'asad', 'junaid', 'azlan'];
// let new_users = ['shan', 'naseem', 'ALI', 'raza', 'gaffar'];

// let current_users_lower = current_users.map(user => user.toLowerCase());
// for (let i = 0; i < new_users.length; i++) {
//     let new_user_lower = new_users[i].toLowerCase();
//     if (current_users_lower.includes(new_user_lower)) {
//         console.log("Sorry, the username '" + new_users[i] + "' is already taken. Please enter a new username.");
//     } else {
//         console.log("Congratulations! The username '" + new_users[i] + "' is available.");
//     }
// }





// // Question-33
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (let i = 0; i < numbers.length; i++) {
//     let number = numbers[i];
//     let ordinal;
//     if (number === 1) {
//         ordinal = "st";
//     } else if (number === 2) {
//         ordinal = "nd";
//     } else if (number === 3) {
//         ordinal = "rd";
//     } else {
//         ordinal = "th";
//     }
//     console.log(number + ordinal);
// }





// //Question34
// let myPizzas = ['Italian', 'Pepperoni', 'Fajita'];
// console.log("\nStatements about my favorite pizzas:");
// for (let i = 0; i < myPizzas.length; i++) {
//     console.log("I like " + myPizzas[i] + " pizza.");
// }
// console.log("\nI really love pizza!");





// //Question35
// let animalList = ['cat', 'rabbit', 'duck'];
// console.log("List of animals:");
// for (let i = 0; i < animalList.length; i++) {
//     console.log(animalList[i]);
// }
// console.log("\nMy statements about each animal:");
// for (let i = 0; i < animalList.length; i++) {
//     console.log("A " + animalList[i] + " would make great time pass and lovely environment of my house.");
// }
// console.log("\nAny of these animals would make a great pet!");





// //Question-36
// function make_shirt(size,text){
//     console.log(`We will provide your required size: "${size} inches" with text "${text}" on it`);
// }
// make_shirt(32,'Hello World');





// Questtion-37
// function make_shirt(size = 'large', message = 'I love TypeScript') {
//     console.log("You've ordered a " + size + " shirt with the message: '" + message + "'.");
// }
// make_shirt();
// make_shirt('medium');
// make_shirt('small', 'JavaScript is awesome!');





// // Question-38
// function describe_city(city, country = 'Pakistan') {
//     console.log(city + ' is in ' + country + '.');
// }
// describe_city('Karachi');
// describe_city('Lahore');
// describe_city('Mumbai', 'India');





// //Question39
// function city_country(city, country) {
//     return city + ', ' + country;
// }
// console.log(city_country('Lahore', 'Pakistan'));
// console.log(city_country('Karachi', 'Pakistan'));
// console.log(city_country('Agra', 'India'));




// //Question-40
// function make_album(artist,title){
//     let object = {artist: artist, title: title}
//     return object;
// }
// let album1 = make_album('ali zafar','hey');
// let album2 = make_album('rahat','hoo');
// let album3 = make_album('atif','hee');
// console.log(album1);
// console.log(album2);
// console.log(album3);




// //Question-41
// let magicianArray = ['Aaltu','Jalaltu','Taaltu'];
// function show_magicians(array){
//     array.forEach((mag)=>{
//         console.log(mag);
//     })
// }
// show_magicians(magicianArray);




// //Question-42
// let magicianArray = ['Aaltu','Jalaltu','Taaltu'];
// function make_great(){
//     let i=0;
//     magicianArray.forEach((mag)=>{
//         magicianArray[i]= 'The Great '+mag;
//         i++;
//     })
// }
// make_great();
// function show_magicians(array){
//         array.forEach((mag)=>{
//             console.log(mag);
//         })
//     }
// show_magicians(magicianArray);





// // Question-43
// let magicianArray = ['Aaltu','Jalaltu','Taaltu'];
// function make_great(){
//     let i=0;
//     var newArray = [''];
//     magicianArray.forEach((mag)=>{
//         newArray[i]= 'The Great '+mag;
//         i++;
//     })
//     return newArray;
// }
// let newArray = make_great();

// function show_magicians(){
//     console.log('Original Array: ', magicianArray);
//     console.log('New Array: ', newArray);
// }
// show_magicians();





// //Question-44
// function make_sandwich(...items) {
//     console.log("\nMaking a sandwich with the following items:");
//     let array = [''];
//     let i =0;
//     for (let item of items) {
//         array[i]=item;
//         i++;
//     }
//     console.log(array);
// }
// make_sandwich('ham', 'cheese', 'lettuce', 'tomato');
// make_sandwich('chicken', 'bacon', 'avocado');
// make_sandwich('peanut butter', 'jelly');





// //Question-45
function carInfo(manufacturer,model, ...arbitrary){
    let carObject = {
        manufacturer: manufacturer,
        model: model
    };
    for (let i = 0; i < arbitrary.length; i += 2) {
        let key = arbitrary[i];
        let value = arbitrary[i + 1];
        carObject[key] = value;
    }

    return carObject;
}
let myCar = carInfo('Toyota', 'Altis 1.6', 'color', 'blue', 'year', 2022);
console.log(myCar);