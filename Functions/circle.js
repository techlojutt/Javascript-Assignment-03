function circle(r){
  var diameterOfCircle = 2 * r ;
  var circumferenceOfCircle = 2 * 3.14 * r ;
  var AreaOfCircle = 3.14 * r * r ;
  console.log("Diameter = ",diameterOfCircle,"meter");
  console.log("Circumference = ",circumferenceOfCircle,"meter");
  console.log("Area = ",AreaOfCircle,"meter square");
}
circle(prompt("Enter the radius of a circle"));