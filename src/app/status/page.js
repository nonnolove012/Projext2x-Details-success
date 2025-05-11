"use client"; // ต้องอยู่บรรทัดแรกสุด

import Link from "next/link";
import "./status.css";

export default function StatusPage() {
  const registeredDorm =
    typeof window !== "undefined"
      ? localStorage.getItem("dormName") || "ไม่พบข้อมูล"
      : "กำลังโหลด...";

  return (
    <div className="status-page">
      <div className="status-box">
        <h2>สถานะการลงทะเบียน</h2>
        <p><strong>หอที่คุณลงทะเบียน:</strong> {registeredDorm}</p>
        <p className="success-text">✅ ลงทะเบียนเรียบร้อยแล้ว</p>
        <div className="button-group">
          <Link href="/" className="btn-home">กลับหน้าหลัก</Link>
        </div>
      </div>
    </div>
  );
}
