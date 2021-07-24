export default function Square({ widthsquare, type }) {
  return (
    <div
      className={
        type === 'apple'
          ? 'bg-apple border-2'
          : type === 'snake'
          ? 'bg-primary border-2'
          : 'bg-boardbg border-2'
      }
      style={{
        width: widthsquare + 'px',
        height: widthsquare + 'px',
      }}
    ></div>
  );
}
