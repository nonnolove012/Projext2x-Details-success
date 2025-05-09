'use client';

import Image from "next/image";
import "./sky1.css";

export default function SkyViewPage() {
  return (
    <>
      <header className="skyview-header">
        <h1>หอพัก Sky View มหาวิทยาลัยธรรมศาสตร์</h1>
        <p>หอพักเอกชนหรู ใกล้ มธ. รังสิต วิวดี สะอาด ปลอดภัย พร้อมสิ่งอำนวยความสะดวกครบ</p>
      </header>

      <main className="skyview-main">
        <div className="image-row">
          <Image src="/sk1.avif" alt="ภาพหอพัก Sky View 1" width={400} height={300} />
          <Image src="/sk2.avif" alt="ภาพหอพัก Sky View 2" width={400} height={300} />
        </div>

        <section>
          <h2>🏡 รายละเอียดหอพัก</h2>
          <p>
            Sky View เป็นหอพักเอกชนระดับพรีเมียม ตั้งอยู่ใกล้มหาวิทยาลัยธรรมศาสตร์ ศูนย์รังสิต 
            ห้องพักใหม่ สะอาด มีความเป็นส่วนตัว พร้อมระเบียงชมวิว ห้องกว้างขวาง ตกแต่งสไตล์โมเดิร์น 
            มีเฟอร์นิเจอร์ครบ เช่น เตียง โต๊ะ ตู้เสื้อผ้า แอร์ ห้องน้ำในตัว และเครื่องทำน้ำอุ่น
          </p>
        </section>

        <section>
          <h2>💰 ค่าเช่ารายเดือน</h2>
          <ul>
            <li>ค่าเช่าเริ่มต้นประมาณ 7,500 - 10,000 บาท/เดือน (ขึ้นอยู่กับวิวและขนาดห้อง)</li>
            <li>ค่าน้ำและค่าไฟแยกตามมิเตอร์</li>
            <li>เหมาะสำหรับนักศึกษาที่มองหาหอพักสภาพใหม่ ปลอดภัย และบรรยากาศดี</li>
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
                <td>✅ ฟิตเนสและโซนพักผ่อน</td>
                <td>✅ เครื่องซักผ้าและอบผ้าหยอดเหรียญ</td>
              </tr>
              <tr>
                <td>✅ ลิฟต์โดยสาร</td>
                <td>✅ ที่จอดรถยนต์และมอเตอร์ไซค์</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>📍 ทำเลที่ตั้ง</h2>
          <ul>
            <li>ใกล้มหาวิทยาลัยธรรมศาสตร์ รังสิต เดินทางสะดวก</li>
            <li>ใกล้ตลาดบางขันและร้านค้า ร้านอาหารมากมาย</li>
          </ul>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3870.1844265898885!2d100.60940357486211!3d14.066284286359247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e27ff1ab920599%3A0x39db4e2fab269b0f!2z4Lit4Liy4LiE4Liy4Lij4Lir4Lit4Lie4Lix4LiB4Liq4LiB4Liy4Lii4Lin4Li04LinIOC4mOC4o-C4o-C4oeC4qOC4suC4quC4leC4o-C5jA!5e0!3m2!1sth!2sth!4v1746673787497!5m2!1sth!2sth"
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
              <a href="https://www.skyview-apartment.net/tu" target="_blank" rel="noopener noreferrer">
              skyview-apartment.net
              </a>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
