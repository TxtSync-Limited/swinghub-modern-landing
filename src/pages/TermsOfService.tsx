import LegalPage from "@/components/LegalPage";
import { FileText } from "lucide-react";

const TermsOfService = () => {
  return (
    <LegalPage
      title="Terms of Service"
      subtitle="The rules and guidelines for using SwingHub"
      lastUpdated="January 15, 2024"
      badgeText="Legal Terms"
      badgeIcon={FileText}
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">Agreement to Terms</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            By accessing and using SwingHub, you accept and agree to be bound by the terms and provision of this agreement. 
            If you do not agree to abide by the above, please do not use this service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">Use License</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Permission is granted to temporarily access SwingHub for personal, non-commercial transitory viewing only. 
            This is the grant of a license, not a transfer of title, and under this license you may not:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2">
            <li>Modify or copy the materials</li>
            <li>Use the materials for any commercial purpose or for any public display</li>
            <li>Attempt to decompile or reverse engineer any software contained on the platform</li>
            <li>Remove any copyright or other proprietary notations from the materials</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">User Accounts</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            To access certain features of SwingHub, you must create an account. You agree to:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2">
            <li>Provide accurate, current, and complete information</li>
            <li>Maintain the security of your password and account</li>
            <li>Notify us immediately of any unauthorized use</li>
            <li>Be responsible for all activities under your account</li>
            <li>Be at least 18 years of age</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">Community Guidelines</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            SwingHub is a community-focused platform. All users must adhere to our community guidelines:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2">
            <li>Treat all members with respect and courtesy</li>
            <li>Do not engage in harassment, bullying, or discriminatory behavior</li>
            <li>Share authentic photos and information</li>
            <li>Respect others' privacy and boundaries</li>
            <li>Do not share explicit content without consent</li>
            <li>Report inappropriate behavior or content</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">Prohibited Uses</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            You may not use SwingHub for any unlawful purpose or to solicit others to perform unlawful acts. 
            This includes but is not limited to:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2">
            <li>Violating any local, state, national, or international law</li>
            <li>Transmitting or procuring the sending of advertising or promotional material</li>
            <li>Impersonating or attempting to impersonate another person</li>
            <li>Creating fake profiles or using misleading information</li>
            <li>Attempting to gain unauthorized access to other accounts</li>
            <li>Engaging in commercial activities without permission</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">Content and Intellectual Property</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            You retain ownership of content you submit to SwingHub, but grant us certain rights:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2">
            <li>License to use, display, and distribute your content on our platform</li>
            <li>Right to moderate and remove content that violates our guidelines</li>
            <li>Authority to use your content for platform improvement and marketing</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">Payment and Subscriptions</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            SwingHub offers both free and premium subscription services:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2">
            <li>Premium subscriptions are billed on a recurring basis</li>
            <li>Prices are subject to change with 30 days notice</li>
            <li>Cancellations take effect at the end of the current billing period</li>
            <li>Refunds are provided in accordance with our refund policy</li>
            <li>Failure to pay may result in service suspension</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">Privacy and Data Protection</h2>
          <p className="text-muted-foreground leading-relaxed">
            Your privacy is important to us. Please review our Privacy Policy, which also governs your use of 
            the service, to understand our practices regarding your personal data.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">Disclaimers</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The information on SwingHub is provided on an 'as is' basis. To the fullest extent permitted by law, 
            SwingHub excludes all representations, warranties, conditions and terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">Limitation of Liability</h2>
          <p className="text-muted-foreground leading-relaxed">
            In no event shall SwingHub or its suppliers be liable for any damages arising out of the use or 
            inability to use the service, even if we have been notified orally or in writing of the possibility 
            of such damage.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">Termination</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            We may terminate or suspend your account and access to the service immediately:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2">
            <li>For violations of these Terms of Service</li>
            <li>For inappropriate or harmful behavior</li>
            <li>Upon request by law enforcement or legal process</li>
            <li>For extended periods of inactivity</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">Changes to Terms</h2>
          <p className="text-muted-foreground leading-relaxed">
            SwingHub reserves the right to revise these terms of service at any time without notice. 
            By using this service, you are agreeing to be bound by the then current version of these terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">Governing Law</h2>
          <p className="text-muted-foreground leading-relaxed">
            These terms and conditions are governed by and construed in accordance with the laws of [Jurisdiction] 
            and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
          </p>
        </section>
      </div>
    </LegalPage>
  );
};

export default TermsOfService;