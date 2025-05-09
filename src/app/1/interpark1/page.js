'use client'; // สำคัญมากใน App Router ถ้าใช้ CSS ปกติ

import Image from "next/image";
import "./interpark1.css";

export default function InterParkPage() {
  return (
    <>
      <header className="jpark-header">
        <h1>INTER PARK CONDO</h1>
        <p>คอนโดใหม่ ใกล้มหาวิทยาลัยธรรมศาสตร์ รังสิต | ทันสมัย สะดวกสบาย ปลอดภัย</p>
      </header>

      <main className="jpark-main">
        <div className="image-row">
          <Image src="/itp1.avif" alt="ภาพหอพัก Inter Park 1" width={400} height={300} />
          <Image src="/itp2.avif" alt="ภาพหอพัก Inter Park 2" width={400} height={300} />
        </div>

        <section>
          <h2>🏡 รายละเอียดห้องพัก</h2>
          <p>
            Inter Park Condo เป็นคอนโดใหม่ใกล้ประตูเชียงราก 2 ของมหาวิทยาลัยธรรมศาสตร์ รังสิต
            ห้องพักกว้างขวาง พร้อมเฟอร์นิเจอร์ครบครัน เช่น เตียง 5 ฟุต โต๊ะทำงาน ตู้เสื้อผ้า แอร์ ทีวี ตู้เย็น ไมโครเวฟ และเครื่องทำน้ำอุ่น
            บรรยากาศเงียบสงบ มีความปลอดภัยสูง เหมาะสำหรับนักศึกษาที่ต้องการความสะดวกสบายในชีวิตประจำวัน
          </p>
        </section>

        <section>
          <h2>💰 ราคาเช่ารายเดือน</h2>
          <ul>
            <li>เริ่มต้นประมาณ 6,000 - 7,500 บาท/เดือน</li>
            <li>ห้องมุมหรือวิวสระน้ำ ประมาณ 8,000 - 8,500 บาท/เดือน</li>
            <li>ราคานี้ไม่รวมค่าน้ำ ค่าไฟ และค่าอินเทอร์เน็ต</li>
          </ul>
        </section>

        <section>
          <h2>💪 สิ่งอำนวยความสะดวก</h2>
          <table>
            <tbody>
              <tr>
                <td>✅ ฟิตเนส</td>
                <td>✅ สระว่ายน้ำ</td>
              </tr>
              <tr>
                <td>✅ ระบบคีย์การ์ด</td>
                <td>✅ กล้องวงจรปิดและ รปภ. 24 ชม.</td>
              </tr>
              <tr>
                <td>✅ ร้านอาหาร/คาเฟ่</td>
                <td>✅ ที่จอดรถในร่ม</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>📍 ทำเลที่ตั้ง</h2>
          <ul>
            <li>ตั้งอยู่หลัง มธ. ประตูเชียงราก 2 เข้าออกสะดวก</li>
            <li>ใกล้ตลาดนัดนกฮูก ร้านสะดวกซื้อ และร้านอาหารหลายแห่ง</li>
          </ul>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15480.759331018555!2d100.59636664543916!3d14.065964854468087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e27fefa9e61739%3A0x2c5899bab102988e!2z4Lit4Li04LiZ4LmA4LiV4Lit4Lij4LmMIOC4m-C4suC4o-C5jOC4hA!5e0!3m2!1sth!2sth!4v1746656312670!5m2!1sth!2sth"
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
              <a href="https://www.interparkcondo.com/" target="_blank" rel="noopener noreferrer">
                interparkcondo.com
              </a>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
