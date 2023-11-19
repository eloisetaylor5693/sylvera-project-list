import React from "react";

interface ProjectListProps {
  items: string[];
}

const ProjectList = ({ items }: ProjectListProps): JSX.Element => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index} data-testid={index}>{item}</li>
      ))}
    </ul>
  );
};

export default ProjectList;
