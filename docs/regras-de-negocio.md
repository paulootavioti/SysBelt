# SGCL — Regras de Negócio

## Alunos

- Todo aluno possui cadastro individual.
- O aluno pode estar ativo ou inativo.
- Alunos não devem ser excluídos fisicamente do sistema.
- A inativação preserva histórico de presenças, mensalidades, graduações e avaliações.

Aluno

Pode possuir até dois responsáveis.

Todo aluno pertence a uma turma.

Todo aluno possui histórico de graduação.

Todo aluno possui controle de presença.

Todo aluno possui controle comportamental.

Depois:

## Cadastro do aluno

Campos planejados:

- Nome completo
- Data de nascimento
- Foto
- Endereço
- Escola
- Série escolar
- Tamanho do kimono
- Peso
- Altura
- Restrições médicas
- Alergias
- Medicamentos
- Responsável 1
- Responsável 2
- Observações dos responsáveis

## Graduação técnica

- O aluno inicia na faixa Branca.
- A faixa não pode ser alterada pela edição cadastral.
- A graduação deve ser registrada em módulo próprio.
- Cada 8 presenças equivalem a 1 grau.
- Cada 4 graus indicam possibilidade de troca de faixa.
- A troca de faixa deve gerar histórico.

Graduação

Branca

↓

Cinza e Branca

↓

Cinza

↓

...

Graus

8 presenças

↓

1 grau

4 graus

↓

Próxima faixa

## Faixas Kids

Ordem oficial planejada:

1. Branca
2. Cinza e branca
3. Cinza
4. Cinza e preta
5. Amarela e branca
6. Amarela
7. Amarela e preta
8. Laranja e branca
9. Laranja
10. Laranja e preta
11. Verde

## Graduação comportamental

Critérios definidos:

- Azul: Respeito
- Verde: Valentia
- Laranja: Esforço
- Amarelo: Atenção
- Vermelho: Disciplina

## Financeiro

- Mensalidades podem estar pagas ou pendentes.
- Mensalidade vencida é aquela com vencimento anterior à data atual e não paga.
- O histórico financeiro deve ser preservado.

## Usuários

Perfis:

- ADMIN
- PROFESSOR
- RECEPCAO

Regras:

- Usuário inativo não pode acessar o sistema.
- O perfil atual deve ser validado no banco, não apenas no token.