# Leitor de Texto Acessível

## Descrição

Este projeto demonstra uma implementação de acessibilidade utilizando a Web Speech API para leitura de texto.

O sistema garante que apenas uma leitura ocorra por vez. Sempre que o usuário solicitar uma nova leitura, a anterior é interrompida, evitando sobreposição de áudio e melhorando a experiência de usuários que utilizam tecnologias assistivas.

## Funcionalidades

- Leitura de texto em voz alta.
- Apenas uma leitura ativa por vez.
- Cancelamento automático da leitura anterior.
- Prevenção de sobreposição de áudio.
- Registro de eventos no console para facilitar os testes.

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- Web Speech API

## Como executar

1. Abra o arquivo `index.html` em um navegador compatível.
2. Clique no botão **Ler conteúdo**.
3. Clique várias vezes rapidamente para verificar que a leitura anterior é interrompida antes de iniciar uma nova.
