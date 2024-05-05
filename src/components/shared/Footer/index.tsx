const Footer = () => {
  return (
    <footer className='mt-10 gradient-background p-4 font-lg'>
      <div className='max-w-6xl flex items-center justify-between mx-auto text-white'>
        <p className='font-semibold'>&copy; {new Date().getFullYear()}</p>
        <h2>
          Built by <span className='font-semibold'>Mr. Pawan Awasthi</span>
        </h2>
      </div>
    </footer>
  );
};

export default Footer;
