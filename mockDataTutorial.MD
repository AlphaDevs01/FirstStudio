# 📚 Tutorial de Uso do MockData - FirstStudios

Este tutorial explica como personalizar e gerenciar todo o conteúdo do site FirstStudios através do sistema de MockData.

## 🎯 Visão Geral

O site FirstStudios utiliza um sistema centralizado de dados mockados que permite personalizar todo o conteúdo sem precisar editar múltiplos arquivos. Todos os dados ficam organizados no arquivo `src/data/mockData.ts`.

## 📁 Estrutura dos Arquivos

```
src/data/
├── mockData.ts          # Arquivo principal com todos os dados
├── mockDataTemplate.ts  # Backup/template dos dados originais
└── README.md           # Este tutorial
```

## 🔧 Como Personalizar o Conteúdo

### 1. Informações Básicas do Site

```typescript
export const siteConfig = {
  siteName: 'FirstStudios',                    // Nome do site
  siteDescription: 'Descrição do site...',  // Descrição para SEO
  
  hero: {
    title: 'FirstStudios',                     // Título principal da home
    subtitle: 'Subtítulo explicativo...',   // Subtítulo da home
    primaryButtonText: 'Ver Projetos',      // Texto do botão principal
    secondaryButtonText: 'Assista Demo'     // Texto do botão secundário
  }
}
```

### 2. Adicionando Membros da Equipe

```typescript
export const teamMembers: TeamMember[] = [
  {
    id: '5',                                    // ID único
    name: 'Novo Membro',                        // Nome completo
    role: 'Desenvolvedor Frontend',             // Cargo/função
    bio: 'Especialista em React e TypeScript', // Biografia
    image: 'https://url-da-imagem.com'          // URL da foto
  }
  // ... outros membros
];
```

### 3. Criando Novas Categorias de Modelos

```typescript
export const modelCategories: Category[] = [
  {
    id: '6',                           // ID único
    name: 'Armas',                     // Nome da categoria
    description: 'Armas medievais'     // Descrição
  }
  // ... outras categorias
];
```

### 4. Adicionando Novos Modelos 3D

```typescript
export const modelSets: ModelSet[] = [
  {
    id: '10',                                    // ID único
    name: 'Espadas Lendárias',                  // Nome do modelo
    categoryId: '6',                            // ID da categoria (deve existir)
    description: 'Coleção de espadas épicas',  // Descrição curta
    images: [                                   // Array de URLs das imagens
      'https://url-imagem1.com',
      'https://url-imagem2.com',
      'https://url-imagem3.com'
    ],
    detailedDescription: 'Descrição completa...' // Descrição detalhada
  }
  // ... outros modelos
];
```

### 5. Adicionando Programações/Scripts

```typescript
export const programmingSets: ProgrammingSet[] = [
  {
    id: '5',
    name: 'Sistema de Clãs',
    categoryId: '1',                              // ID da categoria
    description: 'Sistema completo de clãs',
    codeImages: [                                 // Screenshots do código
      'https://url-codigo1.com',
      'https://url-codigo2.com'
    ],
    functionality: 'Permite criar e gerenciar clãs',
    technicalDetails: 'Desenvolvido em JavaScript...',
    illustrations: [                              // Imagens ilustrativas
      'https://url-ilustracao.com'
    ]
  }
];
```

### 6. Adicionando Addons com Vídeos

```typescript
export const addonSets: AddonSet[] = [
  {
    id: '7',
    name: 'Sistema de Pets',
    categoryId: '1',
    description: 'Pets inteligentes para Minecraft',
    videoUrl: 'https://www.youtube.com/watch?v=VIDEO_ID',
    embedId: 'VIDEO_ID'                          // ID do vídeo do YouTube
  }
];
```

### 7. Personalizando Textos das Páginas

```typescript
export const siteConfig = {
  pages: {
    team: {
      title: 'Nossa Equipe Incrível',
      description: 'Conheça nossos profissionais...'
    },
    models: {
      title: 'Modelos 3D Premium',
      description: 'Explore nossa coleção...'
    },
    contact: {
      title: 'Fale Conosco',
      description: 'Entre em contato...',
      formTitle: 'Envie sua Mensagem',
      contactInfoTitle: 'Nossos Contatos',
      socialMediaTitle: 'Redes Sociais'
    }
  }
}
```

## 🔄 Como Fazer Backup e Restaurar

### Fazendo Backup
1. Copie o conteúdo de `mockData.ts`
2. Cole em um arquivo separado ou no `mockDataTemplate.ts`

### Restaurando Dados Originais
1. Copie o conteúdo de `mockDataTemplate.ts`
2. Cole em `mockData.ts`
3. Salve o arquivo

## 📝 Dicas Importantes

### ✅ Boas Práticas

1. **IDs Únicos**: Sempre use IDs únicos para cada item
2. **URLs Válidas**: Use URLs reais para imagens (Pexels, Unsplash, etc.)
3. **Categorias Existentes**: Ao criar itens, certifique-se que a categoria existe
4. **Backup Regular**: Faça backup antes de grandes mudanças

### ⚠️ Cuidados

1. **Não Quebrar Sintaxe**: Mantenha a estrutura TypeScript correta
2. **Vírgulas**: Não esqueça vírgulas entre objetos no array
3. **Aspas**: Use aspas simples ou duplas consistentemente
4. **IDs de Categoria**: Certifique-se que `categoryId` corresponde a uma categoria existente

## 🎨 Personalizando Imagens

### Fontes Recomendadas de Imagens Gratuitas:
- **Pexels**: https://pexels.com
- **Unsplash**: https://unsplash.com
- **Pixabay**: https://pixabay.com

### Tamanhos Recomendados:
- **Fotos da Equipe**: 400x400px (quadradas)
- **Modelos 3D**: 600x400px (retangulares)
- **Screenshots de Código**: 600x400px
- **Hero Background**: 1200x800px

## 🚀 Exemplo Completo: Adicionando Nova Seção

```typescript
// 1. Adicionar nova categoria
export const modelCategories: Category[] = [
  // ... categorias existentes
  {
    id: '7',
    name: 'Magia',
    description: 'Itens mágicos e encantamentos'
  }
];

// 2. Adicionar modelos para a categoria
export const modelSets: ModelSet[] = [
  // ... modelos existentes
  {
    id: '15',
    name: 'Varinhas Mágicas',
    categoryId: '7',
    description: 'Coleção de varinhas com poderes únicos',
    images: [
      'https://images.pexels.com/photos/example1.jpg',
      'https://images.pexels.com/photos/example2.jpg'
    ],
    detailedDescription: 'Set completo com 10 varinhas mágicas diferentes, cada uma com poderes e efeitos visuais únicos. Perfeito para servidores RPG.'
  }
];
```

## 🔍 Verificando se Tudo Está Funcionando

1. Salve o arquivo `mockData.ts`
2. Verifique se não há erros no console do navegador
3. Navegue pelas páginas do site
4. Confirme se os novos dados aparecem corretamente

## 📞 Suporte

Se encontrar problemas:
1. Verifique a sintaxe TypeScript
2. Confirme se todos os IDs são únicos
3. Certifique-se que as URLs das imagens são válidas
4. Consulte o `mockDataTemplate.ts` como referência

---

**Lembre-se**: Este sistema permite total controle sobre o conteúdo do site sem precisar mexer no código React. Todas as mudanças são refletidas automaticamente na interface!
