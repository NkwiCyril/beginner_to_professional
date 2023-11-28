function raindrop(num) {
  let str3 = "Pling";
  let str5 = "Plang";
  let str7 = "Plong";
  if (num % 3 == 0 && num % 5 == 0 && num % 7 == 0) {
    num = str3 + str5 + str7;
  } else if (num % 3 == 0 && num % 5 == 0) {
    num = str3 + str5;
  } else if (num % 3 == 0 && num % 7 == 0) {
    num = str3 + str7;
  } else if (num % 5 == 0 && num % 7 == 0) {
    num = str5 + str7;
  } else if (num % 3 == 0) {
    num = str3;
  } else if (num % 5 == 0) {
    num = str5;
  } else if (num % 7 == 0) {
    num = str7;
  } 
  
  return num;
}
for(let i = 1; i < 101 ; i++){ console.log( i + " : " + raindrop(i));}
