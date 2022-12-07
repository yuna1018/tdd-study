import {CALCULATE} from "./constants";

export function calculate(data){
    const { firstOperand, operator, secondOperand } = data;


    return operator ? CALCULATE[operator](firstOperand, secondOperand) : firstOperand;
}

export function formatNumber(operand, digit){
    if (!operand) return digit;
    return operand + digit;

}