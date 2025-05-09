'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import '@/app/globals.css';
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

      {/* ปุ่มย้อนกลับ */}
      <Link href="/" className="back-btn" aria-label="ย้อนกลับ">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M15 8a.5.5 0 0 1-.5.5H3.707l3.147 3.146a.5.5 0 0 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 0 1 .708.708L3.707 7.5H14.5A.5.5 0 0 1 15 8z" />
        </svg>
      </Link>

      <h1>โซน G</h1>

      <div className="gallery">
        {[
          { src: 'tudome.jpg', alt: 'tudome', label: 'TU Dome' },
          { src: 'keystone.jpg', alt: 'keystone', label: 'Keystone' },
          { src: 'accom.jpg', alt: 'accompark', label: 'Accompark' },
          { src: 'vkp.jpg', alt: 'vkp', label: 'VKP Mansion' },
          { src: 'fenix.webp', alt: 'fenix', label: 'Fenix Apartment' },
        ].map(({ src, alt, label }) => (
          <figure key={alt}>
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
        ))}
      </div>
    </>
  );
}
