'use client';

import Image from "next/image";
import "./dcon2.css";

export default function DcondoPage() {
  return (
    <>
      <header className="dcondo-header">
        <h1>Dcondo Campus Resort Rangsit (เฟส 2)</h1>
        <p>คอนโดสไตล์รีสอร์ท ใกล้มหาวิทยาลัยธรรมศาสตร์ รังสิต พร้อมสิ่งอำนวยความสะดวกครบครัน</p>
      </header>

      <main className="dcondo-main">
        <div className="image-row">
          <Image src="/dc1.jpg" alt="ภาพ Dcondo เฟส 2" width={400} height={300} />
          <Image src="/dc2.jpg" alt="ภาพ Dcondo เฟส 2" width={400} height={300} />
        </div>

        <section>
          <h2>🏡 รายละเอียดที่พัก</h2>
          <p>
            Dcondo Campus Resort Rangsit เฟส 2 เป็นคอนโดมิเนียมสไตล์รีสอร์ท สูง 8 ชั้น 2 อาคาร รวม 462 ยูนิต
            ตั้งอยู่ใกล้มหาวิทยาลัยธรรมศาสตร์ รังสิต เดินทางสะดวก เหมาะสำหรับนักศึกษาและผู้ที่ทำงานในพื้นที่ใกล้เคียง
          </p>
        </section>

        <section>
          <h2>💰 ค่าเช่ารายเดือน</h2>
          <ul>
            <li>ห้องสตูดิโอ / 1 ห้องนอน ขนาดประมาณ 30 ตร.ม.: ค่าเช่าเริ่มต้นที่ 8,500 - 10,000 บาท/เดือน</li>
            <li>ค่าน้ำ: ประมาณ 18 บาท/หน่วย</li>
            <li>ค่าไฟ: ตามอัตราการไฟฟ้า (จ่ายตรงกับการไฟฟ้า)</li>
            <li>เงินประกัน: 2 เดือน + ค่าเช่าล่วงหน้า 1 เดือน</li>
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
                <td>✅ ระบบรักษาความปลอดภัย 24 ชม. (คีย์การ์ด + CCTV)</td>
              </tr>
              <tr>
                <td>✅ Co-working space</td>
                <td>✅ บริการรถรับส่ง</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>📍 ทำเลที่ตั้ง</h2>
          <ul>
            <li>ตั้งอยู่ที่ คลองหนึ่ง คลองหลวง ปทุมธานี</li>
            <li>ใกล้มหาวิทยาลัยธรรมศาสตร์ รังสิต</li>
            <li>ใกล้ตลาดบางขัน และฟิวเจอร์พาร์ค รังสิต</li>
          </ul>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1675.566012437977!2d100.60796469165012!3d14.062459662942164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e27fe53577eaab%3A0x9abe6072d27bf4a8!2zZGNvbmRvIENhbXB1cyBSZXNvcnQgUmFuZ3NpdCAyIOC4lOC4teC4hOC4reC4meC5guC4lCDguYHguITguKHguJvguLHguKog4Lij4Li14Liq4Lit4Lij4LmM4LiXIOC4o-C4seC4h-C4quC4tOC4lSAy!5e0!3m2!1sth!2sth!4v1746765723248!5m2!1sth!2sth"
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
                href="https://scancondo.com/%E0%B9%80%E0%B8%8A%E0%B9%88%E0%B8%B2%E0%B8%84%E0%B8%AD%E0%B8%99%E0%B9%82%E0%B8%94/%E0%B8%94%E0%B8%B5%E0%B8%84%E0%B8%AD%E0%B8%99%E0%B9%82%E0%B8%94-%E0%B9%81%E0%B8%84%E0%B8%A1%E0%B8%9B%E0%B8%B1%E0%B8%AA-%E0%B8%A3%E0%B8%B1%E0%B8%87%E0%B8%AA%E0%B8%B4%E0%B8%95-%E0%B9%80%E0%B8%9F%E0%B8%AA-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                scancondo.com
              </a>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
