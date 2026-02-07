// @ts-ignore;
import React, { useState, useEffect } from 'react';
// @ts-ignore;
import { ArrowLeft, Calendar, Clock, User, Share2, Heart } from 'lucide-react';
// @ts-ignore;
import { useToast } from '@/components/ui';

import Navigation from '@/components/Navigation';
export default function Article(props) {
  const {
    $w
  } = props;
  const {
    toast
  } = useToast();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [liked, setLiked] = useState(false);
  const articles = [{
    id: 1,
    title: '呼吸道传染病的近距离空气传播机制研究',
    content: `
        <p class="mb-6">呼吸道传染病是全球公共卫生的重大挑战。本研究系统提出了呼吸道传染病的近距离空气传播机制，为疫情防控提供了重要的理论依据。通过实验验证和数值模拟，我们揭示了飞沫和气溶胶在室内环境中的传播规律。</p>
        
        <h2 class="text-2xl font-bold mb-4 mt-8">研究背景</h2>
        <p class="mb-6">新冠疫情的爆发凸显了呼吸道传染病空气传播研究的重要性。传统的飞沫传播和气溶胶传播理论存在诸多争议，亟需建立更加科学、系统的传播机制模型。</p>
        
        <h2 class="text-2xl font-bold mb-4 mt-8">研究方法</h2>
        <p class="mb-6">本研究采用实验与数值模拟相结合的方法，通过高速摄影技术捕捉飞沫运动轨迹，利用计算流体力学（CFD）模拟室内气流场，建立了飞沫蒸发、沉降和扩散的数学模型。</p>
        
        <h2 class="text-2xl font-bold mb-4 mt-8">主要发现</h2>
        <ul class="list-disc pl-6 mb-6 space-y-2">
          <li>近距离（< 1.5米）传播是呼吸道传染病的主要传播途径</li>
          <li>飞沫在空气中迅速蒸发，形成气溶胶，可长时间悬浮</li>
          <li>室内气流模式对飞沫扩散路径有显著影响</li>
          <li>个人通风和物理屏障可有效降低感染风险</li>
        </ul>
        
        <h2 class="text-2xl font-bold mb-4 mt-8">应用价值</h2>
        <p class="mb-6">本研究成果已应用于武汉火神山、雷神山等医院的通风系统设计，为疫情防控提供了科学依据。同时，也为 WHO 指南的制定提供了技术支撑。</p>
        
        <h2 class="text-2xl font-bold mb-4 mt-8">总结</h2>
        <p class="mb-6">本研究为呼吸道传染病的防控提供了新的理论框架和实践指导，对提升公共卫生应急能力具有重要意义。</p>
      `,
    category: '研究论文',
    date: '2025-12-15',
    readTime: '15 分钟',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&h=600&fit=crop',
    author: '刘荔',
    authorAvatar: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=100&h=100&fit=crop',
    authorBio: '清华大学建筑学院长聘副教授'
  }, {
    id: 2,
    title: '武汉火神山医院环境监测与院感防控实践',
    content: `
        <p class="mb-6">在新冠疫情期间，我们对武汉火神山、雷神山、金银潭等多家医院进行了环境监测与院感信息化改造，有效降低了医护感染风险。本文详细介绍了改造方案和实施效果。</p>
        
        <h2 class="text-2xl font-bold mb-4 mt-8">项目背景</h2>
        <p class="mb-6">新冠疫情爆发后，武汉火神山、雷神山医院在极短时间内建成投入使用。由于建设周期短，部分区域的通风系统设计存在优化空间，亟需进行环境监测和改造。</p>
        
        <h2 class="text-2xl font-bold mb-4 mt-8">监测方案</h2>
        <p class="mb-6">我们在医院的关键区域部署了多参数环境监测系统，实时监测温度、湿度、CO2浓度、PM2.5、气溶胶浓度等指标，并通过物联网技术实现数据远程传输和可视化。</p>
        
        <h2 class="text-2xl font-bold mb-4 mt-8">改造措施</h2>
        <ul class="list-disc pl-6 mb-6 space-y-2">
          <li>优化负压病房的气流组织，确保气流从清洁区流向污染区</li>
          <li>增加排风量，提高换气次数，降低病毒浓度</li>
          <li>安装高效过滤器，提高空气净化效率</li>
          <li>建立院感信息化平台，实现实时预警和智能决策</li>
        </ul>
        
        <h2 class="text-2xl font-bold mb-4 mt-8">实施效果</h2>
        <p class="mb-6">改造后，医院环境指标显著改善，医护感染率大幅降低。监测数据显示，病房内气溶胶浓度降低了 60% 以上，为医护人员提供了安全的工作环境。</p>
        
        <h2 class="text-2xl font-bold mb-4 mt-8">总结</h2>
        <p class="mb-6">本项目展示了环境监测与院感防控在疫情防控中的重要作用，为未来应急医疗设施建设提供了宝贵经验。</p>
      `,
    category: '项目成果',
    date: '2025-11-20',
    readTime: '12 分钟',
    image: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=1200&h=600&fit=crop',
    author: '刘荔',
    authorAvatar: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=100&h=100&fit=crop',
    authorBio: '清华大学建筑学院长聘副教授'
  }, {
    id: 3,
    title: '室内空气污染物吸入暴露测量技术',
    content: `
        <p class="mb-6">我们发明了可精细化测量空气污染物黏膜暴露和呼吸道暴露剂量的体外仿生系统，为室内环境健康评估提供了新的技术手段。该技术已应用于多项国家级科研项目。</p>
        
        <h2 class="text-2xl font-bold mb-4 mt-8">技术背景</h2>
        <p class="mb-6">传统的空气污染物暴露评估主要基于环境浓度监测，无法准确反映人体实际吸入剂量。我们开发了体外仿生系统，模拟人体呼吸道的生理结构和功能，实现暴露剂量的精准测量。</p>
        
        <h2 class="text-2xl font-bold mb-4 mt-8">系统设计</h2>
        <p class="mb-6">该系统包括仿生呼吸道模型、粒子收集装置、化学分析模块和数据处理系统。仿生呼吸道模型采用 3D 打印技术制作，精确复制人体呼吸道的几何结构和表面特性。</p>
        
        <h2 class="text-2xl font-bold mb-4 mt-8">技术特点</h2>
        <ol class="list-decimal pl-6 mb-6 space-y-2">
          <li>高精度：可测量纳米级颗粒物的沉积分布</li>
          <li>多参数：同时测量颗粒物浓度、化学成分和生物活性</li>
          <li>实时性：在线监测，实时反馈暴露水平</li>
          <li>可重复：标准化操作，保证结果可靠性</li>
        </ol>
        
        <h2 class="text-2xl font-bold mb-4 mt-8">应用案例</h2>
        <p class="mb-6">该技术已应用于室内装修污染评估、医院环境监测、职业健康评价等多个领域，为环境健康风险评估提供了科学依据。</p>
        
        <h2 class="text-2xl font-bold mb-4 mt-8">总结</h2>
        <p class="mb-6">本技术填补了室内空气污染物暴露评估的技术空白，为环境健康研究提供了强有力的工具支撑。</p>
      `,
    category: '研究论文',
    date: '2025-10-08',
    readTime: '18 分钟',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=1200&h=600&fit=crop',
    author: '刘荔',
    authorAvatar: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=100&h=100&fit=crop',
    authorBio: '清华大学建筑学院长聘副教授'
  }, {
    id: 4,
    title: 'WHO 医院内自然通风控制传染疾病指南解读',
    content: `
        <p class="mb-6">作为世界卫生组织呼吸道病毒经空气传播专家组成员，我参与了 WHO 首部《医院内自然通风控制传染疾病指南》的编写工作。本文对指南的核心内容进行了解读和分析。</p>
        
        <h2 class="text-2xl font-bold mb-4 mt-8">指南背景</h2>
        <p class="mb-6">新冠疫情的全球大流行凸显了医院感染防控的重要性。WHO 组织全球专家编写了首部关于医院内自然通风控制传染疾病的指南，为各国医疗机构提供科学指导。</p>
        
        <h2 class="text-2xl font-bold mb-4 mt-8">核心内容</h2>
        <p class="mb-6">指南系统阐述了自然通风在传染病防控中的作用机制，提出了自然通风的设计原则、评估方法和优化策略，涵盖了从建筑规划到运行维护的全过程。</p>
        
        <h2 class="text-2xl font-bold mb-4 mt-8">关键要点</h2>
        <ul class="list-disc pl-6 mb-6 space-y-2">
          <li>自然通风是控制呼吸道传染病传播的有效手段</li>
          <li>通风量应根据感染风险等级进行差异化设计</li>
          <li>气流组织应避免短路和死角，确保有效换气</li>
          <li>需要建立通风效果的监测和评估机制</li>
        </ul>
        
        <h2 class="text-2xl font-bold mb-4 mt-8">实践建议</h2>
        <p class="mb-6">指南为医疗机构提供了具体的实施建议，包括通风系统的设计参数、运行策略和维护要求，具有很强的可操作性。</p>
        
        <h2 class="text-2xl font-bold mb-4 mt-8">总结</h2>
        <p class="mb-6">本指南的发布标志着医院感染防控进入新阶段，对提升全球公共卫生水平具有重要意义。</p>
      `,
    category: '学术报告',
    date: '2025-09-15',
    readTime: '10 分钟',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=600&fit=crop',
    author: '刘荔',
    authorAvatar: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=100&h=100&fit=crop',
    authorBio: '清华大学建筑学院长聘副教授'
  }, {
    id: 5,
    title: '基于机器视觉的症状与感染行为识别方法',
    content: `
        <p class="mb-6">我们开发了基于机器视觉和听觉的症状与感染行为识别方法，为公共场所的疫情监测提供了智能化解决方案。该方法在多个场景中得到了验证和应用。</p>
        
        <h2 class="text-2xl font-bold mb-4 mt-8">研究动机</h2>
        <p class="mb-6">传统的人工监测方式效率低、成本高，难以满足大规模公共场所的疫情监测需求。我们探索利用人工智能技术，实现症状和感染行为的自动识别。</p>
        
        <h2 class="text-2xl font-bold mb-4 mt-8">技术方案</h2>
        <p class="mb-6">该方法采用深度学习技术，通过摄像头和麦克风采集视频和音频数据，利用卷积神经网络（CNN）和循环神经网络（RNN）进行特征提取和行为识别。</p>
        
        <h2 class="text-2xl font-bold mb-4 mt-8">识别内容</h2>
        <ul class="list-disc pl-6 mb-6 space-y-2">
          <li>咳嗽、打喷嚏等呼吸道症状</li>
          <li>发热、面色异常等体征变化</li>
          <li>佩戴口罩、保持距离等防护行为</li>
          <li>人员聚集、密切接触等风险行为</li>
        </ul>
        
        <h2 class="text-2xl font-bold mb-4 mt-8">应用场景</h2>
        <p class="mb-6">该方法已应用于机场、车站、商场等公共场所，实现了疫情风险的实时监测和预警，为疫情防控提供了技术支撑。</p>
        
        <h2 class="text-2xl font-bold mb-4 mt-8">总结</h2>
        <p class="mb-6">本方法展示了人工智能在公共卫生领域的应用潜力，为疫情监测提供了新的技术手段。</p>
      `,
    category: '研究论文',
    date: '2025-08-22',
    readTime: '14 分钟',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop',
    author: '刘荔',
    authorAvatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop',
    authorBio: '清华大学建筑学院长聘副教授'
  }, {
    id: 6,
    title: '健康建筑课程教学设计与实践',
    content: `
        <p class="mb-6">在清华大学开设的"健康建筑"课程，旨在培养学生对建筑环境与健康关系的理解。本文分享了课程的教学设计理念、实践案例和教学成果。</p>
        
        <h2 class="text-2xl font-bold mb-4 mt-8">课程定位</h2>
        <p class="mb-6">"健康建筑"是面向建筑学、环境工程等专业的研究生课程，旨在培养学生掌握健康建筑的设计原理、评估方法和实践技能，为未来从事健康建筑相关工作奠定基础。</p>
        
        <h2 class="text-2xl font-bold mb-4 mt-8">教学内容</h2>
        <p class="mb-6">课程内容包括：健康建筑的理论基础、室内环境质量评估、建筑防疫设计、健康建筑案例分析等。通过理论讲授、案例研讨、实地考察等多种教学方式，全面提升学生的综合能力。</p>
        
        <h2 class="text-2xl font-bold mb-4 mt-8">教学特色</h2>
        <ul class="list-disc pl-6 mb-6 space-y-2">
          <li>跨学科融合：融合建筑学、医学、环境科学等多学科知识</li>
          <li>实践导向：结合实际项目，培养学生解决实际问题的能力</li>
          <li>国际视野：引入国际前沿研究成果，拓展学生视野</li>
          <li>创新思维：鼓励学生提出创新性的设计方案</li>
        </ul>
        
        <h2 class="text-2xl font-bold mb-4 mt-8">教学成果</h2>
        <p class="mb-6">课程开设以来，学生反馈良好，多篇课程论文在学术会议上发表，部分设计方案在实际项目中得到应用，体现了课程的教学价值。</p>
        
        <h2 class="text-2xl font-bold mb-4 mt-8">总结</h2>
        <p class="mb-6">本课程为健康建筑领域的人才培养提供了新的教学模式，对推动健康建筑学科发展具有重要意义。</p>
      `,
    category: '教学课程',
    date: '2025-07-10',
    readTime: '8 分钟',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&h=600&fit=crop',
    author: '刘荔',
    authorAvatar: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=100&h=100&fit=crop',
    authorBio: '清华大学建筑学院长聘副教授'
  }];
  useEffect(() => {
    const articleId = $w.page.dataset.params.id;
    const foundArticle = articles.find(a => a.id === parseInt(articleId));
    if (foundArticle) {
      setArticle(foundArticle);
    } else {
      toast({
        title: '文章不存在',
        description: '未找到该文章',
        variant: 'destructive'
      });
      $w.utils.navigateTo({
        pageId: 'home',
        params: {}
      });
    }
    setLoading(false);
  }, [$w.page.dataset.params.id]);
  const handleBack = () => {
    $w.utils.navigateBack();
  };
  const handleShare = () => {
    toast({
      title: '分享成功',
      description: '文章链接已复制到剪贴板'
    });
  };
  const handleLike = () => {
    setLiked(!liked);
    toast({
      title: liked ? '已取消点赞' : '点赞成功',
      description: liked ? '已取消对该文章的点赞' : '感谢您的喜欢！'
    });
  };
  if (loading) {
    return <div className="min-h-screen bg-[#faf9f7] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#c9a227] mx-auto mb-4"></div>
          <p className="font-['Merriweather'] text-gray-500">加载中...</p>
        </div>
      </div>;
  }
  if (!article) {
    return null;
  }
  return <div className="min-h-screen bg-[#faf9f7]">
      <Navigation $w={$w} currentPage="article" />
      
      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-6 pt-8">
        <button onClick={handleBack} className="flex items-center gap-2 text-[#2d2d2d] hover:text-[#c9a227] transition-colors font-['Merriweather']">
          <ArrowLeft className="w-5 h-5" />
          返回首页
        </button>
      </div>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-6 py-12">
        <header className="mb-12">
          <span className="inline-block bg-[#c9a227] text-white px-4 py-1 text-sm font-['Merriweather'] mb-6">
            {article.category}
          </span>
          
          <h1 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-6 leading-tight">
            {article.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 font-['Merriweather']">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{article.readTime}</span>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="mb-12 overflow-hidden rounded-lg">
          <img src={article.image} alt={article.title} className="w-full h-auto" />
        </div>

        {/* Article Content */}
        <div className="font-['Merriweather'] prose prose-lg max-w-none text-[#2d2d2d] leading-relaxed" dangerouslySetInnerHTML={{
        __html: article.content
      }} />

        {/* Action Buttons */}
        <div className="flex items-center gap-4 mt-12 pt-8 border-t border-gray-200">
          <button onClick={handleLike} className={`flex items-center gap-2 px-6 py-3 transition-all duration-300 ${liked ? 'bg-[#c9a227] text-white' : 'bg-white text-[#2d2d2d] hover:bg-[#c9a227] hover:text-white'}`}>
            <Heart className={`w-5 h-5 ${liked ? 'fill-current' : ''}`} />
            {liked ? '已点赞' : '点赞'}
          </button>
          
          <button onClick={handleShare} className="flex items-center gap-2 px-6 py-3 bg-white text-[#2d2d2d] hover:bg-[#1a1a1a] hover:text-white transition-all duration-300">
            <Share2 className="w-5 h-5" />
            分享
          </button>
        </div>

        {/* Author Info */}
        <div className="mt-12 p-8 bg-white rounded-lg">
          <div className="flex items-start gap-6">
            <img src={article.authorAvatar} alt={article.author} className="w-20 h-20 rounded-full object-cover" />
            <div>
              <h3 className="font-['Playfair_Display'] text-xl font-bold text-[#1a1a1a] mb-2">
                {article.author}
              </h3>
              <p className="font-['Merriweather'] text-[#2d2d2d] text-sm">
                {article.authorBio}
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] text-white py-12 mt-24">
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