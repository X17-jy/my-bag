import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { Book, Code, FileText, Award, ChevronRight, BarChart2, Database, PieChart, LineChart } from 'lucide-react';

const Home = () => {
  const [user, setUser] = useState<any>(null);
  const [courses, setCourses] = useState<any[]>([]);

  useEffect(() => {
    // 检查用户登录状态
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    };
    checkUser();

    // 模拟课程数据
    setCourses([
      {
        id: 1,
        title: 'Python基础编程',
        description: '掌握Python编程语言的基本语法和数据结构',
        category: '基础',
        difficulty: '初级',
        duration: '4周',
        image_url: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Python%20programming%20basics%20course%20thumbnail&image_size=landscape_16_9'
      },
      {
        id: 2,
        title: '数据分析与可视化',
        description: '使用Python进行数据清洗、分析和可视化',
        category: '进阶',
        difficulty: '中级',
        duration: '6周',
        image_url: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Data%20analysis%20and%20visualization%20course&image_size=landscape_16_9'
      },
      {
        id: 3,
        title: '商务数据分析实战',
        description: '应用Python解决实际商务数据分析问题',
        category: '高级',
        difficulty: '高级',
        duration: '8周',
        image_url: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Business%20data%20analysis%20practical%20course&image_size=landscape_16_9'
      }
    ]);
  }, []);

  const categories = [
    {
      id: 1,
      name: '数据可视化',
      icon: <BarChart2 className="h-10 w-10 text-blue-600" />,
      courses: 12
    },
    {
      id: 2,
      name: '统计分析',
      icon: <PieChart className="h-10 w-10 text-green-600" />,
      courses: 8
    },
    {
      id: 3,
      name: '机器学习',
      icon: <LineChart className="h-10 w-10 text-amber-600" />,
      courses: 6
    },
    {
      id: 4,
      name: '数据处理',
      icon: <Database className="h-10 w-10 text-purple-600" />,
      courses: 10
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                掌握Python数据分析技能
              </h1>
              <p className="text-xl mb-8">
                专为商务数据分析与应用专业学生设计的在线教育平台，提供系统化的课程体系和实践机会
              </p>
              <div className="flex space-x-4">
                <Link to="/courses" className="bg-white text-blue-700 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors">
                  浏览课程
                </Link>
                <Link to="/auth/register" className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-blue-700 transition-colors">
                  立即注册
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-blue-800 font-bold text-xl mb-4">平台特色</h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <Book className="h-5 w-5 text-blue-600" />
                    </div>
                    <span>完整的课程体系</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <Code className="h-5 w-5 text-blue-600" />
                    </div>
                    <span>互动式学习模块</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <FileText className="h-5 w-5 text-blue-600" />
                    </div>
                    <span>学、练习、测评一体化</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <Award className="h-5 w-5 text-blue-600" />
                    </div>
                    <span>成就激励系统</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">课程分类</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category) => (
              <div key={category.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="mb-4">{category.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                <p className="text-gray-600 mb-4">{category.courses} 门课程</p>
                <Link to="/courses" className="inline-flex items-center text-blue-600 hover:text-blue-800">
                  浏览课程 <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">特色课程</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img src={course.image_url} alt={course.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">{course.category}</span>
                    <span className="text-gray-600 text-sm">{course.difficulty}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 text-sm">{course.duration}</span>
                    <Link to={`/courses/${course.id}`} className="text-blue-600 hover:text-blue-800 font-semibold">
                      查看详情
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/courses" className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors">
              查看全部课程 <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* User Dashboard */}
      {user && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">个人学习仪表盘</h2>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                <div>
                  <h3 className="text-2xl font-semibold">欢迎回来，{user.email}</h3>
                  <p className="text-gray-600">继续你的学习之旅</p>
                </div>
                <Link to="/profile" className="mt-4 md:mt-0 bg-blue-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-700 transition-colors">
                  查看完整资料
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="text-lg font-semibold mb-2">已学课程</h4>
                  <p className="text-3xl font-bold text-blue-600">2</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="text-lg font-semibold mb-2">完成练习</h4>
                  <p className="text-3xl font-bold text-green-600">15</p>
                </div>
                <div className="bg-amber-50 p-4 rounded-lg">
                  <h4 className="text-lg font-semibold mb-2">获得徽章</h4>
                  <p className="text-3xl font-bold text-amber-600">5</p>
                </div>
              </div>
              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4">推荐课程</h4>
                <div className="space-y-4">
                  {courses.slice(0, 2).map((course) => (
                    <div key={course.id} className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                      <img src={course.image_url} alt={course.title} className="w-20 h-20 object-cover rounded-md mr-4" />
                      <div className="flex-grow">
                        <h5 className="font-semibold">{course.title}</h5>
                        <p className="text-sm text-gray-600">{course.description}</p>
                      </div>
                      <Link to={`/courses/${course.id}`} className="text-blue-600 hover:text-blue-800 font-semibold">
                        开始学习
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Home;