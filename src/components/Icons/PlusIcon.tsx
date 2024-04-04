import { px } from '@mantine/core'
import { IconProps } from './index.ts'

export default function PlusIcon({ size, style, ...others }: IconProps) {
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
        <clipPath id="clip472_499">
          <rect
            id="Bold / Essentional, UI / Add Circle"
            width="24.000000"
            height="24.000000"
            fillOpacity="0"
          />
        </clipPath>
      </defs>
      <g clipPath="url(#clip472_499)">
        <path
          id="Vector"
          d="M12 22C17.52 22 22 17.52 22 12C22 6.47 17.52 2 12 2C6.47 2 2 6.47 2 12C2 17.52 6.47 22 12 22ZM12.75 9C12.75 8.58 12.41 8.25 12 8.25C11.58 8.25 11.25 8.58 11.25 9L11.25 11.25L9 11.25C8.58 11.25 8.25 11.58 8.25 12C8.25 12.41 8.58 12.75 9 12.75L11.25 12.75L11.25 15C11.25 15.41 11.58 15.75 12 15.75C12.41 15.75 12.75 15.41 12.75 15L12.75 12.75L15 12.75C15.41 12.75 15.75 12.41 15.75 12C15.75 11.58 15.41 11.25 15 11.25L12.75 11.25L12.75 9Z"
          fillOpacity="1.000000"
          fillRule="evenodd"
        />
      </g>
    </svg>
  )
}
