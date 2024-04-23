import { DateValue } from '@mantine/dates'

export interface ShiftShortData {
  id: number
  start_date: string
  end_date: string | null
  is_active: boolean
}

export interface ProjectData {
  id: number
  name: string
  description: string
  start_date: string
  end_date: string
  shift_duration: number
  rest_duration: number
  shift_rate: number
  overtime_rate: number
  non_sleep_rate: number
  current_lunch_rate: number
  late_lunch_rate: number
  per_diem: number
  day_off_rate: number
  is_archive: boolean
  created: string
  user: number
  shifts: ShiftShortData[]
}

interface IndicatorData {
  label: string
  field: string
  value: number | null
}

export interface FormValues {
  name: string
  description: string
  start_date: DateValue | undefined
  end_date: DateValue | undefined
  shift_duration: number | null
  rest_duration: number | null
  shift_rate: number | null
  overtime_rate: number | null
  non_sleep_rate: number | null
  current_lunch_rate: number | null
  late_lunch_rate: number | null
  per_diem: number | null
}
