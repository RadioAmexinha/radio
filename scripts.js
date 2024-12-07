
/* Funçoes do Nenu*/
function prog() {
		document.getElementById("pro").style.visibility = " visible";
		document.getElementById("pro").style.position = "relative";
		document.getElementById("con").style.visibility = "hidden";
		document.getElementById("con").style.position = "absolute";
		document.getElementById("ajude").style.visibility = "hidden";
		document.getElementById("ajude").style.position = "absolute";
		document.getElementById("sobre").style.visibility = " hidden";
		document.getElementById("sobre").style.position = "absolute";
		document.getElementById("espe").style.visibility = " hidden";
		document.getElementById("espe").style.position = "absolute";
		document.getElementById("ouvintes").style.visibility = " hidden";
		document.getElementById("ouvintes").style.position = "absolute";
		document.getElementById("pqsl").style.visibility = " hidden";
		document.getElementById("pqsl").style.position = "absolute";
		}

function cont() {
		document.getElementById("con").style.visibility = " visible";
		document.getElementById("con").style.position = "relative";
		document.getElementById("pro").style.visibility = "hidden";
		document.getElementById("pro").style.position = "absolute";
		document.getElementById("ajude").style.visibility = "hidden";
		document.getElementById("ajude").style.position = "absolute";
		document.getElementById("sobre").style.visibility = " hidden";
		document.getElementById("sobre").style.position = "absolute";
		document.getElementById("espe").style.visibility = " hidden";
		document.getElementById("espe").style.position = "absolute";
		document.getElementById("ouvintes").style.visibility = " hidden";
		document.getElementById("ouvintes").style.position = "absolute";
		document.getElementById("pqsl").style.visibility = " hidden";
		document.getElementById("pqsl").style.position = "absolute";
		}

function aju() {
		document.getElementById("ajude").style.visibility = " visible";
		document.getElementById("ajude").style.position = "relative";
		document.getElementById("pro").style.visibility = "hidden";
		document.getElementById("pro").style.position = "absolute";
		document.getElementById("con").style.visibility = "hidden";
		document.getElementById("con").style.position = "absolute";
		document.getElementById("sobre").style.visibility = " hidden";
		document.getElementById("sobre").style.position = "absolute";
		document.getElementById("espe").style.visibility = " hidden";
		document.getElementById("espe").style.position = "absolute";
		document.getElementById("ouvintes").style.visibility = " hidden";
		document.getElementById("ouvintes").style.position = "absolute";
		document.getElementById("pqsl").style.visibility = " hidden";
		document.getElementById("pqsl").style.position = "absolute";
		}

function sobr() {
		document.getElementById("sobre").style.visibility = " visible";
		document.getElementById("sobre").style.position = "relative";
		document.getElementById("ajude").style.visibility = " hidden";
		document.getElementById("ajude").style.position = "absolute";
		document.getElementById("pro").style.visibility = "hidden";
		document.getElementById("pro").style.position = "absolute";
		document.getElementById("con").style.visibility = "hidden";
		document.getElementById("con").style.position = "absolute";
		document.getElementById("espe").style.visibility = " hidden";
		document.getElementById("espe").style.position = "absolute";
		document.getElementById("ouvintes").style.visibility = " hidden";
		document.getElementById("ouvintes").style.position = "absolute";
		document.getElementById("pqsl").style.visibility = " hidden";
		document.getElementById("pqsl").style.position = "absolute";
		}

function esp() {
		document.getElementById("espe").style.visibility = " visible";
		document.getElementById("espe").style.position = "relative";
		document.getElementById("ajude").style.visibility = " hidden";
		document.getElementById("ajude").style.position = "absolute";
		document.getElementById("pro").style.visibility = "hidden";
		document.getElementById("pro").style.position = "absolute";
		document.getElementById("con").style.visibility = "hidden";
		document.getElementById("con").style.position = "absolute";
		document.getElementById("sobre").style.visibility = " hidden";
		document.getElementById("sobre").style.position = "absolute";
		document.getElementById("ouvintes").style.visibility = " hidden";
		document.getElementById("ouvintes").style.position = "absolute";
		document.getElementById("pqsl").style.visibility = " hidden";
		document.getElementById("pqsl").style.position = "absolute";
		}

function ouv() {
		document.getElementById("ouvintes").style.visibility = " visible";
		document.getElementById("ouvintes").style.position = "relative";
		document.getElementById("ajude").style.visibility = " hidden";
		document.getElementById("ajude").style.position = "absolute";
		document.getElementById("pro").style.visibility = "hidden";
		document.getElementById("pro").style.position = "absolute";
		document.getElementById("con").style.visibility = "hidden";
		document.getElementById("con").style.position = "absolute";
		document.getElementById("sobre").style.visibility = " hidden";
		document.getElementById("sobre").style.position = "absolute";
		document.getElementById("espe").style.visibility = " hidden";
		document.getElementById("espe").style.position = "absolute";
		document.getElementById("pqsl").style.visibility = " hidden";
		document.getElementById("pqsl").style.position = "absolute";
		}
		
function ini() {
		document.getElementById("con").style.visibility = "hidden";
		document.getElementById("pro").style.visibility = "hidden";
		document.getElementById("ajude").style.visibility = "hidden";
		document.getElementById("con").style.position = "absolute";
		document.getElementById("pro").style.position = "absolute";
		document.getElementById("ajude").style.position = "absolute";
		document.getElementById("sobre").style.visibility = " hidden";
		document.getElementById("sobre").style.position = "absolute";
		document.getElementById("espe").style.visibility = " hidden";
		document.getElementById("espe").style.position = "absolute";
		document.getElementById("ouvintes").style.visibility = " hidden";
		document.getElementById("ouvintes").style.position = "absolute";
		document.getElementById("pqsl").style.visibility = " hidden";
		document.getElementById("pqsl").style.position = "absolute";
		}
		
function qsl() {
		document.getElementById("con").style.visibility = "hidden";
		document.getElementById("pro").style.visibility = "hidden";
		document.getElementById("ajude").style.visibility = "hidden";
		document.getElementById("con").style.position = "absolute";
		document.getElementById("pro").style.position = "absolute";
		document.getElementById("ajude").style.position = "absolute";
		document.getElementById("sobre").style.visibility = " hidden";
		document.getElementById("sobre").style.position = "absolute";
		document.getElementById("espe").style.visibility = " hidden";
		document.getElementById("espe").style.position = "absolute";
		document.getElementById("ouvintes").style.visibility = " hidden";
		document.getElementById("ouvintes").style.position = "absolute";
		document.getElementById("pqsl").style.visibility = " visible";
		document.getElementById("pqsl").style.position = "relative";
		}
/* Fim Funçoes do Nenu*/

/* Funçoes Aleatorias*/	

/* Relogio*/	
function reloj() {
		let elementoID = document.getElementById('relogio');
		let horalocal = new Date().toLocaleTimeString('es');
		elementoID.innerHTML = horalocal;
		}
		setInterval(reloj, 1000);
		
function reloj2() {
		let elementoID = document.getElementById('relogio2');
		let horalocal = new Date().toLocaleTimeString('es');
		elementoID.innerHTML = horalocal;
		}
		setInterval(reloj2, 1000);
/* Fim Relogio*/

/* Funçoes Aleatorias*/	