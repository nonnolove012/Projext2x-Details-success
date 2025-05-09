'use client'; // สำคัญมากใน App Router ถ้าใช้ CSS ปกติ

import Image from "next/image";
import "./citypark1.css";

export default function CityParkPage() {
  return (
    <>
      <header className="jpark-header">
        <h1>CITY PARK CONDO</h1>
        <p>คอนโดใกล้ธรรมศาสตร์ รังสิต | เงียบสงบ ปลอดภัย เดินทางสะดวก</p>
      </header>

      <main className="jpark-main">
        <div className="image-row">
          <Image src="/ct1.jpg" alt="ภาพหอพัก City Park 1" width={400} height={300} />
          <Image src="/ct2.avif" alt="ภาพหอพัก City Park 2" width={400} height={300} />
        </div>

        <section>
          <h2>🏡 รายละเอียดห้องพัก</h2>
          <p>
            City Park Condo เป็นคอนโดเงียบสงบติดถนนเชียงราก 1 ใกล้มหาวิทยาลัยธรรมศาสตร์ รังสิต
            เหมาะสำหรับนักศึกษาที่ต้องการความเป็นส่วนตัวและสิ่งแวดล้อมที่น่าอยู่
            ภายในห้องประกอบด้วย เตียงขนาด 5 ฟุต ตู้เสื้อผ้า โต๊ะอ่านหนังสือ แอร์ ทีวี ตู้เย็น และเครื่องทำน้ำอุ่น
            เฟอร์นิเจอร์ครบ พร้อมเข้าอยู่ได้ทันที
          </p>
        </section>

        <section>
          <h2>💰 ราคาเช่ารายเดือน</h2>
          <ul>
            <li>ห้องธรรมดาเริ่มต้นประมาณ 5,500 - 6,500 บาท/เดือน</li>
            <li>ห้องตกแต่งใหม่หรืออยู่ใกล้ลิฟต์ ประมาณ 7,000 - 7,500 บาท/เดือน</li>
            <li>ราคานี้ไม่รวมค่าน้ำ ค่าไฟ และค่าอินเทอร์เน็ต</li>
          </ul>
        </section>

        <section>
          <h2>💪 สิ่งอำนวยความสะดวก</h2>
          <table>
            <tbody>
              <tr>
                <td>✅ ร้านซักอบรีด</td>
                <td>✅ ร้านอาหารใต้หอ</td>
              </tr>
              <tr>
                <td>✅ ลิฟต์โดยสาร</td>
                <td>✅ ที่จอดรถ</td>
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
            <li>ตั้งอยู่บนถนนเชียงราก 1 ใกล้ประตูเชียงราก 1 ของ มธ. รังสิต</li>
            <li>สามารถเดินหรือขี่จักรยานไปมหาวิทยาลัยได้ภายใน 5 นาที</li>
          </ul>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3870.1898288300704!2d100.60409147486207!3d14.06596508635949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e27fefb65f6d49%3A0x285d4ce8b21884a6!2z4Lir4Lit4Lie4Lix4LiBIENpdHkgUGFyayDguJjguKPguKPguKHguKjguLLguKrguJXguKPguYwg4Lij4Lix4LiH4Liq4Li04LiV!5e0!3m2!1sth!2sth!4v1746655890300!5m2!1sth!2sth"
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
              <a href="https://www.cityparktu.com/" target="_blank" rel="noopener noreferrer">
                cityparktu.com
              </a>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
