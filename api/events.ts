import { NowRequest, NowResponse } from '@now/node'
import { google } from 'googleapis'

// TODO: Typescript
const calendarApi = google.calendar({
  version: 'v3',
  auth: process.env.CALENDAR_API_KEY
})

export default async (req: NowRequest, res: NowResponse) => {
  const calEvents = await calendarApi.events.list({
    calendarId: '4495prpbmo0fkka5eirvgp5ovg@group.calendar.google.com',
    timeMin: (new Date()).toISOString(),
    showDeleted: false,
    singleEvents: true,
    maxResults: 15,
    orderBy: 'startTime'
  })

  res.json({
    events: calEvents.data.items
  })
}