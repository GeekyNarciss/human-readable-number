module.exports = function toReadable (number) {
  if (number == 0) return "zero";
    function units (u) {
        if (u == "0") return "";
        if (u == "1") return "one";
        if (u == "2") return "two";
        if (u == "3") return "three";
        if (u == "4") return "four";
        if (u == "5") return "five";
        if (u == "6") return "six";
        if (u == "7") return "seven";
        if (u == "8") return "eight";
        if (u == "9") return "nine";
    }
    function dozens(d, dd) {
        if (d == "0") return "";
        if (d == "1") {
            if (dd == "0") return "ten";
            if (dd == "1") return "eleven";
            if (dd == "2") return "twelve";
            if (dd == "3") return "thirteen";
            if (dd == "4") return "fourteen";
            if (dd == "5") return "fifteen";
            if (dd == "6") return "sixteen";
            if (dd == "7") return "seventeen";
            if (dd == "8") return "eighteen";
            if (dd == "9") return "nineteen";
        }
        if (d == "2") return "twenty";
        if (d == "3") return "thirty";
        if (d == "4") return "forty";
        if (d == "5") return "fifty";
        if (d == "6") return "sixty";
        if (d == "7") return "seventy";
        if (d == "8") return "eighty";
        if (d == "9") return "ninety";
    }
    let numberString = number + '';
    if (numberString.length == 1) return units(numberString[0]);
    if (numberString.length == 2){
        if (numberString[0] == 1) return dozens(numberString[0], numberString[1]);
        else if(numberString[1] == 0) return dozens(numberString[0], numberString[1]);
        else return dozens(numberString[0], numberString[1]) + " " + units(numberString[1]);
    }
    if (numberString.length == 3) {
        if (numberString[1] == 1) return units(numberString[0]) + " " + "hundred" + " " + dozens(numberString[1], numberString[2]);
        else if (numberString[1] == 0 && numberString[2] == 0) return units(numberString[0]) + " " + "hundred";
        else if (numberString[2] == 0) return units(numberString[0]) + " " + "hundred" + " " + dozens(numberString[1], numberString[2]) + units(numberString[2]);
        else if (numberString[1] == 0) return units(numberString[0]) + " " + "hundred" + " " + units(numberString[2]);
        else  return units(numberString[0]) + " " + "hundred" + " " + dozens(numberString[1], numberString[2]) + " " + units(numberString[2]);  
    }
};



console.log(123);
