export default function MobileController() {
  const handleClick = (key, keyCode) => {
    console.log('clocied');

    let evt = new KeyboardEvent('keydown', {
      shiftKey: false,
      key: key,
      keyCode: keyCode,
    });
    document.dispatchEvent(evt);
  };

  return (
    <div className='font-sans text-customwhite inline-flex md:hidden pb-8'>
      <div className='flex flex-col gap-2 items-center justify-center mx-auto'>
        <div>
          <a
            onClick={(e) => {
              e.preventDefault();
              handleClick('ArrowUp', 38);
            }}
          >
            <img src='/toparrow.svg'></img>
          </a>
        </div>
        <div className='flex gap-2 items-center justify-center'>
          <a
            onClick={(e) => {
              e.preventDefault();
              handleClick('ArrowLeft', 37);
            }}
          >
            <img src='/leftarrow.svg'></img>
          </a>{' '}
          <a
            onClick={(e) => {
              e.preventDefault();
              handleClick('ArrowDown', 40);
            }}
          >
            <img src='/downarrow.svg'></img>
          </a>{' '}
          <a
            onClick={(e) => {
              e.preventDefault();
              handleClick('ArrowRight', 39);
            }}
          >
            <img src='/rightarrow.svg'></img>
          </a>
        </div>
      </div>
    </div>
  );
}
