import { px } from '@mantine/core'
import { IconProps } from './index.ts'

export default function ProjectIcon({
  size = 20,
  style,
  ...others
}: IconProps) {
  return (
    <svg
      width="20.000000"
      height="20.000000"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      style={{ width: px(size), height: px(size), ...style }}
      {...others}
    >
      <path
        id="Vector"
        d="M10 20C15.52 20 20 15.52 20 10C20 4.47 15.52 0 10 0C4.47 0 0 4.47 0 10C0 15.52 4.47 20 10 20ZM10.75 7C10.75 6.58 10.41 6.25 10 6.25C9.58 6.25 9.25 6.58 9.25 7L9.25 9.25L7 9.25C6.58 9.25 6.25 9.58 6.25 10C6.25 10.41 6.58 10.75 7 10.75L9.25 10.75L9.25 13C9.25 13.41 9.58 13.75 10 13.75C10.41 13.75 10.75 13.41 10.75 13L10.75 10.75L13 10.75C13.41 10.75 13.75 10.41 13.75 10C13.75 9.58 13.41 9.25 13 9.25L10.75 9.25L10.75 7Z"
        fillOpacity="1.000000"
        fillRule="evenodd"
      />
    </svg>
  )
}
