
const textResult=document.getElementById('result');
const btnEncode=document.getElementById('btn-encode');

const encode=(text,offset)=>{

    let codeCipher="";
    let codeOffset=parseInt(offset);

	for(let i=0; i<text.length;i++){
		//get number ASCII		
		let numberCodeAscii=text.charCodeAt(i);
		//valida si el número ASCII está en mayúsculas
		if(numberCodeAscii>=65 && numberCodeAscii<=90){
			//Aplico la fórmula para conocer la posición hacia donde me desplazaré LUEGO sumo 65 para pasarlo a ASCII
			let valueCapitalLetter=(numberCodeAscii-65+codeOffset)%26+65;
			// convierto de  ASCII a la letra del alfabeto que conozco
			let capitalLetter=String.fromCharCode(valueCapitalLetter);	
			codeCipher+=capitalLetter;	
		}		
	}
	return codeCipher;
}

 btnEncode.addEventListener('click', () => {
   const textStringInput = document.getElementById('txt-input').value;
   const valueOffset=document.getElementById('txt-offset').value;
   textResult.innerHTML = encode(textStringInput,valueOffset);
 });



/*function encode(){
	let string=document.getElementById('txtInput').value;
	let offset=document.getElementById('txtOffset').value;
	let offsetParse=parseInt(offset);
	let codeCipher="";
	
	for(let i=0;i<string.length;i++){
		//get code ascii
		let numberCodeAscii=string.charCodeAt(i);
		if(numberCodeAscii>=65 && numberCodeAscii<=90){
			let valueCapitalLetter=(numberCodeAscii-65+offsetParse)%26+65;
			let capitalLetter=String.fromCharCode(valueCapitalLetter)
			codeCipher+=capitalLetter;
		}
		
	}
		
	document.getElementById('txtOutput').value=codeCipher;
}*/
/*function decode(){
	let string=document.getElementById('txtInput').value;
	let offset=document.getElementById('txtOffset').value;
	let offsetParse=parseInt(offset);
	let codeDeCipher="";
	
	for(let i=0;i<string.length;i++){
		//get code ascii
		let numberCodeAscii=string.charCodeAt(i);
		if(numberCodeAscii>=65 && numberCodeAscii<=90){
			let valueCapitalLetter=(numberCodeAscii+65-offsetParse)%26+65;
			let capitalLetter=String.fromCharCode(valueCapitalLetter);
			codeDeCipher+=capitalLetter;
		}
		
	}
	
	document.getElementById('txtOutput').value=codeDeCipher;
}
*/
