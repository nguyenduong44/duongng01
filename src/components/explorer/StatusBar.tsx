interface StatusBarProps {
  items: number;
  label?: string;
}

const StatusBar = ({ items, label = "Ready" }: StatusBarProps) => {
  return (
    <div className="flex items-center justify-between px-3 py-1 border-t border-line bg-ivory text-xs text-muted">
      <span>
        {items} item{items === 1 ? "" : "s"}
      </span>
      <span>{label}</span>
    </div>
  );
};

export default StatusBar;
