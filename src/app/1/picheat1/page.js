'use client';

import Image from "next/image";
import "./picheat1.css"; 

export default function SongpitPage() {
  return (
    <>
      <header className="jpark-header">
        <h1>หอพักทรงพิเชษฐ์ มหาวิทยาลัยธรรมศาสตร์</h1>
        <p>หอพักชายในเครือมหาวิทยาลัย ราคาย่อมเยา ใกล้คณะ วิศวะ วิทย์ ศิลปศาสตร์</p>
      </header>

      <main className="jpark-main">
        <div className="image-row">
          <Image src="/pc2.jpg" alt="ภาพหอพักทรงพิเชษฐ์ 1" width={400} height={300} />
          <Image src="/pc1.jpg" alt="ภาพหอพักทรงพิเชษฐ์ 2" width={400} height={300} />
        </div>

        <section>
          <h2>🏡 รายละเอียดหอพัก</h2>
          <p>
            หอพักทรงพิเชษฐ์เป็นหอพักชายภายในมหาวิทยาลัยธรรมศาสตร์ ศูนย์รังสิต
            ตั้งอยู่ใกล้คณะวิศวกรรมศาสตร์และคณะวิทยาศาสตร์ เหมาะสำหรับนักศึกษาที่ต้องการความสะดวกในการเดินทางไปเรียน
            ภายในห้องมีเฟอร์นิเจอร์พื้นฐาน เช่น เตียงเดี่ยว โต๊ะเขียนหนังสือ เก้าอี้ ตู้เสื้อผ้า
            มีระบบรักษาความปลอดภัยและเจ้าหน้าที่ดูแลตลอด 24 ชม.
          </p>
        </section>

        <section>
          <h2>💰 ค่าเช่ารายเดือน</h2>
          <ul>
            <li>ค่าเช่าประมาณ 2,900 - 6,000 บาท/เดือน</li>
            <li>มีค่าสาธารณูปโภคเพิ่มเติม (น้ำ, ไฟ ตามมิเตอร์)</li>
            <li>เหมาะสำหรับนักศึกษาชายระดับปริญญาตรี</li>
          </ul>
        </section>

        <section>
          <h2>💪 สิ่งอำนวยความสะดวก</h2>
          <table>
            <tbody>
              <tr>
                <td>✅ อินเทอร์เน็ต Wi-Fi</td>
                <td>✅ ระบบคีย์การ์ด</td>
              </tr>
              <tr>
                <td>✅ ห้องน้ำในตัว</td>
                <td>✅ พื้นที่ซักผ้า / ตากผ้า</td>
              </tr>
              <tr>
                <td>✅ กล้องวงจรปิด</td>
                <td>✅ เจ้าหน้าที่รักษาความปลอดภัย 24 ชม.</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>📍 ทำเลที่ตั้ง</h2>
          <ul>
            <li>ตั้งอยู่ภายใน มธ. ใกล้โซนตึกเรียน</li>
            <li>เดินไปเรียนได้ภายใน 5-10 นาที</li>
          </ul>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3870.1826205082116!2d100.6034793793457!3d14.066391000000008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e27f5d0b17a54d%3A0xf6436f809984b7cb!2z4Lir4Lit4Lie4Lix4LiB4LiK4Liy4Lii4LiX4Lij4LiH4Lie4Li04LmA4LiK4Lip4LiQ4LmM!5e0!3m2!1sth!2sth!4v1746665177010!5m2!1sth!2sth"
            width="100%"
            height="400"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>

        <section>
          <h2>📞 ติดต่อเพิ่มเติม</h2>
          <ul className="contact-icons">
            <li>
              <i className="fas fa-globe"></i> เว็บไซต์:{" "}
              <a href="https://www.yellowpages.co.th/profile/%E0%B8%AB%E0%B8%AD%E0%B8%9E%E0%B8%B1%E0%B8%81%E0%B8%97%E0%B8%A3%E0%B8%87%E0%B8%9E%E0%B8%B4%E0%B9%80%E0%B8%8A%E0%B8%A9%E0%B8%90%E0%B9%8C-nagvec" target="_blank" rel="noopener noreferrer">
              yellowpages.co.th
              </a>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
