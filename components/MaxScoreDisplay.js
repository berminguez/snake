export default function MaxScoreDisplay({ maxscore }) {
  return (
    <div className=''>
      <span className='font-sans text-md font-medium uppercase text-customwhite'>
        Max Score: {maxscore}
      </span>
    </div>
  );
}
