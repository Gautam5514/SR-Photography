
import { MapPin, Camera, Video, ArrowRight } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import BlogPostCard from '@/components/BlogPostCard';

// Define a BlogPost interface for type safety
interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  location: string;
  date: string;
}

const BlogListings = () => {
  // Group blog posts by location
  const blogPostsByLocation: Record<string, BlogPost[]> = {
    "Ballia City": [
      {
        id: 1,
        title: "The Serene Ghats of Ballia",
        excerpt: "Explore the beautiful riverside ghats where we captured stunning pre-wedding photos with the Ganges as a backdrop.",
        image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=1000&auto=format&fit=crop",
        category: "Photography",
        location: "Ballia City",
        date: "May 15, 2023"
      },
      {
        id: 7,
        title: "Ballia's Sunset Magic",
        excerpt: "How we used golden hour lighting to create magical engagement photos for a lovely couple.",
        image: "https://images.unsplash.com/photo-1519638399535-1b036603ac77?q=80&w=1000&auto=format&fit=crop",
        category: "Photography",
        location: "Ballia City",
        date: "August 5, 2023"
      }
    ],
    "Bairia": [
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
        id: 8,
        title: "Rural Landscapes of Bairia",
        excerpt: "Exploring the beautiful countryside and capturing timeless rural scenes for a documentary project.",
        image: "https://images.unsplash.com/photo-1474265466889-5f5d93b0d5d3?q=80&w=1000&auto=format&fit=crop",
        category: "Photography",
        location: "Bairia",
        date: "October 10, 2023"
      }
    ],
    "Reoti": [
      {
        id: 3,
        title: "Reoti's Cultural Festival",
        excerpt: "Vibrant colors and celebrations at the annual cultural festival in Reoti that we had the privilege to document.",
        image: "https://images.unsplash.com/photo-1472653525502-fc569e405a74?q=80&w=1000&auto=format&fit=crop",
        category: "Photography",
        location: "Reoti",
        date: "March 20, 2023"
      }
    ],
    "Sikandarpur": [
      {
        id: 4,
        title: "Sunset by the River at Sikandarpur",
        excerpt: "Capturing the magical sunset colors by the river - perfect for couple photoshoots and pre-wedding sessions.",
        image: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?q=80&w=1000&auto=format&fit=crop",
        category: "Photography",
        location: "Sikandarpur",
        date: "April 10, 2023"
      }
    ],
    "Bansdih": [
      {
        id: 5,
        title: "Temple Architecture of Bansdih",
        excerpt: "Documenting the intricate temple architecture and historical monuments that make for stunning backdrops.",
        image: "https://images.unsplash.com/photo-1591620241635-4f17eed1eed1?q=80&w=1000&auto=format&fit=crop",
        category: "Photography",
        location: "Bansdih",
        date: "July 8, 2023"
      }
    ],
    "Belthara Road": [
      {
        id: 6,
        title: "Wedding Trailer - Belthara Road",
        excerpt: "Behind the scenes of shooting a cinematic wedding trailer that captured the couple's beautiful journey.",
        image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1000&auto=format&fit=crop",
        category: "Videography",
        location: "Belthara Road", 
        date: "February 27, 2023"
      }
    ],
    "Rasra": [
      {
        id: 9,
        title: "Heritage Sites of Rasra",
        excerpt: "Exploring and documenting the historical landmarks and heritage sites in Rasra.",
        image: "https://images.unsplash.com/photo-1605649461111-98193cf3bea9?q=80&w=1000&auto=format&fit=crop",
        category: "Photography",
        location: "Rasra",
        date: "November 15, 2023"
      }
    ],
    "Maniyar": [
      {
        id: 10,
        title: "Wedding Celebrations in Maniyar",
        excerpt: "Capturing the joy and traditions of a beautiful wedding ceremony in Maniyar.",
        image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000&auto=format&fit=crop",
        category: "Videography",
        location: "Maniyar",
        date: "December 8, 2023"
      }
    ]
  };

  // Extract all unique locations for the navigation
  const allLocations = Object.keys(blogPostsByLocation);

  return (
    <div className="min-h-screen bg-soft-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-brown-500/90 to-brown-800/90 text-white py-24">
        <div className="container-custom px-4">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display mb-4 text-center">
              Discover Ballia Through Our Lens
            </h1>
            <p className="text-lg md:text-xl text-center max-w-3xl mx-auto mb-8 text-brown-100">
              Browse our photography and videography work from different locations throughout Ballia
            </p>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Location Navigation */}
      <section className="py-8 bg-brown-100/30">
        <div className="container-custom px-4">
          <AnimatedSection>
            <div className="flex flex-wrap justify-center gap-3 mb-4">
              <h2 className="text-xl font-display mb-4 w-full text-center">Jump to a Location</h2>
              <div className="flex flex-wrap justify-center gap-2">
                {allLocations.map(location => (
                  <a key={location} href={`#${location.replace(/\s+/g, '-').toLowerCase()}`}>
                    <Badge className="cursor-pointer px-3 py-1.5 bg-brown-500 hover:bg-brown-600 transition-colors">
                      <MapPin size={14} className="mr-1" />
                      {location}
                    </Badge>
                  </a>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Blog Posts by Location */}
      <section className="py-12 px-6">
        <div className="container-custom">
          {allLocations.map(location => (
            <AnimatedSection key={location} className="mb-16">
              <div id={location.replace(/\s+/g, '-').toLowerCase()} className="scroll-mt-24">
                <div className="flex items-center mb-6">
                  <MapPin className="text-brown-500 mr-2" size={24} />
                  <h2 className="text-2xl md:text-3xl font-display">{location}</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {blogPostsByLocation[location].map(post => (
                    <BlogPostCard key={post.id} post={post} />
                  ))}
                </div>
                
                <div className="mt-8 text-right">
                  <Link to="/blog">
                    <Button variant="outline" className="border-brown-400 text-brown-600 hover:bg-brown-100">
                      See all posts <ArrowRight size={16} className="ml-1" />
                    </Button>
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-gradient-to-r from-brown-500/80 to-brown-800/80 py-16 text-white">
        <div className="container-custom px-4">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-display mb-4">Want Us to Capture Your Special Moments?</h2>
              <p className="mb-8 text-brown-100">Book a photography or videography session with us in any location across Ballia and surrounding areas.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-white text-brown-800 hover:bg-brown-100">
                  <Camera className="mr-2" /> Photography Services
                </Button>
                <Button size="lg" className="bg-white text-brown-800 hover:bg-brown-100">
                  <Video className="mr-2" /> Videography Services
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default BlogListings;
