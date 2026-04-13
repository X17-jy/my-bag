import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, Play, BookOpen, CheckCircle, Clock, Award, User, Star } from 'lucide-react';

const CourseDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [course, setCourse] = useState<any>(null);
  const [lessons, setLessons] = useState<any[]>([]);

  useEffect(() => {
    // 模拟课程数据
    setCourse({
      id: 1,
      title: 'Python基础编程',
      description: '掌握Python编程语言的基本语法和数据结构，为数据分析打下坚实的基础。本课程适合商务数据分析专业的学生，通过实际案例和练习，帮助学生快速掌握Python编程技能。',
      category: '基础',
      difficulty: '初级',
      duration: '4周',
      instructor: '张老师',
      rating: 4.8,
      students: 1200,
      image_url: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Python%20programming%20basics%20course%20thumbnail&image_size=landscape_16_9',
      prerequisites: ['基本计算机操作能力', '了解基本数学概念'],
      learning_objectives: [
        '掌握Python基本语法和数据类型',
        '学习函数和模块的使用',
        '掌握文件操作和异常处理',
        '了解面向对象编程基础',
        '能够编写简单的数据分析脚本'
      ]
    });

    // 模拟课程大纲
    setLessons([
      {
        id: 1,
        title: 'Python简介与环境搭建',
        content: '介绍Python的历史、特点和应用领域，以及如何搭建Python开发环境。',
        video_url: 'https://example.com/video1',
        duration: '45分钟',
        exercises: 3
      },
      {
        id: 2,
        title: '基本语法与数据类型',
        content: '学习Python的基本语法、变量、数据类型和运算符。',
        video_url: 'https://example.com/video2',
        duration: '60分钟',
        exercises: 5
      },
      {
        id: 3,
        title: '控制流与循环',
        content: '学习条件语句、循环结构和异常处理。',
        video_url: 'https://example.com/video3',
        duration: '50分钟',
        exercises: 4
      },
      {
        id: 4,
        title: '函数与模块',
        content: '学习函数的定义和使用，以及模块的导入和使用。',
        video_url: 'https://example.com/video4',
        duration: '55分钟',
        exercises: 4
      },
      {
        id: 5,
        title: '文件操作与数据处理',
        content: '学习如何读写文件，以及处理常见的数据格式。',
        video_url: 'https://example.com/video5',
        duration: '60分钟',
        exercises: 5
      },
      {
        id: 6,
        title: '面向对象编程基础',
        content: '学习类、对象、继承等面向对象编程概念。',
        video_url: 'https://example.com/video6',
        duration: '50分钟',
        exercises: 3
      },
      {
        id: 7,
        title: '数据分析入门',
        content: '介绍如何使用Python进行简单的数据分析。',
        video_url: 'https://example.com/video7',
        duration: '65分钟',
        exercises: 4
      },
      {
        id: 8,
        title: '课程总结与项目实践',
        content: '总结课程内容，完成一个综合性的数据分析项目。',
        video_url: 'https://example.com/video8',
        duration: '70分钟',
        exercises: 1
      }
    ]);
  }, [id]);

  if (!course) {
    return <div className="container mx-auto px-4 py-16">加载中...</div>;
  }

  return (
    <div className="py-8">
      {/* 课程头部 */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <img src={course.image_url} alt={course.title} className="w-full rounded-lg shadow-md" />
            </div>
            <div className="md:w-2/3">
              <div className="flex items-center space-x-2 mb-2">
                <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">{course.category}</span>
                <span className="bg-gray-200 text-gray-800 text-sm px-3 py-1 rounded-full">{course.difficulty}</span>
              </div>
              <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
              <p className="text-gray-600 mb-6">{course.description}</p>
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-gray-600" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <User className="h-5 w-5 text-gray-600" />
                  <span>{course.students} 名学生</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-yellow-500" />
                  <span>{course.rating} 分</span>
                </div>
              </div>
              <div className="flex space-x-4">
                <Link to="/courses/1/lessons/1" className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors flex items-center space-x-2">
                  <Play className="h-5 w-5" />
                  <span>开始学习</span>
                </Link>
                <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors">
                  收藏课程
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 课程内容 */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* 左侧课程大纲 */}
          <div className="md:w-1/3">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">课程大纲</h2>
              <div className="space-y-4">
                {lessons.map((lesson, index) => (
                  <Link key={lesson.id} to={`/courses/${id}/lessons/${lesson.id}`} className="flex items-center space-x-3 p-3 rounded-md hover:bg-gray-50 transition-colors">
                    <div className="bg-blue-100 text-blue-800 w-8 h-8 rounded-full flex items-center justify-center font-semibold">
                      {index + 1}
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-medium">{lesson.title}</h3>
                      <p className="text-sm text-gray-600">{lesson.duration} · {lesson.exercises} 个练习</p>
                    </div>
                    <ChevronRight className="h-5 w-5 text-gray-400" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* 右侧课程详情 */}
          <div className="md:w-2/3">
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-xl font-semibold mb-4">课程介绍</h2>
              <p className="text-gray-600 mb-4">
                {course.description}
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">学习目标</h3>
                  <ul className="space-y-2">
                    {course.learning_objectives.map((objective: string, index: number) => (
                      <li key={index} className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>{objective}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2"> prerequisites</h3>
                  <ul className="space-y-2">
                    {course.prerequisites.map((prerequisite: string, index: number) => (
                      <li key={index} className="flex items-start space-x-2">
                        <BookOpen className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>{prerequisite}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">讲师介绍</h2>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                  <User className="h-8 w-8 text-gray-600" />
                </div>
                <div>
                  <h3 className="font-semibold">{course.instructor}</h3>
                  <p className="text-gray-600">数据分析讲师</p>
                  <p className="text-sm text-gray-500 mt-2">
                    拥有5年Python教学经验，专注于商务数据分析领域，曾为多家企业提供数据分析培训。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;