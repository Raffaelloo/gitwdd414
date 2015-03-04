console.log("Ein JS Beispiel");
console.log("Ist aber noch nicht fertig");

alert("Do not use in production");
alert('Bad things will happen');

document.body.style.backgroundColor = 'red';

var yes = confirm("Are you sure you dont have this in production?");

if (!yes) {
	window.close();
}