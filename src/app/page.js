'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import '@/app/globals.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [sidebarActive, setSidebarActive] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [interestOpen, setInterestOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [selectedZone, setSelectedZone] = useState('');
  const [selectedDorm, setSelectedDorm] = useState('');
  const router = useRouter();

  const toggleSidebar = () => setSidebarActive(!sidebarActive);
  const closeSidebar = () => setSidebarActive(false);

  const openRegister = () => {
    setLoginOpen(false);
    setRegisterOpen(true);
  };
  const closeRegister = () => setRegisterOpen(false);
  const openLogin = () => {
    setRegisterOpen(false);
    setLoginOpen(true);
  };
  const closeLogin = () => setLoginOpen(false);

  const openInterestForm = () => setInterestOpen(true);
  const closeInterestForm = () => setInterestOpen(false);

  const showSuccess = (msg) => {
    setSuccessMessage(msg);
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  const submitRegister = (e) => {
    e.preventDefault();
    showSuccess('สมัครสมาชิกสำเร็จ!');
    closeRegister();
  };

  const submitLogin = (e) => {
    e.preventDefault();
    showSuccess('เข้าสู่ระบบสำเร็จ!');
    closeLogin();
  };

  const submitInterest = (e) => {
    e.preventDefault();
    showSuccess('บันทึกความสนใจเรียบร้อย!');
    closeInterestForm();
    router.push('/success'); // ไปหน้าสรุปผล
  };

  const isLoggedIn = !loginOpen && !registerOpen;

  const dormOptions = {
    A: ['Jpark Residences', 'The Campus', 'Brownie', 'Fahdome Condo'],
    B: ['City Park', 'Inter Park', 'Mpdiz launch', 'ทรงพิเชษฐ์', 'บันยันทรี', 'U Plus', 'U House'],
    C: ['Skyview', 'Vanarin', 'Common TU', 'Terra', 'Tudio', 'Vanda TU'],
    D: ['Kave Ava', 'Kave TU'],
    E: ['ยูบ้านสุขสบาย', 'Haus', 'Dcondo1', 'Dcondo2', 'Dcondo3', 'Dcondo4', 'Dcondo Shine', '18/22'],
    F: ['Sunta', 'Hoso Place', 'The charn', 'Loft Loft'],
    G: ['TU Dome', 'Keystone', 'Accompark', 'VKP Mansion', 'Fenix Apartment'],
    H: ['Golf View'],
  };

  return (
    <>
      {successMessage && (
        <div className="success-toast">{successMessage}</div>
      )}

      <header className="navbar">
        <div className="logo">PROJECT 2X</div>
        <nav>
          <i id="userIcon" className="bi bi-person-circle" onClick={toggleSidebar}></i>
        </nav>
      </header>

      <div id="sidebar" className={`sidebar${sidebarActive ? ' active' : ''}`}>
        <button onClick={closeSidebar} className="close-btn">×</button>
        <button className="action-btn" onClick={openLogin}>เข้าสู่ระบบ</button>
        <button className="action-btn" onClick={openRegister}>สมัครสมาชิก</button>
      </div>

      <h1>แนะนำหอพักใกล้ ม.ธรรมศาสตร์ รังสิต</h1>

      <div className="maps">
        <Image src="/map.jpg" alt="แผนที่โซนหอพัก" width={600} height={400} />
      </div>

      {isLoggedIn && (
        <div className="interest-button-container">
          <button className="interest-button" onClick={openInterestForm}>
            ลงทะเบียนความสนใจหอพัก
          </button>
        </div>
      )}

      <section className="dorm-grid">
        {[{ href: '/jpark', src: 'jpark.png', name: 'J-PARK', zone: 'A' },
          { href: '/1', src: '1.png', name: 'เชียงราก 1', zone: 'B' },
          { href: '/2', src: '2.png', name: 'เชียงราก 2', zone: 'C' },
          { href: '/kave', src: 'kave.png', name: 'Kave', zone: 'D' },
          { href: '/dcondo', src: 'Dcon.png', name: 'Dcondo', zone: 'E' },
          { href: '/sunta', src: 'Sunta.png', name: 'Sunta', zone: 'F' },
          { href: '/tu-dome', src: 'Tu dome.png', name: 'TU Dome', zone: 'G' },
          { href: '/golf-view', src: 'golf view.png', name: 'Golf View', zone: 'H' },
        ].map(({ href, src, name, zone }) => (
          <Link key={name} href={href} className="dorm-card">
            <Image src={`/${src}`} alt={name} width={300} height={140} />
            <h3>{name}</h3>
            <p>โซน {zone}</p>
          </Link>
        ))}
      </section>

      {/* Modal: สมัครสมาชิก */}
      {registerOpen && (
        <div className="modal active">
          <div className="modal-content">
            <span className="close" onClick={closeRegister}>×</span>
            <h2>สมัครสมาชิก</h2>
            <form onSubmit={submitRegister}>
              <input type="text" placeholder="Username" required />
              <input type="password" placeholder="Password" required />
              <input type="text" placeholder="ชื่อ-นามสกุล" required />
              <input type="email" placeholder="อีเมล์" required />
              <input type="tel" placeholder="เบอร์โทร" required />
              <textarea placeholder="ที่อยู่" required></textarea>
              <div className="buttons">
                <button type="submit" className="btn-register">สมัครสมาชิก</button>
                <button type="button" className="btn-cancel" onClick={closeRegister}>ยกเลิก</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal: Login */}
      {loginOpen && (
        <div className="modal active">
          <div className="modal-content">
            <span className="close" onClick={closeLogin}>×</span>
            <h2>ลงชื่อเข้าใช้งาน</h2>
            <form onSubmit={submitLogin}>
              <input type="text" placeholder="Username" required />
              <input type="password" placeholder="Password" required />
              <div className="buttons">
                <button type="submit" className="btn-login">เข้าสู่ระบบ</button>
              </div>
              <div className="login-bottom">
                ยังไม่ได้เป็นสมาชิก? <a href="#" onClick={openRegister}>ลงทะเบียน</a>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal: ความสนใจ */}
      {interestOpen && (
        <div className="modal active">
          <div className="modal-content interest-form">
            <span className="close" onClick={closeInterestForm}>×</span>
            <h2 className="modal-title">ลงทะเบียนความสนใจหอพัก</h2>
            <form onSubmit={submitInterest} className="form-layout">
              <div className="form-group">
                <label htmlFor="zone">เลือกโซน:</label>
                <select
                  id="zone"
                  className="form-select"
                  value={selectedZone}
                  onChange={(e) => {
                    setSelectedZone(e.target.value);
                    setSelectedDorm('');
                  }}
                  required
                >
                  <option value="">กรุณาเลือกโซน</option>
                  {Object.keys(dormOptions).map((zone) => (
                    <option key={zone} value={zone}>โซน {zone}</option>
                  ))}
                </select>
              </div>

              {selectedZone && (
                <div className="form-group">
                  <label htmlFor="dorm">เลือกหอพัก:</label>
                  <select
                    id="dorm"
                    className="form-select"
                    value={selectedDorm}
                    onChange={(e) => setSelectedDorm(e.target.value)}
                    required
                  >
                    <option value="">กรุณาเลือกหอพัก</option>
                    {dormOptions[selectedZone].map((dorm) => (
                      <option key={dorm} value={dorm}>{dorm}</option>
                    ))}
                  </select>
                </div>
              )}

              <div className="buttons">
                <button type="submit" className="btn-register">ส่งข้อมูล</button>
                <button type="button" className="btn-cancel" onClick={closeInterestForm}>ยกเลิก</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
