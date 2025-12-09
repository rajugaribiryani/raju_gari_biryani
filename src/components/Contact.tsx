import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Location',
    // Updated Address
    content: 'POD-15, Unit D, Jacuna Kitchen, Aldow Industrial Estate, Ardwick, Manchester, M12 6AE',
    action: {
      label: 'Get Directions',
      href: 'https://www.google.com/maps/search/?api=1&query=POD-15,Unit+D,Jacuna+Kitchen,Aldow+Industrial+Estate,Ardwick,Manchester,M12+6AE',
    },
  },
  {
    icon: Phone,
    title: 'Phone',
    content: '07940 392567',
    action: {
      label: 'Call Now',
      href: 'tel:+447940392567',
    },
  },
  {
    icon: Mail,
    title: 'Email',
    content: 'rajugaribiryanimcr@gmail.com',
    action: {
      label: 'Send Email',
      href: 'mailto:rajugaribiryanimcr@gmail.com',
    },
  },
  {
    icon: Clock,
    title: 'Hours',
    content: 'Mon-Fri: 11am - 11pm\nSat-Sun: 11am - 4am',
  },
];

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="section-padding bg-secondary/30">
      <div className="container-custom" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="h-px w-8 bg-primary" />
            <span className="text-primary text-sm tracking-[0.2em] uppercase font-sans font-bold">
              Get In Touch
            </span>
            <span className="h-px w-8 bg-primary" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Contact <span className="text-primary">Us</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Visit us or reach out for orders and enquiries
          </p>
        </motion.div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              // Compact padding (p-3) and Highlighted Gold Border
              className="bg-card border-2 border-primary/40 rounded-lg p-3 text-center hover:border-primary hover:shadow-[0_0_20px_rgba(212,175,55,0.2)] transition-all duration-300 group"
            >
              {/* Icon Container: Set to w-10 h-10 to be compact but visible */}
              <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <info.icon className="w-5 h-5 text-primary" />
              </div>
              
              <h3 className="font-serif text-lg font-bold text-foreground mb-1">
                {info.title}
              </h3>
              
              <p className="text-sm text-muted-foreground whitespace-pre-line mb-3 leading-relaxed px-2">
                {info.content}
              </p>
              
              {info.action && (
                <a
                  href={info.action.href}
                  target={info.action.href.startsWith('http') ? '_blank' : undefined}
                  rel={info.action.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="inline-block text-xs font-bold uppercase tracking-wider text-primary hover:text-gold-dark transition-colors border-b border-primary/30 hover:border-primary pb-0.5"
                >
                  {info.action.label}
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;