import Link from "next/link";
import React from "react";

interface ProjectListProps {
  projects: string[];
}

const ProjectList = ({ projects: items }: ProjectListProps): JSX.Element => {
  return (
    <ul className="">
      {items.map((projectName, index) => (
        <li key={index} data-testid={index}>
          <Link href={`/projects/${projectName}`}>{projectName}</Link>
        </li>
      ))}
    </ul>
  );
};

export default ProjectList;
