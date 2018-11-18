const  actionCipher=document.getElementById('btnCipher');

function encode(){
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
}
function decode(){
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
	//document.write(codeCipher);
	document.getElementById('txtOutput').value=codeDeCipher;
}

