import { Link, useNavigate } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Phone, Mail, ArrowRight, Video, Clapperboard } from 'lucide-react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
    const navigate = useNavigate();

    return (
        <footer className="bg-rich-black text-white pt-20 pb-10 rounded-t-[40px] mt-12 mx-2 md:mx-6 shadow-2xl relative overflow-hidden">
            <div className="container-custom px-6 relative z-10">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Column 1: Brand */}
                    <div className="space-y-6">
                        <Link to="/" className="font-sans flex items-center space-x-2 text-white mb-4">
                            <div className="bg-brown-500 rounded-full p-2">
                                <Video className="w-5 h-5 text-white" />
                            </div>
                            <div className="relative flex items-center">
                                <span className="text-2xl font-bold font-serif">The Wedding Click</span>
                                <Clapperboard className="text-white w-4 h-4 absolute top-0 right-[-12px] transform -rotate-12" />
                            </div>
                        </Link>
                        <p className="text-white/60 text-sm leading-relaxed">
                            We're always in search for talented and motivated people. Don't be shy introduce yourself!
                        </p>
                        <div className="flex space-x-3">
                            {[FaFacebookF, FaTwitter, FaInstagram, FaYoutube].map((Icon, idx) => (
                                <a key={idx} href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brown-500 transition-colors duration-300 group">
                                    <Icon className="text-white/80 group-hover:text-white" />
                                </a>
                            ))}
                        </div>
                        <button
                            onClick={() => navigate('/contact')}
                            className="inline-flex items-center px-6 py-3 border border-white/20 rounded-full text-sm font-semibold hover:bg-white hover:text-rich-black transition-all duration-300"
                        >
                            Contact With Us <ArrowRight className="ml-2 w-4 h-4" />
                        </button>
                    </div>

                    {/* Column 2: Useful Links */}
                    <div>
                        <h4 className="font-bold text-lg mb-6">Useful Links</h4>
                        <ul className="space-y-4 text-white/60 text-sm">
                            <li><a href="/#wedding" className="hover:text-brown-300 transition-colors">Marketplace</a></li>
                            <li><a href="/#about" className="hover:text-brown-300 transition-colors">Kindergarten</a></li>
                            <li><a href="/my-work" className="hover:text-brown-300 transition-colors">University</a></li>
                            <li><a href="/contact" className="hover:text-brown-300 transition-colors">GYM Coaching</a></li>
                            <li><a href="/blog" className="hover:text-brown-300 transition-colors">FAQ</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Our Company */}
                    <div>
                        <h4 className="font-bold text-lg mb-6">Our Company</h4>
                        <ul className="space-y-4 text-white/60 text-sm">
                            <li><Link to="/contact" className="hover:text-brown-300 transition-colors">Contact Us</Link></li>
                            <li><Link to="/about" className="hover:text-brown-300 transition-colors">Become Teacher</Link></li>
                            <li><Link to="/blog" className="hover:text-brown-300 transition-colors">Blog</Link></li>
                            <li><Link to="/portfolio" className="hover:text-brown-300 transition-colors">Instructor</Link></li>
                            <li><Link to="/events" className="hover:text-brown-300 transition-colors">Events</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Get Contact */}
                    <div>
                        <h4 className="font-bold text-lg mb-6">Get Contact</h4>
                        <div className="space-y-4 mb-8">
                            <div className="flex items-start">
                                <Phone className="w-5 h-5 text-brown-500 mt-1 mr-3" />
                                <div>
                                    <p className="text-white/60 text-sm">Phone: (406) 555-0120</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <Mail className="w-5 h-5 text-brown-500 mt-1 mr-3" />
                                <div>
                                    <p className="text-white/60 text-sm">E-mail: admin@example.com</p>
                                </div>
                            </div>
                        </div>

                        <h5 className="font-bold mb-4">Newsletter</h5>
                        <p className="text-white/60 text-sm mb-4">2000+ Our students are subscribe Around the World. Don’t be shy introduce yourself!</p>
                        <div className="relative">
                            <input
                                type="email"
                                placeholder="Enter Your Email Here"
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 pr-10 text-white placeholder:text-white/30 focus:outline-none focus:border-brown-500 transition-colors"
                            />
                            <Mail className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                        </div>
                        <button className="w-full mt-4 bg-brown-500 text-white py-3 rounded-lg font-semibold hover:bg-brown-600 transition-colors shadow-lg">
                            Submit Now
                        </button>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-white/40">
                    <p>Copyright © 2025 Rainbow-Themes. All Rights Reserved</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Terms of service</a>
                        <a href="#" className="hover:text-white transition-colors">Privacy policy</a>
                        <a href="#" className="hover:text-white transition-colors">Subscription</a>
                        <a href="#" className="hover:text-white transition-colors">Login & Register</a>
                    </div>
                    {/* Developer Credit */}
                    <p className="mt-4 md:mt-0">Designed & Developed by <a href="#" className="font-bold text-brown-300 hover:text-white transition-colors">hellobj</a></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
