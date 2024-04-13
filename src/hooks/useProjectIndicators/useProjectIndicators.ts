import { useRef } from 'react'
import { IndicatorData } from '@/types/Project'

export function useProjectIndicators() {
  return useRef<IndicatorData[]>([
    {
      label: 'Продолжительность смены *',
      value: null,
    },
    {
      label: 'Шаг смены',
      value: null,
    },
    {
      label: 'Стоимость смены *',
      value: null,
    },
    {
      label: 'Стоимость переработки (час)',
      value: null,
    },
    {
      label: 'Стоимость недосыпа (час)',
      value: null,
    },
    {
      label: 'Стоимость текущего обеда',
      value: null,
    },
    {
      label: 'Стоимость позднего обеда',
      value: null,
    },
    {
      label: 'Суточные',
      value: null,
    },
    {
      label: 'Стоимость Day off (час)',
      value: null,
    },
  ])
}
