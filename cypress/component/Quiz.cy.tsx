import Quiz from '../../client/src/components/Quiz';
import React from 'react';

const mockQuestions = [
  {
    question: 'What is 2 + 2?',
    answers: [
      { text: '3', isCorrect: false },
      { text: '4', isCorrect: true },
    ],
  },
  {
    question: 'What is the capital of France?',
    answers: [
      { text: 'Berlin', isCorrect: false },
      { text: 'Paris', isCorrect: true },
    ],
  },
];

describe('<Quiz />', () => {
  beforeEach(() => {
    // Stub the getQuestions API call
    return import('../../client/src/services/questionApi').then((module) => {
      cy.stub(module, 'getQuestions').resolves(mockQuestions);
    });
  });

  it('renders the Start Quiz button initially', () => {
    cy.mount(<Quiz />);
    cy.contains('Start Quiz').should('exist');
  });

  it('starts the quiz and shows first question on button click', () => {
    cy.mount(<Quiz />);
    cy.contains('Start Quiz').click();
    cy.contains(mockQuestions[0].question).should('exist');
  });

  it('advances to next question when answering', () => {
    cy.mount(<Quiz />);
    cy.contains('Start Quiz').click();
    cy.contains('What is 2 + 2?');
    cy.contains('4').click(); // Correct answer
    cy.contains('What is the capital of France?').should('exist');
  });

  it('shows score after completing quiz', () => {
    cy.mount(<Quiz />);
    cy.contains('Start Quiz').click();
    cy.contains('4').click();      // Correct
    cy.contains('Paris').click();  // Correct
    cy.contains('Quiz Completed').should('exist');
    cy.contains('Your score: 2/2');
  });

  it('restarts quiz on button click', () => {
    cy.mount(<Quiz />);
    cy.contains('Start Quiz').click();
    cy.contains('4').click();
    cy.contains('Paris').click();
    cy.contains('Take New Quiz').click();
    cy.contains('What is 2 + 2?').should('exist'); // Quiz restarts
  });
});
