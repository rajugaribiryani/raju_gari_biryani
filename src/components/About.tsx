import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import aboutImg from '@/assets/about-kitchen.jpg';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div
          ref={ref}
          className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-sm">
              <img
                src={aboutImg}
                alt="Traditional Indian kitchen with spices"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              {/* Decorative Frame */}
              <div className="absolute inset-4 border border-primary/30 rounded-sm pointer-events-none" />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground px-6 py-4 rounded-sm shadow-lg">
              <p className="font-serif text-3xl font-bold">25+</p>
              <p className="text-sm uppercase tracking-wide">Years Legacy</p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="h-px w-8 bg-primary" />
              <span className="text-primary text-sm tracking-[0.2em] uppercase font-sans">
                Our Story
              </span>
            </div>

            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              A Tradition of{' '}
              <span className="text-primary">Authentic Flavors</span>
            </h2>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              At Raju Gari Biryani, we bring the royal taste of Hyderabad to Manchester. 
              Our recipes have been passed down through generations, preserving the authentic 
              dum cooking method that makes our biryani legendary.
            </p>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              Every dish is crafted with hand-picked spices, premium ingredients, and an 
              unwavering commitment to quality. From the first aroma to the last bite, 
              experience the true essence of Telangana cuisine.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { title: 'Authentic Recipes', desc: 'Traditional Hyderabadi style' },
                { title: 'Premium Spices', desc: 'Hand-selected ingredients' },
                { title: 'Dum Cooking', desc: 'Slow-cooked perfection' },
                { title: 'Fresh Daily', desc: 'Made with love everyday' },
              ].map((item, i) => (
                <div key={i} className="border-l-2 border-primary pl-4">
                  <h4 className="font-serif font-semibold text-foreground">
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
