import React, { useState } from 'react';
import { Phone, Settings, Shield, Clock, Users, ArrowRight } from 'lucide-react';

const NetworkLanding = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const correctPassword = 'your-secret-password'; // 你可以修改這個密碼

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === correctPassword) {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('密碼錯誤');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-center mb-6">請輸入密碼查看內容</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border rounded-lg"
              placeholder="請輸入密碼"
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button 
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600"
            >
              確認
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">企業網路設備升級方案</h1>
          <p className="text-xl mb-8">專業團隊提供完整安裝設定與維護服務，讓您的企業網路運行無虞</p>
          <button className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-semibold">
            立即諮詢
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">為什麼選擇我們？</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Settings className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">專業安裝設定</h3>
              <p>由經驗豐富的工程師團隊提供專業安裝與設定服務，確保設備完美運作。</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Shield className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">安全穩定</h3>
              <p>採用企業級安全防護，確保您的網路環境安全無虞。</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Clock className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">即時維護支援</h3>
              <p>提供全天候技術支援，快速解決您的網路問題。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">限時優惠方案</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* EnGenius Fit Package */}
            <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold mb-4">EnGenius Fit 鐵三角方案</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <ArrowRight className="w-5 h-5 text-blue-500 mr-2" />
                  <span>EWS2910P-FIT 交換器</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="w-5 h-5 text-blue-500 mr-2" />
                  <span>EWS356-FIT 無線基地台</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="w-5 h-5 text-blue-500 mr-2" />
                  <span>XG60-FIT 路由器</span>
                </li>
              </ul>
              <button className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600">
                了解更多
              </button>
            </div>

            {/* EnGeniusCloud Package */}
            <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold mb-4">EnGeniusCloud 鐵三角方案</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <ArrowRight className="w-5 h-5 text-blue-500 mr-2" />
                  <span>1528P 交換器</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="w-5 h-5 text-blue-500 mr-2" />
                  <span>ECW220 無線基地台</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="w-5 h-5 text-blue-500 mr-2" />
                  <span>ESG510 路由器</span>
                </li>
              </ul>
              <button className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600">
                了解更多
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">立即預約專人服務</h2>
          <div className="max-w-lg mx-auto">
            <form className="space-y-4">
              <input
                type="text"
                placeholder="公司名稱"
                className="w-full p-3 border rounded-lg"
              />
              <input
                type="text"
                placeholder="聯絡人姓名"
                className="w-full p-3 border rounded-lg"
              />
              <input
                type="tel"
                placeholder="聯絡電話"
                className="w-full p-3 border rounded-lg"
              />
              <input
                type="email"
                placeholder="電子郵件"
                className="w-full p-3 border rounded-lg"
              />
              <textarea
                placeholder="需求說明"
                rows="4"
                className="w-full p-3 border rounded-lg"
              ></textarea>
              <button className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600">
                送出諮詢
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NetworkLanding;