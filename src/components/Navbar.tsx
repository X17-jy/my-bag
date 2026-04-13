import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { Menu, X, User, LogOut, Book, Code, FileText, Award, User as UserIcon } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // 检查用户登录状态
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    };
    checkUser();

    // 监听认证状态变化
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user || null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Code className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-800">Python数据分析平台</span>
          </Link>

          {/* 桌面导航 */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/courses" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center space-x-1">
              <Book className="h-5 w-5" />
              <span>课程</span>
            </Link>
            <Link to="/practice" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center space-x-1">
              <Code className="h-5 w-5" />
              <span>练习</span>
            </Link>
            <Link to="/assessments" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center space-x-1">
              <FileText className="h-5 w-5" />
              <span>测评</span>
            </Link>
            <Link to="/achievements" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center space-x-1">
              <Award className="h-5 w-5" />
              <span>成就</span>
            </Link>

            {user ? (
              <div className="flex items-center space-x-4">
                <Link to="/profile" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors">
                  <UserIcon className="h-5 w-5" />
                  <span>{user.email}</span>
                </Link>
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-1 text-gray-700 hover:text-red-600 transition-colors"
                >
                  <LogOut className="h-5 w-5" />
                  <span>退出</span>
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link to="/auth/login" className="text-gray-700 hover:text-blue-600 transition-colors">登录</Link>
                <Link to="/auth/register" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">注册</Link>
              </div>
            )}
          </div>

          {/* 移动端菜单按钮 */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* 移动端导航菜单 */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <Link to="/courses" className="text-gray-700 hover:text-blue-600 transition-colors py-2">课程</Link>
              <Link to="/practice" className="text-gray-700 hover:text-blue-600 transition-colors py-2">练习</Link>
              <Link to="/assessments" className="text-gray-700 hover:text-blue-600 transition-colors py-2">测评</Link>
              <Link to="/achievements" className="text-gray-700 hover:text-blue-600 transition-colors py-2">成就</Link>
              
              {user ? (
                <div className="flex flex-col space-y-2">
                  <Link to="/profile" className="text-gray-700 hover:text-blue-600 transition-colors py-2">个人资料</Link>
                  <button
                    onClick={handleLogout}
                    className="text-left text-gray-700 hover:text-red-600 transition-colors py-2"
                  >
                    退出登录
                  </button>
                </div>
              ) : (
                <div className="flex flex-col space-y-2">
                  <Link to="/auth/login" className="text-gray-700 hover:text-blue-600 transition-colors py-2">登录</Link>
                  <Link to="/auth/register" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors text-center">注册</Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;