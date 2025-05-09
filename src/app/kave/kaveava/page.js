import Image from "next/image";
import "./kaveava11.css";

export default function KaveAvaPage() {
  return (
    <>
      <header className="jpark-header">
        <h1>KAVE AVA</h1>
        <p>คอนโดใกล้ มธ. รังสิต | สะดวก ครบครัน ทันสมัย</p>
      </header>

      <main className="jpark-main">
        <div className="image-row">
          <Image src="/kv1.jpg" alt="ภาพห้องพัก Kave Ava 1" width={400} height={300} />
          <Image src="/kv2.jpg" alt="ภาพห้องพัก Kave Ava 2" width={400} height={300} />
        </div>

        <section>
          <h2>🏡 รายละเอียดห้องพัก</h2>
          <p>
            ห้องพักภายใน Kave Ava ถูกออกแบบอย่างทันสมัย พร้อมเฟอร์นิเจอร์และเครื่องใช้ไฟฟ้าครบชุด เช่น เตียง โซฟา โต๊ะทำงาน Smart TV ตู้เย็น ไมโครเวฟ เครื่องซักผ้า เครื่องทำน้ำอุ่น และเครื่องปรับอากาศ 2 ตัว พร้อมระบบ Digital Door Lock และ Bluetooth Sound System เพื่อความสะดวกสบายและปลอดภัยในการอยู่อาศัย
          </p>
        </section>

        <section>
          <h2>💰 ราคาเช่ารายเดือน</h2>
          <ul>
            <li>ห้องขนาด 23 ตร.ม. เริ่มต้นที่ 8,000 - 8,500 บาท/เดือน (สัญญา 1-2 ปี)</li>
            <li>ห้องขนาด 25 ตร.ม. ประมาณ 9,500 - 11,000 บาท/เดือน</li>
            <li>ห้องขนาด 28 ตร.ม. เริ่มต้นที่ 10,000 - 13,000 บาท/เดือน</li>
            <li>ราคานี้รวมค่าส่วนกลาง แต่ไม่รวมค่าน้ำ-ค่าไฟ</li>
          </ul>
        </section>

        <section>
          <h2>💪 สิ่งอำนวยความสะดวก</h2>
          <table>
            <tbody>
              <tr>
                <td>✅ สระว่ายน้ำ 3 สระ</td>
                <td>✅ ฟิตเนส</td>
              </tr>
              <tr>
                <td>✅ Shuttle Bus ไป-กลับ มธ.</td>
                <td>✅ Co-working space และห้องประชุม</td>
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
            <li>ใกล้ มหาวิทยาลัยธรรมศาสตร์ รังสิต</li>
            <li>เดินทางสะดวก ห่างจากสนามบินดอนเมือง ~20 กม.</li>
          </ul>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3870.215479369435!2d100.60647767486198!3d14.064449386360819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e27f844918c60d%3A0xdf8aa33ef92ecbf7!2z4LmA4LiE4LifIOC5gOC4reC4p-C4sg!5e0!3m2!1sth!2sth!4v1746757156885!5m2!1sth!2sth"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>

        <section>
          <h2>📞 ติดต่อเพิ่มเติม</h2>
          <ul className="contact-icons">
            <li>
              <i className="fas fa-globe"></i> เว็บไซต์: <a href="https://assetwise.co.th/condominium/kave-ava/" target="_blank">assetwise.co.th</a>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
