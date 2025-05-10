'use client';

import Image from "next/image";
import "./keystone.css"; 

export default function KeystonePage() {
  return (
    <>
      <header className="hiso-header">
        <h1>Keystone Residence (คีย์สโตน)</h1>
        <p>หอพักหรูใกล้ ม.ธรรมศาสตร์ รังสิต พร้อมเฟอร์นิเจอร์ครบ ระบบรักษาความปลอดภัย และสิ่งอำนวยความสะดวกทันสมัย</p>
      </header>

      <main className="hiso-main">
        <div className="image-row">
          <Image src="/k1.jpg" alt="Keystone ภายนอก" width={400} height={300} />
          <Image src="/k2.jpg" alt="Keystone ภายในห้อง" width={400} height={300} />
        </div>

        <section>
          <h2>🏡 รายละเอียดที่พัก</h2>
          <p>
            ห้องพักขนาด 30–35 ตร.ม. พร้อมเฟอร์นิเจอร์ทันสมัย เช่น เตียง 5 ฟุต ตู้เสื้อผ้า โต๊ะทำงาน โต๊ะเครื่องแป้ง
            เครื่องใช้ไฟฟ้าครบ เช่น แอร์ ตู้เย็น เครื่องทำน้ำอุ่น ทีวี และไมโครเวฟ
          </p>
        </section>

        <section>
          <h2>💰 ค่าเช่ารายเดือน</h2>
          <ul>
            <li>เริ่มต้นที่ 7,500 บาท/เดือน</li>
            <li>ค่าน้ำ 20 บาท/หน่วย</li>
            <li>ค่าไฟ 7 บาท/หน่วย</li>
            <li>เงินประกัน 2 เดือน + ล่วงหน้า 1 เดือน</li>
          </ul>
        </section>

        <section>
          <h2>💪 สิ่งอำนวยความสะดวก</h2>
          <table>
            <tbody>
              <tr>
                <td>✅ ฟิตเนส</td>
                <td>✅ ร้านกาแฟ</td>
              </tr>
              <tr>
                <td>✅ เครื่องซักผ้าหยอดเหรียญ</td>
                <td>✅ ระบบคีย์การ์ด</td>
              </tr>
              <tr>
                <td>✅ กล้องวงจรปิด + รปภ.</td>
                <td>✅ ที่จอดรถ</td>
              </tr>
              <tr>
                <td>✅ ลิฟต์โดยสาร</td>
                <td>✅ อินเทอร์เน็ต Wi-Fi</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>📍 ทำเลที่ตั้ง</h2>
          <ul>
            <li>ตั้งอยู่ใกล้ประตูเชียงราก ม.ธรรมศาสตร์ รังสิต</li>
            <li>เดินเพียงไม่กี่นาทีถึงมหาวิทยาลัยและร้านสะดวกซื้อ</li>
          </ul>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3254.4470397535833!2d100.59559096596637!3d14.064680102940189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e27fde9b6dd84d%3A0x2b85a813f23e3c6b!2zS2V5c3RvbmUgVFUgQXBhcnRtZW50IOC4q-C4reC4nuC4seC4geC5g-C4geC4peC5ieC4oS7guJjguKPguKPguKHguKjguLLguKrguJXguKPguYwgKOC4qOC4ueC4meC4ouC5jOC4o-C4seC4h-C4quC4tOC4lSk!5e0!3m2!1sth!2sth!4v1746837517392!5m2!1sth!2sth"
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
              <a href="https://keystonetu.com/" target="_blank" rel="noopener noreferrer">
              keystonetu.com
              </a>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
