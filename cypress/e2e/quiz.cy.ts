describe('Tech Quiz App', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should show the Start Quiz button on load', () => {
    cy.contains('Start Quiz').should('be.visible');
  });

  it('should start the quiz and show the first question', () => {
    cy.contains('Start Quiz').click();
    cy.contains(/Question 1/i).should('be.visible');
    cy.get('[data-cy="answer"]').should('exist');
  });

  it('should go to the next question after answering one', () => {
    cy.contains('Start Quiz').click();
    cy.get('[data-cy="answer"]').first().click();
    cy.contains(/Question 2/i).should('be.visible');
  });

  it('should complete the quiz and show the score', () => {
    cy.contains('Start Quiz').click();

    // Assume 5 questions in total
    for (let i = 1; i <= 5; i++) {
      cy.contains(`Question ${i}`).should('exist');
      cy.get('[data-cy="answer"]').first().click();
    }

    cy.contains('Quiz Complete').should('be.visible');
    cy.contains(/Your Score:/).should('be.visible');
  });

  it('should allow the user to start a new quiz after finishing', () => {
    cy.contains('Start Quiz').click();

    for (let i = 1; i <= 5; i++) {
      cy.get('[data-cy="answer"]').first().click();
    }

    cy.contains('Start New Quiz').click();
    cy.contains('Start Quiz').should('be.visible');
  });
});
