var a = prompt("Podaj a");
var h = prompt("Podaj h");
var triangleArea = getTriangleArea (a, h),
	triangle1Area = getTriangleArea(1, 1),
	triangle2Area = getTriangleArea(5, 5),
	triangle3Area = getTriangleArea(10, 10);


function getTriangleArea (a, h) {

	if ((a <= 0) && (h <= 0)) {
		document.write("Nieprawidłowe dane");
	} else if ((a > 0) || (h > 0)) {
		return a * h / 2;
	}
}

console.log(getTriangleArea(10, 6));



