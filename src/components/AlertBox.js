export function showAlertBox(message, options = {}) {
    const alertBox = document.createElement("div");
    alertBox.textContent = message;

    // Default styles
    alertBox.style.position = "fixed";
    alertBox.style.bottom = options.bottom || "10px";
    alertBox.style.right = options.right || "10px";
    alertBox.style.backgroundColor = options.backgroundColor || "#28a745";
    alertBox.style.color = options.color || "white";
    alertBox.style.padding = options.padding || "10px";
    alertBox.style.borderRadius = options.borderRadius || "5px";
    alertBox.style.zIndex = options.zIndex || "1000";

    document.body.appendChild(alertBox);

    // Auto-remove after a delay (default 3 seconds)
    setTimeout(() => {
        document.body.removeChild(alertBox);
    }, options.duration || 3000);
}