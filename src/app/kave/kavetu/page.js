import Image from "next/image";
import "./kavetu11.css";

export default function KaveTUPage() {
  return (
    <>
      <header className="jpark-header">
        <h1>KAVE TU</h1>
        <p>คอนโดหรู ใกล้ มธ. รังสิต | พร้อมอยู่ ครบทุกฟังก์ชัน</p>
      </header>

      <main className="jpark-main">
        <div className="image-row">
          <Image src="/kt1.jpeg" alt="ภาพห้องพัก Kave TU 1" width={400} height={300} />
          <Image src="/kt2.jpg" alt="ภาพห้องพัก Kave TU 2" width={400} height={300} />
        </div>

        <section>
          <h2>🏡 รายละเอียดห้องพัก</h2>
          <p>
            Kave TU ออกแบบห้องพักให้เหมาะกับการอยู่อาศัยของนักศึกษาและคนทำงาน มีเฟอร์นิเจอร์ครบชุด เช่น เตียง 5 ฟุต ตู้เสื้อผ้า โต๊ะทำงาน เคาน์เตอร์ครัว เครื่องปรับอากาศ เครื่องทำน้ำอุ่น ไมโครเวฟ และตู้เย็น พร้อมระบบ Smart Security และ Digital Door Lock ภายในโครงการมีสิ่งอำนวยความสะดวกครบครัน
          </p>
        </section>

        <section>
          <h2>💰 ราคาเช่ารายเดือน</h2>
          <ul>
            <li>เริ่มต้นที่ประมาณ 8,000 - 10,000 บาท/เดือน สำหรับห้องขนาด 22-25 ตร.ม.</li>
            <li>ห้องใหญ่ 28-30 ตร.ม. ราคาประมาณ 10,000 - 13,000 บาท/เดือน</li>
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
                <td>✅ Co-Working Space</td>
                <td>✅ ห้องดูหนัง & Lounge</td>
              </tr>
              <tr>
                <td>✅ ที่จอดรถ</td>
                <td>✅ ระบบรักษาความปลอดภัย 24 ชม.</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>📍 ทำเลที่ตั้ง</h2>
          <ul>
            <li>อยู่หน้ามหาวิทยาลัยธรรมศาสตร์ รังสิต</li>
            <li>เดินทางสะดวก ใกล้ทางด่วนและรถไฟฟ้าในอนาคต</li>
          </ul>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3870.2435891278237!2d100.60784897486194!3d14.062788186362335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e27f9080a5a743%3A0x73d25f9fbc6b915f!2z4LmA4LiE4LifIOC4l-C4teC4ouC4uQ!5e0!3m2!1sth!2sth!4v1746757566381!5m2!1sth!2sth"
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
              <a href="https://thinkofliving.com/%E0%B8%84%E0%B8%AD%E0%B8%99%E0%B9%82%E0%B8%94/kave-tu-%E0%B8%84%E0%B8%AD%E0%B8%99%E0%B9%82%E0%B8%94-low-rise-%E0%B9%83%E0%B8%81%E0%B8%A5%E0%B9%89%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%A5%E0%B8%B1%E0%B8%A2%E0%B8%98%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%A8%E0%B8%B2%E0%B8%AA%E0%B8%95%E0%B8%A3%E0%B9%8C-%E0%B8%81%E0%B8%B1%E0%B8%9A%E0%B8%AA%E0%B9%88%E0%B8%A7%E0%B8%99%E0%B8%81%E0%B8%A5%E0%B8%B2%E0%B8%87%E0%B8%81%E0%B8%A7%E0%B9%88%E0%B8%B2-40-%E0%B8%9F%E0%B8%B1%E0%B8%87%E0%B8%81%E0%B9%8C%E0%B8%8A%E0%B8%B1%E0%B8%99-%E0%B8%9E%E0%B8%A3%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B8%AA%E0%B8%A3%E0%B8%B0%E0%B8%A7%E0%B9%88%E0%B8%B2%E0%B8%A2%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%A2%E0%B8%B2%E0%B8%A7-100-%E0%B9%80%E0%B8%A1%E0%B8%95%E0%B8%A3-%E0%B8%88%E0%B8%B2%E0%B8%81-asset-wise-%E0%B8%A3%E0%B8%B5%E0%B8%A7%E0%B8%B4%E0%B8%A7%E0%B8%89%E0%B8%9A%E0%B8%B1%E0%B8%9A%E0%B8%97%E0%B8%B5%E0%B9%88-2287-751476-%E0%B8%A3%E0%B8%B5%E0%B8%A7%E0%B8%B4%E0%B8%A7%E0%B9%82%E0%B8%84%E0%B8%A3%E0%B8%87%E0%B8%81%E0%B8%B2%E0%B8%A3/" target="_blank">
              thinkofliving.com
              </a>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
