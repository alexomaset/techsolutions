import React from 'react';

export interface VisualSectionProps {
  percentage: string;
  description: string;
  bgColor: string; // Tailwind bg class
  icon?: React.ElementType;
}

const VisualSection: React.FC<VisualSectionProps> = ({ percentage, description, bgColor, icon: Icon }) => (
  <div className={`rounded-lg p-6 flex flex-col items-center justify-center min-h-[160px] ${bgColor}`}>
    {Icon && (
      <span className="mb-2">
        <Icon className="w-8 h-8 text-gray-700 opacity-80" />
      </span>
    )}
    <span className="text-4xl font-bold text-center">{percentage}</span>
    <span className="text-base text-gray-700 mt-2 text-center leading-tight">{description}</span>
  </div>
);

export default VisualSection;
