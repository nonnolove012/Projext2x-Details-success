'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import './1.css'; // CSS สำหรับสไตล์ gallery

export default function ZoneBPage() {
  useEffect(() => {
    const figures = document.querySelectorAll('figure');
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    figures.forEach((fig) => observer.observe(fig));
  }, []);

  return (
    <>
      <header className="navbar">
        <div className="logo">PROJECT 2X</div>
      </header>

      <h1>โซน B</h1>

      <div className="gallery">
        {[
          { src: '/citypark.jpg', alt: 'citypark', caption: 'City Park', href: '/1/citypark1' },
          { src: '/interpark.avif', alt: 'interpark', caption: 'Inter Park', href: '/1/interpark1' },
          { src: '/modiz.jpg', alt: 'modiz', caption: 'Modiz launch' , href: '/1/modiz1'},
          { src: '/Pichet.jpg', alt: 'pichet', caption: 'ทรงพิเชษฐ์' ,href: '/1/picheat1'},
          { src: '/bunyan.jpg', alt: 'bunyan', caption: 'บันยันทรี',href: '/1/bunyan1' },
          { src: '/u plus.jpg', alt: 'u plus', caption: 'U Plus' ,href: '/1/uplus1'},
          { src: '/u house.jpg', alt: 'u house', caption: 'U House' ,href: '/1/uhouse1'},
        ].map(({ src, alt, caption, href }) =>
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
                <figcaption>{caption}</figcaption>
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
              <figcaption>{caption}</figcaption>
            </figure>
          )
        )}
      </div>
    </>
  );
}
