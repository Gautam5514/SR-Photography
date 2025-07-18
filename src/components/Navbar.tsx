// src/components/Navbar.tsx
import { useState, useEffect } from 'react';
// 1. Import hooks and Link from react-router-dom
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Video, Clapperboard } from 'lucide-react';

const navLinks = [
  { name: 'Wedding', href: '/#wedding' },
  { name: 'Portfolio', href: '/#portfolio' },
  { name: 'About', href: '/#about' },
  { name: 'Contact', href: '/#contact' },
  { name: 'Blog', href: '/blog' }, // This is a direct page link
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // 2. Get current path and navigation functions from React Router
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    const isHomePage = location.pathname === '/';
    const isScrollLink = href.startsWith('/#');

    if (isScrollLink) {
      const elementId = href.substring(2); // Remove '/#'
      
      if (isHomePage) {
        // If on the homepage, scroll smoothly
        const element = document.getElementById(elementId);
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      } else {
        // If on another page, navigate to homepage with the hash.
        // The useEffect in HomePage.tsx will handle the scroll.
        navigate(`/#${elementId}`);
      }
    } else {
      // It's a regular page link (like /blog), so just navigate
      navigate(href);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-rich-black/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="container-custom flex items-center justify-between py-4 px-6">
        {/* 3. Use the React Router <Link> component for the logo */}
        <Link to="/" className="font-sans flex items-center space-x-2 text-white">
          <div className="bg-brown-500 rounded-full p-2">
            <Video className="w-5 h-5 text-white" />
          </div>
          <div className="relative flex items-center">
            <span className="text-2xl font-bold">The Wedding Click</span>
            <Clapperboard className="text-white w-4 h-4 absolute top-0 right-[-12px] transform -rotate-12" />
          </div>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            // 4. Use the <Link> component here too, but keep the onClick for custom logic
            <Link
              key={link.name}
              to={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-sm font-medium text-white hover:text-brown-300 transition-colors"
            >
              {link.name}
            </Link>
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
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="block text-sm font-medium text-white hover:text-brown-300 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;