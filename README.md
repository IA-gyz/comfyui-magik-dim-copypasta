# Magik Dim Copypasta

A frontend-only [ComfyUI](https://github.com/comfyanonymous/ComfyUI) custom node that adds **Copy Node Size** and **Paste Node Size** to the node right-click menu, so you can quickly make nodes the same dimensions.

## Features

- 📐 **Copy Node Size** — copies the width and height of the node you right-clicked.
- 📐 **Paste Node Size** — applies the copied size to the target node(s).
- **Multi-select support** — select several nodes, right-click one of them, and choose *Paste Node Size* to resize all selected nodes at once.
- Toast notifications confirm each copy/paste action.

## Installation

Clone this repository into your ComfyUI `custom_nodes` directory:

```bash
cd ComfyUI/custom_nodes
git clone https://github.com/IA-gyz/comfyui-magik-dim-copypasta.git
```

Then restart ComfyUI and refresh the browser tab.

The package metadata in `pyproject.toml` (`[tool.comfy]`) also makes it publishable to the ComfyUI Registry.

## Usage

1. Right-click a node → **📐 Copy Node Size**.
2. Right-click another node — or select multiple nodes and right-click one of them — → **📐 Paste Node Size**.

The copied size is kept in memory only and is lost when the page is refreshed.

## Requirements

- ComfyUI with a current frontend (uses the `getNodeMenuItems` extension hook).
- No Python dependencies.

## License

[MIT](LICENSE)
