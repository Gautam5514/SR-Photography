import Navbar from '@/components/Navbar';
import AnimatedSection from '@/components/AnimatedSection';
import { Play, Camera, Film, Heart, ArrowRight, MapPin, Users, Aperture, Clapperboard, Video } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState, useRef } from 'react';
import { Badge } from "@/components/ui/badge";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Index = () => {
  const [headingLanguage, setHeadingLanguage] = useState<'english' | 'hindi'>('english');
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const englishText = 'Capturing Your Love Story';
  const hindiText = 'आपकी प्रेम कहानी को सहेजना';

  useEffect(() => {
    // Clear any existing intervals/timeouts when component unmounts or language changes
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  useEffect(() => {
    setIsTyping(true);
    setDisplayText('');
    
    const currentText = headingLanguage === 'english' ? englishText : hindiText;
    let index = 0;
    
    // Clear any existing interval
    if (intervalRef.current) clearInterval(intervalRef.current);
    
    // Start typing animation
    intervalRef.current = setInterval(() => {
      if (index < currentText.length) {
        setDisplayText(prev => prev + currentText.charAt(index));
        index++;
      } else {
        // Typing finished
        if (intervalRef.current) clearInterval(intervalRef.current);
        setIsTyping(false);
        
        // Wait 5 seconds before switching language (changed from 20 seconds)
        timeoutRef.current = setTimeout(() => {
          setHeadingLanguage(prev => prev === 'english' ? 'hindi' : 'english');
        }, 5000);
      }
    }, 100); // Speed of typing
    
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [headingLanguage]);

  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      
      {/* Hero Section with video option */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-rich-black/60 z-10" />
        
        {/* Option for video background - uncomment to use */}
        {/*
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="your-video-url.mp4" type="video/mp4" />
        </video>
        */}
        
        {/* Image background */}
        <img
          src="https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
          alt="Wedding couple"
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        <div className="container-custom relative z-20 text-center px-6">
          <AnimatedSection className="space-y-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-sans font-bold min-h-[calc(1.5em)]">
              {displayText}{isTyping && <span className="animate-pulse">|</span>}
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              Exquisite wedding photography and videography that preserves your special moments forever
            </p>
            
            {/* Modified Location Badges - Removed "Available in" text */}
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              {['Jharkhand', 'Bihar', 'Uttar Pradesh'].map((state) => (
                <Badge 
                  key={state} 
                  className="bg-soft-white/20 hover:bg-soft-white/30 backdrop-blur-sm text-white border-none px-4 py-2 text-sm shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <MapPin className="w-3.5 h-3.5 mr-1 text-brown-300" /> {state}
                </Badge>
              ))}
            </div>
            
            <button className="mt-8 px-8 py-4 bg-brown-500 text-white rounded-full font-medium hover:bg-white hover:text-rich-black transition-colors duration-300 flex items-center mx-auto">
              Book Your Date <Heart className="ml-2 w-5 h-5" />
            </button>
          </AnimatedSection>
        </div>
      </section>

      {/* Wedding Services Section */}
      <section id="wedding" className="section bg-white py-24">
        <AnimatedSection className="container-custom">
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-center mb-16">Wedding Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Camera className="w-8 h-8" />,
                title: "Wedding Photography",
                description: "Beautiful, timeless photos that capture the essence of your special day",
                image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              },
              {
                icon: <Film className="w-8 h-8" />,
                title: "Cinematic Films",
                description: "Stunning wedding films that tell your unique love story",
                image: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              },
              {
                icon: <Play className="w-8 h-8" />,
                title: "Same-Day Edits",
                description: "Share highlights of your wedding day with guests at the reception",
                image: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              }
            ].map((service, index) => (
              <div key={index} className="video-card p-0 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <div className="text-brown-500 mb-4">{service.icon}</div>
                  <h3 className="text-xl font-sans font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* Locations Section */}
      <section className="section bg-brown-100/50 py-20">
        <AnimatedSection className="container-custom">
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-center mb-6">Available Locations</h2>
          <p className="text-center text-gray-700 max-w-2xl mx-auto mb-12">
            Our premium wedding photography and videography services are available in these regions
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                state: "Jharkhand",
                image: "/click.jpg",
                cities: "Koderma, Hazaribagh, Giridih, Ranchi, Jamshedpur, Dhanbad, Bokaro"
              },
              {
                state: "Bihar",
                image: "/click2.jpg",
                cities: "Patna, Gaya, Bhagalpur, Muzaffarpur"
              },
              {
                state: "Uttar Pradesh",
                image: "/click2.jpg",
                cities: "Lucknow, Varanasi, Agra, Prayagraj"
              }
            ].map((location, index) => (
              <div key={index} className="location-card bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={location.image} 
                    alt={`${location.state} weddings`} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                    <div className="p-4 text-white">
                      <h3 className="font-sans font-bold text-xl flex items-center">
                        <MapPin className="w-5 h-5 mr-2" /> {location.state}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-gray-700">
                    <span className="font-medium">Available in:</span> {location.cities}
                  </p>
                  <a href="#contact" className="mt-3 inline-flex items-center text-brown-500 hover:gap-2 transition-all">
                    Book in {location.state} <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* Equipment Section */}
      <section className="section bg-white py-20">
        <AnimatedSection className="container-custom">
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-center mb-6">Professional Equipment</h2>
          <p className="text-center text-gray-700 max-w-2xl mx-auto mb-12">
            We use only top-tier professional equipment to ensure the highest quality results
          </p>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="/camera.webp" 
                alt="Nikon Z50 Mark 2" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
              <div className="absolute -bottom-4 -right-4 bg-brown-500 text-white p-4 rounded-lg shadow-lg">
                <Aperture className="w-6 h-6" />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-brown-500 mb-4">Nikon Z50 Mark 2</h3>
              <p className="text-gray-700 mb-4">
                Our primary camera of choice is the revolutionary Nikon Z50 Mark 2, offering unparalleled image quality and reliability for wedding photography and videography.
              </p>
              <ul className="space-y-3">
                {[
                  "20.9MP DX-format CMOS sensor for stunning detail",
                  "4K Ultra HD video with rich color gradation",
                  "125-51,200 ISO range for exceptional low-light performance",
                  "Fast, accurate autofocus for capturing fleeting moments",
                  "Weather-sealed construction for outdoor ceremonies"
                ].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="mr-2 mt-1 text-brown-500">•</div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 p-4 bg-soft-white rounded-lg border border-brown-200">
                <p className="italic text-gray-600">
                  "The Nikon Z50 Mark 2 allows us to capture the authentic emotions of your special day with exceptional clarity and beautiful color rendition."
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Team Section */}
      <section className="section bg-brown-100/30 py-24">
        <AnimatedSection className="container-custom">
          <div className="flex items-center justify-center mb-12">
            <Users className="w-8 h-8 text-brown-500 mr-3" />
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-center">Meet Our Team</h2>
          </div>
          <p className="text-center text-gray-700 max-w-2xl mx-auto mb-16">
            Our talented team of professionals is dedicated to capturing your special moments with creativity and passion
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Suraj Kumar",
                role: "Lead Photographer",
                bio: "With over 8 years of wedding photography experience, Suraj brings an artistic eye and calm presence to every shoot.",
                image: "suraj.webp"
              },
              {
                name: "Shambhu Sharan Pandit",
                role: "Cinematographer",
                bio: "Shambhu specializes in cinematic storytelling, capturing the emotions and candid moments that make each wedding unique.",
                image: "shambhu.webp"
              },
              {
                name: "Gautam Pandit",
                role: "Engineer Specialist",
                bio: "Gautam creates breathtaking aerial footage and sweeping views that add a spectacular dimension to your wedding memories.",
                image: "gautam.webp"
              },
            ].map((member, index) => (
              <Card key={index} className="overflow-hidden bg-white hover:shadow-lg transition-all duration-300">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Avatar className="w-12 h-12 border-2 border-brown-300">
                      <AvatarImage src={member.image} alt={member.name} />
                      <AvatarFallback className="bg-brown-200">{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-bold text-lg">{member.name}</h3>
                      <p className="text-brown-500 text-sm">{member.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* Portfolio Preview */}
      <section id="portfolio" className="section bg-soft-white py-24">
        <AnimatedSection className="container-custom">
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-center mb-16">Wedding Portfolio</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                img: "/click.jpg",
                title: "Sarah & Michael",
                desc: "Beach Wedding"
              },
              {
                img: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                title: "Emily & James",
                desc: "Garden Ceremony"
              },
              {
                img: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                title: "Jessica & David",
                desc: "Rustic Barn"
              },
              {
                img: "/click.jpg",
                title: "Anna & Thomas",
                desc: "City Wedding"
              },
              {
                img: "/click.jpg",
                title: "Olivia & William",
                desc: "Forest Elopement"
              },
              {
                img: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                title: "Grace & Robert",
                desc: "Vineyard Ceremony"
              }
            ].map((item, index) => (
              <div key={index} className="video-card group overflow-hidden">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 text-white">
                      <h3 className="font-sans font-bold text-lg">{item.title}</h3>
                      <p className="text-white/80 text-sm">{item.desc}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-sans font-bold text-lg mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                  <a href="#" className="inline-flex items-center text-brown-500 mt-3 group-hover:gap-2 transition-all">
                    View Gallery <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* About Section */}
      <section id="about" className="section bg-white py-24">
        <AnimatedSection className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="/suraj.webp" 
                alt="Photographer at work" 
                className="rounded-lg shadow-xl relative z-10"
              />
              <div className="absolute -bottom-4 -right-4 w-48 h-48 overflow-hidden rounded-lg border-4 border-white shadow-lg z-20 hidden md:block">
                <img 
                  src="/sura1.webp" 
                  alt="Wedding camera setup" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-sans font-bold mb-6">About The Wedding Click</h2>
              <p className="text-gray-700 mb-4">
                With over 10 years of experience capturing wedding moments, The Wedding Click specializes in creating timeless memories for couples on their special day.
              </p>
              <p className="text-gray-700 mb-6">
                Our approach combines documentary-style candid photography with cinematic storytelling to create a complete narrative of your wedding journey.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-soft-white p-4 rounded-lg">
                  <h3 className="text-2xl font-sans font-bold text-brown-500">250+</h3>
                  <p className="text-gray-600">Weddings Captured</p>
                </div>
                <div className="bg-soft-white p-4 rounded-lg">
                  <h3 className="text-2xl font-sans font-bold text-brown-500">100%</h3>
                  <p className="text-gray-600">Happy Couples</p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="section bg-rich-black text-white py-24" style={{
        backgroundImage: "linear-gradient(rgba(26, 26, 26, 0.8), rgba(26, 26, 26, 0.8)), url('https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}>
        <AnimatedSection className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-sans font-bold mb-6">Ready to Book Your Wedding?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-white/80">
            Let's create beautiful memories together. Contact us to check availability for your wedding date.
          </p>
          <button className="px-8 py-4 bg-brown-500 text-white rounded-full font-medium hover:bg-white hover:text-rich-black transition-colors duration-300">
            Schedule Consultation
          </button>
        </AnimatedSection>
      </section>

      {/* Footer */}
      <footer className="bg-off-black text-white py-12">
        <div className="container-custom px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 text-2xl font-sans font-bold mb-6 md:mb-0">
              <div className="bg-brown-500 rounded-full p-2">
                <Video className="w-6 h-6 text-white" />
              </div>
              <span>The Wedding Click</span>
            </div>
            <div className="flex gap-8">
              {['Privacy', 'Terms', 'Contact'].map((item) => (
                <a key={item} href="#" className="text-sm text-white/80 hover:text-brown-300 transition-colors">
                  {item}
                </a>
              ))}
            </div>
          </div>
          {/* Social Media Icons */}
        <div className="flex justify-center mt-6 space-x-4">
          <a href="#" className="text-white/80 hover:text-brown-300 transition-colors text-lg">
            <FaFacebookF />
          </a>
          <a href="#" className="text-white/80 hover:text-brown-300 transition-colors text-lg">
            <FaTwitter />
          </a>
          <a href="#" className="text-white/80 hover:text-brown-300 transition-colors text-lg">
            <FaInstagram />
          </a>
          <a href="#" className="text-white/80 hover:text-brown-300 transition-colors text-lg">
            <FaYoutube />
          </a>
        </div>
          <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm text-white/60">
            © {new Date().getFullYear()} The Wedding Click. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
