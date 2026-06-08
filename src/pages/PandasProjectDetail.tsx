import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { ArrowLeft, CheckCircle, Play, ChevronRight, Code, Terminal, CheckSquare, Square, BookOpen, Clock, Award } from 'lucide-react';
import pandasProjects from '../data/pandasProjects';
import CodeEditor from '../components/CodeEditor';

const PandasProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const projectId = parseInt(id || '1');
  const project = pandasProjects.find(p => p.id === projectId);
  const [completedTasks, setCompletedTasks] = useState<number[]>([]);
  const [activeTask, setActiveTask] = useState(0);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const getUserInfo = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
      
      if (user && project) {
        const savedTasks = localStorage.getItem(`pandas_project_${project.id}_tasks_${user.id}`);
        if (savedTasks) {
          setCompletedTasks(JSON.parse(savedTasks));
        }
      }
    };
    getUserInfo();
  }, [project]);

  const toggleTask = (taskId: number) => {
    const newCompleted = completedTasks.includes(taskId)
      ? completedTasks.filter(id => id !== taskId)
      : [...completedTasks, taskId];
    
    setCompletedTasks(newCompleted);
    
    if (user && project) {
      localStorage.setItem(`pandas_project_${project.id}_tasks_${user.id}`, JSON.stringify(newCompleted));
      
      if (newCompleted.length === project.tasks.length) {
        const savedProjects = localStorage.getItem(`pandas_completed_${user.id}`);
        let completedProjects = savedProjects ? JSON.parse(savedProjects) : [];
        if (!completedProjects.includes(project.id)) {
          completedProjects.push(project.id);
          localStorage.setItem(`pandas_completed_${user.id}`, JSON.stringify(completedProjects));
        }
      }
    }
  };

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

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">项目未找到</h1>
          <Link to="/pandas-projects" className="text-blue-600 hover:text-blue-700 font-medium">
            返回项目列表
          </Link>
        </div>
      </div>
    );
  }

  const progress = Math.round((completedTasks.length / project.tasks.length) * 100);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 py-8">
          <Link to="/pandas-projects" className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-4">
            <ArrowLeft className="w-5 h-5" />
            <span>返回项目列表</span>
          </Link>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(project.difficulty)} bg-opacity-20 text-white`}>
                  {project.difficulty}
                </span>
                <span className="flex items-center gap-1 text-white/90">
                  <Clock className="w-4 h-4" />
                  {project.duration}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{project.title}</h1>
              <p className="text-white/90 text-lg">{project.description}</p>
            </div>
            <div className="mt-4 md:mt-0">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-sm text-white/80 mb-2">完成进度</div>
                <div className="text-3xl font-bold">{progress}%</div>
                <div className="w-32 h-2 bg-white/20 rounded-full mt-2">
                  <div 
                    className="h-full bg-white rounded-full" 
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 pb-6">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, index) => (
              <span key={index} className="px-3 py-1 bg-white/20 rounded-full text-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-blue-600" />
                学习目标
              </h3>
              <ul className="space-y-3">
                {project.objectives.map((objective, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 text-sm">{objective}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 mt-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-yellow-500" />
                任务列表
              </h3>
              <div className="space-y-3">
                {project.tasks.map((task, index) => (
                  <button
                    key={task.id}
                    onClick={() => setActiveTask(index)}
                    className={`w-full text-left p-3 rounded-lg border-2 transition-all ${
                      activeTask === index
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      {completedTasks.includes(task.id) ? (
                        <CheckSquare className="w-5 h-5 text-green-500" />
                      ) : (
                        <Square className="w-5 h-5 text-gray-400" />
                      )}
                      <span className={`font-medium ${
                        activeTask === index ? 'text-blue-700' : 'text-gray-700'
                      }`}>
                        任务 {index + 1}
                      </span>
                    </div>
                    <div className="text-sm text-gray-500 mt-1">{task.title}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-6">
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">
                  任务 {activeTask + 1}: {project.tasks[activeTask].title}
                </h3>
                <button
                  onClick={() => toggleTask(project.tasks[activeTask].id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    completedTasks.includes(project.tasks[activeTask].id)
                      ? 'bg-green-100 text-green-700'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  {completedTasks.includes(project.tasks[activeTask].id) ? '已完成 ✓' : '标记完成'}
                </button>
              </div>
              <p className="text-gray-600 mb-4">{project.tasks[activeTask].description}</p>
              {project.tasks[activeTask].hint && (
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                  <p className="text-yellow-800 text-sm">
                    <strong>提示：</strong>{project.tasks[activeTask].hint}
                  </p>
                </div>
              )}
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="bg-gray-900 px-4 py-3 flex items-center gap-2">
                <Code className="w-5 h-5 text-gray-400" />
                <span className="text-gray-300 font-medium">Python 编辑器</span>
              </div>
              <CodeEditor initialCode={project.initialCode} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PandasProjectDetail;
