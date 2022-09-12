window.addEventListener('load', function() {
	console.log('script.js loaded');
	init();
});

function init() {
	var wodListDiv = document.getElementById("wodListDiv");
	var addWodDiv = document.getElementById('addWodDiv');
	var singleWodDiv = document.getElementById('singleWodDiv');
	var updateWodForm = document.getElementById('updateWodForm');
	var updateWodDiv = document.getElementById('updateWodDiv');
	var deleteWodButton = document.getElementById('deleteSingleWodButton');
	loadAllWods();

	let addWodButton = document.getElementById('addWod');
	addWodButton.addEventListener(('click'), function(e) {
		e.preventDefault();
		var addWodForm = document.getElementById('addWodForm');
		let wod = {
			name: addWodForm.name.value,
			date: addWodForm.date.value,
			description: addWodForm.description.value,
			personalTime: addWodForm.personalTime.value,
			comments: addWodForm.comments.value

		};
		addWod(wod);
	});

	let updateWodButton = document.getElementById('updateWod');
	updateWodButton.addEventListener(('click'), function(e) {
		//e.preventDefault();
		var updateWodForm = document.getElementById('updateWodForm');
		let wod = {
			id: Number(updateWodForm.id.value),
			name: updateWodForm.name.value,
			date: updateWodForm.date.value,
			description: updateWodForm.description.value,
			personalTime: updateWodForm.personalTime.value,
			comments: updateWodForm.comments.value

		};
		updateWod(wod);
	});
	
	deleteWodButton.addEventListener('click', function (e) {
		e.preventDefault();
		wodListDiv.classList.toggle('d-none');
		singleWodDiv.classList.toggle('d-none');
		addWodDiv.classList.toggle('d-none');
		updateWodDiv.classList.toggle('d-none');
		let xhr = new XMLHttpRequest();
		xhr.open('DELETE', 'api/wods' + '/' + updateWodForm.id.value);
		xhr.onreadystatechange = function () {
			if (xhr.readyState === 4) {
				if (xhr.status === 204) {

					loadAllWods()

				}
			}
		}
		// xhr.setRequestHeader('Content-type', 'application/json');
		xhr.send();
	});
	
	
	let goToWodListView = document.getElementById('toListView');
	goToWodListView.addEventListener('click', function (e) {
		e.preventDefault();
		wodListDiv.classList.toggle('d-none');
		singleWodDiv.classList.toggle('d-none');
		addWodDiv.classList.toggle('d-none');
		updateWodDiv.classList.toggle('d-none');
		loadAllWods();
	});
};



function loadAllWods() {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/wods');
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				displayWod(JSON.parse(xhr.responseText));
			}
			else {
				console.error("Error loading events: " + xhr.status);
			}
		}
	}
	xhr.send();

}

function displayWod(wodList) {
	createStatistics(wodList);
	wodListDiv.innerHTML = "";
	for (let wod of wodList) {
		let table = document.createElement('table');
		wodListDiv.appendChild(table);
		
		if (wod.name) {
			let trName = document.createElement('tr');
			trName.addEventListener('click', function(e) {
				e.preventDefault();
				initializeUpdateFormAndObject(wod);
				showSingleWod(wod);
			});
			let nameHeader = document.createElement('td');
			nameHeader.textContent = "Wod Name: " + wod.name;
			trName.appendChild(nameHeader);
			table.appendChild(trName);
		}
		
		if (wod.date) {
			let trDate = document.createElement('tr');
			trDate.addEventListener('click', function(e) {
				e.preventDefault();
				initializeUpdateFormAndObject(wod);
				showSingleWod(wod);
			});
			let dateHeader = document.createElement('td');
			dateHeader.textContent = "Date: " + wod.date;
			trDate.appendChild(dateHeader);
			table.appendChild(trDate);
		}
		
		if (wod.description) {
			let trDescription = document.createElement('tr');
			trDescription.addEventListener('click', function(e) {
				e.preventDefault();
				initializeUpdateFormAndObject(wod);
				showSingleWod(wod);
			});
			let descriptionHeader = document.createElement('td');
			descriptionHeader.textContent = "Description: " + wod.description;
			trDescription.appendChild(descriptionHeader);
			table.appendChild(trDescription);
		}
		
		if (wod.personalTime) {
			let trPersonalTime = document.createElement('tr');
			trPersonalTime.addEventListener('click', function(e) {
				e.preventDefault();
				initializeUpdateFormAndObject(wod);
				showSingleWod(wod);
			});
			let personalTimeHeader = document.createElement('td');
			personalTimeHeader.textContent = "Personal Time: " + wod.personalTime;
			trPersonalTime.appendChild(personalTimeHeader);
			table.appendChild(trPersonalTime);
		}
		
		if (wod.personalTime) {
			let trComments = document.createElement('tr');
			trComments.addEventListener('click', function(e) {
				e.preventDefault();
				initializeUpdateFormAndObject(wod);
				showSingleWod(wod);
			});
			let commentsHeader = document.createElement('td');
			commentsHeader.textContent = "Comments: " + wod.comments;
			trComments.appendChild(commentsHeader);
			table.appendChild(trComments);
		}
		
	}
	wodListDiv.appendChild(document.createElement('hr'));
}

function addWod(wod) {
	let xhr = new XMLHttpRequest();
	xhr.open('POST', 'api/wods');
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200 || xhr.status === 201) {
				console.log('WOD created')
				//displayWod(JSON.parse(xhr.responseText));
				console.log(xhr.getResponseHeader('Location'));
				console.log(wod);
				loadAllWods();
			}
			else if (xhr.status === 400) {
				displayError('Invalid data');
			}
			else {
				displayError('Error creating WOD: ' + xhr.status);
			}
		}
	}
	xhr.setRequestHeader("Content-type", "application/json");
	let wodJson = JSON.stringify(wod);
	xhr.send(wodJson);
}


function updateWod(wod) {
	wodListDiv.classList.toggle('d-none');
	singleWodDiv.classList.toggle('d-none');
	addWodDiv.classList.toggle('d-none');
	updateWodDiv.classList.toggle('d-none');

	let xhr = new XMLHttpRequest();
	xhr.open('PUT', 'api/wods');
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 201) {
				console.log('WOD updated')
				//displayWod(JSON.parse(xhr.responseText));
				
				console.log(wod);
				loadAllWods();
			}
	
		}
	}
	xhr.setRequestHeader("Content-type", "application/json");
	xhr.send(JSON.stringify(wod));

}

function showSingleWod(wod) {
	let clearPreviousWod = document.getElementById('clearPreviousWod');
	clearPreviousWod.innerHTML = '';

	wodListDiv.classList.toggle('d-none');
	singleWodDiv.classList.toggle('d-none');
	addWodDiv.classList.toggle('d-none');
	updateWodDiv.classList.toggle('d-none');

	let table = document.createElement('table');
	clearPreviousWod.appendChild(table);
	
	
	if (wod.name) {
			let trName = document.createElement('tr');
			let nameHeader = document.createElement('td');
			nameHeader.textContenet = "Wod Name: " + wod.name;
			trName.appendChild(nameHeader);
			table.appendChild(trName);
		}
		
		if (wod.date) {
			let trDate = document.createElement('tr');
			let dateHeader = document.createElement('td');
			dateHeader.textContenet = "Date: " + wod.date;
			trDate.appendChild(dateHeader);
			table.appendChild(trDate);
		}
		
		if (wod.description) {
			let trDescription = document.createElement('tr');
			let descriptionHeader = document.createElement('td');
			descriptionHeader.textContenet = "Description: " + wod.description;
			trDescription.appendChild(descriptionHeader);
			table.appendChild(trDescription);
		}
		
		if (wod.personalTime) {
			let trPersonalTime = document.createElement('tr');
			let personalTimeHeader = document.createElement('td');
			personalTimeHeader.textContenet = "Personal Time: " + wod.personalTime;
			trPersonalTime.appendChild(personalTimeHeader);
			table.appendChild(trPersonalTime);
		}
		
		if (wod.personalTime) {
			let trComments = document.createElement('tr');
			let commentsHeader = document.createElement('td');
			commentsHeader.textContenet = "Comments: " + wod.comments;
			trComments.appendChild(commentsHeader);
			table.appendChild(trComments);
		}

}

function initializeUpdateFormAndObject(wod) {
	updateWodForm.id.value = wod.id;
	updateWodForm.name.value = wod.name;
	updateWodForm.date.value = wod.date;
	updateWodForm.description.value = wod.description;
	updateWodForm.personalTime.value = wod.personalTime;
	updateWodForm.comments.value = wod.comments;

}


function createStatistics(wods) {
	let count = wods.length || 0;
	targetMe.textContent = `Keep going! - ${count} workouts so far!`;
	
}