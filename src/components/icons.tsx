export const icons = {
  "logo":  function Logo({ width = 60, height = 60, className }: { width: number, height: number, className?: string }) {
    return (
      <img 
        src="/logo.svg"
        alt="Logo"
        width={width}
        height={height}
        className={className}
      />
    )
  }
}