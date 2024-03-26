import { http } from '@/hooks/useAxios'
import { ShiftData } from '@/types/Shift'

export function getShiftData(id: string): Promise<ShiftData | null> {
  return http.get(`/shifts/${id}`)
}
