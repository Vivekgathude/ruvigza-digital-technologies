import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPage,
  head: () => ({
    meta: [
      { title: "Privacy Policy — RUVIGZA Digital Technologies" },
      {
        name: "description",
        content: "Read the Privacy Policy of RUVIGZA Digital Technologies to understand how we collect, use and protect your information.",
      },
      { property: "og:title", content: "Privacy Policy — RUVIGZA Digital Technologies" },
      { property: "og:description", content: "Read the Privacy Policy of RUVIGZA Digital Technologies to understand how we collect, use and protect your information." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/privacy" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
});

function PrivacyPage() {
  return (
    <div className="min-h-screen bg-navy-950 px-6 py-20 text-zinc-200">
      <div className="mx-auto max-w-3xl space-y-8">
        <div className="space-y-2">
          <p className="text-sm font-medium uppercase tracking-wider text-electric">Legal</p>
          <h1 className="text-3xl font-medium text-zinc-50">Privacy Policy</h1>
          <p className="text-sm text-zinc-500">Last Updated: 01-09-2026</p>
        </div>

        <div className="space-y-8 text-sm leading-relaxed text-zinc-400">
          <p>
            RUVIGZA Digital Technologies ("RUVIGZA", "we", "us", or "our") respects your privacy and is committed to protecting the information you may provide while using our website and services.
          </p>
          <p>
            This Privacy Policy explains how we handle information when you visit our website, contact us, or interact with our services.
          </p>

          <section className="space-y-3">
            <h2 className="text-lg font-medium text-zinc-100">1. Information We Collect</h2>
            <p>
              RUVIGZA does not currently use a contact form, registration form, or lead capture form on this website.
            </p>
            <p>We may receive information that you voluntarily provide when you contact us through:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>WhatsApp</li>
              <li>Phone calls</li>
              <li>Email</li>
              <li>Other direct communication channels</li>
            </ul>
            <p>
              Such information may include your name, phone number, email address, business details, service requirements, and other information you choose to share with us.
            </p>
            <p>We do not intentionally collect sensitive personal information through this website.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-medium text-zinc-100">2. How We Use Information</h2>
            <p>Information provided by you may be used to:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Respond to your enquiries and messages</li>
              <li>Understand your business and marketing requirements</li>
              <li>Discuss our services and packages</li>
              <li>Provide quotations, proposals, or service information</li>
              <li>Communicate regarding our services</li>
              <li>Provide and manage services after you become a client</li>
              <li>Improve our website, services, and customer experience</li>
              <li>Comply with applicable legal and regulatory requirements</li>
            </ul>
            <p>We do not sell or rent your personal information to third parties.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-medium text-zinc-100">3. Advertising and Marketing Platforms</h2>
            <p>
              RUVIGZA provides Google Ads and Meta Ads campaign management services.
            </p>
            <p>
              When you become a client, campaigns may be managed through your own advertising accounts or through authorized access provided by you.
            </p>
            <p>
              Advertising platforms such as Google and Meta may independently collect and process information according to their own privacy policies and terms.
            </p>
            <p>RUVIGZA does not control how these third-party platforms independently process information.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-medium text-zinc-100">4. Cookies and Website Analytics</h2>
            <p>
              Our website may use cookies, analytics tools, or similar technologies to understand website usage and improve website performance.
            </p>
            <p>These technologies may collect information such as:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Browser type</li>
              <li>Device information</li>
              <li>Approximate location</li>
              <li>Pages visited</li>
              <li>Website interaction data</li>
              <li>Referring website</li>
              <li>Technical information related to website access</li>
            </ul>
            <p>
              If analytics, tracking, advertising pixels, or similar technologies are added to our website in the future, this Privacy Policy may be updated accordingly.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-medium text-zinc-100">5. Third-Party Services</h2>
            <p>
              Our website or services may use third-party platforms or services, including communication, hosting, analytics, advertising, or other technology providers.
            </p>
            <p>These third parties may process information according to their own privacy policies and terms.</p>
            <p>Examples may include:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Google</li>
              <li>Meta</li>
              <li>WhatsApp</li>
              <li>Website hosting providers</li>
              <li>Analytics or measurement providers</li>
            </ul>
            <p>We recommend reviewing the privacy policies of these third-party services when applicable.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-medium text-zinc-100">6. Data Security</h2>
            <p>
              We take reasonable measures to protect information shared with us against unauthorized access, misuse, loss, or disclosure.
            </p>
            <p>However, no method of electronic transmission or storage can be guaranteed to be completely secure.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-medium text-zinc-100">7. Data Retention</h2>
            <p>
              We retain information only for as long as reasonably necessary for the purpose for which it was provided, including business communication, service delivery, contractual requirements, legal obligations, and legitimate business purposes.
            </p>
            <p>The retention period may vary depending on the nature of the information and the applicable requirements.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-medium text-zinc-100">8. Your Rights</h2>
            <p>
              Depending on applicable law, you may have rights relating to your personal information, including the right to:
            </p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Request information about personal data we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of information where legally applicable</li>
              <li>Withdraw consent where processing is based on consent</li>
              <li>Raise questions or concerns regarding our handling of your information</li>
            </ul>
            <p>To make a privacy-related request, please contact us using the details below.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-medium text-zinc-100">9. Children's Privacy</h2>
            <p>Our website and services are intended for businesses and general audiences.</p>
            <p>We do not knowingly collect personal information from children through this website.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-medium text-zinc-100">10. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our website, services, technology, or legal requirements.
            </p>
            <p>Any updated version will be published on this page with the revised "Last Updated" date.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-medium text-zinc-100">11. Contact Us</h2>
            <p>
              If you have any questions, concerns, or requests regarding this Privacy Policy, you can contact us:
            </p>
            <div className="space-y-1 text-zinc-300">
              <p className="font-medium text-zinc-100">RUVIGZA Digital Technologies</p>
              <p>WhatsApp: +91 8080193896</p>
              <p>Email: hello@ruvigza.com</p>
              <p>Business Address: Latur, Maharashtra, India</p>
            </div>
          </section>
        </div>

        <a href="/" className="inline-block text-sm text-electric hover:underline">
          ← Back to Home
        </a>
      </div>
    </div>
  );
}
