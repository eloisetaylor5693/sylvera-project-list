import Link from "next/link";
import React from "react";

interface ProjectListProps {
  projects: string[];
}

const ProjectList = ({ projects: items }: ProjectListProps): JSX.Element => {
  return (
    <ul className="p-16 bg-slate-500 rounded-lg">
      {items.map((projectName, index) => (
        <li key={index} data-testid={index}>
          <Link href={`/projects/${projectName}`}>{projectName}</Link>
        </li>
      ))}
    </ul>
  );
};

export default ProjectList;
