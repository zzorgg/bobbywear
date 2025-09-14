import React from "react";
import { Link } from "react-router-dom";
import CarouselHero from "../components/CarouselHero";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

export default function Home() {
  const featured = products.slice(0, 3);

  return (
    <div className="container mx-auto px-4 py-8">
      <CarouselHero />

      {/* Features */}
      <section className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="card bg-base-200">
          <div className="card-body">
            <h3 className="card-title">Flexible MOQs</h3>
            <p className="text-base-content/70">Start small and scale fast with batch sizes tailored to your launch.</p>
          </div>
        </div>
        <div className="card bg-base-200">
          <div className="card-body">
            <h3 className="card-title">Reliable Lead Times</h3>
            <p className="text-base-content/70">Transparent timelines from sampling to bulk production.</p>
          </div>
        </div>
        <div className="card bg-base-200">
          <div className="card-body">
            <h3 className="card-title">Quality Control</h3>
            <p className="text-base-content/70">Inline and final AQL checks to keep returns low and customers happy.</p>
          </div>
        </div>
      </section>

      {/* Product preview */}
      <section className="mt-10">
        <div className="flex items-end justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold">New & Popular</h2>
            <p className="text-base-content/70">A glimpse of our latest girls' wear.</p>
          </div>
          <Link to="/catalog" className="btn btn-outline">See all</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      {/* Stats */}
      <section className="mt-10">
        <div className="stats stats-vertical lg:stats-horizontal shadow bg-base-200">
          <div className="stat">
            <div className="stat-title">Years in business</div>
            <div className="stat-value">10+</div>
            <div className="stat-desc">Since 2015</div>
          </div>
          <div className="stat">
            <div className="stat-title">On-time delivery</div>
            <div className="stat-value">98%</div>
            <div className="stat-desc">Past 12 months</div>
          </div>
          <div className="stat">
            <div className="stat-title">Styles shipped</div>
            <div className="stat-value">500+</div>
            <div className="stat-desc">Across 30+ brands</div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="card bg-base-100 shadow-md">
          <div className="card-body">
            <p className="italic">“BobbyWear is our go-to for kids' dresses. Great QC and smooth communication.”</p>
            <div className="text-sm text-base-content/60">— Mira, Brand Owner</div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-md">
          <div className="card-body">
            <p className="italic">“Samples arrived fast and bulk matched exactly. Highly recommended.”</p>
            <div className="text-sm text-base-content/60">— Jay, Boutique Buyer</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-12">
        <div className="hero bg-base-200 rounded-box">
          <div className="hero-content text-center">
            <div className="max-w-xl">
              <h2 className="text-3xl font-bold">Ready to see samples?</h2>
              <p className="py-4 text-base-content/70">Share your styles, quantities, and timeline. We'll reply within one business day.</p>
              <Link className="btn btn-primary" to="/catalog">Go to Catalog</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
