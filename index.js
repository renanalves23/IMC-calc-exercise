var johnMass = 100; //kg
var johnHeight = 1.80; //mt
var imcBmi;
var imcJohn;
var imcMike;
console.log(imcBmi = johnMass / (johnHeight * johnHeight));
imcJohn = imcBmi;
console.log('John tem IMC de: ' + imcJohn);
var mikeMass = 150; //kg
var mikeHeight = 1.90; //mt
console.log(imcBmi = mikeMass / (mikeHeight * mikeHeight));
imcMike = imcBmi;
console.log('Mike tem IMC de: ' + imcMike);

 if(imcMike > imcJohn) {
   console.log('Mike tem IMC maior do que John')
 }else {
   console.log('IMC de John é maior')
 }