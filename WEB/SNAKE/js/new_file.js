window.onload = function() {
	var div = document.querySelector("div");
	var ul = document.querySelector("ul");
	var oLis = ul.children;
	for(var i = 0; i < 2; i++) {
		var newDl = document.createElement("dl");
		for(var j = 0; j < 31; j++) {
			var newDd = document.createElement("dd");
			j == 15 ? newDd.style.backgroundColor = "#fff" : false;
			j == 15 ? newDd.style.border = "none" : false;
			newDl.appendChild(newDd);
		}
		div.appendChild(newDl);
	}
	for(var i = 0; i < 2; i++) {
		var newDl = document.createElement("dl");
		for(var j = 0; j < 19; j++) {
			var newDd = document.createElement("dd");
			j == 9 ? newDd.style.backgroundColor = "#fff" : false;
			j == 9 ? newDd.style.border = "none" : false;
			newDl.appendChild(newDd);
		}
		div.appendChild(newDl);
	}
	function add() {
		newTop = Math.ceil(Math.random() * 17) * 30;
		newLeft = Math.ceil(Math.random() * 27) * 30;
		for(var i = 0; i < oLis.length; i++) {
			if(oLis[i].offsetLeft == newLeft && oLis[i].offsetTop == newTop) {
				add();
				return;
			}
		}
		newLi = document.createElement("li");
		newLi.style.top = newTop + "px";
		newLi.style.left = newLeft + "px";
		div.appendChild(newLi);
	};
	add();
	function positions() {
		for(var i = oLis.length - 1; i > 0; i--) {
			oLis[i].style.left = oLis[i - 1].offsetLeft + "px";
			oLis[i].style.top = oLis[i - 1].offsetTop + "px";
		}
	}
	function Reset() {
		for(var i = oLis.length - 1; i >= 0; i--) {
			if(i < 3) {
				oLis[i].style.top = "";
				oLis[i].style.left = "";
				continue;
			}
			ul.removeChild(oLis[i]);
		}
		clearInterval(timer);
		timer = setInterval(function() {
			var fLi = ul.firstElementChild;
			if(fLi.offsetWidth == newLi.offsetLeft - fLi.offsetLeft && newLi.offsetTop == fLi.offsetTop) {
				ul.insertBefore(newLi, fLi);
				add();
			}else {
				positions();
				if(fLi.offsetLeft == 870 && fLi.offsetTop != 300) {
					alert("game over！");
					Reset();
				} else {
					fLi.style.left = fLi.offsetLeft + fLi.offsetWidth + "px";
					if(fLi.offsetLeft == 930) {
						fLi.style.left = "0px";
					}
				}
			}
		}, 240);
	}
	timer = setInterval(function() {
		var fLi = ul.firstElementChild;
		if(fLi.offsetWidth == newLi.offsetLeft - fLi.offsetLeft && newLi.offsetTop == fLi.offsetTop) {
			ul.insertBefore(newLi, fLi);
			add();
		}else {
			positions();
			if(fLi.offsetLeft == 870 && fLi.offsetTop != 300) {
				alert("game over！");
				Reset();
			} else {
				fLi.style.left = fLi.offsetLeft + fLi.offsetWidth + "px";
				if(fLi.offsetLeft == 930) {
					fLi.style.left = "0px";
				}
			}
		}
	}, 240);
	document.onkeydown = function(ev) {
		var e = ev || window.event;
		if(e.keyCode == 37 || e.keyCode == 38 || e.keyCode == 39 || e.keyCode == 40) {
			var fLi = ul.firstElementChild;
			nextTop = fLi.nextElementSibling.offsetTop;
			nextLeft = fLi.nextElementSibling.offsetLeft;
			if(e.keyCode == 37&&fLi.offsetLeft==nextLeft) {
				clearInterval(timer);
				timer = setInterval(function() {
					var fLi = ul.firstElementChild;
					if(fLi.offsetWidth == fLi.offsetLeft - newLi.offsetLeft && newLi.offsetTop == fLi.offsetTop) {
						ul.insertBefore(newLi, fLi);
						add();
					} else {
						positions();
						if(fLi.offsetLeft == 30 && fLi.offsetTop != 300) {
							alert("game over！");
							Reset();
						} else {
							fLi.style.left = fLi.offsetLeft - fLi.offsetWidth + "px";
							if(fLi.offsetLeft == -30) {
								fLi.style.left = "900px";
							}
						}
					}
				}, 240);
			} else if(e.keyCode == 38&&fLi.offsetTop==nextTop) {
				clearInterval(timer);
				timer = setInterval(function() {
					var fLi = ul.firstElementChild;
					if(fLi.offsetWidth == fLi.offsetTop - newLi.offsetTop && newLi.offsetLeft == fLi.offsetLeft) {
						ul.insertBefore(newLi, fLi);
						add();
					} else {
						positions();
						if(fLi.offsetTop == 30 && fLi.offsetLeft != 450) {
							alert("game over！");
							Reset();
						} else {
							fLi.style.top = fLi.offsetTop - fLi.offsetWidth + "px";
							if(fLi.offsetTop == -30) {
								fLi.style.top = "600px";
							}
						}
					}
				}, 240);
			} else if(e.keyCode == 39&&fLi.offsetLeft==nextLeft) {
				clearInterval(timer);
				timer = setInterval(function() {
					var fLi = ul.firstElementChild;
					if(fLi.offsetWidth == newLi.offsetLeft - fLi.offsetLeft && newLi.offsetTop == fLi.offsetTop) {
						ul.insertBefore(newLi, fLi);
						add();
					}else {
						positions();
						if(fLi.offsetLeft == 870 && fLi.offsetTop != 300) {
							alert("game over！");
							Reset();
						} else {
							fLi.style.left = fLi.offsetLeft + fLi.offsetWidth + "px";
							if(fLi.offsetLeft == 930) {
								fLi.style.left = "0px";
							}
						}
					}
				}, 240);
			} else if(e.keyCode == 40&&fLi.offsetTop==nextTop) {
				clearInterval(timer);
				timer = setInterval(function() {
					var fLi = ul.firstElementChild;
					if(fLi.offsetWidth == newLi.offsetTop - fLi.offsetTop && newLi.offsetLeft == fLi.offsetLeft) {
						ul.insertBefore(newLi, fLi);
						add();
					} else {
						positions();
						if(fLi.offsetTop == 570 && fLi.offsetLeft != 450) {
							alert("game over！");
							Reset();
						} else {
							fLi.style.top = fLi.offsetTop + fLi.offsetWidth + "px";
							if(fLi.offsetTop == 630) {
								fLi.style.top = "0px";
							}
						}
					}
				}, 240);
			}
		}
	}
}