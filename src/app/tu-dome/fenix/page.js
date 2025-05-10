'use client';

import Image from "next/image";
import "./fenix.css"; 

export default function FenixPage() {
  return (
    <>
      <header className="hiso-header">
        <h1>Fenix Apartment (เฟนิกซ์ อพาร์ทเมนท์)</h1>
        <p>หอพักสไตล์โมเดิร์น ใกล้ ม.ธรรมศาสตร์ รังสิต เดินทางสะดวก ปลอดภัย พร้อมสิ่งอำนวยความสะดวกครบครัน</p>
      </header>

      <main className="hiso-main">
        <div className="image-row">
          <Image src="/f1.webp" alt="Fenix ภายนอก" width={400} height={300} />
          <Image src="/f2.webp" alt="Fenix ห้องพัก" width={400} height={300} />
        </div>

        <section>
          <h2>🏡 รายละเอียดที่พัก</h2>
          <p>
            ห้องพักขนาดประมาณ 28–35 ตร.ม. เฟอร์นิเจอร์ครบ เช่น เตียง 5 ฟุต, โต๊ะอ่านหนังสือ, ตู้เสื้อผ้า, โต๊ะเครื่องแป้ง,
            พร้อมเครื่องใช้ไฟฟ้า แอร์ ทีวี ตู้เย็น เครื่องทำน้ำอุ่น และอินเทอร์เน็ต Wi-Fi
          </p>
        </section>

        <section>
          <h2>💰 ค่าเช่ารายเดือน</h2>
          <ul>
            <li>เริ่มต้นที่ 5,500–6,300 บาท/เดือน (ขึ้นอยู่กับขนาดและชั้น)</li>
            <li>ค่าน้ำ 18 บาท/หน่วย</li>
            <li>ค่าไฟ 7 บาท/หน่วย</li>
            <li>ค่าประกัน 2 เดือน + ล่วงหน้า 1 เดือน</li>
          </ul>
        </section>

        <section>
          <h2>💪 สิ่งอำนวยความสะดวก</h2>
          <table>
            <tbody>
              <tr>
                <td>✅ ฟิตเนส</td>
                <td>✅ เครื่องซักผ้าหยอดเหรียญ</td>
              </tr>
              <tr>
                <td>✅ ระบบคีย์การ์ด</td>
                <td>✅ กล้องวงจรปิด + รปภ.</td>
              </tr>
              <tr>
                <td>✅ ลิฟต์</td>
                <td>✅ อินเทอร์เน็ต Wi-Fi</td>
              </tr>
              <tr>
                <td>✅ ที่จอดรถ</td>
                <td>✅ พื้นที่พักผ่อนส่วนกลาง</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>📍 ทำเลที่ตั้ง</h2>
          <ul>
            <li>อยู่หลัง ม.ธรรมศาสตร์ ประตูเชียงราก 1</li>
            <li>เดินทางสะดวก ใกล้ร้านสะดวกซื้อ ร้านอาหาร และป้ายรถตู้</li>
          </ul>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.7084589690767!2d100.59992187486202!3d14.06519438636019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e27fe8ceaa9e79%3A0xdf38b6186d620b53!2zRmVuaXggQXBhcnRtZW50IC0g4Lif4Li14LiZ4Li04LiB4LiL4LmMIOC4reC4nuC4suC4o-C5jOC4l-C5gOC4oeC5ieC4meC4l-C5jA!5e1!3m2!1sth!2sth!4v1746841941722!5m2!1sth!2sth"
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
              🌐 เว็บไซต์:{" "}
              <a href="https://www.renthub.in.th/fenix-apartment-%E0%B8%9F%E0%B8%B5%E0%B8%99%E0%B8%B4%E0%B8%81%E0%B8%8B%E0%B9%8C-%E0%B8%AD%E0%B8%9E%E0%B8%B2%E0%B8%A3%E0%B9%8C%E0%B8%97%E0%B9%80%E0%B8%A1%E0%B9%89%E0%B8%99%E0%B8%97%E0%B9%8C" target="_blank" rel="noopener noreferrer">
              renthub.in.th
              </a>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
