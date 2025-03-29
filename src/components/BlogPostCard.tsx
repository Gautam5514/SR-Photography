
import { Camera, Video, MapPin, Calendar, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  location: string;
  date: string;
}

interface BlogPostCardProps {
  post: BlogPost;
}

const BlogPostCard = ({ post }: BlogPostCardProps) => {
  return (
    <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px] flex flex-col">
      <div className="h-56 overflow-hidden relative">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <Badge className="absolute top-4 right-4 bg-brown-500/90 text-white border-none">
          {post.category === "Photography" ? (
            <Camera size={14} className="mr-1" />
          ) : (
            <Video size={14} className="mr-1" />
          )}
          {post.category}
        </Badge>
      </div>
      
      <CardHeader className="pb-2">
        <div className="flex gap-2 items-center mb-2">
          <Badge variant="outline" className="text-xs bg-brown-100/30">
            <MapPin size={12} className="mr-1" />
            {post.location}
          </Badge>
          <Badge variant="outline" className="text-xs bg-brown-100/30">
            <Calendar size={12} className="mr-1" />
            {post.date}
          </Badge>
        </div>
        <CardTitle className="text-xl font-display">{post.title}</CardTitle>
      </CardHeader>
      
      <CardContent className="flex-grow">
        <p className="text-muted-foreground">{post.excerpt}</p>
      </CardContent>
      
      <CardFooter className="pt-0">
        <Link to={`/blog/${post.id}`}>
          <Button variant="ghost" className="p-0 hover:bg-transparent hover:text-brown-600 flex items-center text-brown-500">
            Read more <ArrowRight size={16} className="ml-1" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default BlogPostCard;
