import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FileText, Clock, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';

const AssessmentDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [assessment, setAssessment] = useState<any>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<any[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    // 模拟测评数据
    setAssessment({
      id: 1,
      title: 'Python基础编程测试',
      description: '测试Python基础编程知识，包括语法、数据类型、控制流等',
      course: 'Python基础编程',
      duration: 60,
      questionCount: 5,
      points: 100,
      completed: false,
      score: null,
      questions: [
        {
          id: 1,
          question: 'Python中，以下哪种数据类型是不可变的？',
          options: ['列表', '字典', '元组', '集合'],
          correctAnswer: 2
        },
        {
          id: 2,
          question: '以下哪个关键字用于定义函数？',
          options: ['function', 'def', 'func', 'define'],
          correctAnswer: 1
        },
        {
          id: 3,
          question: 'Python中，用于终止循环的关键字是？',
          options: ['break', 'exit', 'stop', 'end'],
          correctAnswer: 0
        },
        {
          id: 4,
          question: '以下哪个库用于数据可视化？',
          options: ['numpy', 'pandas', 'matplotlib', 'scikit-learn'],
          correctAnswer: 2
        },
        {
          id: 5,
          question: 'Python中，如何注释一行代码？',
          options: ['//', '/* */', '#', '--'],
          correctAnswer: 2
        }
      ]
    });

    // 初始化答案数组
    setAnswers(new Array(5).fill(null));
  }, [id]);

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answerIndex;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < assessment.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    // 计算得分
    let totalScore = 0;
    const pointsPerQuestion = assessment.points / assessment.questions.length;
    answers.forEach((answer, index) => {
      if (answer === assessment.questions[index].correctAnswer) {
        totalScore += pointsPerQuestion;
      }
    });
    setScore(Math.round(totalScore));
    setSubmitted(true);
  };

  if (!assessment) {
    return <div className="container mx-auto px-4 py-16">加载中...</div>;
  }

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center space-x-2 mb-8">
          <Link to="/assessments" className="flex items-center space-x-1 text-blue-600 hover:text-blue-800">
            <ChevronLeft className="h-5 w-5" />
            <span>返回测评列表</span>
          </Link>
        </div>

        {!submitted ? (
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold">{assessment.title}</h1>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-gray-600" />
                  <span>{assessment.duration} 分钟</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="font-semibold">{currentQuestion + 1}/{assessment.questions.length}</span>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-lg font-semibold mb-4">问题 {currentQuestion + 1}</h2>
              <p className="text-gray-800 mb-6">{assessment.questions[currentQuestion].question}</p>
              <div className="space-y-3">
                {assessment.questions[currentQuestion].options.map((option: string, index: number) => (
                  <div key={index}>
                    <button
                      onClick={() => handleAnswerSelect(index)}
                      className={`w-full text-left p-4 border rounded-md transition-colors ${answers[currentQuestion] === index ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-300'}`}
                    >
                      <span className="font-semibold mr-2">{String.fromCharCode(65 + index)}.</span>
                      {option}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-between">
              <button
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
                className="px-6 py-2 border border-gray-300 rounded-md font-semibold hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                上一题
              </button>
              {currentQuestion === assessment.questions.length - 1 ? (
                <button
                  onClick={handleSubmit}
                  className="px-6 py-2 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition-colors"
                >
                  提交测评
                </button>
              ) : (
                <button
                  onClick={handleNext}
                  className="px-6 py-2 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition-colors"
                >
                  下一题
                </button>
              )}
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-green-100 rounded-full mb-4">
                <CheckCircle className="h-12 w-12 text-green-600" />
              </div>
              <h1 className="text-2xl font-bold mb-2">测评完成！</h1>
              <p className="text-gray-600 mb-4">你的得分：{score}/{assessment.points}</p>
              <div className="w-full bg-gray-200 rounded-full h-4 mb-6">
                <div 
                  className="bg-blue-600 h-4 rounded-full" 
                  style={{ width: `${(score / assessment.points) * 100}%` }}
                ></div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">测评结果</h2>
              <div className="space-y-6">
                {assessment.questions.map((question: any, index: number) => (
                  <div key={question.id} className="p-4 border rounded-md">
                    <h3 className="font-semibold mb-2">问题 {index + 1}: {question.question}</h3>
                    <div className="space-y-2">
                      {question.options.map((option: string, optIndex: number) => (
                        <div key={optIndex} className={`flex items-center space-x-2 ${optIndex === question.correctAnswer ? 'text-green-600' : optIndex === answers[index] && optIndex !== question.correctAnswer ? 'text-red-600' : 'text-gray-600'}`}>
                          <span>{String.fromCharCode(65 + optIndex)}.</span>
                          <span>{option}</span>
                          {optIndex === question.correctAnswer && <span className="ml-2 text-sm font-semibold">（正确答案）</span>}
                          {optIndex === answers[index] && optIndex !== question.correctAnswer && <span className="ml-2 text-sm font-semibold">（你的答案）</span>}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center">
              <Link to="/assessments" className="px-6 py-2 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition-colors">
                返回测评列表
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AssessmentDetail;