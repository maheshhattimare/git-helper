export function InputBox({ value, onChange }) {
  return (
    <div className="w-full">
      <label
        htmlFor="branch-name"
        className="block text-sm font-medium text-foreground mb-2"
      >
        Branch Name
      </label>
      <input
        id="branch-name"
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="e.g., feature/login-ui"
        className="w-full px-4 py-2 rounded-md border border-border bg-background text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200"
      />
      {!value && (
        <p className="mt-2 text-sm text-muted">
          Enter a branch name to generate Git commands
        </p>
      )}
    </div>
  );
}
