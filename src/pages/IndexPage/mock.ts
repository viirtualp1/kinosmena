import { ProjectData } from '@/types/Project'

export function getProjects(): ProjectData[] {
  return [
    {
      id: 0,
      name: 'Тестовый проект 1',
      description: 'Описание тестового проекта 1',
      start_date: '2024-03-28T12:06:51.235Z',
      end_date: '2024-03-28T12:06:51.235Z',
      shift_duration: 10,
      rest_duration: 20,
      shift_rate: 2,
      overtime_rate: 10,
      non_sleep_rate: 30,
      current_lunch_rate: 40,
      late_lunch_rate: 5,
      per_diem: 7,
      day_off_rate: 8,
      is_archive: true,
      created: '2024-03-28T12:06:51.235Z',
      user: 0,
      shifts: [
        {
          id: 0,
          start_date: '2024-03-28T12:06:51.235Z',
          end_date: '2024-03-28T12:06:51.235Z',
          is_active: true,
        },
      ],
    },
    {
      id: 1,
      name: 'Тестовый проект 2',
      description: 'Описание тестового проекта 2',
      start_date: '2024-03-28T12:06:51.235Z',
      end_date: '2024-03-28T12:06:51.235Z',
      shift_duration: 10,
      rest_duration: 20,
      shift_rate: 2,
      overtime_rate: 10,
      non_sleep_rate: 30,
      current_lunch_rate: 40,
      late_lunch_rate: 5,
      per_diem: 7,
      day_off_rate: 8,
      is_archive: true,
      created: '2024-03-28T12:06:51.235Z',
      user: 0,
      shifts: [
        {
          id: 0,
          start_date: '2024-03-28T12:06:51.235Z',
          end_date: '2024-03-28T12:06:51.235Z',
          is_active: true,
        },
      ],
    },
  ]
}
