import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Star, MapPin, Calendar, HeartHandshake, Droplets, ShieldCheck, Award } from 'lucide-react';
import { SPA_SERVICES, AURANEST_PILLARS, TESTIMONIALS, SpaService } from '../data/spaData';
import { BUSINESS_CONFIG } from '../config/business';
import { GoogleMapsEmbed } from '../components/GoogleMapsEmbed';

interface HomePageProps {
  onOpenBooking: (serviceId?: string) => void;
  onSelectService: (service: SpaService) => void;
  onOpenConfig?: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onOpenBooking,
  onSelectService,
  onOpenConfig,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = [
    'All',
    'Bodywork & Muscle Relief',
    'Hydro & Thermal Therapy',
    'Vedic Healing Rituals',
    'Sanctuary Packages',
  ];

  const filteredServices = activeCategory === 'All'
    ? SPA_SERVICES.slice(0, 6)
    : SPA_SERVICES.filter((s) => s.category === activeCategory);

  const getPillarIcon = (name: string) => {
    switch (name) {
      case 'Award': return <Award className="w-5 h-5 text-[#446353]" />;
      case 'Droplets': return <Droplets className="w-5 h-5 text-[#446353]" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-[#446353]" />;
      case 'HeartHandshake': return <HeartHandshake className="w-5 h-5 text-[#446353]" />;
      default: return <Droplets className="w-5 h-5 text-[#446353]" />;
    }
  };
  return (
    <div className="flex flex-col w-full bg-[#FAF7F2]">
      
      {/* 1. Cinematic Hero Section — Warm organic spa imagery with gentle espresso-toned scrim */}
      <section className="relative w-full min-h-[600px] lg:min-h-[660px] flex items-center bg-[#201C17] text-white overflow-hidden">
        {/* Background Spa Visual with Warm Natural Lighting */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=1920&q=85"
            alt="AuraNest Wellness Sanctuary peaceful massage suite in Bhopal"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center filter brightness-[0.78] contrast-[1.05]"
          />
          {/* Warm Espresso and Terracotta Scrim */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#201C17]/95 via-[#201C17]/80 to-[#201C17]/50" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
          <div className="max-w-2xl">
            
            {/* Unboxed Kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#7A9988] mb-4">
              <span>{BUSINESS_CONFIG.city}, {BUSINESS_CONFIG.state}</span>
              <span aria-hidden="true" className="text-[#B3644C]">·</span>
              <span>Holistic Wellness Sanctuary</span>
            </div>

            {/* Display Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#FAF7F2] leading-[1.15] text-balance">
              {BUSINESS_CONFIG.tagline}
            </h1>

            {/* Value Proposition */}
            <p className="mt-5 text-base sm:text-lg text-[#ECE4D8] leading-relaxed font-light">
              Release accumulated fatigue and rediscover deep bodily equilibrium. 
              Experience anatomical musculoskeletal therapy, heated volcanic stones, 
              and authentic Vedic rituals in tranquil, private climate-controlled suites.
            </p>

            {/* CTA Group: Reserve Appointment + Explore Treatments + Download Project ZIP */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenBooking()}
                className="px-7 py-3.5 bg-[#446353] hover:bg-[#365143] text-white text-xs font-semibold uppercase tracking-wider rounded-sm transition-all shadow-md hover:shadow-lg cursor-pointer flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Reserve Appointment</span>
              </button>
              
              <Link
                to="/services"
                className="px-6 py-3.5 border border-[#ECE4D8] hover:border-white text-[#FAF7F2] hover:text-white text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors flex items-center gap-1.5"
              >
                <span>View Treatment Menu</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* 2. 4-Column Proof & Assurance Strip — Warm Espresso (#28231D) with Eucalyptus (#7A9988) Accents */}
      <section className="bg-[#28231D] border-b border-[#3E362E] py-6 px-4 sm:px-6 lg:px-8 text-[#ECE4D8]">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
          <div className="border-r border-[#3E362E] last:border-0 pr-4">
            <div className="font-serif text-2xl font-bold text-[#FAF7F2]">100%</div>
            <div className="text-xs text-[#7A9988] mt-0.5">Organic Unrefined Botanicals</div>
          </div>
          <div className="border-r border-[#3E362E] last:border-0 pr-4">
            <div className="font-serif text-2xl font-bold text-[#FAF7F2]">Private</div>
            <div className="text-xs text-[#7A9988] mt-0.5">Climate En-Suite Suites</div>
          </div>
          <div className="border-r border-[#3E362E] last:border-0 pr-4">
            <div className="font-serif text-2xl font-bold text-[#FAF7F2]">Master</div>
            <div className="text-xs text-[#7A9988] mt-0.5">Certified Bodywork Practitioners</div>
          </div>
          <div>
            <div className="font-serif text-2xl font-bold text-[#FAF7F2]">Bhopal</div>
            <div className="text-xs text-[#7A9988] mt-0.5">Centrally Situated Retreat</div>
          </div>
        </div>
      </section>

      {/* 3. Introduction & Philosophy Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-xl overflow-hidden shadow-lg aspect-4/3 sm:aspect-5/4 bg-[#F3EFE6] border border-[#E3DACD]">
              <img
                src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1000&q=80"
                alt="Therapist preparing restorative bodywork at AuraNest Wellness Bhopal"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Inset highlight card */}
            <div className="hidden sm:block absolute -bottom-6 -right-6 max-w-xs bg-white p-5 rounded-lg shadow-md border border-[#E3DACD]">
              <p className="font-serif text-base italic text-[#28231D] leading-snug">
                "Restoration is not mere stillness, but the active revival of physical harmony and mental clarity."
              </p>
              <p className="text-[11px] uppercase tracking-wider text-[#B3644C] font-semibold mt-2">
                — The AuraNest Sanctuary Credo
              </p>
            </div>
          </div>

          {/* Prose Column */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="text-xs font-semibold uppercase tracking-widest text-[#446353] mb-2">
              Our Bhopal Retreat
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#28231D] font-normal tracking-tight text-balance">
              Where Evidence-Informed Bodywork Meets Deep Tranquility
            </h2>
            <p className="mt-5 text-sm sm:text-base text-[#685F53] leading-relaxed">
              At <strong>{BUSINESS_CONFIG.brandName}</strong>, we approach wellness as a harmonious balance of 
              musculoskeletal therapy and tranquil sensory stillness. Nestled in Bhopal, our retreat provides 
              an ambient sanctuary where the pressures of modern schedules give way to warm aromatic waters, 
              custom acoustic soundscapes, and deliberate therapeutic touch.
            </p>
            <p className="mt-3 text-sm sm:text-base text-[#685F53] leading-relaxed">
              Whether you are addressing repetitive strain from computer work, resetting sleep cycles with 
              authentic Ayurvedic Shirodhara, or celebrating a quiet shared journey in our executive couples haven, 
              every treatment is tailored with undivided personal attention.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#28231D] hover:text-[#446353] underline underline-offset-4"
              >
                <span>Discover Our Standards & Therapies</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Curated Treatments & Transparent Pricing — Soft Cream (#F3EFE6) Section */}
      <section className="py-20 bg-[#F3EFE6] border-y border-[#E3DACD] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-[#446353] mb-1.5">
                Treatment Portfolio
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#28231D] font-normal tracking-tight">
                Curated Therapies & Transparent Tariffs
              </h2>
            </div>
            
            {/* Category Filter Controls */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-white rounded-lg border border-[#E3DACD]">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                    activeCategory === cat
                      ? 'bg-[#446353] text-white shadow-xs font-semibold'
                      : 'text-[#685F53] hover:text-[#28231D]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Services Grid — Pure White (#FFFFFF) Cards with Sage & Terracotta accents */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-xl border border-[#E3DACD] overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col group"
              >
                {/* Image */}
                <div className="relative h-52 bg-[#F9F6F0] overflow-hidden">
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.currentTarget as HTMLElement).style.display = 'none';
                    }}
                  />
                  <div className="absolute top-3 left-3 bg-[#28231D]/85 backdrop-blur-xs text-[#FAF7F2] text-[11px] font-medium px-2.5 py-1 rounded">
                    {service.category}
                  </div>
                  {service.popular && (
                    <div className="absolute top-3 right-3 bg-[#F7EDE8] text-[#B3644C] border border-[#E8D3CB] text-[11px] font-semibold px-2.5 py-1 rounded">
                      Signature
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2 text-xs text-[#685F53] mb-2">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[#446353]" />
                        <span>{service.duration}</span>
                      </span>
                      <span className="font-mono text-base font-semibold text-[#28231D]">
                        ₹{service.price.toLocaleString('en-IN')}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl font-medium text-[#28231D] tracking-tight leading-snug">
                      {service.title}
                    </h3>

                    <p className="mt-2.5 text-xs sm:text-sm text-[#685F53] line-clamp-3 leading-relaxed">
                      {service.shortDesc}
                    </p>
                  </div>

                  {/* Card Actions */}
                  <div className="mt-6 pt-4 border-t border-[#F3EFE6] flex items-center justify-between gap-3">
                    <button
                      onClick={() => onSelectService(service)}
                      className="text-xs font-semibold uppercase tracking-wider text-[#685F53] hover:text-[#446353] underline underline-offset-4 cursor-pointer"
                    >
                      View Protocol
                    </button>
                    <button
                      onClick={() => onOpenBooking(service.id)}
                      className="px-4 py-2 bg-[#446353] hover:bg-[#365143] text-white text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors cursor-pointer shadow-xs"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#446353] hover:bg-[#365143] text-white text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors shadow-sm"
            >
              <span>Explore All Sanctuary Treatments</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* 5. AuraNest Wellness Pillars */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="text-xs font-semibold uppercase tracking-widest text-[#446353] mb-2">
            The AuraNest Standards
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#28231D] font-normal tracking-tight">
            Our Four Guiding Pillars of Care
          </h2>
          <p className="mt-3 text-sm text-[#685F53]">
            Every treatment at AuraNest Wellness is guided by a commitment to clinical rigor, uncompromised botanical purity, and personalized comfort.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {AURANEST_PILLARS.map((pillar, idx) => (
            <div 
              key={idx}
              className="bg-white p-6 rounded-xl border border-[#E3DACD] shadow-xs flex flex-col"
            >
              <div className="w-10 h-10 rounded-full bg-[#E7EFEA] flex items-center justify-center mb-4">
                {getPillarIcon(pillar.iconName)}
              </div>
              <h3 className="font-serif text-lg font-medium text-[#28231D] mb-2">
                {pillar.title}
              </h3>
              <p className="text-xs text-[#685F53] leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Guest Reflections & Testimonials — Soft Cream (#F3EFE6) Section */}
      <section className="py-20 bg-[#F3EFE6] border-t border-[#E3DACD] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <div className="text-xs font-semibold uppercase tracking-widest text-[#446353] mb-2">
              Guest Experiences
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#28231D] font-normal tracking-tight">
              Testimonials from Bhopal Guests
            </h2>
            <p className="mt-3 text-sm text-[#685F53]">
              Real feedback from guests who trust AuraNest for physical recovery and inner peace.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="bg-white p-7 rounded-xl border border-[#E3DACD] shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-[#B3644C] mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#B3644C] text-[#B3644C]" />
                    ))}
                  </div>

                  <blockquote className="font-serif text-base text-[#28231D] leading-relaxed italic">
                    "{t.quote}"
                  </blockquote>
                </div>

                <div className="mt-6 pt-4 border-t border-[#F3EFE6] flex flex-col gap-1 text-xs">
                  <div className="font-semibold text-[#28231D]">{t.author}</div>
                  <div className="text-[#685F53]">{t.locality} · Treatment: <span className="text-[#28231D] font-medium">{t.treatment}</span></div>
                  <div className="text-[#446353] font-medium text-[11px] mt-1">✓ Outcome: {t.outcome}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Centralized Office Location & Google Maps Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-8">
          <div className="lg:col-span-6">
            <div className="text-xs font-semibold uppercase tracking-widest text-[#446353] mb-2">
              Visit AuraNest Wellness
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#28231D] font-normal tracking-tight">
              Official Office & Spa Location
            </h2>
            <p className="mt-4 text-sm text-[#685F53] leading-relaxed">
              Centrally accessible within <strong>{BUSINESS_CONFIG.city}, {BUSINESS_CONFIG.state}</strong>. 
              Our private suites are fully sound-damped and feature dedicated changing and rainfall shower amenities.
            </p>

            <div className="mt-6 space-y-3 text-xs text-[#28231D]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#446353] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-[#28231D]">Address: </span>
                  <span>{BUSINESS_CONFIG.city}, {BUSINESS_CONFIG.state}, {BUSINESS_CONFIG.country}</span>
                  <div className="text-[#685F53] mt-0.5">{BUSINESS_CONFIG.streetAddressPlaceholder}</div>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#446353] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-[#28231D]">Operating Hours: </span>
                  <span>{BUSINESS_CONFIG.hours.weekday}</span>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={BUSINESS_CONFIG.maps.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#446353] hover:bg-[#365143] text-white text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors shadow-xs"
              >
                Get Google Maps Directions
              </a>
              <Link
                to="/contact"
                className="px-6 py-3 border border-[#E3DACD] hover:border-[#446353] text-[#28231D] text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors bg-white"
              >
                Contact Concierge
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            <GoogleMapsEmbed onOpenConfig={onOpenConfig} />
          </div>
        </div>
      </section>

    </div>
  );
};
