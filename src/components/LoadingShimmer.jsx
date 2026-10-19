const LoadingShimmer = () => {
  return (
    <div
      role="status"
      aria-label="Loading quiz"
      className="w-full max-w-165 animate-pulse rounded-3xl border border-blue-300 bg-linear-to-br from-blue-100 via-sky-100 to-blue-200 px-7 py-16 shadow-[0_24px_60px_rgba(0,0,0,0.3)] sm:px-10"
    >
      <p className="mb-6 text-center text-lg font-semibold text-orange-900">
        Loading quiz...
      </p>
      <div className="mx-auto mb-12 size-31.5 rounded-full bg-orange-300" />
      <div className="mx-auto mb-5 h-10 w-3/4 rounded-lg bg-orange-300" />
      <div className="mx-auto mb-4 h-7 w-11/12 rounded-lg bg-orange-200" />
      <div className="mx-auto mb-14 h-6 w-2/3 rounded-lg bg-orange-200" />
      <div className="mx-auto h-16 w-1/4 rounded-4xl bg-orange-300" />
    </div>
  )
}

export default LoadingShimmer
