'use client';

import Image from "next/image";
import "./common11.css";

export default function CommonTUPage() {
  return (
    <>
      <header className="skyview-header">
        <h1>คอนโด Common TU มหาวิทยาลัยธรรมศาสตร์</h1>
        <p>คอนโดหรูใกล้ มธ. รังสิต มีสระว่ายน้ำ ฟิตเนส สิ่งอำนวยความสะดวกครบครัน เหมาะกับนักศึกษา</p>
      </header>

      <main className="skyview-main">
        <div className="image-row">
          <Image src="/cm1.jpg" alt="ภาพคอนโด Common TU 1" width={400} height={300} />
          <Image src="/cm2.jpg" alt="ภาพคอนโด Common TU 2" width={400} height={300} />
        </div>

        <section>
          <h2>🏡 รายละเอียดที่พัก</h2>
          <p>
            Common TU เป็นคอนโดมิเนียมหรู ตั้งอยู่ห่างจากมหาวิทยาลัยธรรมศาสตร์ ศูนย์รังสิตเพียงไม่กี่นาที 
            มีระบบรักษาความปลอดภัย 24 ชั่วโมง ห้องพักตกแต่งพร้อมอยู่ พร้อมเฟอร์นิเจอร์ครบ 
            บรรยากาศสงบ เหมาะสำหรับการพักผ่อนและการเรียน
          </p>
        </section>

        <section>
          <h2>💰 ค่าเช่ารายเดือน</h2>
          <ul>
            <li>ค่าเช่าเริ่มต้นประมาณ 9,000 - 15,000 บาท/เดือน (ขึ้นอยู่กับชั้น วิว และขนาดห้อง)</li>
            <li>ค่าน้ำ 20 บาท/หน่วย ค่าไฟตามมิเตอร์จริง</li>
            <li>เงินประกัน 2 เดือน + ค่าเช่าล่วงหน้า 1 เดือน</li>
          </ul>
        </section>

        <section>
          <h2>💪 สิ่งอำนวยความสะดวก</h2>
          <table>
            <tbody>
              <tr>
                <td>✅ สระว่ายน้ำ</td>
                <td>✅ ฟิตเนส</td>
              </tr>
              <tr>
                <td>✅ Co-working space</td>
                <td>✅ ห้องประชุม</td>
              </tr>
              <tr>
                <td>✅ ที่จอดรถ</td>
                <td>✅ กล้องวงจรปิดและระบบคีย์การ์ด</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>📍 ทำเลที่ตั้ง</h2>
          <ul>
            <li>ใกล้มหาวิทยาลัยธรรมศาสตร์ รังสิต เดินทางได้สะดวก</li>
            <li>ใกล้ตลาดบางขัน ฟิวเจอร์พาร์ครังสิต ร้านอาหาร และคาเฟ่</li>
          </ul>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3870.1975596465636!2d100.61192057486207!3d14.06550828635992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e27fb1456fc383%3A0x590deed8dc71e0f9!2z4LiE4Lit4Lih4Lih4Lit4LiZIOC4l-C4teC4ouC4uQ!5e0!3m2!1sth!2sth!4v1746684193547!5m2!1sth!2sth"
            width="100%"
            height="400"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>

        <section>
          <h2>📞 ติดต่อเพิ่มเติม</h2>
          <ul className="contact-icons">
            <li>
              <i className="fas fa-globe"></i> เว็บไซต์:{" "}
              <a href="https://propertyhub.in.th/%E0%B9%80%E0%B8%8A%E0%B9%88%E0%B8%B2%E0%B8%84%E0%B8%AD%E0%B8%99%E0%B9%82%E0%B8%94/%E0%B9%82%E0%B8%84%E0%B8%A3%E0%B8%87%E0%B8%81%E0%B8%B2%E0%B8%A3-common-tu" target="_blank" rel="noopener noreferrer">
              propertyhub.in.th
              </a>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
