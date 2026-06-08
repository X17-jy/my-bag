import { useState, useEffect, useRef } from 'react';
import { Play, RotateCcw, Copy, CheckCircle, Terminal } from 'lucide-react';
import { initPyodide, runPythonCode } from '../lib/pyodide';

interface CodeEditorProps {
  initialCode?: string;
  onRun?: (result: any) => void;
  height?: string;
}

const CodeEditor = ({ 
  initialCode = '', 
  onRun, 
  height = '400px' 
}: CodeEditorProps) => {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState('');
  const [plotData, setPlotData] = useState<string | null>(null);
  const [running, setRunning] = useState(false);
  const [initializing, setInitializing] = useState(true);
  const [copied, setCopied] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const init = async () => {
      try {
        await initPyodide();
      } catch (error) {
        console.error('Failed to initialize Pyodide:', error);
        setOutput('初始化Python环境失败，请刷新页面重试。');
      } finally {
        setInitializing(false);
      }
    };
    init();
  }, []);

  const handleRun = async () => {
    if (initializing || running) return;
    
    setRunning(true);
    setOutput('');
    setPlotData(null);
    
    try {
      const result = await runPythonCode(code);
      
      if (result.success) {
        setOutput(result.output || '代码执行成功！');
        if (result.plotData) {
          setPlotData(result.plotData);
        }
        if (onRun) onRun(result);
      } else {
        setOutput(`错误: ${result.error}`);
      }
    } catch (error: any) {
      setOutput(`执行异常: ${error.message}`);
    } finally {
      setRunning(false);
    }
  };

  const handleReset = () => {
    setCode(initialCode);
    setOutput('');
    setPlotData(null);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      e.preventDefault();
      handleRun();
    }
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-2">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <span className="text-sm text-gray-600 ml-2">Python Editor</span>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={handleCopy}
            className="flex items-center space-x-1 px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-100 rounded-md transition-colors"
            title="复制代码"
          >
            {copied ? (
              <CheckCircle className="w-4 h-4 text-green-600" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
            <span>{copied ? '已复制' : '复制'}</span>
          </button>
          <button
            onClick={handleReset}
            className="flex items-center space-x-1 px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-100 rounded-md transition-colors"
            title="重置代码"
          >
            <RotateCcw className="w-4 h-4" />
            <span>重置</span>
          </button>
          <button
            onClick={handleRun}
            disabled={initializing || running}
            className="flex items-center space-x-1 px-4 py-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-semibold rounded-md hover:from-blue-700 hover:to-indigo-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Play className="w-4 h-4 fill-current" />
            <span>
              {initializing ? '初始化中...' : running ? '运行中...' : '运行'}
            </span>
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="relative">
          <textarea
            ref={textareaRef}
            value={code}
            onChange={(e) => setCode(e.target.value)}
            onKeyDown={handleKeyDown}
            className="w-full font-mono text-sm p-4 bg-gray-900 text-gray-100 rounded-l-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            style={{ height, tabSize: 4 }}
            placeholder="在这里编写Python代码..."
            spellCheck={false}
          />
          {initializing && (
            <div className="absolute inset-0 bg-gray-900 bg-opacity-80 flex items-center justify-center">
              <div className="text-center">
                <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-500 mx-auto mb-3"></div>
                <p className="text-gray-300">正在初始化Python环境...</p>
              </div>
            </div>
          )}
        </div>
        
        <div className="flex flex-col" style={{ height }}>
          <div className="flex items-center space-x-2 bg-gray-100 px-4 py-2 border border-b-0 border-gray-200 rounded-t-lg">
            <Terminal className="w-4 h-4 text-gray-600" />
            <span className="text-sm text-gray-600 font-medium">输出结果</span>
          </div>
          <div className="flex-1 bg-gray-900 text-green-400 font-mono text-sm p-4 rounded-r-lg border border-t-0 border-gray-700 overflow-auto">
            {(output || plotData) ? (
              <div className="space-y-4">
                {output && (
                  <div className="whitespace-pre-wrap">{output}</div>
                )}
                {plotData && (
                  <div className="bg-white p-4 rounded-lg">
                    <img 
                      src={`data:image/png;base64,${plotData}`} 
                      alt="图表" 
                      className="max-w-full h-auto rounded"
                    />
                  </div>
                )}
              </div>
            ) : (
              <div className="text-gray-500 italic">
                点击"运行"按钮执行代码，结果将显示在这里
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;
