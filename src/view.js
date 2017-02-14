import "./card.scss"

/*使用ES6模块编码，不依赖任何第三方JS，CSS库
完成父级组件View，含show，hide，render方法，title等属性
完成继承自View的Card组件，扩展出load（加载数据显示），collapse（折叠），expand（展开）方法。折叠展开含css3动画。
完成demo，实例化n个Card组件。
重点考察组件设计能力，编码习惯，代码风格。
按高质量组件要求自己，注意细节。*/

class View{
	constructor(args){
		if(args.target && args.title){
			this.props = {//属性
				title:args.title,
				content:args.content || "loading~~"
			}
			this.state = {//可改变状态
				target:args.target,
				show:true
			}
		}else{
			throw new Error("wrong arguments!");
		}
		
		this.render = this.render.bind(this);
		this.show = this.show.bind(this);
		this.hide = this.hide.bind(this);
	}
	
	show(){
		this.state.show = true;
		this.state.target.style.display = "block";
	}
	hide(){
		this.state.show = false;
		this.state.target.style.display = "none";
	}
	render(){
		this.state.target.innerHTML = 
			`<div class='card'>
				<div class='title'>${this.props.title}</div>
				<div class='content'>${this.props.content}</div>
			</div>`;

		this.state.target.onselectstart = () => false;
	}

}

export default View;