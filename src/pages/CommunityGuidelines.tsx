import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Users, Shield, Heart, Camera, MessageCircle, AlertTriangle, CheckCircle, XCircle, Info } from "lucide-react";
import { Link } from "react-router-dom";

const CommunityGuidelines = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary-glow/5 to-accent/10" />
        <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 bg-primary/10 text-primary border-primary/20">
              <Users className="w-4 h-4 mr-2" />
              Community Standards
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent">
              Community Guidelines
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Creating a safe, respectful, and welcoming space for everyone in the SwingHub community
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Heart className="w-5 h-5 mr-2" />
                Build Community Together
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/safety">Learn About Safety</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-12">

          {/* Introduction */}
          <Card className="border-primary/20 bg-gradient-to-r from-primary/5 to-primary-glow/5">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Heart className="w-8 h-8 text-primary" />
                <div>
                  <CardTitle className="text-2xl">Welcome to SwingHub</CardTitle>
                  <CardDescription className="text-lg">
                    Our community thrives on mutual respect, consent, and authentic connections
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                These guidelines help ensure everyone feels safe, welcomed, and free to be their authentic selves. 
                By participating in our community, you agree to follow these standards and help create a positive 
                environment for all members.
              </p>
            </CardContent>
          </Card>

          {/* Photo Guidelines */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Camera className="w-6 h-6 text-primary" />
              <h2 className="text-3xl font-bold">Photo Guidelines</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-green-200 dark:border-green-800">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-green-700 dark:text-green-300">
                    <CheckCircle className="w-5 h-5" />
                    Profile Photos Should Be
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Clear photos showing your face</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Recent and authentic pictures of yourself</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Appropriate for a diverse audience</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Tasteful and respectful</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-red-200 dark:border-red-800">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-red-700 dark:text-red-300">
                    <XCircle className="w-5 h-5" />
                    Not Allowed
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Nude or explicit content</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Stock images or photos of others</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Images with weapons or hate symbols</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Blank or faceless photos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Photos featuring minors</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-900/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-amber-700 dark:text-amber-300">
                  <Info className="w-5 h-5" />
                  Private Photo Sharing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-amber-700 dark:text-amber-300">
                  When sharing private photos in chats, always ensure you have explicit consent from the recipient. 
                  Unsolicited explicit images are strictly prohibited and will result in immediate account suspension.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Communication Standards */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <MessageCircle className="w-6 h-6 text-primary" />
              <h2 className="text-3xl font-bold">Communication Standards</h2>
            </div>
            
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Respectful Communication</CardTitle>
                  <CardDescription>
                    SwingHub is built on respect and consent. Every interaction should honor these core values.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Always obtain consent before sending explicit content</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Respect boundaries when they're communicated</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Be patient and understanding with responses</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Keep conversations appropriate until mutual interest is established</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-red-200 dark:border-red-800 bg-red-50/50 dark:bg-red-900/20">
                <CardHeader>
                  <CardTitle className="text-red-700 dark:text-red-300">Zero Tolerance Behaviors</CardTitle>
                  <CardDescription className="text-red-600 dark:text-red-400">
                    These behaviors will result in immediate account suspension
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-red-700 dark:text-red-300">Harassment or persistent unwanted contact</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-red-700 dark:text-red-300">Hate speech or discrimination of any kind</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-red-700 dark:text-red-300">Sending explicit messages without consent</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-red-700 dark:text-red-300">Demanding personal information or photos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-red-700 dark:text-red-300">Mass messaging to solicit off-platform contact</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Safety & Security */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Shield className="w-6 h-6 text-primary" />
              <h2 className="text-3xl font-bold">Safety & Security</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Protect Your Privacy</CardTitle>
                  <CardDescription>
                    Your personal information should stay private and secure
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Shield className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span>Never share personal documents (ID, passport, etc.)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Shield className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span>Keep financial information private</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Shield className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span>Don't include contact details in your profile</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Shield className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span>Report suspicious activity immediately</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Age Verification</CardTitle>
                  <CardDescription>
                    SwingHub is strictly for adults 18 and over
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    We take age verification seriously to protect our community and comply with legal requirements.
                  </p>
                  <div className="p-3 bg-amber-50 dark:bg-amber-900/20 rounded-md border border-amber-200 dark:border-amber-800">
                    <p className="text-sm text-amber-700 dark:text-amber-300">
                      If you encounter any user who appears to be underage, please report them immediately using our reporting tools.
                    </p>
                  </div>
                  <Button variant="outline" size="sm" className="mt-4" asChild>
                    <Link to="/age-verification">Learn About Age Verification</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Prohibited Activities */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <AlertTriangle className="w-6 h-6 text-primary" />
              <h2 className="text-3xl font-bold">Prohibited Activities</h2>
            </div>
            
            <Card>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <XCircle className="w-5 h-5 text-red-500" />
                      Commercial Activities
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm">Solicitation for payment or services</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm">Promoting escort services</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm">Excessive OnlyFans promotion</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm">Drug sales or illegal activities</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <XCircle className="w-5 h-5 text-red-500" />
                      Safety Violations
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm">Promoting anonymous services</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm">Sharing others' personal information</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm">Creating fake or multiple accounts</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm">Impersonating other users</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Enforcement & Reporting */}
          <Card className="bg-gradient-to-r from-blue-50/50 to-indigo-50/50 dark:from-blue-900/20 dark:to-indigo-900/20 border-blue-200 dark:border-blue-800">
            <CardHeader>
              <CardTitle className="text-2xl">Enforcement & Reporting</CardTitle>
              <CardDescription>
                Help us maintain a safe community by reporting violations
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-2">How to Report</h3>
                <p className="text-muted-foreground mb-4">
                  Use the report button on any profile or message that violates these guidelines. Our moderation team reviews all reports promptly and takes appropriate action.
                </p>
                <Button variant="outline" size="sm">
                  <AlertTriangle className="w-4 h-4 mr-2" />
                  Learn How to Report
                </Button>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="font-semibold text-lg mb-2">Consequences</h3>
                <p className="text-muted-foreground">
                  Violations may result in warnings, temporary suspensions, or permanent bans depending on severity. 
                  Serious violations like harassment, hate speech, or illegal activities result in immediate permanent bans 
                  with no appeal process.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <Card className="text-center bg-gradient-to-r from-primary/5 to-primary-glow/5 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl">Thank You for Making SwingHub Safe</CardTitle>
              <CardDescription className="text-lg">
                Together, we create a welcoming space for authentic connections
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                By following these guidelines, you help create a positive experience for everyone in our community. 
                Together, we can maintain SwingHub as a safe, respectful space for authentic connections.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/safety">
                    <Shield className="w-5 h-5 mr-2" />
                    Learn About Safety
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/contact">Report a Concern</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

        </div>
      </section>
    </div>
  );
};

export default CommunityGuidelines;