import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
  <img
    src="/hero.png"
    alt="Boating"
    className="absolute inset-0 w-full h-full object-cover object-top"
  />

        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 max-w-2xl px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Smarter boating starts here.
          </h1>

          <p className="text-white/90 text-lg mb-8">
            Find the right boat, dealer, and setup—without guesswork.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/start"
              className="inline-block rounded-full bg-cyan-500 px-6 py-3 font-semibold text-white transition hover:bg-cyan-600"
            >
              Get Started
            </Link>
            <Link
              href="/dealers"
              className="inline-block rounded-full bg-white px-6 py-3 font-semibold text-gray-900 transition hover:bg-gray-100"
            >
              Explore Dealers
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-[#d9d9d9] py-24 px-6">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-20">
      <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-3 tracking-tight">
        What you actually get
      </h2>
      <p className="text-gray-800 font-medium">
        Clear recommendations, not guesswork.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
      <div className="bg-white shadow-xl p-10 rounded-xl hover:shadow-2xl hover:-translate-y-1 transition duration-300">
        <div className="mb-4 w-12 h-12 text-2xl flex items-center justify-center rounded-lg bg-cyan-100 text-cyan-600 text-xl">
  👤
</div>
        <h3 className="text-[#132a72] font-bold text-2xl mb-4">
          Personalized recommendations
        </h3>
        <p className="text-black text-lg leading-relaxed">
          Get boat options tailored to how you use the lake, your budget, and your priorities.
        </p>
      </div>

      <div className="bg-white shadow-xl p-10 rounded-xl hover:shadow-2xl hover:-translate-y-1 transition duration-300">
      <div className="mb-4 w-12 h-12 text-2xl flex items-center justify-center rounded-lg bg-cyan-100 text-cyan-600 text-xl">
  📍
</div>
       <h3 className="text-[#132a72] font-bold text-2xl mb-4">
          Dealer matching
        </h3>
        <p className="text-black text-lg leading-relaxed">
          Find dealers that actually carry what you need—based on location, availability, and fit.
        </p>
      </div>

      <div className="bg-white shadow-xl p-10 rounded-xl hover:shadow-2xl hover:-translate-y-1 transition duration-300">
        <div className="mb-4 w-12 h-12 text-2xl flex items-center justify-center rounded-lg bg-cyan-100 text-cyan-600 text-xl">
  📝
</div>
        <h3 className="text-[#132a72] font-bold text-2xl mb-4">
          Setup planning
        </h3>
        <p className="text-black text-lg leading-relaxed">
          Understand what your boat actually requires—from dock compatibility to accessories.
        </p>
      </div>

      <div className="bg-white shadow-xl p-10 rounded-xl hover:shadow-2xl hover:-translate-y-1 transition duration-300">
        <div className="mb-4 w-12 h-12 text-2xl flex items-center justify-center rounded-lg bg-cyan-100 text-cyan-600 text-xl">
  🎯
</div>
        <h3 className="text-[#132a72] font-bold text-2xl mb-4">
          Decision clarity
        </h3>
        <p className="text-black text-lg leading-relaxed">
          Compare options with clear tradeoffs so you know why one choice is better.
        </p>
      </div>
    </div>
  </div>
</section>
<section className="bg-[#d9d9d9] py-24 px-6">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-16">
     <p className="inline-block text-xs font-semibold text-cyan-700 bg-cyan-100 px-3 py-1 rounded-full mb-6">
  See it in action
</p>
      <h2 className="text-3xl md:text-5xl font-bold text-blue-900 max-w-4xl mx-auto leading-[1.1] tracking-tight">
  LakeLifeIQ doesn’t stop at the boat
  <span className="block mt-2">it maps the real setup around it.</span>
</h2>
      <p className="text-cyan-700 font-semibold">
        Local providers, lake-specific logic, and a budget-aware plan built around the boat first.
      </p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1.4fr] gap-8 items-start max-w-6xl mx-auto">
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <h3 className="text-[#132a72] font-bold text-2xl mb-6">Input</h3>
        <div className="space-y-3 text-lg text-gray-800">
          <p><span className="font-bold">Lake:</span> Table Rock Lake</p>
          <p><span className="font-bold">Usage:</span> Family recreation</p>
          <p><span className="font-bold">Dock:</span> Covered slip</p>
          <p><span className="font-bold">Seating area:</span> Yes</p>
          <p><span className="font-bold">Total project budget:</span> $150k+</p>
          <p><span className="font-bold">Cover need:</span> Required</p>
          <p><span className="font-bold">Cover automation:</span> Required</p>
          <p><span className="font-bold">Priorities:</span> Comfort + low maintenance</p>
        </div>
      </div>

      <div className="flex items-center justify-center">
  <div className="text-cyan-500 text-5xl md:text-6xl font-light translate-x-2">
    →
  </div>
</div>

      <div className="bg-white rounded-2xl shadow-xl p-8">
        <h3 className="text-[#132a72] font-bold text-2xl mb-6">LakeLifeIQ Plan</h3>

        <div className="space-y-5 text-gray-800">
          <div>
            <h4 className="font-bold text-lg text-black">Boat-first recommendation</h4>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Top boat is selected first inside the total setup budget</li>
              <li>Upgrades are filtered against the remaining budget after the boat</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg text-black">Provider-based lift guidance</h4>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Table Rock lift providers surface only when the dock setup calls for them</li>
              <li>Easier daily-use lift options can rank higher when that preference matters</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg text-black">Provider-based covers</h4>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Lake-specific automatic cover providers are recommended ahead of generic cover tiers</li>
              <li>If an automatic cover is required, manual options are held back from the main set</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg text-black">Seating-aware comfort logic</h4>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Misting and dock-comfort providers only show when the setup actually includes a seating area</li>
              <li>Comfort recommendations are tied to lake and dock context, not broad boating usage</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg text-black">Budget clarity and required items</h4>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Required lift or cover items can still be surfaced even if they likely sit outside the remaining upgrade budget</li>
              <li>The result is a realistic plan, not a stack of individually in-budget guesses</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="bg-white py-28 px-6 text-center">
  <div className="max-w-3xl mx-auto">

    <h2 className="text-4xl md:text-5xl font-bold text-[#132a72] mb-6 leading-tight">
      Start your decision with clarity
    </h2>

    <p className="text-gray-600 text-lg mb-10">
      Find the right boat, dealer, and full setup—without guesswork.
    </p>

    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
      <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition">
        Get Started
      </button>

      <Link
        href="/dealers"
        className="rounded-full bg-gray-100 px-8 py-4 text-lg font-semibold text-gray-900 transition hover:bg-gray-200"
      >
        Explore Dealers
      </Link>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm text-gray-600">
      <div>
        <p className="font-semibold text-gray-800 mb-1">Tell us your setup</p>
        <p>Answer a few quick questions about how you use the lake</p>
      </div>

      <div>
        <p className="font-semibold text-gray-800 mb-1">Get matched</p>
        <p>See boats, dealers, and setup recommendations</p>
      </div>

      <div>
        <p className="font-semibold text-gray-800 mb-1">Plan with confidence</p>
        <p>Understand everything before you buy</p>
      </div>
    </div>

  </div>
</section>
    </main>
  );
}
