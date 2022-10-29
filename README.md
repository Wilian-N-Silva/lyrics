# Cliente

## Estilo

O estilo do projeto será definido no Figma. Posteriormente a aprovação do cliente, o projeto deverá manter o padrão de qualidade e alta fidelidade ao que foi apresentado.

> Este projeto utiliza o [normalize.css](https://github.com/necolas/normalize.css) para correção de problemas entre navegadores e possiveis incompatibilidades.
>
> Para auxílio durante o desenvolvimento é recomendável que use:
>
> - [Can I use](https://caniuse.com/) para verificar se a funcionalidade é 100% com os browsers
> - [MDN Web Docs](https://developer.mozilla.org/) para auxílios gerais durante o desenvolvimento

### Compatibilidade

Para manter coerencia e alta qualidade no desenvolvimento, recomenda-se testar nos browsers:

- Google Chrome
- Mozilla Firefox
- Microsoft Edge
- Opera / Opera GX

### SASS

Este projeto utiliza SCSS para o desenvolvimento da estilização.

Para que funcione, é necessário que tenha o SASS instalado em seu ambiente de desenvolvimento que pode ser baixado [clicando aqui](https://sass-lang.com/)

#### Execução

Seguindo o modelo atual de desenvolvimento, o CSS é minificado para reduzir e otimizar o tempo de carregamento.

De acordo com a estrutura atual de arquivos, você pode executar o comando abaixo a partir da raiz do projeto

```console
sass --watch assets/style/scss/main.scss assets/style/main.min.css --style compressed
```

## SEO e Meta tags

Para auxílio da criação de meta tags você pode utilizar o [metatags.io](https://metatags.io/)

## Geração de ícones

### Favicon

> Um favicon é um pequeno ícone ou uma coleção de ícones associados a um site, página da Web ou aplicativo da Web. Ele é exibido nas guias do navegador e na barra de favoritos. Os exemplos abaixo mostram os favicons do Google, Reddit e Squarespace na guia do navegador.

#### Links

- [favicon.io](https://favicon.io/)

### Maskable

> Os Maskable Icons permitem que os desenvolvedores da Web especifiquem um ícone sem margens que será cortado pelo agente do usuário para corresponder a outros ícones no dispositivo. No Android, isso permite que os desenvolvedores se livrem do fundo branco padrão em torno de seus ícones e usem todo o espaço fornecido gerando

#### Links

- [maskable.app](https://maskable.app/editor)

## Configuração do site.webmanifest

o **site.webmanifest** será baixado junto aos ícones "android-chrome" junto ao site **[favicon.io](https://favicon.io/)**, restando acrescentar o parâmetro maskable

```json
{
    "name": "Nome do projeto",
    "short_name": "Nome resumido",
    "icons": [
        {
            "src": "./assets/img/favicon/android-chrome-192x192.png",
            "sizes": "192x192",
            "type": "image/png"
        },
        {
            "src": "./assets/img/favicon/android-chrome-512x512.png",
            "sizes": "512x512",
            "type": "image/png"
        },
        {
            "src": "./assets/img/favicon/maskable_icon.png",
            "sizes": "602x602",
            "type": "image/png",
            "purpose": "any maskable"
        }
    ],
    "theme_color": "cor do tema em hexadecimal ex.: #000000",
    "background_color": "cor de fundo em hexadecimal ex.: #000000",
    "display": "standalone"
}
```

## Git e Github

Recomenda-se o uso de mensagens de commit semanticas para facilidade de comunicação do que foi feito em cada etapa e com a equipe.

Há uma estrutura específica que pode ser visualizada [clicando aqui](https://www.conventionalcommits.org/en/v1.0.0/)

Como auxílio para a realização, este repositório irá recomendá-lo a instalação da extensão [Conventional Commits](https://marketplace.visualstudio.com/items?itemName=vivaxy.vscode-conventional-commits) a partir do atalho ```ctrl + shift + x```

### .github

#### workflows

Dentro de workflows estarão os arquivos responsáveis por realizar o deploy do projeto. Neste template haverá somente o workflow refente ao deploy da branch **main**

#### preview.jpg

O repositório pode contar com uma imagem de preview assim como ocorre no site com as meta tags. Esta imagem é a que será utilizada.

### Estrutura das branches

- *main*
  - Branch principal onde comportará o código da versão mais recente do projeto
- *develop*
  - Branch que comportará todo código da etapa de desenvolvimento. Ela pode e deve receber o merge de outras branches com novas funcionalidades
- demais branchs
  - Para cada nova funcionalidade ou atribuição, é recomendado o uso de uma ou mais branches além da *develop*

> Todos os colaboradores do projeto receberão suas devidas permissões durante o desenvolvimento. Todo e qualquer commit realizado na branch **main** será direcionado ao ftp do cliente a partir do *Github actions*

## .vscode

Para que toda a equipe esteja alinhada e não haja nenhuma característica como diferencial durante o desenvolvimento, este repositório está alimentado com uma pasta ```.vscode```, onde estão armazenado um arquivo de configuração que será lido automaticamente pelo VS Code e extensões recomendadas que você pode ou não optar por utilizar.
