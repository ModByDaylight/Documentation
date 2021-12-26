# Dead by Daylight Modding Documentation

Documentation for Dead by Daylight modding. The `master` branch is hosted on https://modbydaylight.com.

## Contributing

Contributions are welcomed and appreciated. All pull requests should target the `dev` branch.

Before opening a pull request, it is recommended you [test your changes locally](#development-setup) to ensure there are no linking errors and everything displays as expected.

## Development Setup

Requirements:

- [Node.JS](https://nodejs.org/en/)
- [Python 3](https://www.python.org/)
- npm and pip, which should be installed with Node.JS and Python respectively

Instructions:

1. Open a terminal window in the documentation root directory and run `npm run setup` to install necessary dependencies. 
If the installer complains about the installation directory not being included in the path, it may be necessary to add it.
1. Run `npm run serve` to launch a webserver at http://localhost:8000, which you can then connect to with a browser. The webserver will watch for changes to documentation files and automatically update and refresh your browser as you make changes. You may also run `npm run build` which will generate output HTML in the `site` directory.