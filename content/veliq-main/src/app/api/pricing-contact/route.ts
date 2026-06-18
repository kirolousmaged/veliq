import { NextResponse } from "next/server";
import { Resend } from "resend";

const ADMIN_EMAIL = "fady.mohsen@veliq.co";
const SENDER_EMAIL = "fady.mohsen@veliq.co";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, agencyName, phone, email, service } = body;

    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json({ error: "Name is required." }, { status: 400 });
    }
    if (!phone || !/^\+?[\d\s\-()]{7,20}$/.test(phone.trim())) {
      return NextResponse.json({ error: "A valid phone number is required." }, { status: 400 });
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      return NextResponse.json({ error: "A valid email address is required." }, { status: 400 });
    }
    if (!service || typeof service !== "string") {
      return NextResponse.json({ error: "Service is required." }, { status: 400 });
    }

    const date = new Date().toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

    const agencyRow = agencyName?.trim()
      ? `<tr>
          <td style="padding:16px 20px;border-bottom:1px solid #e2e8f0;width:130px">
            <span style="color:#64748b;font-size:13px;font-weight:500">Agency</span>
          </td>
          <td style="padding:16px 20px;border-bottom:1px solid #e2e8f0">
            <span style="color:#0f172a;font-size:14px;font-weight:600">${agencyName.trim()}</span>
          </td>
        </tr>`
      : "";

    const serviceTag = `<span style="display:inline-block;background:#eef2ff;color:#4338ca;font-size:13px;font-weight:600;padding:6px 16px;border-radius:20px">${service}</span>`;

    const [adminResult, clientResult] = await Promise.all([
      // ── Admin email ──
      resend.emails.send({
        from: `VELIQ <${SENDER_EMAIL}>`,
        to: [ADMIN_EMAIL],
        replyTo: email.trim(),
        subject: `New Pricing Inquiry from ${name.trim()} — ${service}`,
        html: `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#f1f5f9;font-family:'Segoe UI',Roboto,Helvetica,Arial,sans-serif">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f1f5f9;padding:40px 20px">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.06)">

        <!-- Header -->
        <tr>
          <td style="background:linear-gradient(135deg,#0a0a14 0%,#1e1b4b 100%);padding:36px 40px;text-align:center">
            <h1 style="margin:0;color:#ffffff;font-size:24px;font-weight:700;letter-spacing:2px">VELIQ</h1>
            <p style="margin:8px 0 0;color:#a5b4fc;font-size:13px;letter-spacing:1px">NEW PRICING INQUIRY</p>
          </td>
        </tr>

        <!-- Timestamp -->
        <tr>
          <td style="padding:24px 40px 0;text-align:right">
            <span style="color:#94a3b8;font-size:12px">${date}</span>
          </td>
        </tr>

        <!-- Client Info -->
        <tr>
          <td style="padding:16px 40px 0">
            <h2 style="margin:0 0 16px;color:#0f172a;font-size:18px;font-weight:700">Client Details</h2>
            <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8fafc;border-radius:12px;overflow:hidden">
              <tr>
                <td style="padding:16px 20px;border-bottom:1px solid #e2e8f0;width:130px">
                  <span style="color:#64748b;font-size:13px;font-weight:500">Name</span>
                </td>
                <td style="padding:16px 20px;border-bottom:1px solid #e2e8f0">
                  <span style="color:#0f172a;font-size:14px;font-weight:600">${name.trim()}</span>
                </td>
              </tr>
              ${agencyRow}
              <tr>
                <td style="padding:16px 20px;border-bottom:1px solid #e2e8f0">
                  <span style="color:#64748b;font-size:13px;font-weight:500">Phone</span>
                </td>
                <td style="padding:16px 20px;border-bottom:1px solid #e2e8f0">
                  <a href="tel:${phone.trim()}" style="color:#4338ca;font-size:14px;font-weight:600;text-decoration:none">${phone.trim()}</a>
                </td>
              </tr>
              <tr>
                <td style="padding:16px 20px">
                  <span style="color:#64748b;font-size:13px;font-weight:500">Email</span>
                </td>
                <td style="padding:16px 20px">
                  <a href="mailto:${email.trim()}" style="color:#4338ca;font-size:14px;font-weight:600;text-decoration:none">${email.trim()}</a>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Service -->
        <tr>
          <td style="padding:28px 40px 0">
            <h2 style="margin:0 0 14px;color:#0f172a;font-size:18px;font-weight:700">Service Requested</h2>
            <div>${serviceTag}</div>
          </td>
        </tr>

        <!-- Action -->
        <tr>
          <td style="padding:32px 40px">
            <a href="mailto:${email.trim()}" style="display:inline-block;background:#4338ca;color:#ffffff;font-size:14px;font-weight:600;padding:12px 28px;border-radius:8px;text-decoration:none">Reply to ${name.trim()}</a>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background:#f8fafc;padding:20px 40px;text-align:center;border-top:1px solid #e2e8f0">
            <p style="margin:0;color:#94a3b8;font-size:12px">Submitted via the VELIQ Pricing page.</p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>
        `,
      }),

      // ── Client confirmation email ──
      resend.emails.send({
        from: `VELIQ <${SENDER_EMAIL}>`,
        to: [email.trim()],
        replyTo: ADMIN_EMAIL,
        subject: `We received your request — ${service}`,
        html: `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#f1f5f9;font-family:'Segoe UI',Roboto,Helvetica,Arial,sans-serif">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f1f5f9;padding:40px 20px">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.06)">

        <!-- Header -->
        <tr>
          <td style="background:linear-gradient(135deg,#0a0a14 0%,#1e1b4b 100%);padding:48px 40px;text-align:center">
            <h1 style="margin:0;color:#ffffff;font-size:28px;font-weight:700;letter-spacing:2px">VELIQ</h1>
            <div style="margin:16px auto;width:40px;height:2px;background:linear-gradient(90deg,#818cf8,#a78bfa)"></div>
            <p style="margin:0;color:#c7d2fe;font-size:16px">We&apos;ve got your request!</p>
          </td>
        </tr>

        <!-- Greeting -->
        <tr>
          <td style="padding:36px 40px 0">
            <h2 style="margin:0;color:#0f172a;font-size:22px;font-weight:700">Hi ${name.trim()},</h2>
            <p style="margin:14px 0 0;color:#475569;font-size:15px;line-height:1.75">
              Thank you for reaching out to VELIQ! We&apos;re thrilled you&apos;re considering us for your project. Your request has been received and one of our team members will be in touch with you within <strong>24 hours</strong> to walk you through everything.
            </p>
          </td>
        </tr>

        <!-- What's Next -->
        <tr>
          <td style="padding:28px 40px 0">
            <div style="background:#f8fafc;border-radius:12px;padding:24px;border-left:4px solid #4338ca">
              <h3 style="margin:0 0 14px;color:#0f172a;font-size:15px;font-weight:700">What happens next?</h3>
              <table cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td style="padding:7px 0;vertical-align:top;width:32px">
                    <span style="display:inline-block;width:24px;height:24px;background:#eef2ff;color:#4338ca;font-size:12px;font-weight:700;line-height:24px;text-align:center;border-radius:50%">1</span>
                  </td>
                  <td style="padding:7px 0;color:#475569;font-size:14px;line-height:1.5">Our team reviews your inquiry and the service you selected</td>
                </tr>
                <tr>
                  <td style="padding:7px 0;vertical-align:top">
                    <span style="display:inline-block;width:24px;height:24px;background:#eef2ff;color:#4338ca;font-size:12px;font-weight:700;line-height:24px;text-align:center;border-radius:50%">2</span>
                  </td>
                  <td style="padding:7px 0;color:#475569;font-size:14px;line-height:1.5">We&apos;ll reach out within 24 hours via email or phone</td>
                </tr>
                <tr>
                  <td style="padding:7px 0;vertical-align:top">
                    <span style="display:inline-block;width:24px;height:24px;background:#eef2ff;color:#4338ca;font-size:12px;font-weight:700;line-height:24px;text-align:center;border-radius:50%">3</span>
                  </td>
                  <td style="padding:7px 0;color:#475569;font-size:14px;line-height:1.5">Together, we&apos;ll craft the perfect plan tailored to your goals</td>
                </tr>
              </table>
            </div>
          </td>
        </tr>

        <!-- Summary -->
        <tr>
          <td style="padding:28px 40px 0">
            <h3 style="margin:0 0 14px;color:#0f172a;font-size:15px;font-weight:700">Your request summary</h3>
            <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8fafc;border-radius:12px;overflow:hidden">
              <tr>
                <td style="padding:14px 20px;border-bottom:1px solid #e2e8f0;width:130px">
                  <span style="color:#64748b;font-size:13px;font-weight:500">Name</span>
                </td>
                <td style="padding:14px 20px;border-bottom:1px solid #e2e8f0">
                  <span style="color:#0f172a;font-size:14px;font-weight:600">${name.trim()}</span>
                </td>
              </tr>
              ${agencyName?.trim() ? `<tr>
                <td style="padding:14px 20px;border-bottom:1px solid #e2e8f0">
                  <span style="color:#64748b;font-size:13px;font-weight:500">Agency</span>
                </td>
                <td style="padding:14px 20px;border-bottom:1px solid #e2e8f0">
                  <span style="color:#0f172a;font-size:14px;font-weight:600">${agencyName.trim()}</span>
                </td>
              </tr>` : ""}
              <tr>
                <td style="padding:14px 20px;border-bottom:1px solid #e2e8f0">
                  <span style="color:#64748b;font-size:13px;font-weight:500">Phone</span>
                </td>
                <td style="padding:14px 20px;border-bottom:1px solid #e2e8f0">
                  <span style="color:#0f172a;font-size:14px;font-weight:600">${phone.trim()}</span>
                </td>
              </tr>
              <tr>
                <td style="padding:14px 20px;border-bottom:1px solid #e2e8f0">
                  <span style="color:#64748b;font-size:13px;font-weight:500">Email</span>
                </td>
                <td style="padding:14px 20px;border-bottom:1px solid #e2e8f0">
                  <span style="color:#0f172a;font-size:14px;font-weight:600">${email.trim()}</span>
                </td>
              </tr>
              <tr>
                <td style="padding:14px 20px">
                  <span style="color:#64748b;font-size:13px;font-weight:500">Service</span>
                </td>
                <td style="padding:14px 20px">
                  ${serviceTag}
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- CTA -->
        <tr>
          <td style="padding:32px 40px;text-align:center">
            <p style="margin:0 0 16px;color:#475569;font-size:14px">Questions in the meantime? We&apos;re always happy to help.</p>
            <a href="mailto:fady.mohsen@veliq.co" style="display:inline-block;background:#4338ca;color:#ffffff;font-size:14px;font-weight:600;padding:12px 32px;border-radius:8px;text-decoration:none">Contact Us Directly</a>
          </td>
        </tr>

        <!-- Divider -->
        <tr>
          <td style="padding:0 40px">
            <div style="height:1px;background:#e2e8f0"></div>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="padding:24px 40px 32px;text-align:center">
            <h3 style="margin:0 0 4px;color:#0f172a;font-size:16px;font-weight:700;letter-spacing:1px">VELIQ</h3>
            <p style="margin:0;color:#94a3b8;font-size:12px">Digital Excellence</p>
            <p style="margin:12px 0 0;color:#cbd5e1;font-size:11px">&copy; ${new Date().getFullYear()} VELIQ. All rights reserved.</p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>
        `,
      }),
    ]);

    if (adminResult.error) throw new Error(`Admin email failed: ${adminResult.error.message}`);
    if (clientResult.error) throw new Error(`Client email failed: ${clientResult.error.message}`);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Pricing contact error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}
