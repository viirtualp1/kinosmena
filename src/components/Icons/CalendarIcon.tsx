import { IconProps } from '@/components/Icons/types'
import { px } from '@mantine/core'

export default function CalendarIcon({
  size = 20,
  style,
  ...others
}: IconProps) {
  return (
    <svg
      width="23.000000"
      height="23.000000"
      viewBox="0 0 23 23"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      style={{ width: px(size), height: px(size), ...style }}
      {...others}
    >
      <defs>
        <clipPath id="clip568_673">
          <rect
            id="Bold / Time / Calendar Minimalistic"
            rx="5.000000"
            width="23.000000"
            height="23.000000"
            transform="translate(-0.500000 0.000000)"
            fillOpacity="0"
          />
        </clipPath>
      </defs>
      <g clipPath="url(#clip568_673)">
        <path
          id="Vector"
          d="M6.2 1.67C6.6 1.67 6.92 1.99 6.92 2.39L6.92 3.84C7.56 3.83 8.27 3.83 9.08 3.83L12.91 3.83C13.72 3.83 14.43 3.83 15.07 3.84L15.07 2.39C15.07 1.99 15.39 1.67 15.79 1.67C16.18 1.67 16.51 1.99 16.51 2.39L16.51 3.9C17.88 4.01 18.79 4.29 19.46 4.95C20.12 5.62 20.39 6.52 20.5 7.9L1.49 7.9C1.6 6.52 1.87 5.62 2.53 4.95C3.2 4.29 4.11 4.01 5.48 3.9L5.48 2.39C5.48 1.99 5.81 1.67 6.2 1.67ZM20.58 11.5L20.58 13.41C20.58 17.03 20.58 18.83 19.46 19.96C18.33 21.08 16.53 21.08 12.91 21.08L9.08 21.08C5.46 21.08 3.66 21.08 2.53 19.96C1.41 18.83 1.41 17.03 1.41 13.41L1.41 11.5C1.41 10.69 1.41 9.98 1.42 9.34L20.57 9.34C20.58 9.98 20.58 10.69 20.58 11.5Z"
          fillOpacity="1.000000"
          fillRule="evenodd"
        />
      </g>
    </svg>
  )
}
