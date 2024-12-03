export interface CalendarEvent {
  id?: number;
  routeId: number;
  title: string;
  startDate: string;
  startTime: string;
  description?: string;
  meetingPoint?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface EventFormData {
  routeId: number;
  title: string;
  startDate: string;
  startTime: string;
  description: string;
  meetingPoint: string;
}