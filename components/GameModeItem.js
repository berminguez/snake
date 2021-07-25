export default function GameModeItem({ item, gameMode, setGameMode }) {
  var myclasses = '';
  if (gameMode === item.slug) {
    var myclasses = 'text-primary uppercase font-sans font-normal text-lg';
  } else {
    var myclasses = 'text-customwhite uppercase font-sans font-normal text-lg';
  }

  return (
    <a
      className={myclasses}
      href='#'
      onClick={() => {
        setGameMode(item.slug);
      }}
    >
      {item.name}
    </a>
  );
}
