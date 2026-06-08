export interface PandasProject {
  id: number;
  title: string;
  description: string;
  difficulty: '入门' | '进阶' | '高级';
  duration: string;
  tags: string[];
  objectives: string[];
  initialCode: string;
  tasks: {
    id: number;
    title: string;
    description: string;
    hint?: string;
  }[];
}

export const pandasProjects: PandasProject[] = [
  {
    id: 1,
    title: "电商数据分析综合实战",
    description: "从销售基础分析到客户行为挖掘，再到销售预测的完整电商数据分析流程",
    difficulty: "进阶",
    duration: "3小时",
    tags: ["电商分析", "销售数据", "客户行为", "销售预测"],
    objectives: [
      "掌握电商销售数据基础分析",
      "学习客户行为分析与RFM模型",
      "理解销售预测与时间序列分析",
      "综合应用数据分析技能"
    ],
    initialCode: `import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from datetime import datetime, timedelta

# 设置随机种子
np.random.seed(42)

# ==================== 1. 创建销售数据 ====================
dates = pd.date_range('2024-01-01', periods=180, freq='D')
products = ['手机', '电脑', '平板', '耳机', '充电器', '键盘', '鼠标']
categories = ['电子设备', '电子设备', '电子设备', '配件', '配件', '配件', '配件']
prices = [2999, 5999, 1999, 299, 99, 199, 129]

sales_data = []
for date in dates:
    for i, product in enumerate(products):
        base_sales = np.random.randint(50, 200)
        seasonal = int(20 * np.sin(2 * np.pi * dates.get_loc(date) / 30))
        sales = max(10, base_sales + seasonal)
        sales_data.append({
            '日期': date,
            '产品': product,
            '类别': categories[i],
            '销量': sales,
            '单价': prices[i]
        })

sales_df = pd.DataFrame(sales_data)

# ==================== 2. 创建客户数据 ====================
customers = [f'客户{i}' for i in range(1, 201)]
customer_data = []

for customer in customers:
    num_purchases = np.random.poisson(5)
    for _ in range(num_purchases):
        days_ago = np.random.randint(0, 180)
        purchase_date = datetime.now() - timedelta(days=days_ago)
        amount = np.random.randint(100, 8000)
        customer_data.append({
            '客户ID': customer,
            '购买日期': purchase_date,
            '金额': amount,
            '产品类别': np.random.choice(products)
        })

customers_df = pd.DataFrame(customer_data)

print("=== 电商数据分析综合实战 ===")
print("\\n1. 销售数据（前5条）:")
print(sales_df.head())
print(f"\\n销售数据规模: {sales_df.shape}")
print("\\n2. 客户数据（前5条）:")
print(customers_df.head())
print(f"\\n客户数据规模: {customers_df.shape}")`,
    tasks: [
      {
        id: 1,
        title: "销售基础分析",
        description: "分析销售总额、产品销量排行、类别占比",
        hint: "计算销售额 = 销量 * 单价，使用groupby和agg"
      },
      {
        id: 2,
        title: "时间趋势分析",
        description: "分析月度销量趋势，识别销售规律",
        hint: "按月份分组，计算月度销售额"
      },
      {
        id: 3,
        title: "客户RFM分析",
        description: "计算客户的最近购买时间、购买频率、金额",
        hint: "按客户ID分组，聚合计算RFM指标"
      },
      {
        id: 4,
        title: "客户分群",
        description: "根据RFM指标对客户进行价值分群",
        hint: "使用qcut()进行分位数分组"
      },
      {
        id: 5,
        title: "销售预测",
        description: "使用移动平均和趋势分析进行销量预测",
        hint: "创建时间特征，分析趋势和季节性"
      }
    ]
  },
  {
    id: 2,
    title: "数据清洗与预处理",
    description: "学习处理缺失值、异常值、重复数据等数据清洗技术",
    difficulty: "入门",
    duration: "1小时",
    tags: ["数据清洗", "缺失值", "异常值"],
    objectives: [
      "识别和处理缺失值",
      "检测和处理异常值",
      "删除重复数据",
      "数据类型转换"
    ],
    initialCode: `import pandas as pd
import numpy as np

# 创建包含缺失值和异常值的数据
np.random.seed(42)
data = {
    '姓名': ['张三', '李四', '王五', '赵六', '钱七', None, '孙八', '周九', '吴十', '郑十一'],
    '年龄': [25, 30, 35, 150, 40, 45, 50, 28, 32, -5],
    '收入': [15000, 20000, 18000, None, 22000, 25000, 28000, 17000, 19000, 1000000],
    '部门': ['技术', '销售', '技术', '市场', '销售', '技术', '市场', '技术', '销售', '技术']
}

df = pd.DataFrame(data)

print("原始数据:")
print(df)`,
    tasks: [
      {
        id: 1,
        title: "检测缺失值",
        description: "查看数据中有哪些缺失值",
        hint: "使用isnull()和sum()方法"
      },
      {
        id: 2,
        title: "处理缺失值",
        description: "合理填充或删除缺失值",
        hint: "可以使用fillna()或dropna()"
      },
      {
        id: 3,
        title: "处理异常值",
        description: "识别并处理年龄和收入中的异常值",
        hint: "使用描述性统计或箱线图方法"
      }
    ]
  },
  {
    id: 3,
    title: "股票数据分析与可视化",
    description: "分析股票数据，学习时间序列处理和数据可视化",
    difficulty: "进阶",
    duration: "1.5小时",
    tags: ["时间序列", "数据可视化", "股票分析"],
    objectives: [
      "处理时间序列数据",
      "计算移动平均线",
      "绘制K线图思想",
      "分析收益率"
    ],
    initialCode: `import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

# 创建模拟股票数据
np.random.seed(42)
dates = pd.date_range('2024-01-01', periods=100, freq='D')
base_price = 100
prices = base_price + np.cumsum(np.random.randn(100) * 2)

data = {
    '日期': dates,
    '开盘价': prices - np.random.rand(100) * 1,
    '最高价': prices + np.random.rand(100) * 3,
    '最低价': prices - np.random.rand(100) * 3,
    '收盘价': prices + np.random.rand(100) * 1,
    '成交量': np.random.randint(1000000, 10000000, 100)
}

df = pd.DataFrame(data)
df.set_index('日期', inplace=True)

print("股票数据:")
print(df.head())`,
    tasks: [
      {
        id: 1,
        title: "计算每日收益率",
        description: "计算股票的每日收益率",
        hint: "使用pct_change()方法"
      },
      {
        id: 2,
        title: "计算移动平均线",
        description: "计算5日和20日移动平均线",
        hint: "使用rolling()和mean()"
      },
      {
        id: 3,
        title: "绘制价格走势图",
        description: "绘制收盘价和移动平均线的图表",
        hint: "使用matplotlib的plot方法"
      }
    ]
  },
  {
    id: 4,
    title: "客户行为分析",
    description: "分析电商客户购买行为，进行用户分群和RFM分析",
    difficulty: "进阶",
    duration: "1.5小时",
    tags: ["用户分析", "RFM", "数据分组"],
    objectives: [
      "理解RFM分析模型",
      "学习数据分组和聚合",
      "用户分群分析",
      "计算用户生命周期价值"
    ],
    initialCode: `import pandas as pd
import numpy as np
from datetime import datetime, timedelta

# 创建客户购买数据
np.random.seed(42)
customers = [f'客户{i}' for i in range(1, 101)]
data = []

for customer in customers:
    num_purchases = np.random.randint(1, 20)
    for _ in range(num_purchases):
        days_ago = np.random.randint(0, 365)
        date = datetime.now() - timedelta(days=days_ago)
        amount = np.random.randint(100, 10000)
        data.append({
            '客户ID': customer,
            '购买日期': date,
            '金额': amount,
            '产品类别': np.random.choice(['电子产品', '服装', '食品', '家居', '其他'])
        })

df = pd.DataFrame(data)

print("客户购买数据:")
print(df.head())
print(f"\\n总记录数: {len(df)}")`,
    tasks: [
      {
        id: 1,
        title: "计算RFM指标",
        description: "计算每个客户的最近购买时间、购买频率、购买金额",
        hint: "使用groupby和agg方法"
      },
      {
        id: 2,
        title: "客户分群",
        description: "根据RFM指标对客户进行分群",
        hint: "使用qcut()进行分位数分组"
      },
      {
        id: 3,
        title: "分析客户价值",
        description: "统计不同客户群的贡献",
        hint: "分析各组的平均消费金额和频次"
      }
    ]
  },
  {
    id: 5,
    title: "产品销售预测",
    description: "使用统计方法进行产品销量预测，学习特征工程",
    difficulty: "进阶",
    duration: "1.5小时",
    tags: ["预测", "特征工程", "时间序列"],
    objectives: [
      "创建时间特征",
      "构建预测模型基础",
      "理解趋势和季节性",
      "验证预测效果"
    ],
    initialCode: `import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

# 创建时间序列销售数据
np.random.seed(42)
dates = pd.date_range('2023-01-01', periods=365, freq='D')

# 基础趋势 + 季节性 + 随机噪声
base = 100
trend = np.linspace(0, 50, 365)
seasonal = 30 * np.sin(2 * np.pi * np.arange(365) / 30)  # 月度周期
noise = np.random.randn(365) * 10

sales = base + trend + seasonal + noise

df = pd.DataFrame({
    '日期': dates,
    '销量': sales.astype(int)
})

print("销售数据:")
print(df.head())
print(df.tail())`,
    tasks: [
      {
        id: 1,
        title: "创建时间特征",
        description: "从日期中提取年、月、日、星期等特征",
        hint: "使用dt.year, dt.month, dt.weekday等"
      },
      {
        id: 2,
        title: "分析季节性",
        description: "分析月度和星期的销售规律",
        hint: "使用groupby按月份和星期分组"
      },
      {
        id: 3,
        title: "简单预测",
        description: "使用移动平均和趋势外推进行预测",
        hint: "使用趋势拟合方法"
      }
    ]
  },
  {
    id: 6,
    title: "多表关联与数据融合",
    description: "学习merge、join、concat等数据表合并操作",
    difficulty: "进阶",
    duration: "1小时",
    tags: ["数据合并", "表关联", "数据融合"],
    objectives: [
      "掌握merge操作",
      "理解不同的连接类型",
      "学习concat和append",
      "处理数据对齐问题"
    ],
    initialCode: `import pandas as pd
import numpy as np

# 创建用户信息表
users = pd.DataFrame({
    '用户ID': [1, 2, 3, 4, 5, 6],
    '姓名': ['张三', '李四', '王五', '赵六', '钱七', '孙八'],
    '年龄': [25, 30, 35, 28, 40, 33],
    '城市': ['北京', '上海', '广州', '深圳', '北京', '上海']
})

# 创建订单表
orders = pd.DataFrame({
    '订单ID': [101, 102, 103, 104, 105, 106, 107],
    '用户ID': [1, 2, 3, 1, 4, 2, 7],
    '商品': ['手机', '电脑', '平板', '耳机', '充电器', '键盘', '鼠标'],
    '金额': [2999, 5999, 1999, 299, 99, 199, 129],
    '日期': ['2024-01-15', '2024-01-16', '2024-01-17', '2024-01-18', '2024-01-19', '2024-01-20', '2024-01-21']
})

# 创建产品类别表
products = pd.DataFrame({
    '商品': ['手机', '电脑', '平板', '耳机', '充电器', '键盘', '鼠标', '显示器'],
    '类别': ['手机', '电脑', '平板', '配件', '配件', '配件', '配件', '配件'],
    '品牌': ['苹果', '苹果', '苹果', '索尼', '小米', '罗技', '罗技', '戴尔']
})

print("用户表:")
print(users)
print("\\n订单表:")
print(orders)
print("\\n产品表:")
print(products)`,
    tasks: [
      {
        id: 1,
        title: "关联用户和订单",
        description: "合并用户信息和订单数据",
        hint: "使用merge()方法"
      },
      {
        id: 2,
        title: "添加产品类别信息",
        description: "将产品类别信息加入到订单中",
        hint: "再次使用merge"
      },
      {
        id: 3,
        title: "统计分析",
        description: "统计每个城市、每个类别的销售情况",
        hint: "使用groupby进行多维度统计"
      }
    ]
  },
  {
    id: 7,
    title: "A/B测试数据分析",
    description: "学习如何分析A/B测试结果，进行统计显著性检验",
    difficulty: "高级",
    duration: "2小时",
    tags: ["A/B测试", "统计检验", "实验分析"],
    objectives: [
      "理解A/B测试原理",
      "进行假设检验",
      "计算p值和置信区间",
      "分析实验结果"
    ],
    initialCode: `import pandas as pd
import numpy as np
from scipy import stats

# 创建A/B测试数据
np.random.seed(42)

# A组（对照组）
n_a = 1000
conversions_a = np.random.binomial(1, 0.1, n_a)

# B组（实验组）
n_b = 1000
conversions_b = np.random.binomial(1, 0.12, n_b)

df_a = pd.DataFrame({
    '组别': ['A'] * n_a,
    '转化': conversions_a,
    '停留时间': np.random.normal(120, 30, n_a)
})

df_b = pd.DataFrame({
    '组别': ['B'] * n_b,
    '转化': conversions_b,
    '停留时间': np.random.normal(135, 35, n_b)
})

df = pd.concat([df_a, df_b], ignore_index=True)

print("A/B测试数据:")
print(df.groupby('组别').agg({'转化': ['mean', 'count', 'sum'], '停留时间': 'mean'}))`,
    tasks: [
      {
        id: 1,
        title: "计算转化率",
        description: "计算A组和B组的转化率",
        hint: "使用groupby和mean()"
      },
      {
        id: 2,
        title: "统计显著性检验",
        description: "使用卡方检验或Z检验判断差异是否显著",
        hint: "使用scipy.stats中的相关函数"
      },
      {
        id: 3,
        title: "分析用户行为",
        description: "分析两组用户停留时间的差异",
        hint: "使用t检验"
      }
    ]
  },
  {
    id: 8,
    title: "文本数据处理与分析",
    description: "使用pandas处理文本数据，学习字符串操作方法",
    difficulty: "高级",
    duration: "1.5小时",
    tags: ["文本处理", "字符串", "数据提取"],
    objectives: [
      "掌握str方法",
      "文本清洗和提取",
      "正则表达式应用",
      "文本统计分析"
    ],
    initialCode: `import pandas as pd
import re

# 创建文本数据
data = {
    '评论ID': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    '评论内容': [
        '这个产品太棒了！非常满意！价格是¥299',
        '不好用，不如预期。物流太慢了',
        '包装很好，物流也快！下次还会购买。价格实惠¥199',
        '质量一般，客服态度好',
        '超级喜欢！！！推荐购买！！！',
        '发货很快，但是有瑕疵',
        '物流：5分，产品：4分，服务：5分',
        '还行吧，中规中矩',
        '非常满意的一次购物！物美价廉！¥159.9',
        '不推荐购买'
    ],
    '评分': [5, 2, 4, 3, 5, 3, 4, 3, 5, 1],
    '日期': ['2024-01-01', '2024-01-02', '2024-01-03', '2024-01-04', '2024-01-05',
             '2024-01-06', '2024-01-07', '2024-01-08', '2024-01-09', '2024-01-10']
}

df = pd.DataFrame(data)

print("评论数据:")
print(df)`,
    tasks: [
      {
        id: 1,
        title: "提取价格信息",
        description: "从评论中提取价格信息",
        hint: "使用正则表达式和str.extract()"
      },
      {
        id: 2,
        title: "情感关键词分析",
        description: "统计正面和负面关键词",
        hint: "使用str.contains()查找关键词"
      },
      {
        id: 3,
        title: "评论长度分析",
        description: "分析评论长度与评分的关系",
        hint: "使用str.len()计算长度"
      }
    ]
  },
  {
    id: 9,
    title: "数据透视表与高级分析",
    description: "使用pivot_table进行复杂的多维数据统计分析",
    difficulty: "高级",
    duration: "1.5小时",
    tags: ["数据透视", "多维分析", "高级聚合"],
    objectives: [
      "掌握pivot_table",
      "多层次索引操作",
      "复杂聚合函数",
      "交叉分析"
    ],
    initialCode: `import pandas as pd
import numpy as np

# 创建销售数据
np.random.seed(42)

regions = ['华东', '华南', '华北', '西南', '西北']
products = ['手机', '电脑', '平板', '耳机', '手表']
years = [2022, 2023, 2024]
quarters = ['Q1', 'Q2', 'Q3', 'Q4']

data = []
for region in regions:
    for product in products:
        for year in years:
            for quarter in quarters:
                sales = np.random.randint(100000, 1000000)
                quantity = np.random.randint(100, 1000)
                profit = sales * np.random.uniform(0.1, 0.3)
                data.append({
                    '地区': region,
                    '产品': product,
                    '年份': year,
                    '季度': quarter,
                    '销售额': sales,
                    '销量': quantity,
                    '利润': profit
                })

df = pd.DataFrame(data)

print("销售数据（前10条）:")
print(df.head(10))
print(f"\\n数据规模: {df.shape}")`,
    tasks: [
      {
        id: 1,
        title: "地区和产品透视",
        description: "创建各地区各产品的销售额透视表",
        hint: "使用pivot_table()"
      },
      {
        id: 2,
        title: "时间趋势分析",
        description: "分析各产品的年度和季度趋势",
        hint: "使用年份和季度作为行或列"
      },
      {
        id: 3,
        title: "利润率分析",
        description: "计算并分析不同维度的利润率",
        hint: "利润率 = 利润 / 销售额"
      }
    ]
  },
  {
    id: 10,
    title: "综合数据分析实战",
    description: "综合运用所学知识，完成一个完整的数据分析项目",
    difficulty: "高级",
    duration: "2小时",
    tags: ["综合实战", "项目实践", "完整分析"],
    objectives: [
      "综合应用pandas技能",
      "完成完整分析流程",
      "数据可视化展示",
      "撰写分析报告"
    ],
    initialCode: `import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

# 创建综合电商数据
np.random.seed(42)

# 生成用户数据
users = pd.DataFrame({
    '用户ID': range(1, 1001),
    '注册日期': pd.date_range('2023-01-01', periods=1000, freq='D'),
    '年龄': np.random.randint(18, 65, 1000),
    '性别': np.random.choice(['男', '女'], 1000, p=[0.52, 0.48]),
    '城市': np.random.choice(['北京', '上海', '广州', '深圳', '杭州', '成都', '武汉', '西安'], 1000)
})

# 生成订单数据
orders = []
for user_id in users['用户ID']:
    num_orders = np.random.poisson(3)
    for _ in range(num_orders):
        order_date = users[users['用户ID'] == user_id]['注册日期'].iloc[0] + pd.Timedelta(days=np.random.randint(1, 365))
        total_amount = np.random.randint(100, 5000)
        orders.append({
            '订单ID': len(orders) + 1,
            '用户ID': user_id,
            '订单日期': order_date,
            '总金额': total_amount,
            '订单状态': np.random.choice(['已完成', '已取消', '退货'], p=[0.85, 0.1, 0.05])
        })

orders_df = pd.DataFrame(orders)

print("用户数据:")
print(users.head())
print(f"\\n订单数据:")
print(orders_df.head())
print(f"\\n订单数: {len(orders_df)}")`,
    tasks: [
      {
        id: 1,
        title: "用户生命周期分析",
        description: "分析用户从注册到现在的生命周期",
        hint: "计算首次和末次购买时间"
      },
      {
        id: 2,
        title: "用户分群画像",
        description: "根据用户行为进行分群并画像",
        hint: "结合用户属性和购买行为"
      },
      {
        id: 3,
        title: "业务洞察报告",
        description: "生成关键业务指标和可视化图表",
        hint: "从多个维度进行分析和可视化"
      }
    ]
  }
];

export default pandasProjects;
