const Spinner = () => {
  return (
    <>
      <div className='fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-300 opacity-75 flex flex-col items-center justify-center'>
        <div className='loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-16 w-16 mb-4'></div>
      </div>
      <style jsx>
        {`
          .loader {
            border-top-color: #138a14;
            -webkit-animation: spinner 1.5s linear infinite;
            animation: spinner 1.5s linear infinite;
          }

          @-webkit-keyframes spinner {
            0% {
              -webkit-transform: rotate(0deg);
            }
            100% {
              -webkit-transform: rotate(360deg);
            }
          }

          @keyframes spinner {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
    </>
  );
};
export default Spinner;
