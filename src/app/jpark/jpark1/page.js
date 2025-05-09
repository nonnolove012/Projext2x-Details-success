/* File: app/jpark/page.jsx */

import Image from "next/image";
import "./jpark1.css";

export default function JParkPage() {
  return (
    <>
      <header className="jpark-header">
      
        <h1>J PARK RESIDENCE</h1>
        <p>หอพักคอนโดใกล้ มธ. รังสิต | เงียบ สะดวก ปลอดภัย</p>
      </header>

      <main className="jpark-main">
        <div className="image-row">
          <Image src="/jparkx1.jpg" alt="ภาพหอพัก J Park Residence 1" width={400} height={300} />
          <Image src="/jparkx3.webp" alt="ภาพหอพัก J Park Residence 2" width={400} height={300} />
        </div>

        <section>
          <h2>🏡 รายละเอียดห้องพัก</h2>
          <p>
            ห้องพักภายในโครงการ J Park Residence ได้รับการออกแบบอย่างพิถีพิถันเพื่อรองรับการอยู่อาศัยที่สะดวกสบายและมีคุณภาพ ด้วยพื้นที่ใช้สอยขนาดกว้างขวาง พร้อมระเบียงส่วนตัวที่ช่วยให้อากาศถ่ายเทได้อย่างเหมาะสม ภายในห้องตกแต่งครบครันด้วยเฟอร์นิเจอร์คุณภาพ ประกอบด้วยเตียงขนาด 5 ฟุต โต๊ะทำงาน โซฟา ตู้เย็น โทรทัศน์ เครื่องปรับอากาศ และเครื่องทำน้ำอุ่น พร้อมสำหรับการเข้าอยู่อาศัยทันทีโดยไม่จำเป็นต้องจัดหาสิ่งอำนวยความสะดวกเพิ่มเติม
          </p>
        </section>

        <section>
          <h2>💰 ราคาเช่ารายเดือน</h2>
          <ul>
            <li>เริ่มต้นที่ประมาณ 6,500 บาท/เดือน สำหรับห้องมาตรฐาน</li>
            <li>ห้องมุมหรือวิวพิเศษอาจอยู่ระหว่าง 7,000 - 8,500 บาท/เดือน</li>
            <li>ราคานี้รวมค่าส่วนกลาง แต่ไม่รวมค่าน้ำ-ค่าไฟ</li>
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
                <td>✅ ร้านสะดวกซื้อ</td>
                <td>✅ ห้องสมุด & ห้องประชุม</td>
              </tr>
              <tr>
                <td>✅ ลานจอดรถ</td>
                <td>✅ รปภ. 24 ชม.</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>📍 ทำเลที่ตั้ง</h2>
          <ul>
            <li>ใกล้ มธ. รังสิต และ ม.กรุงเทพ</li>
            <li>เดินทางง่าย ห่างดอนเมือง ~20 กม.</li>
          </ul>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.001968649028!2d100.59432951531657!3d14.066758090142947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e281e51da7a0a3%3A0x1a8a76b8b9b9f3cb!2sThammasat%20University%2C%20Rangsit%20Campus!5e0!3m2!1sen!2sth!4v1685629732760!5m2!1sen!2sth"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>

        <section>
          <h2>📞 ติดต่อเพิ่มเติม</h2>
          <ul className="contact-icons">
            <li>
              <i className="fas fa-globe"></i> เว็บไซต์: <a href="https://jparkthammasat.com" target="_blank">jparkthammasat.com</a>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
