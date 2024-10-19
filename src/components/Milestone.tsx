import React from 'react';

interface MilestoneProps {
  title: string;
  description: string;
}

const Milestone: React.FC<MilestoneProps> = ({ title, description }) => {
  return (
    <div className="milestone">
      <h3 className="milestone-title">{title}</h3>
      <p className="milestone-description">{description}</p>
    </div>
  );
};

export default Milestone;