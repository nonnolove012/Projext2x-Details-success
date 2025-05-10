'use client';

import Image from "next/image";
import "./hiso.css";

export default function HisoPlacePage() {
  return (
    <>
      <header className="hiso-header">
        <h1>Hiso Place (ไฮโซ เพลส)</h1>
        <p>หอพักตรงข้ามประตูเชียงราก 1 ม.ธรรมศาสตร์ รังสิต ห้องกว้าง พร้อมสิ่งอำนวยความสะดวกครบครัน</p>
      </header>

      <main className="hiso-main">
        <div className="image-row">
          <Image src="/hs1.webp" alt="Hiso Place" width={400} height={300} />
          <Image src="/hs2.webp" alt="ภายในห้อง Hiso Place" width={400} height={300} />
        </div>

        <section>
          <h2>🏡 รายละเอียดที่พัก</h2>
          <p>
            ห้องพักขนาดกว้างประมาณ 40 ตร.ม. พร้อมเฟอร์นิเจอร์ครบชุด เช่น เตียง 6 ฟุต ตู้เสื้อผ้า โซฟา โต๊ะเขียนหนังสือ และโต๊ะเครื่องแป้ง
            ภายในห้องตกแต่งด้วยผนังสีเหลืองสบายตา
          </p>
        </section>

        <section>
          <h2>💰 ค่าเช่ารายเดือน</h2>
          <ul>
            <li>เริ่มต้นที่ 5,500 บาท/เดือน</li>
            <li>ค่าน้ำ 6 บาท/หน่วย</li>
            <li>ค่าไฟ 25 บาท/หน่วย</li>
            <li>เงินประกัน 11,000 บาท (คืนเมื่อสิ้นสุดสัญญา)</li>
          </ul>
        </section>

        <section>
          <h2>💪 สิ่งอำนวยความสะดวก</h2>
          <table>
            <tbody>
              <tr>
                <td>✅ ฟิตเนส</td>
                <td>✅ มินิมาร์ท</td>
              </tr>
              <tr>
                <td>✅ ร้านอาหารตามสั่ง</td>
                <td>✅ ร้านซักรีด</td>
              </tr>
              <tr>
                <td>✅ ระบบคีย์การ์ด</td>
                <td>✅ CCTV และ รปภ. 24 ชม.</td>
              </tr>
              <tr>
                <td>✅ ที่จอดรถฟรี</td>
                <td>✅ ลิฟต์โดยสาร</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>📍 ทำเลที่ตั้ง</h2>
          <ul>
            <li>ตั้งอยู่ฝั่งตรงข้ามประตูเชียงราก 1 ม.ธรรมศาสตร์ รังสิต</li>
            <li>เดินทางสะดวก ใกล้ตลาดนัด ร้านสะดวกซื้อ และร้านอาหารมากมาย</li>
          </ul>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3870.2267814673046!2d100.60240685521823!3d14.063781490356092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e27fef68c8e9a7%3A0xf3b992f2de3b755e!2sHiso%20Place!5e0!3m2!1sth!2sth!4v1746827813895!5m2!1sth!2sth"
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
              🌐 เว็บไซต์: <a href="https://www.hongpak.in.th/rooms/5537-hiso-place" target="_blank" rel="noopener noreferrer">hongpak.in.th</a>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
