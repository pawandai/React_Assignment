import Footer from '@/components/shared/Footer';
import { buttonVariants } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div className='max-w-5xl mx-auto flex flex-col items-center justify-center gap-10'>
        <img src='/dragon.png' className='' />
        <img src='/dnd_text.png' className='sm:-mt-20 -mt-10 sm:mr-20 w-40' />
        <p className='text-lg text-center'>
          This is the React Assignment to showcase all the spells contained in{' '}
          <span className='text-gradient font-semibold'>
            Dungeons & Dragons 5th Edition API
          </span>
          . Dungeons & Dragons is a fantasy tabletop role-playing game
          originally created and designed by Gary Gygax and Dave Arneson. The
          game was first published in 1974 by Tactical Studies Rules, Inc.
        </p>
        <Link to={'/spells'} className={buttonVariants({ variant: 'default' })}>
          Explore Spells <ArrowRight />
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default Home;
