const Footer = () => {
  return (
    <footer className="border-t-2 border-gray-800 py-5">
      <div className="container text-gray-600">
        &copy; {new Date().getFullYear()} Moonchain. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
