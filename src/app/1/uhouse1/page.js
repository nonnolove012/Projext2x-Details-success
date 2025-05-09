'use client';

import Image from "next/image";
import "./uhouse11.css";

export default function UHousePage() {
  return (
    <>
      <header className="uhouse-header">
        <h1>หอพัก U-House มหาวิทยาลัยธรรมศาสตร์</h1>
        <p>หอพักเอกชนใกล้มธ. รังสิต บรรยากาศสงบ เฟอร์นิเจอร์ครบ พร้อมระบบรักษาความปลอดภัย</p>
      </header>

      <main className="uhouse-main">
        <div className="image-row">
          <Image src="/uh1.jpg" alt="ภาพหอพัก U-House 1" width={400} height={300} />
          <Image src="/uh2.jpg" alt="ภาพหอพัก U-House 2" width={400} height={300} />
        </div>

        <section>
          <h2>🏡 รายละเอียดหอพัก</h2>
          <p>
            U-House เป็นหอพักเอกชนยอดนิยมบริเวณหลังมหาวิทยาลัยธรรมศาสตร์ ศูนย์รังสิต 
            หอพักมีความสงบ เป็นส่วนตัว รองรับนักศึกษาทั้งชายและหญิง ห้องพักตกแต่งเรียบง่าย มีเฟอร์นิเจอร์ครบครัน เช่น เตียง ตู้เสื้อผ้า โต๊ะอ่านหนังสือ แอร์ และห้องน้ำในตัว
          </p>
        </section>

        <section>
          <h2>💰 ค่าเช่ารายเดือน</h2>
          <ul>
            <li>ค่าเช่าเริ่มต้นประมาณ 6,300 - 9,300 บาท/เดือน (ขึ้นอยู่กับขนาดห้องและชั้น)</li>
            <li>ค่าน้ำไฟแยกตามมิเตอร์</li>
            <li>เหมาะสำหรับนักศึกษาที่ต้องการความสงบและเดินทางสะดวก</li>
          </ul>
        </section>

        <section>
          <h2>💪 สิ่งอำนวยความสะดวก</h2>
          <table>
            <tbody>
              <tr>
                <td>✅ อินเทอร์เน็ต Wi-Fi</td>
                <td>✅ ระบบคีย์การ์ดเข้า-ออก</td>
              </tr>
              <tr>
                <td>✅ เครื่องซักผ้าหยอดเหรียญ</td>
                <td>✅ ที่จอดรถมอเตอร์ไซค์</td>
              </tr>
              <tr>
                <td>✅ ห้องน้ำในตัวพร้อมเครื่องทำน้ำอุ่น</td>
                <td>✅ แอร์ทุกห้อง</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>📍 ทำเลที่ตั้ง</h2>
          <ul>
            <li>ตั้งอยู่ด้านหลังมหาวิทยาลัยธรรมศาสตร์ รังสิต ใกล้ประตูเชียงราก 2</li>
            <li>ใกล้ตลาดบางขันและร้านสะดวกซื้อ 7-Eleven</li>
          </ul>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3870.191497542897!2d100.60575827486208!3d14.065866486359639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e27fefd61ef93f%3A0xe2b6e64838636aef!2z4Lii4Li54LmA4Liu4Liy4Liq4LmM!5e0!3m2!1sth!2sth!4v1746672935148!5m2!1sth!2sth"
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
              <a href="https://uhouserangsit.ugroupproperty.com/" target="_blank" rel="noopener noreferrer">
              uhouserangsit.ugroupproperty.com
              </a>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
