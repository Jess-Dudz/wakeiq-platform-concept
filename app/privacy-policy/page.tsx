import Link from 'next/link';

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#eef4f8] text-gray-900">
      <section className="relative overflow-hidden bg-[#102b72] px-6 py-18 text-white md:px-8 md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(34,211,238,0.18),_transparent_32%),radial-gradient(circle_at_bottom_left,_rgba(255,255,255,0.08),_transparent_28%)]" />

        <div className="relative mx-auto max-w-4xl">
          <p className="mb-5 inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100">
            Privacy Policy
          </p>
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            Clear, simple expectations around privacy.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/85 md:text-xl">
            LakeLifeIQ is being built as a planning tool first. This page gives
            users a simple, plain-language view of how information shared
            through the platform is handled.
          </p>
        </div>
      </section>

      <section className="px-6 py-14 md:px-8 md:py-18">
        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[28px] border border-[#dbe6ef] bg-white p-8 shadow-[0_18px_50px_rgba(8,34,87,0.08)]">
            <h2 className="text-3xl font-bold tracking-tight text-[#132a72]">
              Privacy at a glance
            </h2>
            <div className="mt-5 space-y-5 text-lg leading-relaxed text-gray-700">
              <p>
                LakeLifeIQ is intended to help users think through boats,
                setup requirements, providers, and total project decisions with
                more clarity and less guesswork.
              </p>
              <p>
                When users submit setup details or request their results,
                information may be used to power recommendations, save planning
                context, and support follow-up related to those setup requests.
              </p>
              <p>
                LakeLifeIQ is committed to keeping this experience focused,
                respectful, and aligned with the purpose of helping users make
                better boating decisions.
              </p>
              <p>
                As the platform evolves, this page can be expanded with more
                detailed operational and legal language. For now, the goal is to
                provide a trustworthy, user-friendly summary instead of
                overwhelming people with unnecessary complexity.
              </p>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-[28px] border border-[#dbe6ef] bg-white p-7 shadow-[0_18px_50px_rgba(8,34,87,0.08)]">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700">
                Helpful Links
              </p>
              <div className="mt-5 flex flex-col gap-3">
                <Link
                  href="/about"
                  className="rounded-full bg-[#eef7fb] px-5 py-3 text-center text-sm font-semibold text-[#132a72] transition hover:bg-cyan-100"
                >
                  About LakeLifeIQ
                </Link>
                <Link
                  href="/contact"
                  className="rounded-full bg-[#eef7fb] px-5 py-3 text-center text-sm font-semibold text-[#132a72] transition hover:bg-cyan-100"
                >
                  Contact
                </Link>
                <Link
                  href="/start"
                  className="rounded-full bg-cyan-500 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-cyan-600"
                >
                  Get My Setup Plan
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
