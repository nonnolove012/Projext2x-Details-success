'use client';

import Image from "next/image";
import "./terra11.css";

export default function TerraPage() {
  return (
    <>
      <header className="terra-header">
        <h1>คอนโด Terra TU มหาวิทยาลัยธรรมศาสตร์</h1>
        <p>คอนโดใหม่ สไตล์โมเดิร์น ใกล้ มธ. รังสิต มีสระว่ายน้ำ ฟิตเนส พร้อมอยู่</p>
      </header>

      <main className="terra-main">
        <div className="image-row">
          <Image src="/tr1.jpg" alt="ภาพคอนโด Terra TU 1" width={400} height={300} />
          <Image src="/tr2.jpg" alt="ภาพคอนโด Terra TU 2" width={400} height={300} />
        </div>

        <section>
          <h2>🏡 รายละเอียดคอนโด</h2>
          <p>
            Terra TU เป็นคอนโดใกล้มหาวิทยาลัยธรรมศาสตร์ ศูนย์รังสิต ภายใต้แนวคิด Modern Living
            เหมาะสำหรับนักศึกษาและคนทำงาน ภายในห้องตกแต่งพร้อมอยู่ มีเฟอร์นิเจอร์ครบ 
            ห้องน้ำในตัว พร้อมเครื่องทำน้ำอุ่น และระบบรักษาความปลอดภัยครบวงจร
          </p>
        </section>

        <section>
          <h2>💰 ค่าเช่ารายเดือน</h2>
          <ul>
            <li>ค่าเช่าเริ่มต้นประมาณ 8,500 - 12,000 บาท/เดือน (ขึ้นอยู่กับขนาดห้องและวิว)</li>
            <li>ค่าน้ำ-ค่าไฟแยกตามมิเตอร์</li>
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
                <td>✅ ห้องอ่านหนังสือ</td>
                <td>✅ ระบบคีย์การ์ดและ CCTV</td>
              </tr>
              <tr>
                <td>✅ ที่จอดรถ</td>
                <td>✅ พื้นที่ส่วนกลางและสวนพักผ่อน</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>📍 ทำเลที่ตั้ง</h2>
          <ul>
            <li>ห่างจากมหาวิทยาลัยธรรมศาสตร์ รังสิต ประมาณ 5 นาที</li>
            <li>ใกล้ตลาดบางขัน ร้านสะดวกซื้อ ร้านอาหาร และฟิวเจอร์พาร์ค</li>
          </ul>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3870.195798374451!2d100.61370156164794!3d14.0656123580303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e27f1195b1d67f%3A0xefe5027e2315d09f!2sTERRA%20RESIDENCE%20I!5e0!3m2!1sth!2sth!4v1746685597854!5m2!1sth!2sth"
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
              <a href="https://terraresidencecondo.com/" target="_blank" rel="noopener noreferrer">
              terraresidencecondo.com
              </a>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
