# Ambiente secundário do Ministério Seven

Este diretório é a base isolada para implementar e validar a próxima versão do site.

## Regras de isolamento

- Não usar o projeto Firebase de produção `ministerio-seven-site`.
- Não publicar no domínio oficial `ministerioseven.site`.
- Não apontar o painel administrativo para `adm.ministerioseven.site`.
- Não copiar contas, senhas ou dados pessoais de usuários reais.
- Importar somente conteúdo público necessário e apenas para um projeto de testes explicitamente configurado.
- Manter `robots.txt` bloqueando indexação durante todo o período de testes.
- Exigir aprovação antes de configurar DNS, publicar externamente ou ativar serviço com cobrança.

## Estado atual

- Código copiado do projeto ativo em 8 de novembro de 2026.
- Vínculo do Firebase de produção removido da cópia.
- Configuração do projeto Firebase de testes ainda pendente.
- Nenhum deploy realizado.

## Endereços planejados

- Site público: raiz de um único subdomínio de testes.
- Administração: `/admin/` no mesmo subdomínio.

