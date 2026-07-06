# SGCL — Architecture Decision Records

## ADR-001 — Separação entre Backend e Frontend

Data: 25/06/2026

### Decisão

O SGCL será dividido em dois projetos:

- sgcl-api
- sgcl-web

### Motivação

Separar responsabilidades entre API e interface, facilitando manutenção, deploy e evolução independente.

### Impacto

O backend expõe uma API REST e o frontend consome essa API via Axios.

# ADR-001

Arquitetura Modular

Motivo:

Separar responsabilidades por domínio.

Status:

Aceito.

---

## ADR-002 — Uso de JWT para autenticação

Data: 25/06/2026

### Decisão

A autenticação será baseada em JWT.

### Motivação

Permitir autenticação stateless, compatível com aplicações web modernas.

### Impacto

Todas as rotas protegidas exigem token no header Authorization.

ADR-002

React Hook Form

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

ADR-003

ApiClient

---

## ADR-004 — Faixa não é alterada pelo cadastro do aluno

Data: 25/06/2026

### Decisão

A faixa do aluno não será alterada pela edição cadastral.

### Motivação

A faixa representa evolução técnica e deve ser controlada pelo módulo de Graduações.

### Impacto

O endpoint de edição do aluno atualiza apenas dados cadastrais.

ADR-004

Design System próprio

---

## ADR-005 — Criação de Design System próprio

Data: 25/06/2026

### Decisão

O frontend terá componentes reutilizáveis próprios.

### Motivação

Garantir consistência visual, reduzir duplicação de código e facilitar evolução.

### Impacto

Novas telas devem priorizar componentes reutilizáveis antes de CSS inline.

ADR-005

Services por módulo