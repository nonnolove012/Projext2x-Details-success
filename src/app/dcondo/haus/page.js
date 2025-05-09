'use client';

import Image from "next/image";
import "./haus12.css";

export default function HausPage() {
  return (
    <>
      <header className="huas-header">
        <h1>Haus Private Residences</h1>
        <p>หอพักระดับคอนโดมิเนียม ใกล้มหาวิทยาลัยธรรมศาสตร์ รังสิต พร้อมสิ่งอำนวยความสะดวกครบครัน</p>
      </header>

      <main className="huas-main">
        <div className="image-row">
          <Image src="/ha1.webp" alt="ภาพหอพัก Haus 1" width={400} height={300} />
          <Image src="/ha2.webp" alt="ภาพหอพัก Haus 2" width={400} height={300} />
        </div>

        <section>
          <h2>🏡 รายละเอียดที่พัก</h2>
          <p>
            Haus Private Residences เป็นหอพักระดับพรีเมียมสไตล์คอนโด ตั้งอยู่ห่างจากมหาวิทยาลัยธรรมศาสตร์ รังสิต เพียงไม่กี่นาที
            มีห้องพักหลากหลายขนาดให้เลือก ทั้งวิวถนนและวิวสระว่ายน้ำ พร้อมเฟอร์นิเจอร์และสิ่งอำนวยความสะดวกครบครัน
          </p>
        </section>

        <section>
          <h2>💰 ค่าเช่ารายเดือน</h2>
          <ul>
            <li>ห้องวิวถนน: 7,500 บาท/เดือน</li>
            <li>ห้องวิวสระว่ายน้ำ: 7,900 บาท/เดือน</li>
            <li>ค่าน้ำ 30 บาท/หน่วย (ขั้นต่ำ 200 บาท)</li>
            <li>ค่าไฟ 8 บาท/หน่วย</li>
            <li>เงินประกัน 20,000 บาท</li>
          </ul>
        </section>

        <section>
          <h2>💪 สิ่งอำนวยความสะดวก</h2>
          <table>
            <tbody>
              <tr>
                <td>✅ สระว่ายน้ำ</td>
                <td>✅ ฟิตเนส</td>
              </tr>
              <tr>
                <td>✅ ที่จอดรถ</td>
                <td>✅ ระบบคีย์การ์ด / กล้องวงจรปิด</td>
              </tr>
              <tr>
                <td>✅ Co-working space</td>
                <td>✅ ลิฟต์โดยสาร</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>📍 ทำเลที่ตั้ง</h2>
          <ul>
            <li>ใกล้มหาวิทยาลัยธรรมศาสตร์ รังสิต</li>
            <li>ใกล้ตลาดบางขัน, ฟิวเจอร์พาร์ค รังสิต และร้านค้าอื่น ๆ</li>
          </ul>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3870.253544874089!2d100.60501797486195!3d14.062199786362854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e27f376449029b%3A0x573b12440e1b0592!2z4Liu4Lix4LiqIOC5hOC4nuC5gOC4p-C4qiDguYDguKPguKrguIvguLTguYDguJTguJnguJfguYw!5e0!3m2!1sth!2sth!4v1746761622253!5m2!1sth!2sth"
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
              <a
                href="https://www.renthub.in.th/haus-private-residences-%E0%B8%A1-%E0%B8%98%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%A8%E0%B8%B2%E0%B8%AA%E0%B8%95%E0%B8%A3%E0%B9%8C-%E0%B8%A8%E0%B8%B9%E0%B8%99%E0%B8%A2%E0%B9%8C%E0%B8%A3%E0%B8%B1%E0%B8%87%E0%B8%AA%E0%B8%B4%E0%B8%95"
                target="_blank"
                rel="noopener noreferrer"
              >
                renthub.in.th
              </a>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
