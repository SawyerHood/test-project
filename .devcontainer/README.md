# Terragon Dev Container

This directory contains the development container configuration for the Terragon project.

## What's Included

- **Node.js 22** (latest LTS)
- **pnpm** (latest version)
- **Git** and **GitHub CLI**
- **VS Code extensions** for:
  - TypeScript/JavaScript development
  - Tailwind CSS
  - ESLint and Prettier
  - Vitest testing
  - And more...

## Getting Started

### Prerequisites

- [Docker](https://docs.docker.com/get-docker/)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Dev Containers extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) for VS Code

### Usage

1. **Open in Dev Container**:

   - Open the project in VS Code
   - Press `Cmd+Shift+P` (macOS) or `Ctrl+Shift+P` (Windows/Linux)
   - Type "Dev Containers: Reopen in Container"
   - Select the command and wait for the container to build

2. **Alternative method**:
   - Click the blue button in the bottom-left corner of VS Code
   - Select "Reopen in Container"

### What Happens

When the container starts:

1. **Node.js 22** and **pnpm latest** are installed
2. **All project dependencies** are installed automatically
3. **Port forwarding** is set up for:
   - `3000`: Next.js development server
   - `5173`: Vite development server
   - `8080`: API server
4. **VS Code extensions** are installed automatically
5. **Development settings** are configured

### Running the Project

Once the container is running:

```bash
# Start the development server
pnpm dev

# Or navigate to specific apps
cd apps/www
pnpm dev
```

### Performance Notes

- **Node modules** are mounted as volumes for better performance
- The container will **automatically install dependencies** on start
- **Port forwarding** is configured to access your apps from the host

### Customization

You can modify the dev container configuration in:

- `.devcontainer/devcontainer.json`: Main configuration
- Add additional VS Code extensions or settings as needed

### Troubleshooting

If you encounter issues:

1. **Rebuild the container**: `Cmd+Shift+P` → "Dev Containers: Rebuild Container"
2. **Check Docker is running** and has sufficient resources allocated
3. **Clear volumes** if needed: `Cmd+Shift+P` → "Dev Containers: Rebuild Without Cache"
