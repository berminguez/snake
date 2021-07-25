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
    <div className='font-sans text-customwhite inline-flex md:hidden py-12'>
      <div className='flex flex-col gap-2 items-center justify-center mx-auto'>
        <div>
          <a
            href='#'
            onClick={() => {
              handleClick('ArrowUp', 38);
            }}
          >
            <img src='/toparrow.svg'></img>
          </a>
        </div>
        <div className='flex gap-2 items-center justify-center'>
          <a
            href='#'
            onClick={() => {
              handleClick('ArrowLeft', 37);
            }}
          >
            <img src='/leftarrow.svg'></img>
          </a>{' '}
          <a
            href='#'
            onClick={() => {
              handleClick('ArrowDown', 40);
            }}
          >
            <img src='/downarrow.svg'></img>
          </a>{' '}
          <a
            href='#'
            onClick={() => {
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
