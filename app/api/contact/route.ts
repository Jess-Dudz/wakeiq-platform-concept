const reasonOptions = new Set([
  'Dealer inquiry',
  'User support',
  'Feedback / idea',
  'Partnership / provider inquiry',
  'Other',
]);

type ContactPayload = {
  name?: string;
  email?: string;
  reason?: string;
  message?: string;
  website?: string;
  formStartedAt?: string;
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_FORM_FILL_MS = 2500;

function trimValue(value: unknown) {
  return typeof value === 'string' ? value.trim() : '';
}

function validatePayload(payload: ContactPayload) {
  const name = trimValue(payload.name);
  const email = trimValue(payload.email);
  const reason = trimValue(payload.reason);
  const message = trimValue(payload.message);
  const website = trimValue(payload.website);
  const startedAt = Number(payload.formStartedAt);

  if (website) {
    return { ok: false as const, status: 400, error: 'Spam check failed.' };
  }

  if (!Number.isFinite(startedAt) || Date.now() - startedAt < MIN_FORM_FILL_MS) {
    return {
      ok: false as const,
      status: 400,
      error: 'Please take a moment to complete the form before submitting.',
    };
  }

  if (!name || !email || !reason || !message) {
    return {
      ok: false as const,
      status: 400,
      error: 'Please complete all required fields.',
    };
  }

  if (!EMAIL_REGEX.test(email)) {
    return {
      ok: false as const,
      status: 400,
      error: 'Please enter a valid email address.',
    };
  }

  if (!reasonOptions.has(reason)) {
    return {
      ok: false as const,
      status: 400,
      error: 'Please select a valid reason for contacting us.',
    };
  }

  if (name.length > 120 || email.length > 160) {
    return {
      ok: false as const,
      status: 400,
      error: 'Please keep your contact details a little shorter.',
    };
  }

  if (message.length < 10 || message.length > 5000) {
    return {
      ok: false as const,
      status: 400,
      error: 'Please keep your message between 10 and 5000 characters.',
    };
  }

  return {
    ok: true as const,
    data: { name, email, reason, message },
  };
}

async function sendWithResend({
  name,
  email,
  reason,
  message,
}: {
  name: string;
  email: string;
  reason: string;
  message: string;
}) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    throw new Error(
      'The contact service is not configured yet. Please email contact@lakelifeiq.com directly for now.'
    );
  }

  const fromAddress =
    process.env.CONTACT_FROM_EMAIL || 'LakeLifeIQ Contact <onboarding@resend.dev>';
  const toAddress = 'contact@lakelifeiq.com';

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: fromAddress,
      to: [toAddress],
      reply_to: email,
      subject: `LakeLifeIQ Contact: ${reason}`,
      text: [
        'New contact form submission',
        '',
        `Name: ${name}`,
        `Email: ${email}`,
        `Reason: ${reason}`,
        '',
        'Message:',
        message,
      ].join('\n'),
    }),
    cache: 'no-store',
  });

  if (!response.ok) {
    const raw = await response.text();
    throw new Error(
      `The contact service could not send your message right now. ${raw || 'Please try again shortly.'}`
    );
  }
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as ContactPayload;
    const validation = validatePayload(payload);

    if (!validation.ok) {
      return Response.json(
        { success: false, error: validation.error },
        { status: validation.status }
      );
    }

    await sendWithResend(validation.data);

    return Response.json({ success: true });
  } catch (error) {
    return Response.json(
      {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : 'Unable to send your message right now. Please try again shortly.',
      },
      { status: 500 }
    );
  }
}
