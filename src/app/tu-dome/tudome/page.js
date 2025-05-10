'use client';

import Image from "next/image";
import "./tudome.css";

export default function TuDomePage() {
  return (
    <>
      <header className="hiso-header">
        <h1>TU Dome (ทียูโดม)</h1>
        <p>หอพักยอดนิยมใกล้ ม.ธรรมศาสตร์ รังสิต เดินทางสะดวก พร้อมสิ่งอำนวยความสะดวกครบครัน</p>
      </header>

      <main className="hiso-main">
        <div className="image-row">
          <Image src="/td1.jpg" alt="TU Dome ภายนอก" width={400} height={300} />
          <Image src="/td2.jpg" alt="TU Dome ภายในห้อง" width={400} height={300} />
        </div>

        <section>
          <h2>🏡 รายละเอียดที่พัก</h2>
          <p>
            ห้องพักขนาดประมาณ 28–32 ตร.ม. พร้อมเฟอร์นิเจอร์ครบชุด เช่น เตียง 5 ฟุต ตู้เสื้อผ้า โต๊ะเขียนหนังสือ และโต๊ะเครื่องแป้ง
            ภายในห้องมีแอร์ ตู้เย็น เครื่องทำน้ำอุ่น และสิ่งอำนวยความสะดวกอื่น ๆ
          </p>
        </section>

        <section>
          <h2>💰 ค่าเช่ารายเดือน</h2>
          <ul>
            <li>เริ่มต้นที่ 3,200 บาท/เดือน (สัญญา 1 ปี)</li>
            <li>ค่าน้ำ 30 บาท/หน่วย</li>
            <li>ค่าไฟ 7 บาท/หน่วย</li>
            <li>เงินประกัน 10,000 บาท (คืนเมื่อสิ้นสุดสัญญา)</li>
          </ul>
        </section>

        <section>
          <h2>💪 สิ่งอำนวยความสะดวก</h2>
          <table>
            <tbody>
              <tr>
                <td>✅ ฟิตเนส</td>
                <td>✅ ร้านอาหาร</td>
              </tr>
              <tr>
                <td>✅ ร้านสะดวกซื้อ</td>
                <td>✅ ระบบคีย์การ์ด</td>
              </tr>
              <tr>
                <td>✅ CCTV และ รปภ. 24 ชม.</td>
                <td>✅ ที่จอดรถ</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>📍 ทำเลที่ตั้ง</h2>
          <ul>
            <li>ตั้งอยู่ใกล้มหาวิทยาลัยธรรมศาสตร์ รังสิต</li>
            <li>เดินทางสะดวก ใกล้ตลาด ร้านสะดวกซื้อ และร้านอาหารมากมาย</li>
          </ul>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1935.1036887266985!2d100.59773133795517!3d14.064928148912742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e27f8a676a2d3d%3A0x4223551489181319!2sTU%20Dome%202!5e0!3m2!1sth!2sth!4v1746836465810!5m2!1sth!2sth"
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
              📞 โทร: 091-025-9004
            </li>
            <li>
              🌐 Facebook:{" "}
              <a href="https://www.facebook.com/tudome.tpm" target="_blank" rel="noopener noreferrer">
                TU Dome
              </a>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
