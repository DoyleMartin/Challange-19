import StartButton from '../../src/components/StartButton';

describe('<StartButton />', () => {
  it('renders and fires click event', () => {
    const onClick = cy.stub().as('clickHandler');
    cy.mount(<StartButton onClick={onClick} />);
    cy.contains('Start Quiz').click();
    cy.get('@clickHandler').should('have.been.calledOnce');
  });
});
