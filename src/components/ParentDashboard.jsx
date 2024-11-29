import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function ParentDashboard() {
  const [activeTab, setActiveTab] = useState('thongTin')
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false)
  const navigate = useNavigate()

  const handleLogout = () => {
    // Xử lý đăng xuất ở đây
    navigate('/')
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-800">
              Trang Phụ Huynh
            </h1>
            <button 
              className="text-red-500 hover:text-red-700 font-semibold"
              onClick={() => setShowLogoutConfirm(true)}
            >
              Đăng xuất
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Navigation Tabs */}
        <div className="flex space-x-4 mb-6">
          <button
            className={`px-4 py-2 rounded-lg font-semibold ${
              activeTab === 'thongTin'
                ? 'bg-blue-500 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
            onClick={() => setActiveTab('thongTin')}
          >
            Thông tin học sinh
          </button>
          <button
            className={`px-4 py-2 rounded-lg font-semibold ${
              activeTab === 'diemSo'
                ? 'bg-blue-500 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
            onClick={() => setActiveTab('diemSo')}
          >
            Điểm số
          </button>
          <button
            className={`px-4 py-2 rounded-lg font-semibold ${
              activeTab === 'thoiKhoaBieu'
                ? 'bg-blue-500 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
            onClick={() => setActiveTab('thoiKhoaBieu')}
          >
            Thời khóa biểu
          </button>
          <button
            className={`px-4 py-2 rounded-lg font-semibold ${
              activeTab === 'thongBao'
                ? 'bg-blue-500 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
            onClick={() => setActiveTab('thongBao')}
          >
            Thông báo
          </button>
        </div>

        {/* Content Area */}
        <div className="bg-white rounded-lg shadow p-6">
          {activeTab === 'thongTin' && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-800">Thông tin học sinh</h2>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-600">Họ tên học sinh</label>
                    <p className="mt-1 text-gray-800">Nguyễn Văn A</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600">Năm sinh</label>
                    <p className="mt-1 text-gray-800">2010</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600">Lớp</label>
                    <p className="mt-1 text-gray-800">7A1</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-600">Mã số học sinh</label>
                    <p className="mt-1 text-gray-800">HS2024001</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600">Giáo viên chủ nhiệm</label>
                    <p className="mt-1 text-gray-800">Cô Nguyễn Thị B</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600">Niên khóa</label>
                    <p className="mt-1 text-gray-800">2023-2024</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'diemSo' && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-800">Bảng điểm</h2>
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border p-2 text-left">Môn học</th>
                    <th className="border p-2 text-center">Điểm miệng</th>
                    <th className="border p-2 text-center">Điểm 15p</th>
                    <th className="border p-2 text-center">Điểm 1 tiết</th>
                    <th className="border p-2 text-center">Điểm cuối kỳ</th>
                    <th className="border p-2 text-center">Điểm TB</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-2">Toán</td>
                    <td className="border p-2 text-center">8.5</td>
                    <td className="border p-2 text-center">9.0</td>
                    <td className="border p-2 text-center">8.0</td>
                    <td className="border p-2 text-center">8.5</td>
                    <td className="border p-2 text-center font-semibold">8.5</td>
                  </tr>
                  {/* Thêm các môn học khác tương tự */}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'thoiKhoaBieu' && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-800">Thời khóa biểu</h2>
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border p-2">Tiết</th>
                    <th className="border p-2">Thứ 2</th>
                    <th className="border p-2">Thứ 3</th>
                    <th className="border p-2">Thứ 4</th>
                    <th className="border p-2">Thứ 5</th>
                    <th className="border p-2">Thứ 6</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-2 font-semibold">1</td>
                    <td className="border p-2">Toán</td>
                    <td className="border p-2">Văn</td>
                    <td className="border p-2">Anh</td>
                    <td className="border p-2">Lý</td>
                    <td className="border p-2">Hóa</td>
                  </tr>
                  {/* Thêm các tiết học khác tương tự */}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'thongBao' && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-800">Thông báo</h2>
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <h3 className="font-semibold text-gray-800">Họp phụ huynh giữa kỳ</h3>
                    <span className="text-sm text-gray-500">20/03/2024</span>
                  </div>
                  <p className="mt-2 text-gray-600">
                    Kính mời quý phụ huynh tham dự buổi họp phụ huynh giữa kỳ II...
                  </p>
                </div>
                {/* Thêm các thông báo khác tương tự */}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Modal xác nhận đăng xuất */}
      {showLogoutConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-sm animate-fade-in">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Xác nhận đăng xuất
            </h3>
            <p className="text-gray-600 mb-6">
              Bạn có chắc chắn muốn đăng xuất khỏi hệ thống?
            </p>
            <div className="flex space-x-4">
              <button
                onClick={handleLogout}
                className="flex-1 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
              >
                Đăng xuất
              </button>
              <button
                onClick={() => setShowLogoutConfirm(false)}
                className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-lg transition duration-300"
              >
                Quay lại
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ParentDashboard