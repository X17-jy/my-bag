import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Code, BarChart2, Clock, Award, CheckCircle, ChevronRight } from 'lucide-react';

const Practice = () => {
  const [exercises, setExercises] = useState<any[]>([]);
  const [difficulty, setDifficulty] = useState('全部');

  useEffect(() => {
    // 模拟练习数据
    setExercises([
      {
        id: 1,
        title: '计算列表平均值',
        description: '编写一个函数，计算给定列表中所有元素的平均值',
        difficulty: '初级',
        points: 15,
        completed: false
      },
      {
        id: 2,
        title: '查找最大元素',
        description: '编写一个函数，查找给定列表中的最大元素',
        difficulty: '初级',
        points: 15,
        completed: true
      },
      {
        id: 3,
        title: '字符串反转',
        description: '编写一个函数，将给定字符串反转',
        difficulty: '初级',
        points: 20,
        completed: false
      },
      {
        id: 4,
        title: '斐波那契数列',
        description: '编写一个函数，生成指定长度的斐波那契数列',
        difficulty: '中级',
        points: 25,
        completed: false
      },
      {
        id: 5,
        title: '质数判断',
        description: '编写一个函数，判断一个数是否为质数',
        difficulty: '中级',
        points: 30,
        completed: false
      },
      {
        id: 6,
        title: '排序算法',
        description: '实现冒泡排序算法',
        difficulty: '高级',
        points: 40,
        completed: false
      }
    ]);
  }, []);

  const difficulties = ['全部', '初级', '中级', '高级'];

  const filteredExercises = difficulty === '全部' 
    ? exercises 
    : exercises.filter(exercise => exercise.difficulty === difficulty);

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h1 className="text-3xl font-bold mb-4 md:mb-0">编程练习</h1>
          <div className="relative">
            <select
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
              className="appearance-none bg-white border border-gray-300 rounded-md pl-4 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              {difficulties.map((diff) => (
                <option key={diff} value={diff}>{diff}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredExercises.map((exercise) => (
            <div key={exercise.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className={exercise.difficulty === '初级' ? 'bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full mb-2 inline-block' : exercise.difficulty === '中级' ? 'bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full mb-2 inline-block' : 'bg-red-100 text-red-800 text-sm px-3 py-1 rounded-full mb-2 inline-block'}>
                      {exercise.difficulty}
                    </span>
                    <h3 className="text-xl font-semibold mb-2">{exercise.title}</h3>
                  </div>
                  {exercise.completed && (
                    <div className="bg-green-100 p-2 rounded-full">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    </div>
                  )}
                </div>
                <p className="text-gray-600 mb-4">{exercise.description}</p>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-gray-600" />
                    <span className="text-gray-600">15分钟</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Award className="h-5 w-5 text-amber-600" />
                    <span className="font-semibold">{exercise.points} 分</span>
                  </div>
                </div>
                <Link to={`/practice/exercise/${exercise.id}`} className="block w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition-colors text-center flex items-center justify-center space-x-2">
                  <Code className="h-4 w-4" />
                  <span>{exercise.completed ? '重新练习' : '开始练习'}</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filteredExercises.length === 0 && (
          <div className="text-center py-16">
            <Code className="h-16 w-16 mx-auto text-gray-300 mb-4" />
            <h3 className="text-xl font-semibold mb-2">暂无练习</h3>
            <p className="text-gray-600">该难度级别下暂无练习，请尝试其他难度</p>
          </div>
        )}

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">数据分析项目</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link to="/practice/projects" className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <BarChart2 className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold">销售数据分析</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  分析销售数据，识别销售趋势，预测未来销售情况，为业务决策提供数据支持。
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">难度：中级</span>
                  <span className="text-blue-600 font-semibold flex items-center space-x-1">
                    查看详情 <ChevronRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </Link>
            <Link to="/practice/projects" className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <BarChart2 className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold">用户行为分析</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  分析用户行为数据，了解用户偏好，优化产品设计和营销策略。
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">难度：高级</span>
                  <span className="text-blue-600 font-semibold flex items-center space-x-1">
                    查看详情 <ChevronRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Practice;