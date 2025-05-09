// pages/fhadome.tsx (หรือชื่ออื่นตาม path ที่ใช้)
import Image from "next/image";
import "./fahdome1.css"; // ใช้ style เดิมได้ถ้ายังเหมาะสม

export default function FahDomePage() {
  return (
    <>
      <header className="jpark-header">
        <h1>FHA DOME CONDO</h1>
        <p>คอนโดหรูพร้อมอยู่ ใกล้ มธ. รังสิต | อยู่สบาย ปลอดภัย สิ่งอำนวยความสะดวกครบ</p>
      </header>

      <main className="jpark-main">
        <div className="image-row">
          <Image src="/fd1.jpg" alt="ภาพหอพัก FHA DOME 1" width={400} height={300} />
          <Image src="/fd2.jpg" alt="ภาพหอพัก FHA DOME 2" width={400} height={300} />
        </div>

        <section>
          <h2>🏡 รายละเอียดห้องพัก</h2>
          <p>
            FahDome Condo คือคอนโดมิเนียมหรูใกล้มหาวิทยาลัยธรรมศาสตร์ รังสิต
            ออกแบบทันสมัยพร้อมการตกแต่งครบครัน เหมาะกับนักศึกษาที่ต้องการความเป็นส่วนตัวและความปลอดภัย
            ภายในห้องประกอบด้วย เตียง 5 ฟุต โต๊ะทำงาน ตู้เสื้อผ้า เครื่องปรับอากาศ ทีวี ตู้เย็น และเครื่องทำน้ำอุ่น
            พร้อมเข้าอยู่ทันที
          </p>
        </section>

        <section>
          <h2>💰 ราคาเช่ารายเดือน</h2>
          <ul>
            <li>เริ่มต้นที่ประมาณ 7,000 บาท/เดือน สำหรับห้องมาตรฐาน</li>
            <li>ห้องวิวสระน้ำหรือชั้นสูง ราคาประมาณ 8,000 - 9,500 บาท/เดือน</li>
            <li>ราคานี้รวมค่าส่วนกลางแล้ว แต่ไม่รวมค่าน้ำค่าไฟ</li>
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
                <td>✅ Co-working Space</td>
                <td>✅ ร้านกาแฟภายในอาคาร</td>
              </tr>
              <tr>
                <td>✅ ระบบคีย์การ์ด</td>
                <td>✅ กล้องวงจรปิดและ รปภ. 24 ชม.</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>📍 ทำเลที่ตั้ง</h2>
          <ul>
            <li>ติดถนนเชียงราก ใกล้ประตูหน้าธรรมศาสตร์</li>
            <li>เดินไป มธ. รังสิต เพียง 3-5 นาที</li>
          </ul>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3870.122612148801!2d100.59266647486216!3d14.069936186355966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e27fc22682b2cb%3A0xf24d808ec24bbc6!2z4Lif4LmJ4Liy4LmC4LiU4LihIOC4hOC4reC4meC5guC4lOC4oeC4tOC5gOC4meC4teC4ouC4oQ!5e0!3m2!1sth!2sth!4v1746591143686!5m2!1sth!2sth"
            width="100%"
            height="400"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>

        <section>
          <h2>📞 ติดต่อเพิ่มเติม</h2>
          <ul className="contact-icons">
            <li>
              <i className="fas fa-globe"></i> เว็บไซต์:{" "}
              <a href="https://www.fahdomebychokeplus.com/" target="_blank" rel="noopener noreferrer">
              fahdomebychokeplus.com
              </a>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
