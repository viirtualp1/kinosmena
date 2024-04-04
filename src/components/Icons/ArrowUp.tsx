import { px } from '@mantine/core'
import { IconProps } from '@/components/Icons'

export default function ArrowUp({ size = 24, style, ...others }: IconProps) {
  return (
    <svg
      width="24.000000"
      height="24.000000"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      style={{ width: px(size), height: px(size), ...style }}
      {...others}
    >
      <defs>
        <clipPath id="clip483_306">
          <rect
            id="Bold / Arrows / Round Alt Arrow Up"
            width="24.000000"
            height="24.000000"
            transform="translate(0.000000 -0.500000)"
            fillOpacity="0"
          />
        </clipPath>
      </defs>
      <g clipPath="url(#clip483_306)">
        <path
          id="Vector"
          d="M12 21.5C17.52 21.5 22 17.02 22 11.5C22 5.97 17.52 1.5 12 1.5C6.47 1.5 2 5.97 2 11.5C2 17.02 6.47 21.5 12 21.5ZM12 9.25C12.19 9.25 12.38 9.32 12.53 9.46L15.53 12.46C15.82 12.76 15.82 13.23 15.53 13.53C15.23 13.82 14.76 13.82 14.46 13.53L12 11.06L9.53 13.53C9.23 13.82 8.76 13.82 8.46 13.53C8.17 13.23 8.17 12.76 8.46 12.46L11.46 9.46C11.61 9.32 11.8 9.25 12 9.25Z"
          fillOpacity="1.000000"
          fillRule="evenodd"
        />
      </g>
    </svg>
  )
}
