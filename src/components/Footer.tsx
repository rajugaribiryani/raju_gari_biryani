import { Facebook, Instagram } from 'lucide-react';
import logo from '@/assets/logo.jpg';
// IMPORT THE BUTTON
import GoogleReviewBtn from './ui/GoogleReviewBtn';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Menu', href: '#menu' },
    { name: 'About', href: '#about' },
    { name: 'Franchise', href: '#franchise' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { 
      icon: Facebook, 
      href: 'https://www.facebook.com/share/1DpamWCVM7/?mibextid=wwXIfr', 
      label: 'Facebook' 
    },
    { 
      icon: Instagram, 
      href: 'https://www.instagram.com/rajugaribiryaniuk?igsh=MTAwajF2YmczdTdxcg%3D%3D&utm_source=qr', 
      label: 'Instagram' 
    },
  ];

  const handleLinkClick = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark text-dark-foreground">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src={logo}
                alt="Raju Gari Biryani"
                className="h-14 w-14 rounded-full object-cover border-2 border-primary/50"
              />
              <div>
                <h3 className="font-serif text-lg font-semibold">
                  Raju Gari Biryani
                </h3>
                <p className="text-xs text-primary tracking-widest uppercase">
                  Indian Kitchen
                </p>
              </div>
            </div>
            <p className="text-sm text-dark-foreground/70 leading-relaxed">
              Bringing the authentic royal taste of Hyderabad to Manchester. 
              Experience tradition in every bite.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4 text-primary">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map(link => (
                <li key={link.name}>
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className="text-sm text-dark-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4 text-primary">
              Follow Us
            </h4>
            <div className="flex gap-4 mb-6">
              {socialLinks.map(social => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full border border-dark-foreground/20 flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            
            {/* ADDED GOOGLE REVIEW BUTTON HERE */}
            <div className="mb-6">
               <GoogleReviewBtn />
            </div>

            <p className="text-sm text-dark-foreground/70">
              <span className="text-primary">Phone:</span> 07940 392567
            </p>
            <p className="text-sm text-dark-foreground/70">
              <span className="text-primary">Email:</span> rajugaribiryanimcr@gmail.com
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-dark-foreground/10 text-center">
          <p className="text-sm text-dark-foreground/50">
            © {currentYear} Raju Gari Biryani. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;