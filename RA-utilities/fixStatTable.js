window.addEventListener('load', () => {
if (document.getElementById('statTable')) {
	document.getElementById('btnSync').value = 'Uppdatera';
	let freqTableHeader = document.getElementById('statTable').firstChild;
	let freqTableBody = document.getElementById('statTable').lastChild;
	freqTableHeader.firstChild.childNodes[1].textContent = 'Antal';
	freqTableHeader.firstChild.childNodes[2].textContent = 'Andel (%) av total'; 
	freqTableBody.childNodes[0].firstChild.textContent = 'Besvarade';
	freqTableBody.childNodes[1].firstChild.textContent = 'Påbörjade'; 
	freqTableBody.childNodes[2].firstChild.textContent = 'Öppnat mail'; 
	freqTableBody.childNodes[3].firstChild.textContent = 'Mottagit mail'; 
	freqTableBody.childNodes[4].firstChild.textContent = 'Totalt'; 
	freqTableBody.childNodes[5].remove(); 
	}
})