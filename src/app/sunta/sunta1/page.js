'use client';

import Image from "next/image";
import "./sunta.css";

export default function SuntaPage() {
  return (
    <>
      <header className="sunta-header">
        <h1>Sunta Apartment (ซันต้า)</h1>
        <p>หอพักตรงข้ามประตูเชียงราก 1 ม.ธรรมศาสตร์ รังสิต มีทั้งหอชายและหอหญิง พร้อมสิ่งอำนวยความสะดวกครบ</p>
      </header>

      <main className="sunta-main">
        <div className="image-row">
          <Image src="/st1.webp" alt="Sunta Apartment" width={400} height={300} />
          <Image src="/st2.jpg" alt="ใกล้เคียง Sunta" width={400} height={300} />
        </div>

        <section>
          <h2>🏡 รายละเอียดที่พัก</h2>
          <p>
            หอพักซันต้า ตั้งอยู่ตรงข้ามประตูเชียงราก 1 ของมหาวิทยาลัยธรรมศาสตร์ รังสิต
            มีหอชายและหอหญิงแยกอาคาร ห้องพักขนาด 26–28 ตร.ม. มีเฟอร์นิเจอร์ครบครัน เช่น เตียง ตู้ โต๊ะอ่านหนังสือ
            บางห้องมีเครื่องปรับอากาศและเครื่องทำน้ำอุ่น
          </p>
        </section>

        <section>
          <h2>💰 ค่าเช่ารายเดือน</h2>
          <ul>
            <li>เริ่มต้นที่ 4,800 บาท/เดือน</li>
            <li>ค่าน้ำ 30 บาท/หน่วย</li>
            <li>ค่าไฟ 8 บาท/หน่วย</li>
            <li>เงินประกัน 10,000 บาท</li>
            <li>โปรโมชั่น: 2 เดือนสุดท้ายจ่ายครึ่งราคา (เมื่อทำสัญญา 1 ปี)</li>
          </ul>
        </section>

        <section>
          <h2>💪 สิ่งอำนวยความสะดวก</h2>
          <table>
            <tbody>
              <tr>
                <td>✅ ระบบคีย์การ์ด</td>
                <td>✅ CCTV + รปภ. 24 ชม.</td>
              </tr>
              <tr>
                <td>✅ ลิฟต์</td>
                <td>✅ ร้านอาหาร-ร้านซักรีด</td>
              </tr>
              <tr>
                <td>✅ ใต้หอมีร้านค้า</td>
                <td>✅ ใกล้ตลาดนัด</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>📍 ทำเลที่ตั้ง</h2>
          <ul>
            <li>ตรงข้ามประตูเชียงราก 1 ม.ธรรมศาสตร์ รังสิต</li>
            <li>ใกล้ตลาดนัด ร้านสะดวกซื้อ และร้านอาหารมากมาย</li>
          </ul>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3870.215105385514!2d100.60305207486198!3d14.064471486360803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e27fef742e8fdb%3A0xc8e87ad2d16cd706!2sSunta%20Apartment!5e0!3m2!1sth!2sth!4v1746790534776!5m2!1sth!2sth"
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
                href="https://www.facebook.com/share/16TiTQe2Hd/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sunta Apartment
              </a>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
