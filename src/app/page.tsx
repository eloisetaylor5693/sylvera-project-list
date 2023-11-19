import ProjectList from "./components/ProjectList";

async function getProjects() {
  const response = await fetch(
    "https://pm25.lass-net.org/API-1.0.0/project/all/"
  );

  if (!response.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch project data");
  }

  const data = await response.text();
  const projects = data && data.split("\n");

  return projects;
}

export default async function Home() {
  const projects = await getProjects();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-6xl text-white mt-50">Project list</h1>

      {projects && <ProjectList items={projects} />}
    </main>
  );
}
