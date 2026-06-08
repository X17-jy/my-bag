import { Link } from 'react-router-dom';
import { BookOpen, Clock, Award, TrendingUp, Database, LineChart, Users, Target } from 'lucide-react';
import pandasProjects from '../data/pandasProjects';

const PandasProjects = () => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case '入门':
        return 'bg-green-100 text-green-800';
      case '进阶':
        return 'bg-yellow-100 text-yellow-800';
      case '高级':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getDifficultyIcon = (difficulty: string) => {
    switch (difficulty) {
      case '入门':
        return <TrendingUp className="w-5 h-5" />;
      case '进阶':
        return <Database className="w-5 h-5" />;
      case '高级':
        return <LineChart className="w-5 h-5" />;
      default:
        return <TrendingUp className="w-5 h-5" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4 rounded-2xl">
              <Target className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Pandas 数据分析实战
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            10个精选实战项目，从入门到进阶，完全在浏览器中运行代码，让你从零开始掌握数据分析核心技能
          </p>
          <div className="mt-6 flex items-center justify-center gap-6">
            <div className="flex items-center gap-2 text-gray-600">
              <BookOpen className="w-5 h-5" />
              <span>10个项目</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Clock className="w-5 h-5" />
              <span>约15小时</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Award className="w-5 h-5" />
              <span>完成即得证书</span>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="text-3xl font-bold text-blue-600">10</div>
            <div className="text-gray-600">实战项目</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="text-3xl font-bold text-green-600">30+</div>
            <div className="text-gray-600">练习任务</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="text-3xl font-bold text-purple-600">100%</div>
            <div className="text-gray-600">浏览器运行</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="text-3xl font-bold text-orange-600">0</div>
            <div className="text-gray-600">环境配置</div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pandasProjects.map((project, index) => (
            <Link
              key={project.id}
              to={`/pandas-projects/${project.id}`}
              className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative h-48 bg-gradient-to-br from-blue-500 to-indigo-600">
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-blue-800">
                  Project {index + 1}
                </div>
                <div className="absolute top-4 right-4 flex items-center gap-2">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(project.difficulty)}`}>
                    {project.difficulty}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    {getDifficultyIcon(project.difficulty)}
                    <span className="text-sm opacity-90">{project.duration}</span>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="text-sm text-gray-500">
                    {project.objectives.length} 个学习目标
                  </div>
                  <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                    <span>开始学习</span>
                    <svg
                      className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Learning Path Info */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">为什么选择这个实战课程？</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="font-semibold mb-2">循序渐进</h3>
                <p className="text-white/80 text-sm">从基础到高级，按顺序学习，逐步提升</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Database className="w-8 h-8" />
                </div>
                <h3 className="font-semibold mb-2">真实场景</h3>
                <p className="text-white/80 text-sm">模拟真实业务场景，学习即实战</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <LineChart className="w-8 h-8" />
                </div>
                <h3 className="font-semibold mb-2">即学即用</h3>
                <p className="text-white/80 text-sm">直接在浏览器运行，所见即所得</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PandasProjects;
