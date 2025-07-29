import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Clock, Star, ArrowRight, Ticket } from "lucide-react";
import upcomingEventVenue from "@/assets/upcoming-event-venue.jpg";

const UpcomingEventSection = () => {
  return (
    <section className="w-full py-16 lg:py-24 px-6 lg:px-8 bg-gradient-primary overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <Badge className="bg-primary text-primary-foreground px-4 py-2 rounded-full font-medium animate-pulse">
            Next Event
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
            Don't Miss Our Exclusive Event
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join us for an unforgettable evening of connection, entertainment, and lifestyle exploration.
          </p>
        </div>

        <Card className="relative overflow-hidden bg-gradient-card shadow-2xl border border-white/50 rounded-3xl group">
          {/* Background Image with Overlay */}
          <div className="relative h-[600px] lg:h-[60vh] overflow-hidden">
            <img 
              src={"https://swinghub.com/cdn/shop/files/Untitled_design.jpg?v=1753288345&width=1946"} 
              alt="Exclusive SwingHub Event Venue"
              className="w-full h-full object-cover transition-smooth group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20"></div>
            
            {/* Floating Elements */}
            <div className="absolute top-6 right-6 space-y-2">
              <Badge className="bg-red-500/90 text-white px-3 py-1 animate-pulse border border-red-400 shadow-lg">
                Limited Spots
              </Badge>
              <Badge className="border-white/70 text-white bg-black/50 backdrop-blur-sm px-3 py-1 shadow-lg">
                VIP Experience
              </Badge>
            </div>

            {/* Event Content */}
            <div className="absolute inset-0 flex items-center p-6 lg:p-8">
              <div className="w-full max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-[60%_35%] gap-16 items-center">
                  {/* Event Details */}
                  <div className="text-white space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-3xl lg:text-4xl font-bold leading-tight">
                      Sugar Boulevard
                    </h3>
                    <p className="text-lg text-white/90">
                      Penthouse Playrooms is about to be dipped in frosting and draped in satin as we transform the venue into the one and only…Sugar Boulevard.
                    </p>
                  </div>

                    <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center gap-2 bg-black/30 backdrop-blur-sm rounded-lg p-2">
                        <Calendar className="w-5 h-5 text-primary-glow" />
                      <div>
                        <p className="text-xs text-white/80">Date</p>
                        <p className="text-sm font-semibold">20th September '25</p>
                      </div>
                      </div>
                      
                    <div className="flex items-center gap-2 bg-black/30 backdrop-blur-sm rounded-lg p-2">
                        <Clock className="w-5 h-5 text-primary-glow" />
                      <div>
                        <p className="text-xs text-white/80">Time</p>
                        <p className="text-sm font-semibold">8:00 PM - 2:00 AM</p>
                      </div>
                      </div>
                      
                    <div className="flex items-center gap-2 bg-black/30 backdrop-blur-sm rounded-lg p-2">
                        <MapPin className="w-5 h-5 text-primary-glow" />
                      <div>
                        <p className="text-xs text-white/80">Venue</p>
                        <p className="text-sm font-semibold">Penthouse Playrooms, Dunstable</p>
                      </div>
                      </div>
                      
                      <div className="flex items-center gap-2 bg-black/30 backdrop-blur-sm rounded-lg p-2">
                        <Users className="w-5 h-5 text-primary-glow" />
                      <div>
                        <p className="text-xs text-white/80">Capacity</p>
                        <p className="text-sm font-semibold">280 Guests Max</p>
                      </div>
                      </div>
                    </div>

                    <div className="space-y-2">
            <p className="p1">This is&nbsp;<span className="s1"><b>The Sweet Life</b></span> — a SwingHub signature event where every detail is coated in charm and temptation. Expect a night where the vibe is soft, sweet, and just the right amount of naughty.</p>
<p className="p1">🎶 The soundtrack? Pure&nbsp;<span className="s1"><b>nostalgia</b></span>. &nbsp;The kind of music that makes you feel something in your chest <i>and</i> your hips and bringing them old classic memories back!&nbsp;</p>
<p className="p1">🍬&nbsp;<span className="s1"><b>Sweet treats are everywhere</b></span> — candy stations, dessert platters, frosting-topped surprises, and little indulgences tucked into every corner.</p>
<p className="p1">🧁&nbsp;<span className="s1"><b>SwingHub signature games</b></span> will be scattered throughout the venue — designed to spark conversation, flirtation, and unexpected connections. Think playful, cheeky, and sugar-themed challenges that break the ice and turn up the heat.</p>
                    </div>
                  </div>

                  {/* CTA Section */}
                  <div className="space-y-4">
                    <Card className="bg-white/20 backdrop-blur-md border border-white/30 p-6 rounded-2xl shadow-xl">
                      <div className="text-center space-y-4">
                        <div className="inline-flex items-center gap-2 bg-primary/30 text-white px-4 py-2 rounded-full border border-primary/50 shadow-lg">
                          <Star className="w-4 h-4 text-yellow-300" />
                          <span className="text-sm font-semibold">Premium Event</span>
                        </div>
                        
                        <div className="space-y-2">
                          <p className="text-2xl font-bold text-white">£85 per person</p>
                          <p className="text-sm text-white/70">Includes welcome drinks & catering</p>
                        </div>
                        
                        <div className="space-y-3">
                          <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-xl border border-primary/20">
                            <Ticket className="w-5 h-5 mr-2" />
                            Reserve Your Spot
                          </Button>
                          
                          <Button variant="outline" size="lg" className="w-full border-white/70 text-white hover:bg-white/20 bg-black/20 backdrop-blur-sm shadow-lg">
                            Learn More
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </div>
                        
                        <div className="text-center">
                          <p className="text-xs text-white/80 font-medium">
                            Only <span className="font-bold text-yellow-300">23 spots remaining</span>
                          </p>
                          <div className="w-full bg-white/30 rounded-full h-2 mt-2 border border-white/20">
                            <div className="bg-yellow-300 h-2 rounded-full shadow-sm" style={{width: '81%'}}></div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-card shadow-card border border-white/50 rounded-full px-6 py-3">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-muted-foreground font-medium">SwingHub Supporters get more!</span>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEventSection;