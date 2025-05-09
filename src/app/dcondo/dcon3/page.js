'use client';

import Image from "next/image";
import "./dcon3.css"; 

export default function DcondoPhase3() {
  return (
    <>
      <header className="huas-header">
        <h1>Dcondo Campus Dome รังสิต เฟส 3</h1>
        <p>คอนโดใกล้ธรรมศาสตร์ รังสิต พร้อมสระว่ายน้ำ ฟิตเนส และระบบรักษาความปลอดภัย</p>
      </header>

      <main className="huas-main">
        <div className="image-row">
          <Image src="/dc3.jpeg" alt="Dcondo เฟส 3 ภาพ 1" width={400} height={300} />
          <Image src="/dc4.jpg" alt="Dcondo เฟส 3 ภาพ 2" width={400} height={300} />
        </div>

        <section>
          <h2>🏡 รายละเอียดที่พัก</h2>
          <p>
            Dcondo Campus Dome เฟส 3 เป็นคอนโดพร้อมอยู่ ตั้งอยู่ใกล้มหาวิทยาลัยธรรมศาสตร์ ศูนย์รังสิต ภายในมีห้องพักแบบสตูดิโอ
            และแบบ 1 ห้องนอน ขนาดประมาณ 28–31 ตร.ม. เหมาะสำหรับนักศึกษาและผู้ทำงาน
          </p>
        </section>

        <section>
          <h2>💰 ค่าเช่ารายเดือน</h2>
          <ul>
            <li>ห้องสตูดิโอ: เริ่มต้น 8,000 บาท/เดือน</li>
            <li>1 ห้องนอน: 9,000–10,000 บาท/เดือน</li>
            <li>ค่าน้ำ: จ่ายตามจริง</li>
            <li>ค่าไฟ: จ่ายตามมิเตอร์การไฟฟ้า</li>
            <li>มัดจำ 2 เดือน + จ่ายล่วงหน้า 1 เดือน</li>
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
                <td>✅ ระบบรักษาความปลอดภัย 24 ชม.</td>
              </tr>
              <tr>
                <td>✅ คีย์การ์ด & CCTV</td>
                <td>✅ ลิฟต์โดยสาร</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>📍 ทำเลที่ตั้ง</h2>
          <ul>
            <li>ใกล้มหาวิทยาลัยธรรมศาสตร์ รังสิต</li>
            <li>ใกล้ตลาดบางขัน และร้านสะดวกซื้อ</li>
            <li>ใกล้ฟิวเจอร์พาร์ค รังสิต</li>
          </ul>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1675.5662104696394!2d100.60806223429395!3d14.062432628817811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e27fa08ef60157%3A0x61f32e2c7044d5c6!2zZGNvbmRvIENhbXB1cyBEb21lLVJhbmdzaXQgUGhhc2UgMyDguJTguLXguITguK3guJnguYLguJQg4LmB4LiE4Lih4Lib4Lix4LiqIOC5guC4lOC4oSDguKPguLHguIfguKrguLTguJUg4LmA4Lif4LiqIDM!5e0!3m2!1sth!2sth!4v1746766326963!5m2!1sth!2sth"
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
                href="https://www.renthub.in.th/dcondo-campus-dome-%E0%B8%A1-%E0%B8%98%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%A8%E0%B8%B2%E0%B8%AA%E0%B8%95%E0%B8%A3%E0%B9%8C"
                target="_blank"
                rel="noopener noreferrer"
              >
                renthub.in.th
              </a>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
