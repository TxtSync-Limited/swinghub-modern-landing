import LegalPage from "@/components/LegalPage";
import { Users, Shield, Heart, Camera, MessageCircle, AlertTriangle } from "lucide-react";

const CommunityGuidelines = () => {
  return (
    <LegalPage
      title="Community Guidelines"
      subtitle="Creating a safe, respectful, and welcoming space for everyone in the SwingHub community"
      lastUpdated="December 15, 2024"
      badgeText="Community Standards"
      badgeIcon={Users}
    >
      <div className="space-y-8">
        
        {/* Introduction */}
        <div className="bg-gradient-to-r from-primary/10 to-primary-glow/10 p-6 rounded-lg border border-primary/20">
          <div className="flex items-start gap-3">
            <Heart className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Welcome to SwingHub</h3>
              <p className="text-muted-foreground">
                Our community thrives on mutual respect, consent, and authentic connections. These guidelines help ensure everyone feels safe, welcomed, and free to be their authentic selves.
              </p>
            </div>
          </div>
        </div>

        {/* Photo Guidelines */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <Camera className="w-5 h-5 text-primary" />
            <h2 className="text-2xl font-bold text-foreground">Photo Guidelines</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-lg font-semibold text-foreground mb-3 text-green-600">✓ Profile Photos Should Be</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Clear photos showing your face</li>
                <li>• Recent and authentic pictures of yourself</li>
                <li>• Appropriate for a diverse audience</li>
                <li>• Tasteful and respectful</li>
              </ul>
            </div>
            
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-lg font-semibold text-foreground mb-3 text-red-600">✗ Not Allowed</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Nude or explicit content</li>
                <li>• Stock images or photos of others</li>
                <li>• Images with weapons or hate symbols</li>
                <li>• Blank or faceless photos</li>
                <li>• Photos featuring minors</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-800">
            <h4 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">Private Photo Sharing</h4>
            <p className="text-amber-700 dark:text-amber-300 text-sm">
              When sharing private photos in chats, always ensure you have explicit consent from the recipient. Unsolicited explicit images are strictly prohibited.
            </p>
          </div>
        </section>

        {/* Communication Standards */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <MessageCircle className="w-5 h-5 text-primary" />
            <h2 className="text-2xl font-bold text-foreground">Communication Standards</h2>
          </div>
          
          <div className="space-y-4">
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-lg font-semibold text-foreground mb-3">Respectful Communication</h3>
              <p className="text-muted-foreground mb-3">
                SwingHub is built on respect and consent. Every interaction should honor these core values.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Always obtain consent before sending explicit content</li>
                <li>• Respect boundaries when they're communicated</li>
                <li>• Be patient and understanding with responses</li>
                <li>• Keep conversations appropriate until mutual interest is established</li>
              </ul>
            </div>

            <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg border border-red-200 dark:border-red-800">
              <h3 className="text-lg font-semibold text-red-800 dark:text-red-200 mb-3">Zero Tolerance Behaviors</h3>
              <ul className="space-y-2 text-red-700 dark:text-red-300">
                <li>• Harassment or persistent unwanted contact</li>
                <li>• Hate speech or discrimination of any kind</li>
                <li>• Sending explicit messages without consent</li>
                <li>• Demanding personal information or photos</li>
                <li>• Mass messaging to solicit off-platform contact</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Safety & Security */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-5 h-5 text-primary" />
            <h2 className="text-2xl font-bold text-foreground">Safety & Security</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-lg font-semibold text-foreground mb-3">Protect Your Privacy</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Never share personal documents (ID, passport, etc.)</li>
                <li>• Keep financial information private</li>
                <li>• Don't include contact details in your profile</li>
                <li>• Report suspicious activity immediately</li>
              </ul>
            </div>
            
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-lg font-semibold text-foreground mb-3">Age Verification</h3>
              <p className="text-muted-foreground mb-3">
                SwingHub is strictly for adults 18 and over. We take age verification seriously to protect our community.
              </p>
              <p className="text-sm text-amber-600 dark:text-amber-400">
                If you encounter any user who appears to be underage, please report them immediately.
              </p>
            </div>
          </div>
        </section>

        {/* Prohibited Activities */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle className="w-5 h-5 text-primary" />
            <h2 className="text-2xl font-bold text-foreground">Prohibited Activities</h2>
          </div>
          
          <div className="bg-card p-6 rounded-lg border">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Commercial Activities</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Solicitation for payment or services</li>
                  <li>• Promoting escort services</li>
                  <li>• Excessive OnlyFans promotion</li>
                  <li>• Drug sales or illegal activities</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Safety Violations</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Promoting anonymous services</li>
                  <li>• Sharing others' personal information</li>
                  <li>• Creating fake or multiple accounts</li>
                  <li>• Impersonating other users</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Enforcement */}
        <section>
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
            <h2 className="text-xl font-bold text-foreground mb-4">Enforcement & Reporting</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-2">How to Report</h3>
                <p className="text-muted-foreground">
                  Use the report button on any profile or message that violates these guidelines. Our moderation team reviews all reports promptly.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-foreground mb-2">Consequences</h3>
                <p className="text-muted-foreground">
                  Violations may result in warnings, temporary suspensions, or permanent bans depending on severity. Serious violations like harassment, hate speech, or illegal activities result in immediate permanent bans.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Closing Note */}
        <div className="text-center p-6 bg-primary/5 rounded-lg border border-primary/20">
          <h3 className="text-lg font-semibold text-foreground mb-2">Thank You for Making SwingHub Safe</h3>
          <p className="text-muted-foreground">
            By following these guidelines, you help create a positive experience for everyone in our community. Together, we can maintain SwingHub as a safe, respectful space for authentic connections.
          </p>
        </div>
      </div>
    </LegalPage>
  );
};

export default CommunityGuidelines;