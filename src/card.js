import View from './view.js'

class Card extends View {
	constructor(args){
		super(args);
		//custom styles
		this.styles = args.styles;
		this.expand = this.expand.bind(this);
		this.collapse = this.collapse.bind(this);
		this.toggle = this.toggle.bind(this);
	}
	//加载content内容
	load(content){
		if(typeof content === 'string'){
			this.contentNode.textContent = content;
		}else{
			this.contentNode.textContent = 'Content format error';
		}
	}
	//展开，折叠
	expand(){
		this.state.show = true;

		this.cardNode.className = "card";
		this.contentNode.style.display = "block";
	}
	collapse(){
		this.state.show = false;

		this.cardNode.className += " hideCard";
		this.contentNode.style.display = "none";
	}
	toggle(){
		this.state.show ? this.collapse() : this.expand() ;
	}
	render(){
		this.state.target.innerHTML = 
			`<div class='card'>
				<div class='title'>${this.props.title}</div>
				<div class='content'>${this.props.content}</div>
			</div>`;
		this.cardNode = this.state.target.querySelector(".card");
		this.contentNode = this.state.target.querySelector(".content");	
		//custom styles
		for(let i in this.styles){
			this.state.target.querySelector(".card").style[i] = this.styles[i];
		}
		this.cardNode.addEventListener("click",this.toggle);
	}
}

export default Card;