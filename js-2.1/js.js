function getTriangleArea(a, h) {
  if (a > 0 && h > 0 ) {
    return (a * h )/2;
  } else {
    console.log("Nieprawidłowe dane");
  }
}

console.log(getTriangleArea(10, 6));

var triangle1Area = getTriangleArea(10, 15);
 triangle2Area = getTriangleArea(4, 13);
 triangle3Area = getTriangleArea(17, 27);
 
 console.log("Pole pierwszego trójkąta wynosi " + triangle1Area + " pole drugiego trójkąta wynosi " + triangle2Area + " pole trzeciego trójkąta wynosi " + triangle3Area);