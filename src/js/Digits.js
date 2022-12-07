function Digits(target, updateOperand){
    this.handleClick = (e) => {
        const button = e.target;
        updateOperand(button.textContent);
    }
    target.addEventListener('click', this.handleClick)
}

export default Digits;