import "../../styles/Character/ProgressBar.css";

interface ProgressBarProps {
  label: string;
  value: number;
}

export default function ProgressBar({
  label,
  value,
}: ProgressBarProps) {
  return (
    <div className="stat-row">

      <span className="stat-label">
        {label}
      </span>

      <div className="progress-track">
        <div
          className="progress-fill"
          style={{ width: `${value}%` }}
        />
      </div>

      <span className="stat-value">
        {value}
      </span>

    </div>
  );
}