function drawTree(x) {
  var star = "";
  for(i=1; i <=x; i++){
    star = "";
    for(j=i; j<x; j++){
      star += " ";
    }
    for(k=0; k<(i*2)-1; k++){
      star += "*";
  }
  console.log(star);
}  
}
drawTree(5);