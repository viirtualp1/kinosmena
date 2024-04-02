import { px } from '@mantine/core'
import { IconProps } from './index.ts'

export default function ArrowIcon({ size = 24, style, ...others }: IconProps) {
  return (
    <svg
      width="24.000000"
      height="24.000000"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      style={{ width: px(size), height: px(size), ...style }}
      {...others}
    >
      <defs>
        <clipPath id="clip506_295">
          <rect
            id="Bold / Arrows / Round Alt Arrow Right"
            width="24.000000"
            height="24.000000"
            fill="white"
            fillOpacity="0"
          />
        </clipPath>
      </defs>
      <g clipPath="url(#clip506_295)">
        <path
          id="Vector"
          d="M12 22C17.52 22 22 17.52 22 12C22 6.47 17.52 2 12 2C6.47 2 2 6.47 2 12C2 17.52 6.47 22 12 22ZM9.96 8.46C10.26 8.17 10.73 8.17 11.03 8.46L14.03 11.46C14.32 11.76 14.32 12.23 14.03 12.53L11.03 15.53C10.73 15.82 10.26 15.82 9.96 15.53C9.67 15.23 9.67 14.76 9.96 14.46L12.43 12L9.96 9.53C9.67 9.23 9.67 8.76 9.96 8.46Z"
          fill="#FFFFFF"
          fillOpacity="1.000000"
          fillRule="evenodd"
        />
      </g>
    </svg>
  )
}
