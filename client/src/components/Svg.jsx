const svgObject = {
  arrow: 'M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z',
};

export default function Svg({
  variant,
  size = '24px',
  color = 'currentColor',
}) {
  return (
    <svg style={{ height: size, width: size }} viewBox="0 0 24 24" fill={color}>
      <g>
        <path d={svgObject[variant]} />
      </g>
    </svg>
  );
}
