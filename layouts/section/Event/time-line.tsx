import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import './vertical.css'
import EventData from '@/config/event-data.json'
import { CalendarClock, LocateIcon } from 'lucide-react'

const lineColor = '#6ea8d6'
const contentArrowStyle = {
  borderRight: 'none',
}

const iconStyle = {
  background: '#0a3c66',
  scale: '0.5',
  boxShadow: '0 0 0 6px #dff0ff',
}

interface EventItem {
  title: string
  location: string
  time: string
}

const eventItems: EventItem[] = EventData

export default function TimelineSection() {
  return (
    <VerticalTimeline lineColor={lineColor} animate={true}>
      {eventItems.map((item, index) => (
        <VerticalTimelineElement
          visible={true}
          key={index}
          className="vertical-timeline-element--work"
          contentStyle={{
            background: 'rgba(255, 255, 255, 0.95)',
            color: '#0f172a',
            border: '1px solid #d8e9f8',
            boxShadow: '0 15px 35px rgba(0, 48, 86, 0.12)',
            borderRadius: '20px',
          }}
          contentArrowStyle={contentArrowStyle}
          date={item.time}
          iconStyle={iconStyle}
          icon={<CalendarClock size={24} color="#ffffff" />}
        >
          <h1 className="vertical-timeline-element-title font-bold text-2xl pb-2 text-prussian-blue-800">
            {item.title}
          </h1>
          <h1 className="vertical-timeline-element-subtitle text-lg text-prussian-blue-950 flex items-start">
            <LocateIcon size={20} className="mr-2 mt-1 shrink-0" />
            {item.location}
          </h1>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  )
}
