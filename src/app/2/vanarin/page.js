'use client';

import Image from "next/image";
import "./vanarin11.css";


export default function VanarinPage() {
  return (
    <>
      <header className="vanarin-header">
        <h1>หอพัก Vanarin มหาวิทยาลัยธรรมศาสตร์</h1>
        <p>หอพักคุณภาพ ใกล้ มธ. รังสิต บรรยากาศดี สะอาด พร้อมสิ่งอำนวยความสะดวก</p>
      </header>

      <main className="vanarin-main">
        <div className="image-row">
          <Image src="/vn1.jpg" alt="ภาพหอพัก Vanarin 1" width={400} height={300} />
          <Image src="/vn2.jpg" alt="ภาพหอพัก Vanarin 2" width={400} height={300} />
        </div>

        <section>
          <h2>🏡 รายละเอียดหอพัก</h2>
          <p>
            Vanarin เป็นหอพักที่ออกแบบอย่างลงตัว ตั้งอยู่ในทำเลใกล้มหาวิทยาลัยธรรมศาสตร์ รังสิต
            ภายในห้องพักมีเฟอร์นิเจอร์ครบครัน มีความเป็นส่วนตัว พร้อมบรรยากาศที่เงียบสงบและปลอดภัย
          </p>
        </section>

        <section>
          <h2>💰 ค่าเช่ารายเดือน</h2>
          <ul>
            <li>ค่าเช่าเริ่มต้นประมาณ 6,000 - 8,500 บาท/เดือน (ขึ้นอยู่กับประเภทห้อง)</li>
            <li>ค่าน้ำ-ค่าไฟแยกตามมิเตอร์</li>
            <li>เหมาะสำหรับนักศึกษาที่ต้องการความสงบและปลอดภัย</li>
          </ul>
        </section>

        <section>
          <h2>💪 สิ่งอำนวยความสะดวก</h2>
          <table>
            <tbody>
              <tr>
                <td>✅ อินเทอร์เน็ต Wi-Fi</td>
                <td>✅ ระบบคีย์การ์ดและกล้องวงจรปิด</td>
              </tr>
              <tr>
                <td>✅ ห้องซักรีดส่วนกลาง</td>
                <td>✅ ที่จอดรถและลิฟต์</td>
              </tr>
              <tr>
                <td>✅ เครื่องทำน้ำอุ่น</td>
                <td>✅ พื้นที่พักผ่อนส่วนกลาง</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>📍 ทำเลที่ตั้ง</h2>
          <ul>
            <li>ห่างจากมหาวิทยาลัยธรรมศาสตร์ รังสิต เพียงไม่กี่นาที</li>
            <li>ใกล้ร้านอาหาร ร้านสะดวกซื้อ และตลาดนักศึกษา</li>
          </ul>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3870.173550861998!2d100.605!3d14.0664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e27f6d7f10f4a3%3A0x1234567890abcdef!2zVmFuYXJpbiBUVSBIb3VzZQ!5e0!3m2!1sth!2sth!4v1746678888888!5m2!1sth!2sth"
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
              <a href="https://www.renthub.in.th/%E0%B8%A7%E0%B8%99%E0%B8%B2%E0%B8%A3%E0%B8%B4%E0%B8%99%E0%B8%97%E0%B8%A3%E0%B9%8C-%E0%B9%80%E0%B8%A3%E0%B8%AA%E0%B8%8B%E0%B8%B4%E0%B9%80%E0%B8%94%E0%B8%99%E0%B8%8B%E0%B9%8C" target="_blank" rel="noopener noreferrer">
              renthub.in.th
              </a>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
