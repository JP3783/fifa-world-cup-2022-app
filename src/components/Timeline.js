function Timeline({ events }) {
  return (
    <div className="timeline">
      {events.map((event, index) => (
        <div key={index} className="event" title={event.description}>
          {event.time} - {event.type}
        </div>
      ))}
    </div>
  );
}
export default Timeline;