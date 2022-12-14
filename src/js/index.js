import '../css/index.css';
import Digits from "./Digits";
import Operations from "./Operations";
import { calculate, formatNumber } from "./utils";

const initData = {
    totalNumber: '0',
    firstOperand: '',
    secondOperand: null,
    operator : null,
}
class Calculator {
    constructor() {
        this.state = initData;
        this.digits = document.querySelector('div.digits');
        this.operations = document.querySelector('div.operations');
        this.total = document.querySelector('#total');
        this.init();
    }

    init(){
        new Digits(this.digits, this.updateOperand.bind(this));
        new Operations(this.operations, this.setOperation.bind(this));
    }

    updateOperand(digit){
        const { state } = this;
        const { operator } = state;
        let { firstOperand, secondOperand } = state;

        if (!operator){
            firstOperand = formatNumber(firstOperand, digit);
        }else{
            secondOperand = formatNumber(secondOperand, digit);
        }

        const totalNumber = operator ? firstOperand + operator + secondOperand : firstOperand;

        this.setState({...state,totalNumber,firstOperand,secondOperand})
    }

    setOperation(operation){
        const { state } = this;
        const operator = operation;

        if(operation === "="){
            state.totalNumber = calculate(state);
            this.setState({...state});
            return;
        }

        this.setState({...state, totalNumber: state.firstOperand + operator, operator});
    }

    setState(newState){
        this.state = newState;
        this.render();
    }

    render(){
        this.total.textContent = this.state.totalNumber;
    }
}

new Calculator();