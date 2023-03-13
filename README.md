# tailwindcss-boilerplate

A quick opionated setup to get you up and running without doing any configuration. This is useful for prototype.

## Installation

To get started:

1. Clone the repository:

`git clone https://github.com/peoray/tailwind-boilerplate.git`
`cd tailwind-boilerplate`

2. Install the dependencies:
    ```
    # npm
    npm install

    # yarn
    yarn install
    ```

3. Start up development server
    ```
    # npm
    npm run start

    # yarn
    yarn run start
    ```

#### To build for production

The production code is optimized using [cssnano](https://cssnano.co/). 

To run

```
    # npm
    npm run prod

    # Yarn
    yarn run prod
   ```
This will create a minify css file in `dist/css/main.css`.

#### Tailwind Config

You can find an example of a tailwind config file [here](https://gist.github.com/peoray/43d0695faf1f52b1a4c087ef99c74686)

## License

MIT
