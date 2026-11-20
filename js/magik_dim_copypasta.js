// magik_dim_copypasta.js
import { app } from "../../scripts/app.js";

let sizeClipboard = null; // { width, height }

app.registerExtension({
    name: "Magik Dim CopyPasta",

    // Node right-click menu — ComfyUI merges these into the built-in options itself,
    // no need to chain onto LGraphCanvas.prototype.getNodeMenuOptions.
    getNodeMenuItems(node) {
        // Only add if the node has a valid size
        if (!node?.size) return [];

        return [
            null, // separator
            {
                content: "📐 Copy Node Size",
                callback: () => {
                    sizeClipboard = {
                        width: node.size[0],
                        height: node.size[1],
                    };
                    app.extensionManager.toast.add({
                        severity: "info",
                        summary: "Copied Node Size",
                        detail: `${sizeClipboard.width} × ${sizeClipboard.height}`,
                        life: 3000,
                    });
                },
            },
            {
                content: "📐 Paste Node Size",
                callback: () => {
                    if (!sizeClipboard) {
                        app.extensionManager.toast.add({
                            severity: "warn",
                            summary: "Nothing to paste",
                            detail: "Copy a node size first.",
                            life: 2000,
                        });
                        return;
                    }
                    const selected = app.canvas?.selected_nodes
                        ? Object.values(app.canvas.selected_nodes)
                        : [];
                    const targets =
                        selected.length > 1 && selected.includes(node) ? selected : [node];
                    for (const target of targets) {
                        if (target?.size) {
                            target.size = [sizeClipboard.width, sizeClipboard.height];
                        }
                    }
                    app.canvas?.setDirty(true, true);
                    app.extensionManager.toast.add({
                        severity: "success",
                        summary: "Node Size Pasted",
                        detail: `${sizeClipboard.width} × ${sizeClipboard.height} on ${targets.length} node${targets.length === 1 ? "" : "s"}`,
                        life: 2000,
                    });
                },
                // Disable if clipboard is empty
                disabled: !sizeClipboard,
            },
        ];
    },
});
