
const textResult=document.getElementById('result');
const btnEncode=document.getElementById('btn-encode');
const btnDecode=document.getElementById('btn-decode');

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


const decode=(text,offset)=>{

    let codeCipher="";
    let codeOffset=parseInt(offset);

	for(let i=0; i<text.length;i++){
		//get number ASCII		
		let numberCodeAscii=text.charCodeAt(i);
		//valida si el número ASCII está en mayúsculas
		if(numberCodeAscii>=65 && numberCodeAscii<=90){
			//Aplico la fórmula para conocer la posición hacia donde me desplazaré LUEGO sumo 65 para pasarlo a ASCII
			let valueCapitalLetter=(numberCodeAscii+65-codeOffset)%26+65;
			// convierto de  ASCII a la letra del alfabeto que conozco
			let capitalLetter=String.fromCharCode(valueCapitalLetter);	
			codeCipher+=capitalLetter;	
		}		
	}
	return codeCipher;
}

 btnDecode.addEventListener('click', () => {
   const textStringInput = document.getElementById('txt-input').value;
   const valueOffset=document.getElementById('txt-offset').value;
   textResult.innerHTML = decode(textStringInput,valueOffset);
 });

