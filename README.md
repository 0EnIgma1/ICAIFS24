# conf-website

## How to run
Install `pnpm` first.
```bash

# Clone repo
$ https://github.com/0EnIgma1/conf-website.git && cd conf-website

# Install deps
$ pnpm i

# Development server
$ pnpm dev

# Deploy for production (server)
$ pnpm build
$ pnpm start
# Recommended to use a process manager like PM2 in case server crashes

# Deploy for production (static HTML files)
$ pnpm generate # Files will be generated in the /dist directory

```
"# conf-website" 
