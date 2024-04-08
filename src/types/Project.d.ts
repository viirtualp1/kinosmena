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

interface BlockData {
  label: string
  value: number | null
}
