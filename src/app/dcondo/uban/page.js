'use client';

import Image from "next/image";
import "./uban11.css"; 

export default function UbanPage() {
  return (
    <>
      <header className="skyview-header">
        <h1>ยู บ้านสุขสบาย รังสิต</h1>
        <p>หอพักสไตล์อพาร์ตเมนต์ ใกล้มหาวิทยาลัยธรรมศาสตร์ รังสิต เดินทางสะดวก บรรยากาศสงบ เหมาะแก่การเรียนและพักผ่อน</p>
      </header>

      <main className="skyview-main">
        <div className="image-row">
          <Image src="/ub1.jpeg" alt="ภาพหอพัก ยูบ้านสุขสบาย 1" width={400} height={300} />
          <Image src="/ub2.jpg" alt="ภาพหอพัก ยูบ้านสุขสบาย 2" width={400} height={300} />
        </div>

        <section>
          <h2>🏡 รายละเอียดที่พัก</h2>
          <p>
            ยู บ้านสุขสบาย เป็นหอพักสไตล์อพาร์ตเมนต์ ใกล้มหาวิทยาลัยธรรมศาสตร์ รังสิต 
            ให้ความรู้สึกปลอดภัยและเป็นส่วนตัว พร้อมสิ่งอำนวยความสะดวกพื้นฐานครบครัน เหมาะสำหรับนักศึกษาที่ต้องการความเงียบสงบและเดินทางสะดวก
          </p>
        </section>

        <section>
          <h2>💰 ค่าเช่ารายเดือน</h2>
          <ul>
            <li>ค่าเช่าเริ่มต้นประมาณ 7,500 - 8,300 บาท/เดือน (ขึ้นอยู่กับขนาดห้องและชั้น)</li>
            <li>ค่าน้ำ 18 บาท/หน่วย ค่าไฟ 8 บาท/หน่วย</li>
            <li>เงินประกัน 1 เดือน + ค่าเช่าล่วงหน้า 1 เดือน</li>
          </ul>
        </section>

        <section>
          <h2>💪 สิ่งอำนวยความสะดวก</h2>
          <table>
            <tbody>
              <tr>
                <td>✅ อินเทอร์เน็ต Wi-Fi</td>
                <td>✅ เครื่องซักผ้าหยอดเหรียญ</td>
              </tr>
              <tr>
                <td>✅ ที่จอดรถ</td>
                <td>✅ ระบบรักษาความปลอดภัย (คีย์การ์ด + CCTV)</td>
              </tr>
              <tr>
                <td>✅ ร้านค้าภายในหอ</td>
                <td>✅ พัดลมหรือแอร์ (ตามประเภทห้อง)</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>📍 ทำเลที่ตั้ง</h2>
          <ul>
            <li>ใกล้มหาวิทยาลัยธรรมศาสตร์ รังสิต เดินทางได้ภายใน 5-10 นาที</li>
            <li>ใกล้ตลาดบางขัน ร้านสะดวกซื้อ และป้ายรถเมล์</li>
          </ul>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3870.2119138070047!2d100.604745674862!3d14.064660086360616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e27f4102e436c7%3A0xd5970021742986aa!2z4Lii4Li5IOC4muC5ieC4suC4meC4quC4uOC4guC4quC4muC4suC4og!5e0!3m2!1sth!2sth!4v1746760506370!5m2!1sth!2sth"
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
              <a href="https://www.facebook.com/share/1XaV61ga8j/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
                ยูบ้านสุขสบาย รังสิต
              </a>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
