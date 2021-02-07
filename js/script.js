
let forms = document.querySelectorAll('.boxForm');

for (let i = 0; i < forms.length; i++) {
	let padLeft = getComputedStyle(forms[i].parentElement.children[0]).paddingLeft;
	let labWidthPx = getComputedStyle(forms[i].parentElement.children[1]).width;
	let labWidth = labWidthPx.replace('px','');
	let widhtLeft = padLeft.replace('px','');
	let formWidthPx = getComputedStyle(forms[i].parentElement.children[0]).width;
	let formWidth = formWidthPx.replace('px','');
	let formRight = (+formWidth)-(+widhtLeft+(+labWidth));

	forms[i].children[0].style.width = padLeft;
	forms[i].children[1].style.width = labWidthPx;
	forms[i].children[2].style.width = formRight+'px';
}


function focusInput(el) {
	console.log(el);

	el.parentElement.classList.add('fillInput');
	let boxForm = el.parentElement.querySelector('.boxForm');

	el.addEventListener('blur',() => {
	 		if (el.value.length > 0) {
	 			return
	 		}
	 		else {
	 			el.parentElement.classList.remove('fillInput');
	 			boxForm.children[1].style.borderTopWidth = "2px";
	 			boxForm.children[1].style.borderBottomWidth = "";
	 		}
		});
}


// Тоглл чек-бокса
function checkbox(el) {
	if (el.classList.contains('disable')) {
		return
	}
	else if (el.classList.contains('checked')) {
		el.classList.remove('checked');
	}
	else {
		el.classList.add('checked');
	}
}

function checkbox(el) {
	if (el.classList.contains('disable')) {
		return
	}
	else if (el.classList.contains('checked')) {
		el.classList.remove('checked');
	}
	else {
		el.classList.add('checked');
	}
}

function toggle(el) {
	if (el.classList.contains('disable')) {
		return
	}
	else if (el.classList.contains('checked')) {
		el.classList.remove('checked');
	}
	else {
		el.classList.add('checked');
	}
}
function radio(el) {
	if (el.classList.contains('disable')) {
		return
	}
	else if (el.classList.contains('checked')) {
		el.classList.remove('checked');
	}
	else {
		el.classList.add('checked');
	}
}

function getName() { 
	document.querySelector('.fileName').textContent = document.querySelector('input[type=file]').files[0].name
}






let cards = document.querySelectorAll('.navCard')


for (let i = 0; i < cards.length; i++) {
	console.log(cards[i]);
	let wrapps = cards[i].querySelector('.content').children;
	console.log(wrapps);

	let tabs = cards[i].querySelector('.navigation').children;
	console.log(tabs);

	for (let j = 0; j < tabs.length; j++) {
		tabs[j].addEventListener('click',() => {
		  	for (let z = 0; z < wrapps.length; z++)  {
		  	  if (wrapps[j] == wrapps[z]) {
		  	  	wrapps[z].classList.add('active');
		  	  	tabs[z].classList.add('active');
		  	  }
		  	  else {
		  	  	wrapps[z].classList.remove('active')
		  	  	tabs[z].classList.remove('active');
		  	  }
		  	}
		});
	}

	
}
