import { useState } from 'react'
import { IndicatorData } from '@/types/Project'

export function useProjectIndicators() {
  const [indicators, setIndicators] = useState<IndicatorData[]>([
    {
      label: 'Продолжительность смены *',
      field: 'shift_duration',
      value: null,
      symbol: 'ч',
    },
    {
      label: 'Шаг смены',
      field: 'rest_duration',
      value: null,
      symbol: 'ч',
    },
    {
      label: 'Стоимость смены *',
      field: 'shift_rate',
      value: null,
      symbol: '₽',
    },
    {
      label: 'Стоимость переработки (час)',
      field: 'overtime_rate',
      value: null,
      symbol: '₽',
    },
    {
      label: 'Стоимость недосыпа (час)',
      field: 'non_sleep_rate',
      value: null,
      symbol: '₽',
    },
    {
      label: 'Стоимость текущего обеда',
      field: 'current_lunch_rate',
      value: null,
      symbol: '₽',
    },
    {
      label: 'Стоимость позднего обеда',
      field: 'late_lunch_rate',
      value: null,
      symbol: '₽',
    },
    {
      label: 'Суточные',
      field: 'per_diem',
      value: null,
      symbol: '₽',
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
