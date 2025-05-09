'use client';

import Image from "next/image";
import "./tudio11.css";

export default function TudioPage() {
  return (
    <>
      <header className="tudio-header">
        <h1>คอนโด TUDIO TU มหาวิทยาลัยธรรมศาสตร์</h1>
        <p>คอนโดใหม่ สไตล์มินิมอล ทำเลดี ซอยเชียงราก 2 ใกล้ มธ. รังสิต</p>
      </header>

      <main className="tudio-main">
        <div className="image-row">
          <Image src="/tu2.jpg" alt="ภาพคอนโด TUDIO TU 1" width={400} height={300} />
          <Image src="/tu1.jpg" alt="ภาพคอนโด TUDIO TU 2" width={400} height={300} />
        </div>

        <section>
          <h2>🏡 รายละเอียดคอนโด</h2>
          <p>
            TUDIO TU เป็นคอนโดมิเนียมเปิดใหม่ในซอยเชียงราก 2 ใกล้มหาวิทยาลัยธรรมศาสตร์ ศูนย์รังสิต 
            ตกแต่งสไตล์มินิมอลทันสมัย พร้อมเข้าอยู่ มีเฟอร์นิเจอร์บิลต์อินครบ เช่น เตียง ตู้ โต๊ะ เก้าอี้ 
            ห้องน้ำส่วนตัว พร้อมเครื่องทำน้ำอุ่น และระบบความปลอดภัยครบวงจร
          </p>
        </section>

        <section>
          <h2>💰 ค่าเช่ารายเดือน</h2>
          <ul>
            <li>ค่าเช่าเริ่มต้นประมาณ 7,000 - 10,000 บาท/เดือน (ขึ้นอยู่กับขนาดและชั้น)</li>
            <li>ค่าน้ำ-ค่าไฟแยกตามมิเตอร์</li>
            <li>เงินประกัน 2 เดือน + ค่าเช่าล่วงหน้า 1 เดือน</li>
          </ul>
        </section>

        <section>
          <h2>💪 สิ่งอำนวยความสะดวก</h2>
          <table>
            <tbody>
              <tr>
                <td>✅ ฟิตเนส</td>
                <td>✅ ระบบคีย์การ์ด + CCTV</td>
              </tr>
              <tr>
                <td>✅ พื้นที่พักผ่อนส่วนกลาง</td>
                <td>✅ ที่จอดรถ</td>
              </tr>
              <tr>
                <td>✅ ลิฟต์โดยสาร</td>
                <td>✅ ร้านค้าและร้านสะดวกซื้อใกล้โครงการ</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>📍 ทำเลที่ตั้ง</h2>
          <ul>
            <li>ตั้งอยู่ในซอยเชียงราก 2 เดินทางไปมหาวิทยาลัยธรรมศาสตร์ รังสิต เพียง 5 นาที</li>
            <li>ใกล้ประตูเชียงราก ตลาดนัด มธ. ร้านอาหาร และคาเฟ่มากมาย</li>
          </ul>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3870.1954461185924!2d100.61333678122188!3d14.065633172358686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e27ff057a9d9c3%3A0x8901c6a9d0e66703!2sTUDIO!5e0!3m2!1sth!2sth!4v1746686066946!5m2!1sth!2sth"
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
              <a href="https://www.renthub.in.th/tudio-rangsit-tu-%E0%B8%97%E0%B8%B9%E0%B8%94%E0%B8%B4%E0%B9%82%E0%B8%AD-%E0%B8%A3%E0%B8%B1%E0%B8%87%E0%B8%AA%E0%B8%B4%E0%B8%95/" target="_blank" rel="noopener noreferrer">
              renthub.in.th
              </a>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
