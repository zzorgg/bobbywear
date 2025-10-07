import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Clock, Shield, TrendingUp, Users, Package, Sparkles, Award, Heart } from 'lucide-react';
import CarouselHero from '@/components/CarouselHero';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';

export default function Home() {
  const featured = products.slice(0, 3);

  return (
    <div className="min-h-screen bg-base-100">
      <CarouselHero />

      <div className="container mx-auto px-4 py-20 space-y-24">
        {/* Features Section */}
        <section className="fade-in">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/10 rounded-full mb-6 border border-primary/20">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-sm font-bold text-primary uppercase tracking-wide">Why Choose Us</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 text-base-content">
              Crafted for Excellence
            </h2>
            <p className="text-base md:text-lg text-base-content/70 max-w-2xl mx-auto">
              We combine quality craftsmanship with flexible manufacturing to help your brand succeed
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group card bg-base-100 border-2 border-base-300 hover:border-primary shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="card-body p-8">
                <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                  <Package className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">Flexible MOQs</h3>
                <p className="text-base-content/70 leading-relaxed">
                  Start small and scale fast with batch sizes tailored to your launch. No huge commitments required.
                </p>
              </div>
            </div>

            <div className="group card bg-base-100 border-2 border-base-300 hover:border-secondary shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="card-body p-8">
                <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-secondary transition-colors">Reliable Lead Times</h3>
                <p className="text-base-content/70 leading-relaxed">
                  Transparent timelines from sampling to bulk production. We deliver on time, every time.
                </p>
              </div>
            </div>

            <div className="group card bg-base-100 border-2 border-base-300 hover:border-accent shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="card-body p-8">
                <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors">Quality Control</h3>
                <p className="text-base-content/70 leading-relaxed">
                  Inline and final AQL checks to keep returns low and customers happy. Quality guaranteed.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="slide-in-left">
          <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-secondary/10 rounded-full mb-6 border border-secondary/20">
                <Heart className="w-5 h-5 text-secondary" />
                <span className="text-sm font-bold text-secondary uppercase tracking-wide">Featured Collection</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 text-base-content">
                New & Popular
              </h2>
              <p className="text-base md:text-lg text-base-content/70">
                Discover our latest girls' wear collection
              </p>
            </div>
            <Link to="/catalog" className="btn btn-lg btn-primary gap-2 group shadow-lg hover:shadow-xl">
              <span className="font-semibold">Explore All</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featured.map((p, index) => (
              <div key={p.id} className="scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                <ProductCard product={p} />
              </div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="slide-in-right">
          <div className="card bg-base-200 border-2 border-base-300 shadow-xl">
            <div className="card-body p-8 md:p-12">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/10 rounded-full mb-6 border border-primary/20">
                  <Award className="w-5 h-5 text-primary" />
                  <span className="text-sm font-bold text-primary uppercase tracking-wide">Our Track Record</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-base-content">
                  Trusted by Brands Worldwide
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center group">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-primary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <TrendingUp className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-5xl md:text-6xl font-bold text-primary mb-2">10+</div>
                  <div className="text-lg font-semibold mb-1">Years in Business</div>
                  <div className="text-base-content/60">Since 2015</div>
                </div>

                <div className="text-center group">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-secondary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-5xl md:text-6xl font-bold text-secondary mb-2">98%</div>
                  <div className="text-lg font-semibold mb-1">On-time Delivery</div>
                  <div className="text-base-content/60">Past 12 months</div>
                </div>

                <div className="text-center group">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-accent flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-5xl md:text-6xl font-bold text-accent mb-2">500+</div>
                  <div className="text-lg font-semibold mb-1">Styles Shipped</div>
                  <div className="text-base-content/60">Across 30+ brands</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="fade-in">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent/10 rounded-full mb-6 border border-accent/20">
              <Heart className="w-5 h-5 text-accent" />
              <span className="text-sm font-bold text-accent uppercase tracking-wide">Testimonials</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 text-base-content">
              Loved by Brands
            </h2>
            <p className="text-base md:text-lg text-base-content/70">
              Trusted by businesses across the globe
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card bg-base-100 shadow-xl border-2 border-base-300 hover:border-primary/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="card-body p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="avatar placeholder">
                    <div className="bg-primary text-white rounded-full w-16 shadow-lg">
                      <span className="text-2xl font-bold">M</span>
                    </div>
                  </div>
                  <div>
                    <div className="font-bold text-lg">Mira</div>
                    <div className="text-sm text-base-content/60">Brand Owner</div>
                  </div>
                </div>
                <div className="rating rating-md mb-4">
                  {[...Array(5)].map((_, i) => (
                    <input
                      key={i}
                      type="radio"
                      className="mask mask-star-2 bg-warning"
                      defaultChecked={i === 4}
                      disabled
                    />
                  ))}
                </div>
                <p className="text-base-content/80 leading-relaxed text-lg">
                  "BobbyWear is our go-to for kids' dresses. Great QC and smooth communication. They've helped us scale from 100 to 1000+ units per order."
                </p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-xl border-2 border-base-300 hover:border-secondary/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="card-body p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="avatar placeholder">
                    <div className="bg-secondary text-white rounded-full w-16 shadow-lg">
                      <span className="text-2xl font-bold">J</span>
                    </div>
                  </div>
                  <div>
                    <div className="font-bold text-lg">Jay</div>
                    <div className="text-sm text-base-content/60">Boutique Buyer</div>
                  </div>
                </div>
                <div className="rating rating-md mb-4">
                  {[...Array(5)].map((_, i) => (
                    <input
                      key={i}
                      type="radio"
                      className="mask mask-star-2 bg-warning"
                      defaultChecked={i === 4}
                      disabled
                    />
                  ))}
                </div>
                <p className="text-base-content/80 leading-relaxed text-lg">
                  "Samples arrived fast and bulk matched exactly. Highly recommended for anyone looking for reliable manufacturing partners."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="scale-in">
          <div className="card bg-primary text-primary-content shadow-2xl border-2 border-primary">
            <div className="card-body text-center py-12 md:py-16 px-6 md:px-12">
              <div className="max-w-3xl mx-auto">
                <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/20 backdrop-blur-sm rounded-full mb-6 border border-white/30">
                  <Sparkles className="w-5 h-5 text-white" />
                  <span className="text-sm font-bold text-white uppercase tracking-wide">Get Started</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6">
                  Ready to See Samples?
                </h2>
                
                <p className="text-base md:text-lg text-white/90 mb-8 leading-relaxed">
                  Share your styles, quantities, and timeline. We'll reply within one business day with a detailed quote.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    className="btn btn-lg bg-white text-primary hover:bg-white/90 border-none shadow-xl gap-2 group" 
                    to="/catalog"
                  >
                    <span className="font-semibold">Browse Catalog</span>
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link 
                    className="btn btn-lg btn-outline border-2 border-white text-white hover:bg-white hover:text-primary" 
                    to="/contact"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}