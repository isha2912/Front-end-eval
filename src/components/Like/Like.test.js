import { render } from '@testing-library/react';
import React from 'react';
import Like from './Like';

describe(Like.name, () => {
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
  test('Should match screenshot', () => {
    // eslint-disable-next-line react/jsx-props-no-spreading
    const { container } = render(<Like {...mockSong} />);
    expect(container).toMatchSnapshot();
  });
});
