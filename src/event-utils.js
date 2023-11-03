
let eventGuid = 0

export const INITIAL_EVENTS = [
  {
    "title": "إجتماع إدارة  التقنية مع الإدارة العامة للحقوق الخاصة",
    "start": "2023-11-02T09:30:00",
    "end": "2023-11-02T11:00:00",
    "id": 345,
    "backgroundColor": "white",
    "borderColor": "red",
    "url": "#",
    "classNames": ['classone', 'classtwo']
  },
  {
    "title": "إجتماع إدارة الحقوق",
    "start": "2023-11-02T06:30:00",
    "end": "2023-11-02T10:40:00",
    "id": 765,
    "backgroundColor": "white",
    "borderColor": "red",
    "url": "#",
    "classNames": ['classone', 'classtwo']
  },
  {
    "title": "إجتماع إدارة الموارد البشرية",
    "start": "2023-11-02T13:30:00",
    "end": "2023-11-02T15:00:00",
    "id": 9889,
    "backgroundColor": "white",
    "borderColor": "red",
    "url": "#",
    "classNames": ['classone', 'classtwo']
  },
  
]


export function createEventId() {
  return String(eventGuid++)
}
