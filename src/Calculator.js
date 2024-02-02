import React from "react";
class Calculator extends React.Component {
	constructor() {
		super();
		console.log("Hello");
		
        this.state = {
			display: "",
			fval: "",
			sign: ""
		}
	}

	getdata = (x) => {
		// alert(x);
		this.setState({ display: this.state.display + x });
	}

	caldata = (h) => {
		this.setState({
			fval: this.state.display,
			display: "",
			sign: h
		})
	}


	handleEquals = () => {
		const lval = this.state.display;
		switch (this.state.sign) {
			case 1:
				this.setState({ display: (parseFloat(this.state.fval) + parseFloat(lval)) })
				break;
			case 2:
				this.setState({ display: (parseFloat(this.state.fval) - parseFloat(lval)) })
				break;
			case 3:
				this.setState({ display: (parseFloat(this.state.fval) * parseFloat(lval)) })
				break;
			case 4:
				if (parseFloat(lval) === 0) {
					this.setState({ display: "Error" });
				} else {
					this.setState({ display: (parseFloat(this.state.fval) / parseFloat(lval)) })
				}
				break;
			case 5:
				if (parseFloat(lval) === 0) {
					this.setState({ display: "Error" });
				} else {
					this.setState({ display: (parseFloat(this.state.fval) % parseFloat(lval)) })
				}
				break;
		}
	}

	handleClear = () => {
		this.setState({ display: "" });
	}

	singledel=()=>{
		this.setState((prevState)=>({display:prevState.display.slice(0,-1)}));
	}

	render() {
		return (
			<div>
				<div class="main_div">
				<div class="text">
					<input type="text" name="" value={this.state.display} ></input>
				</div>
				<div class="btn">
					<input type="button" name="" value={"%"} onClick={() => this.caldata(5)} ></input>
					<input type="button" name="" value={"C"} onClick={() => this.handleClear()}></input>
					<input type="button" name="" value={"Del"} onClick={() => this.singledel()}></input>
					<input type="button" name="" value={"/"} onClick={() => this.caldata(4)}></input>
				</div>
				<div class="btn">
					<input type="button" name="" value={"7"} onClick={() => this.getdata(7)}></input>
					<input type="button" name="" value={"8"} onClick={() => this.getdata(8)}></input>
					<input type="button" name="" value={"9"} onClick={() => this.getdata(9)}></input>
					<input type="button" name="" value={"*"} onClick={() => this.caldata(3)}></input>
				</div>
				<div class="btn">
					<input type="button" name="" value={"4"} onClick={() => this.getdata(4)}></input>
					<input type="button" name="" value={"5"} onClick={() => this.getdata(5)}></input>
					<input type="button" name="" value={"6"} onClick={() => this.getdata(6)}></input>
					<input type="button" name="" value={"-"} onClick={() => this.caldata(2)}></input>
				</div>
				<div class="btn">
					<input type="button" name="" value={"1"} onClick={() => this.getdata(1)} ></input>
					<input type="button" name="" value={"2"} onClick={() => this.getdata(2)} ></input>
					<input type="button" name="" value={"3"} onClick={() => this.getdata(3)}></input>
					<input type="button" name="" value={"+"} onClick={() => this.caldata(1)}></input>
				</div>
				<div class="btn">
					<input type="button" name="" value={"+"} onClick={() => this.caldata()} ></input>
					<input type="button" name="" value={"0"} onClick={()=> this.getdata(0)}></input>
					<input type="button" name="" value={"."} onClick={() => this.getdata(".")} ></input>
					<input type="button" name="" value={"="} onClick={() => this.handleEquals()} style={{backgroundColor:"#91908C"}}></input>
				</div>
			</div>
			</div>
		)
	}
}
export default Calculator;