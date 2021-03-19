

function removeBlanks(str) {
    return str.split(" ").join("");
}
console.log(removeBlanks("Pl ayTha tF u nkyM usi c"))


function getDigits(str) {
    var stringArr = str.split("");
    var intStr = "";
    for (var ind = 0; ind < stringArr.length; ind++) {
        if (stringArr[ind]%1 == 0) {
            intStr += stringArr[ind];
        }
    }
    return intStr/1;
}
console.log(getDigits("0s1a3y5w7h9a2t4?6!8?0"))


function acronyms(str) {
    var strArr = str.split(" ");
    var retStr = "";
    for (var ind = 0; ind < strArr.length; ind++) {
        if (strArr[ind] == false) {
            continue;
        } else {
            retStr += strArr[ind][0].toUpperCase();
        }
    }
    return retStr;
}
console.log(acronyms("there's no free lunch - gotta pay yer way."))
console.log(acronyms("Live from New York, it's Saturday Night!"))

function countNS(str) {
    var strArr = str.split("");
    var count = 0;
    for (var ind = 0; ind < strArr.length; ind++) {
        if (strArr[ind] == false) {
            continue;
        } else {
            count++;
        }
    }
    return count;
}
console.log(countNS("Honey pie, you are driving me crazy"))


function removeShort(strArr, val) {
    for (var ind = strArr.length-1; ind >= 0; ind--) {
        if (strArr[ind].length < val) {
            for (var i = ind; i < strArr.length-1; i++){
                var temp = strArr[i];
                strArr[i] = strArr[i+1];
                strArr[i+1] = temp;
            }
            strArr.pop();
        }
    }
    return strArr;
}
console.log(removeShort("There is no better movie than Star Wars", "not even Lord of the Rings", "nor Titanic"))