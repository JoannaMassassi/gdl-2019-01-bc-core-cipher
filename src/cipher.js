const ciCode = (offset, string) => {
	let save = string.split("").map(letter => {
	const numero = (letter.charCodeAt(0) - 65 + offset) % 26 + 65;
	let result1 = String.fromCharCode(numero);

	return result1;
	});

	let result2 = save.join("");
	return result2;
};

const ciCode2 = (offset,string) => {
	let save2 = string.split("").map(letter => {
	const numero2 = (letter.charCodeAt(0) + 65 - offset) % 26 + 65;
	let result1a = String.fromCharCode(numero2);

	return result1a;
	});

	let result2a = save2.join("");
	return result2a;
};

window.cipher = {
	encode: ciCode,
	decode: ciCode2,
};
	


	



	




