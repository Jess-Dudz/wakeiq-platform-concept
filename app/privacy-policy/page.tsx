import Link from 'next/link';

const policySections = [
  {
    eyebrow: '1. Overview',
    title: 'How LakeLifeIQ uses planning information',
    body: [
      'LakeLifeIQ helps people plan boats, setup needs, upgrades, and next steps with more clarity before making major decisions.',
      'LakeLifeIQ is currently in an early launch and validation phase. When you submit planning details, request recommendations, or contact the team, that information may be used to generate results, send them to you, respond to inquiries, and improve the platform.',
      'LakeLifeIQ may also use recommendation activity and dealer or provider click interest to understand which recommendations are most useful and to evaluate dealer and provider demand during the platform’s early stage.',
    ],
  },
  {
    eyebrow: '2. Information We Collect',
    title: 'What you may share with us',
    body: [
      'Depending on how you use the platform, LakeLifeIQ may collect contact details such as your name, email address, and phone number if you choose to provide it.',
      'LakeLifeIQ may also collect planning and recommendation inputs such as your lake, boat usage goals, budget, dock or setup preferences, priorities, notes, and other information you submit to help shape recommendations.',
      'If you send a message through a contact form or support form, LakeLifeIQ collects the information included in that message. Like most websites, the platform may also receive basic technical and usage information such as browser, device, pages visited, and similar site activity data.',
      'LakeLifeIQ may also collect general engagement information, such as recommendation activity and dealer or provider click activity, to understand how the platform is being used.',
    ],
  },
  {
    eyebrow: '3. How We Use Information',
    title: 'Why this information matters',
    body: [
      'LakeLifeIQ uses submitted information to generate and deliver recommendations, respond to support or contact questions, and support the planning experience users expect from the platform.',
      'Information may also be used to improve platform logic, recommendations, and the overall user experience, including understanding which recommendation paths are most helpful.',
      'LakeLifeIQ may track recommendation activity and dealer or provider click interest to measure interest in dealers, providers, and recommendation paths, and to evaluate platform demand and business viability during the early phase.',
    ],
  },
  {
    eyebrow: '4. When We Share Information',
    title: 'When information may be disclosed',
    body: [
      'LakeLifeIQ may share information with service providers that help operate the platform, such as hosting, form processing, analytics, communications, or support tools, when they need that information to perform services on LakeLifeIQ’s behalf.',
      'Paid dealer lead routing is not currently live. LakeLifeIQ does not describe the platform today as an active paid dealer lead-selling workflow.',
      'Clicking a dealer or provider website link does not by itself mean LakeLifeIQ shares your personal information with that dealer or provider. If you choose to visit another company’s website, your interaction with that site happens under that company’s own practices.',
      'Information may also be disclosed when reasonably necessary to comply with law, respond to legal process, enforce platform terms, or protect the rights, safety, or operations of LakeLifeIQ or others.',
    ],
  },
  {
    eyebrow: '5. Your Choices',
    title: 'Access, correction, deletion, and questions',
    body: [
      'You can contact LakeLifeIQ to request access to the personal information associated with your submissions, ask for corrections, request deletion, or ask questions about how your information has been used or disclosed.',
      'You can also contact LakeLifeIQ with privacy questions or requests, including questions about recommendation activity, analytics, or how information is used during the platform’s current phase.',
      'California residents may have additional privacy rights where applicable. LakeLifeIQ can provide more information in response to a request.',
    ],
  },
  {
    eyebrow: '6. Security And Retention',
    title: 'How information is protected and stored',
    body: [
      'LakeLifeIQ uses reasonable administrative, technical, and organizational measures designed to protect personal information. That said, no website, database, or transmission method can be guaranteed to be 100% secure.',
      'LakeLifeIQ retains information only for as long as reasonably necessary to support platform operations, user support, analytics, business evaluation, recordkeeping, and legal or compliance needs.',
    ],
  },
  {
    eyebrow: '7. Children’s Privacy',
    title: 'Not intended for children under 13',
    body: [
      'LakeLifeIQ is not intended for children under 13, and the platform is not designed to knowingly collect personal information directly from children under 13.',
    ],
  },
  {
    eyebrow: '8. Changes To This Policy',
    title: 'Updates over time',
    body: [
      'LakeLifeIQ may update this Privacy Policy as the platform evolves. If that happens, the updated version will be posted here and the effective date at the top of the page will be updated.',
    ],
  },
  {
    eyebrow: '9. Contact',
    title: 'Questions or requests',
    body: [
      'Questions, privacy requests, or concerns can be sent to contact@lakelifeiq.com. LakeLifeIQ welcomes people to reach out if they want clarification about this policy or a specific request related to their information.',
    ],
  },
] as const;

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
            LakeLifeIQ helps people plan boats, setup needs, upgrades, and
            next steps. This page explains, in plain language, what information
            may be collected during the platform’s early stage, how it is used,
            and how LakeLifeIQ measures recommendation usefulness and dealer or
            provider interest.
          </p>
        </div>
      </section>

      <section className="px-6 py-14 md:px-8 md:py-18">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[28px] border border-[#dbe6ef] bg-white p-8 shadow-[0_18px_50px_rgba(8,34,87,0.08)]">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700">
              Effective Date
            </p>
            <p className="mt-3 text-lg font-semibold text-[#132a72]">
              April 9, 2026
            </p>
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-[#132a72]">
              Privacy at a glance
            </h2>
            <div className="mt-5 space-y-5 text-lg leading-relaxed text-gray-700">
              <p>
                LakeLifeIQ is designed to make boating decisions easier to
                understand by helping users think through the full picture:
                boats, dock setups, upgrades, local providers, and overall
                project fit.
              </p>
              <p>
                LakeLifeIQ is currently in a validation and early launch phase.
                If you submit planning details, request results, or contact the
                team, that information may be used to generate
                recommendations, send them to you, improve the platform, and
                understand what users are finding most useful.
              </p>
              <p>
                LakeLifeIQ may also track recommendation activity and dealer or
                provider click interest to evaluate recommendation quality,
                dealer or provider demand, and overall business viability
                during this stage.
              </p>
              <p>
                Paid dealer lead routing is not currently live, and clicking a
                dealer or provider website link does not by itself mean
                LakeLifeIQ shares your personal information with that business.
              </p>
              <p>
                Questions or privacy requests can be sent to{' '}
                <a
                  href="mailto:contact@lakelifeiq.com"
                  className="font-semibold text-cyan-700 transition hover:text-cyan-600"
                >
                  contact@lakelifeiq.com
                </a>
                .
              </p>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-[28px] border border-[#dbe6ef] bg-white p-7 shadow-[0_18px_50px_rgba(8,34,87,0.08)]">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700">
                Quick Summary
              </p>
              <div className="mt-5 space-y-4 text-base leading-relaxed text-gray-700">
                <p>
                  LakeLifeIQ collects the information users submit to help
                  build recommendations, respond to questions, and improve the
                  platform during its early stage.
                </p>
                <p>
                  That may include contact details, planning preferences,
                  budget context, lake information, messages sent through the
                  site, and general recommendation or outbound click activity.
                </p>
                <p>
                  Paid dealer lead routing is not currently live. Users can
                  still reach out to request access, correction, deletion, or
                  to ask questions about how their information is used.
                </p>
              </div>
            </div>

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

            <div className="rounded-[28px] bg-[#132a72] p-7 text-white shadow-[0_18px_50px_rgba(8,34,87,0.16)]">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
                Privacy Contact
              </p>
              <h2 className="mt-3 text-2xl font-bold">
                Need help with a privacy question?
              </h2>
              <p className="mt-4 text-base leading-relaxed text-white/85">
                Reach LakeLifeIQ at{' '}
                <a
                  href="mailto:contact@lakelifeiq.com"
                  className="font-semibold text-cyan-200 transition hover:text-white"
                >
                  contact@lakelifeiq.com
                </a>{' '}
                for privacy questions, correction requests, deletion requests,
                or questions about how your information is used during the
                platform’s early phase.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="px-6 pb-18 md:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
          {policySections.map((section) => (
            <article
              key={section.title}
              className="rounded-[28px] border border-[#dbe6ef] bg-white p-8 shadow-[0_18px_50px_rgba(8,34,87,0.08)]"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700">
                {section.eyebrow}
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#132a72]">
                {section.title}
              </h2>
              <div className="mt-5 space-y-4 text-base leading-relaxed text-gray-700 md:text-lg">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>
                    {paragraph.includes('contact@lakelifeiq.com') ? (
                      <>
                        Questions, privacy requests, or concerns can be sent to{' '}
                        <a
                          href="mailto:contact@lakelifeiq.com"
                          className="font-semibold text-cyan-700 transition hover:text-cyan-600"
                        >
                          contact@lakelifeiq.com
                        </a>
                        . LakeLifeIQ welcomes people to reach out if they want
                        clarification about this policy or a specific request
                        related to their information.
                      </>
                    ) : (
                      paragraph
                    )}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
