'use client';

import Image from "next/image";
import "./dcon4.css";

export default function DcondoPage() {
  return (
    <>
      <header className="dcondo-header">
        <h1>Dcondo Campus Hideaway (เฟส 4)</h1>
        <p>คอนโดสไตล์รีสอร์ท ใกล้มหาวิทยาลัยธรรมศาสตร์ รังสิต พร้อมสิ่งอำนวยความสะดวกครบครัน</p>
      </header>

      <main className="dcondo-main">
        <div className="image-row">
          <Image src="/dc5.jpg" alt="ภาพ Dcondo เฟส 4" width={400} height={300} />
          <Image src="/dc6.jpg" alt="ภาพ Dcondo เฟส 4" width={400} height={300} />
        </div>

        <section>
          <h2>🏡 รายละเอียดที่พัก</h2>
          <p>
            Dcondo Campus Hideaway เฟส 4 ตั้งอยู่ตรงข้ามมหาวิทยาลัยธรรมศาสตร์ รังสิต
            ห้องพักมีขนาดประมาณ 26–28 ตร.ม. พร้อมเฟอร์นิเจอร์และเครื่องใช้ไฟฟ้าครบครัน
            เหมาะสำหรับนักศึกษาหรือผู้ที่ทำงานในพื้นที่ใกล้เคียง
          </p>
        </section>

        <section>
          <h2>💰 ค่าเช่ารายเดือน</h2>
          <ul>
            <li>เริ่มต้นที่ 8,500 บาท/เดือน สำหรับห้องขนาด 26–28 ตร.ม.</li>
            <li>ค่าน้ำและค่าไฟตามมิเตอร์การใช้งาน</li>
            <li>เงินประกัน 1 เดือน + ค่าเช่าล่วงหน้า 1 เดือน</li>
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
                <td>✅ ที่จอดรถ</td>
                <td>✅ ระบบรักษาความปลอดภัย (คีย์การ์ด + CCTV)</td>
              </tr>
              <tr>
                <td>✅ Co-working space</td>
                <td>✅ ลิฟต์โดยสาร</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>📍 ทำเลที่ตั้ง</h2>
          <ul>
            <li>ตรงข้ามมหาวิทยาลัยธรรมศาสตร์ รังสิต</li>
            <li>ใกล้ตลาดบางขัน, ฟิวเจอร์พาร์ค รังสิต และร้านค้าอื่น ๆ</li>
          </ul>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1675.573405382915!2d100.60888437943491!3d14.061450386799747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2856461f5572b%3A0xe1acfbd1a111bd08!2z4LiU4Li14LiE4Lit4LiZ4LmC4LiUIOC5geC4hOC4oeC4m-C4seC4qiDguYTguK7guJTguYzguK3guYDguKfguKLguYw!5e0!3m2!1sth!2sth!4v1746766861140!5m2!1sth!2sth"
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
                href="https://propertyhub.in.th/%E0%B9%80%E0%B8%8A%E0%B9%88%E0%B8%B2%E0%B8%84%E0%B8%AD%E0%B8%99%E0%B9%82%E0%B8%94/%E0%B9%82%E0%B8%84%E0%B8%A3%E0%B8%87%E0%B8%81%E0%B8%B2%E0%B8%A3-dcondo-campus-hideaway"
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
