import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Book, Filter, ChevronRight } from 'lucide-react';

const Courses = () => {
  const [courses, setCourses] = useState<any[]>([]);
  const [filter, setFilter] = useState('全部');

  useEffect(() => {
    // 模拟课程数据
    setCourses([
      {
        id: 1,
        title: 'Python数据分析AI训练平台',
        description: '基于Cloudflare免费资源，实现3步认知+10个梯度项目+AI错题倒逼的Python数据分析实操训练',
        category: '高级',
        difficulty: '中级',
        duration: '8周',
        image_url: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Python%20data%20analysis%20AI%20training%20platform&image_size=landscape_16_9'
      },
      {
        id: 2,
        title: 'Python基础编程',
        description: '掌握Python编程语言的基本语法和数据结构',
        category: '基础',
        difficulty: '初级',
        duration: '4周',
        image_url: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Python%20programming%20basics%20course%20thumbnail&image_size=landscape_16_9'
      },
      {
        id: 3,
        title: '数据分析与可视化',
        description: '使用Python进行数据清洗、分析和可视化',
        category: '进阶',
        difficulty: '中级',
        duration: '6周',
        image_url: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Data%20analysis%20and%20visualization%20course&image_size=landscape_16_9'
      },
      {
        id: 4,
        title: '商务数据分析实战',
        description: '应用Python解决实际商务数据分析问题',
        category: '高级',
        difficulty: '高级',
        duration: '8周',
        image_url: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Business%20data%20analysis%20practical%20course&image_size=landscape_16_9'
      },
      {
        id: 5,
        title: '数据可视化高级技巧',
        description: '掌握Matplotlib、Seaborn等库的高级可视化技巧',
        category: '进阶',
        difficulty: '中级',
        duration: '5周',
        image_url: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Advanced%20data%20visualization%20techniques&image_size=landscape_16_9'
      },
      {
        id: 6,
        title: '统计分析基础',
        description: '学习统计分析的基本概念和方法',
        category: '基础',
        difficulty: '初级',
        duration: '4周',
        image_url: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Statistical%20analysis%20basics&image_size=landscape_16_9'
      },
      {
        id: 7,
        title: '机器学习入门',
        description: '了解机器学习的基本原理和应用',
        category: '高级',
        difficulty: '中级',
        duration: '7周',
        image_url: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Machine%20learning%20introduction&image_size=landscape_16_9'
      }
    ]);
  }, []);

  const categories = ['全部', '基础', '进阶', '高级'];

  const filteredCourses = filter === '全部' 
    ? courses 
    : courses.filter(course => course.category === filter);

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h1 className="text-3xl font-bold mb-4 md:mb-0">所有课程</h1>
          <div className="relative">
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="appearance-none bg-white border border-gray-300 rounded-md pl-4 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              {categories.map((category) => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <Filter className="h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
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

        {filteredCourses.length === 0 && (
          <div className="text-center py-16">
            <Book className="h-16 w-16 mx-auto text-gray-300 mb-4" />
            <h3 className="text-xl font-semibold mb-2">暂无课程</h3>
            <p className="text-gray-600">该分类下暂无课程，请尝试其他分类</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Courses;