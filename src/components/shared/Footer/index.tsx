const Footer = () => {
  return (
    <footer className='mt-10 bg-primary p-4 font-lg'>
      <div className='max-w-6xl flex items-center justify-between mx-auto'>
        <div>&copy; {new Date().getFullYear()}</div>
        <h2>Pawan Awasthi</h2>
      </div>
    </footer>
  );
};

export default Footer;
