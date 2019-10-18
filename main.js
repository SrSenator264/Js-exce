 function checkSpace(str){
     re=/\s/;
     return re.test(str);
 }
 function checkNumber(str1){
     re=/[0-9]/;
     return re.test(str);
}
function removeVowels(str2){
    re = /[aeouiy]/ig;
    return str2.replace(re,"#");
}
function removeNonStr(str3){
    re = /[^A-Za-z]/g;
    return str3.replace(re," ");
}

 let str3 = "$the@only#one?place+you)find&peace "  
 let str2 = " the only one place you find peace "
 let str1 = "dd45"
 let str = "has sting";
document.getElementById("ch1").innerHTML=checkSpace(str);
document.getElementById("ch").innerHTML=checkNumber(str1);
document.getElementById("ch2").innerHTML=removeVowels(str2);
document.getElementById("ch3").innerHTML=removeNonStr(str3);



