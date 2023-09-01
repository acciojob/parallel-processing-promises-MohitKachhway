//your JS code here. If required.
const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];

function download(images){
	let Arr=[];
	for (let i = 0; i < images.length; i++) {
		let prom = new Promise((resolve,reject)=>{
			let img = document.createElement("img");
			img.src= images[i].url;

			img.onload=function(){
				resolve(img);
			}
			img.onerror=function(){
				reject(new error(`Failed to load image's URL: ${images[i].url}`))
			}
		})
		Arr.push(prom);
	}

	let result = Promise.all(Arr);
	result
	.then((imgArr)=>{
		// let container = document.getElementById("output");
		imgArr.forEach((img)=>{
			output.appendChild(img);
		})
	})
	.catch((error)=>{
		console.error(error);
	})
}
// let btn = document.getElementById("download-images-button");
btn.addEventListener("click",function(){download(images)});






