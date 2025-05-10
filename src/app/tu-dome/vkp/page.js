'use client';

import Image from "next/image";
import "./vkp.css"; // เปลี่ยนชื่อไฟล์ CSS ให้เหมาะสม

export default function VKPPage() {
  return (
    <>
      <header className="hiso-header">
        <h1>VKP Residence (วีเคพี)</h1>
        <p>หอพักใหม่ สะอาด มีลิฟต์และสิ่งอำนวยความสะดวกครบ อยู่ใกล้ ม.ธรรมศาสตร์ รังสิต (ประตูเชียงราก)</p>
      </header>

      <main className="hiso-main">
        <div className="image-row">
          <Image src="/v1.jpg" alt="VKP Residence ภายนอก" width={400} height={300} />
          <Image src="/v2.jpg" alt="VKP Residence ภายในห้อง" width={400} height={300} />
        </div>

        <section>
          <h2>🏡 รายละเอียดที่พัก</h2>
          <p>
            ห้องพักขนาดประมาณ 28–32 ตร.ม. พร้อมเฟอร์นิเจอร์ครบ เช่น เตียง 5 ฟุต โต๊ะอ่านหนังสือ ตู้เสื้อผ้า โต๊ะเครื่องแป้ง
            และเครื่องใช้ไฟฟ้า เช่น แอร์ ตู้เย็น เครื่องทำน้ำอุ่น และทีวี
          </p>
        </section>

        <section>
          <h2>💰 ค่าเช่ารายเดือน</h2>
          <ul>
            <li>เริ่มต้นที่ 6,500 บาท/เดือน</li>
            <li>ค่าน้ำ 18 บาท/หน่วย</li>
            <li>ค่าไฟ 7 บาท/หน่วย</li>
            <li>เงินประกัน 2 เดือน + ล่วงหน้า 1 เดือน</li>
          </ul>
        </section>

        <section>
          <h2>💪 สิ่งอำนวยความสะดวก</h2>
          <table>
            <tbody>
              <tr>
                <td>✅ ลิฟต์</td>
                <td>✅ อินเทอร์เน็ต Wi-Fi</td>
              </tr>
              <tr>
                <td>✅ เครื่องซักผ้าหยอดเหรียญ</td>
                <td>✅ ระบบคีย์การ์ด</td>
              </tr>
              <tr>
                <td>✅ กล้องวงจรปิด + รปภ. 24 ชม.</td>
                <td>✅ ที่จอดรถ</td>
              </tr>
              <tr>
                <td>✅ แม่บ้านทำความสะอาดพื้นที่ส่วนกลาง</td>
                <td>✅ ร้านอาหารใกล้ที่พัก</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>📍 ทำเลที่ตั้ง</h2>
          <ul>
            <li>ตั้งอยู่ใกล้ประตูเชียงราก ม.ธรรมศาสตร์ รังสิต</li>
            <li>เดินไม่ไกลจากมหาวิทยาลัย ร้านสะดวกซื้อ และร้านอาหารมากมาย</li>
          </ul>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.7190239255133!2d100.60093997486197!3d14.06453758636073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e278a555555555%3A0xe1737b9658723f53!2sVKP%20Mansion!5e1!3m2!1sth!2sth!4v1746841180172!5m2!1sth!2sth"
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
              📞 โทร: 096-957-7037
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
