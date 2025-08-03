import LegalPage from "@/components/LegalPage";
import { Shield } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <LegalPage
      title="Privacy Policy"
      subtitle="How we collect, use, and protect your personal information"
      lastUpdated="January 15, 2024"
      badgeText="Privacy & Security"
      badgeIcon={Shield}
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">Introduction</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            At SwingHub, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, 
            and safeguard your information when you use our platform, mobile application, and related services.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            By using SwingHub, you consent to the data practices described in this policy. If you do not agree 
            with this policy, please do not use our services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">Information We Collect</h2>
          
          <h3 className="text-xl font-semibold text-foreground mb-3">Personal Information</h3>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
            <li>Name, email address, phone number, and date of birth</li>
            <li>Profile information including photos, preferences, and lifestyle interests</li>
            <li>Location data (with your permission) for matching and event discovery</li>
            <li>Identity verification documents (processed by our trusted partners)</li>
            <li>Payment information for premium subscriptions</li>
          </ul>

          <h3 className="text-xl font-semibold text-foreground mb-3">Usage Information</h3>
          <ul className="list-disc list-inside text-muted-foreground space-y-2">
            <li>App usage patterns and feature interactions</li>
            <li>Messages and communications (for safety and support purposes)</li>
            <li>Device information and technical data</li>
            <li>Cookies and similar tracking technologies</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">How We Use Your Information</h2>
          <ul className="list-disc list-inside text-muted-foreground space-y-2">
            <li>Provide and improve our services</li>
            <li>Match you with compatible members</li>
            <li>Verify identities and maintain platform safety</li>
            <li>Send you important updates and communications</li>
            <li>Process payments and manage subscriptions</li>
            <li>Comply with legal obligations</li>
            <li>Prevent fraud and ensure platform security</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">Information Sharing</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            We do not sell your personal information to third parties. We may share your information in the following circumstances:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2">
            <li>With other members as part of our matching service (limited profile information)</li>
            <li>With trusted service providers who help us operate our platform</li>
            <li>With verification partners for identity and background checks</li>
            <li>When required by law or to protect safety</li>
            <li>In connection with a business transfer or acquisition</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">Data Security</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            We implement industry-standard security measures to protect your information:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2">
            <li>End-to-end encryption for messages and sensitive data</li>
            <li>Secure data centers with AWS and Google Cloud</li>
            <li>Regular security audits and penetration testing</li>
            <li>Multi-factor authentication options</li>
            <li>Staff training on privacy and security best practices</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">Your Rights and Choices</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            You have the following rights regarding your personal information:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2">
            <li>Access and download your data</li>
            <li>Correct inaccurate information</li>
            <li>Delete your account and associated data</li>
            <li>Control your privacy settings and visibility</li>
            <li>Opt out of marketing communications</li>
            <li>Request data portability</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">Cookies and Tracking</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            We use cookies and similar technologies to enhance your experience. You can control cookie settings 
            through your browser, but this may affect platform functionality.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">International Transfers</h2>
          <p className="text-muted-foreground leading-relaxed">
            Your information may be processed in countries other than your own. We ensure appropriate safeguards 
            are in place to protect your data during international transfers.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">Children's Privacy</h2>
          <p className="text-muted-foreground leading-relaxed">
            SwingHub is intended for adults 18 years and older. We do not knowingly collect personal information 
            from children under 18. If you believe we have collected such information, please contact us immediately.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">Changes to This Policy</h2>
          <p className="text-muted-foreground leading-relaxed">
            We may update this Privacy Policy from time to time. We will notify you of significant changes through 
            the platform or via email. Your continued use of SwingHub after changes constitutes acceptance of the 
            updated policy.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">Contact Information</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            For questions about this Privacy Policy or our privacy practices, contact us at:
          </p>
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
            <p className="text-foreground font-medium mb-2">SwingHub Privacy Team</p>
            <p className="text-muted-foreground">Email: privacy@swinghub.com</p>
            <p className="text-muted-foreground">Address: [Company Address]</p>
          </div>
        </section>
      </div>
    </LegalPage>
  );
};

export default PrivacyPolicy;