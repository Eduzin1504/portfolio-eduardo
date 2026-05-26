# Guia de Deploy no Netlify

## Configuração Completada ✅

Este projeto está pronto para deploy no Netlify. Os seguintes arquivos foram configurados:

### Arquivos Criados/Modificados

1. **netlify.toml** - Configuração do Netlify com:
   - Build command: `npm install && npm run build`
   - Publish directory: `dist/`
   - Node version: 18
   - SPA routing (redirects para index.html)
   - Security headers
   - Cache headers para assets

2. **.env.example** - Template de variáveis de ambiente
   - `VITE_GOOGLE_GENAI_API_KEY` - Chave da API Google GenAI
   - `VITE_ENVIRONMENT` - Ambiente (production/development)

3. **.gitignore** - Atualizado para ignorar arquivos Netlify

## Como Fazer Deploy

### Opção 1: Via GitHub (Recomendado)

1. Faça push do código para um repositório GitHub:
   ```bash
   git add .
   git commit -m "Configure Netlify deployment"
   git push origin main
   ```

2. Conecte seu repositório ao Netlify:
   - Acesse https://app.netlify.com
   - Clique em "Add new site" → "Import an existing project"
   - Selecione GitHub e autorize
   - Escolha o repositório
   - Deixe as configurações padrão (serão lidas do netlify.toml)
   - Clique em "Deploy site"

3. Configure as variáveis de ambiente no Netlify:
   - Acesse "Site settings" → "Build & deploy" → "Environment"
   - Adicione as variáveis necessárias (como `VITE_GOOGLE_GENAI_API_KEY`)

### Opção 2: Deploy Manual via CLI

1. Instale o Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```

2. Faça login:
   ```bash
   netlify login
   ```

3. Faça o deploy:
   ```bash
   netlify deploy --prod
   ```

## Build Local

Para testar o build antes de fazer deploy:

```bash
npm install
npm run build
npm run preview
```

O build local foi testado e funcionando. O output está em `dist/`.

## Variáveis de Ambiente

Adicione no Netlify as seguintes variáveis:

- `VITE_GOOGLE_GENAI_API_KEY`: Sua chave da API do Google GenAI
- Qualquer outra variável que seu app necessário

## Status do Projeto

- ✅ Vite configurado corretamente
- ✅ TypeScript configurado
- ✅ Tailwind CSS integrado
- ✅ React 19 + React DOM configurados
- ✅ Build testado localmente
- ✅ netlify.toml criado com redirects e security headers
- ✅ .env.example documentado
- ✅ .gitignore atualizado

## Troubleshooting

Se o deploy falhar no Netlify:

1. Verifique o build log no Netlify (Site settings → Deploys)
2. Confirme que todas as variáveis de ambiente estão configuradas
3. Execute `npm run build` localmente para reproducir erros
4. Verifique a versão do Node (deve ser 18+)

## Próximos Passos

1. Faça push do código
2. Conecte ao Netlify via GitHub
3. Configure as variáveis de ambiente
4. Seu site estará live!
