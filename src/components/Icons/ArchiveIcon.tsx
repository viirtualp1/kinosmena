import { px } from '@mantine/core'
import { IconProps } from './index.ts'

export default function BookmarkIcon({
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
        id="Subtract"
        d="M0 10C0 5.28 0 2.92 1.46 1.46C2.92 0 5.28 0 10 0C14.71 0 17.07 0 18.53 1.46C20 2.92 20 5.28 20 10C20 14.71 20 17.07 18.53 18.53C17.07 20 14.71 20 10 20C5.28 20 2.92 20 1.46 18.53C0 17.07 0 14.71 0 10ZM3 6.49L3 5.5C3 4.67 3.67 4 4.5 4L15.5 4C16.32 4 17 4.67 17 5.5L17 6.49C16.58 6.18 16.06 6 15.5 6L4.5 6C3.93 6 3.41 6.18 3 6.49ZM3 8.5L3 9.49C3.41 9.18 3.93 9 4.5 9L15.5 9C16.06 9 16.58 9.18 17 9.49L17 8.5C17 7.67 16.32 7 15.5 7L4.5 7C3.67 7 3 7.67 3 8.5ZM18 12.25C18.41 12.25 18.75 12.58 18.75 13C18.75 13.41 18.41 13.75 18 13.75L15.65 13.75C14.77 13.75 14.54 13.76 14.35 13.84C14.15 13.92 13.98 14.08 13.35 14.7L13.05 15C12.62 15.43 12.28 15.78 11.84 15.98C11.76 16.02 11.68 16.05 11.59 16.08C11.14 16.25 10.66 16.25 10.05 16.25L9.94 16.25L9.83 16.25C9.18 16.25 8.67 16.25 8.2 16.07C8.11 16.03 8.02 16 7.94 15.95C7.49 15.73 7.14 15.35 6.7 14.87L6.59 14.75C6 14.11 5.84 13.95 5.65 13.86C5.63 13.85 5.61 13.85 5.59 13.84C5.39 13.76 5.17 13.75 4.3 13.75L2 13.75C1.58 13.75 1.25 13.41 1.25 13C1.25 12.58 1.58 12.25 2 12.25L3.02 12.25L3.02 11.25C3.13 10.54 3.75 10 4.49 10L15.49 10C16.24 10 16.86 10.54 16.97 11.25L16.97 12.25L18 12.25Z"
        fillOpacity="1.000000"
        fillRule="evenodd"
      />
    </svg>
  )
}
