// @ts-ignore;
import React, { useState } from 'react';
// @ts-ignore;
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';
// @ts-ignore;
import { useToast } from '@/components/ui';

import Navigation from '@/components/Navigation';
export default function Home(props) {
  const {
    $w
  } = props;
  const {
    toast
  } = useToast();
  const [selectedCategory, setSelectedCategory] = useState('全部');
  const categories = ['全部', '研究论文', '学术报告', '项目成果', '教学课程'];
  const articles = [{
    id: 1,
    title: '呼吸道传染病的近距离空气传播机制研究',
    excerpt: '本研究系统提出了呼吸道传染病的近距离空气传播机制，为疫情防控提供了重要的理论依据。通过实验验证和数值模拟，揭示了飞沫和气溶胶在室内环境中的传播规律...',
    category: '研究论文',
    date: '2025-12-15',
    readTime: '15 分钟',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=500&fit=crop',
    author: '刘荔'
  }, {
    id: 2,
    title: '武汉火神山医院环境监测与院感防控实践',
    excerpt: '在新冠疫情期间，我们对武汉火神山、雷神山、金银潭等多家医院进行了环境监测与院感信息化改造，有效降低了医护感染风险。本文详细介绍了改造方案和实施效果...',
    category: '项目成果',
    date: '2025-11-20',
    readTime: '12 分钟',
    image: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=800&h=500&fit=crop',
    author: '刘荔'
  }, {
    id: 3,
    title: '室内空气污染物吸入暴露测量技术',
    excerpt: '我们发明了可精细化测量空气污染物黏膜暴露和呼吸道暴露剂量的体外仿生系统，为室内环境健康评估提供了新的技术手段。该技术已应用于多项国家级科研项目...',
    category: '研究论文',
    date: '2025-10-08',
    readTime: '18 分钟',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=500&fit=crop',
    author: '刘荔'
  }, {
    id: 4,
    title: 'WHO 医院内自然通风控制传染疾病指南解读',
    excerpt: '作为世界卫生组织呼吸道病毒经空气传播专家组成员，我参与了 WHO 首部《医院内自然通风控制传染疾病指南》的编写工作。本文对指南的核心内容进行了解读和分析...',
    category: '学术报告',
    date: '2025-09-15',
    readTime: '10 分钟',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop',
    author: '刘荔'
  }, {
    id: 5,
    title: '基于机器视觉的症状与感染行为识别方法',
    excerpt: '我们开发了基于机器视觉和听觉的症状与感染行为识别方法，为公共场所的疫情监测提供了智能化解决方案。该方法在多个场景中得到了验证和应用...',
    category: '研究论文',
    date: '2025-08-22',
    readTime: '14 分钟',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
    author: '刘荔'
  }, {
    id: 6,
    title: '健康建筑课程教学设计与实践',
    excerpt: '在清华大学开设的"健康建筑"课程，旨在培养学生对建筑环境与健康关系的理解。本文分享了课程的教学设计理念、实践案例和教学成果...',
    category: '教学课程',
    date: '2025-07-10',
    readTime: '8 分钟',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=500&fit=crop',
    author: '刘荔'
  }];
  const publishedPapers = [{
    year: '2022',
    title: 'Characterization and size distribution of initial droplet concentration discharged from human breathing and speaking',
    journal: 'Indoor and Built Environment',
    authors: 'Pan, S., Xu, C., Francis Yu, C. W., & Liu, L.'
  }, {
    year: '2022',
    title: 'Aerosol Transmission of SARS-CoV-2 in Two Dormitories — Hubei and Shandong Provinces, China, 2020',
    journal: 'China CDC Weekly',
    authors: 'Li, X., Yang, F., Su, Z., Liu, L., & Lin, B.'
  }, {
    year: '2022',
    title: 'Insufficient ventilation led to a probable long-range airborne transmission of SARS-CoV-2 on two buses',
    journal: 'Building and Environment',
    authors: 'Ou, C., Hu, S., Luo, K., Yang, H., Hang, J., Cheng, P., Hai, Z., Xiao, S., Qian, H., Xiao, S., Jing, X., Xie, Z., Ling, H., Liu, L., Gao, L., Deng, Q., Cowling, B. J., & Li, Y.'
  }, {
    year: '2021',
    title: 'Exploring the potentials of personalized ventilation in mitigating airborne infection risk for two closely ranged occupants with different risk assessment models',
    journal: 'Energy and Buildings',
    authors: 'Liu, W., Liu, L., Xu, C., Fu, L., Wang, Y., Nielsen, P. V, & Zhang, C.'
  }, {
    year: '2022',
    title: 'The source control effect of personal protection equipment and physical barrier on short-range airborne transmission',
    journal: 'Building and Environment',
    authors: 'Zhang, C., Nielsen, P. V, Liu, L., Sigmer, E. T., Mikkelsen, S. G., & Jensen, R. L.'
  }, {
    year: '2022',
    title: 'Negative Ion Purifier Effects on Indoor Particulate Dosage to Small Airways',
    journal: 'International Journal of Environmental Research and Public Health',
    authors: 'Duan, M., Wang, L., Meng, X., Fu, L., Wang, Y., Liang, W.*, & Liu, L.*'
  }];
  const filteredArticles = selectedCategory === '全部' ? articles : articles.filter(article => article.category === selectedCategory);
  const handleArticleClick = articleId => {
    $w.utils.navigateTo({
      pageId: 'article',
      params: {
        id: articleId
      }
    });
  };
  const handleCategoryClick = category => {
    setSelectedCategory(category);
    toast({
      title: '分类筛选',
      description: `已切换到「${category}」分类`
    });
  };
  return <div className="min-h-screen bg-[#faf9f7]">
      <Navigation $w={$w} currentPage="home" />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a] opacity-95" />
        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="font-['Playfair_Display'] text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              健康建筑 · 环境健康 · 建筑防疫
            </h1>
            <p className="font-['Merriweather'] text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              清华大学建筑学院长聘副教授刘荔的学术主页。
              专注于呼吸道传染病空气传播机理、健康建筑与环境健康研究。
            </p>
            <div className="flex items-center gap-4">
              <button onClick={() => {
              const featuredArticle = articles[0];
              handleArticleClick(featuredArticle.id);
            }} className="group flex items-center gap-2 bg-[#c9a227] text-white px-6 py-3 rounded-none hover:bg-[#b89120] transition-all duration-300">
                开始阅读
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-wrap gap-3">
          {categories.map(category => <button key={category} onClick={() => handleCategoryClick(category)} className={`px-5 py-2 font-['Merriweather'] text-sm transition-all duration-300 ${selectedCategory === category ? 'bg-[#1a1a1a] text-white' : 'bg-white text-[#2d2d2d] hover:bg-[#1a1a1a] hover:text-white'}`}>
              {category}
            </button>)}
        </div>
      </div>

      {/* Articles Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article, index) => <article key={article.id} onClick={() => handleArticleClick(article.id)} className={`group cursor-pointer bg-white overflow-hidden hover:shadow-2xl transition-all duration-500 ${index % 3 === 1 ? 'md:mt-12' : ''}`}>
              <div className="relative overflow-hidden aspect-[4/3]">
                <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#c9a227] text-white px-3 py-1 text-xs font-['Merriweather']">
                    {article.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h2 className="font-['Playfair_Display'] text-2xl font-bold text-[#1a1a1a] mb-3 group-hover:text-[#c9a227] transition-colors line-clamp-2">
                  {article.title}
                </h2>
                <p className="font-['Merriweather'] text-[#2d2d2d] text-sm leading-relaxed mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-4 text-xs text-gray-500 font-['Merriweather']">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {article.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#c9a227] group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </article>)}
        </div>

        {filteredArticles.length === 0 && <div className="text-center py-16">
            <p className="font-['Merriweather'] text-gray-500 text-lg">
              该分类下暂无文章
            </p>
          </div>}

        {/* Published Papers Section - Only show when Research Papers category is selected */}
        {selectedCategory === '研究论文' && <div className="mt-16">
            <h2 className="font-['Playfair_Display'] text-3xl font-bold text-[#1a1a1a] mb-8">
              已发表文章
            </h2>
            <div className="bg-white p-8">
              <div className="space-y-6">
                {publishedPapers.map((paper, index) => <div key={index} className="border-l-4 border-[#c9a227] pl-6 py-2">
                    <div className="flex items-start gap-4 mb-2">
                      <span className="font-['Playfair_Display'] text-[#c9a227] font-bold text-lg min-w-[60px]">
                        {paper.year}
                      </span>
                      <div className="flex-1">
                        <h3 className="font-['Merriweather'] text-[#1a1a1a] font-semibold mb-2 leading-relaxed">
                          {paper.title}
                        </h3>
                        <p className="font-['Merriweather'] text-[#2d2d2d] text-sm mb-1 italic">
                          {paper.journal}
                        </p>
                        <p className="font-['Merriweather'] text-gray-500 text-xs">
                          {paper.authors}
                        </p>
                      </div>
                    </div>
                  </div>)}
              </div>
            </div>
          </div>}
      </div>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] text-white py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="font-['Playfair_Display'] text-2xl mb-4">刘荔教授学术主页</p>
          <p className="font-['Merriweather'] text-gray-400 text-sm">
            清华大学建筑学院 · 长聘副教授 · 特聘研究员
          </p>
          <p className="font-['Merriweather'] text-gray-500 text-xs mt-2">
            © 2026 All Rights Reserved. liuli_archi@tsinghua.edu.cn
          </p>
        </div>
      </footer>
    </div>;
}