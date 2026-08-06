export type ClubEvent = {
  name: string;
  /** Displayed as written, e.g. "6/7/25". */
  date: string;
  description: string;
  /** Falls back to a placeholder block when an event has no image yet. */
  image?: string;
};

const EventCard = ({ name, date, description, image }: ClubEvent) => {
  return (
    <div className="border border-gray-400 rounded-xl p-6">
      <h3 className="text-red-400 text-lg font-bold">{name}</h3>
      <p className="text-sm text-gray-400 mb-4">{date}</p>
      <p className="text-gray-300 mb-4">{description}</p>
      {image ? (
        <img src={image} alt={name} className="w-24 h-24 object-cover" />
      ) : (
        <div className="w-24 h-24 bg-gray-300" />
      )}
    </div>
  );
};

export default EventCard;
