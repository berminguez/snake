export default function ScoreDisplay({ score }) {
  function pad(num, size) {
    num = num.toString();
    while (num.length < size) num = '0' + num;
    return num;
  }

  let scoredisplayed = pad(score, 4);

  return (
    <div className='self-end '>
      <span className='font-sans text-xl font-medium uppercase text-customwhite'>
        Score: {scoredisplayed}
      </span>
    </div>
  );
}
