import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  GraduationCap, 
  BookOpen, 
  Users, 
  Play, 
  Youtube, 
  Podcast, 
  Newspaper, 
  TrendingUp,
  Clock,
  ExternalLink,
  Sparkles,
  University
} from "lucide-react";
import podcastImage from "@/assets/podcast.png";
import universityImage from "@/assets/university.png";

const latestEpisodes = [
  {
    title: "Navigating Your First Lifestyle Event",
    duration: "42 min",
    date: "Dec 15, 2024",
    description: "Essential tips for newcomers attending their first swinging event"
  },
  {
    title: "Communication in Open Relationships",
    duration: "38 min", 
    date: "Dec 8, 2024",
    description: "Building trust and setting boundaries with your partner"
  },
  {
    title: "Safety First: Digital Privacy in the Lifestyle",
    duration: "35 min",
    date: "Dec 1, 2024", 
    description: "Protecting your identity and personal information online"
  }
];

const discoverContent = [
  {
    category: "Latest News",
    title: "SwingHub Launches New Privacy Features",
    excerpt: "Enhanced privacy controls give users more power over their data and visibility.",
    readTime: "3 min read",
    isNew: true
  },
  {
    category: "Lifestyle Guide",
    title: "The Ultimate Guide to Swinging Etiquette",
    excerpt: "Master the unwritten rules and social norms of the swinging community.",
    readTime: "8 min read",
    isNew: false
  },
  {
    category: "Community Story",
    title: "From Curious to Confident: Sarah & Mark's Journey",
    excerpt: "How one couple discovered the lifestyle and built lasting connections.",
    readTime: "5 min read",
    isNew: true
  },
  {
    category: "Safety Guide",
    title: "Digital Safety in the Modern Lifestyle",
    excerpt: "Protecting your privacy and staying safe in online lifestyle communities.",
    readTime: "6 min read",
    isNew: false
  },
  {
    category: "Lifestyle News",
    title: "2024 Lifestyle Trends and Statistics",
    excerpt: "What the data tells us about the evolving swinging community.",
    readTime: "4 min read",
    isNew: true
  },
  {
    category: "Expert Guide",
    title: "Building Confidence for Lifestyle Beginners",
    excerpt: "Expert advice on overcoming nervousness and building self-assurance.",
    readTime: "7 min read",
    isNew: false
  }
];

const EducationHubPage = () => {
  return (
    <div className="min-h-screen bg-gradient-primary">
      <Header />
      
      {/* Hero Section */}
      <section className="w-full pt-32 pb-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 px-4 py-2 rounded-full font-medium">
            <GraduationCap className="w-4 h-4 mr-2" />
            Education Hub
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground">
            Learn. Grow. 
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent"> Connect.</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your comprehensive resource center for lifestyle education, podcasts, news, and the revolutionary SwingHub University.
          </p>
        </div>
      </section>

      {/* Podcast Showcase Section */}
      <section className="w-full py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              The SwingHub Podcast
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real conversations about the lifestyle, featuring expert guests and community stories
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Podcast Hero */}
            <div className="space-y-6">
              <div className="relative">
                <img 
                  src={podcastImage} 
                  alt="SwingHub Podcast" 
                  className="w-full max-w-md mx-auto lg:mx-0 rounded-2xl shadow-premium"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
              
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Button className="bg-red-600 hover:bg-red-700 text-white">
                  <Youtube className="w-4 h-4 mr-2" />
                  Watch on YouTube
                </Button>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  <Podcast className="w-4 h-4 mr-2" />
                  Listen on Spotify
                </Button>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Apple Podcasts
                </Button>
              </div>
            </div>

            {/* Latest Episodes */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">Latest Episodes</h3>
              <div className="space-y-4">
                {latestEpisodes.map((episode, index) => (
                  <Card key={index} className="p-6 bg-gradient-card border border-white/20 hover-lift transition-smooth">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                        <Play className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1 space-y-2">
                        <h4 className="font-semibold text-foreground">{episode.title}</h4>
                        <p className="text-sm text-muted-foreground">{episode.description}</p>
                        <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Clock className="w-3 h-3" />
                            <span>{episode.duration}</span>
                          </div>
                          <span>{episode.date}</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Discover Section */}
      <section className="w-full py-16 px-6 lg:px-8 bg-gradient-card">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Sparkles className="w-6 h-6 text-primary" />
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Discover
              </h2>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Stay updated with the latest lifestyle content, news, guides, and community insights
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {discoverContent.map((content, index) => (
              <Card key={index} className="p-6 bg-gradient-primary border border-white/20 hover-lift transition-smooth">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Badge 
                      variant="secondary" 
                      className="bg-primary/10 text-primary border-primary/20 text-xs"
                    >
                      {content.category}
                    </Badge>
                    {content.isNew && (
                      <Badge className="bg-green-500/20 text-green-400 border-green-500/30 text-xs">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        New
                      </Badge>
                    )}
                  </div>
                  
                  <h3 className="text-lg font-semibold text-foreground leading-tight">
                    {content.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm">
                    {content.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-xs text-muted-foreground">{content.readTime}</span>
                    <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
                      Read More
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SwingHub University Section */}
      <section className="w-full py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-4">
                <University className="w-8 h-8 text-primary" />
                <Badge className="bg-primary text-primary-foreground px-3 py-1">
                  Coming Soon
                </Badge>
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                SwingHub University
              </h2>
              
              <p className="text-xl text-muted-foreground">
                The comprehensive learning platform designed to guide you through every aspect of the lifestyle. 
                From beginner basics to advanced relationship dynamics, SwingHub University will be your 
                trusted educational companion.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Structured learning paths for all experience levels</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Expert-led courses and masterclasses</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Interactive workshops and community discussions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Certification programs and achievement badges</span>
                </div>
              </div>
              
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Get Early Access
              </Button>
            </div>
            
            <div className="relative">
              <img 
                src={universityImage} 
                alt="SwingHub University" 
                className="w-full rounded-2xl shadow-premium"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Learning Resources */}
      <section className="w-full py-16 px-6 lg:px-8 bg-gradient-card">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              More Ways to Learn
            </h2>
            <p className="text-xl text-muted-foreground">
              Explore different formats and topics to enhance your lifestyle journey
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-2xl flex items-center justify-center mx-auto shadow-xl">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Expert Articles</h3>
              <p className="text-muted-foreground">
                In-depth articles written by lifestyle experts and community leaders to guide your journey.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-2xl flex items-center justify-center mx-auto shadow-xl">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Community Stories</h3>
              <p className="text-muted-foreground">
                Real experiences and insights shared by our vibrant community members.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-2xl flex items-center justify-center mx-auto shadow-xl">
                <Newspaper className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Weekly Newsletter</h3>
              <p className="text-muted-foreground">
                Stay informed with curated lifestyle news, tips, and community highlights delivered weekly.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EducationHubPage;