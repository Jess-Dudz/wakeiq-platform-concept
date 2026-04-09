import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#eef4f8] text-gray-900">
      <section className="relative overflow-hidden bg-[#102b72] px-6 py-18 text-white md:px-8 md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(34,211,238,0.18),_transparent_32%),radial-gradient(circle_at_bottom_left,_rgba(255,255,255,0.08),_transparent_28%)]" />

        <div className="relative mx-auto max-w-5xl">
          <p className="mb-5 inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100">
            About LakeLifeIQ
          </p>
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
            Smarter boating starts with a smarter setup.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/85 md:text-xl">
            LakeLifeIQ was built to make boating decisions easier, clearer, and
            more realistic by helping people understand the full setup around
            the boat, not just the boat itself.
          </p>
        </div>
      </section>

      <section className="px-6 py-14 md:px-8 md:py-18">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.35fr_0.85fr]">
          <div className="space-y-8">
            <div className="rounded-[28px] border border-[#dbe6ef] bg-white p-8 shadow-[0_18px_50px_rgba(8,34,87,0.08)]">
              <h2 className="text-3xl font-bold tracking-tight text-[#132a72]">
                Why LakeLifeIQ was built
              </h2>
              <div className="mt-5 space-y-5 text-lg leading-relaxed text-gray-700">
                <p>
                  For most people, choosing the right boat is only part of the
                  decision. The real challenge is understanding how that boat
                  fits into the bigger picture: your dock setup, lift needs,
                  cover options, seating areas, cooling systems, local
                  providers, and overall project budget.
                </p>
                <p>
                  That gap is exactly why LakeLifeIQ exists.
                </p>
                <p>
                  LakeLifeIQ was built by Jessica Dudzinski, Founder of
                  LakeLifeIQ. As someone with a genuine love for the boating
                  world, I saw how fragmented this process can be. People are
                  often left trying to piece everything together on their own:
                  the boat, the dock requirements, the protection systems,
                  comfort upgrades, and the local providers who can actually
                  make it all work.
                </p>
                <p>LakeLifeIQ was created to make that process easier.</p>
              </div>
            </div>

            <div className="rounded-[28px] border border-[#dbe6ef] bg-white p-8 shadow-[0_18px_50px_rgba(8,34,87,0.08)]">
              <h2 className="text-3xl font-bold tracking-tight text-[#132a72]">
                What LakeLifeIQ does
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-gray-700">
                LakeLifeIQ helps connect the dots between:
              </p>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {[
                  'How you actually want to use the lake',
                  'The type of boat that fits that lifestyle',
                  'The dock, lift, cover, and comfort systems that make sense for your setup',
                  'The local providers and dealers who can help bring it all together',
                  'The reality of your overall project budget',
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-[22px] bg-[#f5f9fc] p-5 shadow-[inset_0_0_0_1px_rgba(19,42,114,0.06)]"
                  >
                    <p className="text-base font-semibold leading-relaxed text-[#132a72]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-6 space-y-4 text-lg leading-relaxed text-gray-700">
                <p>The goal is not to overwhelm you with options.</p>
                <p>
                  The goal is to help you make better decisions with more
                  confidence and less guesswork.
                </p>
              </div>
            </div>

            <div className="rounded-[28px] border border-[#dbe6ef] bg-white p-8 shadow-[0_18px_50px_rgba(8,34,87,0.08)]">
              <h2 className="text-3xl font-bold tracking-tight text-[#132a72]">
                Built for real-world boating decisions
              </h2>
              <div className="mt-5 space-y-5 text-lg leading-relaxed text-gray-700">
                <p>
                  LakeLifeIQ is designed for people who want more than generic
                  recommendations.
                </p>
                <p>
                  It is built to help you think through the full setup, not just
                  the boat, but the practical details that shape ownership,
                  convenience, comfort, protection, and long-term value.
                </p>
                <p>
                  That includes things like lifts, covers, dock cooling,
                  seating-area upgrades, and trusted local providers around
                  places like Lake of the Ozarks and Table Rock Lake.
                </p>
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-[28px] border border-[#dbe6ef] bg-white p-7 shadow-[0_18px_50px_rgba(8,34,87,0.08)]">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700">
                Founder Note
              </p>
              <blockquote className="mt-4 text-2xl font-bold leading-tight text-[#132a72]">
                “People should be able to understand the full boating setup,
                not just the boat, before making major decisions.”
              </blockquote>
              <p className="mt-4 text-base leading-relaxed text-gray-600">
                That is the idea behind everything this platform is being built
                to do.
              </p>
            </div>

            <div className="rounded-[28px] border border-[#dbe6ef] bg-white p-7 shadow-[0_18px_50px_rgba(8,34,87,0.08)]">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700">
                Always Free For Users
              </p>
              <p className="mt-4 text-lg leading-relaxed text-gray-700">
                LakeLifeIQ is built to be a helpful planning tool first. For
                users, the platform will always be free to use.
              </p>
              <p className="mt-4 text-base leading-relaxed text-gray-600">
                The mission is simple: make boating decisions easier to
                understand, easier to navigate, and less dependent on
                guesswork.
              </p>
            </div>

            <div className="rounded-[28px] bg-[#132a72] p-7 text-white shadow-[0_18px_50px_rgba(8,34,87,0.16)]">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
                Next Step
              </p>
              <h2 className="mt-3 text-2xl font-bold">
                Start building your setup with more clarity.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-white/85">
                Explore a boat-first plan that also accounts for lifts, covers,
                comfort systems, local providers, and the reality of the full
                project budget.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <Link
                  href="/start"
                  className="rounded-full bg-cyan-400 px-5 py-3 text-center text-sm font-semibold text-[#08214f] transition hover:bg-cyan-300"
                >
                  Get My Setup Plan
                </Link>
                <Link
                  href="/dealers"
                  className="rounded-full bg-white/10 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/15"
                >
                  Explore Dealers
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
