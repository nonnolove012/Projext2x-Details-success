import Image from "next/image";
import "./campus1.css";

export default function TheCampusPage() {
  return (
    <>
      <header className="jpark-header">
        <h1>THE CAMPUS RESIDENCE</h1>
        <p>หอพักคอนโดหรู ใกล้ มธ. รังสิต | เงียบสงบ ทันสมัย ปลอดภัย</p>
      </header>

      <main className="jpark-main">
        <div className="image-row">
          <Image src="/cp1.webp" alt="ภาพหอพัก The Campus 1" width={400} height={300} />
          <Image src="/cp2.webp" alt="ภาพหอพัก The Campus 2" width={400} height={300} />
        </div>

        <section>
          <h2>🏡 รายละเอียดห้องพัก</h2>
          <p>
            The Campus Residence ให้บริการห้องพักที่ตกแต่งอย่างสวยงามทันสมัย พร้อมด้วยสิ่งอำนวยความสะดวกครบครัน ภายในห้องมีเฟอร์นิเจอร์คุณภาพ เช่น เตียงนอน 5 ฟุต ตู้เสื้อผ้า โต๊ะอ่านหนังสือ โซฟา ทีวี ตู้เย็น เครื่องปรับอากาศ และห้องน้ำในตัวพร้อมเครื่องทำน้ำอุ่น นอกจากนี้ยังมีระบบรักษาความปลอดภัยตลอด 24 ชม. และพื้นที่ส่วนกลางที่เงียบสงบเหมาะแก่การพักผ่อนและการเรียน
          </p>
        </section>

        <section>
          <h2>💰 ราคาเช่ารายเดือน</h2>
          <ul>
            <li>ราคาเริ่มต้นประมาณ 7,500 บาท/เดือน สำหรับห้องมาตรฐาน</li>
            <li>ห้องวิวสวยหรือชั้นบนอาจอยู่ที่ 8,000 - 9,500 บาท/เดือน</li>
            <li>รวมค่าส่วนกลางแล้ว ไม่รวมค่าน้ำ-ค่าไฟ</li>
          </ul>
        </section>

        <section>
          <h2>💪 สิ่งอำนวยความสะดวก</h2>
          <table>
            <tbody>
              <tr>
                <td>✅ ฟิตเนส</td>
                <td>✅ ห้องอ่านหนังสือ</td>
              </tr>
              <tr>
                <td>✅ ระบบคีย์การ์ด</td>
                <td>✅ พื้นที่ส่วนกลางนั่งเล่น</td>
              </tr>
              <tr>
                <td>✅ ลานจอดรถ</td>
                <td>✅ กล้องวงจรปิด + รปภ.</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>📍 ทำเลที่ตั้ง</h2>
          <ul>
            <li>ตั้งอยู่ในซอยมาลี 2 ใกล้กับประตูเชียงราก 1 มธ. รังสิต</li>
            <li>เดินจากหอไปถึงมหาวิทยาลัยใช้เวลาประมาณ 5 นาที</li>
          </ul>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.007690047812!2d100.59693641531652!3d14.066430790143094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e281e1d924ce2d%3A0x603e9f35e1b72204!2sThe%20Campus%20Residence!5e0!3m2!1sth!2sth!4v1685700000000!5m2!1sth!2sth"
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
              <a href="https://www.renthub.in.th/%E0%B9%80%E0%B8%94%E0%B8%AD%E0%B8%B0%E0%B9%81%E0%B8%84%E0%B8%A1%E0%B8%9B%E0%B8%B1%E0%B8%AA-%E0%B8%AD%E0%B8%9E%E0%B8%B2%E0%B8%A3%E0%B9%8C%E0%B8%97%E0%B9%80%E0%B8%A1%E0%B9%89%E0%B8%99%E0%B8%97%E0%B9%8C-%E0%B9%83%E0%B8%81%E0%B8%A5%E0%B9%89-%E0%B8%98%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%A8%E0%B8%B2%E0%B8%AA%E0%B8%95%E0%B8%A3%E0%B9%8C-%E0%B8%A3%E0%B8%B1%E0%B8%87%E0%B8%AA%E0%B8%B4%E0%B8%95" target="_blank">
              renthub.in.th
              </a>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
