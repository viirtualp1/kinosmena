import { useRef } from 'react'
// import { useParams } from 'react-router-dom'
import { Card, Title } from '@mantine/core'
// import { useFetch } from '@/hooks/useFetch'
// import { ShiftData } from '@/types/Shift'
import { ShiftForm } from '@/components/Shift'
// import { ShiftPageSkeleton } from './ShiftPageSkeleton'

import BookmarkIcon from '@/assets/images/icons/bookmark.svg'
import { useShiftPageStyles } from '@/pages/ShiftPage/useShiftPageStyles.ts'

export function ShiftPage() {
  // const { id } = useParams()
  const isCreating = useRef(true)

  // const { data: shift, isLoading } = useFetch<ShiftData | null>(`/shifts/${id}`)

  const { cardStyles } = useShiftPageStyles()

  return (
    <div className="shift-page">
      <div className="container content">
        <Title order={3} mb={24}>
          Карточка смены
        </Title>

        {/*<ShiftPageSkeleton visible={isLoading || !shift} />*/}
        {/*{shift && (*/}
        <>
          <Card
            className="shift-page__section"
            shadow="sm"
            padding="12px"
            radius="12px"
            styles={cardStyles}
            bg="#363A43"
            withBorder
            mb="24px"
          >
            <img src={BookmarkIcon} alt="bookmark" width={20} height={20} />
            Проект
            {/*{shift.project}*/}
          </Card>
          <ShiftForm isCreating={isCreating.current} />
        </>
        {/*)}*/}
      </div>
    </div>
  )
}
