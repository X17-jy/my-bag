import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Play, Code, CheckCircle, Download } from 'lucide-react';

const LessonDetail = () => {
  const { id, lessonId } = useParams<{ id: string; lessonId: string }>();
  const [lesson, setLesson] = useState<any>(null);
  const [code, setCode] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [feedback, setFeedback] = useState('');

  useEffect(() => {
    // 模拟课程内容数据
    setLesson({
      id: 1,
      title: 'Python简介与环境搭建',
      content: `# Python简介与环境搭建

## Python的历史
Python是由Guido van Rossum于1989年圣诞节期间开发的一种编程语言，最初的设计目标是创造一种易于阅读和编写的语言。

## Python的特点
- 简单易学
- 开源免费
- 跨平台
- 丰富的库
- 面向对象

## 环境搭建
1. 下载Python安装包
2. 运行安装程序
3. 验证安装
4. 安装IDE（如PyCharm、VS Code等）

## 第一个Python程序
\`\`\`python
print("Hello, World!")
\`\`\`

## 练习
1. 安装Python环境
2. 编写并运行第一个Python程序
3. 尝试修改程序输出不同的内容`,
      video_url: 'https://example.com/video1',
      duration: '45分钟',
      exercises: [
        {
          id: 1,
          title: '安装Python环境',
          description: '按照课程内容安装Python环境',
          type: '实践',
          points: 10
        },
        {
          id: 2,
          title: '编写第一个程序',
          description: '编写并运行一个输出"Hello, Python!"的程序',
          type: '编程',
          points: 15,
          test_cases: [
            {
              input: '',
              expected: 'Hello, Python!'
            }
          ]
        },
        {
          id: 3,
          title: '修改程序',
          description: '修改程序输出你的名字',
          type: '编程',
          points: 15,
          test_cases: [
            {
              input: '',
              expected: 'Hello, [你的名字]!'
            }
          ]
        }
      ],
      resources: [
        {
          id: 1,
          name: 'Python安装指南',
          type: 'PDF',
          url: 'https://example.com/guide.pdf'
        },
        {
          id: 2,
          name: 'Python基础代码示例',
          type: 'ZIP',
          url: 'https://example.com/code.zip'
        }
      ]
    });
  }, [id, lessonId]);

  const handleSubmit = () => {
    // 模拟代码提交和反馈
    setSubmitted(true);
    setFeedback('代码运行成功！你已经完成了第一个Python程序。');
  };

  if (!lesson) {
    return <div className="container mx-auto px-4 py-16">加载中...</div>;
  }

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8">
          {/* 左侧课程导航 */}
          <div className="md:w-1/4">
            <div className="bg-white rounded-lg shadow-md p-4 sticky top-4">
              <Link to={`/courses/${id}`} className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 mb-4">
                <ChevronLeft className="h-5 w-5" />
                <span>返回课程</span>
              </Link>
              <h3 className="font-semibold mb-4">课程大纲</h3>
              <div className="space-y-2">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                  <Link 
                    key={num} 
                    to={`/courses/${id}/lessons/${num}`}
                    className={`flex items-center space-x-2 p-2 rounded-md transition-colors ${parseInt(lessonId) === num ? 'bg-blue-100 text-blue-800' : 'hover:bg-gray-50'}`}
                  >
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold ${parseInt(lessonId) === num ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}>
                      {num}
                    </div>
                    <span className="text-sm">第{num}课：{num === 1 ? 'Python简介与环境搭建' : `课程内容 ${num}`}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* 右侧课程内容 */}
          <div className="md:w-3/4">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              {/* 视频播放器 */}
              <div className="aspect-video bg-gray-900 flex items-center justify-center">
                <button className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                  <Play className="h-8 w-8 text-white" />
                </button>
              </div>

              {/* 课程内容 */}
              <div className="p-6">
                <h1 className="text-2xl font-bold mb-4">{lesson.title}</h1>
                <div className="prose max-w-none">
                  {lesson.content.split('\n').map((line: string, index: number) => {
                    if (line.startsWith('# ')) {
                      return <h2 key={index} className="text-xl font-semibold mt-6 mb-3">{line.substring(2)}</h2>;
                    } else if (line.startsWith('## ')) {
                      return <h3 key={index} className="text-lg font-semibold mt-4 mb-2">{line.substring(3)}</h3>;
                    } else if (line.startsWith('```python')) {
                      return (
                        <div key={index} className="bg-gray-100 p-4 rounded-md mb-4">
                          <pre className="text-sm"><code>{lesson.content.split('```python')[1].split('```')[0]}</code></pre>
                        </div>
                      );
                    } else if (line.startsWith('```')) {
                      return null;
                    } else if (line.trim() === '') {
                      return <br key={index} />;
                    } else if (line.startsWith('- ')) {
                      return <li key={index} className="ml-6 mb-1">{line.substring(2)}</li>;
                    } else if (line.startsWith('1. ') || line.startsWith('2. ') || line.startsWith('3. ') || line.startsWith('4. ')) {
                      return <li key={index} className="ml-6 mb-1 list-decimal">{line.substring(3)}</li>;
                    } else {
                      return <p key={index} className="mb-3">{line}</p>;
                    }
                  })}
                </div>

                {/* 互动练习 */}
                <div className="mt-8">
                  <h2 className="text-xl font-semibold mb-4">互动练习</h2>
                  <div className="bg-gray-50 p-4 rounded-md">
                    <h3 className="font-semibold mb-2">{lesson.exercises[1].title}</h3>
                    <p className="text-gray-600 mb-4">{lesson.exercises[1].description}</p>
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-2">编写代码</label>
                      <textarea
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                        rows={6}
                        placeholder="print('Hello, Python!')"
                      />
                    </div>
                    <button
                      onClick={handleSubmit}
                      className="bg-blue-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-700 transition-colors"
                    >
                      运行代码
                    </button>
                    {submitted && (
                      <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-md">
                        <div className="flex items-start space-x-2">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>{feedback}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* 学习资源 */}
                <div className="mt-8">
                  <h2 className="text-xl font-semibold mb-4">学习资源</h2>
                  <div className="space-y-2">
                    {lesson.resources.map((resource: any) => (
                      <div key={resource.id} className="flex items-center justify-between p-3 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors">
                        <div className="flex items-center space-x-3">
                          <div className="bg-blue-100 p-2 rounded-full">
                            <Download className="h-5 w-5 text-blue-600" />
                          </div>
                          <div>
                            <h3 className="font-medium">{resource.name}</h3>
                            <p className="text-sm text-gray-600">{resource.type}</p>
                          </div>
                        </div>
                        <a href={resource.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-semibold">
                          下载
                        </a>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 导航按钮 */}
                <div className="mt-8 flex justify-between">
                  <Link to={`/courses/${id}/lessons/${parseInt(lessonId) - 1}`} className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 font-semibold">
                    <ChevronLeft className="h-5 w-5" />
                    <span>上一课</span>
                  </Link>
                  <Link to={`/courses/${id}/lessons/${parseInt(lessonId) + 1}`} className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 font-semibold">
                    <span>下一课</span>
                    <ChevronRight className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonDetail;