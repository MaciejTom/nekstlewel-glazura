"use client";

interface Option<T extends string> {
  id: T;
  label: string;
  preview?: React.ReactNode;
}

interface VisualSelectProps<T extends string> {
  label?: string;
  options: Option<T>[];
  value: T;
  onChange: (value: T) => void;
  columns?: 2 | 3 | 4;
}

export function VisualSelect<T extends string>({
  label,
  options,
  value,
  onChange,
  columns = 3,
}: VisualSelectProps<T>) {
  const gridCols = {
    2: "grid-cols-2",
    3: "grid-cols-3",
    4: "grid-cols-4",
  };

  return (
    <div className="space-y-2">
      {label && <p className="text-sm text-foreground">{label}</p>}
      <div className={`grid ${gridCols[columns]} gap-2`}>
        {options.map((option) => (
          <button
            key={option.id}
            onClick={() => onChange(option.id)}
            className={`flex flex-col items-center gap-2 p-3 rounded-lg border transition-all ${
              value === option.id
                ? "border-accent bg-accent/10 ring-1 ring-accent"
                : "border-border hover:border-muted-foreground"
            }`}
          >
            {option.preview && (
              <div className="text-foreground">{option.preview}</div>
            )}
            <span className="text-xs text-foreground">{option.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
