interface IFavoriteSVGProps {
  fill?: string;
  stroke?: string;
  onClick?: (event: any) => void;
}

export function FavoriteIcon({
  fill = 'none',
  stroke = '#313037',
  onClick
}: IFavoriteSVGProps) {
  return (
    <svg
      onClick={onClick}
      width="25px"
      viewBox="0 0 32.00 32.00"
      enableBackground="new 0 0 32 32"
      version="1.1"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      stroke={stroke}
    >
      <path
        d="M29.5,4.5C27.8,2.3,25.3,1,22.7,1c-2.6,0-5.1,1.3-6.7,3.5C14.4,2.3,11.9,1,9.3,1C6.7,1,4.2,2.3,2.5,4.5 c-1.9,2.6-2,6.4-0.3,9.3c0,0,0,0.1,0.1,0.1l12.9,16.6c0.2,0.3,0.5,0.4,0.8,0.4s0.6-0.1,0.8-0.4L29.7,14c0,0,0-0.1,0.1-0.1 C31.5,11,31.4,7.1,29.5,4.5z"
        fill={fill}
      ></path>
    </svg>
  );
}
