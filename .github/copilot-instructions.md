# Instrucoes do Repositorio (Template Angular Base)

## Objetivo
Este projeto e um template Angular generico, reutilizavel e sem regra de negocio fixa.
Qualquer nova implementacao deve preservar a arquitetura por camadas abaixo.

## Estrutura oficial
A raiz funcional da aplicacao esta em `src/app`.

- `core/`: camada global e singleton.
  - `guards/`, `interceptors/`, `services/`, `layouts/`, `config/`
- `shared/`: recursos reutilizaveis e agnosticos de dominio.
  - `components/`, `directives/`, `pipes/`, `models/`, `enums/`, `utils/`
- `features/`: dominios da aplicacao, cada um isolado.
  - Exemplo de padrao por feature:
    - `pages/`, `components/`, `services/`, `dto/`, `interfaces/`, `store/`, `<feature>.routes.ts`

## Arquivos centrais (nao quebrar contrato)
- `src/main.ts`: bootstrap da aplicacao.
- `src/app/app.component.ts`: root component com `router-outlet`.
- `src/app/app.routes.ts`: roteamento raiz, layouts e lazy loading das features.
- `src/app/core/config/app.config.ts`: providers globais (router, http, interceptors etc.).
- `src/app/app.config.ts`: re-export de `core/config/app.config.ts`.

## Convencoes obrigatorias
- Usar componentes standalone.
- Preferir `ChangeDetectionStrategy.OnPush`.
- Manter feature routes com lazy loading.
- Evitar logica de dominio em `core/` e `shared/`.
- Colocar tipos de API em `dto/` e `interfaces/` da feature.
- Estado local de feature em `store/` da propria feature.

## Estilo e UI
- Tailwind esta ativo em `src/styles.css`.
- Estrutura para SCSS/CSS modular ja existe em `src/styles/` (`themes/`, `abstracts/`, `components/`, `layouts/`).
- Manter compatibilidade com ambas as abordagens (Tailwind + estrutura de estilos por pastas).

## Ambientes e assets
- Ambientes: `src/environments/environment.ts` e `src/environments/environment.prod.ts`.
- File replacement de producao configurado em `angular.json`.
- Assets globais em `src/assets/` (`images/`, `icons/`, `i18n/`).

## Regra para novas alteracoes
Antes de criar qualquer arquivo novo, escolher a camada correta:
1. Global e transversal -> `core/`
2. Reutilizavel e neutro -> `shared/`
3. Regra de dominio -> `features/<dominio>/`

Se houver duvida, priorizar isolamento por feature e manter o projeto generico para reutilizacao futura.
