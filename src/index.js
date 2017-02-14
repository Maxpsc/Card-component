import View from './view.js'
import Card from './card.js'
//实例化View
let view = new View({target:document.querySelector(".view"),title:"view",content:"view content"});
view.render();
view.show()

//实例化Card
let container = document.getElementById("container");
let count = document.getElementById("card-count");
//input:number 注册监听事件
count.addEventListener("input",(event)=>{
	event = event || window.event;
	let n = event.target.value;//n个实例
	container.innerHTML = "";
	for(let i = 0; i < n; i++){
		//create item
		let item = document.createElement("div");
		item.className = "item";
		container.appendChild(item);
		//Card实例化
		let args = {
			"target":item,
			"title":"card"+~~(i+1),
			"content":"",
			"styles":{
				"background-color":randomColor(),
				"color":randomColor()
			}
		}
		let card = new Card(args);
		card.render();

		//异步load content
		setTimeout(function(){
			card.load("content!!!!");
		},Math.random()*1000);
	}
})

//生成随机颜色
function randomColor(){
	return '#'+Math.floor(Math.random()*0xffffff).toString(16);
}