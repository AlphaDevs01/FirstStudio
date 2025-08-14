# FirstStudios - Site Estático

Um site moderno e profissional para apresentar os serviços de uma equipe especializada em criação de conteúdo para Minecraft.

## 🚀 Funcionalidades

- **Home**: Hero section impressionante com apresentação da equipe e trabalhos em destaque
- **Equipe**: Perfis detalhados dos membros da equipe
- **Modelos**: Galeria categorizada de modelos 3D com carrossel de imagens
- **Programações**: Showcase de projetos de código com detalhes técnicos
- **Addons**: Demonstrações em vídeo integradas com YouTube
- **Contato**: Formulário de contato e informações da empresa

## 🛠️ Tecnologias

- React 18 + TypeScript
- Tailwind CSS
- Lucide React (ícones)
- Vite (build tool)

## 📦 Instalação

1. **Clone o repositório**
```bash
git clone <repository-url>
cd project
```

2. **Instale as dependências**
```bash
npm install
```

## 🚀 Executando o Projeto

### Desenvolvimento
```bash
npm run dev
```

### Produção
```bash
npm run build
npm run preview
```

## 📁 Estrutura do Projeto

```
project/
├── src/
│   ├── components/         # Componentes React
│   │   ├── common/         # Componentes comuns
│   │   └── pages/          # Páginas do site
│   ├── data/              # Dados estáticos (mockData)
│   │   ├── mockData.ts    # Dados principais do site
│   │   └── mockDataTemplate.ts # Template/backup dos dados
│   └── types/             # Tipos TypeScript
├── public/                # Arquivos públicos
└── dist/                  # Build de produção
```

## 📱 Responsividade

O site é totalmente responsivo com:
- Design mobile-first
- Breakpoints otimizados
- Navegação adaptativa
- Imagens responsivas

## 🎨 Design

- **Paleta de cores**: Azul, roxo e gradientes
- **Tipografia**: Sistema de fontes moderno
- **Animações**: Micro-interações suaves
- **Layout**: Grid system flexível

## 🔧 Scripts Disponíveis

```bash
npm run dev          # Servidor de desenvolvimento
npm run build        # Build para produção
npm run preview      # Preview do build
npm run lint         # Verificar código
```

## 📝 Personalização e Configuração

### MockData - Sistema de Configuração Centralizada

Todo o conteúdo do site é controlado através do arquivo `src/data/mockData.ts`. Este sistema permite:

#### Configurações Gerais (`siteConfig`)
- **Informações básicas**: Nome do site, descrição
- **Hero Section**: Título, subtítulo, imagem de fundo, textos dos botões
- **Seções da Home**: Títulos e descrições de cada seção
- **Contato**: Email, telefone, localização, redes sociais
- **Textos das páginas**: Títulos e descrições de todas as páginas

#### Conteúdo Dinâmico
- **Membros da equipe** (`teamMembers`): Nome, cargo, bio, foto
- **Avaliações** (`reviews`): Nome, nota, comentário, foto do cliente
- **Categorias e Modelos** (`modelCategories`, `modelSets`): Organize modelos por categoria
- **Programações** (`programmingCategories`, `programmingSets`): Scripts e sistemas
- **Addons** (`addonCategories`, `addonSets`): Addons com vídeos do YouTube

#### Como Adicionar Novo Conteúdo

**Para adicionar uma nova categoria de modelos:**
```typescript
// Em modelCategories, adicione:
{ 
  id: '5', 
  name: 'Nova Categoria', 
  description: 'Descrição da categoria' 
}

// Em modelSets, adicione modelos para essa categoria:
{
  id: '6',
  name: 'Novo Modelo',
  categoryId: '5', // ID da categoria criada acima
  description: 'Descrição do modelo',
  images: ['url1', 'url2', 'url3'],
  detailedDescription: 'Descrição detalhada...'
}
```

**Para adicionar um novo membro da equipe:**
```typescript
{
  id: '5',
  name: 'Nome da Pessoa',
  role: 'Cargo',
  bio: 'Biografia da pessoa...',
  image: 'https://url-da-imagem.com'
}
```

#### Sistema de Backup

O arquivo `src/data/mockDataTemplate.ts` serve como:
- **Template**: Base para criar novos dados
- **Backup**: Restauração em caso de problemas
- **Referência**: Estrutura correta dos dados

Para restaurar os dados originais, copie o conteúdo de `mockDataTemplate.ts` para `mockData.ts`.

### Estrutura Antiga (Descontinuada)
~~Para personalizar o conteúdo do site, edite os arquivos em `src/data/mockData.ts`:~~

~~- `teamMembers`: Membros da equipe~~
~~- `reviews`: Avaliações de clientes~~
~~- `modelSets`: Modelos 3D~~
~~- `programmingSets`: Projetos de programação~~
~~- `addonSets`: Addons com vídeos~~
~~- `categories`: Categorias para organização~~

**Agora use o sistema centralizado `siteConfig` + arrays de dados organizados por categoria!**
## 🚀 Deploy

O site pode ser facilmente deployado em qualquer plataforma de hospedagem estática:

- **Netlify**: Arraste a pasta `dist` após o build
- **Vercel**: Conecte o repositório GitHub
- **GitHub Pages**: Configure o workflow de deploy
- **Surge.sh**: `npm run build && surge dist/`

---

**FirstStudios** - Criando experiências únicas através de modelos 3D excepcionais, programações avançadas e addons inovadores para Minecraft.