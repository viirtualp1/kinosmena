import { useState } from 'react'
import { IndicatorData } from '@/types/Project'

export function useProjectIndicators() {
  const [indicators, setIndicators] = useState<IndicatorData[]>([
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

  const updateIndicatorValue = (field: string, newValue: number) => {
    setIndicators((prevIndicators) => {
      return prevIndicators.map((indicator) => {
        if (indicator.field === field) {
          return {
            ...indicator,
            value: newValue,
          }
        }

        return indicator
      })
    })
  }

  return {
    indicators,
    updateIndicatorValue,
  }
}
