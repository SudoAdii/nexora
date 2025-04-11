export default function TestScrollPage() {
  return (
    <div className="bg-black text-white">
      <div className="p-8">
        <h1 className="text-4xl text-nexora-green mb-4">Scroll Test Page</h1>
        <p className="mb-4">This page tests if scrolling works properly.</p>

        {/* Generate a lot of content to force scrolling */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="mb-8 p-4 border border-nexora-green/20 rounded">
            <h2 className="text-2xl mb-2">Section {i + 1}</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed
              erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim.
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
