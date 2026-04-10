/**
 * Loading Skeleton Component
 * Provides visual feedback during content loading
 */

export function CardSkeleton() {
  return (
    <div className="p-6 rounded-2xl bg-card/50 border border-border animate-pulse">
      <div className="w-12 h-12 bg-muted rounded-lg mb-4" />
      <div className="h-6 bg-muted rounded w-3/4 mb-2" />
      <div className="h-4 bg-muted rounded w-full mb-2" />
      <div className="h-4 bg-muted rounded w-2/3" />
    </div>
  );
}

export function HeroSkeleton() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center space-y-8">
      <div className="space-y-6 w-full max-w-5xl">
        <div className="h-20 bg-muted rounded w-full animate-pulse" />
        <div className="h-6 bg-muted rounded w-2/3 animate-pulse" />
      </div>
      <div className="flex gap-4">
        <div className="h-16 w-40 bg-muted rounded-full animate-pulse" />
        <div className="h-16 w-40 bg-muted rounded-full animate-pulse" />
      </div>
    </div>
  );
}

export function StatsSkeleton() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="text-center space-y-2">
          <div className="h-12 bg-muted rounded mx-auto w-20 animate-pulse" />
          <div className="h-4 bg-muted rounded mx-auto w-24 animate-pulse" />
        </div>
      ))}
    </div>
  );
}
