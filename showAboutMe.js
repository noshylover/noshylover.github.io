var html=document.querySelector("html");
var toggleShow=document.getElementById('more');
var toggleHide=document.getElementById('less');
var toggleHide2=document.getElementById('less2');
var aboutMe=document.getElementById('bio');

/*var engagePartyMode=document.getElementById('startParty');
/*var disengagePartyMode=document.getElementById('stopParty');
/*var thePage=document.getElementById('thePage');*/


toggleShow.addEventListener('click',function(e){
	e.stopPropagation();
	aboutMe.classList.remove('hidden');
	toggleHide2.classList.remove('hidden');
	toggleHide.classList.remove('hidden');
	toggleShow.classList.add('hidden');

	/*thePage.classList.add('extender');

	engagePartyMode.classList.add('hidden');
	disengagePartyMode.classList.add('hidden');
	thePage.classList.remove('party');*/
});

toggleHide.addEventListener('click',function(e){
	e.stopPropagation();
	aboutMe.classList.add('hidden');
    toggleShow.classList.remove('hidden');
	toggleHide.classList.add('hidden');
	toggleHide2.classList.add('hidden');

	/*thePage.classList.remove('extender');
	/*engagePartyMode.classList.remove('hidden');*/
});

toggleHide2.addEventListener('click',function(e){
	e.stopPropagation();
	aboutMe.classList.add('hidden');
    toggleShow.classList.remove('hidden');
	toggleHide.classList.add('hidden');
	toggleHide2.classList.add('hidden');

	/*thePage.classList.remove('extender');
	/*engagePartyMode.classList.remove('hidden');*/
});

/*engagePartyMode.addEventListener('click',function(e){
	e.stopPropagation();
	engagePartyMode.classList.add('hidden');
	disengagePartyMode.classList.remove('hidden');
	thePage.classList.add('party');
});

disengagePartyMode.addEventListener('click',function(e){
	e.stopPropagation();
	engagePartyMode.classList.remove('hidden');
	disengagePartyMode.classList.add('hidden');
	thePage.classList.remove('party');
});*/
