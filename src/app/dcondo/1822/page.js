'use client';

import Image from "next/image";
import "./1822.css";

export default function EighteenTwentyTwoPage() {
  return (
    <>
      <header className="dorm-header">
        <h1>หอพัก 18/22 ธรรมศาสตร์ รังสิต</h1>
        <p>หอพักยอดนิยมสำหรับนักศึกษาธรรมศาสตร์ ใกล้ประตูเชียงราก 1 เดินทางสะดวก พร้อมร้านค้าและสิ่งอำนวยความสะดวกโดยรอบ</p>
      </header>

      <main className="dorm-main">
        <div className="image-row">
          <Image src="/et1.jpg" alt="ภาพหอพัก 18/22" width={400} height={300} />
          <Image src="/et2.jpg" alt="ภาพหอพัก 18/22 เพิ่มเติม" width={400} height={300} />
        </div>

        <section>
          <h2>🏡 รายละเอียดที่พัก</h2>
          <p>
            หอพัก 18/22 ตั้งอยู่บริเวณหลังธรรมศาสตร์ รังสิต ใกล้ประตูเชียงราก 1
            เป็นอาคารหอพักสูงหลายชั้น มีห้องพักให้เลือกหลายรูปแบบ ขนาดประมาณ 24–28 ตร.ม.
            พร้อมเฟอร์นิเจอร์พื้นฐาน เช่น เตียง ตู้เสื้อผ้า โต๊ะอ่านหนังสือ
            บางห้องมีเครื่องปรับอากาศและเครื่องทำน้ำอุ่น
          </p>
        </section>

        <section>
          <h2>💰 ค่าเช่ารายเดือน</h2>
          <ul>
            <li>เริ่มต้นที่ 6,500–8,500 บาท/เดือน (ขึ้นอยู่กับชั้น ขนาด และเครื่องใช้ไฟฟ้า)</li>
            <li>ค่าน้ำประมาณ 18–20 บาท/หน่วย, ค่าไฟ 7–8 บาท/หน่วย</li>
            <li>เงินประกัน 1 เดือน + ค่าเช่าล่วงหน้า 1 เดือน</li>
          </ul>
        </section>

        <section>
          <h2>💪 สิ่งอำนวยความสะดวก</h2>
          <table>
            <tbody>
              <tr>
                <td>✅ ร้านอาหาร ร้านสะดวกซื้อ ใต้หอพัก</td>
                <td>✅ บริการซักอบรีด</td>
              </tr>
              <tr>
                <td>✅ ระบบคีย์การ์ดเข้า-ออก</td>
                <td>✅ CCTV และ รปภ. 24 ชม.</td>
              </tr>
              <tr>
                <td>✅ ลิฟต์โดยสาร</td>
                <td>✅ พื้นที่จอดรถ (จำนวนจำกัด)</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>📍 ทำเลที่ตั้ง</h2>
          <ul>
            <li>ใกล้ประตูเชียงราก 1 มหาวิทยาลัยธรรมศาสตร์ รังสิต</li>
            <li>เดินเพียงไม่กี่นาทีถึงร้านค้า ตลาดนัด และร้านอาหารมากมาย</li>
          </ul>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1935.1304590954553!2d100.60763640270348!3d14.061763996385343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e27fe739da2ea7%3A0xbd4881dee7464ac3!2z4LmA4Lit4LiX4LiX4Li14LiZLeC4l-C5gOC4p-C4meC4leC4teC5ieC4l-C4uSDguYDguKPguKrguIvguLTguYDguJTguJnguIvguYw!5e0!3m2!1sth!2sth!4v1746769522099!5m2!1sth!2sth"
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
              🌐 เว็บไซต์: <a href="https://www.renthub.in.th/18-22-residences-%E0%B8%A1-%E0%B8%98%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%A8%E0%B8%B2%E0%B8%AA%E0%B8%95%E0%B8%A3%E0%B9%8C-%E0%B8%A8%E0%B8%B9%E0%B8%99%E0%B8%A2%E0%B9%8C%E0%B8%A3%E0%B8%B1%E0%B8%87%E0%B8%AA%E0%B8%B4%E0%B8%95" target="_blank" rel="noopener noreferrer">renthub.in.th</a>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
