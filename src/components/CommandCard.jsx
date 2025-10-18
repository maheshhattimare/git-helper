import { Copy, Check } from "lucide-react";
import { useState } from "react";

export function CommandCard({ section }) {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const copyToClipboard = async (command, index) => {
    try {
      await navigator.clipboard.writeText(command);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="border border-border rounded-lg p-6 bg-background">
      <h2 className="text-lg font-semibold text-foreground mb-1">
        {section.title}
      </h2>
      <p className="text-sm text-muted mb-4">{section.description}</p>
      <div className="space-y-2">
        {section.commands.map((command, index) => (
          <div key={index} className="flex items-center gap-2 group">
            <code className="flex-1 px-3 py-2 bg-secondary text-foreground text-sm font-mono rounded border border-border">
              {command}
            </code>
            <button
              onClick={() => copyToClipboard(command, index)}
              className="p-2 rounded-md border border-border hover:bg-secondary transition-colors duration-200 opacity-0 group-hover:opacity-100 focus:opacity-100"
              aria-label="Copy command"
            >
              {copiedIndex === index ? (
                <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
              ) : (
                <Copy className="w-4 h-4 text-muted" />
              )}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
