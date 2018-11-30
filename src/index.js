
const textResult=document.getElementById('result');
const btnEncode=document.getElementById('btn-encode');
const btnDecode=document.getElementById('btn-decode');



 btnEncode.addEventListener('click', () => {
   const textStringInput = document.getElementById('txt-input').value;
   const valueOffset=document.getElementById('txt-offset').value;
   textResult.innerHTML = cipher.encode(textStringInput,valueOffset);
 });

 btnDecode.addEventListener('click', () => {
   const textStringInput = document.getElementById('txt-input').value;
   const valueOffset=document.getElementById('txt-offset').value;
   textResult.innerHTML = cipher.decode(textStringInput,valueOffset);
 });


