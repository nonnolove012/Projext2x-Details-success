'use client';

import Image from "next/image";
import "./dcon11.css";

export default function DcondoPage() {
  return (
    <>
      <header className="dcondo-header">
        <h1>Dcondo Campus Resort Rangsit (เฟส 2)</h1>
        <p>คอนโดติดมหาวิทยาลัยธรรมศาสตร์ รังสิต สะดวก ปลอดภัย พร้อมสิ่งอำนวยความสะดวกครบครัน</p>
      </header>

      <main className="dcondo-main">
        <div className="image-row">
          <Image src="/d1.jpg" alt="ภาพ Dcondo เฟส 1" width={400} height={300} />
          <Image src="/d2.jpg" alt="ภาพ Dcondo เฟส 1 อีกมุม" width={400} height={300} />
        </div>

        <section>
          <h2>🏡 รายละเอียดที่พัก</h2>
          <p>
            Dcondo เฟส 1 เป็นคอนโดมิเนียมแบบ Low-rise 8 ชั้น ตั้งอยู่ตรงข้ามมหาวิทยาลัยธรรมศาสตร์ รังสิต 
            มีระบบรักษาความปลอดภัย 24 ชม. และสิ่งอำนวยความสะดวกครบครัน เช่น สระว่ายน้ำ ฟิตเนส และ Co-working Space
          </p>
        </section>

        <section>
          <h2>💰 ค่าเช่ารายเดือน</h2>
          <ul>
            <li>ห้องขนาด 29 ตร.ม.: 6,500 - 7,500 บาท/เดือน</li>
            <li>ห้องขนาด 30-32 ตร.ม. (พร้อมเครื่องซักผ้า): 7,800 - 8,500 บาท/เดือน</li>
            <li>ค่าน้ำ 18 บาท/หน่วย</li>
            <li>ค่าไฟตามบิลการไฟฟ้า</li>
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
                <td>✅ Co-working Space</td>
                <td>✅ ที่จอดรถ</td>
              </tr>
              <tr>
                <td>✅ ระบบรักษาความปลอดภัย 24 ชม.</td>
                <td>✅ คีย์การ์ด และกล้องวงจรปิด</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>📍 ทำเลที่ตั้ง</h2>
          <ul>
            <li>อยู่ติดกับมหาวิทยาลัยธรรมศาสตร์ รังสิต (ฝั่งประตูเชียงราก)</li>
            <li>ใกล้ตลาดบางขัน, ศูนย์อาหาร, ร้านค้า และ 7-Eleven</li>
          </ul>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1675.5629098962902!2d100.60767670860642!3d14.062883197140044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e27f8afee12fbf%3A0xd193644f41994eeb!2z4LiU4Li14LiE4Lit4LiZ4LmC4LiUIOC5geC4hOC4oeC4m-C4seC4qiDguKPguLXguKrguK3guKPguYzguJcg4Lij4Lix4LiH4Liq4Li04LiV!5e0!3m2!1sth!2sth!4v1746764766420!5m2!1sth!2sth"
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
              🌐 เว็บไซต์:{" "}
              <a
                href="https://propertyhub.in.th/%E0%B9%80%E0%B8%8A%E0%B9%88%E0%B8%B2%E0%B8%84%E0%B8%AD%E0%B8%99%E0%B9%82%E0%B8%94/%E0%B9%82%E0%B8%84%E0%B8%A3%E0%B8%87%E0%B8%81%E0%B8%B2%E0%B8%A3-dcondo-campus-resort-rangsit"
                target="_blank"
                rel="noopener noreferrer"
              >
                propertyhub.in.th
              </a>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
