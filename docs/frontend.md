# Frontend - SGCL Web

## Objetivo

O frontend do SGCL foi desenvolvido utilizando React, TypeScript e Vite, seguindo uma arquitetura modular baseada em domínio (Domain Driven Frontend).

O objetivo principal é manter o sistema altamente reutilizável, escalável e de fácil manutenção.

---

# Estrutura

src/

components/
contexts/
modules/
routes/
services/
shared/
styles/

---

# Components

Os componentes são divididos em duas categorias.

## layout

Responsáveis pela estrutura visual das páginas.

Exemplos:

- Layout
- PageHeader
- Toolbar

## ui

Componentes reutilizáveis.

Exemplos:

- Button
- Input
- Select
- Table
- Card
- Modal
- FormSection
- FormGrid
- StatusBadge

# Módulos

Cada domínio possui sua própria estrutura.

Exemplo:

modules/alunos/

components/

pages/

services/

schema/

validators/

constants/

mappers/

utils/

hooks/

types.ts

# Formulários

Todos os formulários utilizam:

React Hook Form

Zod

FormProvider

Nenhum formulário utiliza useState para armazenar valores dos campos.

# Comunicação com API

Nenhuma página realiza chamadas HTTP diretamente.

Toda comunicação segue o fluxo:

Página

↓

Service

↓

ApiClient

↓

Axios

↓

Backend

# Padrões

Não utilizar any.

Utilizar unknown.

Utilizar getApiErrorMessage.

Utilizar Design Tokens.

Utilizar FormGrid.

Utilizar FormSection.

# Estrutura do Projeto

```text
src/

components/
contexts/
modules/
routes/
services/
shared/
styles/

App.tsx
main.tsx

# Tecnologias

- React
- TypeScript
- Vite
- React Router
- Axios
- React Hook Form
- Zod
