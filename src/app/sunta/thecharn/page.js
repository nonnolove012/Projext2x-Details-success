'use client';

import Image from "next/image";
import "./thecharn.css";

export default function TheCharnPage() {
  return (
    <>
      <header className="charn-header">
        <h1>The Charn (เดอะชาญ)</h1>
        <p>หอพักใหม่สไตล์โมเดิร์น ใกล้ ม.ธรรมศาสตร์ รังสิต สงบ สะอาด ปลอดภัย พร้อมสิ่งอำนวยความสะดวกครบครัน</p>
      </header>

      <main className="charn-main">
        <div className="image-row">
          <Image src="/tc1.jpg" alt="The Charn" width={400} height={300} />
          <Image src="/tc2.jpg" alt="ภายในห้อง The Charn" width={400} height={300} />
        </div>

        <section>
          <h2>🏡 รายละเอียดที่พัก</h2>
          <p>
            ห้องพักขนาด 25–30 ตร.ม. มีให้เลือกทั้งห้องพัดลมและห้องแอร์ เฟอร์นิเจอร์ครบครัน เช่น เตียง ตู้เสื้อผ้า โต๊ะอ่านหนังสือ
            ภายในตกแต่งสวยงาม พร้อมระเบียงส่วนตัว เหมาะสำหรับนักศึกษาและคนทำงาน
          </p>
        </section>

        <section>
          <h2>💰 ค่าเช่ารายเดือน</h2>
          <ul>
            <li>เริ่มต้นที่ 4,500 – 5,500 บาท/เดือน</li>
            <li>ค่าน้ำ 18 บาท/หน่วย</li>
            <li>ค่าไฟ 8 บาท/หน่วย</li>
            <li>เงินประกัน 10,000 บาท</li>
          </ul>
        </section>

        <section>
          <h2>💪 สิ่งอำนวยความสะดวก</h2>
          <table>
            <tbody>
              <tr>
                <td>✅ แอร์ / พัดลม</td>
                <td>✅ เครื่องทำน้ำอุ่น</td>
              </tr>
              <tr>
                <td>✅ ระบบคีย์การ์ด</td>
                <td>✅ CCTV และ รปภ. 24 ชม.</td>
              </tr>
              <tr>
                <td>✅ อินเทอร์เน็ต Wi-Fi</td>
                <td>✅ ที่จอดรถ</td>
              </tr>
              <tr>
                <td>✅ ร้านซักรีด</td>
                <td>✅ ลิฟต์โดยสาร</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>📍 ทำเลที่ตั้ง</h2>
          <ul>
            <li>อยู่ในซอยเชียงราก 1 ใกล้ ม.ธรรมศาสตร์ รังสิต</li>
            <li>เดินทางสะดวก ใกล้ตลาดนัด ร้านสะดวกซื้อ และร้านอาหาร</li>
          </ul>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d967.5553776494831!2d100.60501632826067!3d14.064092975563804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e27fefc28909a7%3A0xbc76cfeeff71e9cd!2z4LmA4LiU4Lit4Liw4LiK4Liy4LiN!5e0!3m2!1sth!2sth!4v1746828602922!5m2!1sth!2sth"
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
                href="https://www.thaithurkic.com/the-charn-02-516-3105"
                target="_blank"
                rel="noopener noreferrer"
              >
                thaithurkic.com
              </a>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
