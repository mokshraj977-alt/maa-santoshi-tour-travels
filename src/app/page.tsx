import Image from "next/image";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  CalendarDays,
  CarFront,
  Clock3,
  Compass,
  HeartHandshake,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
  Plane,
  Sparkles,
  Star,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import SiteHeader from "@/components/site-header";
import BookingForm from "@/components/booking-form";
import WhatsAppFloat from "@/components/whatsapp-float";

const primaryPhone = "+91 87709 72173";
const alternatePhone = "+91 76979 24445";
const primaryTel = "tel:+918770972173";
const alternateTel = "tel:+917697924445";
const businessName = "Maa Santoshi Tour & Travels";
const businessAddress =
  "Parijat Extension, Nehru Nagar, Bilaspur, Chhattisgarh 495001";
const mapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${businessName}, ${businessAddress}`,
)}`;
const mapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  businessAddress,
)}`;

const services: { title: string; copy: string; icon: LucideIcon }[] = [
  {
    title: "Local taxi service",
    copy: "Ask about getting around Bilaspur and your local pickup needs.",
    icon: CarFront,
  },
  {
    title: "Outstation travel",
    copy: "Share your destination and travel plans to enquire about a trip.",
    icon: Compass,
  },
  {
    title: "One-way & round trips",
    copy: "Tell us whether you need a one-way journey or a return trip.",
    icon: Navigation,
  },
  {
    title: "Family & pilgrimage trips",
    copy: "Discuss your group, itinerary, and travel preferences directly.",
    icon: HeartHandshake,
  },
  {
    title: "Pickup & drop enquiries",
    copy: "Get in touch with your pickup point and destination details.",
    icon: Plane,
  },
];

const vehicles = [
  {
    category: "Sedan category",
    detail: "Sample capacity: up to 4 passengers",
    image: "/images/vehicle-sedan.jpg",
    alt: "A modern sedan photographed on a quiet road",
  },
  {
    category: "MPV category",
    detail: "Sample capacity: up to 6 passengers",
    image: "/images/vehicle-mpv.jpg",
    alt: "A spacious passenger vehicle shown in a scenic setting",
  },
  {
    category: "SUV category",
    detail: "Sample capacity: up to 7 passengers",
    image: "/images/vehicle-suv.jpg",
    alt: "A modern SUV photographed on the road",
  },
];

const gallery = [
  {
    image: "/images/gallery-landscape.jpg",
    alt: "Open landscape and mountain scenery along a travel route",
    className: "gallery-tall",
  },
  {
    image: "/images/gallery-mountains.jpg",
    alt: "Mountain peaks beneath a clear sky",
    className: "",
  },
  {
    image: "/images/gallery-lake.jpg",
    alt: "A peaceful lakeside landscape surrounded by mountains",
    className: "",
  },
  {
    image: "/images/gallery-road.jpg",
    alt: "A scenic road through a green mountain valley",
    className: "gallery-wide",
  },
];

const reasons: { title: string; copy: string; icon: LucideIcon }[] = [
  {
    title: "Simple booking enquiries",
    copy: "Share your trip details in a few straightforward steps.",
    icon: CalendarDays,
  },
  {
    title: "Direct communication",
    copy: "Speak with the business by phone or start a WhatsApp enquiry.",
    icon: MessageCircle,
  },
  {
    title: "Convenient travel planning",
    copy: "Discuss your preferences and trip details before making plans.",
    icon: Compass,
  },
  {
    title: "Local contact details",
    copy: "Find the Bilaspur address and both listed phone numbers here.",
    icon: MapPin,
  },
  {
    title: "Trip information at a glance",
    copy: "Keep your pickup, destination, date, and passenger needs together.",
    icon: BadgeCheck,
  },
];

function SectionHeading({
  eyebrow,
  title,
  copy,
  centered = false,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
  centered?: boolean;
}) {
  return (
    <div className={`section-heading${centered ? " section-heading-centered" : ""}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {copy ? <p>{copy}</p> : null}
    </div>
  );
}

function WhatsAppLink({
  message,
  children,
  className = "button button-outline",
}: {
  message: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      className={className}
      href={`https://wa.me/918770972173?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero" id="home" aria-labelledby="hero-title">
          <Image
            className="hero-image"
            src="/images/hero-road.jpg"
            alt="A car travelling along a scenic open road"
            fill
            unoptimized
            priority
            sizes="100vw"
          />
          <div className="hero-shade" />
          <div className="hero-content page-shell">
            <div className="hero-copy">
              <span className="hero-kicker">
                <span className="kicker-line" />
                YOUR NEXT JOURNEY STARTS HERE
              </span>
              <h1 id="hero-title">Your Journey, Our Responsibility.</h1>
              <p>
                Comfortable rides, convenient travel, and personalised service
                for your journeys from Bilaspur.
              </p>
              <div className="hero-actions">
                <a className="button button-gold" href="#booking">
                  Book Your Trip <ArrowRight size={17} aria-hidden="true" />
                </a>
                <a className="button button-glass" href={primaryTel}>
                  <Phone size={16} aria-hidden="true" /> Call Now
                </a>
              </div>
            </div>
            <a className="hero-scroll" href="#services">
              <span>Explore our services</span>
              <ArrowDown size={16} aria-hidden="true" />
            </a>
          </div>
          <div className="hero-caption">
            <MapPin size={16} aria-hidden="true" />
            <span>Based in Bilaspur, Chhattisgarh</span>
          </div>
        </section>

        <section className="trust-strip" aria-label="Business information">
          <div className="page-shell trust-grid">
            <div className="trust-item trust-rating">
              <span className="trust-icon trust-stars" aria-hidden="true">
                <Star size={19} fill="currentColor" />
              </span>
              <div>
                <strong>5.0 <span className="stars-inline">★★★★★</span></strong>
                <span>40 reviews · supplied listing</span>
              </div>
            </div>
            <div className="trust-item">
              <span className="trust-icon"><MapPin size={20} aria-hidden="true" /></span>
              <div>
                <strong>Bilaspur, Chhattisgarh</strong>
                <span>Local business contact</span>
              </div>
            </div>
            <div className="trust-item">
              <span className="trust-icon"><Phone size={19} aria-hidden="true" /></span>
              <div>
                <strong>Easy to reach</strong>
                <span>Phone and WhatsApp enquiries</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section services-section" id="services">
          <div className="page-shell">
            <SectionHeading
              eyebrow="Travel, your way"
              title="Let’s plan the ride that fits."
              copy="Tell us what your journey looks like. These are enquiry categories; please contact us to confirm availability and details."
              centered
            />
            <div className="services-grid">
              {services.map(({ title, copy, icon: Icon }, index) => (
                <article className="service-card" key={title}>
                  <div className="service-card-top">
                    <span className="service-icon"><Icon size={23} aria-hidden="true" /></span>
                    <span className="service-number">0{index + 1}</span>
                  </div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                  <WhatsAppLink
                    className="text-link"
                    message={`Hello, I would like to enquire about ${title.toLowerCase()}. Please share availability and details.`}
                  >
                    Enquire now <ArrowUpRight size={15} aria-hidden="true" />
                  </WhatsAppLink>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="fleet-section section" id="fleet">
          <div className="page-shell">
            <div className="fleet-heading">
              <SectionHeading
                eyebrow="A glimpse of the ride"
                title="Find a fit for your journey."
                copy="Illustrative vehicle categories only. Photos, capacities, and categories below are sample/demo content—not a confirmed fleet or availability."
              />
              <a className="button button-outline fleet-cta" href="#booking">
                Ask about a vehicle <ArrowRight size={16} aria-hidden="true" />
              </a>
            </div>
            <div className="fleet-grid">
              {vehicles.map((vehicle, index) => (
                <article className="vehicle-card" key={vehicle.category}>
                  <div className="vehicle-image-wrap">
                    <Image
                      src={vehicle.image}
                      alt={vehicle.alt}
                      fill
                      unoptimized
                      sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 33vw"
                    />
                    <span className="vehicle-tag">Sample category 0{index + 1}</span>
                  </div>
                  <div className="vehicle-card-content">
                    <div>
                      <h3>{vehicle.category}</h3>
                      <p>{vehicle.detail}</p>
                    </div>
                    <WhatsAppLink
                      className="vehicle-link"
                      message={`Hello, I would like to enquire about a ${vehicle.category.toLowerCase()} for a trip. Please confirm what is available.`}
                    >
                      <MessageCircle size={16} aria-hidden="true" />
                      Enquire on WhatsApp
                    </WhatsAppLink>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="ambulance-section" id="ambulance">
          <div className="page-shell ambulance-inner">
            <div className="ambulance-symbol" aria-hidden="true">
              <Clock3 size={27} />
            </div>
            <div className="ambulance-copy">
              <span className="eyebrow eyebrow-light">A separate enquiry option</span>
              <h2>Ambulance Service — 24×7 Enquiries</h2>
              <p>
                Ambulance service is mentioned in the supplied business listing,
                but current availability and hours have not been confirmed.
                This website is not an emergency dispatch service; please call
                directly to check availability.
              </p>
              <div className="ambulance-numbers">
                <a href={primaryTel}><Phone size={15} aria-hidden="true" /> {primaryPhone}</a>
                <a href={alternateTel}><Phone size={15} aria-hidden="true" /> {alternatePhone}</a>
              </div>
            </div>
            <a className="button button-gold ambulance-call" href={primaryTel}>
              Call to check availability <ArrowRight size={17} aria-hidden="true" />
            </a>
          </div>
        </section>

        <section className="section reasons-section" id="about">
          <div className="page-shell reasons-layout">
            <div className="reasons-intro">
              <SectionHeading
                eyebrow="A thoughtful way to travel"
                title="Good journeys begin with clear conversations."
                copy="Get in touch, share the details, and ask the questions that help you plan with confidence."
              />
              <a className="text-link reasons-link" href="#contact">
                Meet us in Bilaspur <ArrowRight size={16} aria-hidden="true" />
              </a>
            </div>
            <div className="reasons-list">
              {reasons.map(({ title, copy, icon: Icon }, index) => (
                <article className="reason-row" key={title}>
                  <span className="reason-index">0{index + 1}</span>
                  <span className="reason-icon"><Icon size={20} aria-hidden="true" /></span>
                  <div>
                    <h3>{title}</h3>
                    <p>{copy}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="gallery-section section" aria-labelledby="gallery-title">
          <div className="page-shell">
            <div className="gallery-heading">
              <div>
                <span className="eyebrow">The open road</span>
                <h2 id="gallery-title">A little inspiration for the way.</h2>
              </div>
              <span className="gallery-note"><Sparkles size={16} aria-hidden="true" /> Travel moments, made for the journey</span>
            </div>
            <div className="gallery-grid">
              {gallery.map((item, index) => (
                <div className={`gallery-image ${item.className}`} key={item.image}>
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    unoptimized
                    sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 40vw"
                  />
                  <span className="gallery-index">0{index + 1}</span>
                </div>
              ))}
            </div>
            <p className="image-credit-note">
              Illustrative travel photography; images are not photographs of
              the business or its vehicles.
            </p>
          </div>
        </section>

        <section className="reviews-section section" id="reviews">
          <div className="page-shell reviews-layout">
            <div className="reviews-heading">
              <span className="eyebrow">From the business listing</span>
              <h2>Good to know before you go.</h2>
              <p>
                The supplied listing details show a 5.0-star rating from 40
                reviews. Review excerpts were not included in the project
                brief, so none are quoted here.
              </p>
              <a
                className="button button-outline"
                href={mapsSearchUrl}
                target="_blank"
                rel="noreferrer"
              >
                View on Google Maps <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
            <div className="rating-card">
              <span className="rating-label"><MapPin size={15} aria-hidden="true" /> SUPPLIED BUSINESS LISTING</span>
              <div className="rating-number">5.0 <span className="rating-star">★</span></div>
              <div className="rating-stars" aria-label="5 out of 5 stars">★★★★★</div>
              <p>40 reviews</p>
              <span className="rating-divider" />
              <span className="rating-foot">Listing information provided for this demo</span>
            </div>
          </div>
        </section>

        <section className="booking-section section" id="booking">
          <div className="page-shell booking-layout">
            <div className="booking-intro">
              <span className="eyebrow eyebrow-light">Let’s get the details</span>
              <h2>Tell us a little about your trip.</h2>
              <p>
                Share your plans and continue the enquiry in WhatsApp. Your
                message is prepared on your device; no booking is confirmed
                through this form.
              </p>
              <div className="booking-note">
                <span><MessageCircle size={18} aria-hidden="true" /></span>
                <p>
                  <strong>Prefer a quick conversation?</strong>
                  Call us directly and ask about your travel plans.
                </p>
              </div>
              <a href={primaryTel} className="booking-phone">
                <Phone size={16} aria-hidden="true" /> {primaryPhone}
              </a>
            </div>
            <div className="form-card">
              <div className="form-card-heading">
                <span>TRIP ENQUIRY</span>
                <small><span className="form-dot" /> No payment or account needed</small>
              </div>
              <BookingForm />
            </div>
          </div>
        </section>

        <section className="contact-section section" id="contact">
          <div className="page-shell">
            <SectionHeading
              eyebrow="We’re easy to find"
              title="Let’s talk about your next trip."
              copy="Reach out directly for travel enquiries and availability."
            />
            <div className="contact-grid">
              <div className="contact-details">
                <div className="contact-name-block">
                  <span className="contact-emblem" aria-hidden="true">माँ</span>
                  <div>
                    <h3>{businessName}</h3>
                    <p lang="hi">माँ संतोषी टूर &amp; ट्रेवल्स</p>
                  </div>
                </div>
                <div className="contact-detail-row">
                  <span className="contact-detail-icon"><MapPin size={20} aria-hidden="true" /></span>
                  <div><strong>Visit or find us</strong><p>{businessAddress}</p></div>
                </div>
                <div className="contact-detail-row">
                  <span className="contact-detail-icon"><Phone size={19} aria-hidden="true" /></span>
                  <div>
                    <strong>Call us</strong>
                    <p><a href={primaryTel}>{primaryPhone}</a><br /><a href={alternateTel}>{alternatePhone}</a></p>
                  </div>
                </div>
                <div className="contact-detail-row">
                  <span className="contact-detail-icon"><Clock3 size={20} aria-hidden="true" /></span>
                  <div><strong>Availability</strong><p>Contact us for availability.</p></div>
                </div>
                <div className="contact-actions">
                  <WhatsAppLink
                    className="button button-navy"
                    message="Hello, I would like to enquire about travel from Bilaspur. Please get in touch."
                  >
                    <MessageCircle size={17} aria-hidden="true" /> WhatsApp us
                  </WhatsAppLink>
                  <a
                    className="button button-outline"
                    href={mapsDirectionsUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Get directions <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                </div>
              </div>
              <a
                className="map-card"
                href={mapsSearchUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Search for Maa Santoshi Tour and Travels in Bilaspur on Google Maps"
              >
                <div className="map-grid-lines" aria-hidden="true" />
                <div className="map-path map-path-one" aria-hidden="true" />
                <div className="map-path map-path-two" aria-hidden="true" />
                <span className="map-location-pin"><MapPin size={23} fill="currentColor" aria-hidden="true" /></span>
                <div className="map-label">
                  <span className="map-label-icon"><MapPin size={17} aria-hidden="true" /></span>
                  <div>
                    <strong>Maa Santoshi Tour &amp; Travels</strong>
                    <span>Parijat Extension, Nehru Nagar, Bilaspur</span>
                  </div>
                  <ArrowUpRight size={17} aria-hidden="true" />
                </div>
                <span className="map-reference">34MJ+7Q · BILASPUR, CHHATTISGARH</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="page-shell footer-main">
          <div className="footer-brand">
            <a className="brand brand-footer" href="#home">
              <span className="brand-mark" aria-hidden="true">माँ</span>
              <span className="brand-words">
                <strong>Maa Santoshi</strong>
                <span>TOUR &amp; TRAVELS</span>
              </span>
            </a>
            <p>Thoughtful travel starts with a conversation.</p>
          </div>
          <div className="footer-links">
            <span className="footer-title">Explore</span>
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#fleet">Our Fleet</a>
            <a href="#about">About</a>
            <a href="#reviews">Reviews</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer-contact">
            <span className="footer-title">Get in touch</span>
            <a href={primaryTel}>{primaryPhone}</a>
            <a href={alternateTel}>{alternatePhone}</a>
            <span>Bilaspur, Chhattisgarh</span>
            <a href="#contact">Full contact details <ArrowRight size={14} aria-hidden="true" /></a>
          </div>
          <a className="footer-booking" href="#booking">
            Plan your trip <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
        <div className="footer-bottom">
          <div className="page-shell footer-bottom-inner">
            <span>© {new Date().getFullYear()} Maa Santoshi Tour &amp; Travels</span>
            <span lang="hi">माँ संतोषी टूर &amp; ट्रेवल्स</span>
            <a href="#home">Back to top ↑</a>
          </div>
        </div>
      </footer>
      <WhatsAppFloat />
    </>
  );
}
