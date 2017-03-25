var curIndex = 1;

function next() {
	if(curIndex >= 6) return;

	var curPage = document.getElementById("page" + curIndex);
	curPage.style.webkitTransform = "rotateX(-90deg)";

	curIndex++;
	var nextPage = document.getElementById("page" + curIndex);
	console.log(nextPage);
	nextPage.style.webkitTransform = "rotateX(0deg)";
}	

function prev() {
	if(curIndex <= 1) return;
	
	var curPage = document.getElementById("page" + curIndex);
	curPage.style.webkitTransform = "rotateX(90deg)";

	curIndex--;
	var prePage = document.getElementById("page" + curIndex);
	prePage.style.webkitTransform = "rotateX(0deg)";
}