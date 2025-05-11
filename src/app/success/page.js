import Link from 'next/link';
import './success.css'; 

export default function SuccessPage() {
  return (
    <div className="success-page">
      <div className="success-box">
        <div className="checkmark">✔</div>
        <p>เราได้รับแบบฟอร์มของคุณแล้ว<br />โปรดตรวจสอบหน้าสถานะอีกครั้ง</p>
        <div className="button-group">
          <Link href="/" className="btn-home">Homepage</Link>
          <Link href="/status" className="btn-status">ดูสถานะ</Link>
        </div>
      </div>
    </div>
  );
}
