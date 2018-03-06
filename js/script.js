/*
  Triangle Area
 
  added comments for task 8.4
*/

// comment below is on purpose for task 8.4
//	alert("Invalid format of triangle base. Base must be a number.");


function calcTriangleArea (a, h) {
	return a * h / 2;
}

var triangleBase = prompt("Please enter triangle base");
if (triangleBase !== null) {
	console.log('triangleBase: ' + triangleBase);
	var a = Number(triangleBase); 	
	if (!isNaN(a) && a >= 0) {
		var triangleHeight = prompt('Please enter triangle height');
		if (triangleHeight !== null) {
			var h = Number(triangleHeight); 	
			if (!isNaN(h) && h >= 0) {
				var triangleArea = calcTriangleArea(a, h);
				console.log('Triangle area for base a: ' + a + ' and height h: ' + h + ' is: ' + triangleArea);
				alert('Triangle area is: ' + triangleArea);
			} else {
				alert('Invalid format of triangle height. Height must be a number and > 0.');
			}
		} else {
			alert('Invalid format of triangle height. Height must be a number.');
		}
	} else {
		alert('Invalid format of triangle base. Base must be a number and > 0.');
	}
} else {
	alert('Invalid format of triangle base. Base must be a number.');
}
