function Operations(target, setOperation) {
    this.handleClick = (e) => {
        const button = e.target;

        setOperation(button.textContent);
    }

    target.addEventListener('click', this.handleClick)
}

export default Operations;