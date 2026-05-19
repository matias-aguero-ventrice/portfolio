/* Renderiza un icono de Simple Icons como SVG inline */
export function SimpleIcon({
  path,
  hex,
  title,
  className = "h-4 w-4",
}: {
  path: string;
  hex: string;
  title: string;
  className?: string;
}) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill={`#${hex}`}
      aria-label={title}
    >
      <path d={path} />
    </svg>
  );
}
