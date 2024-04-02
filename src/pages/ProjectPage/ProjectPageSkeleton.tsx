import { Skeleton } from '@mantine/core'

export function ProjectPageSkeleton(props: { visible: boolean | undefined }) {
  return (
    <>
      {props.visible && (
        <>
          <Skeleton height={30} mt={6} />
          <Skeleton height={30} mt={6} />
          <Skeleton height={30} mt={6} width="40%" />
        </>
      )}
    </>
  )
}
