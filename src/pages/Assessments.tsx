import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FileText, Clock, Award, CheckCircle, ChevronRight } from 'lucide-react';

const Assessments = () => {
  const [assessments, setAssessments] = useState<any[]>([]);

  useEffect(() => {
    // 模拟测评数据
    setAssessments([
      {
        id: 1,
        title: 'Python基础编程测试',
        description: '测试Python基础编程知识，包括语法、数据类型、控制流等',
        course: 'Python基础编程',
        duration: 60,
        questions: 20,
        points: 100,
        completed: false,
        score: null
      },
      {
        id: 2,
        title: '数据分析与可视化测试',
        description: '测试数据分析和可视化相关知识，包括数据清洗、分析和图表绘制',
        course: '数据分析与可视化',
        duration: 90,
        questions: 25,
        points: 150,
        completed: true,
        score: 120
      },
      {
        id: 3,
        title: '商务数据分析实战测试',
        description: '测试商务数据分析的实际应用能力',
        course: '商务数据分析实战',
        duration: 120,
        questions: 30,
        points: 200,
        completed: false,
        score: null
      }
    ]);
  }, []);

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">测评中心</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {assessments.map((assessment) => (
            <div key={assessment.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full mb-2 inline-block">
                      {assessment.course}
                    </span>
                    <h3 className="text-xl font-semibold mb-2">{assessment.title}</h3>
                  </div>
                  {assessment.completed && (
                    <div className="bg-green-100 p-2 rounded-full">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    </div>
                  )}
                </div>
                <p className="text-gray-600 mb-4">{assessment.description}</p>
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">时长</span>
                    <span className="font-semibold">{assessment.duration} 分钟</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">题目数量</span>
                    <span className="font-semibold">{assessment.questions} 题</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">总分</span>
                    <span className="font-semibold">{assessment.points} 分</span>
                  </div>
                  {assessment.completed && (
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">得分</span>
                      <span className="font-semibold text-green-600">{assessment.score} 分</span>
                    </div>
                  )}
                </div>
                <Link to={`/assessments/${assessment.id}`} className="block w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition-colors text-center flex items-center justify-center space-x-2">
                  <FileText className="h-4 w-4" />
                  <span>{assessment.completed ? '查看结果' : '开始测评'}</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {assessments.length === 0 && (
          <div className="text-center py-16">
            <FileText className="h-16 w-16 mx-auto text-gray-300 mb-4" />
            <h3 className="text-xl font-semibold mb-2">暂无测评</h3>
            <p className="text-gray-600">目前没有可用的测评，请稍后再试</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Assessments;