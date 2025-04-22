import React from 'react';
import { FaChartLine, FaMapMarkerAlt, FaCloudSun, FaLeaf } from 'react-icons/fa';
import VisualSection from './VisualSection';

interface Stat {
  percentage: string;
  description: string;
  bgColor: string;
  icon: React.ElementType;
}

const stats: Stat[] = [
  {
    percentage: '58%',
    description: 'Increase in pick up point use',
    bgColor: 'bg-orange-500',
    icon: FaMapMarkerAlt,
  },
  {
    percentage: '97%',
    description: 'Customer satisfaction rate',
    bgColor: 'bg-white',
    icon: FaChartLine,
  },
  {
    percentage: '82%',
    description: 'Cloud service adoption',
    bgColor: 'bg-sky-200',
    icon: FaCloudSun,
  },
  {
    percentage: '44%',
    description: 'Reduction in carbon footprint',
    bgColor: 'bg-lime-300',
    icon: FaLeaf,
  },
];

const CustomStatsSection: React.FC = () => (
  <section className="py-12">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div>
          <VisualSection {...stats[0]} />
        </div>
        <div>
          <VisualSection {...stats[1]} />
        </div>
        <div>
          <VisualSection {...stats[2]} />
        </div>
        <div>
          <VisualSection {...stats[3]} />
        </div>
      </div>
    </div>
  </section>
);

export default CustomStatsSection;
