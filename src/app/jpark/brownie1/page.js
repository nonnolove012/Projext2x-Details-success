import Image from "next/image";
import "./brownie1.css"; // ใช้ไฟล์ CSS เดิมได้หากยังใช้สไตล์เดียวกัน

export default function BrowniePage() {
  return (
    <>
      <header className="jpark-header">
        <h1>BROWNIE RESIDENCE</h1>
        <p>หอพักสไตล์มินิมอล ใกล้ มธ. รังสิต | เงียบสงบ เดินทางสะดวก</p>
      </header>

      <main className="jpark-main">
        <div className="image-row">
          <Image src="/bn1.jpg" alt="ภาพหอพัก Brownie Residence 1" width={400} height={300} />
          <Image src="/bn2.jpg" alt="ภาพหอพัก Brownie Residence 2" width={400} height={300} />
        </div>

        <section>
          <h2>🏡 รายละเอียดห้องพัก</h2>
          <p>
            Brownie Residence เป็นหอพักที่ตกแต่งในสไตล์มินิมอล เรียบง่าย สบายตา เหมาะสำหรับนักศึกษา
            ภายในห้องมีเฟอร์นิเจอร์ครบ เช่น เตียง 5 ฟุต โต๊ะอ่านหนังสือ เก้าอี้ ตู้เสื้อผ้า ตู้เย็น แอร์ ทีวี
            ห้องน้ำในตัวพร้อมเครื่องทำน้ำอุ่น และระเบียงส่วนตัว
          </p>
        </section>

        <section>
          <h2>💰 ราคาเช่ารายเดือน</h2>
          <ul>
            <li>เริ่มต้นที่ประมาณ 6,000 บาท/เดือน สำหรับห้องปกติ</li>
            <li>ห้องมุมหรือวิวดีเริ่มต้นที่ 6,500 - 7,500 บาท/เดือน</li>
            <li>ราคานี้รวมค่าส่วนกลางแล้ว แต่ไม่รวมค่าน้ำค่าไฟ</li>
          </ul>
        </section>

        <section>
          <h2>💪 สิ่งอำนวยความสะดวก</h2>
          <table>
            <tbody>
              <tr>
                <td>✅ เครื่องซักผ้าหยอดเหรียญ</td>
                <td>✅ ตู้กดน้ำ</td>
              </tr>
              <tr>
                <td>✅ พื้นที่ส่วนกลางอ่านหนังสือ</td>
                <td>✅ ระบบคีย์การ์ด + กล้องวงจรปิด</td>
              </tr>
              <tr>
                <td>✅ ลานจอดรถ</td>
                <td>✅ เจ้าหน้าที่ดูแลตลอดวัน</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>📍 ทำเลที่ตั้ง</h2>
          <ul>
            <li>ตั้งอยู่ในซอยเชียงราก 1 ใกล้ มธ. รังสิต เดินประมาณ 5 นาทีถึงมหาวิทยาลัย</li>
            <li>ใกล้ 7-11 ร้านอาหาร และคาเฟ่หลายแห่ง</li>
          </ul>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3870.190478715534!2d100.59428147486202!3d14.065926686359463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e27f9b990edd2b%3A0x46a56d96a193e58d!2z4Lir4Lit4Lia4Lij4Liy4Lin4LiZ4Li14LmIIOC4mOC4o-C4o-C4oeC4qOC4suC4quC4leC4o-C5jCDguKPguLHguIfguKrguLTguJUgQnJvd25pZSBUVQ!5e0!3m2!1sth!2sth!4v1746589685870!5m2!1sth!2sth"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>

        <section>
          <h2>📞 ติดต่อเพิ่มเติม</h2>
          <ul className="contact-icons">
            <li>
              <i className="fas fa-globe"></i> เว็บไซต์: <a href="https://brownietu.com/" target="_blank">brownietu.com</a>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
