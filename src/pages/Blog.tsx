
import { Camera, Video, MapPin, ArrowRight } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';
import BlogPostCard from '@/components/BlogPostCard';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const locations = [
    "Ballia City", "Bairia", "Reoti", "Sikandarpur", "Bansdih", 
    "Belthara Road", "Rasra", "Sahatwar", "Maniyar", "Chitbara Gaon"
  ];

  const blogPosts = [
    {
      id: 1,
      title: "The Serene Ghats of Ballia",
      excerpt: "Explore the beautiful riverside ghats where we captured stunning pre-wedding photos with the Ganges as a backdrop.",
      image: "/click.jpg",
      category: "Photography",
      location: "Ballia City",
      date: "May 15, 2023"
    },
    {
      id: 2,
      title: "Traditional Wedding in Bairia",
      excerpt: "A showcase of our recent traditional wedding shoot capturing the rich cultural heritage of Eastern UP.",
      image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1000&auto=format&fit=crop",
      category: "Videography",
      location: "Bairia",
      date: "June 2, 2023"
    },
    {
      id: 3,
      title: "Reoti's Cultural Festival",
      excerpt: "Vibrant colors and celebrations at the annual cultural festival in Reoti that we had the privilege to document.",
      image: "https://images.unsplash.com/photo-1472653525502-fc569e405a74?q=80&w=1000&auto=format&fit=crop",
      category: "Photography",
      location: "Reoti",
      date: "March 20, 2023"
    },
    {
      id: 4,
      title: "Sunset by the River at Sikandarpur",
      excerpt: "Capturing the magical sunset colors by the river - perfect for couple photoshoots and pre-wedding sessions.",
      image: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?q=80&w=1000&auto=format&fit=crop",
      category: "Photography",
      location: "Sikandarpur",
      date: "April 10, 2023"
    },
    {
      id: 5,
      title: "Temple Architecture of Bansdih",
      excerpt: "Documenting the intricate temple architecture and historical monuments that make for stunning backdrops.",
      image: "https://images.unsplash.com/photo-1591620241635-4f17eed1eed1?q=80&w=1000&auto=format&fit=crop",
      category: "Photography",
      location: "Bansdih",
      date: "July 8, 2023"
    },
    {
      id: 6,
      title: "Wedding Trailer - Belthara Road",
      excerpt: "Behind the scenes of shooting a cinematic wedding trailer that captured the couple's beautiful journey.",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1000&auto=format&fit=crop",
      category: "Videography",
      location: "Belthara Road", 
      date: "February 27, 2023"
    }
  ];

  const filteredPosts = selectedCategory 
    ? blogPosts.filter(post => 
        post.category === selectedCategory || 
        post.location === selectedCategory)
    : blogPosts;

  return (
    <div className="min-h-screen bg-soft-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-brown-500/90 to-brown-800/90 text-white py-24">
        <div className="container-custom px-4">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display mb-4 text-center">
              Our Photography Journey in Koderma
            </h1>
            <p className="text-lg md:text-xl text-center max-w-3xl mx-auto mb-8 text-brown-100">
              Capturing the beauty, culture and special moments throughout Eastern Jharkhand
            </p>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Filters */}
      <section className="py-12 px-6">
        <div className="container-custom">
          <div className="mb-10">
            <AnimatedSection>
              <h2 className="text-2xl md:text-3xl font-display mb-6 text-center">Explore Our Stories</h2>
              
              <div className="flex flex-wrap justify-center gap-3 mb-4">
                <Button 
                  variant={selectedCategory === null ? "default" : "outline"} 
                  onClick={() => setSelectedCategory(null)}
                  className="mb-2"
                >
                  All
                </Button>
                <Button 
                  variant={selectedCategory === "Photography" ? "default" : "outline"} 
                  onClick={() => setSelectedCategory("Photography")}
                  className="mb-2"
                >
                  <Camera className="mr-2" size={18} />
                  Photography
                </Button>
                <Button 
                  variant={selectedCategory === "Videography" ? "default" : "outline"} 
                  onClick={() => setSelectedCategory("Videography")}
                  className="mb-2"
                >
                  <Video className="mr-2" size={18} />
                  Videography
                </Button>
              </div>
              
              <div className="flex flex-wrap justify-center gap-2 mt-6">
                <span className="text-sm text-muted-foreground mr-2 mt-1">Locations:</span>
                {locations.map(location => (
                  <Badge 
                    key={location}
                    variant={selectedCategory === location ? "default" : "outline"}
                    className="cursor-pointer hover:bg-accent-brown/20 transition-colors"
                    onClick={() => setSelectedCategory(selectedCategory === location ? null : location)}
                  >
                    <MapPin size={12} className="mr-1" />
                    {location}
                  </Badge>
                ))}
              </div>
            </AnimatedSection>
          </div>
          
          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map(post => (
              <AnimatedSection key={post.id} delay={post.id * 100}>
                <BlogPostCard post={post} />
              </AnimatedSection>
            ))}
          </div>
          
          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No posts found for this category. Please try another filter.</p>
            </div>
          )}
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-gradient-to-r from-brown-500/80 to-brown-800/80 py-16 text-white">
        <div className="container-custom px-4">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-display mb-4">Ready to Capture Your Special Moments?</h2>
              <p className="mb-8 text-brown-100">Book a photography or videography session with us and preserve your memories from anywhere in Ballia and surrounding areas.</p>
              <Button size="lg" className="bg-white text-brown-800 hover:bg-brown-100">
                Contact Us <ArrowRight className="ml-2" />
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Blog;
