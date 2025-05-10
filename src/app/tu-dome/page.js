'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import './tudome.css';

export default function KavePage() {
  useEffect(() => {
    const figures = document.querySelectorAll("figure");
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    figures.forEach(fig => observer.observe(fig));
  }, []);

  return (
    <>
      <header className="navbar">
        <div className="logo">PROJECT 2X</div>
      </header>

      <h1>โซน G</h1>

      <div className="gallery">
        {[
          { src: 'tudome.jpg', alt: 'tudome', label: 'TU Dome', href: '/tu-dome/tudome' },
          { src: 'keystone.jpg', alt: 'keystone', label: 'Keystone', href: '/tu-dome/keystone' },
          { src: 'accom.jpg', alt: 'accompark', label: 'Accompark', href: '/tu-dome/accompark' },
          { src: 'vkp.jpg', alt: 'vkp', label: 'VKP Mansion', href: '/tu-dome/vkp' },
          { src: 'f3.webp', alt: 'fenix', label: 'Fenix Apartment', href: '/tu-dome/fenix' },
        ].map(({ src, alt, label, href }) => (
          <figure key={alt}>
            <a href={href}>
              <Image
                src={`/${src}`}
                alt={alt}
                width={320}
                height={200}
                style={{
                  borderRadius: '12px',
                  objectFit: 'cover',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                  cursor: 'pointer'
                }}
              />
            </a>
            <figcaption>{label}</figcaption>
          </figure>
        ))}
      </div>
    </>
  );
}
