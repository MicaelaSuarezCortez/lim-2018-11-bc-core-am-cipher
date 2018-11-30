const textResult=document.getElementById('result');
const btnEncode=document.getElementById('btn-encode');
const btnDecode=document.getElementById('btn-decode');


btnEncode.addEventListener('click', () => {
   const valueOffset=document.getElementById('txt-offset').value;
   const textStringInput = document.getElementById('txt-input').value;   
   textResult.innerHTML = cipher.encode(valueOffset,textStringInput);
});

btnDecode.addEventListener('click', () => {
   const valueOffset=document.getElementById('txt-offset').value;
   const textStringInput = document.getElementById('txt-input').value;   
   textResult.innerHTML = cipher.decode(valueOffset,textStringInput);
});


