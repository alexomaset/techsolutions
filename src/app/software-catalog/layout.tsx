import { Metadata } from 'next';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Software Catalog | TechSolutions',
  description: 'Browse our complete collection of authorized software solutions for businesses of all sizes. Microsoft 365, Adobe Creative Cloud, cybersecurity, and more.',
};

export default function SoftwareCatalogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
} 