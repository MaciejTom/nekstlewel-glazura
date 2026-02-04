"use client";

import { useState } from "react";
import { GripVertical, Eye, EyeOff } from "lucide-react";
import { SectionConfig } from "@/lib/theme-config";

interface DragListProps {
  items: SectionConfig[];
  onChange: (items: SectionConfig[]) => void;
}

export function DragList({ items, onChange }: DragListProps) {
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);

  const sortedItems = [...items].sort((a, b) => a.order - b.order);

  const handleDragStart = (index: number) => {
    setDraggedIndex(index);
  };

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    if (draggedIndex === null || draggedIndex === index) return;

    const newItems = [...sortedItems];
    const [removed] = newItems.splice(draggedIndex, 1);
    newItems.splice(index, 0, removed);

    // Update order
    const reordered = newItems.map((item, i) => ({ ...item, order: i }));
    onChange(reordered);
    setDraggedIndex(index);
  };

  const handleDragEnd = () => {
    setDraggedIndex(null);
  };

  const toggleVisibility = (id: string) => {
    const newItems = items.map(item =>
      item.id === id ? { ...item, visible: !item.visible } : item
    );
    onChange(newItems);
  };

  return (
    <div className="space-y-1">
      {sortedItems.map((item, index) => (
        <div
          key={item.id}
          draggable
          onDragStart={() => handleDragStart(index)}
          onDragOver={(e) => handleDragOver(e, index)}
          onDragEnd={handleDragEnd}
          className={`flex items-center gap-2 p-2 rounded-lg border transition-all cursor-move ${
            draggedIndex === index
              ? "border-accent bg-accent/10 opacity-50"
              : "border-border hover:border-muted-foreground"
          } ${!item.visible ? "opacity-50" : ""}`}
        >
          <GripVertical className="w-4 h-4 text-muted-foreground flex-shrink-0" />
          <span className="flex-1 text-sm text-foreground">{item.name}</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleVisibility(item.id);
            }}
            className={`p-1 rounded transition-colors ${
              item.visible
                ? "text-accent hover:bg-accent/10"
                : "text-muted-foreground hover:bg-muted"
            }`}
          >
            {item.visible ? (
              <Eye className="w-4 h-4" />
            ) : (
              <EyeOff className="w-4 h-4" />
            )}
          </button>
        </div>
      ))}
    </div>
  );
}
