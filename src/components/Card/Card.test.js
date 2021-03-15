/* eslint-disable react/jsx-props-no-spreading */
import { render, screen } from '@testing-library/react';
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
    index: 1,
  };
  test('Should match snapshot', () => {
    const { container } = render(<Card {...mockSong} />);
    expect(container).toMatchSnapshot();
  });
  test('Should display song names', () => {
    render(<Card {...mockSong} />);
    screen.getByText('yariyan');
  });

  test('should display artist', () => {
    render(<Card {...mockSong} />);
    screen.getByText('Arijit singh');
  });
});
