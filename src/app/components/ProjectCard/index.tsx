interface ProjectCardProps {
  deviceId: string;
  latitude: number;
  longitude: number;
}

const ProjectCard = ({ deviceId, latitude, longitude }: ProjectCardProps) => {
  return (
    <div className="p-16 bg-slate-500 rounded-lg text-lg">
      <div className="grid grid-cols-2 gap-3">
        <p>Device id:</p>
        <p>{deviceId}</p>
        <p>Latitude:</p>
        <p>{latitude}</p>
        <p>Longitude:</p>
        <p>{longitude}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
