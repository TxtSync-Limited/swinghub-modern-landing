import { Facebook, Twitter, Linkedin } from "lucide-react";

const footerLinks = {
  product: ["Features", "Pricing", "Integrations", "API"],
  company: ["About Us", "Careers", "News", "Contact"],
  resources: ["Blog", "Help Center", "Tutorials", "Community"],
  legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Security"]
};

const Footer = () => {
  return (
    <footer className="bg-text-primary text-white py-16 px-6">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid md:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="font-bold text-xl">
              Untitled UI
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              The ultimate financial hub for modern businesses. Manage finances, track expenses, and grow with confidence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2025 Untitled UI. All rights reserved.
            </div>
            
            {/* App Store Buttons */}
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors">
                <div className="flex items-center space-x-2">
                  <div className="w-5 h-5 bg-white rounded-sm"></div>
                  <div className="text-xs">
                    <div className="text-gray-300">Download on the</div>
                    <div className="font-semibold">App Store</div>
                  </div>
                </div>
              </a>
              <a href="#" className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors">
                <div className="flex items-center space-x-2">
                  <div className="w-5 h-5 bg-white rounded-sm"></div>
                  <div className="text-xs">
                    <div className="text-gray-300">Get it on</div>
                    <div className="font-semibold">Google Play</div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;