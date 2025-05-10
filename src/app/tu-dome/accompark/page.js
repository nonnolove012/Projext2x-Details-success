'use client';

import Image from "next/image";
import "./accompark.css"; 

export default function AccomparkPage() {
  return (
    <>
      <header className="hiso-header">
        <h1>Accompark Residence (แอคคอมพาร์ค)</h1>
        <p>หอพักคุณภาพ เดินทางสะดวก ใกล้ประตูเชียงราก ม.ธรรมศาสตร์ รังสิต พร้อมสิ่งอำนวยความสะดวกครบ</p>
      </header>

      <main className="hiso-main">
        <div className="image-row">
          <Image src="/ac2.jpg" alt="Accompark ภายนอก" width={400} height={300} />
          <Image src="/ac1.jpg" alt="Accompark ภายในห้อง" width={400} height={300} />
        </div>

        <section>
          <h2>🏡 รายละเอียดที่พัก</h2>
          <p>
            ห้องพักขนาดประมาณ 28–32 ตร.ม. พร้อมเฟอร์นิเจอร์ครบ เช่น เตียง ตู้เสื้อผ้า โต๊ะอ่านหนังสือ และโต๊ะเครื่องแป้ง
            พร้อมเครื่องใช้ไฟฟ้า เช่น แอร์ เครื่องทำน้ำอุ่น และตู้เย็น
          </p>
        </section>

        <section>
          <h2>💰 ค่าเช่ารายเดือน</h2>
          <ul>
            <li>เริ่มต้นที่ 6,000 - 12,000 บาท/เดือน</li>
            <li>ค่าน้ำ 20 บาท/หน่วย</li>
            <li>ค่าไฟ 7 บาท/หน่วย</li>
            <li>เงินประกัน 2 เดือน + ล่วงหน้า 1 เดือน</li>
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
                <td>✅ เครื่องซักผ้าหยอดเหรียญ</td>
                <td>✅ ระบบคีย์การ์ด</td>
              </tr>
              <tr>
                <td>✅ กล้องวงจรปิด + รปภ. 24 ชม.</td>
                <td>✅ ที่จอดรถ</td>
              </tr>
              <tr>
                <td>✅ อินเทอร์เน็ต Wi-Fi</td>
                <td>✅ ลิฟต์</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>📍 ทำเลที่ตั้ง</h2>
          <ul>
            <li>ตั้งอยู่ใกล้ประตูเชียงราก ม.ธรรมศาสตร์ รังสิต</li>
            <li>เดินทางสะดวก ใกล้ร้านอาหาร คาเฟ่ และร้านสะดวกซื้อ</li>
          </ul>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1150.6203301778828!2d100.60225971325347!3d14.064770586105718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e27fbff7ccec17%3A0x83abc14266d47b76!2zQUNDT00gUEFSSyDguKvguK3guJ7guLHguIEg4Lij4Lix4LiH4Liq4Li04LiVIOC4reC4nuC4suC4o-C5jOC4l-C5gOC4oeC5ieC4meC4l-C5jCDguYHguJbguKfguKHguKvguLLguKfguLTguJfguKLguLLguKXguLHguKLguJjguKPguKPguKHguKjguLLguKrguJXguKPguYwg4Lih4LiY!5e0!3m2!1sth!2sth!4v1746838441466!5m2!1sth!2sth"
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
              <a href="https://www.facebook.com/share/1Brpqk3M6J/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
                Accom Park
              </a>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
