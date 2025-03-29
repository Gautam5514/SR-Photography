
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Camera, Video, MapPin, Calendar, Clock, Share2, Heart, MessageSquare, User, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/Navbar';
import AnimatedSection from '@/components/AnimatedSection';
import { Link } from 'react-router-dom';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string[];
  image: string;
  gallery: string[];
  category: string;
  location: string;
  date: string;
  author: string;
  readTime: string;
}

const blogPostsData: BlogPost[] = [
  {
    id: 1,
    title: "The Serene Ghats of Ballia",
    excerpt: "Explore the beautiful riverside ghats where we captured stunning pre-wedding photos with the Ganges as a backdrop.",
    content: [
      "The ghats of Ballia offer a serene and picturesque backdrop for photography that captures the essence of Eastern Uttar Pradesh. As the sun rises over the Ganges, the golden light creates a magical atmosphere perfect for pre-wedding photoshoots and portraits.",
      "Our recent pre-wedding photoshoot at these ghats showcased how the natural beauty of Ballia can transform ordinary moments into extraordinary memories. The couple wanted to incorporate the cultural heritage of their hometown, and the ghats provided the perfect setting.",
      "When planning a photoshoot at the ghats, we recommend early morning sessions to capture the soft golden light or evening sessions to catch the breathtaking sunset. The reflection of colorful boats and traditional ceremonies on the water adds depth and cultural context to every frame.",
      "Beyond pre-wedding shoots, the ghats are perfect for family portraits, especially during festivals when the area comes alive with lights and celebrations. Our photography packages for ghat photoshoots include drone coverage to capture the magnificent expanse of the river alongside intimate portraits."
    ],
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=1000&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1598128558203-95ff50057422?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583939411023-c2b87b7fde93?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1506038634487-60a69ae4b7b1?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1510924199351-4e9d94df18a6?q=80&w=1000&auto=format&fit=crop"
    ],
    category: "Photography",
    location: "Ballia City",
    date: "May 15, 2023",
    author: "Rahul Sharma",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "Traditional Wedding in Bairia",
    excerpt: "A showcase of our recent traditional wedding shoot capturing the rich cultural heritage of Eastern UP.",
    content: [
      "Bairia, a historic town in Ballia district, provides a rich cultural backdrop for wedding videography that truly captures the essence of Eastern UP traditions. Our recent wedding shoot in this charming locale allowed us to document ceremonies that have been preserved for generations.",
      "Working with local families, we've developed an approach that respects traditional customs while incorporating modern cinematic techniques. Our latest wedding film from Bairia showcases how we balance traditional documentation of ceremonies with artistic storytelling that engages viewers.",
      "The vibrant colors of traditional attire, the emotional moments between family members, and the intricate rituals all come together in our wedding films. We use a combination of static cameras, gimbals, and drone footage to capture every perspective of these elaborate celebrations.",
      "Beyond simply recording events, our wedding videography aims to tell the unique story of each couple. We spend time understanding family traditions and personal stories, ensuring that the final film reflects not just the event, but the heritage and relationships that make each wedding unique to Bairia and its cultural landscape."
    ],
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1000&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1513278974582-3e1b4a4fa5e5?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1530712375291-b5b4e5576578?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1574871786514-46eaebb4ee26?q=80&w=1000&auto=format&fit=crop"
    ],
    category: "Videography",
    location: "Bairia",
    date: "June 2, 2023",
    author: "Anjali Patel",
    readTime: "6 min read"
  },
  {
    id: 3,
    title: "Reoti's Cultural Festival",
    excerpt: "Vibrant colors and celebrations at the annual cultural festival in Reoti that we had the privilege to document.",
    content: [
      "The annual cultural festival in Reoti is a photographer's paradise, with its explosion of colors, traditional performances, and authentic village celebrations. Our team was honored to document this year's festivities, capturing moments that showcase the vibrant heritage of this region.",
      "Festival photography requires a special approach to capture both the grand scale of celebrations and the intimate human moments that make these events meaningful. Our coverage of Reoti's festival balanced wide-angle shots of processions and crowds with close-up portraits that reveal the emotion and dedication behind the celebrations.",
      "Color plays a crucial role in festival photography in this region, and we've developed post-processing techniques that preserve the authentic vibrancy while creating a consistent visual narrative throughout our gallery. The red of sindoor, yellow of marigolds, and countless other hues create a tapestry that tells the story of Reoti's cultural identity.",
      "For families looking to document their participation in local festivals, we offer special packages that follow your family throughout the celebrations, creating a personal record within the context of community traditions. These packages include both photography and short-form video content perfect for social media sharing."
    ],
    image: "https://images.unsplash.com/photo-1472653525502-fc569e405a74?q=80&w=1000&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1604696533648-8b8554cb9f7b?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523251343397-aacc344efcb0?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600703136783-bdb5ea365239?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1514222788835-3a1a1d5b32f8?q=80&w=1000&auto=format&fit=crop"
    ],
    category: "Photography",
    location: "Reoti",
    date: "March 20, 2023",
    author: "Vikram Singh",
    readTime: "4 min read"
  },
  {
    id: 4,
    title: "Sunset by the River at Sikandarpur",
    excerpt: "Capturing the magical sunset colors by the river - perfect for couple photoshoots and pre-wedding sessions.",
    content: [
      "Sikandarpur's riverside locations offer some of the most magical sunset views in Eastern UP, creating a perfect natural backdrop for couples looking for romantic pre-wedding photographs. The golden hour light here has a quality unlike anywhere else in the region.",
      "Our recent couple photography sessions in Sikandarpur have focused on combining the natural beauty of the riverside with the authentic connection between couples. Rather than overly posed shots, we guide couples through natural interactions that showcase their relationship while the stunning backdrop enhances the mood.",
      "The technical aspects of sunset photography require specialized equipment and expertise. We use a combination of reflectors and subtle off-camera lighting to balance the dramatic skies with properly exposed subjects, ensuring that both the couple and the landscape are captured beautifully.",
      "Beyond pre-wedding sessions, Sikandarpur's sunsets make for stunning anniversary photoshoots and family portraits. We recommend booking these sessions 2-3 months in advance, as the prime sunset weeks can be reserved quickly, especially during the October-November period when the skies are particularly vibrant."
    ],
    image: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?q=80&w=1000&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1414609245224-afa02bfb3fda?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1437846972679-9e6e537be46e?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1496614932623-0a3a9743552e?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1500217052183-bc01eee1a74e?q=80&w=1000&auto=format&fit=crop"
    ],
    category: "Photography",
    location: "Sikandarpur",
    date: "April 10, 2023",
    author: "Priya Varma",
    readTime: "5 min read"
  },
  {
    id: 5,
    title: "Temple Architecture of Bansdih",
    excerpt: "Documenting the intricate temple architecture and historical monuments that make for stunning backdrops.",
    content: [
      "The ancient temples of Bansdih represent some of the finest architectural heritage in Eastern Uttar Pradesh, with structures dating back several centuries. Our architectural photography aims to document these historical treasures while also showcasing their potential as unique backdrops for portrait photography.",
      "Capturing the intricate details of temple architecture requires specialized techniques and equipment. We use tilt-shift lenses to correct perspective distortion and focus stacking to ensure that both near and distant details are crisp and clear in our architectural documentation.",
      "Beyond pure architectural studies, we've pioneered portrait sessions that thoughtfully incorporate these sacred structures. Working respectfully within cultural and religious considerations, we create portraits that connect subjects with their cultural heritage through careful composition and lighting.",
      "For families with ancestral connections to specific temples or those celebrating significant religious milestones, we offer specialized photography packages that document both the architecture and your family's connection to these important cultural sites. These sessions are particularly popular for announcement photos and milestone celebrations."
    ],
    image: "https://images.unsplash.com/photo-1591620241635-4f17eed1eed1?q=80&w=1000&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1486556813609-9ad599bf8c9d?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517178522094-037ad637a169?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1484712401471-05c7215830eb?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1490843524516-6de7f7b7f0b1?q=80&w=1000&auto=format&fit=crop"
    ],
    category: "Photography",
    location: "Bansdih",
    date: "July 8, 2023",
    author: "Ajay Kumar",
    readTime: "7 min read"
  },
  {
    id: 6,
    title: "Wedding Trailer - Belthara Road",
    excerpt: "Behind the scenes of shooting a cinematic wedding trailer that captured the couple's beautiful journey.",
    content: [
      "The charm of Belthara Road creates a perfect setting for cinematic wedding films that balance traditional documentation with modern storytelling approaches. Our recent wedding trailer from this location showcases how we capture the essence of both the place and the couple's unique journey.",
      "Modern wedding videography is about more than just recording events - it's about crafting a narrative. For this Belthara Road wedding, we began with pre-wedding interviews to understand the couple's story, incorporated family histories and traditions, and carefully selected music that reflected both their personalities and cultural background.",
      "The technical aspects of our wedding trailers involve multiple camera setups, professional audio recording, and aerial footage that establishes the location context. We use a combination of gimbal work for smooth movement, static tripod shots for stability, and handheld moments for emotional intimacy.",
      "Each wedding trailer we produce is customized to the couple's preferences, with options for length, style, and content focus. Some couples prefer highlight reels focusing on key ceremonies, while others request documentary-style coverage that includes family interviews and behind-the-scenes moments. Our packages for Belthara Road and surrounding areas are designed to accommodate these varying preferences while maintaining our signature cinematic quality."
    ],
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1000&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1619468129361-605ebea04b44?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1494986626895-873e193bff3e?q=80&w=1000&auto=format&fit=crop", 
      "https://images.unsplash.com/photo-1607861716497-e65ab29fc7ac?q=80&w=1000&auto=format&fit=crop"
    ],
    category: "Videography",
    location: "Belthara Road", 
    date: "February 27, 2023",
    author: "Deepak Gupta",
    readTime: "6 min read"
  }
];

const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  
  useEffect(() => {
    if (id) {
      const foundPost = blogPostsData.find(post => post.id === parseInt(id));
      if (foundPost) {
        setPost(foundPost);
        window.scrollTo(0, 0);
      }
    }
  }, [id]);
  
  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-display mb-4">Blog post not found</h2>
          <Link to="/blog">
            <Button>
              <ArrowLeft className="mr-2" size={16} />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-soft-white">
      <Navbar />
      
      {/* Hero Image */}
      <div className="w-full h-[50vh] md:h-[70vh] relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent z-10"></div>
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full flex items-center z-20">
          <div className="container-custom px-6">
            <AnimatedSection>
              <Link to="/blog" className="inline-flex items-center text-white/90 hover:text-white mb-4">
                <ArrowLeft size={16} className="mr-2" />
                Back to Blog
              </Link>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-display text-white mb-4 max-w-4xl">
                {post.title}
              </h1>
              <div className="flex flex-wrap gap-3">
                <Badge className="bg-brown-500/90 text-white border-none">
                  {post.category === "Photography" ? (
                    <Camera size={14} className="mr-1" />
                  ) : (
                    <Video size={14} className="mr-1" />
                  )}
                  {post.category}
                </Badge>
                <Badge variant="outline" className="text-white border-white/30 bg-black/20">
                  <MapPin size={12} className="mr-1" />
                  {post.location}
                </Badge>
                <Badge variant="outline" className="text-white border-white/30 bg-black/20">
                  <Calendar size={12} className="mr-1" />
                  {post.date}
                </Badge>
                <Badge variant="outline" className="text-white border-white/30 bg-black/20">
                  <Clock size={12} className="mr-1" />
                  {post.readTime}
                </Badge>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="container-custom px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <AnimatedSection>
              <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 rounded-full bg-brown-100 flex items-center justify-center mr-3">
                    <User size={20} className="text-brown-600" />
                  </div>
                  <div>
                    <p className="font-medium">{post.author}</p>
                    <p className="text-sm text-muted-foreground">Professional Photographer</p>
                  </div>
                </div>
                
                {post.content.map((paragraph, index) => (
                  <p key={index} className="mb-6 text-gray-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
                
                <div className="flex gap-3 mt-8">
                  <Button variant="outline" size="sm" className="gap-2">
                    <Heart size={16} />
                    Like
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Share2 size={16} />
                    Share
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2">
                    <MessageSquare size={16} />
                    Comment
                  </Button>
                </div>
              </div>
            </AnimatedSection>
            
            {/* Gallery */}
            <AnimatedSection>
              <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
                <h2 className="text-2xl font-display mb-6">Gallery</h2>
                <div className="grid grid-cols-2 gap-4">
                  {post.gallery.map((image, index) => (
                    <div key={index} className={`rounded-lg overflow-hidden ${index === 0 ? 'col-span-2' : ''}`}>
                      <img 
                        src={image} 
                        alt={`Gallery image ${index + 1}`}
                        className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <AnimatedSection>
              <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
                <h3 className="text-xl font-display mb-4">Our Services</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Camera size={16} className="mr-2 text-brown-500" />
                    <span>Wedding Photography</span>
                  </li>
                  <li className="flex items-center">
                    <Video size={16} className="mr-2 text-brown-500" />
                    <span>Cinematic Wedding Films</span>
                  </li>
                  <li className="flex items-center">
                    <Camera size={16} className="mr-2 text-brown-500" />
                    <span>Pre-Wedding Photoshoots</span>
                  </li>
                  <li className="flex items-center">
                    <Camera size={16} className="mr-2 text-brown-500" />
                    <span>Cultural Event Coverage</span>
                  </li>
                  <li className="flex items-center">
                    <Video size={16} className="mr-2 text-brown-500" />
                    <span>Corporate Video Production</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={100}>
              <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
                <h3 className="text-xl font-display mb-4">Locations We Serve</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="bg-brown-50">
                    <MapPin size={12} className="mr-1" />
                    Ballia City
                  </Badge>
                  <Badge variant="outline" className="bg-brown-50">
                    <MapPin size={12} className="mr-1" />
                    Bairia
                  </Badge>
                  <Badge variant="outline" className="bg-brown-50">
                    <MapPin size={12} className="mr-1" />
                    Reoti
                  </Badge>
                  <Badge variant="outline" className="bg-brown-50">
                    <MapPin size={12} className="mr-1" />
                    Sikandarpur
                  </Badge>
                  <Badge variant="outline" className="bg-brown-50">
                    <MapPin size={12} className="mr-1" />
                    Bansdih
                  </Badge>
                  <Badge variant="outline" className="bg-brown-50">
                    <MapPin size={12} className="mr-1" />
                    Belthara Road
                  </Badge>
                  <Badge variant="outline" className="bg-brown-50">
                    <MapPin size={12} className="mr-1" />
                    Rasra
                  </Badge>
                  <Badge variant="outline" className="bg-brown-50">
                    <MapPin size={12} className="mr-1" />
                    Sahatwar
                  </Badge>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={200}>
              <div className="bg-gradient-to-br from-brown-500 to-brown-700 text-white rounded-xl p-6">
                <h3 className="text-xl font-display mb-4">Book a Session</h3>
                <p className="mb-4 text-brown-100">Ready to capture your special moments? Contact us for availability and pricing.</p>
                <Button className="w-full bg-white text-brown-700 hover:bg-brown-100">
                  Contact Us
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
      
      {/* Related Posts */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom px-6">
          <AnimatedSection>
            <h2 className="text-3xl font-display mb-8 text-center">Other Stories You May Like</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {blogPostsData
                .filter(relatedPost => relatedPost.id !== post.id)
                .slice(0, 3)
                .map(relatedPost => (
                  <Link key={relatedPost.id} to={`/blog/${relatedPost.id}`} className="group">
                    <div className="bg-white rounded-xl overflow-hidden shadow-sm h-full transition-all duration-300 hover:shadow-md">
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={relatedPost.image} 
                          alt={relatedPost.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                        />
                      </div>
                      <div className="p-5">
                        <h3 className="font-display text-lg mb-2 group-hover:text-brown-600 transition-colors">{relatedPost.title}</h3>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <MapPin size={12} className="mr-1" />
                          <span>{relatedPost.location}</span>
                          <span className="mx-2">•</span>
                          <Calendar size={12} className="mr-1" />
                          <span>{relatedPost.date}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
