import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Calendar, 
  MapPin, 
  Users, 
  Clock, 
  Star, 
  Ticket, 
  ArrowRight,
  Building,
  Heart,
  Music,
  Wine,
  Camera,
  Globe,
  CheckCircle,
  Play
} from "lucide-react";
import upcomingEventVenue from "@/assets/upcoming-event-venue.jpg";

// Sample events data - in a real app this would come from an API
const nextEvent = {
  id: 1,
  title: "SwingHub Summer Gala 2024",
  subtitle: "The Ultimate Lifestyle Experience",
  date: "August 15, 2024",
  time: "7:00 PM - 2:00 AM",
  location: "The Grand Ballroom, Los Angeles",
  address: "1234 Sunset Boulevard, Los Angeles, CA 90028",
  image: upcomingEventVenue,
  price: "$125 per couple",
  earlyBird: "$95 per couple",
  capacity: 200,
  registered: 145,
  featured: true,
  description: "Join us for an unforgettable evening of elegance, connection, and celebration. Our Summer Gala features live entertainment, gourmet dining, and exclusive networking opportunities for the lifestyle community.",
  highlights: [
    "Live DJ and entertainment",
    "Premium open bar",
    "Gourmet dinner buffet",
    "VIP networking lounge",
    "Professional photography",
    "Exclusive SwingHub merchandise"
  ],
  dresscode: "Elegant cocktail attire",
  ageRequirement: "21+ only",
  status: "selling_fast"
};

const upcomingEvents = [
  {
    id: 2,
    title: "SwingHub Meet & Greet - Miami",
    date: "September 8, 2024",
    time: "6:00 PM - 11:00 PM",
    location: "Ocean Drive Rooftop",
    city: "Miami, FL",
    price: "$75 per couple",
    capacity: 80,
    registered: 32,
    image: "/api/placeholder/400/300",
    type: "Social Event"
  },
  {
    id: 3,
    title: "Educational Workshop: Communication & Consent",
    date: "September 22, 2024",
    time: "2:00 PM - 5:00 PM",
    location: "SwingHub Learning Center",
    city: "Austin, TX",
    price: "$35 per person",
    capacity: 50,
    registered: 28,
    image: "/api/placeholder/400/300",
    type: "Workshop"
  },
  {
    id: 4,
    title: "Halloween Masquerade Ball",
    date: "October 31, 2024",
    time: "8:00 PM - 3:00 AM",
    location: "Historic Mansion Venue",
    city: "New Orleans, LA",
    price: "$150 per couple",
    capacity: 150,
    registered: 18,
    image: "/api/placeholder/400/300",
    type: "Special Event"
  },
  {
    id: 5,
    title: "SwingHub Winter Retreat",
    date: "December 15-17, 2024",
    time: "All Weekend",
    location: "Mountain Resort & Spa",
    city: "Aspen, CO",
    price: "$450 per couple",
    capacity: 60,
    registered: 8,
    image: "/api/placeholder/400/300",
    type: "Retreat"
  }
];

const pastEvents = [
  {
    id: 6,
    title: "SwingHub Spring Festival 2024",
    date: "April 20, 2024",
    location: "Central Park Pavilion",
    city: "New York, NY",
    attendees: 180,
    image: "/api/placeholder/400/300",
    rating: 4.9,
    status: "completed"
  },
  {
    id: 7,
    title: "Valentine's Day Celebration",
    date: "February 14, 2024",
    location: "Romantic Gardens",
    city: "San Francisco, CA",
    attendees: 120,
    image: "/api/placeholder/400/300",
    rating: 4.8,
    status: "completed"
  },
  {
    id: 8,
    title: "New Year's Eve Gala 2023",
    date: "December 31, 2023",
    location: "Downtown Hotel Ballroom",
    city: "Chicago, IL",
    attendees: 250,
    image: "/api/placeholder/400/300",
    rating: 4.9,
    status: "completed"
  }
];

const Events = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'selling_fast': return 'bg-orange-500/90 border-orange-400/20';
      case 'almost_full': return 'bg-red-500/90 border-red-400/20';
      case 'available': return 'bg-green-500/90 border-green-400/20';
      default: return 'bg-primary/90 border-primary/20';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'selling_fast': return 'Selling Fast';
      case 'almost_full': return 'Almost Full';
      case 'available': return 'Available';
      default: return 'Open';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-primary">
      <Header />
      
      {/* Hero Section */}
      <section className="w-full pt-32 pb-16 px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center space-y-6 relative z-10">
          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 px-4 py-2 rounded-full font-medium animate-fade-in">
            <Calendar className="w-4 h-4 mr-2" />
            SwingHub Events
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground animate-fade-in" style={{animationDelay: '0.1s'}}>
            Exclusive 
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent"> Community Events</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto animate-fade-in leading-relaxed" style={{animationDelay: '0.2s'}}>
            Join SwingHub's curated events designed to bring our community together for unforgettable experiences, 
            learning opportunities, and meaningful connections.
          </p>
        </div>

        {/* Background Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary-glow/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '3s'}}></div>
      </section>

      {/* Featured Next Event */}
      <section className="w-full py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 px-4 py-2 rounded-full font-medium">
              <Star className="w-4 h-4 mr-2" />
              Next Featured Event
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Don't Miss Our Next Big Event
            </h2>
          </div>

          <Card className="relative overflow-hidden bg-gradient-card shadow-2xl border border-white/50 rounded-3xl group">
            {/* Background Image */}
            <div className="relative h-[600px] lg:h-[500px] overflow-hidden">
              <img 
                src={nextEvent.image} 
                alt={nextEvent.title}
                className="w-full h-full object-cover transition-smooth group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20"></div>
              
              {/* Status Badge */}
              <div className="absolute top-6 right-6">
                <Badge className={`${getStatusColor(nextEvent.status)} text-white px-4 py-2 text-sm font-semibold backdrop-blur-sm shadow-lg`}>
                  {getStatusText(nextEvent.status)}
                </Badge>
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-12">
                <div className="grid lg:grid-cols-2 gap-8 items-end">
                  {/* Event Details */}
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <h3 className="text-3xl lg:text-4xl font-bold text-white">
                        {nextEvent.title}
                      </h3>
                      <p className="text-xl text-white/90">
                        {nextEvent.subtitle}
                      </p>
                      <p className="text-white/80 leading-relaxed">
                        {nextEvent.description}
                      </p>
                    </div>

                    {/* Event Info */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex items-center gap-3 text-white">
                        <Calendar className="w-5 h-5 text-primary-glow" />
                        <div>
                          <p className="font-semibold">{nextEvent.date}</p>
                          <p className="text-sm text-white/80">{nextEvent.time}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3 text-white">
                        <MapPin className="w-5 h-5 text-primary-glow" />
                        <div>
                          <p className="font-semibold">{nextEvent.location}</p>
                          <p className="text-sm text-white/80">{nextEvent.address}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3 text-white">
                        <Ticket className="w-5 h-5 text-primary-glow" />
                        <div>
                          <p className="font-semibold">{nextEvent.price}</p>
                          <p className="text-sm text-white/80">Early Bird: {nextEvent.earlyBird}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3 text-white">
                        <Users className="w-5 h-5 text-primary-glow" />
                        <div>
                          <p className="font-semibold">{nextEvent.registered}/{nextEvent.capacity} Registered</p>
                          <div className="w-24 h-2 bg-white/20 rounded-full mt-1">
                            <div 
                              className="h-full bg-primary-glow rounded-full" 
                              style={{ width: `${(nextEvent.registered / nextEvent.capacity) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action Panel */}
                  <div className="bg-black/40 backdrop-blur-md border border-white/20 rounded-2xl p-6 space-y-6">
                    <div className="space-y-4">
                      <h4 className="text-xl font-bold text-white">Event Highlights</h4>
                      <ul className="space-y-2">
                        {nextEvent.highlights.map((highlight, index) => (
                          <li key={index} className="flex items-center gap-2 text-white/90 text-sm">
                            <CheckCircle className="w-4 h-4 text-primary-glow flex-shrink-0" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <Button 
                        size="lg" 
                        className="w-full bg-gradient-to-r from-primary to-primary-glow hover:from-primary/90 hover:to-primary-glow/90 text-primary-foreground font-semibold shadow-xl"
                      >
                        <Ticket className="w-5 h-5 mr-2" />
                        Reserve Your Spot
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Button>
                      
                      <Button 
                        variant="outline" 
                        size="lg" 
                        className="w-full border-white/30 text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm"
                      >
                        <Play className="w-5 h-5 mr-2" />
                        View Event Details
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="w-full py-24 px-6 lg:px-8 bg-gradient-to-r from-primary/5 to-primary-glow/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 px-4 py-2 rounded-full font-medium">
              <Calendar className="w-4 h-4 mr-2" />
              Upcoming Events
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
              More Amazing Events Coming Soon
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Mark your calendars for these exciting upcoming SwingHub events throughout the year.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {upcomingEvents.map((event, index) => (
              <Card 
                key={event.id} 
                className="group relative overflow-hidden bg-gradient-card backdrop-blur-md border border-white/20 rounded-2xl shadow-xl hover-lift transition-all duration-300 hover:border-primary/30 animate-fade-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {/* Event Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover transition-smooth group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  {/* Event Type Badge */}
                  <Badge className="absolute top-4 left-4 bg-primary/90 text-primary-foreground px-3 py-1 text-sm font-semibold backdrop-blur-sm border border-primary/20 shadow-lg">
                    {event.type}
                  </Badge>
                </div>

                {/* Event Content */}
                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {event.title}
                    </h3>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span>{event.date} • {event.time}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span>{event.location}, {event.city}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Ticket className="w-4 h-4 text-primary" />
                      <span>{event.price}</span>
                    </div>

                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Users className="w-4 h-4 text-primary" />
                      <span>{event.registered}/{event.capacity} registered</span>
                      <div className="flex-1 h-1.5 bg-muted rounded-full ml-2">
                        <div 
                          className="h-full bg-primary rounded-full" 
                          style={{ width: `${(event.registered / event.capacity) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button size="sm" className="flex-1 bg-gradient-to-r from-primary to-primary-glow hover:from-primary/90 hover:to-primary-glow/90 text-primary-foreground font-semibold">
                      Register Now
                    </Button>
                    <Button variant="outline" size="sm" className="border-primary/30 text-primary hover:bg-primary/5">
                      Details
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="w-full py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 px-4 py-2 rounded-full font-medium">
              <Building className="w-4 h-4 mr-2" />
              Past Events
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
              Amazing Memories We've Created
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Take a look back at some of our most successful and memorable events from the past year.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pastEvents.map((event, index) => (
              <Card 
                key={event.id} 
                className="group relative overflow-hidden bg-gradient-card backdrop-blur-md border border-white/20 rounded-2xl shadow-xl hover-lift transition-all duration-300 hover:border-primary/30 animate-fade-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {/* Event Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover transition-smooth group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  {/* Completed Badge */}
                  <Badge className="absolute top-4 left-4 bg-green-500/90 text-white px-3 py-1 text-sm font-semibold backdrop-blur-sm border border-green-400/20 shadow-lg">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    Completed
                  </Badge>
                </div>

                {/* Event Content */}
                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {event.title}
                    </h3>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span>{event.date}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span>{event.location}, {event.city}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Users className="w-4 h-4 text-primary" />
                      <span>{event.attendees} attendees</span>
                    </div>

                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span>{event.rating}/5.0 rating</span>
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star 
                            key={star} 
                            className={`w-3 h-3 ${star <= Math.floor(event.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  <Button variant="outline" size="sm" className="w-full border-primary/30 text-primary hover:bg-primary/5">
                    <Camera className="w-4 h-4 mr-2" />
                    View Photos & Highlights
                  </Button>
                </div>
              </Card>
            ))}
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
                Stay Updated on Future Events
              </h2>
              
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
                Be the first to know about upcoming SwingHub events, exclusive member pricing, and special announcements. 
                Join our community today and never miss an unforgettable experience.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-primary to-primary-glow hover:from-primary/90 hover:to-primary-glow/90 text-primary-foreground font-semibold shadow-xl">
                  <Calendar className="w-5 h-5 mr-2" />
                  Join SwingHub Today
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                
                <Button variant="outline" size="lg" className="border-primary/30 text-foreground bg-background/80 hover:bg-accent/80 backdrop-blur-sm shadow-lg">
                  <Globe className="w-5 h-5 mr-2" />
                  Subscribe to Updates
                </Button>
              </div>
            </div>

            {/* Floating Background Elements */}
            <div className="absolute top-6 right-6 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-6 left-6 w-16 h-16 bg-primary-glow/10 rounded-full blur-lg animate-pulse" style={{animationDelay: '2s'}}></div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;