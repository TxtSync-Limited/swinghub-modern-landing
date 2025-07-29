import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mic, GraduationCap, Compass, Play, ArrowRight, Clock, Users, Star } from "lucide-react";
import podcastImage from "@/assets/podcast.jpeg";
import universityImage from "@/assets/university.png";
import discoverImage from "@/assets/discover.png";

const educationItems = [
  {
    icon: Mic,
    title: "The SwingHub Podcast",
    description: "Hosts Gage & Olivia share stories, laughs, and lifestyle insights with honesty and heart.",
    image: podcastImage,
    color: "from-slate-500 to-grey-500",
    status: "Listen Now",
    featured: true
  },
  {
    icon: GraduationCap,
    title: "SwingHub University", 
    description: "Bite-sized videos on app features, profile building, etiquette, and staying safe.",
    image: universityImage,
    color: "from-slate-500 to-grey-500",
    status: "Coming Soon",
    featured: false
  },
  {
    icon: Compass,
    title: "SwingHub Discover",
    description: "Handpicked articles, club news, and expert content to keep you informed and empowered.",
    image: discoverImage,
    color: "from-slate-500 to-grey-500",
    status: "Discover Now",
    featured: false
  }
];

const EducationHub = () => {
  return (
    <section className="w-full py-16 lg:py-24 px-6 lg:px-8 bg-gradient-primary overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-20">
          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 px-4 py-2 rounded-full font-medium">
            <GraduationCap className="w-4 h-4 mr-2" />
            Education Hub
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
            Education Hub: Learn. Laugh. Connect.
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore SwingHub's knowledge zone packed with resources to elevate your lifestyle experience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {educationItems.map((item, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden bg-white/10 backdrop-blur-md shadow-2xl hover-lift border border-white/20 rounded-3xl transition-all duration-500 h-full flex flex-col animate-fade-in
              h-[320px]"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              {/* Background Image with Overlay */}
              <div className="relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-smooth group-hover:scale-105"
                />
                
                {/* Featured Badge */}
                {item.featured && (
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary/90 text-primary-foreground px-3 py-1 text-sm font-semibold backdrop-blur-sm border border-primary/20 shadow-lg">
                      <Star className="w-3 h-3 mr-1" />
                      Featured
                    </Badge>
                  </div>
                )}

                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <Badge className={`${item.status === 'Coming Soon' ? 'bg-orange-500/90' : 'bg-green-500/90'} text-white px-3 py-1 text-sm font-semibold backdrop-blur-sm border ${item.status === 'Coming Soon' ? 'border-orange-400/20' : 'border-green-400/20'} shadow-lg`}>
                    {item.status}
                  </Badge>
                </div>

                {/* Gradient Icon */}
                {/* <div className={`absolute bottom-6 left-6 w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center shadow-xl backdrop-blur-sm border border-white/20 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div> */}
              </div>
              
              {/* Content Section */}
              <div className="p-6 space-y-4 flex-1 flex flex-col
              absolute bottom-0 left-0 right-0">

                
                {/* Action Button */}
                <div className="space-y-3">
                  {item.status === 'Coming Soon' ? (
                    <Button 
                      variant="outline" 
                      className="w-full border-muted text-muted-foreground bg-background/80 hover:bg-accent/80 backdrop-blur-sm shadow-lg"
                      disabled
                    >
                      <Clock className="w-4 h-4 mr-2" />
                      Coming Soon
                    </Button>
                  ) : (
                    <Button 
                      className="w-full bg-gradient-to-r from-primary to-primary-glow hover:from-primary/90 hover:to-primary-glow/90 text-primary-foreground font-semibold shadow-xl backdrop-blur-sm border border-primary/20 group-hover:shadow-2xl transition-all duration-300"
                    >
                      {item.status === 'Listen Now' ? (
                        <>
                          <Play className="w-4 h-4 mr-2" />
                          Listen Now
                        </>
                      ) : (
                        <>
                          <Compass className="w-4 h-4 mr-2" />
                          Discover Now
                        </>
                      )}
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  )}                  
                  
                </div>
              </div>

              {/* Decorative Glow Effect */}
              {/* <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-5 rounded-3xl pointer-events-none group-hover:opacity-10 transition-opacity duration-500`}></div> */}
            </Card>
          ))}
        </div>

        {/* Bottom Section with Enhanced CTA */}
        <div className="mt-16">
          <Card className="relative bg-gradient-card backdrop-blur-md border border-white/20 p-8 lg:p-12 rounded-3xl shadow-2xl overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary-glow/10 rounded-3xl"></div>
            
            <div className="relative text-center space-y-6">
              <div className="inline-flex items-center gap-2 bg-primary/90 text-primary-foreground px-6 py-3 rounded-full backdrop-blur-sm border border-primary/30 shadow-lg">
                <Users className="w-5 h-5" />
                <span className="font-semibold">Join 15,000+ Learners</span>
              </div>
              
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground">
                Ready to Level Up Your Lifestyle Knowledge?
              </h3>
              
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Access our complete library of educational content, from beginner guides to advanced lifestyle strategies. Learn from experts and community leaders.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-primary to-primary-glow hover:from-primary/90 hover:to-primary-glow/90 text-primary-foreground font-semibold shadow-xl">
                  <Play className="w-5 h-5 mr-2" />
                  Start Learning Today
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                
                <Button variant="outline" size="lg" className="border-primary/30 text-foreground bg-background/80 hover:bg-accent/80 backdrop-blur-sm shadow-lg">
                  <GraduationCap className="w-5 h-5 mr-2" />
                  View All Resources
                </Button>
              </div>
            </div>

            {/* Floating Background Elements */}
            <div className="absolute top-6 right-6 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-6 left-6 w-16 h-16 bg-primary-glow/10 rounded-full blur-lg animate-pulse" style={{animationDelay: '2s'}}></div>
          </Card>
        </div>

        {/* Floating Background Elements for Section */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary-glow/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '3s'}}></div>
      </div>
    </section>
  );
};

export default EducationHub;