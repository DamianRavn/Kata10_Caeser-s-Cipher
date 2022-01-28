const lowerLetterStart = 'a'.charCodeAt();//97
const lowerLetterEnd = 'z'.charCodeAt();//122
const upperLetterStart = 'A'.charCodeAt();//65
const upperLetterEnd = 'Z'.charCodeAt();//90
const numberOfLettersInAlpha = 26;

function caesarCipher(inputString, shiftNumber)
{
    // console.log("a is: "+ 'a'.charCodeAt()) //97
    // console.log("z is: "+'z'.charCodeAt()) //122
    // console.log("A is: "+'A'.charCodeAt()) //65
    // console.log("Z is: "+'Z'.charCodeAt()) //90
    let resultString = "";

    for (let i = 0; i < inputString.length; i++) 
    {
        const charCode = inputString.charCodeAt(i);
        //Not a character
        if ((charCode < upperLetterStart || charCode > lowerLetterEnd) || (charCode > upperLetterEnd && charCode < lowerLetterStart)) 
        {
            resultString += inputString[i];
        }
        else 
        {
            let clampedShiftNumber =  Math.ceil(shiftNumber % numberOfLettersInAlpha);
            let newCharCode = charCode + clampedShiftNumber;

            newCharCode = (charCode >= lowerLetterStart && charCode <= lowerLetterEnd) ? calculateNewCharCode(newCharCode, lowerLetterStart, numberOfLettersInAlpha) : calculateNewCharCode(newCharCode, upperLetterStart, numberOfLettersInAlpha);
            
            
            resultString += String.fromCharCode(newCharCode);
        }
        
    }
    console.log(resultString);
    return resultString;
}
function calculateNewCharCode(value, low, diff)
{
    return ((value - low) % diff) + low;
}

caesarCipher("middle-Outz", 2); //➞ "okffng-Qwvb"

caesarCipher("Always-Look-on-the-Bright-Side-of-Life", 5); //➞ "Fqbfdx-Qttp-ts-ymj-Gwnlmy-Xnij-tk-Qnkj"

caesarCipher("A friend in need is a friend indeed", 20) //➞ "U zlcyhx ch hyyx cm u zlcyhx chxyyx"