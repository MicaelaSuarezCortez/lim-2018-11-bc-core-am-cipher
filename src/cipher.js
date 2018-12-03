//function for code
const encode=(offset,text)=>{

	let codeCipher="";
	let codeOffset=parseInt(offset);

	for(let i=0; i<text.length;i++){
		//get number ASCII		
		let numberCodeAscii=text.charCodeAt(i);
		//Validate if the text entered corresponds to the range of uppercase letters in ASCII code.
		if(numberCodeAscii>=65 && numberCodeAscii<=90){
			if(codeOffset<=-27){
				//convert to negative offset to positive offset.
				codeOffset=-(codeOffset+26);
			}
			else{
				codeOffset=(codeOffset+26);
			}			
			//I apply the formula to know the position to where move, then add 65 to pass it to ASCII code.
			let valueCapitalLetter=(numberCodeAscii-65+codeOffset)%26+65;

			// I convert from ASCII code to the letter of the alphabet that I know.
			let capitalLetter=String.fromCharCode(valueCapitalLetter);	
			//concatenated characters.
			codeCipher+=capitalLetter;	
		}
		//Validate if the text entered is Ñ
		/*if(numberCodeAscii===165){
			let valueEñe=(numberCodeAscii-165+codeOffset)+165;
			let eñeLetter=String.fromCharCode(valueEñe);
			codeCipher+=eñeLetter;
		}*/
		//Validate if the text entered corresponds to the range of lowercase letters in ASCII code.
		else if(numberCodeAscii>=97 && numberCodeAscii<=122){
			if(codeOffset<=-27){
				codeOffset=-(codeOffset+26);
			}
			else{
				codeOffset=(codeOffset+26);
			}
			//I apply the formula to know the position to where move, then subtract 97 to pass it to ASCII code.
			let valueLowerLetter=(numberCodeAscii-97+codeOffset)%26+97;
			// I convert from ASCII code to the letter of the alphabet that I know.
			let lowerLetter=String.fromCharCode(valueLowerLetter);	
			codeCipher+=lowerLetter;
		}	
		//Validate blanks
		else if(numberCodeAscii==32){
			let space=' ';
			codeCipher+=space;			
		}	
		/*else if(numberCodeAscii>=160 && numberCodeAscii<=163){
			let valueLowerVowel=(numberCodeAscii-160+codeOffset)%26+160;
			let lowerVowel=String.fromCharCode(valueLowerVowel);
			codeCipher+=lowerVowel;
		}*/
	}
	return codeCipher;
}

//function for decipher
const decode=(offset,text)=>{

	let codeCipher="";
	let codeOffset=parseInt(offset);

	for(let i=0; i<text.length;i++){
		//get number ASCII		
		let numberCodeAscii=text.charCodeAt(i);
		//Valid if the text entered corresponds to the range of uppercase letters in ASCII code.
		if(numberCodeAscii>=65 && numberCodeAscii<=90){
			//I apply the formula to know the position to where move, then add 65 to pass it to ASCII code.
			let valueCapitalLetter=(numberCodeAscii+65-codeOffset)%26+65;
			// I convert from ASCII code to the letter of the alphabet that I know.
			let capitalLetter=String.fromCharCode(valueCapitalLetter);	
			codeCipher+=capitalLetter;	
		}	
		//Validate if the text entered corresponds to the range of lowercase letters in ASCII code.
		else if(numberCodeAscii>=97 && numberCodeAscii<=122){
			if(codeOffset<=-27){
				codeOffset=-(codeOffset+26);
			}
			else{
				codeOffset=(codeOffset+26);
			}	
			//I apply the formula to know the position to where move, then subtract 122 to pass it to ASCII code.
			let valueLowerLetter=(numberCodeAscii-122-codeOffset)%26+122;
			// I convert from ASCII code to the letter of the alphabet that I know.
			let lowerLetter=String.fromCharCode(valueLowerLetter);	
			codeCipher+=lowerLetter;	
		}	
		//Validate blanks
		else if(numberCodeAscii==32){
			let space=' ';
			codeCipher+=space;			
		}				
	}
	return codeCipher;
}
window.cipher = {
	encode: encode,
	decode: decode  
};
