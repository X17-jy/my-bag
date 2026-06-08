import { loadPyodide, PyodideInterface } from 'pyodide';

let pyodide: PyodideInterface | null = null;

export const initPyodide = async () => {
  if (pyodide) return pyodide;

  try {
    console.log('=== LOADING PYODIDE v0.29.4 ===');
    pyodide = await loadPyodide({
      indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.29.4/full/',
    });
    console.log('=== PYODIDE LOADED ===');
    return pyodide;
  } catch (error) {
    console.error('PYODIDE INIT ERROR:', error);
    throw error;
  }
};

export const runPythonCode = async (code: string) => {
  console.log('==== RUNNING CODE ====');
  
  const py = await initPyodide();
  
  try {
    // 加载包
    console.log('Loading packages...');
    await py.loadPackage(['pandas', 'numpy', 'matplotlib']);
    console.log('Packages loaded');
    
    // 通过 globals 安全传递代码
    py.globals.set('user_code', code);
    
    // 执行独立的处理脚本
    const result = await py.runPythonAsync(`
import sys
from io import StringIO, BytesIO
import traceback
import base64

# 捕获输出
_stdout_buf = StringIO()
_stderr_buf = StringIO()
_old_stdout = sys.stdout
_old_stderr = sys.stderr
sys.stdout = _stdout_buf
sys.stderr = _stderr_buf

_plot_data = None

try:
    # 导入必要的包
    import pandas as pd
    import numpy as np
    import matplotlib.pyplot as plt
    print('Packages imported successfully')
    
    # 执行用户代码（通过 globals）
    exec(user_code, globals())
    
    # 检查是否有图表
    try:
        fig = plt.gcf()
        if fig.get_axes():
            buf = BytesIO()
            plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
            buf.seek(0)
            _plot_data = base64.b64encode(buf.read()).decode('utf-8')
            plt.close('all')
    except Exception:
        pass
except Exception as e:
    print(f'Error: {e}')
    print(traceback.format_exc())
finally:
    _output_text = _stdout_buf.getvalue() + _stderr_buf.getvalue()
    sys.stdout = _old_stdout
    sys.stderr = _old_stderr
    _stdout_buf.close()
    _stderr_buf.close()

[_output_text, _plot_data]
`);

    console.log('==== DONE ====');

    return {
      success: true,
      output: result[0] || '执行成功！',
      plotData: result[1],
    };
  } catch (error: any) {
    console.error('RUN ERROR:', error);
    return {
      success: false,
      error: String(error),
    };
  }
};
