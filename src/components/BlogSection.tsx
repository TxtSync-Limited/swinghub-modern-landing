import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock, User, Tag } from "lucide-react";
import blogLifestyleTips from "@/assets/blog-lifestyle-tips.jpg";
import blogCommunityEvents from "@/assets/blog-community-events.jpg";
import blogSafetyGuide from "@/assets/blog-safety-guide.jpg";

const blogPosts = [
  {
    id: 1,
    title: "5 Essential Tips for New Lifestyle Explorers",
    description: "Starting your journey in the lifestyle? Our comprehensive guide covers everything from setting boundaries to finding the right community for you.",
    image: blogLifestyleTips,
    category: "Lifestyle Tips",
    author: "Sarah & Mike",
    date: "2 days ago",
    readTime: "5 min read",
    featured: true
  },
  {
    id: 2,
    title: "Building Connections: The Art of Lifestyle Networking",
    description: "Learn how to make meaningful connections in the lifestyle community while maintaining authenticity and respect for everyone involved.",
    image: blogCommunityEvents,
    category: "Community",
    author: "The SwingHub Team",
    date: "1 week ago",
    readTime: "7 min read",
    featured: false
  },
  {
    id: 3,
    title: "Your Complete Safety Guide for Online Lifestyle Dating",
    description: "Stay safe while exploring online connections. Our expert-backed safety tips will help you navigate the digital lifestyle world with confidence.",
    image: blogSafetyGuide,
    category: "Safety",
    author: "Dr. Emma Williams",
    date: "2 weeks ago",
    readTime: "8 min read",
    featured: false
  }
];

const BlogSection = () => {
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <section className="w-full py-16 lg:py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 px-4 py-2 rounded-full font-medium">
            Latest News
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
            Lifestyle Insights & Community News
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay informed with expert advice, community stories, and the latest updates from the lifestyle world.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Featured Article */}
          {featuredPost && (
            <Card className="lg:col-span-2 group overflow-hidden bg-gradient-card shadow-premium hover-lift border border-white/50 rounded-3xl transition-all duration-500">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="w-full h-full object-cover transition-smooth group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                
                {/* Featured Badge */}
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary text-primary-foreground px-3 py-1 text-sm font-semibold">
                    Featured
                  </Badge>
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <Badge variant="outline" className="border-white/50 text-white bg-black/30 backdrop-blur-sm px-3 py-1 text-sm">
                    {featuredPost.category}
                  </Badge>
                </div>

              </div>
              
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {featuredPost.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {featuredPost.description}
                </p>
                
                {/* Meta Info */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {featuredPost.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {featuredPost.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {featuredPost.readTime}
                  </div>
                </div>
                
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group-hover:shadow-card">
                  Read Full Article
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </Card>
          )}

          {/* Regular Articles */}
          <div className="space-y-6">
            {regularPosts.map((post) => (
              <Card key={post.id} className="group overflow-hidden bg-gradient-card shadow-card hover-lift border border-white/50 rounded-2xl transition-all duration-500">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-smooth group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge variant="outline" className="border-white/50 text-white bg-black/30 backdrop-blur-sm px-3 py-1 text-sm">
                      <Tag className="w-3 h-3 mr-1" />
                      {post.category}
                    </Badge>
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {post.description}
                  </p>
                  
                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {post.author}
                      </span>
                      <span>{post.date}</span>
                    </div>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </span>
                  </div>
                  
                  <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    Read Article
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            View All Articles
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;