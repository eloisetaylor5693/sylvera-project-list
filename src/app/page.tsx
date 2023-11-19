import ProjectList from "./components/ProjectList";

async function getProjects() {
  const response = await fetch(
    "https://pm25.lass-net.org/API-1.0.0/project/all/",
    { next: { revalidate: 3600 } }
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
    <main className="flex min-h-screen flex-col items-center ">
      <h1 className="text-6xl mt-20 mb-16 text-black">Projects</h1>

      {projects && <ProjectList projects={projects} />}
    </main>
  );
}
