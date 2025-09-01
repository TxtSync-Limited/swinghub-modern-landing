import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FeatureGridSection from "@/components/FeatureGridSection";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Smartphone, 
  Zap, 
  Shield, 
  Users, 
  MessageSquare, 
  MapPin, 
  Video, 
  Calendar, 
  Camera, 
  Bell, 
  Lock, 
  Verified, 
  Search, 
  Globe, 
  Heart, 
  Star, 
  Gift, 
  UserCheck, 
  Filter, 
  Settings,
  Crown,
  CheckCircle,
  Eye,
  Mail,
  Bookmark,
  Share2,
  Navigation,
  AlertTriangle,
  Play,
  FileText,
  BarChart3,
  Headphones,
  Download
} from "lucide-react";

const featureCategories = [
  {
    title: "Discovery & Matching",
    description: "Find your perfect connections with intelligent matching",
    icon: Search,
    color: "from-blue-500 to-blue-600",
    features: [
      { icon: MapPin, title: "Who's Near Me", description: "Discover like-minded individuals in your area with real-time location" },
      { icon: Search, title: "Advanced Search", description: "Filter by age, location, interests, and lifestyle preferences" },
      { icon: Filter, title: "Smart Filters", description: "AI-powered filtering based on compatibility and preferences" },
      { icon: Globe, title: "Teleport Feature", description: "Connect with people worldwide and explore global connections" },
      { icon: Eye, title: "Viewed Me", description: "See who's been checking out your profile and showing interest" },
      { icon: Users, title: "Couple Matching", description: "Specialized matching for couples seeking other couples" },
      { icon: Star, title: "Compatibility Score", description: "See how compatible you are with potential matches" },
      { icon: Navigation, title: "Nearby Events", description: "Discover lifestyle events and gatherings in your area" }
    ]
  },
  {
    title: "Communication",
    description: "Connect and chat with confidence",
    icon: MessageSquare,
    color: "from-green-500 to-green-600",
    features: [
      { icon: MessageSquare, title: "Instant Messaging", description: "Real-time chat with enhanced privacy controls" },
      { icon: Video, title: "Video Chat", description: "Secure video calls to connect face-to-face safely" },
      { icon: Camera, title: "Photo Sharing", description: "Share photos privately with approval controls" },
      { icon: Gift, title: "Virtual Gifts", description: "Send virtual gifts to show interest and appreciation" },
      { icon: Mail, title: "Winks & Flirts", description: "Light ways to show interest without commitment" },
      { icon: Play, title: "Voice Messages", description: "Send voice notes for more personal communication" },
      { icon: Bell, title: "Read Receipts", description: "Know when your messages have been seen" },
      { icon: Share2, title: "Story Sharing", description: "Share moments through disappearing stories" }
    ]
  },
  {
    title: "Profile & Verification",
    description: "Build trust with verified, authentic profiles",
    icon: UserCheck,
    color: "from-purple-500 to-purple-600",
    features: [
      { icon: Verified, title: "Profile Verification", description: "Multi-step verification process for authentic profiles" },
      { icon: Camera, title: "Photo Verification", description: "Real-time photo verification to confirm identity" },
      { icon: CheckCircle, title: "Badge System", description: "Earn badges for profile completeness and community participation" },
      { icon: FileText, title: "Detailed Profiles", description: "Comprehensive profile builder with lifestyle preferences" },
      { icon: Crown, title: "Couple Profiles", description: "Joint profiles for couples with individual verification" },
      { icon: BarChart3, title: "Profile Analytics", description: "See who viewed your profile and engagement stats" },
      { icon: Settings, title: "Privacy Controls", description: "Granular privacy settings for photos and information" },
      { icon: Bookmark, title: "Profile Collections", description: "Save and organize interesting profiles" }
    ]
  },
  {
    title: "Safety & Privacy",
    description: "Your security is our top priority",
    icon: Shield,
    color: "from-red-500 to-red-600",
    features: [
      { icon: Shield, title: "Background Checks", description: "Optional background verification for added safety" },
      { icon: Lock, title: "End-to-End Encryption", description: "All messages and calls are fully encrypted" },
      { icon: AlertTriangle, title: "Report & Block", description: "Comprehensive reporting system with quick blocking" },
      { icon: Eye, title: "Private Mode", description: "Browse profiles anonymously when needed" },
      { icon: Settings, title: "Visibility Controls", description: "Control who can see your profile and when" },
      { icon: UserCheck, title: "Manual Approval", description: "Admin review of all profiles before activation" },
      { icon: Bell, title: "Safety Alerts", description: "Real-time notifications about safety updates" },
      { icon: FileText, title: "Safety Resources", description: "Comprehensive safety guides and tips" }
    ]
  },
  {
    title: "Events & Community",
    description: "Join a vibrant lifestyle community",
    icon: Calendar,
    color: "from-orange-500 to-orange-600",
    features: [
      { icon: Calendar, title: "Event Calendar", description: "Discover and join lifestyle events near you" },
      { icon: Users, title: "Community Groups", description: "Join groups based on interests and location" },
      { icon: Video, title: "Meet Now", description: "Find people ready to meet up instantly" },
      { icon: MapPin, title: "Venue Reviews", description: "Read and write reviews of lifestyle venues" },
      { icon: Bell, title: "Event Notifications", description: "Get notified about events you might be interested in" },
      { icon: Star, title: "Event Ratings", description: "Rate and review events you've attended" },
      { icon: Users, title: "Group Chat", description: "Chat with event attendees before and after" },
      { icon: Calendar, title: "Private Events", description: "Host your own private gatherings and parties" }
    ]
  },
  {
    title: "Premium Features",
    description: "Unlock the full SwingHub experience",
    icon: Crown,
    color: "from-yellow-500 to-yellow-600",
    features: [
      { icon: Crown, title: "Premium Membership", description: "Unlock all features with premium subscription" },
      { icon: Search, title: "Advanced Filters", description: "More detailed search and filtering options" },
      { icon: Eye, title: "See Who Liked You", description: "View all profiles that have shown interest" },
      { icon: MessageSquare, title: "Unlimited Messaging", description: "Send unlimited messages to any member" },
      { icon: Star, title: "Priority Support", description: "Get priority customer support and assistance" },
      { icon: Bell, title: "Read Receipts", description: "See when your messages are read by recipients" },
      { icon: Users, title: "Guest List Access", description: "See guest lists for exclusive events" },
      { icon: Crown, title: "Profile Boost", description: "Get more visibility with profile boosting" }
    ]
  }
];

const mobileFeatures = [
  { icon: Download, title: "Native Mobile Apps", description: "iOS and Android apps with full functionality" },
  { icon: Bell, title: "Push Notifications", description: "Real-time notifications for messages and matches" },
  { icon: MapPin, title: "Location Services", description: "GPS-based matching and event discovery" },
  { icon: Camera, title: "Instant Photo Upload", description: "Quick photo sharing directly from your camera" },
  { icon: Video, title: "Mobile Video Chat", description: "High-quality video calls optimized for mobile" },
  { icon: Settings, title: "Offline Mode", description: "Browse profiles and messages even without internet" }
];

const Features = () => {
  return (
    <div className="min-h-screen bg-gradient-primary">
      <Header />
      
      {/* Hero Section */}
      <section className="w-full pt-32 pb-16 px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center space-y-6 relative z-10">
          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 px-4 py-2 rounded-full font-medium animate-fade-in">
            <Smartphone className="w-4 h-4 mr-2" />
            Complete Feature Suite
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground animate-fade-in" style={{animationDelay: '0.1s'}}>
            Everything You Need for 
            <span className="bg-gradient-to-r from-blue-600 to-pink-500 bg-clip-text text-transparent"> Safe Connections</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>
            Discover the most comprehensive feature set designed specifically for the lifestyle community, with safety and authenticity at the core.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{animationDelay: '0.3s'}}>
            <Button size="lg" className="bg-gradient-to-r from-primary to-primary-glow hover:from-primary/90 hover:to-primary-glow/90 text-primary-foreground font-semibold shadow-xl">
              Explore All Features
            </Button>
            <Button variant="outline" size="lg" className="border-primary/30 text-foreground bg-background/80 hover:bg-accent/80 backdrop-blur-sm shadow-lg">
              Try Premium Free
            </Button>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary-glow/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '3s'}}></div>
      </section>

      {/* Core Features Grid */}
      <FeatureGridSection />

      {/* Detailed Feature Categories */}
      <section className="w-full py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-20">
          {featureCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-12 animate-fade-in" style={{animationDelay: `${categoryIndex * 0.1}s`}}>
              {/* Category Header */}
              <div className="text-center space-y-4">
                <div className={`inline-flex items-center gap-3 bg-gradient-to-r ${category.color} text-white px-6 py-3 rounded-full shadow-xl`}>
                  <category.icon className="w-6 h-6" />
                  <span className="font-semibold text-lg">{category.title}</span>
                </div>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  {category.description}
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.features.map((feature, featureIndex) => (
                  <Card 
                    key={featureIndex} 
                    className="group relative p-6 bg-gradient-card backdrop-blur-md border border-white/20 rounded-2xl shadow-xl hover-lift transition-all duration-300 hover:border-primary/30"
                    style={{animationDelay: `${categoryIndex * 0.1 + featureIndex * 0.05}s`}}
                  >
                    <div className="space-y-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      
                      <div className="space-y-2">
                        <h3 className="font-semibold text-foreground text-lg group-hover:text-primary transition-colors">
                          {feature.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>

                    {/* Hover Glow Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500 pointer-events-none`}></div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mobile Experience Section */}
      <section className="w-full py-16 px-6 lg:px-8 bg-gradient-to-r from-primary/5 to-primary-glow/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 px-4 py-2 rounded-full font-medium">
              <Smartphone className="w-4 h-4 mr-2" />
              Mobile Experience
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
              Designed for Mobile First
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Every feature optimized for the best mobile experience, whether you're at home or on the go.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mobileFeatures.map((feature, index) => (
              <Card 
                key={index} 
                className="group p-6 bg-gradient-card backdrop-blur-md border border-white/20 rounded-2xl shadow-xl hover-lift animate-fade-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="space-y-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-glow rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Card className="relative bg-gradient-card backdrop-blur-md border border-white/20 p-8 lg:p-12 rounded-3xl shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary-glow/10 rounded-3xl"></div>
            
            <div className="relative grid md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-pink-500 bg-clip-text text-transparent">
                  50+
                </div>
                <p className="text-muted-foreground font-medium">Core Features</p>
              </div>
              
              <div className="space-y-2">
                <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-pink-500 bg-clip-text text-transparent">
                  24/7
                </div>
                <p className="text-muted-foreground font-medium">Safety Monitoring</p>
              </div>
              
              <div className="space-y-2">
                <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-pink-500 bg-clip-text text-transparent">
                  99.9%
                </div>
                <p className="text-muted-foreground font-medium">Uptime Guarantee</p>
              </div>
              
              <div className="space-y-2">
                <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-pink-500 bg-clip-text text-transparent">
                  256
                </div>
                <p className="text-muted-foreground font-medium">Bit Encryption</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Features;