# Trip Base - Dashboard de Ferramentas de IA

## Visão Geral

O **Trip Base** é um dashboard web responsivo que exibe uma coleção organizada de mais de 300 ferramentas de inteligência artificial. O projeto foi desenvolvido seguindo o estilo visual da marca Cakto, com uma interface moderna, limpa e altamente funcional.

## Características Principais

### Design
- **Tema de cores**: Preto/cinza escuro como base, com destaques em verde-ciano (#00C8C8) e vermelho (#FF0000)
- **Tipografia**: Fonte Inter para máxima legibilidade
- **Layout responsivo**: Adaptável para desktop, tablet e mobile
- **Animações suaves**: Transições e efeitos hover elegantes

### Funcionalidades
- **Busca em tempo real**: Filtragem instantânea por nome, descrição ou categoria
- **Filtros por tipo**: Todas, Gratuitas, Premium
- **Navegação por categorias**: 8 categorias organizadas na sidebar
- **Cards informativos**: Cada ferramenta possui ícone, descrição e link direto
- **Menu mobile**: Interface adaptada para dispositivos móveis

## Estrutura do Projeto

```
trip-base-dashboard/
├── index.html          # Estrutura HTML principal
├── styles.css          # Estilos CSS responsivos
├── script.js           # Funcionalidades JavaScript
└── README.md           # Esta documentação
```

## Como Adicionar Novas Ferramentas

### 1. Editando o arquivo script.js

Localize o array `toolsData` no início do arquivo `script.js` e adicione novos objetos seguindo este formato:

```javascript
{
    id: 6, // Próximo ID sequencial
    name: "Nome da Ferramenta",
    category: "categoria-slug", // Ver categorias disponíveis abaixo
    categoryName: "Nome da Categoria",
    description: "Descrição detalhada da ferramenta e suas funcionalidades",
    icon: "fas fa-icon-name", // Ícone do Font Awesome
    type: "free", // "free" ou "premium"
    url: "https://link-da-ferramenta.com"
}
```

### 2. Categorias Disponíveis

| Slug | Nome da Categoria |
|------|-------------------|
| `veo-video` | VEO-3 / Vídeo / Prompts |
| `copywriting` | Copywriting / Vendas |
| `infoprodutos` | Infoprodutos |
| `estrategia` | Estratégia / Negócios |
| `social-media` | Social Media |
| `automacao` | Automação / Dev |
| `design` | Design / Imagens |

### 3. Ícones Disponíveis

O projeto usa Font Awesome 6.4.0. Alguns ícones sugeridos:

- `fas fa-magic` - Para ferramentas de prompts/IA
- `fas fa-pen-nib` - Para copywriting
- `fas fa-video` - Para vídeo
- `fas fa-image` - Para imagens
- `fas fa-cogs` - Para automação
- `fas fa-chart-line` - Para análise/negócios
- `fas fa-share-alt` - Para social media

### 4. Exemplo Prático

```javascript
// Adicionar esta ferramenta ao array toolsData:
{
    id: 6,
    name: "ChatGPT Plus",
    category: "copywriting",
    categoryName: "Copywriting / Vendas",
    description: "Modelo de linguagem avançado para criação de textos, copywriting e assistência em vendas",
    icon: "fas fa-robot",
    type: "premium",
    url: "https://chat.openai.com"
}
```

## Personalização Avançada

### Alterando Cores

No arquivo `styles.css`, você pode modificar as variáveis de cor:

```css
/* Cores principais */
--primary-bg: #0F0F0F;      /* Fundo principal */
--secondary-bg: #1A1A1A;    /* Fundo secundário */
--accent-cyan: #00C8C8;     /* Verde-ciano */
--accent-red: #FF0000;      /* Vermelho */
--text-primary: #FFFFFF;    /* Texto principal */
--text-secondary: #B0B0B0;  /* Texto secundário */
```

### Adicionando Novas Categorias

1. **No HTML** (`index.html`), adicione um novo item na sidebar:
```html
<li class="nav-item">
    <a href="#" data-category="nova-categoria">
        <i class="fas fa-novo-icone"></i>
        <span>Nova Categoria</span>
    </a>
</li>
```

2. **No JavaScript** (`script.js`), use o slug `nova-categoria` nas ferramentas.

## Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Estilos responsivos com Flexbox e Grid
- **JavaScript ES6+**: Funcionalidades interativas
- **Font Awesome 6.4.0**: Biblioteca de ícones
- **Google Fonts**: Tipografia Inter

## Compatibilidade

- **Navegadores**: Chrome, Firefox, Safari, Edge (versões modernas)
- **Dispositivos**: Desktop, tablet, smartphone
- **Resolução mínima**: 320px de largura

## Manutenção

### Atualizando o Contador
O contador de ferramentas é atualizado automaticamente conforme você adiciona novas ferramentas ao array `toolsData`.

### Backup dos Dados
Para fazer backup das ferramentas, execute no console do navegador:
```javascript
console.log(JSON.stringify(toolsData, null, 2));
```

### Importando Dados
Para importar um conjunto de dados:
```javascript
window.importToolsData(seuArrayDeDados);
```

## Suporte

Para dúvidas ou problemas:
1. Verifique se a sintaxe JavaScript está correta
2. Confirme se os links das ferramentas estão funcionando
3. Teste a responsividade em diferentes dispositivos
4. Valide o HTML e CSS se necessário

---

**Desenvolvido com ❤️ seguindo o estilo visual da marca Cakto**

