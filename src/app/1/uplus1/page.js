'use client';

import Image from "next/image";
import "./uplus11.css";


export default function UPlusPage() {
  return (
    <>
      <header className="jpark-header">
        <h1>หอพัก U-Plus มหาวิทยาลัยธรรมศาสตร์</h1>
        <p>หอพักเอกชนติดรั้ว มธ. รังสิต ใกล้ประตูเชียงราก บรรยากาศดี ปลอดภัย พร้อมสิ่งอำนวยความสะดวกครบ</p>
      </header>

      <main className="jpark-main">
        <div className="image-row">
          <Image src="/up1.jpg" alt="ภาพหอพัก U-Plus 1" width={400} height={300} />
          <Image src="/up2.jpg" alt="ภาพหอพัก U-Plus 2" width={400} height={300} />
        </div>

        <section>
          <h2>🏡 รายละเอียดหอพัก</h2>
          <p>
            U-Plus เป็นหอพักเอกชนยอดนิยมตั้งอยู่ติดกับมหาวิทยาลัยธรรมศาสตร์ ศูนย์รังสิต ใกล้ประตูเชียงราก 1
            หอพักตกแต่งทันสมัย รองรับนักศึกษาชายและหญิง ภายในห้องมีเฟอร์นิเจอร์ครบครัน เช่น เตียง ตู้เสื้อผ้า โต๊ะอ่านหนังสือ แอร์ เครื่องทำน้ำอุ่น และห้องน้ำในตัว
            มีระบบรักษาความปลอดภัยและพื้นที่ส่วนกลางสำหรับพักผ่อน
          </p>
        </section>

        <section>
          <h2>💰 ค่าเช่ารายเดือน</h2>
          <ul>
            <li>ค่าเช่าเริ่มต้นประมาณ 6,500 - 9,900 บาท/เดือน (ขึ้นอยู่กับขนาดและชั้น)</li>
            <li>มีค่าน้ำ-ไฟแยกตามมิเตอร์</li>
            <li>เหมาะสำหรับนักศึกษาทุกระดับชั้นที่ต้องการความสะดวกสบายและปลอดภัย</li>
          </ul>
        </section>

        <section>
          <h2>💪 สิ่งอำนวยความสะดวก</h2>
          <table>
            <tbody>
              <tr>
                <td>✅ Wi-Fi ความเร็วสูง</td>
                <td>✅ ระบบคีย์การ์ดเข้า-ออก</td>
              </tr>
              <tr>
                <td>✅ เครื่องซักผ้าหยอดเหรียญ</td>
                <td>✅ ลิฟต์และกล้องวงจรปิด</td>
              </tr>
              <tr>
                <td>✅ แอร์และเครื่องทำน้ำอุ่น</td>
                <td>✅ ร้านค้าและร้านอาหารใกล้หอ</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>📍 ทำเลที่ตั้ง</h2>
          <ul>
            <li>ติดรั้วมหาวิทยาลัย ประตูเชียงราก 1 (เดินไปมหาลัยได้ใน 2-3 นาที)</li>
            <li>ใกล้ตลาดนัดเชียงราก และร้านสะดวกซื้อ 7-Eleven</li>
          </ul>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3870.190333168427!2d100.60635867486211!3d14.06593528635957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e27ff029f2f303%3A0x5efd09ff2d36be43!2sU-PLUS!5e0!3m2!1sth!2sth!4v1746670063905!5m2!1sth!2sth"
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
              <a href="https://uplusrangsit.ugroupproperty.com/" target="_blank" rel="noopener noreferrer">
              uplusrangsit.ugroupproperty.com
              </a>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
