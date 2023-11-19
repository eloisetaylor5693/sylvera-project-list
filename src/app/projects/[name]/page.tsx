import ProjectCard from "@/app/components/ProjectCard";
import type { Project } from "@/app/types";
import { FeedEntry } from "@/app/types/project";

async function getProject(name: string) {
  const response = await fetch(
    `https://pm25.lass-net.org/API-1.0.0/project/${name}/latest/`,
    { next: { revalidate: 3600 } }
  );

  if (!response.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch project data");
  }

  const data = await response.json();

  const project: Project = {
    name: data.name,
    totalFeedEntries: data.num_of_records,
    topTenFeedEntries: data.feeds
      .slice(0, 10)
      .map((device: { device_id: any; gps_lat: any; gps_lon: any }) => ({
        deviceId: device.device_id,
        latitude: device.gps_lat,
        longitude: device.gps_lon,
      })),
  } as Project;

  return project;
}

interface Params {
  name: string;
}

interface ProjectProps {
  params: Params;
}

export default async function ProjectPage({ params }: ProjectProps) {
  const project = await getProject(params.name);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-6xl text-white mt-50">Project {params.name}</h1>

      {!!project && (
        <p className="p-16 bg-slate-500 rounded-lg text-white text-3xl">
          Sorry, no data found
        </p>
      )}

      <div className="mt-5 grid grid-cols-2 gap-2">
        {project &&
          project.topTenFeedEntries.map((entry: FeedEntry) => (
            <ProjectCard
              deviceId={entry.deviceId}
              latitude={entry.latitude}
              longitude={entry.longitude}
            />
          ))}
      </div>
    </main>
  );
}
