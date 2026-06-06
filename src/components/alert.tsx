interface AlertProps {
  children: React.ReactNode;
}

export function Alert({ children }: AlertProps) {
  return (
    <div className="rounded bg-yellow-100 p-4 border">
      {children}
    </div>
  );
}