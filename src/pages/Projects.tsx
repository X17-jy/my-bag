import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BarChart2, Clock, Award, ChevronRight, Download, Upload, CheckCircle } from 'lucide-react';

const Projects = () => {
  const [projects, setProjects] = useState<any[]>([]);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // 模拟项目数据
    setProjects([
      {
        id: 1,
        title: '销售数据分析',
        description: '分析销售数据，识别销售趋势，预测未来销售情况，为业务决策提供数据支持。',
        difficulty: '中级',
        duration: '3天',
        points: 100,
        data_set_url: 'https://example.com/sales_data.csv',
        requirements: [
          '分析销售数据的时间趋势',
          '识别销售最好的产品类别',
          '分析不同地区的销售表现',
          '预测未来一个月的销售情况',
          '生成可视化报告'
        ]
      },
      {
        id: 2,
        title: '用户行为分析',
        description: '分析用户行为数据，了解用户偏好，优化产品设计和营销策略。',
        difficulty: '高级',
        duration: '5天',
        points: 150,
        data_set_url: 'https://example.com/user_behavior.csv',
        requirements: [
          '分析用户活跃度分布',
          '识别用户行为模式',
          '分析用户留存率',
          '建立用户分群模型',
          '生成用户画像报告'
        ]
      }
    ]);
  }, []);

  const handleProjectSelect = (project: any) => {
    setSelectedProject(project);
    setSubmitted(false);
  };

  const handleSubmit = () => {
    // 模拟项目提交
    setSubmitted(true);
  };

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">数据分析项目</h1>

        <div className="flex flex-col md:flex-row gap-8">
          {/* 左侧项目列表 */}
          <div className="md:w-1/3">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">项目列表</h2>
              <div className="space-y-4">
                {projects.map((project) => (
                  <div 
                    key={project.id}
                    onClick={() => handleProjectSelect(project)}
                    className={`p-4 rounded-md cursor-pointer transition-colors ${selectedProject?.id === project.id ? 'bg-blue-100 border border-blue-300' : 'border border-gray-200 hover:bg-gray-50'}`}
                  >
                    <h3 className="font-semibold mb-2">{project.title}</h3>
                    <div className="flex justify-between items-center">
                      <span className={`text-sm ${project.difficulty === '中级' ? 'text-blue-600' : 'text-red-600'}`}>
                        {project.difficulty}
                      </span>
                      <span className="text-sm text-gray-600">{project.duration}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 右侧项目详情 */}
          <div className="md:w-2/3">
            {selectedProject ? (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold mb-4">{selectedProject.title}</h2>
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-gray-600" />
                    <span>{selectedProject.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Award className="h-5 w-5 text-amber-600" />
                    <span>{selectedProject.points} 分</span>
                  </div>
                  <span className={`bg-${selectedProject.difficulty === '中级' ? 'blue' : 'red'}-100 text-${selectedProject.difficulty === '中级' ? 'blue' : 'red'}-800 text-sm px-3 py-1 rounded-full`}>
                    {selectedProject.difficulty}
                  </span>
                </div>
                <p className="text-gray-600 mb-6">{selectedProject.description}</p>

                {/* 项目要求 */}
                <div className="mb-8">
                  <h3 className="font-semibold mb-3">项目要求</h3>
                  <ul className="space-y-2">
                    {selectedProject.requirements.map((requirement: string, index: number) => (
                      <li key={index} className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 数据集下载 */}
                <div className="mb-8">
                  <h3 className="font-semibold mb-3">数据集</h3>
                  <a 
                    href={selectedProject.data_set_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 font-semibold"
                  >
                    <Download className="h-5 w-5" />
                    <span>下载数据集</span>
                  </a>
                </div>

                {/* 项目提交 */}
                <div className="border-t border-gray-200 pt-6">
                  <h3 className="font-semibold mb-3">提交项目</h3>
                  {submitted ? (
                    <div className="bg-green-100 p-4 rounded-md">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-green-800">项目提交成功！</h4>
                          <p className="text-green-700">
                            你的项目已成功提交，我们将在24小时内进行审核。
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">上传项目文件</label>
                        <div className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center hover:border-blue-500 transition-colors">
                          <Upload className="h-10 w-10 text-gray-400 mx-auto mb-2" />
                          <p className="text-gray-600 mb-2">点击或拖拽文件到此处上传</p>
                          <p className="text-sm text-gray-500">支持 .py, .ipynb, .csv, .pdf 格式</p>
                        </div>
                      </div>
                      <button
                        onClick={handleSubmit}
                        className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors"
                      >
                        提交项目
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-md p-16 text-center">
                <BarChart2 className="h-16 w-16 mx-auto text-gray-300 mb-4" />
                <h3 className="text-xl font-semibold mb-2">选择一个项目</h3>
                <p className="text-gray-600">从左侧列表中选择一个数据分析项目开始工作</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;