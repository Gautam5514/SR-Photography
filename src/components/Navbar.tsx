
import { useState, useEffect } from 'react';
import { Menu, X, Video, Clapperboard } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Account for navbar height
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-rich-black/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="container-custom flex items-center justify-between py-4 px-6">
        <a href="/" className="font-sans flex items-center space-x-2 text-white">
          <div className="bg-brown-500 rounded-full p-2">
            <Video className="w-5 h-5 text-white" />
          </div>
          <div className="relative flex items-center">
            <span className="text-2xl font-bold">SRGraphics</span>
            <Clapperboard className="text-white w-4 h-4 absolute top-0 right-[-12px] transform -rotate-12" />
          </div>
        </a>
        
        <div className="hidden md:flex items-center space-x-8">
          {['Wedding', 'Portfolio', 'About', 'Contact','Blog'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-white hover:text-brown-300 transition-colors"
              onClick={(e) => handleLinkClick(e, item.toLowerCase())}
            >
              {item}
            </a>
          ))}
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-rich-black/90 backdrop-blur-md">
          <div className="py-4 px-6 space-y-4">
            {['Wedding', 'Portfolio', 'About', 'Contact','Blog'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block text-sm font-medium text-white hover:text-brown-300 transition-colors"
                onClick={(e) => handleLinkClick(e, item.toLowerCase())}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
