'use client';

import Image from "next/image";
import "./bunyan1.css"; // เปลี่ยนชื่อ CSS ให้เหมาะกับหน้านี้

export default function BanyanTreePage() {
  return (
    <>
      <header className="jpark-header">
        <h1>หอพักบันยันทรี มหาวิทยาลัยธรรมศาสตร์</h1>
        <p>หอพักนักศึกษาภายในมหาวิทยาลัย สงบร่มรื่น สิ่งอำนวยความสะดวกครบ ใกล้สถาบันภาษาและคณะนิติศาสตร์</p>
      </header>

      <main className="jpark-main">
        <div className="image-row">
          <Image src="/by1.webp" alt="ภาพหอพักบันยันทรี 1" width={400} height={300} />
          <Image src="/by2.webp" alt="ภาพหอพักบันยันทรี 2" width={400} height={300} />
        </div>

        <section>
          <h2>🏡 รายละเอียดหอพัก</h2>
          <p>
            หอพักบันยันทรีเป็นหนึ่งในหอพักของมหาวิทยาลัยธรรมศาสตร์ ศูนย์รังสิต
            เป็นหอพักรวมชายหญิงที่อยู่ในโซนเงียบสงบ ใกล้สถาบันภาษาและคณะนิติศาสตร์
            เหมาะสำหรับนักศึกษาที่ต้องการความเป็นส่วนตัวและสิ่งแวดล้อมที่เอื้อต่อการเรียน
            ภายในห้องมีเฟอร์นิเจอร์ครบ เช่น เตียง ตู้เสื้อผ้า โต๊ะอ่านหนังสือ พร้อมห้องน้ำในตัว
          </p>
        </section>

        <section>
          <h2>💰 ค่าเช่ารายเดือน</h2>
          <ul>
            <li>ค่าเช่าประมาณ 6,000 - 10,000 บาท/เดือน</li>
            <li>มีค่าน้ำ-ไฟตามอัตราการใช้จริง</li>
            <li>เหมาะสำหรับนักศึกษาปริญญาตรีทุกชั้นปี</li>
          </ul>
        </section>

        <section>
          <h2>💪 สิ่งอำนวยความสะดวก</h2>
          <table>
            <tbody>
              <tr>
                <td>✅ Wi-Fi ความเร็วสูง</td>
                <td>✅ ระบบคีย์การ์ดและกล้องวงจรปิด</td>
              </tr>
              <tr>
                <td>✅ ห้องน้ำในตัว</td>
                <td>✅ ลิฟต์และบันไดหนีไฟ</td>
              </tr>
              <tr>
                <td>✅ พื้นที่อ่านหนังสือรวม</td>
                <td>✅ ร้านสะดวกซื้อใกล้หอพัก</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>📍 ทำเลที่ตั้ง</h2>
          <ul>
            <li>ตั้งอยู่ภายใน มธ. รังสิต ใกล้ศูนย์อาหาร Green Canteen</li>
            <li>เดินทางสะดวกด้วยจักรยานหรือ Shuttle Bus</li>
          </ul>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3870.183864695856!2d100.60411497486203!3d14.066317486359145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e27fee4c9e9cad%3A0x8dfcee686fc19a42!2z4Lia4Lix4LiZ4Lii4Lix4LiZ4LiX4Lij4Li14LiX4Liy4Lin4LiZ4LmM!5e0!3m2!1sth!2sth!4v1746667399212!5m2!1sth!2sth"
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
              <a href="https://www.renthub.in.th/%E0%B8%9A%E0%B8%B1%E0%B8%99%E0%B8%A2%E0%B8%B1%E0%B8%99%E0%B8%97%E0%B8%A3%E0%B8%B5" target="_blank" rel="noopener noreferrer">
              renthub.in.th
              </a>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
