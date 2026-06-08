import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { Book, Code, FileText, Award, ChevronRight, BarChart2, Database, PieChart, LineChart, TrendingUp, CheckCircle, Clock } from 'lucide-react';
import pandasProjects from '../data/pandasProjects';

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
                <h3 className="text-blue-800 font-bold text-xl mb-4">🛠️ 平台特色</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                      <Book className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">完整的课程体系</h4>
                      <p className="text-sm text-gray-600">涵盖Python基础、数据分析、可视化、机器学习等核心技能</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-green-100 p-2 rounded-lg flex-shrink-0">
                      <Code className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">浏览器在线编程</h4>
                      <p className="text-sm text-gray-600">无需安装任何软件，随时随地编写和运行Python代码</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-purple-100 p-2 rounded-lg flex-shrink-0">
                      <FileText className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">学-练-测一体化</h4>
                      <p className="text-sm text-gray-600">理论学习 + 动手实践 + 在线测评，全方位巩固知识</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-amber-100 p-2 rounded-lg flex-shrink-0">
                      <Award className="h-5 w-5 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">成就激励系统</h4>
                      <p className="text-sm text-gray-600">徽章、证书、排行榜，激发学习动力</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-red-100 p-2 rounded-lg flex-shrink-0">
                      <TrendingUp className="h-5 w-5 text-red-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">实战项目驱动</h4>
                      <p className="text-sm text-gray-600">10个精选Pandas实战项目，从入门到高级</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Developer */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12 shadow-lg">
              <h2 className="text-2xl font-bold mb-6 text-center text-gray-900">👋 关于我</h2>
              <div className="bg-white rounded-xl p-6 md:p-8 shadow-md">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-5xl text-white font-bold">X</span>
                    </div>
                  </div>
                  <div className="flex-grow text-center md:text-left">
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">xjy</h3>
                    <div className="space-y-2 text-gray-600">
                      <p className="flex items-center justify-center md:justify-start gap-2">
                        <span className="inline-block w-2 h-2 bg-blue-500 rounded-full"></span>
                        <span className="font-medium">广东科学技术职业学院</span>
                      </p>
                      <p className="flex items-center justify-center md:justify-start gap-2">
                        <span className="inline-block w-2 h-2 bg-green-500 rounded-full"></span>
                        <span className="font-medium">商学院</span>
                      </p>
                      <p className="flex items-center justify-center md:justify-start gap-2">
                        <span className="inline-block w-2 h-2 bg-purple-500 rounded-full"></span>
                        <span className="font-medium">商务数据分析与应用专业 · 学生</span>
                      </p>
                    </div>
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <p className="text-gray-700 italic leading-relaxed">
                        "热爱数据分析与编程，致力于将数据转化为洞察。希望通过这个平台帮助更多同学掌握Python数据分析技能，一起探索数据的无限可能。"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pandas Projects */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-3 rounded-xl">
                <Database className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 className="text-3xl font-bold mb-4">Pandas 数据分析实战</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              10个精选实战项目，从入门到进阶，完全在浏览器中运行代码，让你从零开始掌握数据分析核心技能
            </p>
            <div className="mt-6 flex items-center justify-center gap-6">
              <div className="flex items-center gap-2 text-gray-600">
                <Book className="w-5 h-5" />
                <span>{pandasProjects.length}个项目</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <TrendingUp className="w-5 h-5" />
                <span>从零到高级</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <CheckCircle className="w-5 h-5" />
                <span>浏览器运行</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
            {pandasProjects.slice(0, 6).map((project, index) => (
              <Link
                key={project.id}
                to={`/pandas-projects/${project.id}`}
                className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="relative h-40 bg-gradient-to-br from-blue-500 to-indigo-600">
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-blue-800">
                    Project {index + 1}
                  </div>
                  <div className="absolute top-3 right-3 flex items-center gap-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      project.difficulty === '入门' ? 'bg-green-100 text-green-800' :
                      project.difficulty === '进阶' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {project.difficulty}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm opacity-90">{project.duration}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-3 text-sm line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <div className="text-xs text-gray-500">
                      {project.objectives.length} 个学习目标
                    </div>
                    <div className="flex items-center text-blue-600 font-semibold text-sm group-hover:text-blue-700 transition-colors">
                      开始学习
                      <ChevronRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link to="/pandas-projects" className="inline-flex items-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-md font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl">
              查看全部实战项目 <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
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