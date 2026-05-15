export function Card({ children, className = "" }) {
  return (
    <div className={`rounded-lg border border-gray-700 bg-gray-950 shadow-sm ${className}`}>
      {children}
    </div>
  );
}

export function CardHeader({ children, className = "" }) {
  return (
    <div className={`flex flex-col space-y-1.5 p-6 ${className}`}>
      {children}
    </div>
  );
}

export function CardTitle({ children, className = "" }) {
  return (
    <h2 className={`text-2xl font-semibold leading-none tracking-tight text-white ${className}`}>
      {children}
    </h2>
  );
}

export function CardDescription({ children, className = "" }) {
  return (
    <p className={`text-sm text-gray-400 ${className}`}>
      {children}
    </p>
  );
}

export function CardContent({ children, className = "" }) {
  return (
    <div className={`p-6 pt-0 ${className}`}>
      {children}
    </div>
  );
}

export function CardFooter({ children, className = "" }) {
  return (
    <div className={`flex items-center p-6 pt-0 ${className}`}>
      {children}
    </div>
  );
}
