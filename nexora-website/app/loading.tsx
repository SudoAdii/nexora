export default function Loading() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-nexora-green/20 border-t-nexora-green rounded-full animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-nexora-green text-sm font-medium">NEXORA</span>
        </div>
      </div>
    </div>
  )
}
