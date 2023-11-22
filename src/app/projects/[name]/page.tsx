import ProjectCard from "@/app/components/ProjectCard";

import Project, { FeedEntry } from "@/app/types/project";

const pageSize = 10;

async function getProject(name: string, page: number = 1) {
  const response = await fetch(
    `https://pm25.lass-net.org/API-1.0.0/project/${name}/latest/`,
    { next: { revalidate: 3600 } }
  );

  if (!response.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch project data");
  }

  const data = await response.json();

  // 1 = 0
  // 2 = 10
  const skip = (page - 1) * pageSize;

  const takeCount = page * pageSize;

  console.log({
    page,
    pageSize,
    takeCount,
    skip,
    calc: data.num_of_records - pageSize,
    count: data.feeds.slice(skip, takeCount).length,
  });
  const pagedFeeds = data.feeds.slice(skip, takeCount);

  const project: Project = {
    name: data.name,
    totalFeedEntries: data.num_of_records,
    topTenFeedEntries: pagedFeeds.map(
      (device: { device_id: any; gps_lat: any; gps_lon: any }) => ({
        deviceId: device.device_id,
        latitude: device.gps_lat,
        longitude: device.gps_lon,
      })
    ),
  } as Project;

  return project;
}

interface Params {
  name: string;
}

interface ProjectProps {
  params: Params;
}

export default async function ProjectPage({ params, searchParams }: any) {
  const project = await getProject(params.name, searchParams.page);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-6xl mt-50">Project {params.name}</h1>

      {!project?.topTenFeedEntries && (
        <p className="p-16 bg-slate-500 rounded-lg text-white text-3xl">
          Sorry, no data found
        </p>
      )}

      <div className="mt-5 grid grid-cols-2 gap-2">
        {project &&
          project.topTenFeedEntries.map((entry: FeedEntry) => (
            <ProjectCard
              key={entry.deviceId}
              deviceId={entry.deviceId}
              latitude={entry.latitude}
              longitude={entry.longitude}
            />
            // <Link href={`/projects/${entry.deviceId}`}>
          ))}
      </div>
    </main>
  );
}
