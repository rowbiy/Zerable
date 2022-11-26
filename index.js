
window.onscroll = function() {
    var t = document.documentElement.scrollTop || document.body.scrollTop;
    var header = document.getElementById("header");
    if( t >= 76 ) {
        header.style.background = "#fff"; 
        header.style.position = "fixed";
        header.style.color = "#000";
        header.children[0].children[0].style.display = 'none'
        header.children[0].children[1].style.display = 'block'
        header.style.boxShadow = '0px 1px 20px 0px rgba(198,198,198,0.3)';
    } else { 
        header.style.position = "absolute"; 
        header.style.background = "transparent";
        header.style.color = "#fff";
        header.children[0].children[0].style.display = 'block'
        header.children[0].children[1].style.display = 'none'
        header.style.boxShadow = 'none';
    }
  }

function setJian() {
    document.querySelector('.top-content').children[0].innerText = top1Text;
    document.querySelector('.top-content').children[1].innerText = top2Text;

    // 服务
    document.querySelector('.service-title').innerText = serviceTitleText;
    document.querySelector('.service-1').children[1].innerText = service1Text;
    document.querySelector('.service-2').children[1].innerText = service2Text;
    document.querySelector('.service-3').children[1].innerText = service3Text;

    // 产品
    document.querySelector('.products-title').innerText = productTitleText;

    document.querySelector('.product-1').children[1].innerHTML = product1Text;
    document.querySelector('.product-1').children[2].style.marginLeft = '20px';
    document.querySelector('.product-1').children[2].innerHTML = '';
    for(let s of product1DetailTexts) {
        const p = document.createElement('p');
        p.innerText = s;
        document.querySelector('.product-1').children[2].appendChild(p);
    }

    document.querySelector('.product-3').children[1].innerHTML = product3Text;
    document.querySelector('.product-3').children[2].innerHTML = '';
    for(let s of product3DetailTexts) {
        const p = document.createElement('p');
        p.innerText = s;
        document.querySelector('.product-3').children[2].appendChild(p);
    }

    document.querySelector('.product-2').children[0].innerHTML = product2Text;
    document.querySelector('.product-2').children[1].innerHTML = '';
    for(let s of product2DetailTexts) {
        const p = document.createElement('p');
        p.innerText = s;
        document.querySelector('.product-2').children[1].appendChild(p);
    }

    // 关于我们
    document.querySelector('.about-us-title').innerHTML = aboutUsText;
    document.querySelector('.about-us-content').innerHTML = aboutUsContext;
    
    // 我们的优势
    document.querySelector('.my-advantage-text').children[0].innerHTML = advantageTitle;

    document.querySelector('.my-1').children[1].children[0].innerHTML = item1Title;
    document.querySelector('.my-1').children[1].children[1].innerHTML = item1Text;

    document.querySelector('.my-2').children[1].children[0].innerHTML = item2Title;
    document.querySelector('.my-2').children[1].children[1].innerHTML = item2Text;

    document.querySelector('.my-3').children[1].children[0].innerHTML = item3Title;
    document.querySelector('.my-3').children[1].children[1].innerHTML = item3Text;

    // 联系我们
    document.querySelector('.contact-us-text').innerHTML = contactUs;
    
    // 菜单
    document.querySelector('.menus').children[0].innerText = '首页';
    document.querySelector('.menus').children[1].innerText = '服务';
    document.querySelector('.menus').children[2].innerText = '产品';
    document.querySelector('.menus').children[3].innerText = '关于我们';
    document.querySelector('.menus').children[4].innerText = '联系我们';
    document.querySelector('.menus').children[5].innerText = '繁体';
    document.querySelector('.menus').children[5].setAttribute('data-info', 'fan');
    if (!document.querySelector('.menus').children[6]) {
        var en = document.createElement('div')
        en.className = 'menu';
        en.setAttribute('data-info', 'en');
        en.innerText = 'EN';
        document.querySelector('.menus').appendChild(en);
    }
}

function setEN() {
    document.querySelector('.top-content').children[0].innerText = top1Text_E;
    document.querySelector('.top-content').children[1].innerText = top2Text_E;

    // 服务
    document.querySelector('.service-title').innerText = serviceTitleText_E;
    document.querySelector('.service-1').children[1].innerText = service1Text_E;
    document.querySelector('.service-2').children[1].innerText = service2Text_E;
    document.querySelector('.service-3').children[1].innerText = service3Text_E;

    // 产品
    document.querySelector('.products-title').innerText = productTitleText_E;

    document.querySelector('.product-1').children[1].innerHTML = product1Text_E;
    document.querySelector('.product-1').children[2].style.marginLeft = 0;
    document.querySelector('.product-1').children[2].innerHTML = '';
    for(let s of product1DetailTexts_E) {
        const p = document.createElement('p');
        p.innerText = s;
        document.querySelector('.product-1').children[2].appendChild(p);
    }

    document.querySelector('.product-3').children[1].innerHTML = product3Text_E;
    document.querySelector('.product-3').children[2].innerHTML = '';
    for(let s of product3DetailTexts_E) {
        const p = document.createElement('p');
        p.innerText = s;
        document.querySelector('.product-3').children[2].appendChild(p);
    }

    document.querySelector('.product-2').children[0].innerHTML = product2Text_E;
    document.querySelector('.product-2').children[1].innerHTML = '';
    for(let s of product2DetailTexts_E) {
        const p = document.createElement('p');
        p.innerText = s;
        document.querySelector('.product-2').children[1].appendChild(p);
    }

    // 关于我们
    document.querySelector('.about-us-title').innerHTML = aboutUsText_E;
    document.querySelector('.about-us-content').innerHTML = aboutUsContext_E;
    
    // 我们的优势
    document.querySelector('.my-advantage-text').children[0].innerHTML = advantageTitle_E;

    document.querySelector('.my-1').children[1].children[0].innerHTML = item1Title_E;
    document.querySelector('.my-1').children[1].children[1].innerHTML = item1Text_E;

    document.querySelector('.my-2').children[1].children[0].innerHTML = item2Title_E;
    document.querySelector('.my-2').children[1].children[1].innerHTML = item2Text_E;

    document.querySelector('.my-3').children[1].children[0].innerHTML = item3Title_E;
    document.querySelector('.my-3').children[1].children[1].innerHTML = item3Text_E;

    // 联系我们
    document.querySelector('.contact-us-text').innerHTML = contactUs_E;
    // 菜单
    document.querySelector('.menus').children[0].innerText = 'Home';
    document.querySelector('.menus').children[1].innerText = 'Services';
    document.querySelector('.menus').children[2].innerText = 'Products';
    document.querySelector('.menus').children[3].innerText = 'About Us';
    document.querySelector('.menus').children[4].innerText = 'Contact';
    document.querySelector('.menus').children[5].innerText = 'ZN';
    document.querySelector('.menus').children[5].setAttribute('data-info', 'jian');
    
    console.log(document.querySelector('.menus').children[6])
    document.querySelector('.menus').children[6].remove();
}

function setFan() {
    document.querySelector('.top-content').children[0].innerText = top1Text_F;
    document.querySelector('.top-content').children[1].innerText = top2Text_F;

    // 服务
    document.querySelector('.service-title').innerText = serviceTitleText_F;
    document.querySelector('.service-1').children[1].innerText = service1Text_F;
    document.querySelector('.service-2').children[1].innerText = service2Text_F;
    document.querySelector('.service-3').children[1].innerText = service3Text_F;

    // 产品
    document.querySelector('.products-title').innerText = productTitleText_F;

    document.querySelector('.product-1').children[1].innerHTML = product1Text_F;
    document.querySelector('.product-1').children[2].style.marginLeft = '20px';
    document.querySelector('.product-1').children[2].innerHTML = '';
    for(let s of product1DetailTexts_F) {
        const p = document.createElement('p');
        p.innerText = s;
        document.querySelector('.product-1').children[2].appendChild(p);
    }

    document.querySelector('.product-3').children[1].innerHTML = product3Text_F;
    document.querySelector('.product-3').children[2].innerHTML = '';
    for(let s of product3DetailTexts_F) {
        const p = document.createElement('p');
        p.innerText = s;
        document.querySelector('.product-3').children[2].appendChild(p);
    }

    document.querySelector('.product-2').children[0].innerHTML = product2Text_F;
    document.querySelector('.product-2').children[1].innerHTML = '';
    for(let s of product2DetailTexts_F) {
        const p = document.createElement('p');
        p.innerText = s;
        document.querySelector('.product-2').children[1].appendChild(p);
    }

    // 关于我们
    document.querySelector('.about-us-title').innerHTML = aboutUsText_F;
    document.querySelector('.about-us-content').innerHTML = aboutUsContext_F;
    
    // 我们的优势
    document.querySelector('.my-advantage-text').children[0].innerHTML = advantageTitle_F;

    document.querySelector('.my-1').children[1].children[0].innerHTML = item1Title_F;
    document.querySelector('.my-1').children[1].children[1].innerHTML = item1Text_F;

    document.querySelector('.my-2').children[1].children[0].innerHTML = item2Title_F;
    document.querySelector('.my-2').children[1].children[1].innerHTML = item2Text_F;

    document.querySelector('.my-3').children[1].children[0].innerHTML = item3Title_F;
    document.querySelector('.my-3').children[1].children[1].innerHTML = item3Text_F;

    // 联系我们
    document.querySelector('.contact-us-text').innerHTML = contactUs_F;
    // 菜单
    document.querySelector('.menus').children[0].innerText = '首頁';
    document.querySelector('.menus').children[1].innerText = '服務';
    document.querySelector('.menus').children[2].innerText = '產品';
    document.querySelector('.menus').children[3].innerText = '关於我們';
    document.querySelector('.menus').children[4].innerText = '聯系我們';
    document.querySelector('.menus').children[5].innerText = '簡體';
    document.querySelector('.menus').children[5].setAttribute('data-info', 'jian');
}

document.querySelector('.menus').addEventListener('click', function(e) {
    var info = e.target.getAttribute('data-info')
    if (info.indexOf('#') >= 0) {
        scrollTo(info)
    } else if (info === 'fan') {
        setFan();
    } else if (info === 'jian') {
        setJian();
    } else if (info === 'en') {
        setEN();
    } else if (info === 'home') {
        // document.body.scrollTo(0, 0);
        // document.body.style.transition = 'all 1s ease-in-out';
        scrollTo('#view-flag');
    }
})

function scrollTo(id) {
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
}

var top1Text = '赋能虚拟货币的 合规化应用';
var top1Text_F = '賦能虛擬貨幣的合規化應用';
var top1Text_E = 'Web3\n of KYT & AML';

var top2Text = '掌握链上监管，提供情景化和有洞察的分析';
var top2Text_F = '掌握鏈上監管，提供情景化和有洞察的分析';
var top2Text_E = 'Empower On-chain Regulation,\n Deliver Contextualized and Insightful Analysis';

var serviceTitleText = '服务'
var serviceTitleText_F = '服務'
var serviceTitleText_E = 'Service'

var service1Text = '可疑虚拟货币交易分析'
var service1Text_F = '可疑虛擬貨幣交易分析'
var service1Text_E = 'KYT & Suspicious\n Crypto Transaction Analysis'

var service2Text = '可疑洗钱线索发现和预警'
var service2Text_F = '可疑洗錢線索發現和預警'
var service2Text_E = 'Suspicious ML Activities\n Discovery and Monitoring'

var service3Text = '虚拟资产追踪溯源和调查取证服务'
var service3Text_F = '虛擬資產追蹤溯源和調查取證服務'
var service3Text_E = 'Crypto Asset Tracking and\n Forensic Investigation Services'


var productTitleText = '产品'
var productTitleText_F = '産品'
var productTitleText_E = 'Products'

var product1Text = '虚拟资产地址风控API'
var product1Text_F = '虛擬資產地址風控API'
var product1Text_E = 'Zerable On-Chain Compliance API'

var product1DetailTexts = [
    '中国公安虚拟资产地址黑产名单',
    'OFAC、CFSP虚拟资产地址制裁名单',
    '链上地址标签包括涉及虚拟资产的灰色产业',
    'AML交易分析风控模型',
    'VASP风险评分数据库'
]
var product1DetailTexts_F = [
    '中國公安虛擬資產地址黑產名單',
    'OFAC、CFSP虛擬資產地址制裁名單',
    '鏈上地址標籤包括涉及虛擬資產的灰色產業',
    'AML交易分析風控模型',
    'VASP風險評分數據庫'
]
var product1DetailTexts_E = [
    'Zerable On-Chain Compliance API consists of\n Crypto address blacklist from Chinese Police,',
    'OFAC sanctions list, EU sanctions list, the UK sanctions list,\n database of VASP risk profiles',
    'Billions of labels that includes mixers, online casinos, and scam.'
]

var product2Text = '虚拟资产交易行为追踪及预警平台'
var product2Text_F = '虛擬資產交易行為追蹤及預警平台'
var product2Text_E = 'Zerable KYT'

var product2DetailTexts = [
    '原点KYT平台提供能力如下：',
    '虚拟资产地址及交易监控',
    '具风险的虚拟资产地址及交易分析',
    '为可疑链上活动提供实时预警',
    '面对虚拟资产服务提供商 (VASP) 的风险画像评估'
]

var product2DetailTexts_F = [
    '原點KYT平台提供能力如下：',
    '虛擬資產地址及交易監控​',
    '具風險的虛擬資產地址及交易分析​',
    '為可疑鏈上活動提供實時預警',
    '面對虛擬資產服務提供商 (VASP) 的風險畫像評估'
]

var product2DetailTexts_E = [
    'Zerable Crypto Asset KYT Platform provides capabilities such as\n monitoring crypto asset addresses & transactions',
    'Identifying risky addresses & transactions​',
    'Sending alerts of suspicious on-chain transactions​',
    'And identifying the risk profile of the Virtual Asset Service Providers(VASPs).'
]

var product3Text = '原点线上骗局举报平台'
var product3Text_F = '原點線上騙局舉報平台'
var product3Text_E = 'Zero Scam'

var product3DetailTexts = [
    '原点科技提供线上渠道让民众举报线上骗局，目的是让民众预防可疑骗局以及申请协助虚拟资产维权。提供：',
    '资金追踪：追踪资金转移链路，并及时联系受损资金流入平台',
    '整理证据：收集并整理欺诈者的宣传话术、网站链接、涉案APP本体及使用记录、资金转账记录等',
    '寻求立案：协助受害人整理涉案材料并连接所在管辖区报案'
]
var product3DetailTexts_F = [
    '原點科技提供線上渠道讓民眾舉報線上騙局，目的是讓民眾預防可疑騙局以及申請協助虛擬資產維權。提供：​',
    '資金追蹤：追蹤資金轉移鏈路，並及時聯繫受損資金流入平台',
    '整理證據：收集並整理欺詐者的宣傳話術、網站鏈接、涉案APP本體及使用記錄、資金轉賬記錄等​',
    '尋求立案：協助受害人整理涉案材料並連接所在管轄區報案'
]

var product3DetailTexts_E = [
    'Zero Scam is a tool for people to report online scams',
    'Zerable would help for tracking the fund flows​',
    'Organising information provided by victims​',
    'Filing a case and providing on-chain clues for the law enforcement authorities. (Currently for China)'
]

var aboutUsText = '关于我们';
var aboutUsText_F = '关於我們';
var aboutUsText_E = 'About Us';

var aboutUsContext = '原点科技是一家专注区块链数据服务和合规化的公司，于2021年成立于香港。创始团队来自阿里巴巴、美团、红杉系独角兽和全球顶级高校UC Berkeley等。团队均有8年以上互联网企业产品、大数据和人工智能领域从业经验。原点科技的使命是“赋能区块链上监管”，提供一站式链上数据产品和服务以解决政府、虚拟资产服务商和传统金融机构针对虚拟资产合规化的问题。'
var aboutUsContext_F = '原點科技是一家專注區塊鏈數據服務和合規化的公司，於2021年成立於香港。創始團隊來自阿里巴巴、美團、紅杉系獨角獸和全球頂級高校UC Berkeley等。團隊均有8年以上互聯網企業產品、大數據和人工智能領域從業經驗。原點科技的使命是「賦能區塊鏈上監管」，提供一站式鏈上數據產品和服務以解決政府、虛擬資產服務商和傳統金融機構針對虛擬資產合規化的問題。'
var aboutUsContext_E = 'Zerable is a global blockchain data service and compliance company in Hong Kong. Co-founded by a team of product executives and AI experts from worldwide internet companies such as Alibaba, Meituan, Sequoia Capital portfolio companies. With the “Empowering On-Chain Regulation” mission, Zerable provides integrated blockchain data products and services to serve government, crypto service providers and financial institutions.'


var advantageTitle = '我们的优势';
var advantageTitle_F = '我們的優勢';
var advantageTitle_E = 'Our Advantages';

var item1Title = '场景经验'
var item1Title_F = '場景經驗'
var item1Title_E = 'Experience'

var item1Text = '熟悉跨境贸易场景，了解物流、资金流和信息流'
var item1Text_F = '熟悉跨境貿易場景，了解物流、資金流和信息流'
var item1Text_E = 'Comprehend the international trade scenarios. Familiar with fund flow, logistics flow, and information flow.'

var item2Title = '技术'
var item2Title_F = '技術'
var item2Title_E = 'Technology'

var item2Text = '使用业界最先进的人工智能和机器学习抓住加密货币洗钱'
var item2Text_F = '使用業界最先進的人工智能和機器學習抓住加密貨幣洗錢'
var item2Text_E = 'Seize crypto money laundering with the industry’s most sophisticated AI and machine learning.'


var item3Title = '连接'
var item3Title_F = '連接'
var item3Title_E = 'Connection'

var item3Text = '使用业界最先进的人工智能和机器学习抓住加密货币洗钱'
var item3Text_F = '与亚洲区块链生态互通'
var item3Text_E = 'Interconnect with blockchain ecosystem.'

var contactUs = '联系我们'
var contactUs_F = '聯系我們'
var contactUs_E = 'Contact Us'



setJian();
document.querySelector('.cur-year').innerText = new Date().getFullYear();
