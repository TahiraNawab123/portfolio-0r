export default function ProjectsLoading() {
  return (
    <main className="min-h-screen bg-background px-4 py-20 text-foreground sm:px-6 lg:px-8" aria-busy="true">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-4">
          <div className="h-5 w-32 animate-pulse rounded bg-primary/10" />
          <div className="h-16 w-80 max-w-full animate-pulse rounded bg-primary/10" />
          <div className="h-6 w-96 max-w-full animate-pulse rounded bg-primary/10" />
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }, (_, index) => (
            <div key={index} className="overflow-hidden rounded-lg border border-primary/10 bg-card">
              <div className="h-40 animate-pulse bg-primary/10" />
              <div className="flex flex-col gap-4 p-6">
                <div className="h-6 w-2/3 animate-pulse rounded bg-primary/10" />
                <div className="h-4 w-1/2 animate-pulse rounded bg-primary/10" />
                <div className="h-4 w-full animate-pulse rounded bg-primary/10" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
