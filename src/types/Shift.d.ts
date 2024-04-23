export interface ShiftData {
  id?: number
  project: string
  user: number | null
  start_date: string | null
  end_date: string | null
  shift_rate: number | null
  overwork_hours: number | null
  overwork_rate: number | null
  non_sleep_hours: number | null
  non_sleep_rate: number | null
  is_current_lunch: boolean
  current_lunch: number | null
  is_late_lunch: boolean
  late_lunch: number | null
  is_per_diem: boolean
  per_diem: number | null
  total: number | null
  is_today_day_off: boolean
  is_yesterday_day_off: boolean
  day_off: boolean
  services: number | null
}
