import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function App() {
  const [showRegister, setShowRegister] = useState(false)
  const [showLogin, setShowLogin] = useState(false)
  const navigate = useNavigate()
  const [phoneError, setPhoneError] = useState('')
  const [countryCode, setCountryCode] = useState('84')
  const [emailError, setEmailError] = useState('')
  const [formData, setFormData] = useState({
    studentName: '',
    birthDate: '',
    class: '',
    studentId: '',
    parentName: '',
    phone: '',
    email: '',
    password: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const validateForm = () => {
    const { studentName, birthDate, class: studentClass, studentId, parentName, phone, email } = formData
    if (!studentName || !birthDate || !studentClass || !studentId || !parentName || !phone || !email) {
      return false
    }
    return !phoneError && !emailError
  }

  const handleRegisterSubmit = (e) => {
    e.preventDefault()
    console.log('Form Data:', formData)
    console.log('Validation result:', validateForm())
    if (validateForm()) {
      setShowRegister(false)
      navigate('/parent-dashboard')
    } else {
      alert('Vui lòng điền đầy đủ thông tin và đảm bảo không có lỗi.')
    }
  }

  const handleCountryCodeChange = (e) => {
    setCountryCode(e.target.value)
  }

  const validatePhoneNumber = (phone) => {
    const vnPhoneRegex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/
    return vnPhoneRegex.test(phone)
  }

  const handlePhoneChange = (e) => {
    const phone = e.target.value
    setFormData({ ...formData, phone: phone })

    if (!phone) {
      setPhoneError('Vui lòng nhập số điện thoại')
    } else if (!validatePhoneNumber(phone)) {
      setPhoneError('Số điện thoại không hợp lệ. Vui lòng nhập số điện thoại Việt Nam (vd: 84xxxxxxxxx hoặc 0xxxxxxxxx)')
    } else {
      setPhoneError('')
    }
  }

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[com]{3}$/
    return emailRegex.test(email)
  }

  const handleEmailChange = (e) => {
    const email = e.target.value
    setFormData({ ...formData, email: email })

    if (!email) {
      setEmailError('Vui lòng nhập email')
    } else if (!validateEmail(email)) {
      setEmailError('Email không hợp lệ. Email phải kết thúc bằng .com')
    } else {
      setEmailError('')
    }
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
          <div className="bg-white rounded-lg p-8 w-full max-w-md relative animate-fade-in max-h-[90vh] overflow-y-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Đăng ký thông tin học sinh
            </h2>
            <form className="space-y-4" onSubmit={handleRegisterSubmit}>
              {/* Thông tin học sinh */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-700">Thông tin học sinh</h3>
                <input 
                  type="text" 
                  name="studentName"
                  value={formData.studentName}
                  onChange={handleInputChange}
                  placeholder="Họ tên học sinh"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input 
                  type="date" 
                  name="birthDate"
                  placeholder="Ngày sinh"
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input 
                  type="text" 
                  name="class"
                  placeholder="Lớp"
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input 
                  type="text" 
                  name="studentId"
                  placeholder="Mã số học sinh"
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Thông tin phụ huynh */}
              <div className="space-y-4 mt-6">
                <h3 className="text-lg font-semibold text-gray-700">Thông tin phụ huynh</h3>
                <input 
                  type="text" 
                  name="parentName"
                  placeholder="Họ tên phụ huynh giám hộ"
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input 
                  type="password" 
                  name="password"
                  placeholder="Mật khẩu"
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className="relative">
                  <div className="flex">
                    <select 
                      value={countryCode} 
                      onChange={handleCountryCodeChange}
                      className="border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="84">+84 (Vietnam)</option>
                      <option value="1">+1 (USA)</option>
                      <option value="44">+44 (UK)</option>
                      {/* Thêm các mã quốc gia khác nếu cần */}
                    </select>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handlePhoneChange}
                      placeholder="Số điện thoại"
                      className={`w-full px-4 py-2 border ${phoneError ? 'border-red-500' : 'border-gray-300'} rounded-r-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    />
                  </div>
                  {phoneError && (
                    <p className="text-red-500 text-sm mt-1">{phoneError}</p>
                  )}
                  <div className="text-xs text-gray-500 mt-1">
                    * Định dạng hợp lệ:
                    <ul className="list-disc list-inside">
                      <li>Bắt đầu bằng 84 hoặc 0</li>
                      <li>Tiếp theo là 3,5,7,8,9</li>
                      <li>Tổng cộng 10 số (nếu bắt đầu bằng 0) hoặc 11 số (nếu bắt đầu bằng 84)</li>
                    </ul>
                  </div>
                </div>
                <div className="relative">
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleEmailChange}
                    placeholder="Email"
                    className={`w-full px-4 py-2 border ${emailError ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  />
                  {emailError && (
                    <p className="text-red-500 text-sm mt-1">{emailError}</p>
                  )}
                  <div className="text-xs text-gray-500 mt-1">
                    * Email phải có định dạng: example@domain.com
                  </div>
                </div>
              </div>

              <button 
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
              >
                Đăng ký
              </button>
            </form>
            <button 
              className="absolute top-2 right-2 bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 z-50"
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