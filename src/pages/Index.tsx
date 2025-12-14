"use client"; // Add this if using Next.js App Router

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import { Play, Camera, Film, Heart, ArrowRight, MapPin, Users, Aperture, Clapperboard, Video, Sparkles, ChevronDown, Quote, Link } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import HeroSlider from '@/components/HeroSlider';
import { TEAM_MEMBERS, EQUIPMENT_LIST } from '@/data/mockData'; // Import Mock Data

// More engaging, bilingual phrases for the Hero section
const wittyPhrases = [
  { en: "Capturing the 'I do's' and the 'OMG, he's dancing!' moments.", hi: "वो 'हाँ' वाले पल, और वो 'अरे, ये भी नाच लेते हैं!' वाले।" },
  { en: "Your love story, unscripted and unforgettable.", hi: "आपकी प्रेम कहानी, बिना स्क्रिप्ट के, हमेशा के लिए यादगार।" },
  { en: "We focus on your moments, so you can focus on each other.", hi: "हम पलों को क़ैद करते हैं, ताकि आप एक दूसरे में खोए रहें।" }
];
// Testimonial Data for Carousel
const testimonials = [
  {
    name: "Andrew Taylor",
    location: "From USA",
    quote: "Thanks, we've gained clarity and confidence in our financial future. Personalized approach and expert guidance have been invaluable. Highly recommend!",
    image: "/suraj.webp" // Using existing image for demo
  },
  {
    name: "Priya & Rohan",
    location: "Mumbai, India",
    quote: "They didn't just take photos; they captured the soul of our wedding. We relive the magic every time we see our album!",
    image: "/click.jpg"
  },
  {
    name: "Anjali & Vikram",
    location: "Delhi, India",
    quote: "The Wedding Click team felt like family. Their professionalism and artistic vision are unmatched. The cinematic film still gives us goosebumps.",
    image: "/click1.jpg"
  },
];

const TestimonialCarousel = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
      {/* Visual Side (Left) */}
      <div className="relative w-full md:w-1/2 flex justify-center md:justify-end">
        <div className="relative w-64 h-64 md:w-80 md:h-80">
          {/* Background Circle with Quote */}
          <div className="absolute top-0 left-0 w-48 h-48 bg-white border border-gray-100 rounded-full flex items-center justify-center shadow-sm z-0 transform -translate-x-12 -translate-y-4">
            <Quote className="w-16 h-16 text-rich-black fill-current" />
          </div>
          {/* Image */}
          <div className="absolute top-10 right-0 w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-8 border-white shadow-2xl z-10">
            <img
              src={testimonials[current].image}
              alt={testimonials[current].name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Content Side (Right) */}
      <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
        <h4 className="text-brown-500 font-bold tracking-widest text-xs uppercase">WHAT OUR CUSTOMERS FEEL ABOUT OUR SERVICES!</h4>
        <p className="text-2xl md:text-3xl font-serif font-bold text-rich-black leading-tight">
          {testimonials[current].quote}
        </p>

        <div className="flex items-center justify-center md:justify-start gap-4 pt-4">
          {/* Navigation */}
          <button onClick={prev} className="p-3 rounded-full border border-gray-200 hover:bg-brown-500 hover:text-white hover:border-brown-500 transition-all duration-300">
            <ArrowRight className="w-5 h-5 transform rotate-180" />
          </button>
          <button onClick={next} className="p-3 rounded-full border border-gray-200 hover:bg-brown-500 hover:text-white hover:border-brown-500 transition-all duration-300">
            <ArrowRight className="w-5 h-5" />
          </button>

          <div className="ml-4 text-left">
            <h5 className="font-bold text-rich-black text-lg">{testimonials[current].name}</h5>
            <span className="text-gray-500 text-sm">{testimonials[current].location}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

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
          1. REVAMPED HERO SECTION (Slider)
          ================================== */}
      <HeroSlider />

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
          <div className="text-center mt-12">
            <button
              onClick={() => navigate('/my-work')}
              className="px-8 py-3 bg-brown-500 text-white rounded-full font-semibold hover:bg-brown-600 transition-colors duration-300 flex items-center mx-auto shadow-md hover:shadow-lg transform hover:-translate-y-1"
            >
              View My Work <ArrowRight className="ml-2 w-4 h-4" />
            </button>
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
          5. REVAMPED TESTIMONIALS SECTION (Carousel)
          ================================== */}
      <section className="py-24 bg-white overflow-hidden">
        <AnimatedSection className="container-custom">
          <TestimonialCarousel />
        </AnimatedSection>
      </section>

      {/* ==================================
          6. CONTACT BANNER (Replaced Form)
          ================================== */}
      <section id="contact" className="py-24 p-7 bg-rich-black text-white relative overflow-hidden">
        <div className="container-custom relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="text-center lg:text-left space-y-4 max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-serif font-bold leading-tight">
              <span className="text-white">Your Love Story. </span>
              <span className="text-brown-300 italic">Our Masterpiece.</span>
            </h2>
            <p className="text-lg text-white/70">Let's build a timeline that aligns with your dreams. Expert guidance, every step of the way.</p>
          </div>

          <button
            onClick={() => navigate('/contact')}
            className="group relative px-8 py-4 bg-transparent border-2 border-white/20 rounded-full font-semibold text-white overflow-hidden transition-all duration-300 hover:border-brown-400 hover:text-brown-300"
          >
            <span className="relative z-10 flex items-center">
              GET IN TOUCH <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </button>
        </div>
      </section>

      {/* ==================================
          7. REVAMPED FOOTER
          ================================== */}
      <Footer />
    </div>
  );
};


export default Index;