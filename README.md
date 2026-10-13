# RUVIGZA Digital Technologies website

Responsive React + Vite multi-page website structure.

## Pages
- `/` Home / two visitor paths
- `/about/` Founder profile, vision and trust principles
- `/blog/` Sample digital marketing article
- `/contact/` Enquiry form and email contact
- `/marketing/` Google Ads, Meta Ads, SEO, Website Development, WhatsApp Automation
- `/tech/` RuvigzaFlow CRM + ERP demo, Custom Software, White Label Software

## Run locally
1. Install Node.js (LTS).
2. Extract this ZIP and open a terminal in the project folder.
3. Run `npm install`
4. Run `npm run dev`
5. Open the local URL printed by Vite.

Run `npm run build` before deployment.

## Contact form behavior
The form validates the required fields, then opens WhatsApp for +91 8080193896 with the enquiry details prefilled. The visitor must review and send the message in WhatsApp. The email link opens Gmail compose addressed to hello@ruvigza.in.

## Important
RuvigzaFlow is described as a demo concept. WhatsApp automation is presented as a service to discuss and scope, not as a claim that a finished automation platform is already live. The portrait supplied for the founder section has been added as requested; please confirm it is the intended founder portrait before publishing.
Vite SPA deployment may need host rewrite rules so direct visits to `/about/`, `/blog/`, `/contact/`, `/marketing/`, and `/tech/` serve `index.html`.


## Recent visual and SEO updates
- Added supplied AI-brain artwork as the Home hero background with a dark overlay for text readability.
- Added supplied RuvigzaFlow logo to the CRM + ERP demo card.
- Added RUVIGZA logo as browser favicon and Apple touch icon.
- Adjusted Tech Solutions accents to a brighter, more balanced green.
- Added basic description, robots directives, Open Graph metadata, `public/robots.txt`, and `public/sitemap.xml`.

## Before production launch
- Confirm the canonical domain and sitemap URLs match the final live domain.
- Add server/hosting security headers (Content-Security-Policy, X-Content-Type-Options, Referrer-Policy, and frame protection) in hosting configuration; these cannot be reliably enforced from React alone.
- Enable HTTPS, keep dependencies updated, and verify every form/route on the production host.
- This is a client-side Vite app; configure the host to serve `index.html` for the app routes. For stronger SEO, consider prerendering or SSR and unique per-page titles/descriptions.


## Visual and chatbot update
- Increased hero paragraph and path prompt contrast with electric-blue text and shadow.
- Added hover polish, layered card depth, focus-visible keyboard states, and reduced-motion support.
- Added a floating RUVIGZA FAQ chatbot on every page. It answers common questions about company, founder, services, RuvigzaFlow demo, pricing approach, and contact details using a local knowledge base. It does not call an external AI service and does not collect/send visitor data.
- The chatbot is an FAQ assistant, not a generative AI agent. To answer arbitrary questions with live AI, a secure backend/API integration would be required; never put private API keys in frontend code.


## Dashboard preview and chatbot refinement
- Added the supplied RuvigzaFlow dashboard screenshot to the featured RuvigzaFlow CRM + ERP demo card, labelled as a sample dashboard concept preview.
- Restored the Home hero introduction and "Choose the path that fits your business" text to white with a stronger shadow for contrast.
- Improved chatbot matching so specific questions such as "Tell me about RuvigzaFlow" prioritize the more specific topic instead of the generic company response.
- Chatbot remains a local FAQ knowledge base. For open-ended AI answers, connect a backend service securely; do not expose secret API keys in browser code.
