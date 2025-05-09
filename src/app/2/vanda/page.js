'use client';

import Image from "next/image";
import "./vanda11.css";

export default function VandaPage() {
  return (
    <>
      <header className="vanda-header">
        <h1>หอพัก Vanda TU มหาวิทยาลัยธรรมศาสตร์</h1>
        <p>หอพักสไตล์โมเดิร์น บรรยากาศดี ใกล้ มธ. รังสิต เดินทางสะดวก พร้อมสิ่งอำนวยความสะดวกครบ</p>
      </header>

      <main className="vanda-main">
        <div className="image-row">
          <Image src="/vd1.jpg" alt="ภาพหอพัก Vanda TU 1" width={400} height={300} />
          <Image src="/vd2.jpg" alt="ภาพหอพัก Vanda TU 2" width={400} height={300} />
        </div>

        <section>
          <h2>🏡 รายละเอียดหอพัก</h2>
          <p>
            Vanda TU เป็นหอพักคุณภาพตั้งอยู่บนถนนเชียงราก 1 ใกล้ประตูทางเข้าหลักของมหาวิทยาลัยธรรมศาสตร์ ศูนย์รังสิต 
            ภายในห้องพักตกแต่งพร้อมอยู่ มีเฟอร์นิเจอร์บิลต์อินครบ เช่น เตียง โต๊ะ ตู้เสื้อผ้า โต๊ะอ่านหนังสือ 
            เหมาะสำหรับนักศึกษาที่ต้องการความสะดวกสบายและปลอดภัย
          </p>
        </section>

        <section>
          <h2>💰 ค่าเช่ารายเดือน</h2>
          <ul>
            <li>ค่าเช่าเริ่มต้นประมาณ 5,000 - 6,000 บาท/เดือน (ขึ้นอยู่กับประเภทห้องและวิว)</li>
            <li>ค่าน้ำ 18 บาท/หน่วย | ค่าไฟ 8 บาท/หน่วย</li>
            <li>ค่าประกัน 2 เดือน + ค่าเช่าล่วงหน้า 1 เดือน</li>
          </ul>
        </section>

        <section>
          <h2>💪 สิ่งอำนวยความสะดวก</h2>
          <table>
            <tbody>
              <tr>
                <td>✅ แอร์ + เครื่องทำน้ำอุ่น</td>
                <td>✅ อินเทอร์เน็ต Wi-Fi</td>
              </tr>
              <tr>
                <td>✅ ที่จอดรถ</td>
                <td>✅ ระบบคีย์การ์ด + กล้อง CCTV</td>
              </tr>
              <tr>
                <td>✅ ลิฟต์โดยสาร</td>
                <td>✅ พื้นที่พักผ่อนส่วนกลาง</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>📍 ทำเลที่ตั้ง</h2>
          <ul>
            <li>ตั้งอยู่บนถนนเชียงราก 1 ใกล้มหาวิทยาลัยธรรมศาสตร์ ประมาณ 3-5 นาที</li>
            <li>ใกล้ตลาดหน้ามอ ร้านอาหาร คาเฟ่ และ 7-Eleven</li>
          </ul>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3870.195591425693!2d100.60674657486196!3d14.065624586359775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e27ff02d91ed09%3A0x42f0f0890aa4b61!2z4Lir4Lit4Lie4Lix4LiB4LmB4Lin4LiZ4LiU4LmJ4Liy!5e0!3m2!1sth!2sth!4v1746756153044!5m2!1sth!2sth"
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
              <i className="fas fa-globe"></i> Facebook:{" "}
              <a href="https://www.facebook.com/share/1BjN5CVpdG/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
                Vanda TU
              </a>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
