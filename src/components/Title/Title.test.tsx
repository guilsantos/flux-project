import React from 'react';
import { render } from '@testing-library/react';
import Title from './Title';

test('renders Title', () => {
  const testText = "Test text"

  const { getByText } = render(<Title>{testText}</Title>)

  const renderedText = getByText(testText)

  expect(renderedText).toBeInTheDocument()
});
