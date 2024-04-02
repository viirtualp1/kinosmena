export interface ShiftData {
  id: number
  project: string
  user: number
  start_date: string
  end_date: string | null
  shift_rate: number
  overwork_hours: number
  overwork_rate: number
  non_sleep_hours: number
  non_sleep_rate: number
  is_current_lunch: boolean
  current_lunch: number
  is_late_lunch: boolean
  late_lunch: number
  is_per_diem: boolean
  per_diem: number
  total: number
  is_day_off: boolean
  day_off: boolean
  services: number | null
}
