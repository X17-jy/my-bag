import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Award, FileText, BarChart2, CheckCircle, ChevronRight } from 'lucide-react';

const Achievements = () => {
  const [badges, setBadges] = useState<any[]>([]);
  const [certificates, setCertificates] = useState<any[]>([]);
  const [progress, setProgress] = useState<any[]>([]);

  useEffect(() => {
    // 模拟徽章数据
    setBadges([
      {
        id: 1,
        name: 'Python初学者',
        description: '完成Python基础编程课程',
        earned: true,
        date: '2026-03-15'
      },
      {
        id: 2,
        name: '数据分析入门',
        description: '完成数据分析与可视化课程',
        earned: true,
        date: '2026-04-01'
      },
      {
        id: 3,
        name: '商务数据分析专家',
        description: '完成商务数据分析实战课程',
        earned: false,
        date: null
      },
      {
        id: 4,
        name: '练习达人',
        description: '完成10个编程练习',
        earned: true,
        date: '2026-04-10'
      },
      {
        id: 5,
        name: '项目大师',
        description: '完成2个数据分析项目',
        earned: false,
        date: null
      },
      {
        id: 6,
        name: '测评高手',
        description: '测评平均得分90分以上',
        earned: false,
        date: null
      }
    ]);

    // 模拟证书数据
    setCertificates([
      {
        id: 1,
        name: 'Python基础编程证书',
        course: 'Python基础编程',
        issued: '2026-03-15',
        expires: '2029-03-15'
      },
      {
        id: 2,
        name: '数据分析与可视化证书',
        course: '数据分析与可视化',
        issued: '2026-04-01',
        expires: '2029-04-01'
      }
    ]);

    // 模拟学习进度数据
    setProgress([
      {
        id: 1,
        course: 'Python基础编程',
        progress: 100,
        completed: true
      },
      {
        id: 2,
        course: '数据分析与可视化',
        progress: 100,
        completed: true
      },
      {
        id: 3,
        course: '商务数据分析实战',
        progress: 30,
        completed: false
      }
    ]);
  }, []);

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">我的成就</h1>

        {/* 徽章部分 */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">徽章</h2>
            <span className="text-gray-600">{badges.filter(badge => badge.earned).length}/{badges.length} 个已获得</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {badges.map((badge) => (
              <div key={badge.id} className={`bg-white rounded-lg shadow-md p-4 text-center transition-all ${badge.earned ? 'opacity-100' : 'opacity-50'}`}>
                <div className={`w-16 h-16 mx-auto mb-3 rounded-full flex items-center justify-center ${badge.earned ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-400'}`}>
                  <Award className="h-8 w-8" />
                </div>
                <h3 className="font-semibold mb-1">{badge.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{badge.description}</p>
                {badge.earned && (
                  <p className="text-xs text-gray-500">获得于 {badge.date}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 证书部分 */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">证书</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certificates.map((certificate) => (
              <div key={certificate.id} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-600">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <FileText className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold">{certificate.name}</h3>
                </div>
                <p className="text-gray-600 mb-4">课程：{certificate.course}</p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>颁发日期：{certificate.issued}</span>
                  <span>有效期至：{certificate.expires}</span>
                </div>
                <div className="mt-4">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-700 transition-colors">
                    查看证书
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 学习进度部分 */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">学习进度</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="space-y-6">
              {progress.map((item) => (
                <div key={item.id}>
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold">{item.course}</h3>
                    <span className="text-gray-600">{item.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-4">
                    <div 
                      className="bg-blue-600 h-4 rounded-full" 
                      style={{ width: `${item.progress}%` }}
                    ></div>
                  </div>
                  {item.completed && (
                    <div className="mt-2 flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="text-green-600 font-semibold">已完成</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;