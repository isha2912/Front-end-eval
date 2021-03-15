import { render } from '@testing-library/react';
import React from 'react';
import Header from './Header';

describe(Header.name, () => {
  test('Should match snapshot', () => {
    const { container } = render(<Header />);
    expect(container).toMatchSnapshot();
  });
});
