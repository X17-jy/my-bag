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
    // 根据课程ID和课时ID获取课程内容
    if (id === '1') {
      // Python数据分析AI训练平台课程
      if (lessonId === '1') {
        // 第一天：底层认知模块
        setLesson({
          id: 1,
          title: '第一天：底层认知模块',
          content: `# 底层认知模块

## 思维模型
数据分析的核心思维模型包括：
- 问题定义：明确分析目标和问题边界
- 数据获取：收集和整理相关数据
- 数据清洗：处理缺失值、异常值和重复数据
- 数据分析：使用统计方法和可视化工具
- 结果解释：将分析结果转化为业务洞察
- 行动建议：基于分析结果提出具体建议

## 行业争议
数据分析领域的常见争议：
- 数据驱动 vs 经验驱动
- 模型复杂度 vs 可解释性
- 实时分析 vs 批处理
- 开源工具 vs 商业工具

## 辨析题
1. 数据越多越好吗？
2. 相关性等于因果关系吗？
3. 模型准确率越高越好吗？
4. 数据分析可以替代业务直觉吗？

## 3步认知法
1. 建立底层思维模型
2. 了解行业争议和最佳实践
3. 通过辨析题加深理解`,
          video_url: 'https://example.com/video1',
          duration: '90分钟',
          exercises: [
            {
              id: 1,
              title: '思维模型应用',
              description: '选择一个实际业务问题，应用数据分析思维模型进行分析',
              type: '实践',
              points: 20
            },
            {
              id: 2,
              title: '辨析题回答',
              description: '回答上述4个辨析题，给出你的观点和理由',
              type: '问答',
              points: 15
            }
          ],
          resources: [
            {
              id: 1,
              name: '数据分析思维模型',
              type: 'PDF',
              url: 'https://example.com/thinking-model.pdf'
            },
            {
              id: 2,
              name: '行业争议案例集',
              type: 'PDF',
              url: 'https://example.com/controversies.pdf'
            }
          ]
        });
      } else if (lessonId === '2') {
        // 项目1-3：过渡项目
        setLesson({
          id: 2,
          title: '项目1-3：过渡项目',
          content: `# 过渡项目

## 项目1：数据类型与基本操作
- 学习Python基本数据类型
- 掌握基本的数据分析操作
- 练习数据导入和导出

## 项目2：数据清洗与预处理
- 处理缺失值和异常值
- 数据标准化和归一化
- 特征工程基础

## 项目3：数据可视化基础
- 使用Matplotlib创建基本图表
- 使用Seaborn进行统计可视化
- 图表美化和定制`,
          video_url: 'https://example.com/video2',
          duration: '120分钟',
          exercises: [
            {
              id: 1,
              title: '数据类型练习',
              description: '创建不同类型的数据结构并进行操作',
              type: '编程',
              points: 15
            },
            {
              id: 2,
              title: '数据清洗练习',
              description: '处理给定数据集的缺失值和异常值',
              type: '编程',
              points: 20
            },
            {
              id: 3,
              title: '数据可视化练习',
              description: '创建不同类型的图表展示数据',
              type: '编程',
              points: 20
            }
          ],
          resources: [
            {
              id: 1,
              name: '过渡项目数据集',
              type: 'CSV',
              url: 'https://example.com/transition-data.csv'
            },
            {
              id: 2,
              name: 'Python数据处理 cheat sheet',
              type: 'PDF',
              url: 'https://example.com/cheat-sheet.pdf'
            }
          ]
        });
      } else if (lessonId === '3') {
        // 项目4-7：进阶项目
        setLesson({
          id: 3,
          title: '项目4-7：进阶项目',
          content: `# 进阶项目

## 项目4：探索性数据分析
- 数据分布分析
- 相关性分析
- 特征重要性评估

## 项目5：统计分析
- 假设检验
- 置信区间
- 方差分析

## 项目6：预测模型
- 线性回归
- 分类模型
- 模型评估指标

## 项目7：时间序列分析
- 趋势分析
- 季节性分析
- 预测建模`,
          video_url: 'https://example.com/video3',
          duration: '180分钟',
          exercises: [
            {
              id: 1,
              title: '探索性数据分析',
              description: '对给定数据集进行全面的探索性分析',
              type: '编程',
              points: 25
            },
            {
              id: 2,
              title: '预测模型构建',
              description: '构建并评估一个预测模型',
              type: '编程',
              points: 30
            }
          ],
          resources: [
            {
              id: 1,
              name: '进阶项目数据集',
              type: 'CSV',
              url: 'https://example.com/advanced-data.csv'
            },
            {
              id: 2,
              name: '统计分析指南',
              type: 'PDF',
              url: 'https://example.com/statistics-guide.pdf'
            }
          ]
        });
      } else if (lessonId === '4') {
        // 项目8-10：高级项目
        setLesson({
          id: 4,
          title: '项目8-10：高级项目',
          content: `# 高级项目

## 项目8：机器学习进阶
- 决策树和随机森林
- 支持向量机
- 梯度提升算法

## 项目9：深度学习入门
- 神经网络基础
- 卷积神经网络
- 循环神经网络

## 项目10：自然语言处理
- 文本预处理
- 词嵌入
- 情感分析`,
          video_url: 'https://example.com/video4',
          duration: '210分钟',
          exercises: [
            {
              id: 1,
              title: '机器学习模型构建',
              description: '构建并调优一个机器学习模型',
              type: '编程',
              points: 35
            },
            {
              id: 2,
              title: '深度学习模型构建',
              description: '构建一个简单的深度学习模型',
              type: '编程',
              points: 40
            }
          ],
          resources: [
            {
              id: 1,
              name: '高级项目数据集',
              type: 'ZIP',
              url: 'https://example.com/advanced-projects.zip'
            },
            {
              id: 2,
              name: '机器学习算法指南',
              type: 'PDF',
              url: 'https://example.com/ml-guide.pdf'
            }
          ]
        });
      } else if (lessonId === '5') {
        // AI陪练系统
        setLesson({
          id: 5,
          title: 'AI陪练系统',
          content: `# AI陪练系统

## 系统介绍
AI陪练系统是本平台的核心功能，通过AI技术帮助你解决学习过程中的问题。

## 使用方法
1. 遇到问题时，点击"思路点拨"按钮
2. 代码报错时，点击"代码纠错"按钮
3. 完成练习后，点击"AI评估"按钮

## 注意事项
- AI只是辅助工具，不要完全依赖
- 先自己思考，再使用AI
- 理解AI的建议，不要盲目复制

## 最佳实践
- 清晰描述你的问题
- 提供足够的上下文
- 尝试理解AI的思路和方法`,
          video_url: 'https://example.com/video5',
          duration: '60分钟',
          exercises: [
            {
              id: 1,
              title: 'AI陪练使用练习',
              description: '使用AI陪练解决一个编程问题',
              type: '实践',
              points: 15
            }
          ],
          resources: [
            {
              id: 1,
              name: 'AI陪练使用指南',
              type: 'PDF',
              url: 'https://example.com/ai-guide.pdf'
            }
          ]
        });
      } else if (lessonId === '6') {
        // 综合项目实战
        setLesson({
          id: 6,
          title: '综合项目实战',
          content: `# 综合项目实战

## 项目目标
完成一个完整的数据分析项目，应用所学的所有技能。

## 项目要求
1. 选择一个感兴趣的数据集
2. 进行全面的数据分析
3. 构建预测模型（如果适用）
4. 创建数据可视化
5. 撰写分析报告

## 评估标准
- 数据处理的完整性
- 分析的深度和广度
- 模型的性能
- 可视化的质量
- 报告的清晰度和专业度

## 提交要求
- 完整的代码
- 分析报告
- 可视化图表
- 模型评估结果`,
          video_url: 'https://example.com/video6',
          duration: '150分钟',
          exercises: [
            {
              id: 1,
              title: '综合项目',
              description: '完成一个完整的数据分析项目',
              type: '项目',
              points: 100
            }
          ],
          resources: [
            {
              id: 1,
              name: '综合项目数据集',
              type: 'ZIP',
              url: 'https://example.com/final-project.zip'
            },
            {
              id: 2,
              name: '项目报告模板',
              type: 'PDF',
              url: 'https://example.com/report-template.pdf'
            }
          ]
        });
      }
    } else {
      // 默认课程：Python基础编程
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
    }
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
                {id === '1' ? (
                  // Python数据分析AI训练平台课程大纲
                  [1, 2, 3, 4, 5, 6].map((num) => (
                    <Link 
                      key={num} 
                      to={`/courses/${id}/lessons/${num}`}
                      className={`flex items-center space-x-2 p-2 rounded-md transition-colors ${parseInt(lessonId) === num ? 'bg-blue-100 text-blue-800' : 'hover:bg-gray-50'}`}
                    >
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold ${parseInt(lessonId) === num ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}>
                        {num}
                      </div>
                      <span className="text-sm">
                        {num === 1 ? '第一天：底层认知模块' :
                         num === 2 ? '项目1-3：过渡项目' :
                         num === 3 ? '项目4-7：进阶项目' :
                         num === 4 ? '项目8-10：高级项目' :
                         num === 5 ? 'AI陪练系统' :
                         '综合项目实战'}
                      </span>
                    </Link>
                  ))
                ) : (
                  // 默认课程大纲
                  [1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
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
                  ))
                )}
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
                  {lesson.exercises.length > 0 ? (
                    <div className="bg-gray-50 p-4 rounded-md">
                      <h3 className="font-semibold mb-2">{lesson.exercises[0].title}</h3>
                      <p className="text-gray-600 mb-4">{lesson.exercises[0].description}</p>
                      {lesson.exercises[0].type === '编程' && (
                        <>
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
                        </>
                      )}
                      {lesson.exercises[0].type !== '编程' && (
                        <div className="p-4 bg-blue-50 rounded-md">
                          <p className="text-blue-800">{lesson.exercises[0].type}类型练习，请在课程中完成。</p>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="bg-gray-50 p-4 rounded-md">
                      <p className="text-gray-600">本课时暂无练习</p>
                    </div>
                  )}
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