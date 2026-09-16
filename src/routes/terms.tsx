import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  component: TermsPage,
  head: () => ({
    meta: [
      { title: "Terms & Conditions — RUVIGZA Digital Technologies" },
      {
        name: "description",
        content: "Read the Terms & Conditions of RUVIGZA Digital Technologies, a performance advertising agency focused on Google Ads and Meta Ads campaign management.",
      },
      { property: "og:title", content: "Terms & Conditions — RUVIGZA Digital Technologies" },
      {
        property: "og:description",
        content: "Read the Terms & Conditions of RUVIGZA Digital Technologies, a performance advertising agency focused on Google Ads and Meta Ads campaign management.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/terms" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
});

function TermsPage() {
  return (
    <div className="min-h-screen bg-navy-950 px-6 py-20 text-zinc-200">
      <div className="mx-auto max-w-3xl space-y-8">
        <div className="space-y-2">
          <p className="text-sm font-medium uppercase tracking-wider text-electric">Legal</p>
          <h1 className="text-3xl font-medium text-zinc-50">Terms &amp; Conditions</h1>
          <p className="text-sm text-zinc-500">Last Updated: 01-09-2026</p>
        </div>

        <div className="space-y-8 text-sm leading-relaxed text-zinc-400">
          <p>
            Welcome to the RUVIGZA Digital Technologies website. By accessing or using this website, you agree to the following Terms &amp; Conditions. If you do not agree with these terms, please do not use the website.
          </p>

          <section className="space-y-3">
            <h2 className="text-lg font-medium text-zinc-100">1. About RUVIGZA</h2>
            <p>
              RUVIGZA Digital Technologies ("RUVIGZA", "we", "us", or "our") is a performance advertising agency providing digital advertising services, primarily focused on Google Ads and Meta Ads campaign management.
            </p>
            <p>Our services are intended primarily for businesses seeking digital advertising and customer acquisition support.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-medium text-zinc-100">2. Website Use</h2>
            <p>You may use this website for lawful purposes and to learn about RUVIGZA, our services, processes, and business offerings.</p>
            <p>You agree not to:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Use the website for any unlawful purpose</li>
              <li>Attempt to gain unauthorized access to the website or its systems</li>
              <li>Copy, reproduce, or distribute website content without permission</li>
              <li>Misuse our brand name, logo, designs, or other intellectual property</li>
              <li>Introduce malicious software, code, or other harmful material</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-medium text-zinc-100">3. Services</h2>
            <p>RUVIGZA currently specializes in:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Google Ads campaign management</li>
              <li>Meta Ads campaign management</li>
              <li>Campaign strategy</li>
              <li>Campaign setup</li>
              <li>Audience and keyword research</li>
              <li>Campaign monitoring</li>
              <li>Data-driven optimization</li>
              <li>Performance reporting</li>
            </ul>
            <p>
              The exact services, campaign quantity, duration, deliverables, responsibilities, and applicable fees will depend on the service/package selected and the terms agreed with the client.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-medium text-zinc-100">4. Advertising Budget</h2>
            <p>
              Advertising spend paid to platforms such as Google Ads and Meta Ads is separate from RUVIGZA's service fee.
            </p>
            <p>Unless otherwise agreed in writing:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>The client is responsible for the advertising budget.</li>
              <li>Advertising spend is paid directly to the relevant advertising platform.</li>
              <li>RUVIGZA's service fee does not include advertising spend.</li>
              <li>RUVIGZA does not control the amount charged by third-party advertising platforms.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-medium text-zinc-100">5. Client Advertising Accounts</h2>
            <p>
              Where applicable, campaigns may be managed through the client's own Google Ads or Meta advertising accounts using authorized access.
            </p>
            <p>The client remains responsible for:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Ownership of the advertising account</li>
              <li>Providing accurate account and business information</li>
              <li>Providing required access and permissions</li>
              <li>Maintaining valid payment methods with the advertising platform</li>
              <li>Paying advertising costs directly to the respective platform</li>
            </ul>
            <p>
              RUVIGZA is not responsible for account restrictions, suspension, policy decisions, billing issues, or other actions taken independently by advertising platforms.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-medium text-zinc-100">6. Campaign Duration and Scope</h2>
            <p>
              Campaign duration and service scope are mutually agreed with the client and documented in the applicable service agreement.
            </p>
            <p>Campaign performance and deliverables may depend on factors including:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Campaign duration</li>
              <li>Advertising budget</li>
              <li>Target audience</li>
              <li>Business category</li>
              <li>Competition</li>
              <li>Offer and pricing</li>
              <li>Creative quality</li>
              <li>Landing page or website experience</li>
              <li>Client response and sales follow-up</li>
            </ul>
            <p>Additional work outside the agreed scope may require separate discussion and approval.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-medium text-zinc-100">7. Optimization</h2>
            <p>
              RUVIGZA monitors campaign performance and may make data-driven changes based on campaign results and the agreed service scope.
            </p>
            <p>
              Where a package specifies a defined number of optimization cycles, those optimization cycles are limited to the number stated in the selected package or service agreement.
            </p>
            <p>Optimization does not guarantee a particular advertising result.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-medium text-zinc-100">8. No Guarantee of Results</h2>
            <p>RUVIGZA does not guarantee specific:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Number of leads</li>
              <li>Number of enquiries</li>
              <li>Sales</li>
              <li>Revenue</li>
              <li>Return on advertising spend (ROAS)</li>
              <li>Cost per lead</li>
              <li>Conversion rate</li>
              <li>Business growth</li>
            </ul>
            <p>
              Advertising performance depends on multiple factors outside RUVIGZA's complete control, including market conditions, competition, advertising platforms, budget, audience, offer, creative quality, website/landing page experience, and the client's sales process.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-medium text-zinc-100">9. Third-Party Platforms</h2>
            <p>
              RUVIGZA's services may involve third-party platforms including Google and Meta.
            </p>
            <p>These platforms operate independently and may change their:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Policies</li>
              <li>Algorithms</li>
              <li>Advertising requirements</li>
              <li>Features</li>
              <li>Pricing</li>
              <li>Account review procedures</li>
              <li>Delivery systems</li>
            </ul>
            <p>
              RUVIGZA cannot guarantee continued availability, approval, reach, delivery, or performance of any third-party advertising platform.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-medium text-zinc-100">10. Client Responsibilities</h2>
            <p>Clients are responsible for providing accurate and complete information required for campaign execution.</p>
            <p>The client is responsible for:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Providing accurate business information</li>
              <li>Providing required advertising account access</li>
              <li>Providing necessary product/service information</li>
              <li>Approving campaign materials where required</li>
              <li>Ensuring that their products, services, claims, and offers comply with applicable laws and advertising policies</li>
              <li>Handling leads and customer enquiries received through campaigns</li>
              <li>Maintaining appropriate sales and follow-up processes</li>
            </ul>
            <p>RUVIGZA is not responsible for inaccurate information supplied by the client.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-medium text-zinc-100">11. Payments and Service Agreement</h2>
            <p>
              Commercial terms, service fees, payment schedules, advance payments, cancellation terms, refunds, campaign deliverables, and other client-specific conditions will be governed by the applicable service agreement or written commercial document agreed between RUVIGZA and the client.
            </p>
            <p>
              Where a service agreement is signed, its terms will apply to the client engagement in addition to these website Terms &amp; Conditions.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-medium text-zinc-100">12. Intellectual Property</h2>
            <p>Unless otherwise agreed in writing:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>RUVIGZA retains ownership of its brand identity, proprietary processes, templates, systems, strategies, and pre-existing materials.</li>
              <li>Client-provided materials remain the property of the client or their respective owners.</li>
              <li>Third-party platform assets remain subject to the relevant platform's terms.</li>
              <li>Final deliverables specifically created for the client may be subject to the terms stated in the applicable service agreement.</li>
            </ul>
            <p>No content from this website may be reproduced or commercially used without prior written permission from RUVIGZA.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-medium text-zinc-100">13. Website Content</h2>
            <p>
              We make reasonable efforts to keep the information on this website accurate and up to date.
            </p>
            <p>
              However, service descriptions, packages, processes, availability, and other website information may be changed, updated, or discontinued without prior notice.
            </p>
            <p>Website information should not be interpreted as a guarantee of any particular business or advertising outcome.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-medium text-zinc-100">14. Limitation of Liability</h2>
            <p>
              To the extent permitted by applicable law, RUVIGZA shall not be liable for indirect, incidental, consequential, or business losses arising from the use of third-party advertising platforms, campaign performance, platform interruptions, account restrictions, market conditions, or information supplied by the client.
            </p>
            <p>
              Nothing in these Terms &amp; Conditions is intended to exclude or limit liability where such exclusion or limitation is not permitted under applicable law.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-medium text-zinc-100">15. External Links and Third-Party Services</h2>
            <p>
              Our website may contain links or references to third-party websites, platforms, or services.
            </p>
            <p>
              RUVIGZA does not control and is not responsible for the content, availability, security, or privacy practices of third-party websites or services.
            </p>
            <p>Your use of third-party services is subject to their respective terms and policies.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-medium text-zinc-100">16. Privacy</h2>
            <p>
              Your use of this website may also be subject to our Privacy Policy, which explains how information may be handled.
            </p>
            <p>Please refer to our Privacy Policy for further information.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-medium text-zinc-100">17. Changes to These Terms</h2>
            <p>
              RUVIGZA may update these Terms &amp; Conditions from time to time.
            </p>
            <p>
              Updated terms will be published on this page along with a revised "Last Updated" date.
            </p>
            <p>
              Your continued use of the website after changes are published constitutes acceptance of the updated terms, to the extent permitted by applicable law.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-medium text-zinc-100">18. Governing Law</h2>
            <p>
              These Terms &amp; Conditions shall be governed by and interpreted in accordance with the applicable laws of India.
            </p>
            <p>
              Any disputes arising in connection with these Terms &amp; Conditions shall be subject to the jurisdiction of the courts having appropriate jurisdiction over the applicable matter.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-medium text-zinc-100">19. Contact Us</h2>
            <p>
              If you have questions regarding these Terms &amp; Conditions, please contact:
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
