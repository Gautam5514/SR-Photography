import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Video, Clapperboard, CalendarCheck } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'My Team', href: '/team' }, // New Page
  { name: 'Equipment', href: '/equipment' }, // New Page
  { name: 'My Work', href: '/my-work' },
  { name: 'Contact', href: '/contact' },
  { name: 'Blog', href: '/blog' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Scroll Listener
  useEffect(() => {
    const handleScroll = () => {
      // Change background after scrolling 50px
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation Logic
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsMenuOpen(false);

    const isHomePage = location.pathname === '/';
    const isScrollLink = href.startsWith('/#');

    if (isScrollLink) {
      e.preventDefault();
      const elementId = href.substring(2);
      if (isHomePage) {
        const element = document.getElementById(elementId);
        if (element) {
          // Smooth scroll with offset for fixed header
          const offset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
      } else {
        navigate(`/#${elementId}`);
      }
    }
    // For normal links, we let the Link component handle navigation automatically
  };

  const isHomePage = location.pathname === '/';

  // Dynamic CSS Classes
  const navBaseClass = "fixed w-full z-50 transition-all duration-500 ease-in-out border-b border-transparent";
  const navBackgroundClass = isScrolled
    ? "bg-rich-black/95 backdrop-blur-md shadow-2xl py-3 border-white/5"
    : (isHomePage ? "bg-transparent py-6" : "bg-rich-black py-4");

  return (
    <nav className={`${navBaseClass} ${navBackgroundClass}`}>
      <div className="container mx-auto flex items-center justify-between px-6 lg:px-12">

        {/* --- Logo --- */}
        <Link to="/" className="flex items-center space-x-3 group z-50">
          <div className={`
            relative flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300
            ${isScrolled ? 'bg-brown-500 text-white' : 'bg-white/10 backdrop-blur-sm text-white'}
            group-hover:scale-110 group-hover:bg-brown-500
          `}>
            <Video className="w-5 h-5" />
            <span className="absolute -bottom-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
          </div>

          <div className="flex flex-col">
            <div className="relative flex items-center">
              <span className="text-xl md:text-2xl font-cinzel font-bold text-white tracking-wider">
                The Wedding Click
              </span>
              <Clapperboard className="hidden md:block text-brown-300 w-4 h-4 absolute -top-2 -right-5 transform -rotate-12" />
            </div>
            <span className="text-[0.65rem] text-white/60 tracking-[0.3em] uppercase hidden md:block group-hover:text-brown-300 transition-colors">
              Cinematic Productions
            </span>
          </div>
        </Link>

        {/* --- Desktop Navigation --- */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-xs font-medium text-white/90 hover:text-brown-300 transition-all duration-300 uppercase tracking-widest relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-0 after:h-[1px] after:bg-brown-300 after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.name}
            </Link>
          ))}

          <button
            onClick={() => navigate('/contact')}
            className="flex items-center px-6 py-2.5 bg-transparent border border-brown-300 rounded-full text-brown-300 text-xs font-bold uppercase tracking-widest hover:bg-brown-300 hover:text-rich-black transition-all duration-300 shadow-[0_0_10px_rgba(212,175,55,0.1)] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]"
          >
            <CalendarCheck className="w-4 h-4 mr-2" />
            Book Now
          </button>
        </div>

        {/* --- Mobile Menu Toggle --- */}
        <button
          className="lg:hidden text-white hover:text-brown-300 transition-transform active:scale-95 z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* --- Mobile Menu Overlay --- */}
      <div className={`
        fixed inset-0 bg-rich-black/98 backdrop-blur-xl z-40 flex flex-col justify-center items-center transition-all duration-500
        ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}
      `}>
        <div className="flex flex-col items-center space-y-8">
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              style={{ transitionDelay: `${index * 50}ms` }}
              className={`text-2xl font-serif text-white hover:text-brown-300 transition-all transform 
                    ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
                `}
            >
              {link.name}
            </Link>
          ))}
          <button
            onClick={() => { setIsMenuOpen(false); navigate('/contact'); }}
            className={`mt-8 px-10 py-4 bg-brown-500 rounded-full text-white text-sm uppercase tracking-widest font-bold shadow-lg transform transition-all delay-300
                    ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
                `}
          >
            Start A Project
          </button>
        </div>

        {/* Decorative Background Element */}
        <div className="absolute bottom-0 w-full h-1 bg-gradient-to-r from-transparent via-brown-500 to-transparent opacity-50"></div>
      </div>
    </nav>
  );
};

export default Navbar;