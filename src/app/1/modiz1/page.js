'use client'; 

import Image from "next/image";
import "./modiz1.css"; 

export default function ModizPage() {
  return (
    <>
      <header className="jpark-header">
        <h1>MODIZ CONDO THAMMASAT</h1>
        <p>คอนโดใหม่สไตล์โมเดิร์น ใกล้มหาวิทยาลัยธรรมศาสตร์ รังสิต | หรูหรา ทันสมัย มีระดับ</p>
      </header>

      <main className="jpark-main">
        <div className="image-row">
          <Image src="/md1.jpg" alt="ภาพ Modiz Condo 1" width={400} height={300} />
          <Image src="/md2.jpg" alt="ภาพ Modiz Condo 2" width={400} height={300} />
        </div>

        <section>
          <h2>🏡 รายละเอียดห้องพัก</h2>
          <p>
            Modiz Condo Thammasat เป็นคอนโดมิเนียมหรู ตกแต่งครบ พร้อมสิ่งอำนวยความสะดวกทันสมัย
            ตั้งอยู่ไม่ไกลจากมหาวิทยาลัยธรรมศาสตร์ รังสิต ภายในมีเฟอร์นิเจอร์ครบครัน เช่น เตียงนอน โซฟา โต๊ะทำงาน
            เครื่องใช้ไฟฟ้าครบ เช่น แอร์ ทีวี ตู้เย็น ไมโครเวฟ และเครื่องทำน้ำอุ่น
            เหมาะสำหรับนักศึกษาและคนทำงานที่มองหาความสะดวกสบายและมีสไตล์
          </p>
        </section>

        <section>
          <h2>💰 ราคาเช่ารายเดือน</h2>
          <ul>
            <li>เริ่มต้นประมาณ 7,500 - 9,000 บาท/เดือน</li>
            <li>ห้องวิวดีหรือมีระเบียง ประมาณ 9,500 - 11,000 บาท/เดือน</li>
            <li>ราคานี้ไม่รวมค่าน้ำ ค่าไฟ และค่าบริการส่วนกลาง</li>
          </ul>
        </section>

        <section>
          <h2>💪 สิ่งอำนวยความสะดวก</h2>
          <table>
            <tbody>
              <tr>
                <td>✅ ฟิตเนสทันสมัย</td>
                <td>✅ สระว่ายน้ำระบบเกลือ</td>
              </tr>
              <tr>
                <td>✅ ห้องประชุม / Co-working Space</td>
                <td>✅ ระบบรักษาความปลอดภัย 24 ชม.</td>
              </tr>
              <tr>
                <td>✅ Sky Lounge</td>
                <td>✅ ที่จอดรถในร่ม</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>📍 ทำเลที่ตั้ง</h2>
          <ul>
            <li>ตั้งอยู่ติดถนนใหญ่ ใกล้ มธ. ประตูเชียงราก</li>
            <li>สะดวกในการเดินทางด้วยรถยนต์และรถโดยสาร</li>
          </ul>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3870.192836228162!2d100.605136874862!3d14.065787386359622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e27f5df568bc33%3A0xf13e605727a6f35f!2z4LmC4Lih4LiU4Li04LiLIOC4peC4reC4meC4iuC5jA!5e0!3m2!1sth!2sth!4v1746662738598!5m2!1sth!2sth"
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
              <a href="https://assetwise.co.th/condominium/modiz-launch/" target="_blank" rel="noopener noreferrer">
                assetwise.co.th
              </a>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
