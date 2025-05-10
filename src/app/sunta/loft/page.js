'use client';

import Image from "next/image";
import "./loft.css";

export default function LoftLoftPage() {
  return (
    <>
      <header className="loft-header">
        <h1>Loft Loft (ลอฟท์ ลอฟท์)</h1>
        <p>หอพักดีไซน์ลอฟท์สุดเท่ ใกล้ ม.ธรรมศาสตร์ รังสิต สะดวก ปลอดภัย มีสิ่งอำนวยความสะดวกครบ</p>
      </header>

      <main className="loft-main">
        <div className="image-row">
          <Image src="/loft2.webp" alt="Loft Loft ด้านหน้า" width={400} height={300} />
          <Image src="/loft3.webp" alt="ห้องพักภายใน Loft Loft" width={400} height={300} />
        </div>

        <section>
          <h2>🏡 รายละเอียดที่พัก</h2>
          <p>
            ห้องพักตกแต่งสไตล์ลอฟท์ พื้นที่ประมาณ 28–30 ตร.ม. พร้อมเฟอร์นิเจอร์มาตรฐาน เช่น เตียง 5 ฟุต, ตู้เสื้อผ้า, โต๊ะอ่านหนังสือ, เครื่องปรับอากาศ และเครื่องทำน้ำอุ่น
            มีระเบียงและห้องน้ำในตัว
          </p>
        </section>

        <section>
          <h2>💰 ค่าเช่ารายเดือน</h2>
          <ul>
            <li>เริ่มต้นที่ 5,500 – 9,500 บาท/เดือน</li>
            <li>ค่าน้ำ 20 บาท/หน่วย</li>
            <li>ค่าไฟ 8 บาท/หน่วย</li>
            <li>เงินประกัน 10,000 บาท</li>
          </ul>
        </section>

        <section>
          <h2>💪 สิ่งอำนวยความสะดวก</h2>
          <table>
            <tbody>
              <tr>
                <td>✅ แอร์ / เครื่องทำน้ำอุ่น</td>
                <td>✅ อินเทอร์เน็ต Wi-Fi</td>
              </tr>
              <tr>
                <td>✅ ระบบคีย์การ์ด</td>
                <td>✅ CCTV และ รปภ. 24 ชม.</td>
              </tr>
              <tr>
                <td>✅ ลิฟต์โดยสาร</td>
                <td>✅ ร้านสะดวกซื้อในบริเวณ</td>
              </tr>
              <tr>
                <td>✅ ที่จอดรถ</td>
                <td>✅ ตู้กดน้ำ/เครื่องซักผ้าหยอดเหรียญ</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>📍 ทำเลที่ตั้ง</h2>
          <ul>
            <li>ตั้งอยู่ในซอยเชียงราก 1 ใกล้ประตูมหาวิทยาลัยธรรมศาสตร์ รังสิต</li>
            <li>เดินเพียงไม่กี่นาทีถึงร้านสะดวกซื้อ ตลาดนัด และร้านอาหาร</li>
          </ul>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1935.1287962772185!2d100.6022305266827!3d14.061960555295668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e27f0843e366ef%3A0x786cdfa421c5d1bf!2sLOFT%20LOFT%20DORMITORY!5e0!3m2!1sth!2sth!4v1746829928392!5m2!1sth!2sth"
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
              🌐 Facebook:{" "}
              <a
                href="https://www.facebook.com/share/1BsQcE2XYg/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
              >
                Loftdormitorytu
              </a>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
