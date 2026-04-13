import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { User, Edit, Save, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Profile = () => {
  const [user, setUser] = useState<any>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [editing, setEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    // 获取用户信息
    const getUserInfo = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        setUser(user);
        setName(user.user_metadata?.name || '');
        setEmail(user.email || '');
      }
    };
    getUserInfo();
  }, []);

  const handleUpdate = async () => {
    setLoading(true);
    setError('');

    try {
      const { error } = await supabase.auth.updateUser({
        data: {
          name
        }
      });

      if (error) {
        setError(error.message);
      } else {
        setEditing(false);
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (!user) {
    return <div className="container mx-auto px-4 py-16">加载中...</div>;
  }

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center space-x-2 mb-8">
          <Link to="/" className="flex items-center space-x-1 text-blue-600 hover:text-blue-800">
            <ChevronLeft className="h-5 w-5" />
            <span>返回首页</span>
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="text-center mb-8">
            <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <User className="h-12 w-12 text-blue-600" />
            </div>
            <h1 className="text-2xl font-bold">{user.user_metadata?.name || user.email}</h1>
            <p className="text-gray-600">{user.email}</p>
          </div>

          {error && (
            <div className="bg-red-100 text-red-700 p-3 rounded-md mb-6">
              {error}
            </div>
          )}

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">姓名</label>
              {editing ? (
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              ) : (
                <div className="p-3 border border-gray-200 rounded-md">
                  {user.user_metadata?.name || '未设置'}
                </div>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">邮箱</label>
              <div className="p-3 border border-gray-200 rounded-md">
                {user.email}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">注册时间</label>
              <div className="p-3 border border-gray-200 rounded-md">
                {new Date(user.created_at).toLocaleDateString()}
              </div>
            </div>

            <div className="flex space-x-4">
              {editing ? (
                <>
                  <button
                    onClick={handleUpdate}
                    disabled={loading}
                    className="px-6 py-2 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                  >
                    {loading ? '保存中...' : '保存'}
                  </button>
                  <button
                    onClick={() => setEditing(false)}
                    className="px-6 py-2 border border-gray-300 rounded-md font-semibold hover:bg-gray-50 transition-colors"
                  >
                    取消
                  </button>
                </>
              ) : (
                <button
                  onClick={() => setEditing(true)}
                  className="px-6 py-2 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition-colors flex items-center space-x-2"
                >
                  <Edit className="h-4 w-4" />
                  <span>编辑资料</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;