# Boas vindas ao repositório do meu Portifólio



## Contexto

Formado no final do ano de 2022 como Desenvolvedor Web Full Stack pela [Trybe](https://www.betrybe.com/), resolvi construir um portifólio para agrupar de forma visual e interativa os meus principais projetos pessoais e informações sobre mim.

### `Caso queira acessar a página da aplicação` [clique aqui](https://alexsandrodev.com)

# 
## Principais desafios que encontrei

#

* **O Nextjs** é uma tecnologia que estou aprendendo, e em alguns momentos o de SSR me confundia um pouco, mas no final acredito que estou pegando o jeito.

* **O componente `Image` do Next** me quebrou a cabeça porque ele pede para definir um width e heigh prévio para a imagem, mas quando eu tornava a imagem responsiva com o css, pondo o width da imagem para 100% do seu container, a imagem continuava com o height que constava no componente `Image` do Next. Resolvi isso pondo um height: auto no css. Olhando agora parece simples e óbvio mas levei um tempo para perceber isso 😁.

* **Comprar e configurar** um domínio é algo que eu nunca havia feito antes, mas é bem mais simples do que eu esperava. Fiquei muito feliz depois de configurar meu primeiro domínio e velo funcionando 🚀

* **A API do Github** foi o que eu usei para consultar os dados dos meus repositórios de projetos no Github que estão listados no portifólio. Usei a função `getStaticprops` do Next para usar o SSR das informações e não precisar fazer requisições a API do Github a cada consulta no portifólio.

# 

## Tecnologias usadas

* `Nextjs`
* `Typescript`
* `Css-modules`
* `Git`
* `Deploy na Vercel`

## Executando a aplicação

1. Fazendo o clone;

```bash
  git clone git@github.com:Alexsandro-01/Portifolio.git
``` 

2. Instalando as dependências;

```bash
npm install
``` 

3. Iniciando a aplicação;

```bash
npm run dev
```

4. Acesse a aplicação no seu browser;

```
http://localhost:3000/
```

