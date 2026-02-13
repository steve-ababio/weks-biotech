// components/JobCard.tsx

interface JobCardProps {
    title: string;
    type: string;
    location: string;
}
const JobCard = ({ title, type, location }:JobCardProps) => (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-orange-100 hover:shadow-md transition">
      <h3 className="font-bold text-lg text-orange-900">{title}</h3>
      <p className="text-sm text-gray-500">{type} • {location}</p>
      <button className="mt-4 text-orange-600 font-semibold text-sm">Apply →</button>
    </div>
);

export default JobCard;