name: Bug Report
description: Sugerir uma ideia para este projeto.
title: "[Bug Report]: "
labels: "bug :beetle:"
body:
- type: checkboxes
  attributes:
    label: Preflight Checklist
    description: Certifique-se de ter concluído todos os itens a seguir.
    options:
      - label: Eu li [Contributing Guidelines](../../CONTRIBUTING.md) para esse projeto.
        required: true
      - label: Eu concordo em seguir o [Code of Conduct](../../CODE_OF_CONDUCT.md) que este projeto segue.
        required: true
      - label: Eu procurei o [issue tracker](https://github.com/leoviana00/lab-k8s-prep-cks/issues) para uma solicitação de recurso que corresponde àquela que desejo registrar, sem sucesso.
        required: true
- type: textarea
  attributes:
    label: Descrição do problema
    description: Adicione uma descrição clara e concisa do problema que você deseja resolver com esta solicitação de recurso.
  validations:
    required: true
- type: textarea
  attributes:
    label: Solução Proposta
    description: Descreva a solução que você deseja de forma clara e concisa.
  validations:
    required: true
- type: textarea
  attributes:
    label: Alternativas consideradas
    description: Uma descrição clara e concisa de quaisquer soluções ou recursos alternativos que você considerou.
  validations:
    required: true
- type: textarea
  attributes:
    label: Informações adicionais
    description: Adicione qualquer outro contexto sobre o problema aqui.
  validations:
    required: false
