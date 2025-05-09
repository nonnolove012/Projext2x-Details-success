'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import './jpark.css'; 

export default function JParkZonePage() {
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
    { src: 'jpark1.jpg', alt: 'jpark', label: 'J Park', href: '/jpark/jpark1' },
    { src: 'thecampus1.webp', alt: 'campus', label: 'The Campus', href: '/jpark/campus1' },
    { src: 'brownie.jpg', alt: 'brownie', label: 'Brownie' , href: '/jpark/brownie1' },
    { src: 'fahdome.jpg', alt: 'fahdome', label: 'Fahdome Condo', href: '/jpark/fahdome1' },
  ];

  return (
    <>
      <header className="navbar">
        <div className="logo">PROJECT 2X</div>
      </header>

      <h1>โซน A</h1>

      <div className="gallery">
        {dorms.map(({ src, alt, label, href }) => {
          const content = (
            <figure key={alt}>
              <Image
                src={`/${src}`}
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
          );
          return href ? (
            <a href={href} key={alt} aria-label={`ไปยัง ${label}`}>
              {content}
            </a>
          ) : (
            content
          );
        })}
      </div>
    </>
  );
}
