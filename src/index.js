
function encodeWeb() {
	document.getElementById("web_cipher").style.display = "block";
	document.getElementById("principal").setAttribute("class","hidden"); /* LANZA LA PANTALLA PARA CIFRAR */

}
	document.getElementById("encode").addEventListener("click", encodeWeb);

function decodeWeb() {
	document.getElementById("web_decipher").style.display = "block"; /*LANZA LA PANTALLA PARA DESCRIFRAR */
	document.getElementById("principal").innerHTML = "";	

}
	document.getElementById("decode").addEventListener("click", decodeWeb);



/*MANDA A LA PANTALLA DE INICIO1 */

function homePage() { 
	location.reload(); 
}



	//EventListeners para botones de Home, Cifrar y Descifrar

	document.getElementById("Home2").addEventListener("click", homePage);

	document.getElementById("Home").addEventListener("click", homePage);

	document.getElementById("cipher").addEventListener("click", encoding);

	document.getElementById("decipher").addEventListener("click", decoding);



//FUNCION CIFRAR EL MENSAJE!!!!
function encoding() {
	let keyNumber  = parseInt(document.getElementById("positions").value); //GUARDAR VALOR DEL OFFSET
	let message = document.getElementById("space_cipher").value.toUpperCase(); // GUARDAR VALOR DEL INPUT MENSAJE EN MAYUSCULAS
	
	
		let documentJs = window.cipher.encode(keyNumber, message);

			document.getElementById('result').innerHTML = documentJs;

}



//FUNCION DESCIFRAR EL MENSAJE!!!!
function decoding() {
	let keyNumber  = parseInt(document.getElementById("positions2").value); //GUARDAR VALOR DEL OFFSET
	let message = document.getElementById("space_decipher").value.toUpperCase(); // GUARDAR VALOR DEL INPUT MENSAJE EN MAYUSCULAS
	
		let documentJs2 = window.cipher.decode(keyNumber, message);

			document.getElementById('result2').innerHTML = documentJs2;    

}
    
	

