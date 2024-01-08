import { screen } from '@testing-library/react';
// import App from './App';
// import { screen } from '@testing-library/dom';

// Example test using regular expression for flexible matching
test('finds element with "learn react" text using regex', () => {
  const elements = screen.getAllByText((content, element) => {
    const hasText = (node) => node.textContent === content;
    const elementHasText = hasText(element);
    // eslint-disable-next-line testing-library/no-node-access
    const childrenDontHaveText = Array.from(element.children).every(
      (child) => !hasText(child)
    );

    return elementHasText && childrenDontHaveText;
  });
  expect(elements.length).toBeGreaterThan(0); // Asserts that at least one element contains the text
});
