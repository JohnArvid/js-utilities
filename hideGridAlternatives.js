//css-classes on grids like hideRow4Alt5 will hide answer alternative 5 on question row 4
//call the function hideGridAlternatives();

function hideGridAlternatives() {
	const hideRowNodeList = document.querySelectorAll("[class*='hideRow']");
	const actualElementIds = fullIdArray( mapQsAndClasses( getQidsFromHideRowNodeList(), getAllHideRowClassesForQids() ) );
	
	actualElementIds.forEach( removeElement );


	function getAllHideRowClassesForQids() {
		//iterate over nodelist	
		let classesArray = [];
		for (const entry of hideRowNodeList.entries()) {
		    classesArray.push(Array.from(entry[1].classList).filter( item => item.indexOf("hideRow") !== -1));    
		}
		return classesArray;
	}



	//array of IDs with hideRow classes
	function getQidsFromHideRowNodeList() {
		let questionIds = Array.from(hideRowNodeList).map( (element) => {
			id = element.children[0].innerHTML;
			if (id[id.length - 1] === "*") {
				id = id.slice(0, id.length -1);
	            return id;
			}
			else return id;
		});
		return questionIds;
	}

	
	//map the resulting arrays in	an object with ids as keys and arrays of classes as values
	function mapQsAndClasses(questionIds, classesArray) {
		let i = 0;
		let mappedObj = {};

		for (let qid of questionIds) {
			mappedObj[qid] = classesArray[i];
			i++;
		}
		return mappedObj;
	}

	//build an array with ids like "Q95.4:5" by getting what rows and alts to hide for every qid
	function fullIdArray(mappedObj) {
		let arrOfFullIDs = [];
		for (let qid in mappedObj) {
		    
		    for (item of mappedObj[qid]) {
		        let rowAndAlt = item.replace("hideRow", ".").replace("Alt", ":");
		        let fullID = qid + rowAndAlt;
		        arrOfFullIDs.push(fullID);
		    }
		}
		return arrOfFullIDs; 
	}
	
	function removeElement(elementId) {
		let element = document.getElementById(elementId).parentElement;
		element.setAttribute("tabindex", "-1");
		element.setHTML("");
	}
}