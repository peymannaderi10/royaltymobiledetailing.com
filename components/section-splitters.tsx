// Simple Line Splitter
export function LineSplitter() {
  return (
    <div className="py-8 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      </div>
    </div>
  )
}

// Dots Splitter
export function DotsSplitter() {
  return (
    <div className="py-8 bg-white">
      <div className="flex justify-center items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-accent/60"></div>
        <div className="w-2 h-2 rounded-full bg-accent/40"></div>
        <div className="w-2 h-2 rounded-full bg-accent/20"></div>
      </div>
    </div>
  )
}

// Geometric Splitter
export function GeometricSplitter() {
  return (
    <div className="py-8 bg-white">
      <div className="flex justify-center">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 border border-accent/30 rotate-45"></div>
          <div className="w-8 h-px bg-accent/30"></div>
          <div className="w-2 h-2 bg-accent/40 rounded-full"></div>
          <div className="w-8 h-px bg-accent/30"></div>
          <div className="w-3 h-3 border border-accent/30 rotate-45"></div>
        </div>
      </div>
    </div>
  )
}

// Minimal Wave Splitter
export function WaveSplitter() {
  return (
    <div className="py-8 bg-white">
      <div className="flex justify-center">
        <svg width="200" height="20" viewBox="0 0 200 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10 10C30 5 50 15 70 10C90 5 110 15 130 10C150 5 170 15 190 10"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            className="text-accent/40"
          />
        </svg>
      </div>
    </div>
  )
}

// Double Line Splitter
export function DoubleLineSplitter() {
  return (
    <div className="py-8 bg-white">
      <div className="max-w-2xl mx-auto px-6 space-y-2">
        <div className="h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent"></div>
        <div className="h-px bg-gradient-to-r from-transparent via-accent/15 to-transparent"></div>
      </div>
    </div>
  )
}

// Accent Dot Splitter
export function AccentDotSplitter() {
  return (
    <div className="py-8 bg-white">
      <div className="flex justify-center">
        <div className="flex items-center gap-4">
          <div className="w-12 h-px bg-border"></div>
          <div className="w-3 h-3 bg-accent rounded-full"></div>
          <div className="w-12 h-px bg-border"></div>
        </div>
      </div>
    </div>
  )
} 