'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const reasonOptions = [
  'Dealer inquiry',
  'User support',
  'Feedback / idea',
  'Partnership / provider inquiry',
  'Other',
] as const;

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [reason, setReason] = useState<(typeof reasonOptions)[number]>(
    'Dealer inquiry'
  );
  const [message, setMessage] = useState('');
  const [website, setWebsite] = useState('');
  const [formStartedAt, setFormStartedAt] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState<'idle' | 'success' | 'error'>(
    'idle'
  );
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    setFormStartedAt(String(Date.now()));
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setSubmitState('idle');
    setErrorMessage('');

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      setSubmitState('error');
      setErrorMessage('Please complete all required fields before submitting.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: trimmedName,
          email: trimmedEmail,
          reason,
          message: trimmedMessage,
          website,
          formStartedAt,
        }),
      });

      const payload = (await response.json()) as {
        success?: boolean;
        error?: string;
      };

      if (!response.ok || !payload.success) {
        throw new Error(
          payload.error ||
            'Something went wrong while sending your message. Please try again.'
        );
      }

      setName('');
      setEmail('');
      setReason('Dealer inquiry');
      setMessage('');
      setWebsite('');
      setFormStartedAt(String(Date.now()));
      setSubmitState('success');
    } catch (error) {
      setSubmitState('error');
      setErrorMessage(
        error instanceof Error
          ? error.message
          : 'Something went wrong while sending your message. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#eef4f8] text-gray-900">
      <section className="relative overflow-hidden bg-[#102b72] px-6 py-18 text-white md:px-8 md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(34,211,238,0.18),_transparent_32%),radial-gradient(circle_at_bottom_left,_rgba(255,255,255,0.08),_transparent_28%)]" />

        <div className="relative mx-auto max-w-4xl">
          <p className="mb-5 inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100">
            Contact
          </p>
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            Let’s make the next boating decision easier.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/85 md:text-xl">
            Whether you have a dealer question, need support, want to share an
            idea, or are interested in working with LakeLifeIQ, this is the
            best place to start.
          </p>
        </div>
      </section>

      <section className="px-6 py-14 md:px-8 md:py-18">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[28px] border border-[#dbe6ef] bg-white p-8 shadow-[0_18px_50px_rgba(8,34,87,0.08)]">
            <div className="mb-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700">
                Contact Form
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#132a72]">
                Send a message
              </h2>
              <p className="mt-3 text-base leading-relaxed text-gray-600">
                Send a note directly through LakeLifeIQ and it will be routed to
                the LakeLifeIQ contact inbox for review.
              </p>
            </div>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-800">
                    Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-base text-gray-900 shadow-sm outline-none transition-all duration-200 focus:ring-2 focus:ring-cyan-500"
                    required
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-800">
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-base text-gray-900 shadow-sm outline-none transition-all duration-200 focus:ring-2 focus:ring-cyan-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-800">
                  Reason for contacting
                </label>
                <select
                  value={reason}
                  onChange={(event) =>
                    setReason(event.target.value as (typeof reasonOptions)[number])
                  }
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-base text-gray-900 shadow-sm outline-none transition-all duration-200 focus:ring-2 focus:ring-cyan-500"
                >
                  {reasonOptions.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </div>

              <div className="hidden" aria-hidden="true">
                <label className="mb-2 block text-sm font-semibold text-gray-800">
                  Website
                </label>
                <input
                  type="text"
                  value={website}
                  onChange={(event) => setWebsite(event.target.value)}
                  tabIndex={-1}
                  autoComplete="off"
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-base text-gray-900 shadow-sm outline-none"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-800">
                  Message
                </label>
                <textarea
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  rows={7}
                  className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-base text-gray-900 shadow-sm outline-none transition-all duration-200 focus:ring-2 focus:ring-cyan-500"
                  required
                />
              </div>

              {submitState === 'success' ? (
                <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm leading-relaxed text-emerald-800">
                  Your message has been sent. The LakeLifeIQ team will be able
                  to review it directly from the contact inbox.
                </div>
              ) : null}

              {submitState === 'error' ? (
                <div className="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm leading-relaxed text-rose-700">
                  {errorMessage}
                </div>
              ) : null}

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm leading-relaxed text-gray-500">
                  Prefer email directly? Reach LakeLifeIQ at{' '}
                  <a
                    href="mailto:contact@lakelifeiq.com"
                    className="font-semibold text-cyan-700 transition hover:text-cyan-600"
                  >
                    contact@lakelifeiq.com
                  </a>
                  .
                </p>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="rounded-full bg-cyan-500 px-6 py-3 font-semibold text-white transition hover:bg-cyan-600 disabled:cursor-not-allowed disabled:bg-cyan-300"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>

          <aside className="space-y-6">
            <div className="rounded-[28px] border border-[#dbe6ef] bg-white p-7 shadow-[0_18px_50px_rgba(8,34,87,0.08)]">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700">
                Best for
              </p>
              <div className="mt-5 space-y-4 text-base leading-relaxed text-gray-700">
                <p>Dealer introductions and market questions</p>
                <p>Support using the planning tool</p>
                <p>Feedback, product ideas, and local provider conversations</p>
              </div>
            </div>

            <div className="rounded-[28px] bg-[#132a72] p-7 text-white shadow-[0_18px_50px_rgba(8,34,87,0.16)]">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
                Quick Links
              </p>
              <div className="mt-5 flex flex-col gap-3">
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
                <Link
                  href="/about"
                  className="rounded-full bg-white/10 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/15"
                >
                  About LakeLifeIQ
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
