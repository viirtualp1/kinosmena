import { px } from '@mantine/core'
import { IconProps } from './index.ts'

export default function CloseIcon({ size = 24, style, ...others }: IconProps) {
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
        <clipPath id="clip472_483">
          <rect
            id="Bold / Essentional, UI / Close Circle"
            width="24"
            height="24"
            fillOpacity="0"
          />
        </clipPath>
      </defs>
      <g clipPath="url(#clip472_483)">
        <path
          id="Vector"
          d="M22 12C22 17.52 17.52 22 12 22C6.47 22 2 17.52 2 12C2 6.47 6.47 2 12 2C17.52 2 22 6.47 22 12ZM8.96 8.96C9.26 8.67 9.73 8.67 10.03 8.96L11.99 10.93L13.96 8.96C14.26 8.67 14.73 8.67 15.03 8.96C15.32 9.26 15.32 9.73 15.03 10.03L13.06 12L15.03 13.96C15.32 14.26 15.32 14.73 15.03 15.03C14.73 15.32 14.26 15.32 13.96 15.03L11.99 13.06L10.03 15.03C9.73 15.32 9.26 15.32 8.96 15.03C8.67 14.73 8.67 14.26 8.96 13.96L10.93 12L8.96 10.03C8.67 9.73 8.67 9.26 8.96 8.96Z"
          fillOpacity="1.000000"
          fillRule="evenodd"
        />
      </g>
    </svg>
  )
}
