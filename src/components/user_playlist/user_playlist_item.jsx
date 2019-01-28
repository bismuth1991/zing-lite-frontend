import React from 'react';
import { string, func, arrayOf, number } from 'prop-types';

const UserPlaylistItem = (props) => {
  const { name, coverImageUrl, handlePlay, songIds } = props;

  return (
    <div>
      <figure>
        <img
          src={coverImageUrl}
          alt={name}
        />

        <button type="button" onClick={handlePlay(songIds)}>
          <i className="far fa-play-circle fade" />
        </button>
      </figure>

      <h5>{name}</h5>
    </div>
  );
};

UserPlaylistItem.propTypes = {
  name: string.isRequired,
  coverImageUrl: string.isRequired,
  handlePlay: func.isRequired,
  songIds: arrayOf(number).isRequired,
};

export default UserPlaylistItem;
