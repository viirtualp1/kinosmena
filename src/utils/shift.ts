import { ShiftData } from '@/types/Shift'

export const getPureShiftData = (): ShiftData => {
  return {
    project: '',
    user: null,
    start_date: null,
    end_date: null,
    shift_rate: null,
    overwork_hours: null,
    overwork_rate: null,
    non_sleep_hours: null,
    non_sleep_rate: null,
    is_current_lunch: false,
    current_lunch: null,
    is_late_lunch: false,
    late_lunch: null,
    is_per_diem: false,
    per_diem: null,
    total: null,
    is_today_day_off: false,
    is_yesterday_day_off: false,
    day_off: true,
    services: null,
  }
}
