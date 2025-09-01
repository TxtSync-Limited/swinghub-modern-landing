import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { 
  Handshake, 
  Shield, 
  Users, 
  TrendingUp, 
  Globe, 
  Award, 
  CheckCircle,
  Star,
  Building,
  Zap,
  Lock,
  Heart,
  Target,
  Rocket,
  Mail,
  ArrowRight,
  Cloud,
  Server,
  CreditCard,
  Verified,
  MapPin,
  Phone,
  ExternalLink,
  Calendar,
  Clock,
  X
} from "lucide-react";
import logoAws from "@/assets/logo-aws.png";
import logoGoogleCloud from "@/assets/logo-google-cloud.png";
import logoLovehoney from "@/assets/logo-lovehoney.png";
import logoOffenders from "@/assets/logo-offenders.png";
import logoVeriff from "@/assets/logo-veriff.png";
import logoAllguard from "@/assets/logo-allguard.png";
import venuePlaceholder from "@/assets/venue-placeholder.jpg";

const currentPartners = [
  {
    name: "Amazon Web Services",
    logo: logoAws,
    category: "Cloud Infrastructure",
    description: "Powering our scalable, secure cloud infrastructure"
  },
  {
    name: "Google Cloud",
    logo: logoGoogleCloud,
    category: "Cloud Services",
    description: "Advanced analytics and machine learning capabilities"
  },
  {
    name: "LoveHoney",
    logo: logoLovehoney,
    category: "Lifestyle Brand",
    description: "Trusted lifestyle brand partnership for community benefits"
  },
  {
    name: "Offenders.org.uk",
    logo: logoOffenders,
    category: "Safety Verification",
    description: "Background verification services for enhanced safety"
  },
  {
    name: "Veriff",
    logo: logoVeriff,
    category: "Identity Verification",
    description: "Advanced identity verification and fraud prevention"
  },
  {
    name: "AllGuard",
    logo: logoAllguard,
    category: "Security Solutions",
    description: "Comprehensive security and protection services"
  }
];

const partnershipTypes = [
  {
    icon: Cloud,
    title: "Technology Partners",
    description: "Cloud providers, security services, and tech infrastructure partners",
    benefits: ["Enhanced platform performance", "Advanced security features", "Scalable infrastructure"],
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: Shield,
    title: "Safety & Security",
    description: "Background checks, identity verification, and safety service providers",
    benefits: ["Verified member profiles", "Enhanced safety measures", "Fraud prevention"],
    color: "from-red-500 to-red-600"
  },
  {
    icon: Heart,
    title: "Lifestyle Brands",
    description: "Trusted lifestyle brands offering exclusive benefits to our community",
    benefits: ["Member discounts", "Exclusive products", "Special events"],
    color: "from-pink-500 to-pink-600"
  },
  {
    icon: Building,
    title: "Venue Partners",
    description: "Clubs, resorts, and event venues for community gatherings",
    benefits: ["Exclusive venue access", "Member rates", "Private events"],
    color: "from-green-500 to-green-600"
  }
];

const partnerBenefits = [
  {
    icon: Users,
    title: "Access to 50,000+ Members",
    description: "Connect with our engaged, verified community of lifestyle enthusiasts"
  },
  {
    icon: TrendingUp,
    title: "Business Growth",
    description: "Expand your reach and grow your business through our platform"
  },
  {
    icon: Award,
    title: "Brand Recognition",
    description: "Gain visibility and credibility within the lifestyle community"
  },
  {
    icon: Handshake,
    title: "Mutual Support",
    description: "Collaborative partnerships that benefit both parties and our members"
  },
  {
    icon: Target,
    title: "Targeted Marketing",
    description: "Reach your ideal audience through our targeted marketing opportunities"
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Expand internationally with our growing global community"
  }
];

const partnershipStats = [
  { icon: Building, number: "25+", label: "Active Partners" },
  { icon: Users, number: "50K+", label: "Members Reached" },
  { icon: Globe, number: "25+", label: "Countries" },
  { icon: TrendingUp, number: "300%", label: "Partner Growth" }
];

// Enhanced venue data with modal information
const venueData = [
  {
    name: "The Garden Club",
    location: "London, UK",
    category: "Private Members Club",
    image: venuePlaceholder,
    description: "Exclusive private club offering luxury amenities and discrete lifestyle experiences.",
    features: ["Private Rooms", "Bar & Restaurant", "Couples Events"],
    rating: 4.8,
    memberDiscount: "20% off membership",
    fullDescription: "The Garden Club is London's premier private members club, offering an exclusive and sophisticated environment for lifestyle enthusiasts. Our beautifully appointed facilities include private rooms, a full-service bar and restaurant, and regular couples events in a discrete and welcoming atmosphere.",
    amenities: ["Private Rooms", "Full Bar", "Restaurant", "Event Spaces", "Parking", "Security"],
    gallery: [venuePlaceholder, venuePlaceholder, venuePlaceholder],
    contact: {
      phone: "+44 20 7123 4567",
      email: "info@thegardenclub.co.uk",
      website: "https://thegardenclub.co.uk"
    },
    openingHours: {
      weekdays: "7:00 PM - 2:00 AM",
      weekends: "8:00 PM - 3:00 AM"
    },
    specialOffers: ["SwingHub Members: 20% off annual membership", "Complimentary welcome drink", "Priority booking for events"]
  },
  {
    name: "Sanctuary Resort",
    location: "Brighton, UK", 
    category: "Lifestyle Resort",
    image: venuePlaceholder,
    description: "Beachfront resort catering to lifestyle couples with themed weekends and events.",
    features: ["Spa Services", "Beach Access", "Event Hosting"],
    rating: 4.9,
    memberDiscount: "15% off bookings",
    fullDescription: "Nestled on Brighton's beautiful coastline, Sanctuary Resort offers the perfect blend of luxury and lifestyle experiences. Our beachfront location provides stunning sea views while our comprehensive spa services and event hosting capabilities make us the ideal destination for lifestyle couples.",
    amenities: ["Spa & Wellness", "Beach Access", "Event Spaces", "Restaurant", "Pool", "Fitness Center"],
    gallery: [venuePlaceholder, venuePlaceholder, venuePlaceholder],
    contact: {
      phone: "+44 12 3456 7890",
      email: "bookings@sanctuaryresort.co.uk", 
      website: "https://sanctuaryresort.co.uk"
    },
    openingHours: {
      weekdays: "24/7 Resort Access",
      weekends: "24/7 Resort Access"
    },
    specialOffers: ["SwingHub Members: 15% off all bookings", "Complimentary spa consultation", "Late checkout included"]
  },
  {
    name: "Club Velvet",
    location: "Manchester, UK",
    category: "Social Club", 
    image: venuePlaceholder,
    description: "Modern social club with premium facilities and regular community events.",
    features: ["Dance Floor", "VIP Areas", "Regular Events"],
    rating: 4.7,
    memberDiscount: "Free entry with membership",
    fullDescription: "Club Velvet represents the pinnacle of Manchester's social scene, offering a modern and sophisticated environment for lifestyle enthusiasts. Our state-of-the-art facilities include an expansive dance floor, exclusive VIP areas, and regular community events that bring together like-minded individuals.",
    amenities: ["Dance Floor", "VIP Lounges", "Full Bar", "Sound System", "Lighting", "Coat Check"],
    gallery: [venuePlaceholder, venuePlaceholder, venuePlaceholder],
    contact: {
      phone: "+44 16 1234 5678",
      email: "events@clubvelvet.co.uk",
      website: "https://clubvelvet.co.uk"
    },
    openingHours: {
      weekdays: "Closed Monday-Wednesday", 
      weekends: "9:00 PM - 3:00 AM"
    },
    specialOffers: ["SwingHub Members: Free entry", "Discounted drinks all night", "VIP area access"]
  },
  {
    name: "Paradise Retreat",
    location: "Birmingham, UK",
    category: "Wellness Center",
    image: venuePlaceholder,
    description: "Holistic wellness center offering couples therapy and relationship workshops.",
    features: ["Wellness Programs", "Couples Therapy", "Workshops"],
    rating: 4.8,
    memberDiscount: "25% off sessions",
    fullDescription: "Paradise Retreat is Birmingham's leading wellness center specializing in relationship enhancement and couples therapy. Our holistic approach combines traditional therapy techniques with modern wellness practices to help couples strengthen their bonds and explore new dimensions of their relationships.",
    amenities: ["Therapy Rooms", "Workshop Spaces", "Relaxation Areas", "Refreshments", "Parking", "Reception"],
    gallery: [venuePlaceholder, venuePlaceholder, venuePlaceholder],
    contact: {
      phone: "+44 12 1234 5678",
      email: "sessions@paradiseretreat.co.uk",
      website: "https://paradiseretreat.co.uk"
    },
    openingHours: {
      weekdays: "9:00 AM - 8:00 PM",
      weekends: "10:00 AM - 6:00 PM"
    },
    specialOffers: ["SwingHub Members: 25% off all sessions", "Free initial consultation", "Couples packages available"]
  },
  {
    name: "The Hideaway",
    location: "Edinburgh, UK",
    category: "Boutique Hotel",
    image: venuePlaceholder,
    description: "Intimate boutique hotel with lifestyle-friendly amenities and discrete service.",
    features: ["Luxury Suites", "Room Service", "Concierge"],
    rating: 4.9,
    memberDiscount: "10% off stays",
    fullDescription: "The Hideaway offers an intimate and luxurious boutique hotel experience in the heart of Edinburgh. Our discretely located property features beautifully appointed suites, personalized concierge service, and amenities designed specifically for lifestyle couples seeking privacy and comfort.",
    amenities: ["Luxury Suites", "24/7 Room Service", "Concierge", "Private Dining", "Spa Services", "Valet Parking"],
    gallery: [venuePlaceholder, venuePlaceholder, venuePlaceholder],
    contact: {
      phone: "+44 13 1234 5678",
      email: "reservations@thehideaway.co.uk",
      website: "https://thehideaway.co.uk"
    },
    openingHours: {
      weekdays: "24/7 Hotel Service",
      weekends: "24/7 Hotel Service"
    },
    specialOffers: ["SwingHub Members: 10% off stays", "Complimentary room upgrade", "Late checkout included"]
  },
  {
    name: "Elements Club",
    location: "Leeds, UK",
    category: "Entertainment Venue",
    image: venuePlaceholder,
    description: "Contemporary venue hosting lifestyle events with modern facilities and atmosphere.",
    features: ["Event Space", "Full Bar", "Entertainment"],
    rating: 4.6,
    memberDiscount: "Members-only events", 
    fullDescription: "Elements Club is Leeds' premier entertainment venue for the lifestyle community. Our contemporary design and modern facilities create the perfect atmosphere for hosting exclusive events, private parties, and community gatherings in a sophisticated and welcoming environment.",
    amenities: ["Event Spaces", "Full Bar", "Entertainment Systems", "Catering", "Parking", "Security"],
    gallery: [venuePlaceholder, venuePlaceholder, venuePlaceholder],
    contact: {
      phone: "+44 11 3123 4567",
      email: "events@elementsclub.co.uk",
      website: "https://elementsclub.co.uk"
    },
    openingHours: {
      weekdays: "Event-based opening",
      weekends: "8:00 PM - 2:00 AM"
    },
    specialOffers: ["SwingHub Members: Exclusive event access", "Discounted private hire", "Complimentary canapes"]
  }
];

const VenueModal = ({ venue, isOpen, onClose }) => {
  if (!venue) return null;
  
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold flex items-center gap-2">
            <Building className="w-6 h-6 text-primary" />
            {venue.name}
          </DialogTitle>
          <DialogDescription className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="w-4 h-4" />
            {venue.location} • {venue.category}
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Main Image */}
          <div className="relative h-64 rounded-lg overflow-hidden">
            <img 
              src={venue.image} 
              alt={venue.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4 flex items-center gap-2">
              <div className="flex items-center gap-1 bg-background/90 backdrop-blur-sm rounded-full px-3 py-1">
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <span className="text-sm font-semibold">{venue.rating}</span>
              </div>
              <Badge className="bg-primary text-primary-foreground">{venue.category}</Badge>
            </div>
          </div>
          
          {/* Description */}
          <div>
            <h3 className="text-lg font-semibold mb-2">About {venue.name}</h3>
            <p className="text-muted-foreground leading-relaxed">{venue.fullDescription}</p>
          </div>
          
          {/* Special Offer */}
          <Card className="p-4 bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800">
            <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">SwingHub Member Benefits</h4>
            <div className="space-y-1">
              {venue.specialOffers.map((offer, index) => (
                <div key={index} className="flex items-center gap-2 text-green-700 dark:text-green-300 text-sm">
                  <CheckCircle className="w-4 h-4 flex-shrink-0" />
                  <span>{offer}</span>
                </div>
              ))}
            </div>
          </Card>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Amenities */}
            <div>
              <h4 className="font-semibold mb-3">Amenities & Facilities</h4>
              <div className="grid grid-cols-2 gap-2">
                {venue.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-3 h-3 text-primary flex-shrink-0" />
                    {amenity}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Opening Hours */}
            <div>
              <h4 className="font-semibold mb-3">Opening Hours</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <div>
                    <div className="font-medium">Weekdays</div>
                    <div className="text-muted-foreground">{venue.openingHours.weekdays}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  <div>
                    <div className="font-medium">Weekends</div>
                    <div className="text-muted-foreground">{venue.openingHours.weekends}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Information */}
          <Card className="p-4">
            <h4 className="font-semibold mb-3">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-sm">{venue.contact.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-sm">{venue.contact.email}</span>
              </div>
              <div className="flex items-center gap-3">
                <ExternalLink className="w-4 h-4 text-primary" />
                <a 
                  href={venue.contact.website} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline"
                >
                  {venue.contact.website}
                </a>
              </div>
            </div>
          </Card>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button className="flex-1">
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
            <Button variant="outline" className="flex-1">
              <Mail className="w-4 h-4 mr-2" />
              Send Email
            </Button>
            <Button variant="outline" className="flex-1" asChild>
              <a href={venue.contact.website} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Visit Website
              </a>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const Partners = () => {
  const [selectedVenue, setSelectedVenue] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const openVenueModal = (venue) => {
    setSelectedVenue(venue);
    setIsModalOpen(true);
  };
  
  const closeVenueModal = () => {
    setIsModalOpen(false);
    setSelectedVenue(null);
  };
  return (
    <div className="min-h-screen bg-gradient-primary">
      <Header />
      
      {/* Hero Section */}
      <section className="w-full pt-32 pb-16 px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center space-y-6 relative z-10">
          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 px-4 py-2 rounded-full font-medium animate-fade-in">
            <Handshake className="w-4 h-4 mr-2" />
            Partnership Network
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground animate-fade-in" style={{animationDelay: '0.1s'}}>
            Building the Future 
            <span className="bg-gradient-to-r from-blue-600 to-pink-500 bg-clip-text text-transparent"> Together</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto animate-fade-in leading-relaxed" style={{animationDelay: '0.2s'}}>
            We partner with the world's leading companies to deliver exceptional experiences, enhanced safety, 
            and innovative solutions for our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{animationDelay: '0.3s'}}>
            <Button size="lg" className="bg-gradient-to-r from-primary to-primary-glow hover:from-primary/90 hover:to-primary-glow/90 text-primary-foreground font-semibold shadow-xl">
              <Handshake className="w-5 h-5 mr-2" />
              Become a Partner
            </Button>
            <Button variant="outline" size="lg" className="border-primary/30 text-foreground bg-background/80 hover:bg-accent/80 backdrop-blur-sm shadow-lg">
              <Mail className="w-5 h-5 mr-2" />
              Contact Partnerships
            </Button>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary-glow/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '3s'}}></div>
      </section>

      {/* Partnership Stats */}
      <section className="w-full py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnershipStats.map((stat, index) => (
              <Card 
                key={index} 
                className="group p-8 text-center bg-gradient-card backdrop-blur-md border border-white/20 rounded-2xl shadow-xl hover-lift animate-fade-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-2xl flex items-center justify-center mx-auto shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-pink-500 bg-clip-text text-transparent">
                      {stat.number}
                    </div>
                    <p className="text-muted-foreground font-medium">
                      {stat.label}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Current Partners */}
      <section className="w-full py-24 px-6 lg:px-8 bg-gradient-to-r from-primary/5 to-primary-glow/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 px-4 py-2 rounded-full font-medium">
              <Star className="w-4 h-4 mr-2" />
              Trusted Partners
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
              Industry-Leading Partners
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We work with the best companies in the world to ensure our platform remains secure, reliable, and innovative.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentPartners.map((partner, index) => (
              <Card 
                key={index} 
                className="group p-8 bg-gradient-card backdrop-blur-md border border-white/20 rounded-2xl shadow-xl hover-lift transition-all duration-300 hover:border-primary/30 animate-fade-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-center h-20">
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      className="max-h-full max-w-full object-contain filter group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <div className="space-y-3 text-center">
                    <Badge variant="outline" className="border-primary/30 text-primary bg-primary/5">
                      {partner.category}
                    </Badge>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {partner.name}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {partner.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="w-full py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
              Partnership Opportunities
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore different ways to collaborate with SwingHub and provide value to our community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {partnershipTypes.map((type, index) => (
              <Card 
                key={index} 
                className="group relative p-8 bg-gradient-card backdrop-blur-md border border-white/20 rounded-2xl shadow-xl hover-lift transition-all duration-300 hover:border-primary/30 animate-fade-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="space-y-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${type.color} rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                    <type.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {type.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {type.description}
                    </p>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-foreground">Key Benefits:</h4>
                      <ul className="space-y-1">
                        {type.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center gap-2 text-muted-foreground text-sm">
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${type.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500 pointer-events-none`}></div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Benefits */}
      <section className="w-full py-24 px-6 lg:px-8 bg-gradient-to-r from-primary/5 to-primary-glow/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 px-4 py-2 rounded-full font-medium">
              <Award className="w-4 h-4 mr-2" />
              Partner Benefits
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
              Why Partner with SwingHub?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join our partnership network and unlock exclusive benefits for your business and our community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partnerBenefits.map((benefit, index) => (
              <Card 
                key={index} 
                className="group p-6 bg-gradient-card backdrop-blur-md border border-white/20 rounded-2xl shadow-xl hover-lift animate-fade-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="space-y-4 text-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-glow rounded-2xl flex items-center justify-center mx-auto shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Process */}
      <section className="w-full py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
              How to Become a Partner
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our partnership process is designed to ensure mutual success and value for our community.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Initial Contact", description: "Reach out to our partnerships team with your proposal" },
              { step: "2", title: "Evaluation", description: "We assess alignment with our values and community needs" },
              { step: "3", title: "Proposal", description: "Develop a customized partnership proposal and agreement" },
              { step: "4", title: "Launch", description: "Go live with full support from our team" }
            ].map((step, index) => (
              <Card 
                key={index} 
                className="group p-6 text-center bg-gradient-card backdrop-blur-md border border-white/20 rounded-2xl shadow-xl hover-lift animate-fade-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center mx-auto shadow-xl text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                    {step.step}
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Venues Section */}
      <section className="w-full py-24 px-6 lg:px-8 bg-gradient-to-r from-primary/5 to-primary-glow/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 px-4 py-2 rounded-full font-medium">
              <Building className="w-4 h-4 mr-2" />
              Featured Venues
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
              Discover Partner Venues
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore exclusive venues and clubs that welcome our community with special offers and member benefits.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {venueData.map((venue, index) => (
              <Card 
                key={index} 
                className="group relative overflow-hidden bg-gradient-card backdrop-blur-md border border-white/20 rounded-2xl shadow-xl hover-lift transition-all duration-300 hover:border-primary/30 cursor-pointer animate-fade-in"
                style={{animationDelay: `${index * 0.1}s`}}
                onClick={() => openVenueModal(venue)}
              >
                {/* Venue Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={venue.image} 
                    alt={venue.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Category Badge */}
                  <Badge className="absolute top-3 left-3 bg-primary/90 text-primary-foreground">
                    {venue.category}
                  </Badge>
                  
                  {/* Rating */}
                  <div className="absolute top-3 right-3 flex items-center gap-1 bg-background/80 backdrop-blur-sm rounded-full px-2 py-1">
                    <Star className="w-3 h-3 text-yellow-500 fill-current" />
                    <span className="text-xs font-semibold text-foreground">{venue.rating}</span>
                  </div>
                  
                  {/* Member Discount */}
                  <div className="absolute bottom-3 left-3 bg-green-500/90 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {venue.memberDiscount}
                  </div>
                </div>

                {/* Venue Details */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-1">
                      {venue.name}
                    </h3>
                    <p className="text-muted-foreground text-sm flex items-center gap-1">
                      <Building className="w-3 h-3" />
                      {venue.location}
                    </p>
                  </div>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {venue.description}
                  </p>
                  
                  {/* Features */}
                  <div className="space-y-2">
                    <p className="text-foreground font-semibold text-sm">Features:</p>
                    <div className="flex flex-wrap gap-1">
                      {venue.features.map((feature, featureIndex) => (
                        <Badge 
                          key={featureIndex} 
                          variant="outline" 
                          className="text-xs border-primary/30 text-primary bg-primary/5"
                        >
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  {/* Action Button */}
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full mt-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  >
                    <ArrowRight className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary-glow/10 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500 pointer-events-none"></div>
              </Card>
            ))}
          </div>
          
          {/* View All Venues Button */}
          <div className="text-center mt-12">
            <Button size="lg" className="bg-gradient-to-r from-primary to-primary-glow hover:from-primary/90 hover:to-primary-glow/90 text-primary-foreground font-semibold">
              <Building className="w-5 h-5 mr-2" />
              Explore All Partner Venues
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Card className="relative bg-gradient-card backdrop-blur-md border border-white/20 p-8 lg:p-12 rounded-3xl shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary-glow/10 rounded-3xl"></div>
            
            <div className="relative text-center space-y-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Ready to Partner with Us?
              </h2>
              
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
                Join our growing network of partners and help us build the future of lifestyle connections. 
                Together, we can create exceptional experiences for our community.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-primary to-primary-glow hover:from-primary/90 hover:to-primary-glow/90 text-primary-foreground font-semibold shadow-xl">
                  <Rocket className="w-5 h-5 mr-2" />
                  Start Partnership Discussion
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                
                <Button variant="outline" size="lg" className="border-primary/30 text-foreground bg-background/80 hover:bg-accent/80 backdrop-blur-sm shadow-lg">
                  <Mail className="w-5 h-5 mr-2" />
                  partnerships@swinghub.com
                </Button>
              </div>
            </div>

            {/* Floating Background Elements */}
            <div className="absolute top-6 right-6 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-6 left-6 w-16 h-16 bg-primary-glow/10 rounded-full blur-lg animate-pulse" style={{animationDelay: '2s'}}></div>
          </Card>
        </div>
      </section>

      {/* Venue Modal */}
      <VenueModal 
        venue={selectedVenue}
        isOpen={isModalOpen}
        onClose={closeVenueModal}
      />

      <Footer />
    </div>
  );
};

export default Partners;