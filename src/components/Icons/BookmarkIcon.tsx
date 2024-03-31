import { px } from '@mantine/core'
import { IconProps } from './index.ts'

export default function BookmarkIcon({
  size = 20,
  style,
  ...others
}: IconProps) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      style={{ width: px(size), height: px(size), ...style }}
      {...others}
    >
      <path
        d="M10 20C15.52 20 20 15.52 20 10C20 4.47 15.52 0 10 0C4.47 0 0 4.47 0 10C0 15.52 4.47 20 10 20ZM14 12.04L14 9.54C14 7.4 14 6.33 13.41 5.66C12.82 5 11.88 5 10 5C8.11 5 7.17 5 6.58 5.66C6 6.33 6 7.4 6 9.54L6 12.04C6 13.59 6 14.36 6.32 14.7C6.48 14.86 6.67 14.96 6.88 14.99C7.32 15.05 7.83 14.54 8.86 13.52C9.31 13.07 9.54 12.84 9.8 12.78C9.93 12.75 10.06 12.75 10.19 12.78C10.45 12.84 10.68 13.07 11.13 13.52C12.16 14.54 12.67 15.05 13.11 14.99C13.32 14.96 13.51 14.86 13.67 14.7C14 14.36 14 13.59 14 12.04Z"
        fillOpacity="1.000000"
        fillRule="evenodd"
      />
    </svg>
  )
}
