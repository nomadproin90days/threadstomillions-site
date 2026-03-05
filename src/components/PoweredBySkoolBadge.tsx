import React from "react";

type BadgeVariant = "primary" | "compact";
type BadgeTheme = "light" | "dark";

interface PoweredBySkoolProps {
  variant?: BadgeVariant;
  theme?: BadgeTheme;
  className?: string;
}

export const PoweredBySkoolBadge: React.FC<PoweredBySkoolProps> = ({
  variant = "primary",
  theme = "light",
  className = "",
}) => {
  // Skool Colorful Branding Colors
  const skoolBlue = "#3B82F6"; // Blue
  const skoolRed = "#EF4444"; // Red
  const skoolYellow = "#FACC15"; // Yellow
  const skoolGreen = "#22C55E"; // Green
  const skoolLightBlue = "#87CEEB"; // Light Blue for 'l'

  const darkBg = "hsl(222.2 70% 8%)"; // Using our --card color
  const lightBg = "#ffffff";
  const darkText = "#f8fafc"; // Slate 50
  const lightText = "#1e293b"; // Slate 800 (for "Powered by")

  // Configuration based on props
  const bgColor = theme === "light" ? lightBg : darkBg;
  const textColor = theme === "light" ? lightText : darkText;
  const borderColor = theme === "light" ? "#e2e8f0" : "hsl(var(--border))";
  
  // Dimensions
  const width = variant === "primary" ? 180 : 100;
  const height = 44;
  const borderRadius = height / 2;

  return (
    <div className={`inline-flex items-center justify-center select-none ${className}`}>
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-sm transition-transform hover:scale-105"
      >
        {/* Background Pill */}
        <rect
          x="1"
          y="1"
          width={width - 2}
          height={height - 2}
          rx={borderRadius}
          fill={bgColor}
          stroke={borderColor}
          strokeWidth="2"
        />

        {/* Icon: Abstract Spark/Community Node - Using skoolBlue */}
        <g transform="translate(14, 11)">
          <circle cx="11" cy="11" r="11" fill={`${skoolBlue}20`} />
          <path
            d="M11 6C11 6 13 9 16 11C13 13 11 16 11 16C11 16 9 13 6 11C9 9 11 6 11 6Z"
            fill={skoolBlue}
          />
        </g>

        {/* Text */}
        {variant === "primary" ? (
          <text
            x="42"
            y="28"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize="14"
            fontWeight="600"
            fill={textColor}
            letterSpacing="-0.01em"
          >
            Powered by{" "}
            <tspan fill={skoolBlue} fontWeight="700">S</tspan>
            <tspan fill={skoolRed} fontWeight="700">k</tspan>
            <tspan fill={skoolYellow} fontWeight="700">o</tspan>
            <tspan fill={skoolGreen} fontWeight="700">o</tspan>
            <tspan fill={skoolLightBlue} fontWeight="700">l</tspan>
          </text>
        ) : (
          <text
            x="42"
            y="28"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize="15"
            fontWeight="700"
            fill={textColor}
          >
            <tspan fill={skoolBlue}>S</tspan>
            <tspan fill={skoolRed}>k</tspan>
            <tspan fill={skoolYellow}>o</tspan>
            <tspan fill={skoolGreen}>o</tspan>
            <tspan fill={skoolLightBlue}>l</tspan>
          </text>
        )}
      </svg>
    </div>
  );
};

export default PoweredBySkoolBadge;
