import { useState } from 'react';
export default function GameModeItem({ item, mode, setmode }) {
  var myclasses = '';
  if (mode === item.slug) {
    var myclasses = 'text-primary uppercase font-sans font-normal text-lg';
  } else {
    var myclasses = 'text-customwhite uppercase font-sans font-normal text-lg';
  }
  return (
    <a
      className={myclasses}
      href='#'
      onClick={() => {
        setmode(item.slug);
      }}
    >
      {item.name}
    </a>
  );
}
