import { useRef, type FC } from 'react'
import { Link } from 'react-router-dom'

import './IndexPage.scss'

export const IndexPage: FC = () => {
  const testId = useRef(0)

  return (
    <div>
      <Link to={`/shift/${testId}`}>Shift Page</Link>
    </div>
  )
}
