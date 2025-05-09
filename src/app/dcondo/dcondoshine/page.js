'use client';

import Image from "next/image";
import "./shine.css";

export default function DcondoShinePage() {
  return (
    <>
      <header className="dcondo-header">
        <h1>Dcondo Shine</h1>
        <p>คอนโดใหม่ สไตล์ทันสมัย ใกล้มหาวิทยาลัยธรรมศาสตร์ รังสิต พร้อมสิ่งอำนวยความสะดวกครบครัน</p>
      </header>

      <main className="dcondo-main">
        <div className="image-row">
          <Image src="/dc7.jpg" alt="ภาพ Dcondo Shine" width={400} height={300} />
          <Image src="/dc8.jpg" alt="ภาพ Dcondo Shine" width={400} height={300} />
        </div>

        <section>
          <h2>🏡 รายละเอียดที่พัก</h2>
          <p>
            Dcondo Shine ตั้งอยู่ใกล้มหาวิทยาลัยธรรมศาสตร์ รังสิต
            ห้องพักมีขนาดประมาณ 26–30 ตร.ม. ตกแต่งครบ พร้อมเฟอร์นิเจอร์และเครื่องใช้ไฟฟ้า
            เหมาะสำหรับนักศึกษาและคนทำงานที่ต้องการความสะดวกและความเป็นส่วนตัว
          </p>
        </section>

        <section>
          <h2>💰 ค่าเช่ารายเดือน</h2>
          <ul>
            <li>เริ่มต้นที่ 9,000 บาท/เดือน สำหรับห้องขนาด 26–30 ตร.ม.</li>
            <li>ค่าน้ำและค่าไฟตามมิเตอร์การใช้งานจริง</li>
            <li>เงินประกัน 1 เดือน + ค่าเช่าล่วงหน้า 1 เดือน</li>
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
                <td>✅ ห้องสมุด</td>
                <td>✅ ระบบรักษาความปลอดภัย 24 ชม. (CCTV + คีย์การ์ด)</td>
              </tr>
              <tr>
                <td>✅ Co-working space</td>
                <td>✅ ที่จอดรถ</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>📍 ทำเลที่ตั้ง</h2>
          <ul>
            <li>อยู่ใกล้ธรรมศาสตร์ รังสิต เพียงไม่กี่นาที</li>
            <li>ใกล้ตลาดบางขัน และฟิวเจอร์พาร์ค รังสิต</li>
          </ul>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1675.56448343902!2d100.60804361829923!3d14.062668391222862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e27f5d8ae0a1f5%3A0x3f668a907d72f27b!2sdcondo%20Shine%20Rangsit!5e0!3m2!1sth!2sth!4v1746769217178!5m2!1sth!2sth"
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
                href="https://www.sansiri.com/condominium/dcondo-shine-rangsit/th/?utm_source=google&utm_medium=cpc&utm_campaign=ip-awo-dcondo-shine-rangsit_01-06-03-00-00-00-618&utm_content=brand&gad_source=1&gad_campaignid=1757906120&gbraid=0AAAAAC2NL_yWCzxxe2K9mq9CMW4TR31Nh&gclid=Cj0KCQjwrPHABhCIARIsAFW2XBPeJyuJpOMlTzp2bmcH8OQgQPqYqX0ZwY1KH8X0olvNbym224KppcIaAkNJEALw_wcB#home"
                target="_blank"
                rel="noopener noreferrer"
              >
               sansiri.com
              </a>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
