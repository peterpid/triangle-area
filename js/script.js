function getTriangleArea (a, h) {
	if (a <= 0 || h <= 0) {
		return 'Invalid data';
	}
	return a * h / 2;
}

console.log(getTriangleArea(10 ,6));
var triangleArea1 = getTriangleArea(10, 6);
var triangleArea2 = getTriangleArea(24.3, 5.3);
var triangleArea3 = getTriangleArea(-10, -6);
var triangleArea4 = getTriangleArea(0,-56);
var triangleArea5 = getTriangleArea(0, 0);
console.log('results: '+ triangleArea1 + ', ' + triangleArea2 + ', ' + triangleArea3 + ', ' + triangleArea4 +', ' + triangleArea5);

