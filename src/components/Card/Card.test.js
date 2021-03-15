/* eslint-disable react/jsx-props-no-spreading */
import { render } from '@testing-library/react';
import React from 'react';
import Card from './Card';

describe(Card.name, () => {
  const mockSong = {
    eachSong: {
      name: 'yariyan',
      artist: {
        name: 'Arijit singh',
      },
      albumArtUrl: 'url',
      id: '9',
    },
  };
  test('Should match snapshot', () => {
    const { container } = render(<Card {...mockSong} />);
    expect(container).toMatchSnapshot();
  });
});
