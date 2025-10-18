import { useState } from "react";
import { ChevronDown, ChevronRight, Copy, Check } from "lucide-react";

export function CommandGroup({ category }) {
  const [isExpanded, setIsExpanded] = useState(false);
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
    <div className="border border-border rounded-lg bg-background overflow-hidden">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-6 py-4 flex items-center justify-between hover:bg-secondary transition-colors duration-150 text-left"
        aria-expanded={isExpanded}
      >
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-foreground mb-1">
            {category.title}
          </h3>
          <p className="text-sm text-muted">{category.description}</p>
        </div>
        <div className="ml-4 text-muted">
          {isExpanded ? (
            <ChevronDown className="w-5 h-5" />
          ) : (
            <ChevronRight className="w-5 h-5" />
          )}
        </div>
      </button>

      {isExpanded && (
        <div className="border-t border-border bg-secondary/30">
          <div className="px-6 py-4 space-y-3">
            {category.commands.map((command, index) => (
              <div key={index} className="group">
                <div className="flex items-start gap-3 mb-1">
                  <code className="flex-1 px-3 py-2 bg-background text-foreground text-sm font-mono rounded border border-border break-all">
                    {command.cmd}
                  </code>
                  <button
                    onClick={() => copyToClipboard(command.cmd, index)}
                    className="p-2 rounded-md border border-border bg-background hover:bg-secondary transition-colors duration-150 opacity-0 group-hover:opacity-100 focus:opacity-100 flex-shrink-0"
                    aria-label="Copy command"
                  >
                    {copiedIndex === index ? (
                      <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
                    ) : (
                      <Copy className="w-4 h-4 text-muted" />
                    )}
                  </button>
                </div>
                <p className="text-sm text-muted pl-3">{command.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
