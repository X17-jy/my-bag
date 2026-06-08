import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { User, Edit, Save, ChevronLeft, BookOpen, Database, Award, TrendingUp, CheckCircle, Clock, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import pandasProjects from '../data/pandasProjects';

const Profile = () => {
  const [user, setUser] = useState<any>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [editing, setEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [completedPandasProjects, setCompletedPandasProjects] = useState<number[]>([]);

  useEffect(() => {
    // 获取用户信息
    const getUserInfo = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        setUser(user);
        setName(user.user_metadata?.name || '');
        setEmail(user.email || '');
        
        // 从本地存储获取完成的项目
        const saved = localStorage.getItem(`pandas_completed_${user.id}`);
        if (saved) {
          setCompletedPandasProjects(JSON.parse(saved));
        }
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

  const pandasProgress = Math.round((completedPandasProjects.length / pandasProjects.length) * 100);

  // 计算统计数据
  const stats = [
    { label: 'Pandas项目', value: `${completedPandasProjects.length}/${pandasProjects.length}`, icon: Database, color: 'text-blue-600' },
    { label: '学习天数', value: user ? Math.ceil((Date.now() - new Date(user.created_at).getTime()) / (1000 * 60 * 60 * 24)) : 0, icon: Calendar, color: 'text-green-600' },
    { label: '成就数', value: '0', icon: Award, color: 'text-yellow-600' },
    { label: '完成率', value: `${pandasProgress}%`, icon: TrendingUp, color: 'text-purple-600' },
  ];

  if (!user) {
    return <div className="container mx-auto px-4 py-16">加载中...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center space-x-2 mb-8">
          <Link to="/" className="flex items-center space-x-1 text-blue-600 hover:text-blue-800">
            <ChevronLeft className="h-5 w-5" />
            <span>返回首页</span>
          </Link>
        </div>

        {/* Profile Header */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 h-32"></div>
          <div className="px-6 pb-6 -mt-16">
            <div className="flex flex-col md:flex-row items-start md:items-end gap-6">
              <div className="w-32 h-32 bg-white rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                <User className="h-16 w-16 text-blue-600" />
              </div>
              <div className="flex-1">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{user.user_metadata?.name || user.email}</h1>
                <p className="text-gray-600">{user.email}</p>
                <p className="text-sm text-gray-500 mt-1">
                  <Calendar className="w-4 h-4 inline mr-1" />
                  加入于 {new Date(user.created_at).toLocaleDateString('zh-CN')}
                </p>
              </div>
              <button
                onClick={() => setEditing(!editing)}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
              >
                <Edit className="w-4 h-4" />
                {editing ? '取消编辑' : '编辑资料'}
              </button>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center ${stat.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <CheckCircle className="w-5 h-5 text-green-500" />
                </div>
                <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Profile Info */}
          <div className="lg:col-span-1 space-y-6">
            {/* Edit Profile Card */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <User className="w-5 h-5 text-blue-600" />
                个人资料
              </h2>

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
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  ) : (
                    <div className="p-3 border border-gray-200 rounded-lg bg-gray-50">
                      {user.user_metadata?.name || '未设置'}
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">邮箱</label>
                  <div className="p-3 border border-gray-200 rounded-lg bg-gray-50">
                    {user.email}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">学校</label>
                  <div className="p-3 border border-gray-200 rounded-lg bg-gray-50">
                    广东科学技术职业学院
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">院系</label>
                  <div className="p-3 border border-gray-200 rounded-lg bg-gray-50">
                    商学院
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">专业</label>
                  <div className="p-3 border border-gray-200 rounded-lg bg-gray-50">
                    商务数据分析与应用
                  </div>
                </div>

                {editing && (
                  <button
                    onClick={handleUpdate}
                    disabled={loading}
                    className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    <Save className="w-4 h-4" />
                    {loading ? '保存中...' : '保存'}
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Right Column - Progress */}
          <div className="lg:col-span-2 space-y-6">
            {/* Pandas Progress */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Database className="w-5 h-5 text-blue-600" />
                Pandas 实战进度
              </h2>

              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-600">总体进度</span>
                  <span className="font-bold text-blue-600">{pandasProgress}%</span>
                </div>
                <div className="w-full h-3 bg-gray-200 rounded-full">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full transition-all duration-500"
                    style={{ width: `${pandasProgress}%` }}
                  ></div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {pandasProjects.map((project) => {
                  const isCompleted = completedPandasProjects.includes(project.id);
                  return (
                    <Link
                      key={project.id}
                      to={`/pandas-projects/${project.id}`}
                      className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all"
                    >
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        isCompleted ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'
                      }`}>
                        {isCompleted ? <CheckCircle className="w-5 h-5" /> : <Clock className="w-5 h-5" />}
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-gray-900">{project.title}</div>
                        <div className="text-sm text-gray-500">{project.difficulty} · {project.duration}</div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-600" />
                快速开始
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link
                  to="/pandas-projects"
                  className="flex items-center gap-3 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg hover:from-blue-100 hover:to-indigo-100 transition-all border border-blue-200"
                >
                  <Database className="w-8 h-8 text-blue-600" />
                  <div>
                    <div className="font-semibold text-gray-900">Pandas 实战</div>
                    <div className="text-sm text-gray-600">开始项目实战</div>
                  </div>
                </Link>
                <Link
                  to="/courses"
                  className="flex items-center gap-3 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg hover:from-green-100 hover:to-emerald-100 transition-all border border-green-200"
                >
                  <BookOpen className="w-8 h-8 text-green-600" />
                  <div>
                    <div className="font-semibold text-gray-900">课程学习</div>
                    <div className="text-sm text-gray-600">继续学习课程</div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
