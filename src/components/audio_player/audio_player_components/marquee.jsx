import React from 'react';
import { string } from 'prop-types';

const Marquee = (props) => {
  const { title, artist, artistAvatar } = props;

  return (
    <div className="Marquee">
      <p>
        <img
          src={artistAvatar}
          alt={artist}
        />
        <span>{`${title} - ${artist}`}</span>
      </p>
    </div>
  );
};

Marquee.propTypes = {
  title: string.isRequired,
  artist: string.isRequired,
  artistAvatar: string.isRequired,
};

export default Marquee;
