import { Link } from 'react-router-dom';
import { Code, Book, FileText, Award, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 平台信息 */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Code className="h-6 w-6 text-blue-400" />
              <span className="text-lg font-bold">Python数据分析平台</span>
            </div>
            <p className="text-gray-400 mb-4">
              专为商务数据分析与应用专业学生设计的在线教育平台，提供系统化的Python数据分析课程和实践机会。
            </p>
          </div>

          {/* 快速链接 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">快速链接</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">首页</Link></li>
              <li><Link to="/courses" className="text-gray-400 hover:text-white transition-colors">课程</Link></li>
              <li><Link to="/practice" className="text-gray-400 hover:text-white transition-colors">练习</Link></li>
              <li><Link to="/assessments" className="text-gray-400 hover:text-white transition-colors">测评</Link></li>
              <li><Link to="/achievements" className="text-gray-400 hover:text-white transition-colors">成就</Link></li>
            </ul>
          </div>

          {/* 联系我们 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">联系我们</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-gray-400">
                <Mail className="h-4 w-4" />
                <span>contact@dataplatform.com</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <Phone className="h-4 w-4" />
                <span>123-456-7890</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <MapPin className="h-4 w-4" />
                <span>北京市海淀区教育科技园区</span>
              </li>
            </ul>
          </div>

          {/* 版权信息 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">关于我们</h3>
            <p className="text-gray-400 mb-4">
              我们致力于为商务数据分析专业学生提供高质量的在线教育资源，帮助学生掌握Python数据分析技能，提升就业竞争力。
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Python数据分析平台. 保留所有权利.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;