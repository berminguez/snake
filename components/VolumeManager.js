import React from 'react';
import { FiVolume2, FiVolumeX } from 'react-icons/fi';
export default function VolumeManager({ volume, setvolume }) {
  var iconvolume = '';

  if (volume > 0) {
    iconvolume = <FiVolume2 className='' size={25} />;
  } else {
    iconvolume = <FiVolumeX className='' size={25} />;
  }

  const handleVolume = () => {
    if (volume > 0) {
      setvolume(0);
    } else {
      setvolume(100);
    }
  };

  return (
    <div className=''>
      <a href='#' onClick={handleVolume}>
        <span className='font-sans text-md font-medium uppercase text-customwhite'>
          {iconvolume}
        </span>
      </a>
    </div>
  );
}
