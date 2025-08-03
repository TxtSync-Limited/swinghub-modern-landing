import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EducationHub from "@/components/EducationHub";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, BookOpen, Users } from "lucide-react";

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
            Your comprehensive resource center for lifestyle education, safety tips, and community insights.
          </p>
        </div>
      </section>

      {/* Education Hub Component */}
      <EducationHub />

      {/* Additional Learning Resources */}
      <section className="w-full py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
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
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Video Tutorials</h3>
              <p className="text-muted-foreground">
                Step-by-step video guides to help you make the most of your SwingHub experience.
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