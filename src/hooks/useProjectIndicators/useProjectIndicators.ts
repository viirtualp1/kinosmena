import { useRef } from 'react'
import { IndicatorData } from '@/types/Project'

export function useProjectIndicators() {
  return useRef<IndicatorData[]>([
    {
      label: 'Продолжительность смены *',
      field: 'shift_duration',
      value: null,
    },
    {
      label: 'Шаг смены',
      field: 'rest_duration',
      value: null,
    },
    {
      label: 'Стоимость смены *',
      field: 'shift_rate',
      value: null,
    },
    {
      label: 'Стоимость переработки (час)',
      field: 'overtime_rate',
      value: null,
    },
    {
      label: 'Стоимость недосыпа (час)',
      field: 'non_sleep_rate',
      value: null,
    },
    {
      label: 'Стоимость текущего обеда',
      field: 'current_lunch_rate',
      value: null,
    },
    {
      label: 'Стоимость позднего обеда',
      field: 'late_lunch_rate',
      value: null,
    },
    {
      label: 'Суточные',
      field: 'per_diem',
      value: null,
    },
  ])
}
