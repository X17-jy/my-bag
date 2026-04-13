import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { User, Book, Code, FileText, Award, ChevronLeft } from 'lucide-react';

const Admin = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [courses, setCourses] = useState<any[]>([]);

  useEffect(() => {
    // 模拟用户数据
    setUsers([
      {
        id: 1,
        name: '张三',
        email: 'zhangsan@example.com',
        role: 'student',
        registered: '2026-03-15'
      },
      {
        id: 2,
        name: '李四',
        email: 'lisi@example.com',
        role: 'student',
        registered: '2026-03-20'
      },
      {
        id: 3,
        name: '王五',
        email: 'wangwu@example.com',
        role: 'admin',
        registered: '2026-03-10'
      }
    ]);

    // 模拟课程数据
    setCourses([
      {
        id: 1,
        title: 'Python基础编程',
        category: '基础',
        difficulty: '初级',
        students: 1200
      },
      {
        id: 2,
        title: '数据分析与可视化',
        category: '进阶',
        difficulty: '中级',
        students: 800
      },
      {
        id: 3,
        title: '商务数据分析实战',
        category: '高级',
        difficulty: '高级',
        students: 500
      }
    ]);
  }, []);

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center space-x-2 mb-8">
          <Link to="/" className="flex items-center space-x-1 text-blue-600 hover:text-blue-800">
            <ChevronLeft className="h-5 w-5" />
            <span>返回首页</span>
          </Link>
        </div>

        <h1 className="text-3xl font-bold mb-8">管理后台</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <User className="h-8 w-8 text-blue-600" />
              </div>
              <h2 className="text-xl font-semibold">用户管理</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2">ID</th>
                    <th className="text-left py-2">姓名</th>
                    <th className="text-left py-2">邮箱</th>
                    <th className="text-left py-2">角色</th>
                    <th className="text-left py-2">注册日期</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.id} className="border-b">
                      <td className="py-2">{user.id}</td>
                      <td className="py-2">{user.name}</td>
                      <td className="py-2">{user.email}</td>
                      <td className="py-2">
                        <span className={`text-sm px-2 py-1 rounded-full ${user.role === 'admin' ? 'bg-red-100 text-red-800' : 'bg-blue-100 text-blue-800'}`}>
                          {user.role === 'admin' ? '管理员' : '学生'}
                        </span>
                      </td>
                      <td className="py-2">{user.registered}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-green-100 p-3 rounded-full">
                <Book className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="text-xl font-semibold">课程管理</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2">ID</th>
                    <th className="text-left py-2">课程名称</th>
                    <th className="text-left py-2">分类</th>
                    <th className="text-left py-2">难度</th>
                    <th className="text-left py-2">学生数</th>
                  </tr>
                </thead>
                <tbody>
                  {courses.map((course) => (
                    <tr key={course.id} className="border-b">
                      <td className="py-2">{course.id}</td>
                      <td className="py-2">{course.title}</td>
                      <td className="py-2">{course.category}</td>
                      <td className="py-2">{course.difficulty}</td>
                      <td className="py-2">{course.students}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-amber-100 p-3 rounded-full">
                <Code className="h-8 w-8 text-amber-600" />
              </div>
              <h2 className="text-xl font-semibold">练习管理</h2>
            </div>
            <p className="text-gray-600 mb-4">管理编程练习和数据分析项目</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-700 transition-colors">
              查看练习
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-purple-100 p-3 rounded-full">
                <FileText className="h-8 w-8 text-purple-600" />
              </div>
              <h2 className="text-xl font-semibold">测评管理</h2>
            </div>
            <p className="text-gray-600 mb-4">管理课程测评和考试</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-700 transition-colors">
              查看测评
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-red-100 p-3 rounded-full">
                <Award className="h-8 w-8 text-red-600" />
              </div>
              <h2 className="text-xl font-semibold">成就管理</h2>
            </div>
            <p className="text-gray-600 mb-4">管理徽章和证书</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-700 transition-colors">
              查看成就
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;