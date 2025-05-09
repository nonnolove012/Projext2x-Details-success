'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import './2.css';

export default function Page() {
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

      <h1>โซน C</h1>

      <div className="gallery">
        {[
          { src: '/skyview.avif', alt: 'skyview', label: 'Sky View', href: '/2/sky1' },
          { src: '/vanarin.jpg', alt: 'vanarin', label: 'Vanarin', href: '/2/vanarin' },
          { src: '/common.jpg', alt: 'common', label: 'Common', href: '/2/common' },
          { src: '/terra.jpg', alt: 'terra', label: 'Terra', href: '/2/terra' },
          { src: '/tudio.jpg', alt: 'tudio', label: 'Tudio', href: '/2/tudio' },
          { src: '/vanda.jpg', alt: 'vanda', label: 'Vanda TU', href: '/2/vanda' },
        ].map(({ src, alt, label, href }) =>
          href ? (
            <a key={alt} href={href} style={{ textDecoration: 'none', color: 'inherit' }}>
              <figure>
                <Image
                  src={src}
                  alt={alt}
                  width={320}
                  height={200}
                  style={{
                    borderRadius: '12px',
                    objectFit: 'cover',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                  }}
                />
                <figcaption>{label}</figcaption>
              </figure>
            </a>
          ) : (
            <figure key={alt}>
              <Image
                src={src}
                alt={alt}
                width={320}
                height={200}
                style={{
                  borderRadius: '12px',
                  objectFit: 'cover',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                }}
              />
              <figcaption>{label}</figcaption>
            </figure>
          )
        )}
      </div>
    </>
  );
}
