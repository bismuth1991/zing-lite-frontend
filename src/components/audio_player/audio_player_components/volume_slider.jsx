import React from 'react';
import { number, func } from 'prop-types';

const VolumeSlider = (props) => {
  const {
    volume, preMuteVolume, handleMute, handleUnmute, handleVolume,
  } = props;

  let volumeButton;
  if (volume === 0) {
    volumeButton = (
      <button type="button" className="volume-button" onClick={handleUnmute(preMuteVolume)}>
        <i className="fas fa-volume-mute" />
      </button>
    );
  } else {
    volumeButton = (
      <button type="button" className="volume-button" onClick={handleMute}>
        <i className="fas fa-volume-up active" />
      </button>
    );
  }

  return (
    <>
      {volumeButton}

      {/* <input
        type="range"
        min="0"
        max="100"
        step="1"
        value={volume}
        onChange={handleVolume}
      /> */}
    </>
  );
};

VolumeSlider.propTypes = {
  volume: number.isRequired,
  preMuteVolume: number.isRequired,
  handleMute: func.isRequired,
  handleUnmute: func.isRequired,
  handleVolume: func.isRequired,
};

export default VolumeSlider;