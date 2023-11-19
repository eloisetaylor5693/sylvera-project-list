async function getProject(name: string) {
  const response = await fetch(
    `https://pm25.lass-net.org/API-1.0.0/project/${name}/latest/`,
    { next: { revalidate: 3600 } }
  );

  if (!response.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch project data");
  }

  return await response.json();
}

interface Params {
  name: string;
}

interface ProjectProps {
  params: Params;
}

export default async function Project({ params }: ProjectProps) {
  const project = await getProject(params.name);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-6xl text-white mt-50">Project {params.name}</h1>
      <code className="text-black">{project.source}</code>
    </main>
  );
}
