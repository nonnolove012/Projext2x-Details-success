'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import './golfview.css';

export default function GolfViewZonePage() {
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

  const dorms = [
    { src: 'golfview.webp', alt: 'golfview', label: 'Golf View', href: '/golf-view/golfview' },
  ];

  return (
    <>
      <header className="navbar">
        <div className="logo">PROJECT 2X</div>
      </header>

      <h1>โซน H</h1>

      <div className="gallery">
        {dorms.map(({ src, alt, label, href }) => (
          <a href={href} key={alt} aria-label={`ไปยัง ${label}`}>
            <figure>
              <Image
                src={`/${src}`}
                alt={alt}
                width={360}
                height={240}
                style={{
                  borderRadius: '12px',
                  objectFit: 'cover',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                }}
              />
              <figcaption>{label}</figcaption>
            </figure>
          </a>
        ))}
      </div>
    </>
  );
}
