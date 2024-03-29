import { px } from '@mantine/core'
import { IconProps } from '@/components/Icons'

export default function ArrowDown({ size = 24, style, ...others }: IconProps) {
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
        <clipPath id="clip483_297">
          <rect
            id="Bold / Arrows / Round Alt Arrow Down"
            width="24.000000"
            height="24.000000"
            fill="white"
            fillOpacity="0"
          />
        </clipPath>
      </defs>
      <g clipPath="url(#clip483_297)">
        <path
          id="Vector"
          d="M12 22C17.52 22 22 17.52 22 12C22 6.47 17.52 2 12 2C6.47 2 2 6.47 2 12C2 17.52 6.47 22 12 22ZM15.53 9.96C15.82 10.26 15.82 10.73 15.53 11.03L12.53 14.03C12.38 14.17 12.19 14.25 12 14.25C11.8 14.25 11.61 14.17 11.46 14.03L8.46 11.03C8.17 10.73 8.17 10.26 8.46 9.96C8.76 9.67 9.23 9.67 9.53 9.96L12 12.43L14.46 9.96C14.76 9.67 15.23 9.67 15.53 9.96Z"
          fill="#FFFFFF"
          fillOpacity="1.000000"
          fillRule="evenodd"
        />
      </g>
    </svg>
  )
}
