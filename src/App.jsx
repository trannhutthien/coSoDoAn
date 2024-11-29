import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function App() {
  const [showRegister, setShowRegister] = useState(false)
  const [showLogin, setShowLogin] = useState(false)
  const navigate = useNavigate()

  const handleRegisterSubmit = (e) => {
    e.preventDefault()
    // Xử lý logic đăng ký ở đây
    // Sau khi đăng ký thành công:
    setShowRegister(false)
    navigate('/parent-dashboard')
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Trang chủ chính */}
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">
          Chào mừng đến với website quản lý thực đơn và định lượng trong cơ sở giáo dục 
        </h1>
        <p className="text-2xl font-bold text-gray-800 mb-8">
          Vì sức khỏe trẻ em là tương lai của thế giới
        </p>
        <div className="space-x-4">
          <button 
            onClick={() => setShowRegister(true)}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
          >
            Đăng ký ngay
          </button>
          <button 
            onClick={() => setShowLogin(true)}
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
          >
            Đăng nhập
          </button>
        </div>
      </div>

      {/* Form đăng ký với overlay */}
      {showRegister && (
        <div className="fixed inset-0 bg-overlay flex items-center justify-center">
          <div className="bg-white rounded-lg p-8 w-full max-w-md relative animate-fade-in">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Đăng ký thông tin học sinh
            </h2>
            <form className="space-y-4" onSubmit={handleRegisterSubmit}>
              {/* Thông tin học sinh */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-700">Thông tin học sinh</h3>
                <input 
                  type="text" 
                  placeholder="Họ tên học sinh"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input 
                  type="number" 
                  placeholder="Năm sinh"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input 
                  type="text" 
                  placeholder="Lớp"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input 
                  type="text" 
                  placeholder="Mã số học sinh"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Thông tin phụ huynh */}
              <div className="space-y-4 mt-6">
                <h3 className="text-lg font-semibold text-gray-700">Thông tin phụ huynh</h3>
                <input 
                  type="text" 
                  placeholder="Họ tên phụ huynh giám hộ"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input 
                  type="tel" 
                  placeholder="Số điện thoại"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input 
                  type="email" 
                  placeholder="Email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <button 
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
              >
                Đăng ký
              </button>
            </form>
            <button 
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              onClick={() => setShowRegister(false)}
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Form đăng nhập với overlay */}
      {showLogin && (
        <div className="fixed inset-0 bg-overlay flex items-center justify-center">
          <div className="bg-white rounded-lg p-8 w-full max-w-md relative animate-fade-in">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Đăng nhập
            </h2>
            <form className="space-y-4">
              <input 
                type="text" 
                placeholder="Mã số định danh"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input 
                type="email" 
                placeholder="Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input 
                type="password" 
                placeholder="Mật khẩu"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button 
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
              >
                Đăng nhập
              </button>
            </form>
            <button 
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              onClick={() => setShowLogin(false)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App