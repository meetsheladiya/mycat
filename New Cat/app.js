var pics=[	"cats/cat1.jpg",
			"cats/cat2.jpg",
			"cats/cat3.jpg",
			"cats/cat4.jpg"	]

var btn=document.querySelector("button");
var img=document.querySelector("img");
var i=1;

btn.addEventListener("click", function(){
	if(i==3)
	{
		i=0;
	}
	img.src=pics[i];
	i+=1;
});