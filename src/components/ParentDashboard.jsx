import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

// Đăng ký các thành phần của Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

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
              activeTab === 'thucDon'
                ? 'bg-blue-500 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
            onClick={() => setActiveTab('thucDon')}
          >
            Thực đơn
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
                  <div>
                    <label className="block text-sm font-medium text-gray-600">Cân nặng</label>
                    <p className="mt-1 text-gray-800">45 kg</p>
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

              {/* Bảng điểm */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Bảng điểm học tập</h3>
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
                    {/* Có thể thêm các môn học khác ở đây */}
                  </tbody>
                </table>
              </div>

              {/* Biểu đồ dinh dưỡng */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Biểu đồ dinh dưỡng cần bổ sung</h3>
                <Bar
                  data={{
                    labels: ['Protein', 'Carbs', 'Fat', 'Vitamins', 'Minerals'],
                    datasets: [
                      {
                        label: 'Cần bổ sung (g)',
                        data: [20, 50, 10, 5, 8], // Dữ liệu mẫu
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        borderColor: 'rgba(75, 192, 192, 1)',
                        borderWidth: 1,
                      },
                    ],
                  }}
                  options={{
                    scales: {
                      y: {
                        beginAtZero: true,
                      },
                    },
                  }}
                />
              </div>
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

          {activeTab === 'thucDon' && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-800">Thực đơn tuần</h2>
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border p-2">Thời gian</th>
                    <th className="border p-2">Thứ 2</th>
                    <th className="border p-2">Thứ 3</th>
                    <th className="border p-2">Thứ 4</th>
                    <th className="border p-2">Thứ 5</th>
                    <th className="border p-2">Thứ 6</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-2 font-semibold">Bữa sáng</td>
                    <td className="border p-2">
                      <div>Phở gà</div>
                      <div className="text-sm text-gray-500">Rau: xà lách, giá đỗ</div>
                    </td>
                    <td className="border p-2">
                      <div>Bún bò</div>
                      <div className="text-sm text-gray-500">Rau: rau muống, giá đỗ</div>
                    </td>
                    <td className="border p-2">
                      <div>Bánh mì trứng</div>
                      <div className="text-sm text-gray-500">Rau: dưa leo, cà chua</div>
                    </td>
                    <td className="border p-2">
                      <div>Mì xào hải sản</div>
                      <div className="text-sm text-gray-500">Rau: cải thìa, cà rốt</div>
                    </td>
                    <td className="border p-2">
                      <div>Cháo gà</div>
                      <div className="text-sm text-gray-500">Rau: hành lá, rau mùi</div>
                    </td>
                  </tr>
                  <tr>
                    <td className="border p-2 font-semibold">Bữa trưa</td>
                    <td className="border p-2">
                      <div>Cơm</div>
                      <div>Thịt kho tàu</div>
                      <div>Canh cải</div>
                      <div className="text-sm text-gray-500">Tráng miệng: chuối</div>
                    </td>
                    <td className="border p-2">
                      <div>Cơm</div>
                      <div>Cá kho tộ</div>
                      <div>Canh bí đỏ</div>
                      <div className="text-sm text-gray-500">Tráng miệng: cam</div>
                    </td>
                    <td className="border p-2">
                      <div>Cơm</div>
                      <div>Gà rán</div>
                      <div>Canh rau dền</div>
                      <div className="text-sm text-gray-500">Tráng miệng: ổi</div>
                    </td>
                    <td className="border p-2">
                      <div>Cơm</div>
                      <div>Sườn xào chua ngọt</div>
                      <div>Canh chua</div>
                      <div className="text-sm text-gray-500">Tráng miệng: dưa hấu</div>
                    </td>
                    <td className="border p-2">
                      <div>Cơm</div>
                      <div>Đậu sốt cà chua</div>
                      <div>Canh rau muống</div>
                      <div className="text-sm text-gray-500">Tráng miệng: táo</div>
                    </td>
                  </tr>
                  <tr>
                    <td className="border p-2 font-semibold">Bữa xế</td>
                    <td className="border p-2">Sữa chua + bánh quy</td>
                    <td className="border p-2">Sinh tố bơ</td>
                    <td className="border p-2">Sữa tươi + bánh mì</td>
                    <td className="border p-2">Yaourt + hoa quả</td>
                    <td className="border p-2">Nước ép cam</td>
                  </tr>
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