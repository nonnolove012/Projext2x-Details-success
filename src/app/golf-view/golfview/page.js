'use client';

import Image from "next/image";
import "./golfview.css";

export default function GolfViewPage() {
  return (
    <>
      <header className="dorm-header">
        <h1>หอพัก Golf View ธรรมศาสตร์ รังสิต</h1>
        <p>
          หอพักบรรยากาศดี ตั้งอยู่ในทำเลเงียบสงบ ใกล้สนามกอล์ฟธรรมศาสตร์ เดินทางสะดวก มีสิ่งอำนวยความสะดวกครบครัน
          เหมาะกับนักศึกษาที่ต้องการความสงบในการอยู่อาศัย
        </p>
      </header>

      <main className="dorm-main">
        <div className="image-row">
          <Image src="/go1.webp" alt="ภาพหอพัก Golf View" width={400} height={300} />
          <Image src="/go2.webp" alt="ภาพหอพัก Golf View เพิ่มเติม" width={400} height={300} />
        </div>

        <section>
          <h2>🏡 รายละเอียดที่พัก</h2>
          <p>
            Golf View เป็นหอพักอาคารสูง 8 ชั้น ตั้งอยู่ใกล้สนามกอล์ฟและด้านหลังมหาวิทยาลัยธรรมศาสตร์ รังสิต
            มีห้องพักหลากหลายรูปแบบ พื้นที่ประมาณ 26–30 ตร.ม. ตกแต่งพร้อมอยู่ มีทั้งแบบแอร์และพัดลม
            พร้อมเฟอร์นิเจอร์พื้นฐาน เช่น เตียง ตู้เสื้อผ้า โต๊ะ เก้าอี้ และระเบียงส่วนตัว
          </p>
        </section>

        <section>
          <h2>💰 ค่าเช่ารายเดือน </h2>
          <ul>
            <li>เริ่มต้นที่ 3,500 – 6,400 บาท/เดือน (ขึ้นอยู่กับชั้นและประเภทห้อง)</li>
            <li>ค่าน้ำ 20 บาท/หน่วย, ค่าไฟ 8 บาท/หน่วย</li>
            <li>ประกัน 1 เดือน + ค่าเช่าล่วงหน้า 1 เดือน</li>
          </ul>
        </section>

        <section>
          <h2>💪 สิ่งอำนวยความสะดวก</h2>
          <table>
            <tbody>
              <tr>
                <td>✅ แอร์/พัดลม</td>
                <td>✅ เฟอร์นิเจอร์ครบ</td>
              </tr>
              <tr>
                <td>✅ ระบบคีย์การ์ด</td>
                <td>✅ รปภ. และกล้องวงจรปิด 24 ชม.</td>
              </tr>
              <tr>
                <td>✅ ลิฟต์</td>
                <td>✅ พื้นที่จอดรถ</td>
              </tr>
              <tr>
                <td>✅ ร้านซักรีด</td>
                <td>✅ ร้านค้าใต้หอพัก</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>📍 ทำเลที่ตั้ง</h2>
          <ul>
            <li>ตั้งอยู่ใกล้สนามกอล์ฟและด้านหลังธรรมศาสตร์ รังสิต</li>
            <li>บรรยากาศเงียบสงบ เหมาะแก่การพักผ่อน</li>
            <li>เดินทางไปมหาวิทยาลัยสะดวกด้วยจักรยานหรือวินมอเตอร์ไซค์</li>
          </ul>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3870.2651261216897!2d100.59534077486194!3d14.061515286363456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d7fde9a74ad9f%3A0x6076eaca5865425!2z4LiB4Lit4Lil4LmM4LifIOC4p-C4tOC4pyDguJfguLXguKLguLk!5e0!3m2!1sth!2sth!4v1746774041528!5m2!1sth!2sth"
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
              🌐 เว็บไซต์: <a href="http://www.golfview-tu.com/customize-%E0%B8%A3%E0%B8%B2%E0%B8%84%E0%B8%B2%E0%B8%AB%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B8%9E%E0%B8%B1%E0%B8%81-29532-1.html" target="_blank" rel="noopener noreferrer">golfview-tu.com</a>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
