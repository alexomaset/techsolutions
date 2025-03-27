import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center">
        <div className="text-6xl font-bold text-blue-600 mb-2">404</div>
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Page Not Found</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">Oops! We can&apos;t find that page.</h2>
        <p className="text-lg text-gray-600 mb-10">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been moved or deleted.
        </p>
        <p className="text-gray-600 mb-8">The page you&apos;re looking for doesn&apos;t exist or has been moved.</p>
        <Link 
          href="/" 
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Back to Homepage
        </Link>
      </div>
    </div>
  );
} 