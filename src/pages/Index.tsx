"use client"; // Add this if using Next.js App Router

import Navbar from '@/components/Navbar';
import AnimatedSection from '@/components/AnimatedSection';
import { Play, Camera, Film, Heart, ArrowRight, MapPin, Users, Aperture, Clapperboard, Video, Sparkles, ChevronDown, Quote, Link } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from 'react';
import { Badge } from "@/components/ui/badge";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'; // <-- ADD THIS

// More engaging, bilingual phrases for the Hero section
const wittyPhrases = [
  { en: "Capturing the 'I do's' and the 'OMG, he's dancing!' moments.", hi: "वो 'हाँ' वाले पल, और वो 'अरे, ये भी नाच लेते हैं!' वाले।" },
  { en: "Your love story, unscripted and unforgettable.", hi: "आपकी प्रेम कहानी, बिना स्क्रिप्ट के, हमेशा के लिए यादगार।" },
  { en: "We focus on your moments, so you can focus on each other.", hi: "हम पलों को क़ैद करते हैं, ताकि आप एक दूसरे में खोए रहें।" }
];

const Index = () => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [currentLanguage, setCurrentLanguage] = useState<'en' | 'hi'>('en');
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const targetText = wittyPhrases[phraseIndex][currentLanguage];
    let charIndex = 0;
    const typingInterval = setInterval(() => {
      if (charIndex < targetText.length) {
        setDisplayText(targetText.slice(0, charIndex + 1));
        charIndex++;
      } else {
        setIsTyping(false);
        clearInterval(typingInterval);
      }
    }, 80);

    const phraseTimeout = setTimeout(() => {
      setIsTyping(true);
      setDisplayText('');
      if (currentLanguage === 'en') {
        setCurrentLanguage('hi');
      } else {
        setCurrentLanguage('en');
        setPhraseIndex((prev) => (prev + 1) % wittyPhrases.length);
      }
    }, 5000);

    return () => {
      clearInterval(typingInterval);
      clearTimeout(phraseTimeout);
    };
  }, [phraseIndex, currentLanguage]);

  const handlePortfolioClick = () => {
    navigate('/portfolio'); // Tell it where to go
  };

  return (
    // Using a more refined color scheme for backgrounds
    <div className="min-h-screen font-sans bg-soft-white text-rich-black">
      <Navbar />

      {/* ==================================
          1. REVAMPED HERO SECTION
          ================================== */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden text-white">
        <div className="absolute inset-0 z-0">
          <video
            src="/videos/wedding-hero.mp4" // IMPORTANT: Place your video here
            poster="/images/wedding-poster.jpg" // A placeholder image
            autoPlay loop muted playsInline
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-rich-black/80 via-rich-black/50 to-transparent z-10" />
        <div className="container-custom relative z-20 text-center px-6">
          <AnimatedSection className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-serif font-bold min-h-[120px] md:min-h-[160px]" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.6)' }}>
              {displayText}
              {isTyping && <span className="animate-pulse">|</span>}
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
              We don't just take pictures; we bottle up emotions. Based in Ballia, serving love stories across India.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-3 mt-6">
              <span className="text-white/80 text-sm font-medium mr-2">Available In:</span>
              {['Jharkhand', 'Bihar', 'Patna'].map((state) => (
                <Badge key={state} variant="outline" className="bg-white/10 backdrop-blur-sm border-white/20 px-4 py-2 text-sm shadow-lg transition-all duration-300 hover:bg-white/20 hover:scale-105 cursor-pointer">
                  <MapPin className="w-3.5 h-3.5 mr-2 text-brown-300" /> {state}
                </Badge>
              ))}
            </div>
            <button className="group mt-8 px-8 py-4 bg-brown-500 rounded-full font-semibold hover:bg-white hover:text-rich-black transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-brown-300/50 flex items-center mx-auto">
              Make Your Day Timeless
              <Sparkles className="ml-3 w-5 h-5 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12" />
            </button>
          </AnimatedSection>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center space-y-1 text-white/70 animate-bounce">
          <span className="text-xs font-sans">Explore</span>
          <ChevronDown className="w-5 h-5" />
        </div>
      </section>

      {/* ==================================
          2. REVAMPED WEDDING SERVICES SECTION
          ================================== */}
      <section id="wedding" className="py-24 bg-white">
        <AnimatedSection className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold">Our Signature Services</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">Every love story is unique. Our services are crafted to capture the distinct soul of your celebration.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Camera className="w-10 h-10" />, title: "Artful Photography", description: "Timeless, emotive stills that immortalize the laughter, tears, and joy of your day.", image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80" },
              { icon: <Film className="w-10 h-10" />, title: "Cinematic Films", description: "A breathtaking movie of your wedding, telling your story with artistry and heart.", image: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=800&q=80" },
              { icon: <Play className="w-10 h-10" />, title: "Pre-Wedding Shoots", description: "A relaxed, fun session to capture your chemistry before the big day unfolds.", image: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=800&q=80" }
            ].map((service) => (
              <div key={service.title} className="group relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-96">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                  <div className="text-brown-300 mb-4 transition-transform duration-300 group-hover:-translate-y-1">{service.icon}</div>
                  <h3 className="text-2xl font-bold font-serif">{service.title}</h3>
                  <p className="mt-2 text-white/80 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-40 transition-all duration-500">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* ==================================
          3. REVAMPED PORTFOLIO PREVIEW
          ================================== */}
      <section id="portfolio" className="py-24 bg-brown-100/30">
        <AnimatedSection className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold">A Glimpse Into Our Stories</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">Each gallery is a unique chapter in a beautiful love story. Here are a few of our favorites.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { img: "/click.jpg", title: "Sarah & Michael", desc: "Beach Wedding" },
              { img: "/click1.jpg", title: "Emily & James", desc: "Garden Ceremony" },
              { img: "/click5.jpg", title: "Jessica & David", desc: "Rustic Barn" },
              { img: "/click2.jpg", title: "Anna & Thomas", desc: "City Wedding" },
              { img: "/click3.jpg", title: "Olivia & William", desc: "Forest Elopement" },
              { img: "/click4.jpg", title: "Grace & Robert", desc: "Vineyard Ceremony" }
            ].map((item) => (
              <div key={item.title} className="group relative rounded-lg overflow-hidden cursor-pointer aspect-w-1 aspect-h-1">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <h3 className="font-serif font-bold text-xl text-white">{item.title}</h3>
                    <p className="text-white/80 text-sm">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            {/* 2. REPLACE <button> with <Link> and add the 'to' prop */}
            <button
              onClick={handlePortfolioClick}
              className="px-8 py-3 bg-transparent border-2 border-brown-500 text-brown-500 rounded-full font-semibold hover:bg-brown-500 hover:text-white transition-colors duration-300 flex items-center mx-auto"
            >
              View Full Portfolio <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </div>
        </AnimatedSection>
      </section>

      {/* ==================================
          4. REVAMPED ABOUT & TEAM SECTION
          ================================== */}
      <section id="about" className="py-24 bg-white">
        <AnimatedSection className="container-custom">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            {/* Image Collage */}
            <div className="lg:col-span-2 relative h-96">
              <img src="/suraj.webp" alt="Photographer Suraj Kumar" className="rounded-lg shadow-xl w-full h-full object-cover absolute z-10 transform hover:scale-105 transition-transform duration-500" />
              <div className="absolute -bottom-8 -right-8 w-48 h-48 rounded-lg shadow-lg border-4 border-white z-20 hidden md:block">
                <img src="/sura1.webp" alt="Camera Detail" className="w-full h-full object-cover" />
              </div>
            </div>
            {/* About Text */}
            <div className="lg:col-span-3">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Our Heartfelt Philosophy</h2>
              <p className="text-gray-700 mb-6 text-lg">
                For us, photography is not just a profession—it's the art of preserving happiness. We are a team of passionate storytellers, led by <span className="font-bold text-brown-500">Suraj Kumar</span>, dedicated to capturing the raw emotion and subtle beauty of your wedding day. We believe in creating a comfortable, joyful experience, allowing your genuine love to shine through in every frame.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center">
                  <h3 className="text-4xl font-bold font-sans text-brown-500">250+</h3>
                  <p className="text-gray-600 mt-1">Weddings Immortalized</p>
                </div>
                <div className="text-center">
                  <h3 className="text-4xl font-bold font-sans text-brown-500">100%</h3>
                  <p className="text-gray-600 mt-1">Heartfelt Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* ==================================
          5. REVAMPED TESTIMONIALS SECTION (Added)
          ================================== */}
      <section className="py-24 bg-brown-100/30">
        <AnimatedSection className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold">Words from Our Couples</h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              { name: "Priya & Rohan", quote: "They didn't just take photos; they captured the soul of our wedding. We relive the magic every time we see our album!", image: "/images/couple1.jpg" },
              { name: "Anjali & Vikram", quote: "The Wedding Click team felt like family. Their professionalism and artistic vision are unmatched. The cinematic film still gives us goosebumps.", image: "/images/couple2.jpg" },
              { name: "Sneha & Amit", quote: "From the pre-wedding shoot to the final delivery, everything was flawless. Suraj and his team are true artists and wonderful people.", image: "/images/couple3.jpg" },
            ].map(t => (
              <Card key={t.name} className="bg-white border-0 shadow-lg text-center">
                <CardContent className="p-8">
                  <Avatar className="w-20 h-20 mx-auto mb-4 border-4 border-brown-200">
                    <AvatarImage src={t.image} />
                    <AvatarFallback>{t.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <p className="text-gray-600 italic">"{t.quote}"</p>
                  <p className="font-bold text-brown-500 mt-4">- {t.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* ==================================
          6. REVAMPED CONTACT CTA
          ================================== */}
      <section id="contact" className="py-24 bg-rich-black text-white relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1550005869-d3a90a2a33c6?auto=format&fit=crop&w=2000&q=80"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
          alt="Wedding details"
        />
        <AnimatedSection className="container-custom text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">Let's Tell Your Story</h2>
          <p className="max-w-2xl mx-auto mb-8 text-white/80 text-lg">
            Your wedding is a once-in-a-lifetime event. Let's work together to create something beautiful and everlasting.
          </p>
          <button className="group px-8 py-4 bg-brown-500 rounded-full font-semibold hover:bg-white hover:text-rich-black transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center mx-auto">
            Check Our Availability
            <Heart className="ml-3 w-5 h-5 transition-transform duration-300 group-hover:fill-current" />
          </button>
        </AnimatedSection>
      </section>

      {/* ==================================
          7. REVAMPED FOOTER
          ================================== */}
      <footer className="bg-off-black text-white py-16">
        <div className="container-custom px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div className="flex flex-col items-center md:items-start">
              <div className="flex items-center space-x-3 text-2xl font-serif font-bold mb-4">
                <div className="bg-brown-500 rounded-full p-2">
                  <Clapperboard className="w-6 h-6 text-white" />
                </div>
                <span>The Wedding Click</span>
              </div>
              <p className="text-white/60 text-sm max-w-xs">Preserving love stories in Ballia and beyond with artistry and passion.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {['Wedding', 'Portfolio', 'About', 'Contact', 'Blog'].map((item) => (
                  <li key={item}><a href={`#${item.toLowerCase()}`} className="text-sm text-white/80 hover:text-brown-300 transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Connect With Us</h4>
              <div className="flex justify-center md:justify-start space-x-4 mb-4">
                <a href="#" className="text-white/80 hover:text-brown-300 transition-colors text-xl"><FaFacebookF /></a>
                <a href="#" className="text-white/80 hover:text-brown-300 transition-colors text-xl"><FaTwitter /></a>
                <a href="#" className="text-white/80 hover:text-brown-300 transition-colors text-xl"><FaInstagram /></a>
                <a href="#" className="text-white/80 hover:text-brown-300 transition-colors text-xl"><FaYoutube /></a>
              </div>
              <p className="text-sm text-white/60">theweddingclick@email.com</p>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-white/50">
            © {new Date().getFullYear()} The Wedding Click. Crafted with ❤️ for timeless memories.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;