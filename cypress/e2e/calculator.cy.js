describe('calculator', ()=>{
    beforeEach(() => {
        cy.visit('http://localhost:8080');
    })

    const handleNumberClick = (num) => String(num).split('').map((n) => {
        cy.get('.digit').contains(n).click();
    });
    const handleOperationClick = (Operator) => cy.get('.operation').contains(Operator).click();

    it('2개의 숫자에 대해서 덧셈 가능', () => {
        handleNumberClick(2);
        handleOperationClick('+');
        handleNumberClick(6);
        handleOperationClick('=');
        cy.get("#total").should('have.text', 8);
    });

    it('2개의 숫자(두자리 수 이상)의 숫자에 대해서 덧셈 가능', () => {
        handleNumberClick(900);
        handleOperationClick('+');
        handleNumberClick(901);
        handleOperationClick('=');
        cy.get("#total").should('have.text', 1801);
    });

    it('2개의 숫자에 대해서 뺄셈 가능', () => {
        handleNumberClick(10);
        handleOperationClick('-');
        handleNumberClick(6);
        handleOperationClick('=');
        cy.get("#total").should('have.text', 4);
    });

    it('2개의 숫자에 대해서 곱셈 가능', () => {
        handleNumberClick(10);
        handleOperationClick('X');
        handleNumberClick(6);
        handleOperationClick('=');
        cy.get("#total").should('have.text', 60);
    });

    it('2개의 숫자에 대해서 나눗셈 가능', () => {
        handleNumberClick(400);
        handleOperationClick('/');
        handleNumberClick(5);
        handleOperationClick('=');
        cy.get("#total").should('have.text', 80);
    });
})