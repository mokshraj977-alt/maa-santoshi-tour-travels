"use client";

import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";

const links = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Our Fleet", href: "#fleet" },
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <header className="site-header">
      <div className="page-shell header-inner">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Maa Santoshi Tour & Travels home">
          <span className="brand-mark" aria-hidden="true">माँ</span>
          <span className="brand-words">
            <strong>Maa Santoshi</strong>
            <span>TOUR &amp; TRAVELS</span>
          </span>
        </a>
        <nav className={`main-nav${isOpen ? " nav-open" : ""}`} aria-label="Main navigation">
          {links.map((link) => (
            <a href={link.href} key={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
          <a className="button button-navy nav-mobile-cta" href="#booking" onClick={closeMenu}>
            Book Your Trip
          </a>
        </nav>
        <div className="header-actions">
          <a className="header-phone" href="tel:+918770972173" aria-label="Call Maa Santoshi Tour and Travels">
            <Phone size={15} aria-hidden="true" />
            <span>+91 87709 72173</span>
          </a>
          <a className="button button-navy header-cta" href="#booking">
            Book Your Trip
          </a>
        </div>
        <button
          className="menu-toggle"
          type="button"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>
      <div
        className={`mobile-nav-panel${isOpen ? " mobile-nav-open" : ""}`}
        id="mobile-navigation"
        aria-hidden={!isOpen}
        inert={!isOpen}
      >
        <nav aria-label="Mobile navigation">
          {links.map((link) => (
            <a href={link.href} key={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
          <a className="button button-navy" href="#booking" onClick={closeMenu}>
            Book Your Trip
          </a>
          <a className="mobile-call" href="tel:+918770972173" onClick={closeMenu}>
            <Phone size={16} aria-hidden="true" /> +91 87709 72173
          </a>
        </nav>
      </div>
    </header>
  );
}
