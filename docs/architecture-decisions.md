# Sys Belt — Architecture Decision Records

## ADR-001 — Separação entre Backend e Frontend

Data: 25/06/2026

### Decisão

O Sys Belt será dividido em dois projetos:

- sgcl-api
- sgcl-web

### Motivação

Separar responsabilidades entre API e interface, facilitando manutenção, deploy e evolução independente.

### Impacto

O backend expõe uma API REST e o frontend consome essa API via Axios.

Status: Aceito.

---

## ADR-002 — Uso de JWT para autenticação

Data: 25/06/2026

### Decisão

A autenticação será baseada em JWT.

### Motivação

Permitir autenticação stateless, compatível com aplicações web modernas.

### Impacto

Todas as rotas protegidas exigem token no header Authorization.

Status: Aceito.

---

## ADR-003 — Controle de acesso por perfil

Data: 25/06/2026

### Decisão

O sistema terá perfis de acesso:

- ADMIN
- PROFESSOR
- RECEPCAO

### Motivação

Cada usuário deve acessar apenas as funcionalidades compatíveis com sua função.

### Impacto

As rotas usam middlewares de autenticação e autorização.

Status: Aceito.

---

## ADR-004 — Faixa não é alterada pelo cadastro do aluno

Data: 25/06/2026

### Decisão

A faixa do aluno não será alterada pela edição cadastral.

### Motivação

A faixa representa evolução técnica e deve ser controlada pelo módulo de Graduações.

### Impacto

O endpoint de edição do aluno atualiza apenas dados cadastrais.

Status: Aceito.

---

## ADR-005 — Criação de Design System próprio

Data: 25/06/2026

### Decisão

O frontend terá componentes reutilizáveis próprios.

### Motivação

Garantir consistência visual, reduzir duplicação de código e facilitar evolução.

### Impacto

Novas telas devem priorizar componentes reutilizáveis antes de CSS inline.

Status: Aceito.

---

## ADR-006 — Arquitetura modular por domínio

Data: 25/06/2026

### Decisão

Backend e frontend são organizados em módulos por domínio de negócio (alunos, aulas, mensalidades, graduações, etc.), cada um com sua própria pasta autocontida.

### Motivação

Separar responsabilidades por domínio, facilitando localizar e evoluir cada funcionalidade sem impactar as demais.

### Impacto

Cada módulo do backend segue o padrão `controller.ts` / `routes.ts` / `services/`; cada módulo do frontend segue `pages/` / `components/` / `services/` / `hooks/` / `types/` / `schema/`.

Status: Aceito.

---

## ADR-007 — React Hook Form + Zod para formulários

Data: 25/06/2026

### Decisão

Todos os formulários do frontend usam React Hook Form para controle de estado e Zod para validação, via `zodResolver`.

### Motivação

Padronizar validação e reduzir boilerplate de formulários controlados manualmente.

### Impacto

Todo formulário novo deve seguir o padrão `useForm` + `FormProvider` + schema Zod dedicado.

Status: Aceito.

---

## ADR-008 — Camada de Service/ApiClient no frontend

Data: 25/06/2026

### Decisão

Nenhuma página ou componente chama axios/fetch diretamente; toda chamada HTTP passa por uma classe Service do módulo, que por sua vez usa o ApiClient compartilhado.

### Motivação

Isolar a página da forma como os dados são buscados, facilitando troca de implementação e testes.

### Impacto

Páginas dependem apenas de `Service.metodo()`; o ApiClient centraliza o tratamento de resposta do Axios.

Status: Aceito.

---

## ADR-009 — Regra de negócio apenas em Services (backend)

Data: 25/06/2026

### Decisão

Controllers do backend não contêm lógica de negócio; toda regra fica em uma classe Service dedicada por ação.

### Motivação

Manter Controllers finos (apenas leem request e devolvem response), facilitando reuso e teste da lógica de negócio isoladamente.

### Impacto

Cada ação de Controller instancia e chama um XxxService, nunca acessa o Prisma diretamente.

Status: Aceito.