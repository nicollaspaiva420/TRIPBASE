// Dados das ferramentas (placeholder inicial com 5 ferramentas)
const toolsData = [
    {
        "id": 1,
        "name": "Mestre dos Prompts V3",
        "category": "veo-video",
        "categoryName": "VEO-3 / Vídeo / Prompts",
        "description": "Ferramenta especializada em criar prompts otimizados para geração de vídeos com VEO-3",
        "icon": "fas fa-magic",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-6867ddab1eb8819181c9b6aa50ca2d25-mestre-dos-prompts-prompts-para-veo-3-v-3"
    },
    {
        "id": 2,
        "name": "Randall",
        "category": "copywriting",
        "categoryName": "Copywriting / Vendas",
        "description": "Assistente especializado em copywriting e estratégias de vendas para conversão",
        "icon": "fas fa-pen-nib",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-68454dbfadc0819199ae0bab81d81b5d-randall"
    },
    {
        "id": 3,
        "name": "Arquiteto de Infoprodutos",
        "category": "infoprodutos",
        "categoryName": "Infoprodutos",
        "description": "Ferramenta para criação e estruturação de infoprodutos escaláveis e lucrativos",
        "icon": "fas fa-building",
        "type": "free",
        "url": "https://chatgpt.com/g/g-682f539a9d608191ac70889412fe8759/arquiteto-de-infoprodutos-zd-pla"
    },
    {
        "id": 4,
        "name": "Nelson - Reels & Carrosséis",
        "category": "social-media",
        "categoryName": "Social Media",
        "description": "Especialista em criação de conteúdo para Instagram: reels e carrosséis envolventes",
        "icon": "fas fa-camera",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-67bdf36c539c8191bdd2c51288b27f68/nelson-o-especialista-em-reels-e-carrosseis"
    },
    {
        "id": 5,
        "name": "Midjourney V7",
        "category": "design",
        "categoryName": "Design / Imagens",
        "description": "Gerador de prompts fotorrealistas para criação de imagens com Midjourney V7",
        "icon": "fas fa-image",
        "type": "free",
        "url": "https://chatgpt.com/g/g-6MlHy4WPo/romidjourney-v7-photorealistic-image-prompts"
    },
    {
        "id": 6,
        "name": "Mestre dos Prompts V3",
        "category": "veo-video",
        "categoryName": "VEO-3 / Vídeo / Prompts",
        "description": "Ferramenta de IA na categoria de VEO-3 / Vídeo / Prompts.",
        "icon": "fas fa-video",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-"
    },
    {
        "id": 7,
        "name": "VEO 3 Prompt Machine",
        "category": "veo-video",
        "categoryName": "VEO-3 / Vídeo / Prompts",
        "description": "Ferramenta de IA na categoria de VEO-3 / Vídeo / Prompts.",
        "icon": "fas fa-video",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-"
    },
    {
        "id": 8,
        "name": "VEO 3 Flow Text-to-Video",
        "category": "veo-video",
        "categoryName": "VEO-3 / Vídeo / Prompts",
        "description": "Ferramenta de IA na categoria de VEO-3 / Vídeo / Prompts.",
        "icon": "fas fa-video",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-Dfo2YQk0Y-veo-3-Qow-"
    },
    {
        "id": 9,
        "name": "VEO 3 Expert",
        "category": "veo-video",
        "categoryName": "VEO-3 / Vídeo / Prompts",
        "description": "Ferramenta de IA na categoria de VEO-3 / Vídeo / Prompts.",
        "icon": "fas fa-video",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-"
    },
    {
        "id": 10,
        "name": "InQuencer IA VEO-3",
        "category": "veo-video",
        "categoryName": "VEO-3 / Vídeo / Prompts",
        "description": "Ferramenta de IA na categoria de VEO-3 / Vídeo / Prompts.",
        "icon": "fas fa-video",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-"
    },
    {
        "id": 11,
        "name": "PromptVeo Diretor",
        "category": "veo-video",
        "categoryName": "VEO-3 / Vídeo / Prompts",
        "description": "Ferramenta de IA na categoria de VEO-3 / Vídeo / Prompts.",
        "icon": "fas fa-video",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-"
    },
    {
        "id": 12,
        "name": "VEO-3 Assistant",
        "category": "veo-video",
        "categoryName": "VEO-3 / Vídeo / Prompts",
        "description": "Ferramenta de IA na categoria de VEO-3 / Vídeo / Prompts.",
        "icon": "fas fa-video",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-"
    },
    {
        "id": 13,
        "name": "VEO-3 Prompter",
        "category": "veo-video",
        "categoryName": "VEO-3 / Vídeo / Prompts",
        "description": "Ferramenta de IA na categoria de VEO-3 / Vídeo / Prompts.",
        "icon": "fas fa-video",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-"
    },
    {
        "id": 14,
        "name": "VEO-3 AI Video Generator",
        "category": "veo-video",
        "categoryName": "VEO-3 / Vídeo / Prompts",
        "description": "Ferramenta de IA na categoria de VEO-3 / Vídeo / Prompts.",
        "icon": "fas fa-video",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-"
    },
    {
        "id": 15,
        "name": "VEO-3 Pro Gerador",
        "category": "veo-video",
        "categoryName": "VEO-3 / Vídeo / Prompts",
        "description": "Ferramenta de IA na categoria de VEO-3 / Vídeo / Prompts.",
        "icon": "fas fa-video",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-"
    },
    {
        "id": 16,
        "name": "Mestre dos Prompts V2",
        "category": "veo-video",
        "categoryName": "VEO-3 / Vídeo / Prompts",
        "description": "Ferramenta de IA na categoria de VEO-3 / Vídeo / Prompts.",
        "icon": "fas fa-video",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-"
    },
    {
        "id": 17,
        "name": "VEO-3 Roteirizador",
        "category": "veo-video",
        "categoryName": "VEO-3 / Vídeo / Prompts",
        "description": "Ferramenta de IA na categoria de VEO-3 / Vídeo / Prompts.",
        "icon": "fas fa-video",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-"
    },
    {
        "id": 18,
        "name": "Gerador de Prompts para VEO-3",
        "category": "veo-video",
        "categoryName": "VEO-3 / Vídeo / Prompts",
        "description": "Ferramenta de IA na categoria de VEO-3 / Vídeo / Prompts.",
        "icon": "fas fa-video",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-"
    },
    {
        "id": 19,
        "name": "VEO-3 Prompt AI Personagem",
        "category": "veo-video",
        "categoryName": "VEO-3 / Vídeo / Prompts",
        "description": "Ferramenta de IA na categoria de VEO-3 / Vídeo / Prompts.",
        "icon": "fas fa-video",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-"
    },
    {
        "id": 20,
        "name": "VEO-3 Prompt Machine",
        "category": "veo-video",
        "categoryName": "VEO-3 / Vídeo / Prompts",
        "description": "Ferramenta de IA na categoria de VEO-3 / Vídeo / Prompts.",
        "icon": "fas fa-video",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-"
    },
    {
        "id": 21,
        "name": "VEO-3 Roteirista",
        "category": "veo-video",
        "categoryName": "VEO-3 / Vídeo / Prompts",
        "description": "Ferramenta de IA na categoria de VEO-3 / Vídeo / Prompts.",
        "icon": "fas fa-video",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-"
    },
    {
        "id": 22,
        "name": "Prompt VEO-3 Story",
        "category": "veo-video",
        "categoryName": "VEO-3 / Vídeo / Prompts",
        "description": "Ferramenta de IA na categoria de VEO-3 / Vídeo / Prompts.",
        "icon": "fas fa-video",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-"
    },
    {
        "id": 23,
        "name": "VEO-3 Text-to-Video Maker",
        "category": "veo-video",
        "categoryName": "VEO-3 / Vídeo / Prompts",
        "description": "Ferramenta de IA na categoria de VEO-3 / Vídeo / Prompts.",
        "icon": "fas fa-video",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-"
    },
    {
        "id": 24,
        "name": "VEO-3 Flow Prompt",
        "category": "veo-video",
        "categoryName": "VEO-3 / Vídeo / Prompts",
        "description": "Ferramenta de IA na categoria de VEO-3 / Vídeo / Prompts.",
        "icon": "fas fa-video",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-Dfo2YQk0Y-veo-3-Qow-text-to-"
    },
    {
        "id": 25,
        "name": "VEO-3 Expert Prompt",
        "category": "veo-video",
        "categoryName": "VEO-3 / Vídeo / Prompts",
        "description": "Ferramenta de IA na categoria de VEO-3 / Vídeo / Prompts.",
        "icon": "fas fa-video",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-"
    },
    {
        "id": 26,
        "name": "VEO-3 Viral Generator",
        "category": "veo-video",
        "categoryName": "VEO-3 / Vídeo / Prompts",
        "description": "Ferramenta de IA na categoria de VEO-3 / Vídeo / Prompts.",
        "icon": "fas fa-video",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-"
    },
    {
        "id": 27,
        "name": "Prompt VEO-3 Pro",
        "category": "veo-video",
        "categoryName": "VEO-3 / Vídeo / Prompts",
        "description": "Ferramenta de IA na categoria de VEO-3 / Vídeo / Prompts.",
        "icon": "fas fa-video",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-"
    },
    {
        "id": 28,
        "name": "VEO-3 Roteirista 60+",
        "category": "veo-video",
        "categoryName": "VEO-3 / Vídeo / Prompts",
        "description": "Ferramenta de IA na categoria de VEO-3 / Vídeo / Prompts.",
        "icon": "fas fa-video",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-"
    },
    {
        "id": 29,
        "name": "VEO-3 InQuencer",
        "category": "veo-video",
        "categoryName": "VEO-3 / Vídeo / Prompts",
        "description": "Ferramenta de IA na categoria de VEO-3 / Vídeo / Prompts.",
        "icon": "fas fa-video",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-"
    },
    {
        "id": 30,
        "name": "VEO-3 Prompt AI Personagem",
        "category": "veo-video",
        "categoryName": "VEO-3 / Vídeo / Prompts",
        "description": "Ferramenta de IA na categoria de VEO-3 / Vídeo / Prompts.",
        "icon": "fas fa-video",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-"
    },
    {
        "id": 31,
        "name": "VEO-3 Prompt Generator",
        "category": "veo-video",
        "categoryName": "VEO-3 / Vídeo / Prompts",
        "description": "Ferramenta de IA na categoria de VEO-3 / Vídeo / Prompts.",
        "icon": "fas fa-video",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-"
    },
    {
        "id": 32,
        "name": "VEO-3 Roteirizador",
        "category": "veo-video",
        "categoryName": "VEO-3 / Vídeo / Prompts",
        "description": "Ferramenta de IA na categoria de VEO-3 / Vídeo / Prompts.",
        "icon": "fas fa-video",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-"
    },
    {
        "id": 33,
        "name": "VEO-3 Prompt Machine",
        "category": "veo-video",
        "categoryName": "VEO-3 / Vídeo / Prompts",
        "description": "Ferramenta de IA na categoria de VEO-3 / Vídeo / Prompts.",
        "icon": "fas fa-video",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-"
    },
    {
        "id": 34,
        "name": "VEO-3 Flow Text-to-Video Prompt Maker",
        "category": "veo-video",
        "categoryName": "VEO-3 / Vídeo / Prompts",
        "description": "Ferramenta de IA na categoria de VEO-3 / Vídeo / Prompts.",
        "icon": "fas fa-video",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-"
    },
    {
        "id": 35,
        "name": "VEO-3 Expert (extra)",
        "category": "veo-video",
        "categoryName": "VEO-3 / Vídeo / Prompts",
        "description": "Ferramenta de IA na categoria de VEO-3 / Vídeo / Prompts.",
        "icon": "fas fa-video",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-"
    },
    {
        "id": 36,
        "name": "VEO-3 Viral Generator",
        "category": "veo-video",
        "categoryName": "VEO-3 / Vídeo / Prompts",
        "description": "Ferramenta de IA na categoria de VEO-3 / Vídeo / Prompts.",
        "icon": "fas fa-video",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-"
    },
    {
        "id": 37,
        "name": "VEO-3 Prompt Pro",
        "category": "veo-video",
        "categoryName": "VEO-3 / Vídeo / Prompts",
        "description": "Ferramenta de IA na categoria de VEO-3 / Vídeo / Prompts.",
        "icon": "fas fa-video",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-"
    },
    {
        "id": 38,
        "name": "Randall",
        "category": "copywriting",
        "categoryName": "Copywriting / Vendas / Funis",
        "description": "Ferramenta de IA na categoria de Copywriting / Vendas / Funis.",
        "icon": "fas fa-pen-nib",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-68454dbfadc0819199ae0bab81d81b5d-"
    },
    {
        "id": 39,
        "name": "CopyDrillTM",
        "category": "copywriting",
        "categoryName": "Copywriting / Vendas / Funis",
        "description": "Ferramenta de IA na categoria de Copywriting / Vendas / Funis.",
        "icon": "fas fa-pen-nib",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-"
    },
    {
        "id": 40,
        "name": "KARNAGE",
        "category": "copywriting",
        "categoryName": "Copywriting / Vendas / Funis",
        "description": "Ferramenta de IA na categoria de Copywriting / Vendas / Funis.",
        "icon": "fas fa-pen-nib",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-"
    },
    {
        "id": 41,
        "name": "MindKrakken",
        "category": "copywriting",
        "categoryName": "Copywriting / Vendas / Funis",
        "description": "Ferramenta de IA na categoria de Copywriting / Vendas / Funis.",
        "icon": "fas fa-pen-nib",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-"
    },
    {
        "id": 42,
        "name": "Lek do Black 3.5",
        "category": "copywriting",
        "categoryName": "Copywriting / Vendas / Funis",
        "description": "Ferramenta de IA na categoria de Copywriting / Vendas / Funis.",
        "icon": "fas fa-pen-nib",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-"
    },
    {
        "id": 43,
        "name": "Lek do Black 2.0",
        "category": "copywriting",
        "categoryName": "Copywriting / Vendas / Funis",
        "description": "Ferramenta de IA na categoria de Copywriting / Vendas / Funis.",
        "icon": "fas fa-pen-nib",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-"
    },
    {
        "id": 44,
        "name": "Lek do Black",
        "category": "copywriting",
        "categoryName": "Copywriting / Vendas / Funis",
        "description": "Ferramenta de IA na categoria de Copywriting / Vendas / Funis.",
        "icon": "fas fa-pen-nib",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-"
    },
    {
        "id": 45,
        "name": "Black do Lek",
        "category": "copywriting",
        "categoryName": "Copywriting / Vendas / Funis",
        "description": "Ferramenta de IA na categoria de Copywriting / Vendas / Funis.",
        "icon": "fas fa-pen-nib",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-"
    },
    {
        "id": 46,
        "name": "Doug EXE 3.0",
        "category": "copywriting",
        "categoryName": "Copywriting / Vendas / Funis",
        "description": "Ferramenta de IA na categoria de Copywriting / Vendas / Funis.",
        "icon": "fas fa-pen-nib",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-"
    },
    {
        "id": 47,
        "name": "Doug EXE 2.0",
        "category": "copywriting",
        "categoryName": "Copywriting / Vendas / Funis",
        "description": "Ferramenta de IA na categoria de Copywriting / Vendas / Funis.",
        "icon": "fas fa-pen-nib",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-"
    },
    {
        "id": 48,
        "name": "Doug EXE",
        "category": "copywriting",
        "categoryName": "Copywriting / Vendas / Funis",
        "description": "Ferramenta de IA na categoria de Copywriting / Vendas / Funis.",
        "icon": "fas fa-pen-nib",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-"
    },
    {
        "id": 49,
        "name": "Doug Micro-Offer",
        "category": "copywriting",
        "categoryName": "Copywriting / Vendas / Funis",
        "description": "Ferramenta de IA na categoria de Copywriting / Vendas / Funis.",
        "icon": "fas fa-pen-nib",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-"
    },
    {
        "id": 50,
        "name": "Mentor Desgraçado",
        "category": "copywriting",
        "categoryName": "Copywriting / Vendas / Funis",
        "description": "Ferramenta de IA na categoria de Copywriting / Vendas / Funis.",
        "icon": "fas fa-pen-nib",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-"
    },
    {
        "id": 51,
        "name": "JIS Ugly Copy",
        "category": "copywriting",
        "categoryName": "Copywriting / Vendas / Funis",
        "description": "Ferramenta de IA na categoria de Copywriting / Vendas / Funis.",
        "icon": "fas fa-pen-nib",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-KzkPoXgV9/jis-ugly-copy"
    },
    {
        "id": 52,
        "name": "JIS Feedback Clareza Brutal",
        "category": "copywriting",
        "categoryName": "Copywriting / Vendas / Funis",
        "description": "Ferramenta de IA na categoria de Copywriting / Vendas / Funis.",
        "icon": "fas fa-pen-nib",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-"
    },
    {
        "id": 53,
        "name": "JIS Demarco Bullets",
        "category": "copywriting",
        "categoryName": "Copywriting / Vendas / Funis",
        "description": "Ferramenta de IA na categoria de Copywriting / Vendas / Funis.",
        "icon": "fas fa-pen-nib",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-"
    },
    {
        "id": 54,
        "name": "JIS Demarco Conteúdo Z4",
        "category": "copywriting",
        "categoryName": "Copywriting / Vendas / Funis",
        "description": "Ferramenta de IA na categoria de Copywriting / Vendas / Funis.",
        "icon": "fas fa-pen-nib",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-"
    },
    {
        "id": 55,
        "name": "JIS Demarco Story Ads",
        "category": "copywriting",
        "categoryName": "Copywriting / Vendas / Funis",
        "description": "Ferramenta de IA na categoria de Copywriting / Vendas / Funis.",
        "icon": "fas fa-pen-nib",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-"
    },
    {
        "id": 56,
        "name": "JIS Doug Monetização Extrema",
        "category": "copywriting",
        "categoryName": "Copywriting / Vendas / Funis",
        "description": "Ferramenta de IA na categoria de Copywriting / Vendas / Funis.",
        "icon": "fas fa-pen-nib",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-"
    },
    {
        "id": 57,
        "name": "JIS Doug EXE 3.1",
        "category": "copywriting",
        "categoryName": "Copywriting / Vendas / Funis",
        "description": "Ferramenta de IA na categoria de Copywriting / Vendas / Funis.",
        "icon": "fas fa-pen-nib",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-"
    },
    {
        "id": 58,
        "name": "JIS Doug 404",
        "category": "copywriting",
        "categoryName": "Copywriting / Vendas / Funis",
        "description": "Ferramenta de IA na categoria de Copywriting / Vendas / Funis.",
        "icon": "fas fa-pen-nib",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-"
    },
    {
        "id": 59,
        "name": "JIS Doug Mentor Brutal",
        "category": "copywriting",
        "categoryName": "Copywriting / Vendas / Funis",
        "description": "Ferramenta de IA na categoria de Copywriting / Vendas / Funis.",
        "icon": "fas fa-pen-nib",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-"
    },
    {
        "id": 60,
        "name": "JIS Demarco Onboarding",
        "category": "copywriting",
        "categoryName": "Copywriting / Vendas / Funis",
        "description": "Ferramenta de IA na categoria de Copywriting / Vendas / Funis.",
        "icon": "fas fa-pen-nib",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-"
    },
    {
        "id": 61,
        "name": "Sterling Copywriter",
        "category": "copywriting",
        "categoryName": "Copywriting / Vendas / Funis",
        "description": "Ferramenta de IA na categoria de Copywriting / Vendas / Funis.",
        "icon": "fas fa-pen-nib",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-X4DIcZEWL/sterling-copywriter-"
    },
    {
        "id": 62,
        "name": "Facebook Ad Copywriter",
        "category": "copywriting",
        "categoryName": "Copywriting / Vendas / Funis",
        "description": "Ferramenta de IA na categoria de Copywriting / Vendas / Funis.",
        "icon": "fas fa-pen-nib",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-u2CNyDiFz/facebook-ad-"
    },
    {
        "id": 63,
        "name": "Hook Creator",
        "category": "copywriting",
        "categoryName": "Copywriting / Vendas / Funis",
        "description": "Ferramenta de IA na categoria de Copywriting / Vendas / Funis.",
        "icon": "fas fa-pen-nib",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-Gmd4JNggQ/hook-creator"
    },
    {
        "id": 64,
        "name": "Zuck Destroyer",
        "category": "copywriting",
        "categoryName": "Copywriting / Vendas / Funis",
        "description": "Ferramenta de IA na categoria de Copywriting / Vendas / Funis.",
        "icon": "fas fa-pen-nib",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-3dVPwJDUD/zuck-destroyer"
    },
    {
        "id": 65,
        "name": "Gabriel Copywriter",
        "category": "copywriting",
        "categoryName": "Copywriting / Vendas / Funis",
        "description": "Ferramenta de IA na categoria de Copywriting / Vendas / Funis.",
        "icon": "fas fa-pen-nib",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-"
    },
    {
        "id": 66,
        "name": "JIS Demarco Caixa",
        "category": "copywriting",
        "categoryName": "Copywriting / Vendas / Funis",
        "description": "Ferramenta de IA na categoria de Copywriting / Vendas / Funis.",
        "icon": "fas fa-pen-nib",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-"
    },
    {
        "id": 67,
        "name": "JIS Demarco Tensão",
        "category": "copywriting",
        "categoryName": "Copywriting / Vendas / Funis",
        "description": "Ferramenta de IA na categoria de Copywriting / Vendas / Funis.",
        "icon": "fas fa-pen-nib",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-"
    },
    {
        "id": 68,
        "name": "Alex Hormozi",
        "category": "copywriting",
        "categoryName": "Copywriting / Vendas / Funis",
        "description": "Ferramenta de IA na categoria de Copywriting / Vendas / Funis.",
        "icon": "fas fa-pen-nib",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-hKAGs2KcC-alex-hormozi"
    },
    {
        "id": 69,
        "name": "Dan Koe",
        "category": "copywriting",
        "categoryName": "Copywriting / Vendas / Funis",
        "description": "Ferramenta de IA na categoria de Copywriting / Vendas / Funis.",
        "icon": "fas fa-pen-nib",
        "type": "premium",
        "url": "https://chat.openai.com/g/g-T1jkKT47w-koe"
    },
    {
        "id": 70,
        "name": "Kapil Gupta",
        "category": "copywriting",
        "categoryName": "Copywriting / Vendas / Funis",
        "description": "Ferramenta de IA na categoria de Copywriting / Vendas / Funis.",
        "icon": "fas fa-pen-nib",
        "type": "premium",
        "url": "https://chat.openai.com/g/g-Dg3nQXyq9-kapil-gupta"
    },
    {
        "id": 71,
        "name": "Monstro da Cass",
        "category": "copywriting",
        "categoryName": "Copywriting / Vendas / Funis",
        "description": "Ferramenta de IA na categoria de Copywriting / Vendas / Funis.",
        "icon": "fas fa-pen-nib",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-"
    },
    {
        "id": 72,
        "name": "Ret do Black",
        "category": "copywriting",
        "categoryName": "Copywriting / Vendas / Funis",
        "description": "Ferramenta de IA na categoria de Copywriting / Vendas / Funis.",
        "icon": "fas fa-pen-nib",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-"
    },
    {
        "id": 73,
        "name": "Rei dos Prompts",
        "category": "copywriting",
        "categoryName": "Copywriting / Vendas / Funis",
        "description": "Ferramenta de IA na categoria de Copywriting / Vendas / Funis.",
        "icon": "fas fa-pen-nib",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-"
    },
    {
        "id": 74,
        "name": "Títulos InWnitos",
        "category": "copywriting",
        "categoryName": "Copywriting / Vendas / Funis",
        "description": "Ferramenta de IA na categoria de Copywriting / Vendas / Funis.",
        "icon": "fas fa-pen-nib",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-ZeDnUgkCm/titulos-inWnitos"
    },
    {
        "id": 75,
        "name": "Raya",
        "category": "copywriting",
        "categoryName": "Copywriting / Vendas / Funis",
        "description": "Ferramenta de IA na categoria de Copywriting / Vendas / Funis.",
        "icon": "fas fa-pen-nib",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-683fa30356608191a8d38c70ca9230ac-raya"
    },
    {
        "id": 76,
        "name": "Arquiteto de Infoprodutos",
        "category": "infoprodutos",
        "categoryName": "Infoprodutos / Criação de Produtos",
        "description": "Ferramenta de IA na categoria de Infoprodutos / Criação de Produtos.",
        "icon": "fas fa-box",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-"
    },
    {
        "id": 77,
        "name": "Expert em Ebooks e Cursos Escaláveis",
        "category": "infoprodutos",
        "categoryName": "Infoprodutos / Criação de Produtos",
        "description": "Ferramenta de IA na categoria de Infoprodutos / Criação de Produtos.",
        "icon": "fas fa-box",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-"
    },
    {
        "id": 78,
        "name": "Criador de Infoprodutos Virais",
        "category": "infoprodutos",
        "categoryName": "Infoprodutos / Criação de Produtos",
        "description": "Ferramenta de IA na categoria de Infoprodutos / Criação de Produtos.",
        "icon": "fas fa-box",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-"
    },
    {
        "id": 79,
        "name": "Analista de Infoprodutos",
        "category": "infoprodutos",
        "categoryName": "Infoprodutos / Criação de Produtos",
        "description": "Ferramenta de IA na categoria de Infoprodutos / Criação de Produtos.",
        "icon": "fas fa-box",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-"
    },
    {
        "id": 80,
        "name": "Criador de Ofertas Virais",
        "category": "infoprodutos",
        "categoryName": "Infoprodutos / Criação de Produtos",
        "description": "Ferramenta de IA na categoria de Infoprodutos / Criação de Produtos.",
        "icon": "fas fa-box",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-m3EgO0ghG/criador-de-"
    },
    {
        "id": 81,
        "name": "Gerador de Infoprodutos",
        "category": "infoprodutos",
        "categoryName": "Infoprodutos / Criação de Produtos",
        "description": "Ferramenta de IA na categoria de Infoprodutos / Criação de Produtos.",
        "icon": "fas fa-box",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-"
    },
    {
        "id": 82,
        "name": "Skiler Gerador de Capas",
        "category": "infoprodutos",
        "categoryName": "Infoprodutos / Criação de Produtos",
        "description": "Ferramenta de IA na categoria de Infoprodutos / Criação de Produtos.",
        "icon": "fas fa-box",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-"
    },
    {
        "id": 83,
        "name": "Fluxo Gerador de Estrutura de Curso",
        "category": "infoprodutos",
        "categoryName": "Infoprodutos / Criação de Produtos",
        "description": "Ferramenta de IA na categoria de Infoprodutos / Criação de Produtos.",
        "icon": "fas fa-box",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-"
    },
    {
        "id": 84,
        "name": "Fluxo Gerador de Oferta",
        "category": "infoprodutos",
        "categoryName": "Infoprodutos / Criação de Produtos",
        "description": "Ferramenta de IA na categoria de Infoprodutos / Criação de Produtos.",
        "icon": "fas fa-box",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-"
    },
    {
        "id": 85,
        "name": "Fluxo Criador de Copy VVV",
        "category": "infoprodutos",
        "categoryName": "Infoprodutos / Criação de Produtos",
        "description": "Ferramenta de IA na categoria de Infoprodutos / Criação de Produtos.",
        "icon": "fas fa-box",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-"
    },
    {
        "id": 86,
        "name": "Planejador de Marketing",
        "category": "infoprodutos",
        "categoryName": "Infoprodutos / Criação de Produtos",
        "description": "Ferramenta de IA na categoria de Infoprodutos / Criação de Produtos.",
        "icon": "fas fa-box",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-"
    },
    {
        "id": 87,
        "name": "Nicho Master Ponte Roxa",
        "category": "infoprodutos",
        "categoryName": "Infoprodutos / Criação de Produtos",
        "description": "Ferramenta de IA na categoria de Infoprodutos / Criação de Produtos.",
        "icon": "fas fa-box",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-"
    },
    {
        "id": 88,
        "name": "Construtor de Prompts Leo Soares",
        "category": "infoprodutos",
        "categoryName": "Infoprodutos / Criação de Produtos",
        "description": "Ferramenta de IA na categoria de Infoprodutos / Criação de Produtos.",
        "icon": "fas fa-box",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-"
    },
    {
        "id": 89,
        "name": "Prompts Manus Leo Soares",
        "category": "infoprodutos",
        "categoryName": "Infoprodutos / Criação de Produtos",
        "description": "Ferramenta de IA na categoria de Infoprodutos / Criação de Produtos.",
        "icon": "fas fa-box",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-"
    },
    {
        "id": 90,
        "name": "Gerador de Prompts para Imagens Leo Soares",
        "category": "infoprodutos",
        "categoryName": "Infoprodutos / Criação de Produtos",
        "description": "Ferramenta de IA na categoria de Infoprodutos / Criação de Produtos.",
        "icon": "fas fa-box",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-"
    },
    {
        "id": 91,
        "name": "Gerador de Prompts para Anúncios Leo Soares",
        "category": "infoprodutos",
        "categoryName": "Infoprodutos / Criação de Produtos",
        "description": "Ferramenta de IA na categoria de Infoprodutos / Criação de Produtos.",
        "icon": "fas fa-box",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-"
    },
    {
        "id": 92,
        "name": "L-A-S-E RTM Offer Creator Leo Soares",
        "category": "infoprodutos",
        "categoryName": "Infoprodutos / Criação de Produtos",
        "description": "Ferramenta de IA na categoria de Infoprodutos / Criação de Produtos.",
        "icon": "fas fa-box",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-"
    },
    {
        "id": 93,
        "name": "Extrator de DNA do Expert Leo Soares",
        "category": "infoprodutos",
        "categoryName": "Infoprodutos / Criação de Produtos",
        "description": "Ferramenta de IA na categoria de Infoprodutos / Criação de Produtos.",
        "icon": "fas fa-box",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-"
    },
    {
        "id": 94,
        "name": "Estratégia para Clínicas",
        "category": "estrategia",
        "categoryName": "Estratégia / Negócios / Clínicas",
        "description": "Ferramenta de IA na categoria de Estratégia / Negócios / Clínicas.",
        "icon": "fas fa-chess",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-"
    },
    {
        "id": 95,
        "name": "B R A I N C E R",
        "category": "estrategia",
        "categoryName": "Estratégia / Negócios / Clínicas",
        "description": "Ferramenta de IA na categoria de Estratégia / Negócios / Clínicas.",
        "icon": "fas fa-chess",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-"
    },
    {
        "id": 96,
        "name": "GPT dos Leilões",
        "category": "estrategia",
        "categoryName": "Estratégia / Negócios / Clínicas",
        "description": "Ferramenta de IA na categoria de Estratégia / Negócios / Clínicas.",
        "icon": "fas fa-chess",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-"
    },
    {
        "id": 97,
        "name": "Mentor Napoleon IA",
        "category": "estrategia",
        "categoryName": "Estratégia / Negócios / Clínicas",
        "description": "Ferramenta de IA na categoria de Estratégia / Negócios / Clínicas.",
        "icon": "fas fa-chess",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-"
    },
    {
        "id": 98,
        "name": "Henrique Fera Academy",
        "category": "estrategia",
        "categoryName": "Estratégia / Negócios / Clínicas",
        "description": "Ferramenta de IA na categoria de Estratégia / Negócios / Clínicas.",
        "icon": "fas fa-chess",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-"
    },
    {
        "id": 99,
        "name": "Agente Quimera",
        "category": "estrategia",
        "categoryName": "Estratégia / Negócios / Clínicas",
        "description": "Ferramenta de IA na categoria de Estratégia / Negócios / Clínicas.",
        "icon": "fas fa-chess",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-"
    },
    {
        "id": 100,
        "name": "AI Coupon Code Finder",
        "category": "estrategia",
        "categoryName": "Estratégia / Negócios / Clínicas",
        "description": "Ferramenta de IA na categoria de Estratégia / Negócios / Clínicas.",
        "icon": "fas fa-chess",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-23B7QDQzF/ai-coupon-"
    },
    {
        "id": 101,
        "name": "Leo Soares Assistente de Escrita Pessoal",
        "category": "estrategia",
        "categoryName": "Estratégia / Negócios / Clínicas",
        "description": "Ferramenta de IA na categoria de Estratégia / Negócios / Clínicas.",
        "icon": "fas fa-chess",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-"
    },
    {
        "id": 102,
        "name": "Extrator de Mensagens Leo Soares",
        "category": "estrategia",
        "categoryName": "Estratégia / Negócios / Clínicas",
        "description": "Ferramenta de IA na categoria de Estratégia / Negócios / Clínicas.",
        "icon": "fas fa-chess",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-"
    },
    {
        "id": 103,
        "name": "Apostilas LightCopy",
        "category": "estrategia",
        "categoryName": "Estratégia / Negócios / Clínicas",
        "description": "Ferramenta de IA na categoria de Estratégia / Negócios / Clínicas.",
        "icon": "fas fa-chess",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-"
    },
    {
        "id": 104,
        "name": "AI Coupon Code Finder",
        "category": "estrategia",
        "categoryName": "Estratégia / Negócios / Clínicas",
        "description": "Ferramenta de IA na categoria de Estratégia / Negócios / Clínicas.",
        "icon": "fas fa-chess",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-23B7QDQzF"
    },
    {
        "id": 105,
        "name": "JIS Demarco Onboarding",
        "category": "onboarding",
        "categoryName": "Onboarding / Story Ads / Fluxo",
        "description": "Ferramenta de IA na categoria de Onboarding / Story Ads / Fluxo.",
        "icon": "fas fa-chart-line",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-"
    },
    {
        "id": 106,
        "name": "JIS Demarco Story Ads",
        "category": "onboarding",
        "categoryName": "Onboarding / Story Ads / Fluxo",
        "description": "Ferramenta de IA na categoria de Onboarding / Story Ads / Fluxo.",
        "icon": "fas fa-chart-line",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-"
    },
    {
        "id": 107,
        "name": "Mentor IA Funil 175k",
        "category": "onboarding",
        "categoryName": "Onboarding / Story Ads / Fluxo",
        "description": "Ferramenta de IA na categoria de Onboarding / Story Ads / Fluxo.",
        "icon": "fas fa-chart-line",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-"
    },
    {
        "id": 108,
        "name": "Fluxo Gerador de Ideias",
        "category": "onboarding",
        "categoryName": "Onboarding / Story Ads / Fluxo",
        "description": "Ferramenta de IA na categoria de Onboarding / Story Ads / Fluxo.",
        "icon": "fas fa-chart-line",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-"
    },
    {
        "id": 109,
        "name": "Fluxo Gerador de Quadros",
        "category": "onboarding",
        "categoryName": "Onboarding / Story Ads / Fluxo",
        "description": "Ferramenta de IA na categoria de Onboarding / Story Ads / Fluxo.",
        "icon": "fas fa-chart-line",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-"
    },
    {
        "id": 110,
        "name": "Fluxo Gerador de Furadeiras",
        "category": "onboarding",
        "categoryName": "Onboarding / Story Ads / Fluxo",
        "description": "Ferramenta de IA na categoria de Onboarding / Story Ads / Fluxo.",
        "icon": "fas fa-chart-line",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-"
    },
    {
        "id": 111,
        "name": "Fluxo Gerador de Decorados",
        "category": "onboarding",
        "categoryName": "Onboarding / Story Ads / Fluxo",
        "description": "Ferramenta de IA na categoria de Onboarding / Story Ads / Fluxo.",
        "icon": "fas fa-chart-line",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-"
    },
    {
        "id": 112,
        "name": "Fluxo Gerador de Urgência Oculta",
        "category": "onboarding",
        "categoryName": "Onboarding / Story Ads / Fluxo",
        "description": "Ferramenta de IA na categoria de Onboarding / Story Ads / Fluxo.",
        "icon": "fas fa-chart-line",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-"
    },
    {
        "id": 113,
        "name": "Detector de Objeções",
        "category": "onboarding",
        "categoryName": "Onboarding / Story Ads / Fluxo",
        "description": "Ferramenta de IA na categoria de Onboarding / Story Ads / Fluxo.",
        "icon": "fas fa-chart-line",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-"
    },
    {
        "id": 114,
        "name": "Fluxo Gerador de Identidade do Comunicador",
        "category": "onboarding",
        "categoryName": "Onboarding / Story Ads / Fluxo",
        "description": "Ferramenta de IA na categoria de Onboarding / Story Ads / Fluxo.",
        "icon": "fas fa-chart-line",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-"
    },
    {
        "id": 115,
        "name": "Fluxo Gerador de Identidade do Consumidor",
        "category": "onboarding",
        "categoryName": "Onboarding / Story Ads / Fluxo",
        "description": "Ferramenta de IA na categoria de Onboarding / Story Ads / Fluxo.",
        "icon": "fas fa-chart-line",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-"
    },
    {
        "id": 116,
        "name": "Fluxo Gerador de Identidade do Produto",
        "category": "onboarding",
        "categoryName": "Onboarding / Story Ads / Fluxo",
        "description": "Ferramenta de IA na categoria de Onboarding / Story Ads / Fluxo.",
        "icon": "fas fa-chart-line",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-"
    },
    {
        "id": 117,
        "name": "Fluxo Gerador de Estrutura do Curso",
        "category": "onboarding",
        "categoryName": "Onboarding / Story Ads / Fluxo",
        "description": "Ferramenta de IA na categoria de Onboarding / Story Ads / Fluxo.",
        "icon": "fas fa-chart-line",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-"
    },
    {
        "id": 118,
        "name": "Fluxo Gerador de Oferta",
        "category": "onboarding",
        "categoryName": "Onboarding / Story Ads / Fluxo",
        "description": "Ferramenta de IA na categoria de Onboarding / Story Ads / Fluxo.",
        "icon": "fas fa-chart-line",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-"
    },
    {
        "id": 119,
        "name": "Fluxo Criador de Copy de VVV",
        "category": "onboarding",
        "categoryName": "Onboarding / Story Ads / Fluxo",
        "description": "Ferramenta de IA na categoria de Onboarding / Story Ads / Fluxo.",
        "icon": "fas fa-chart-line",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-"
    },
    {
        "id": 120,
        "name": "N8N Copilot by Randall",
        "category": "automacao",
        "categoryName": "Automação / N8N / Dev",
        "description": "Ferramenta de IA na categoria de Automação / N8N / Dev.",
        "icon": "fas fa-cogs",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-"
    },
    {
        "id": 121,
        "name": "MGTinc Expert em N8N",
        "category": "automacao",
        "categoryName": "Automação / N8N / Dev",
        "description": "Ferramenta de IA na categoria de Automação / N8N / Dev.",
        "icon": "fas fa-cogs",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-"
    },
    {
        "id": 122,
        "name": "Colab Notebook GPT",
        "category": "automacao",
        "categoryName": "Automação / N8N / Dev",
        "description": "Ferramenta de IA na categoria de Automação / N8N / Dev.",
        "icon": "fas fa-cogs",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-"
    },
    {
        "id": 123,
        "name": "Code GPT",
        "category": "automacao",
        "categoryName": "Automação / N8N / Dev",
        "description": "Ferramenta de IA na categoria de Automação / N8N / Dev.",
        "icon": "fas fa-cogs",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-cksUvVWar/code-gpt"
    },
    {
        "id": 124,
        "name": "NextJS/React/Tailwind/TS",
        "category": "automacao",
        "categoryName": "Automação / N8N / Dev",
        "description": "Ferramenta de IA na categoria de Automação / N8N / Dev.",
        "icon": "fas fa-cogs",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-"
    },
    {
        "id": 125,
        "name": "V0.dev Prompt Generator",
        "category": "automacao",
        "categoryName": "Automação / N8N / Dev",
        "description": "Ferramenta de IA na categoria de Automação / N8N / Dev.",
        "icon": "fas fa-cogs",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-HKYXBEdN7/v0-dev-"
    },
    {
        "id": 126,
        "name": "ComfyUI Assistant",
        "category": "automacao",
        "categoryName": "Automação / N8N / Dev",
        "description": "Ferramenta de IA na categoria de Automação / N8N / Dev.",
        "icon": "fas fa-cogs",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-B3qi2zKGB/comfyui-assistant"
    },
    {
        "id": 127,
        "name": "N8N Assistant",
        "category": "automacao",
        "categoryName": "Automação / N8N / Dev",
        "description": "Ferramenta de IA na categoria de Automação / N8N / Dev.",
        "icon": "fas fa-cogs",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-SVatmGSdQ/n8n-assistant-by-nskha"
    },
    {
        "id": 128,
        "name": "Murta 2.0",
        "category": "social-media",
        "categoryName": "Social Media / Reels / Carrosséis",
        "description": "Ferramenta de IA na categoria de Social Media / Reels / Carrosséis.",
        "icon": "fas fa-share-alt",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-"
    },
    {
        "id": 129,
        "name": "Estagiária do Murta",
        "category": "social-media",
        "categoryName": "Social Media / Reels / Carrosséis",
        "description": "Ferramenta de IA na categoria de Social Media / Reels / Carrosséis.",
        "icon": "fas fa-share-alt",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-"
    },
    {
        "id": 130,
        "name": "Carrossel News",
        "category": "social-media",
        "categoryName": "Social Media / Reels / Carrosséis",
        "description": "Ferramenta de IA na categoria de Social Media / Reels / Carrosséis.",
        "icon": "fas fa-share-alt",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-IA6O0Po2N/carrossel-news"
    },
    {
        "id": 131,
        "name": "Legendas Automáticas",
        "category": "social-media",
        "categoryName": "Social Media / Reels / Carrosséis",
        "description": "Ferramenta de IA na categoria de Social Media / Reels / Carrosséis.",
        "icon": "fas fa-share-alt",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-3gy1utgT4/legendas-"
    },
    {
        "id": 132,
        "name": "Agente Titia Stories",
        "category": "social-media",
        "categoryName": "Social Media / Reels / Carrosséis",
        "description": "Ferramenta de IA na categoria de Social Media / Reels / Carrosséis.",
        "icon": "fas fa-share-alt",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-"
    },
    {
        "id": 133,
        "name": "Agente Copy de Guerrilha",
        "category": "social-media",
        "categoryName": "Social Media / Reels / Carrosséis",
        "description": "Ferramenta de IA na categoria de Social Media / Reels / Carrosséis.",
        "icon": "fas fa-share-alt",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-"
    },
    {
        "id": 134,
        "name": "Agente Copy Escalável",
        "category": "social-media",
        "categoryName": "Social Media / Reels / Carrosséis",
        "description": "Ferramenta de IA na categoria de Social Media / Reels / Carrosséis.",
        "icon": "fas fa-share-alt",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-"
    },
    {
        "id": 135,
        "name": "Agente Vanguardia",
        "category": "social-media",
        "categoryName": "Social Media / Reels / Carrosséis",
        "description": "Ferramenta de IA na categoria de Social Media / Reels / Carrosséis.",
        "icon": "fas fa-share-alt",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-LkzvFEGxf/agente-vanguardia-"
    },
    {
        "id": 136,
        "name": "Void 3NF",
        "category": "blackhat",
        "categoryName": "Blackhat / Jailbreak / Sem Censura",
        "description": "Ferramenta de IA na categoria de Blackhat / Jailbreak / Sem Censura.",
        "icon": "fas fa-mask",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-"
    },
    {
        "id": 137,
        "name": "Agente Proibido",
        "category": "blackhat",
        "categoryName": "Blackhat / Jailbreak / Sem Censura",
        "description": "Ferramenta de IA na categoria de Blackhat / Jailbreak / Sem Censura.",
        "icon": "fas fa-mask",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-"
    },
    {
        "id": 138,
        "name": "Agente Codex",
        "category": "blackhat",
        "categoryName": "Blackhat / Jailbreak / Sem Censura",
        "description": "Ferramenta de IA na categoria de Blackhat / Jailbreak / Sem Censura.",
        "icon": "fas fa-mask",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-"
    },
    {
        "id": 139,
        "name": "Inquebrável 1.0",
        "category": "blackhat",
        "categoryName": "Blackhat / Jailbreak / Sem Censura",
        "description": "Ferramenta de IA na categoria de Blackhat / Jailbreak / Sem Censura.",
        "icon": "fas fa-mask",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-"
    },
    {
        "id": 140,
        "name": "Jailbreak GPT",
        "category": "blackhat",
        "categoryName": "Blackhat / Jailbreak / Sem Censura",
        "description": "Ferramenta de IA na categoria de Blackhat / Jailbreak / Sem Censura.",
        "icon": "fas fa-mask",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-trqFOerRF/jailbreak-gpt"
    },
    {
        "id": 141,
        "name": "Pai do Black 1.0",
        "category": "blackhat",
        "categoryName": "Blackhat / Jailbreak / Sem Censura",
        "description": "Ferramenta de IA na categoria de Blackhat / Jailbreak / Sem Censura.",
        "icon": "fas fa-mask",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-"
    },
    {
        "id": 142,
        "name": "Black Zone",
        "category": "blackhat",
        "categoryName": "Blackhat / Jailbreak / Sem Censura",
        "description": "Ferramenta de IA na categoria de Blackhat / Jailbreak / Sem Censura.",
        "icon": "fas fa-mask",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-"
    },
    {
        "id": 143,
        "name": "Archivist of Shadows",
        "category": "blackhat",
        "categoryName": "Blackhat / Jailbreak / Sem Censura",
        "description": "Ferramenta de IA na categoria de Blackhat / Jailbreak / Sem Censura.",
        "icon": "fas fa-mask",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-"
    },
    {
        "id": 144,
        "name": "Guru da Mega-Sena",
        "category": "blackhat",
        "categoryName": "Blackhat / Jailbreak / Sem Censura",
        "description": "Ferramenta de IA na categoria de Blackhat / Jailbreak / Sem Censura.",
        "icon": "fas fa-mask",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-xT0vPgyem/guru-da-mega-sena"
    },
    {
        "id": 145,
        "name": "Especialista em Desenvolvimento Pessoal",
        "category": "desenvolvimento-pessoal",
        "categoryName": "Desenvolvimento Pessoal / Coach",
        "description": "Ferramenta de IA na categoria de Desenvolvimento Pessoal / Coach.",
        "icon": "fas fa-user-tie",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-"
    },
    {
        "id": 146,
        "name": "Jardon",
        "category": "desenvolvimento-pessoal",
        "categoryName": "Desenvolvimento Pessoal / Coach",
        "description": "Ferramenta de IA na categoria de Desenvolvimento Pessoal / Coach.",
        "icon": "fas fa-user-tie",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-"
    },
    {
        "id": 147,
        "name": "Fitness Coach",
        "category": "desenvolvimento-pessoal",
        "categoryName": "Desenvolvimento Pessoal / Coach",
        "description": "Ferramenta de IA na categoria de Desenvolvimento Pessoal / Coach.",
        "icon": "fas fa-user-tie",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-ipOIcM229/Wtness-workout-diet-phd-"
    },
    {
        "id": 148,
        "name": "David Goggins",
        "category": "desenvolvimento-pessoal",
        "categoryName": "Desenvolvimento Pessoal / Coach",
        "description": "Ferramenta de IA na categoria de Desenvolvimento Pessoal / Coach.",
        "icon": "fas fa-user-tie",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-NAQKDcD9F-david-goggins"
    },
    {
        "id": 149,
        "name": "Midjourney V7",
        "category": "design",
        "categoryName": "Design / Imagens / Midjourney",
        "description": "Ferramenta de IA na categoria de Design / Imagens / Midjourney.",
        "icon": "fas fa-palette",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-6MlHy4WPo/romidjourney-v7-"
    },
    {
        "id": 150,
        "name": "JPEGMAF IA",
        "category": "design",
        "categoryName": "Design / Imagens / Midjourney",
        "description": "Ferramenta de IA na categoria de Design / Imagens / Midjourney.",
        "icon": "fas fa-palette",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-"
    },
    {
        "id": 151,
        "name": "DesenhAI",
        "category": "design",
        "categoryName": "Design / Imagens / Midjourney",
        "description": "Ferramenta de IA na categoria de Design / Imagens / Midjourney.",
        "icon": "fas fa-palette",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-"
    },
    {
        "id": 152,
        "name": "Image Generator Pro",
        "category": "design",
        "categoryName": "Design / Imagens / Midjourney",
        "description": "Ferramenta de IA na categoria de Design / Imagens / Midjourney.",
        "icon": "fas fa-palette",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-8m2CPAfeF/image-generator-"
    },
    {
        "id": 153,
        "name": "1-Avatar Maker AI",
        "category": "design",
        "categoryName": "Design / Imagens / Midjourney",
        "description": "Ferramenta de IA na categoria de Design / Imagens / Midjourney.",
        "icon": "fas fa-palette",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-"
    },
    {
        "id": 154,
        "name": "MascoteMaster",
        "category": "design",
        "categoryName": "Design / Imagens / Midjourney",
        "description": "Ferramenta de IA na categoria de Design / Imagens / Midjourney.",
        "icon": "fas fa-palette",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-lef5Jds5T/mascotemaster"
    },
    {
        "id": 155,
        "name": "Glibatree Art Designer",
        "category": "design",
        "categoryName": "Design / Imagens / Midjourney",
        "description": "Ferramenta de IA na categoria de Design / Imagens / Midjourney.",
        "icon": "fas fa-palette",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-"
    },
    {
        "id": 156,
        "name": "Hollywood Books",
        "category": "design",
        "categoryName": "Design / Imagens / Midjourney",
        "description": "Ferramenta de IA na categoria de Design / Imagens / Midjourney.",
        "icon": "fas fa-palette",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-"
    },
    {
        "id": 157,
        "name": "Agente Iconoclausta",
        "category": "design",
        "categoryName": "Design / Imagens / Midjourney",
        "description": "Ferramenta de IA na categoria de Design / Imagens / Midjourney.",
        "icon": "fas fa-palette",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-"
    },
    {
        "id": 158,
        "name": "Image GPT",
        "category": "design",
        "categoryName": "Design / Imagens / Midjourney",
        "description": "Ferramenta de IA na categoria de Design / Imagens / Midjourney.",
        "icon": "fas fa-palette",
        "type": "premium",
        "url": "https://chat.openai.com/g/g-R6VqLNHFM/image"
    },
    {
        "id": 159,
        "name": "Promptor",
        "category": "design",
        "categoryName": "Design / Imagens / Midjourney",
        "description": "Ferramenta de IA na categoria de Design / Imagens / Midjourney.",
        "icon": "fas fa-palette",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-"
    },
    {
        "id": 160,
        "name": "Storytelling Go Kids",
        "category": "youtube",
        "categoryName": "YouTube / Storytelling / Música",
        "description": "Ferramenta de IA na categoria de YouTube / Storytelling / Música.",
        "icon": "fas fa-music",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-9KoaMWwgK/storytelling-go-"
    },
    {
        "id": 161,
        "name": "Musickids",
        "category": "youtube",
        "categoryName": "YouTube / Storytelling / Música",
        "description": "Ferramenta de IA na categoria de YouTube / Storytelling / Música.",
        "icon": "fas fa-music",
        "type": "premium",
        "url": "https://chatgpt.com/g/g-fupA6LXq2/musickids"
    }
];

// Estado da aplicação
let currentFilter = 'all';
let currentCategory = 'all';
let searchTerm = '';

// Elementos DOM
const toolsGrid = document.getElementById('toolsGrid');
const searchInput = document.getElementById('searchInput');
const filterButtons = document.querySelectorAll('.filter-btn');
const categoryLinks = document.querySelectorAll('[data-category]');
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const sidebar = document.querySelector('.sidebar');
const loading = document.getElementById('loading');
const noResults = document.getElementById('noResults');

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    renderTools();
    setupEventListeners();
});

// Configurar event listeners
function setupEventListeners() {
    // Busca
    searchInput.addEventListener('input', handleSearch);
    
    // Filtros
    filterButtons.forEach(btn => {
        btn.addEventListener('click', handleFilterChange);
    });
    
    // Categorias
    categoryLinks.forEach(link => {
        link.addEventListener('click', handleCategoryChange);
    });
    
    // Menu mobile
    mobileMenuToggle.addEventListener('click', toggleMobileMenu);
    
    // Fechar menu mobile ao clicar fora
    document.addEventListener('click', function(e) {
        if (!sidebar.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
            sidebar.classList.remove('open');
        }
    });
    
    // Fechar menu mobile ao redimensionar
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            sidebar.classList.remove('open');
        }
    });
}

// Renderizar ferramentas
function renderTools() {
    const filteredTools = getFilteredTools();
    
    if (filteredTools.length === 0) {
        showNoResults();
        return;
    }
    
    hideNoResults();
    
    toolsGrid.innerHTML = filteredTools.map(tool => createToolCard(tool)).join('');
    
    // Adicionar animação escalonada
    const cards = toolsGrid.querySelectorAll('.tool-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
}

// Criar card de ferramenta
function createToolCard(tool) {
    return `
        <div class="tool-card" data-category="${tool.category}" data-type="${tool.type}">
            <div class="tool-header">
                <div class="tool-icon">
                    <i class="${tool.icon}"></i>
                </div>
                <div class="tool-info">
                    <h3>${tool.name}</h3>
                    <div class="tool-category">${tool.categoryName}</div>
                </div>
            </div>
            <div class="tool-description">
                ${tool.description}
            </div>
            <div class="tool-footer">
                <span class="tool-type ${tool.type}">
                    ${tool.type === 'free' ? 'Gratuito' : 'Premium'}
                </span>
                <a href="${tool.url}" target="_blank" class="access-btn">
                    <span>Acessar</span>
                    <i class="fas fa-external-link-alt"></i>
                </a>
            </div>
        </div>
    `;
}

// Filtrar ferramentas
function getFilteredTools() {
    return toolsData.filter(tool => {
        const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            tool.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            tool.categoryName.toLowerCase().includes(searchTerm.toLowerCase());
        
        const matchesFilter = currentFilter === 'all' || tool.type === currentFilter;
        
        const matchesCategory = currentCategory === 'all' || tool.category === currentCategory;
        
        return matchesSearch && matchesFilter && matchesCategory;
    });
}

// Manipular busca
function handleSearch(e) {
    searchTerm = e.target.value;
    renderTools();
}

// Manipular mudança de filtro
function handleFilterChange(e) {
    e.preventDefault();
    
    // Remover classe active de todos os botões
    filterButtons.forEach(btn => btn.classList.remove('active'));
    
    // Adicionar classe active ao botão clicado
    e.target.classList.add('active');
    
    currentFilter = e.target.dataset.filter;
    renderTools();
}

// Manipular mudança de categoria
function handleCategoryChange(e) {
    e.preventDefault();
    
    // Remover classe active de todos os links
    document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
    
    // Adicionar classe active ao item clicado
    e.target.closest('.nav-item').classList.add('active');
    
    currentCategory = e.target.dataset.category;
    renderTools();
    
    // Fechar menu mobile se estiver aberto
    if (window.innerWidth <= 768) {
        sidebar.classList.remove('open');
    }
}

// Toggle menu mobile
function toggleMobileMenu() {
    sidebar.classList.toggle('open');
}

// Mostrar estado de "sem resultados"
function showNoResults() {
    toolsGrid.style.display = 'none';
    noResults.style.display = 'block';
}

// Esconder estado de "sem resultados"
function hideNoResults() {
    toolsGrid.style.display = 'grid';
    noResults.style.display = 'none';
}

// Mostrar loading
function showLoading() {
    toolsGrid.style.display = 'none';
    noResults.style.display = 'none';
    loading.style.display = 'block';
}

// Esconder loading
function hideLoading() {
    loading.style.display = 'none';
    toolsGrid.style.display = 'grid';
}

// Função para adicionar novas ferramentas (para uso futuro)
function addTool(toolData) {
    toolsData.push({
        id: toolsData.length + 1,
        ...toolData
    });
    renderTools();
}

// Função para atualizar contador de ferramentas
function updateToolCount() {
    const toolCount = document.querySelector('.tool-count');
    const filteredCount = getFilteredTools().length;
    const totalCount = toolsData.length;
    
    if (filteredCount === totalCount) {
        toolCount.textContent = `${totalCount}+ ferramentas disponíveis`;
    } else {
        toolCount.textContent = `${filteredCount} de ${totalCount}+ ferramentas`;
    }
}

// Atualizar contador sempre que renderizar
const originalRenderTools = renderTools;
renderTools = function() {
    originalRenderTools();
    updateToolCount();
};

// Smooth scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Adicionar efeito de parallax sutil no scroll
let ticking = false;

function updateParallax() {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.tool-card');
    
    parallaxElements.forEach((element, index) => {
        const speed = 0.5 + (index % 3) * 0.1;
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
    });
    
    ticking = false;
}

function requestParallaxUpdate() {
    if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
    }
}

// Ativar parallax apenas em desktop
if (window.innerWidth > 1024) {
    window.addEventListener('scroll', requestParallaxUpdate);
}

// Adicionar efeito de hover nos cards
document.addEventListener('mouseover', function(e) {
    if (e.target.closest('.tool-card')) {
        const card = e.target.closest('.tool-card');
        card.style.transform = 'translateY(-8px) scale(1.02)';
    }
});

document.addEventListener('mouseout', function(e) {
    if (e.target.closest('.tool-card')) {
        const card = e.target.closest('.tool-card');
        card.style.transform = 'translateY(0) scale(1)';
    }
});

// Função para exportar dados (para desenvolvimento)
window.exportToolsData = function() {
    console.log('Tools Data:', JSON.stringify(toolsData, null, 2));
    return toolsData;
};

// Função para importar dados (para desenvolvimento)
window.importToolsData = function(data) {
    if (Array.isArray(data)) {
        toolsData.length = 0;
        toolsData.push(...data);
        renderTools();
        console.log('Tools data imported successfully');
    } else {
        console.error('Invalid data format');
    }
};


,
    {
        "id": 162,
        "name": "Lovable 2.0",
        "category": "automacao",
        "categoryName": "Automação / N8N / Dev",
        "description": "Ferramenta de IA para automação e desenvolvimento.",
        "icon": "fas fa-cogs",
        "type": "premium",
        "url": "https://lovable.dev/"
    }
];

