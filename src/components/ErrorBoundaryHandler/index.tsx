import { Link } from 'react-router-dom';
import { buttonVariants } from '../ui/button';

export default function ErrorBoundaryHandler() {
  return (
    <main className='min-h-screen bg-primary dark:bg-secondary'>
      <div className='container max-w-[1080px] mx-auto flex items-center gap-5'>
        <h1 className='mt-3 text-3xl md:text-4xl font-semibold text-gray-800 dark:text-white'>
          Something went wrong
        </h1>
        <p className='mt-4 text-gray-700 dark:text-gray-400'>
          Sorry, the page you are looking is not available. If this is an error,
          we will try to fix it soon. Thank you!
        </p>
        <Link to={'/'} className={buttonVariants({ variant: 'default' })}>
          Go Home
        </Link>
      </div>
    </main>
  );
}
