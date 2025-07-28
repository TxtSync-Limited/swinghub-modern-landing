import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mic, GraduationCap, Compass } from "lucide-react";
import podcastImage from "@/assets/podcast.png";
import universityImage from "@/assets/university.png";
import discoverImage from "@/assets/discover.png";

const educationItems = [
  {
    icon: Mic,
    title: "SwingHub Podcast",
    description: "Weekly episodes featuring lifestyle experts, relationship advice, and community stories",
    image: podcastImage,
    color: "bg-purple-500"
  },
  {
    icon: GraduationCap,
    title: "SwingHub University", 
    description: "Comprehensive courses on communication, consent, and navigating the lifestyle safely",
    image: universityImage,
    color: "bg-blue-500"
  },
  {
    icon: Compass,
    title: "SwingHub Discover",
    description: "Explore articles, guides, and resources to enhance your lifestyle journey",
    image: discoverImage,
    color: "bg-emerald-500"
  }
];

const EducationHub = () => {
  return (
    <section className="w-full py-16 lg:py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
            Education Hub
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Learn, grow, and explore with confidence through our comprehensive educational resources
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {educationItems.map((item, index) => (
            <Card key={index} className="group overflow-hidden bg-gradient-card shadow-card hover-lift border border-white/50 rounded-2xl">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-smooth group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className={`absolute top-4 left-4 w-12 h-12 ${item.color} rounded-lg flex items-center justify-center shadow-card`}>
                  <item.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
                <Button 
                  variant="outline" 
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
                >
                  Learn More
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationHub;