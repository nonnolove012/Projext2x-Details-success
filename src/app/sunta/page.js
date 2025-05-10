'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import './sunta.css';

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

  const dorms = [
    { src: 'sunta.jpg', alt: 'sunta', label: 'Sunta', href: '/sunta/sunta1' },
    { src: 'hiso.webp', alt: 'hiso', label: 'Hiso Place', href: '/sunta/hiso' },
    { src: 'the charn.jpg', alt: 'thecharn', label: 'The Charn', href: '/sunta/thecharn' },
    { src: 'loft.webp', alt: 'loft', label: 'Loft Loft Dormitory', href: '/sunta/loft' },
  ];

  return (
    <>
      <header className="navbar">
        <div className="logo">PROJECT 2X</div>
      </header>

      <h1>โซน F</h1>

      <div className="gallery">
        {dorms.map(({ src, alt, label, href }) => (
          <a href={href} key={alt} aria-label={`ไปยัง ${label}`}>
            <figure>
              <Image
                src={`/${src}`}
                alt={alt}
                width={320}
                height={200}
                style={{
                  borderRadius: '12px',
                  objectFit: 'cover',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
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
