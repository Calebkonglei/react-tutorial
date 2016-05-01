var pageWidth=window.innerWidth;
var pageHeight=window.innerHeight;

if(typeof pageWidth!="number"){
	if(document.compatMode=="CSSCompat"){
		pageWidth=document.documentElement.clientWidth;

	}
}