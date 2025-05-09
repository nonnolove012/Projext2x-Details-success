'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import './dcondo.css';

export default function DconZonePage() {
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
    { src: 'ubanu.webp', alt: 'uban', label: 'ยู บ้านสุขสบายรังสิต', href: '/dcondo/uban' },
    { src: 'huas.webp', alt: 'haus', label: 'Haus', href: '/dcondo/haus' },
    { src: 'dcon1.webp', alt: 'dcon1', label: 'Dcondo เฟส1', href: '/dcondo/dcon1' },
    { src: 'dcon2.jpg', alt: 'dcon2', label: 'Dcondo เฟส2', href: '/dcondo/dcon2' },
    { src: 'dcon3.jpeg', alt: 'dcon3', label: 'Dcondo เฟส3', href: '/dcondo/dcon3' },
    { src: 'dcon4.jpg', alt: 'dcon4', label: 'Dcon เฟส4', href: '/dcondo/dcon4' },
    { src: 'dcondoshine.webp', alt: 'dcondoshine', label: 'Dcondoshine', href: '/dcondo/dcondoshine' },
    { src: 'ss.jpg', alt: '1822', label: '18/22', href: '/dcondo/1822' },
  ];

  return (
    <>
      <header className="navbar">
        <div className="logo">PROJECT 2X</div>
      </header>

      <h1>โซน E</h1>

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
