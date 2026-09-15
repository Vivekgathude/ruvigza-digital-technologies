import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Target,
  BarChart3,
  RefreshCw,
  Handshake,
  MessageCircle,
  Mail,
  MapPin,
  Plus,
  ArrowRight,
  Menu,
  X,
  Briefcase,
  TrendingUp,
  ClipboardCheck,
  ShieldCheck,
  Settings2,
  Award,
  Sparkles,
  Brain,
  Cpu,
  LineChart,
  Zap,
  Search,
  Crosshair,
  Rocket,
  Share2,
  Cog,
  Activity,
} from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";
import iconAsset from "../assets/ruvigza-icon.png";
import founderPortrait from "../assets/founder_portrait_studio.webp";
import heroDashboard from "../assets/hero-dashboard.jpg";


const WHATSAPP_URL = "https://wa.me/918080193896";
const EMAIL = "hello@ruvigza.com";
const CARD_HOVER =
  "group relative overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(0,210,255,0.22)] hover:ring-2 hover:ring-electric/60";function Reveal({
  children,
  delay = 0,
  from = "left",
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  from?: "left" | "right" | "up";
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const hidden =
    from === "left"
      ? "-translate-x-12 opacity-0"
      : from === "right"
        ? "translate-x-12 opacity-0"
        : "translate-y-10 opacity-0";

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${visible ? "translate-x-0 translate-y-0 opacity-100" : hidden} ${className}`}
    >
      {children}
    </div>
  );
}

export const Route = createFileRoute("/")({
  component: Index,

  head: () => ({
    meta: [
      {
        title:
          "RUVIGZA Digital Technologies | Performance Marketing Agency in Maharashtra",
      },
      {
        name: "description",
        content:
          "RUVIGZA is a performance marketing agency in Maharashtra helping growing businesses generate leads and improve results through Google Ads and Meta Ads.",
      },

      // Open Graph
      {
        property: "og:title",
        content:
          "RUVIGZA Digital Technologies | Performance Marketing Agency in Maharashtra",
      },
      {
        property: "og:description",
        content:
          "Strategic Google Ads and Meta Ads campaigns to help growing businesses generate leads and improve advertising performance.",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:url",
        content: "https://ruvigza.in/",
      },
      {
        property: "og:image",
        content: "https://ruvigza.in/og-image.jpg",
      },

      // Twitter / X
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content:
          "RUVIGZA Digital Technologies | Performance Marketing Agency in Maharashtra",
      },
      {
        name: "twitter:description",
        content:
          "Strategic Google Ads and Meta Ads campaigns for growing businesses.",
      },
      {
        name: "twitter:image",
        content: "https://ruvigza.in/og-image.jpg",
      },

      // Robots
      {
        name: "robots",
        content: "index, follow",
      },
    ],

    links: [
      {
        rel: "canonical",
        href: "https://ruvigza.in/",
      },
    ],

    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",

          name: "RUVIGZA Digital Technologies",
          url: "https://ruvigza.in/",

          description:
            "Performance marketing agency in Maharashtra helping growing businesses generate leads through Google Ads and Meta Ads.",

          email: EMAIL,
          telephone: "+918080193896",

          address: {
            "@type": "PostalAddress",
            addressLocality: "Latur",
            addressRegion: "Maharashtra",
            addressCountry: "IN",
          },

          founder: {
            "@type": "Person",
            name: "Vivek Gathude",
          },
        }),
      },
    ],
  }),
});

const NAV_LINKS = [
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Packages", href: "#packages" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const DIFFERENTIATORS = [
  {
    icon: Target,
    title: "Goal Focused",
    text: "Every campaign starts with a clear business objective aligned to your growth.",
    layout: "lg:col-start-2 lg:row-start-1",
  },
  {
    icon: BarChart3,
    title: "Data Driven",
    text: "We use campaign data to understand what works and what needs improvement.",
    layout: "lg:col-start-3 lg:row-start-2",
  },
  {
    icon: RefreshCw,
    title: "Performance Optimization",
    text: "Campaigns are monitored and optimized based on performance data.",
    layout: "lg:col-start-2 lg:row-start-3",
  },
  {
    icon: Handshake,
    title: "Transparent",
    text: "Your advertising budget and agency fees remain clearly separated.",
    layout: "lg:col-start-1 lg:row-start-2",
  },
];

const WHY_RUVIGZA = [
  {
    icon: Briefcase,
    title: "Business-First Strategy",
    text: "We understand your business before planning your campaigns. Your goals, target customers, offer and market are considered before deciding how your advertising should be structured.",
  },
  {
    icon: TrendingUp,
    title: "Focused on Performance",
    text: "Every campaign starts with a clear objective. We focus on measurable advertising outcomes such as relevant enquiries, conversions and campaign efficiency—not just clicks or impressions.",
  },
  {
    icon: ClipboardCheck,
    title: "Transparent Process",
    text: "Clear scope. Clear communication. Clear reporting. From campaign setup to optimization and reporting, we follow a structured process so you understand what is being done and why.",
  },
  {
    icon: ShieldCheck,
    title: "Client-Owned Accounts",
    text: "Your advertising accounts remain under your control. We work through authorized access to your Google Ads and Meta Ads accounts. You retain ownership of your accounts and campaign data.",
  },
  {
    icon: Settings2,
    title: "Data-Driven Optimization",
    text: "We use campaign data to guide improvements. We monitor performance, identify opportunities and make agreed optimizations based on available data and campaign objectives.",
  },
];

const AI_FEATURES = [
  {
    icon: Brain,
    title: "Human Strategy First",
    text: "Targeting decisions and creative direction are led by experienced strategists, not left to automation alone.",
  },
  {
    icon: Cpu,
    title: "AI-Powered Platforms",
    text: "We use Meta Advantage+ and Google Performance Max as part of a structured, goal-driven campaign approach.",
  },
  {
    icon: LineChart,
    title: "Faster Analysis",
    text: "AI-assisted reporting helps us turn complex campaign data into clear, actionable optimization decisions.",
  },
  {
    icon: Zap,
    title: "Smarter Creative",
    text: "Smart tools speed up ad copy and creative variations while keeping your brand voice and messaging intact.",
  },
];

const SERVICES = [
  {
    number: "01",
    title: "Meta Ads Management",
    heading: "Reach and convert your ideal customers on Facebook & Instagram",
    description:
      "Running ads isn't the hard part — running ads that actually convert is. We manage your Meta campaigns end-to-end, from audience research to creative testing to retargeting, so your ad spend goes toward customers who are likely to buy, not just likely to scroll past.",
    included: [
      "Campaign strategy & audience research — identifying who to target and where they are in the buying journey",
      "Ad account setup & pixel/conversion tracking configuration",
      "Creative and copy testing across formats (Reels, Stories, Carousel, Static)",
      "Advantage+ and AI-assisted campaign optimization, directed by human strategy",
      "Retargeting campaigns for website visitors, cart abandoners, and past customers",
      "Ongoing budget optimization based on performance data, not guesswork",
      "[Weekly/bi-weekly] performance reporting with clear metrics — CPL, CTR, ROAS, conversions",
    ],
    bestFor:
      "businesses that want to build awareness and drive direct action — leads, sign-ups, or sales — from audiences actively spending time on Instagram and Facebook.",
  },
  {
    number: "02",
    title: "Google Ads Management",
    heading: "Show up when your customers are actively searching for you",
    description:
      "Google Ads captures demand that already exists — people typing exactly what they need into a search bar. We build and manage campaigns that put you in front of high-intent searchers at the right moment, while keeping your cost-per-click and cost-per-lead under control.",
    included: [
      "Keyword research & search intent mapping",
      "Campaign setup across Search, Shopping, Performance Max, and Display as relevant to your business",
      "Ad copy and extensions built to improve click-through and Quality Score",
      "Conversion tracking setup (calls, form fills, purchases) so every rupee spent is measurable",
      "Ongoing bid management and budget allocation across campaigns",
      "Negative keyword refinement to cut wasted spend",
      "[Weekly/bi-weekly] reporting on cost-per-lead, conversion rate, and ROI",
    ],
    bestFor:
      "businesses with a clear product or service that people actively search for — ideal for capturing ready-to-buy demand rather than building awareness from scratch.",
  },
];

const PACKAGES = [
  {
    tag: "Package 1 – Starter (Ads Only)",
    name: "Ads Management",
    popular: false,
    features: [
      "Google Ads OR Meta Ads (single platform, client's choice)",
      "Campaign Strategy",
      "Keyword Research",
      "Campaign Setup",
      "Ad Setup",
      "Targeting",
      "Data-Driven Optimization",
      "Optimization Cycles",
      "Performance Reporting",
      "Campaign Data Handover",
      "No landing page or SEO — assumes client already has a page/GBP to send traffic"
    ],
  },
  {
    tag: "Package 2 – Growth (Ads + Google Business Profile)",
    features: [
      "Google Ads + Meta Ads (both platforms)",
      "Google Business Profile setup/optimization (or full optimization if they already have one)",
      "basic WhatsApp auto-reply",
      "Ads Strategy",
      "Keyword Research",
      "Audience Research",
      "Campaign Setup",
      "Ad Setup",
      "Ad Creatives",
      "Regular Monitoring",
      "Data-Driven Optimization",
      "Optimization Cycles",
      "Landing page and deep SEO still not included — keeps a clear gap before Advance",
      "Campaign Data Handover",
    ],
  },
  {
    tag: "Package 3 – Advance (Full Funnel)",
    popular: false,
    features: [
      "1 landing page (WordPress or Shopify, templated, built to convert ad traffic)",
      "Basic on-page/local SEO (title tags, meta descriptions, GBP-linked keywords, Google Maps ranking basics)",
      "full WhatsApp automation",
      "Audience Research",
      "Campaign Setup",
      "Ad Setup",
      "Targeting",
      "Regular Monitoring",
      "Data-Driven Optimization",
      "Optimization Cycles",
      "Performance Reporting",
      "Campaign Data Handover",
    ],
  },
];

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Understand",
    text: "Market and data analysis to uncover opportunities.",
    icon: Search,
  },
  {
    number: "02",
    title: "Strategy",
    text: "A custom roadmap aligned to your business goals.",
    icon: Crosshair,
  },
  {
    number: "03",
    title: "Launch",
    text: "We deploy campaigns and initiatives live.",
    icon: Rocket,
  },
  {
    number: "04",
    title: "Connect",
    text: "Engage your audience across the right channels.",
    icon: Share2,
  },
  {
    number: "05",
    title: "Optimize",
    text: "Real-time performance tuning guided by campaign data.",
    icon: Cog,
  },
  {
    number: "06",
    title: "Grow",
    text: "Scale results for sustained, measurable growth.",
    icon: TrendingUp,
  },
];

const FAQS = [
  {
    q: "Do you guarantee leads or sales?",
    a: "No ethical agency can guarantee specific leads or sales numbers, since results depend on your offer, market, budget and many external factors. What we commit to is a structured, data-driven process: the right strategy, careful execution, continuous monitoring and transparent reporting throughout the agreed campaign scope.",
  },
  {
    q: "Is the advertising budget included in your service fee?",
    a: "No. Your advertising budget is completely separate from our management fee. The ad spend is paid directly by you to Google and Meta through your own advertising accounts, and it remains fully under your control. Our service fee covers strategy, setup, management, optimization and reporting.",
  },
  {
    q: "Which platforms do you manage?",
    a: "We specialize in two platforms: Google Ads and Meta Ads. By focusing deeply on these two channels, we deliver stronger strategy, targeting and optimization for growing businesses.",
  },
  {
    q: "What is performance marketing?",
    a: "Performance marketing is a results-focused approach to digital advertising where campaigns are planned, measured and optimized using performance data. At RUVIGZA, we use platforms such as Google Ads and Meta Ads to help businesses reach relevant audiences, generate qualified leads and improve advertising efficiency.",
  },
  {
    q: "Can you help generate leads through paid advertising?",
    a: "Yes — lead generation is one of our core services. We run targeted Meta Ads and Google Ads campaigns designed specifically to bring in qualified leads for your business, whether that's through lead forms, website inquiries, calls, or WhatsApp messages. We handle everything from audience targeting and ad creative to conversion tracking, so every lead is properly captured and reported. During onboarding, we'll discuss your ideal customer profile and set a realistic monthly lead target based on your budget and industry.",
  },
  {
    q: "Do you work with businesses across Maharashtra?",
    a: "Yes. RUVIGZA Digital Technologies is based in Latur, Maharashtra, and works with growing businesses across Maharashtra through remote strategy, campaign management and performance reporting.",
},
  {
    q: "Do you provide ad creatives?",
    a: "Ad setup is included in every package. The scope of creative work — such as ad copy, images or videos — is discussed during onboarding and documented in the service agreement, so expectations are clear on both sides before we begin.",
  },
  {
    q: "Do you work with small businesses?",
    a: "RUVIGZA works with small and growing businesses that want to build a stronger digital presence, generate relevant enquiries and improve their advertising performance through strategic Google Ads and Meta Ads campaigns.",
  },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-white/5 bg-navy-950/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#home" className="flex items-center gap-3">
          <img
            src={iconAsset}
            alt="RUVIGZA Digital Technologies logo"
            className="size-9 rounded-md ring-1 ring-white/10"
            width={36}
            height={36}
          />
          <span className="text-sm font-medium tracking-tight text-zinc-100">
             RUVIGZA
              </span>
        </a>
        <div className="hidden items-center gap-7 text-sm text-zinc-400 md:flex">
          {NAV_LINKS.map((link) => (
            <a key={link.label} href={link.href} className="transition-colors hover:text-electric">
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <a
            href="tel:+918080193896"
            className="hidden rounded-md bg-electric px-4 py-2 text-sm font-medium text-white ring-1 ring-electric transition-transform active:scale-95 sm:block"
          >
            Book a Strategy Call
          </a>
          <button
            className="text-zinc-300 md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-white/5 bg-navy-950 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4 text-sm text-zinc-300">
            {NAV_LINKS.map((link) => (
              <a key={link.label} href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            ))}
            <a
              href="tel:+918080193896"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-md bg-electric px-4 py-2.5 text-center font-medium text-white"
            >
              Book a Strategy Call
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}


function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-navy-950">
      {/* Hero Background */}
      <div className="absolute inset-0 z-0">
        <img
        src={heroDashboard}
        alt=""
        width={1920}
        height={1280}
        fetchPriority="high"
        decoding="async"
         className="h-full w-full object-cover object-center animate-hero-zoom"
         />

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/90 to-navy-950/35" />

        {/* Bottom fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/20" />

        {/* Subtle electric glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-electric/10 via-transparent to-transparent" />
      </div>

      {/* Hero Content */}
     <div className="relative z-10 mx-auto flex min-h-[720px] max-w-6xl items-center px-6 py-24 md:min-h-[760px] md:py-32">
        <div className="max-w-3xl animate-fade-up space-y-8">
          
          <div className="inline-flex items-center gap-2 rounded-full bg-electric/10 px-3 py-1 ring-1 ring-electric/20 backdrop-blur-sm">
            <div className="size-1.5 animate-pulse rounded-full bg-electric" />
            <span className="text-[10px] font-semibold uppercase tracking-widest text-electric"> 
              <span>
                 Performance Marketing Agency in Maharashtra for Growing Businesses
                 </span>   
             </span>
          </div>

          <h1 className="text-balance text-4xl font-semibold leading-tight text-zinc-50 md:text-6xl">
            Turn Clicks Into <span className="text-electric">Customers.</span>
          </h1>

          <p className="max-w-[56ch] text-pretty text-lg leading-relaxed text-zinc-300">
            We help growing businesses across Maharashtra reach the right audience, generate qualified leads and improve advertising performance through strategic Google Ads and Meta Ads campaigns.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="tel:+918080193896"
              className="flex items-center gap-2 rounded-md bg-electric py-2.5 pl-4 pr-5 text-sm font-medium text-white ring-1 ring-electric transition-transform active:scale-95"
            >
              Book a Free Strategy Call <ArrowRight className="size-4" />
            </a>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-md bg-navy-900/60 px-5 py-2.5 text-sm font-medium text-zinc-200 ring-1 ring-white/10 backdrop-blur-sm transition-colors hover:bg-navy-900"
            >
              <MessageCircle className="size-4 text-electric" />
              Chat on WhatsApp
            </a>
          </div>

          <p className="text-xs tracking-wide text-zinc-500">
            Meta Ads • Google Ads • Campaign Strategy • Performance Optimization
          </p>
        </div>
      </div>
    </section>
  );
}


function BrandMarquee() {
  return (
    <div className="overflow-hidden border-y bg-gradient-to-b from-[#0A1931] via-[#15325f] to-[#0A1931] py-4">
      <div className="marquee-right flex w-max whitespace-nowrap">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex shrink-0 items-center">
            <span className="mx-8 text-sm font-semibold uppercase tracking-[0.25em] text-electric md:text-base">
              RUVIGZA DIGITAL TECHNOLOGIES
            </span>
            <span className="text-electric/40">✦</span>

            <span className="mx-8 text-sm  font-semibold uppercase tracking-[0.25em] text-electric md:text-base">
               DIGITAL MARKETING
            </span>

            <span className="text-electric/40">✦</span>

            <span className="mx-8 text-sm  font-semibold uppercase tracking-[0.25em] text-electric md:text-base">
               PERFORMANCE MARKETING 
            </span>

             <span className="text-electric/40">✦</span>

            <div className="flex items-center gap-2">
               <span className="text-sm">🎉</span>
               <span className="font-semibold uppercase uppercase tracking-[0.25em] text-[#D4AF37]">
                LAUNCH OFFER — GET 25% OFF
               </span>
               <span className="text-sm">🎉</span>
               <span className="text-electric/40">✦</span>
               </div>
            
          </div>
        ))}
      </div>
    </div>
    
  );
}



const AIIntelligenceDashboard = () => {
  return (
    <div className="relative mx-auto mt-16 w-full overflow-hidden rounded-3xl bg-navy-950 ring-1 ring-white/10">

      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 -top-32 size-96 rounded-full bg-electric/10 blur-3xl" />
        <div className="absolute -bottom-40 -right-32 size-96 rounded-full bg-electric/5 blur-3xl" />

        {/* Grid Background */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative grid gap-10 p-6 md:p-10 lg:grid-cols-[0.7fr_1.3fr] lg:p-14">

        {/* ================= LEFT CONTENT ================= */}
        <Reveal from="left">
          <div className="flex h-full flex-col justify-center">

            {/* Badge */}
            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full bg-electric/10 px-3 py-1.5 ring-1 ring-electric/20">
              <Sparkles className="size-4 text-electric" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-electric">
                How We Use AI
              </span>
            </div>

            {/* Heading */}
            <h4 className="max-w-lg text-3xl font-medium leading-tight text-zinc-50 md:text-4xl">
              AI analyses.
              <br />

              <span className="text-electric">
                Humans strategize.
              </span>
            </h4>

            {/* Description */}
            <p className="mt-6 max-w-xl text-sm leading-7 text-zinc-400 md:text-base">
              We use AI-assisted tools to analyse campaign data, identify
              patterns, speed up creative testing and surface optimization
              opportunities. Strategic decisions remain human-led.
            </p>

            {/* AI PROCESS */}
            <div className="mt-8 space-y-3">

              {[
                "Campaign data analysed",
                "Patterns & opportunities identified",
                "Insights reviewed by strategists",
                "Optimization decisions made",
              ].map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-sm text-zinc-300"
                >
                  <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-electric/10 ring-1 ring-electric/20">
                    <span className="text-[10px] font-bold text-electric">
                      0{index + 1}
                    </span>
                  </div>

                  {item}
                </div>
              ))}

            </div>

            {/* AI → HUMAN */}
            <div className="mt-8 inline-flex w-fit items-center gap-2 rounded-lg border border-electric/20 bg-electric/5 px-4 py-2.5">

              <Brain className="size-4 text-electric" />

              <span className="text-xs font-medium tracking-wide text-zinc-200">
                AI ANALYSIS
              </span>

              <ArrowRight className="size-3.5 text-electric" />

              <span className="text-xs font-medium tracking-wide text-electric">
                HUMAN DECISION
              </span>

            </div>

          </div>
        </Reveal>


        {/* ================= RIGHT AI DASHBOARD ================= */}
        <Reveal from="right" delay={150}>

          <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-[#07101f]/95 shadow-2xl">

            {/* Dashboard Header */}
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">

              <div className="flex items-center gap-3">

                <div className="flex size-9 items-center justify-center rounded-lg bg-electric/10 ring-1 ring-electric/20">
                  <Cpu className="size-4 text-electric" />
                </div>

                <div>
                  <p className="text-xs font-semibold tracking-wider text-zinc-100">
                    RUVIGZA AI INTELLIGENCE
                  </p>

                  <p className="text-[10px] uppercase tracking-widest text-zinc-500">
                    Marketing analysis engine
                  </p>
                </div>

              </div>

              {/* Status */}
              <div className="flex items-center gap-2 rounded-full bg-emerald-400/10 px-2.5 py-1 ring-1 ring-emerald-400/20">

                <span className="size-1.5 animate-pulse rounded-full bg-emerald-400" />

                <span className="text-[9px] font-semibold uppercase tracking-widest text-emerald-400">
                  Analysis Ready
                </span>

              </div>

            </div>
             

            {/* Dashboard Body */}
            <div className="space-y-5 p-5">

              {/* ================= METRICS ================= */}
              <div className="grid grid-cols-2 gap-3">

                {[
                  {
                    label: "Campaign Health",
                    value: "87%",
                    icon: Activity,
                    trend: "Healthy",
                  },
                  {
                    label: "CPL",
                    value: "₹142",
                    icon: Target,
                    trend: "↓ 18%",
                  },
                  {
                    label: "CTR",
                    value: "3.84%",
                    icon: TrendingUp,
                    trend: "↑ 24%",
                  },
                  {
                    label: "Leads",
                    value: "126",
                    icon: BarChart3,
                    trend: "↑ 31%",
                  },
                ].map((metric) => {

                  const Icon = metric.icon;

                  return (
                    <div
                      key={metric.label}
                      className="rounded-xl border border-white/10 bg-white/[0.025] p-4 transition-all duration-300 hover:border-electric/30 hover:bg-electric/[0.03]"
                    >

                      <div className="flex items-center justify-between">

                        <span className="text-[10px] uppercase tracking-wider text-zinc-500">
                          {metric.label}
                        </span>

                        <Icon className="size-3.5 text-electric/70" />

                      </div>

                      <div className="mt-2 flex items-end justify-between">

                        <span className="text-xl font-semibold text-zinc-100">
                          {metric.value}
                        </span>

                        <span className="text-[10px] font-semibold text-emerald-400">
                          {metric.trend}
                        </span>

                      </div>

                    </div>
                  );
                })}

              </div>
              
              

              {/* ================= PERFORMANCE GRAPH ================= */}
              <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">

                <div className="mb-4 flex items-center justify-between">

                  <div>

                    <p className="text-xs font-medium text-zinc-200">
                      Performance Pattern
                    </p>

                    <p className="mt-0.5 text-[10px] text-zinc-500">
                      AI detected positive campaign movement
                    </p>

                  </div>

                  <LineChart className="size-4 text-electric" />

                </div>


                <div className="relative h-28 overflow-hidden">

                  {/* Graph Lines */}
                  <div className="absolute inset-0 flex flex-col justify-between">

                    {[1, 2, 3, 4].map((line) => (
                      <div
                        key={line}
                        className="border-t border-white/5"
                      />
                    ))}

                  </div>


                  {/* Graph */}
                  <svg
                    viewBox="0 0 500 120"
                    className="absolute inset-0 size-full overflow-visible"
                    preserveAspectRatio="none"
                  >

                    <defs>

                      <linearGradient
                        id="aiGraphGradient"
                        x1="0"
                        x2="1"
                        y1="0"
                        y2="0"
                      >

                        <stop
                          offset="0%"
                          stopColor="currentColor"
                          stopOpacity="0.35"
                        />

                        <stop
                          offset="100%"
                          stopColor="currentColor"
                          stopOpacity="1"
                        />

                      </linearGradient>

                    </defs>


                    {/* Main Line */}
                    <path
                      d="M0 96 C55 90, 70 82, 105 87 S155 72, 190 76 S235 58, 270 64 S315 42, 350 51 S395 30, 430 37 S470 18, 500 20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      className="text-electric"
                    />


                    {/* Graph Fill */}
                    <path
                      d="M0 96 C55 90, 70 82, 105 87 S155 72, 190 76 S235 58, 270 64 S315 42, 350 51 S395 30, 430 37 S470 18, 500 20 L500 120 L0 120 Z"
                      fill="url(#aiGraphGradient)"
                      className="text-electric opacity-10"
                    />

                  </svg>

                </div>

              </div>


              {/* ================= AI INSIGHT ================= */}
              <div className="rounded-xl border border-electric/20 bg-electric/[0.05] p-4">

                <div className="flex items-center gap-2">

                  <Sparkles className="size-4 text-electric" />

                  <span className="text-[10px] font-semibold uppercase tracking-widest text-electric">
                    AI Insight
                  </span>

                </div>


                <p className="mt-3 text-sm leading-relaxed text-zinc-200">

                  Creative B is outperforming Creative A by{" "}

                  <span className="font-semibold text-electric">
                    31%
                  </span>

                  . Consider increasing testing priority for this creative
                  direction.

                </p>

              </div>


              {/* ================= ANALYSIS SIGNALS ================= */}
              <div className="grid gap-2 sm:grid-cols-3">

                {[
                  "Audience analysed",
                  "Creative opportunity",
                  "Budget opportunity",
                ].map((item) => (

                  <div
                    key={item}
                    className="flex items-center gap-2 rounded-lg bg-white/[0.025] px-3 py-2.5"
                  >

                    <div className="flex size-4 items-center justify-center rounded-full bg-emerald-400/10">

                      <span className="text-[9px] text-emerald-400">
                        ✓
                      </span>

                    </div>

                    <span className="text-[9px] leading-tight text-zinc-400">
                      {item}
                    </span>

                  </div>

                ))}

              </div>

            </div>


            {/* ================= BOTTOM WORKFLOW ================= */}
            <div className="border-t border-white/10 bg-black/10 px-5 py-3">

              <div className="flex flex-wrap items-center justify-center gap-2 text-[9px] font-medium uppercase tracking-wider text-zinc-500">

                <span>
                  Campaign Data
                </span>

                <ArrowRight className="size-3 text-electric/60" />

                <span>
                  AI Analysis
                </span>

                <ArrowRight className="size-3 text-electric/60" />

                <span>
                  Insights
                </span>

                <ArrowRight className="size-3 text-electric/60" />

                <span className="text-electric">
                  Human Strategy
                </span>

              </div>

            </div>

          </div>

        </Reveal>

      </div>

    </div>
  );
};
function About() {
  return (
    <ScrollReveal>
    <section id="about" className="bg-navy-900 py-24">
      <div className="mx-auto w-full max-w-[1500px] px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-4 block text-[10px] font-semibold uppercase tracking-widest text-electric">
            About RUVIGZA
          </span>
          <h2 className="mb-6 text-3xl font-medium text-zinc-50 md:text-4xl">
            Your Business Needs More Than Just Marketing. It Needs Results.
          </h2>
          <p className="leading-relaxed text-zinc-400">
            RUVIGZA Digital Technologies is a performance marketing agency in Maharashtra focused on helping growing businesses generate qualified leads and improve their advertising performance through Google Ads, Meta Ads and data-driven strategies.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-electric/20 bg-electric/5 px-4 py-2 text-xs font-medium text-electric">
            <Award className="size-3.5" />
           Registered MSME — Govt. of India
          </div>
        </div>
      
       <div className="relative mx-auto w-full max-w-7xl py-10">

  {/* Connecting Line */}
  <div className="pointer-events-none absolute left-[10%] right-[10%] top-1/2 hidden h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-electric/40 to-transparent lg:block" />

  {/* Horizontal Layout */}
  <div className="relative z-10 flex flex-col items-center justify-center gap-8 lg:flex-row lg:gap-6">

    {/* Transparent */}
    <Reveal
      from="left"
      className="flex-1"
    >
      <div className={`group flex size-36 flex-col items-center justify-center rounded-full bg-navy-950/95 p-4 text-center ring-1 ring-electric/20 backdrop-blur-sm shadow-[0_0_25px_color-mix(in_srgb,var(--electric)_8%,transparent)] ${CARD_HOVER}`}>
        <div className="mb-2 flex size-10 items-center justify-center rounded-full bg-electric/10 text-electric ring-1 ring-electric/25">
          <Handshake className="size-5" />
        </div>

        <h3 className="text-xs font-semibold uppercase text-zinc-100">
          Transparent
        </h3>
      </div>
    </Reveal>

    {/* Goal Focused */}
    <Reveal
      from="left"
      className="flex-1"
    >
      <div className={`group flex size-36 flex-col items-center justify-center rounded-full bg-navy-950/95 p-4 text-center ring-1 ring-electric/20 backdrop-blur-sm shadow-[0_0_25px_color-mix(in_srgb,var(--electric)_8%,transparent)] ${CARD_HOVER}`}>
        <div className="mb-2 flex size-10 items-center justify-center rounded-full bg-electric/10 text-electric ring-1 ring-electric/25">
          <Target className="size-5" />
        </div>

        <h3 className="text-xs font-semibold uppercase text-zinc-100">
          Goal Focused
        </h3>
      </div>
    </Reveal>

    {/* Center Logo */}
    <div className="flex-1 lg:mr-10 relative z-20 flex shrink-0 items-center justify-center">
      <div className="relative flex size-36 items-center justify-center rounded-full bg-navy-950 ring-1 ring-electric/50 shadow-[0_0_45px_color-mix(in_srgb,var(--electric)_25%,transparent)] lg:size-44">

        <div className="absolute inset-3 rounded-full border border-electric/20" />

        <div className="absolute inset-6 rounded-full border border-dashed border-electric/30" />

        <img
        src={iconAsset}
        alt="RUVIGZA Digital Technologies logo"
        className="relative size-20 rounded-xl ring-1 ring-white/10 lg:size-24"
        width={96}
        height={96}
        loading="lazy"
        decoding="async"
        />

      </div>
    </div>

    {/* Data Driven */}
    <Reveal
      from="right"
      className="flex-1"
    >
      <div className={`group flex size-36 flex-col items-center justify-center rounded-full bg-navy-950/95 p-4 text-center ring-1 ring-electric/20 backdrop-blur-sm shadow-[0_0_25px_color-mix(in_srgb,var(--electric)_8%,transparent)] ${CARD_HOVER}`}>
        <div className="mb-2 flex size-10 items-center justify-center rounded-full bg-electric/10 text-electric ring-1 ring-electric/25">
          <BarChart3 className="size-5" />
        </div>

        <h3 className="text-xs font-semibold uppercase text-zinc-100">
          Data Driven
        </h3>
      </div>
    </Reveal>

    {/* Performance Optimization */}
    <Reveal
      from="right"
      className="flex-1"
    >
      <div className={`group flex size-36 flex-col items-center justify-center rounded-full bg-navy-950/95 p-4 text-center ring-1 ring-electric/20 backdrop-blur-sm shadow-[0_0_25px_color-mix(in_srgb,var(--electric)_8%,transparent)] ${CARD_HOVER}`}>
        <div className="mb-2 flex size-10 items-center justify-center rounded-full bg-electric/10 text-electric ring-1 ring-electric/25">
          <RefreshCw className="size-5" />
        </div>

        <h3 className="text-[10px] font-semibold uppercase text-zinc-100 sm:text-xs">
          Performance Optimization
        </h3>
      </div>
    </Reveal>

  </div>
</div>

    
      

        <div className="mx-auto mt-16 max-w-3xl text-center">
          <h3 className="mb-4 text-xl font-medium text-zinc-50">
            We Help Businesses Build Better Customer Acquisition Systems.
          </h3>
          <p className="text-sm leading-relaxed text-zinc-400">
            Our approach is simple: understand the business, identify the right audience, build a
            campaign strategy, execute with purpose and optimize based on performance data.
          </p>
        </div>
      <div className="relative mx-auto mt-16 w-full">
  <AIIntelligenceDashboard />
</div>
      </div>
    </section>
    </ScrollReveal>
  );
}

function Founder() {
  return (
    <ScrollReveal>
    <section className="px-6 py-24">
      <div className="mx-auto flex max-w-6xl flex-col overflow-hidden rounded-2xl bg-navy-900 ring-1 ring-white/5 md:flex-row">
        <div className="md:w-1/3">
         <img
          src={founderPortrait}
          alt="Vivek Gathude, Founder and Performance Marketing Strategist at RUVIGZA Digital Technologies"
          className="h-full min-h-[400px] w-full object-cover"
          loading="lazy"
          decoding="async"
          width={1376}
          height={1824}
          />
        </div>
        <div className="space-y-6 p-8 md:w-2/3 md:p-16">
          <span className="block text-[10px] font-semibold uppercase tracking-widest text-electric">
            Meet the Founder
          </span>
          <h2 className="text-2xl font-medium text-zinc-50 md:text-3xl">
            Vivek Gathude — Founder &amp; Performance Marketing Strategist
          </h2>
          <p className="max-w-[56ch] text-pretty leading-relaxed text-zinc-400">
            RUVIGZA Digital Technologies was founded with a simple vision — to help businesses reach
            the right audience and grow through strategic performance advertising. As a founder, I
             focus on understanding each client's business, identifying the right digital
            opportunities, and building a structured approach to marketing, execution, and growth.
          </p>
          <p className="max-w-[56ch] text-pretty leading-relaxed text-zinc-400">
            At RUVIGZA, we believe digital marketing is not just about running advertisements. It is
            about understanding the business, reaching the right audience, testing the right
            strategies, monitoring performance and making data-driven improvements throughout the
            agreed campaign scope.
          </p>
          <div className="rounded-r-xl border-l-2 border-electric bg-navy-950 p-6">
            <p className="text-sm italic leading-relaxed text-zinc-400">
              "Our mission is simple: understand the business, build the strategy, execute with
              purpose, and grow together."
            </p>
            <p className="mt-4 text-sm font-medium text-zinc-100">— Vivek Gathude</p>
            <p className="text-xs text-electric">Founder, RUVIGZA Digital Technologies</p>
          </div>
        </div>
      </div>
    </section>
    </ScrollReveal>
  );
}


function WhyRUVIGZA() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeItem = WHY_RUVIGZA[activeIndex];

  const nextIndex = (activeIndex + 1) % WHY_RUVIGZA.length;
  const nextItem = WHY_RUVIGZA[nextIndex];

  const ActiveIcon = activeItem.icon;

  return (
    <ScrollReveal>
    <section id="why-ruvigza"  className="bg-navy-950 py-24 animate-in fade-in slide-in-from-bottom-8 duration-700">
      <div className="mx-auto max-w-6xl px-6">

        {/* Section heading */}
        <div className="mb-14 max-w-2xl">
          <span className="mb-4 block text-[10px] font-semibold uppercase tracking-widest text-electric">
            Why RUVIGZA?
          </span>

          <h2 className="mb-4 text-3xl font-medium text-zinc-50 md:text-4xl">
            More Than Just Ad Management
          </h2>

          <p className="text-zinc-400">
            We don’t just launch campaigns. We understand your business,
            build a structured performance marketing strategy and use campaign data
            to identify opportunities for improving lead generation and advertising performance.
          </p>
        </div>

        {/* MOBILE */}
        <div className="lg:hidden">

          {/* Selection bar */}
          <div className="mb-6 space-y-2">
            {WHY_RUVIGZA.map((item, i) => {
              const Icon = item.icon;
              const isActive = activeIndex === i;

              return (
                <button
                  key={item.title}
                  onClick={() => setActiveIndex(i)}
                  className={`flex w-full items-center gap-4 rounded-xl px-4 py-4 text-left transition-all duration-300 ${
                    isActive
                      ? "bg-electric/10 ring-1 ring-electric/30"
                      : "bg-navy-900/60 hover:bg-navy-900"
                  }`}
                >
                  <div
                    className={`flex size-10 shrink-0 items-center justify-center rounded-lg ${
                      isActive
                        ? "bg-electric/15 text-electric"
                        : "bg-white/5 text-zinc-500"
                    }`}
                  >
                    <Icon className="size-5" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p
                      className={`text-sm font-medium ${
                        isActive ? "text-zinc-50" : "text-zinc-400"
                      }`}
                    >
                      {item.title}
                    </p>
                  </div>

                  {isActive && (
                    <span className="text-xs text-electric">
                      Active
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Selected content */}
          <div className="rounded-2xl bg-navy-900 p-7 ring-1 ring-white/5">
            <div className="mb-6 flex size-12 items-center justify-center rounded-xl bg-electric/10 text-electric">
              <ActiveIcon className="size-6" />
            </div>

            <div className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-electric">
              {String(activeIndex + 1).padStart(2, "0")} /{" "}
              {String(WHY_RUVIGZA.length).padStart(2, "0")}
            </div>

            <h3 className="mb-4 text-xl font-medium text-zinc-50">
              {activeItem.title}
            </h3>

            <p className="text-sm leading-relaxed text-zinc-400">
              {activeItem.text}
            </p>
          </div>

          {/* Bottom Next button */}
          <button
            onClick={() => setActiveIndex(nextIndex)}
            className="mt-5 flex w-full items-center justify-between rounded-xl border border-white/10 bg-navy-900 px-5 py-4 text-left transition-all duration-300 hover:border-electric/30 hover:bg-navy-900/80"
          >
            <div>
              <span className="block text-[9px] font-semibold uppercase tracking-widest text-zinc-500">
                Next
              </span>

              <span className="text-sm font-medium text-zinc-200">
                {nextItem.title}
              </span>
            </div>

            <ArrowRight className="size-5 text-electric" />
          </button>
        </div>

        {/* DESKTOP */}
        <div className="hidden lg:grid lg:grid-cols-[0.85fr_1.5fr] lg:gap-6">

          {/* Left selection panel */}
          <div className="rounded-2xl bg-navy-900 p-3 ring-1 ring-white/5">
            {WHY_RUVIGZA.map((item, i) => {
              const Icon = item.icon;
              const isActive = activeIndex === i;

              return (
                <button
                  key={item.title}
                  onClick={() => setActiveIndex(i)}
                  className={`group flex w-full items-center gap-4 rounded-xl p-4 text-left transition-all duration-300 ${
                    isActive
                      ? "bg-electric/10"
                      : "hover:bg-white/[0.03]"
                  }`}
                >
                  <div
                    className={`flex size-11 shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${
                      isActive
                        ? "bg-electric/15 text-electric"
                        : "bg-white/5 text-zinc-500 group-hover:text-zinc-300"
                    }`}
                  >
                    <Icon className="size-5" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p
                      className={`text-sm font-medium transition-colors ${
                        isActive
                          ? "text-zinc-50"
                          : "text-zinc-400 group-hover:text-zinc-200"
                      }`}
                    >
                      {item.title}
                    </p>
                  </div>

                  {isActive && (
                    <ArrowRight className="size-4 text-electric" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right content panel */}
          <div className="relative min-h-[360px] overflow-hidden rounded-2xl bg-navy-900 p-10 ring-1 ring-white/5">
            <div className="absolute right-8 top-8 text-7xl font-semibold text-white/[0.025]">
              {String(activeIndex + 1).padStart(2, "0")}
            </div>

            <div className="relative flex h-full max-w-xl flex-col justify-center">
              <div className="mb-7 flex size-14 items-center justify-center rounded-2xl bg-electric/10 text-electric">
                <ActiveIcon className="size-7" />
              </div>

              <span className="mb-3 text-[10px] font-semibold uppercase tracking-widest text-electric">
                Why it matters
              </span>

              <h3 className="mb-5 text-2xl font-medium text-zinc-50">
                {activeItem.title}
              </h3>

              <p className="text-sm leading-7 text-zinc-400">
                {activeItem.text}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
    </ScrollReveal>
  );
}
   

function Services() {
  const [openService, setOpenService] = useState<number | null>(null);

  return (
    <ScrollReveal>
    <section id="services" className="bg-navy-900 py-24">
      <div className="mx-auto max-w-6xl px-6">

        <div className="mb-12 max-w-xl">
          <span className="mb-4 block text-[10px] font-semibold uppercase tracking-widest text-electric">
            What We Do
          </span>

          <h2 className="mb-4 text-3xl font-medium text-zinc-50 md:text-4xl">
             Performance Marketing Services Focused on Growth        
         </h2>

          <p className="text-zinc-400">
              Strategic performance advertising for growing businesses looking to generate qualified leads and improve results through Google Ads and Meta Ads.          </p>
        </div>

        <div className="mx-auto max-w-5xl">
          {SERVICES.map((s, i) => {
            const isOpen = openService === i;

            return (
              <div
                key={s.title}
                className="border-b border-white/10"
              >

                {/* Step Header */}
                <button
                  type="button"
                  onClick={() => setOpenService(isOpen ? null : i)}
                  className="group flex w-full items-center gap-5 py-5 text-left"
                >
                  {/* Number */}
                  <div
                    className={`flex size-12 shrink-0 items-center justify-center rounded-xl text-sm font-bold transition-all duration-300 ${
                      isOpen
                        ? "bg-electric text-navy-950"
                        : "bg-electric/10 text-electric ring-1 ring-electric/20"
                    }`}
                  >
                    {s.number}
                  </div>

                  {/* Title */}
                  <div className="flex-1">
                    <h3
                      className={`text-lg font-medium transition-colors duration-300 md:text-xl ${
                        isOpen ? "text-zinc-50" : "text-zinc-300"
                      }`}
                    >
                      {s.title}
                    </h3>

                    {!isOpen && (
                      <p className="mt-1 text-sm text-zinc-500">
                        {s.heading}
                      </p>
                    )}
                  </div>

                  {/* Plus / Minus */}
                  <span
                    className={`flex size-9 shrink-0 items-center justify-center rounded-full border text-lg transition-all duration-300 ${
                      isOpen
                        ? "rotate-180 border-electric/40 bg-electric/10 text-electric"
                        : "border-white/10 text-zinc-500"
                    }`}
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {/* Expanded Content */}
                <div
                  className={`grid transition-all duration-500 ease-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="pb-8 pl-0 md:pl-[68px]">

                      <p className="mb-5 text-lg font-medium text-electric">
                        {s.heading}
                      </p>

                      <p className="mb-6 max-w-4xl leading-relaxed text-zinc-400">
                        {s.description}
                      </p>

                      <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-zinc-500">
                        What's included:
                      </p>

                      <ul className="mb-6 space-y-2">
                        {s.included.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2 text-sm text-zinc-300"
                          >
                            <span className="mt-1.5 shrink-0 text-electric">
                              •
                            </span>

                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      <p className="max-w-4xl text-sm leading-relaxed text-zinc-400">
                        <span className="font-medium text-zinc-300">
                          Best for:
                        </span>{" "}
                        {s.bestFor}
                      </p>

                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
    </ScrollReveal>
  );
}



function Packages() {
  return (
    <section id="packages" className="bg-navy-950 py-24">
      <div className="mx-auto max-w-6xl space-y-16 px-6">

        <ScrollReveal>
          <div className="space-y-4 text-center">
            <span className="block text-[10px] font-semibold uppercase tracking-widest text-electric">
              Packages
            </span>

            <h2 className="text-3xl font-medium text-zinc-50 md:text-4xl">
              Performance Advertising Solutions
            </h2>

            <p className="mx-auto max-w-[56ch] text-zinc-400">
              Your Budget. Your Account. Your Control.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-8 md:grid-cols-3">
          {PACKAGES.map((p) => (
            <div
            key={p.tag}
            className={`flex h-full flex-col rounded-2xl bg-navy-900 p-8 ${CARD_HOVER} ring-1 ${
               p.popular ? "ring-electric/30" : "ring-white/5"
              }`}
              >
                <div className="mb-2 flex items-start justify-between">
                  <h4 className="text-lg font-medium text-zinc-100">
                    {p.tag}
                  </h4>

                  {p.popular && (
                    <span className="rounded-full bg-electric/20 px-2 py-0.5 text-[10px] uppercase tracking-tighter text-electric">
                      Most Popular
                    </span>
                  )}
                </div>

                <p className="mb-6 text-base font-medium text-zinc-100">
                  {p.name}
                </p>

                <p className="mb-4 text-[10px] font-semibold uppercase tracking-widest text-zinc-500">
                  Includes:
                </p>

                <ul className="mb-8 flex-1 space-y-3">
                  {p.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-sm text-zinc-300"
                    >
                      <span className="mt-1 shrink-0 text-electric">
                        •
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="w-full rounded-md bg-electric py-2.5 text-center text-sm font-medium text-white ring-1 ring-electric transition-all duration-300 hover:bg-electric/90 hover:shadow-[0_0_20px_rgba(0,210,255,0.25)]"
                >
                  Get Started
                </a>
              </div>
            
          ))}
        </div>

        <ScrollReveal delay={200}>
          <div className="mx-auto max-w-3xl rounded-xl bg-navy-900 p-6 text-center ring-1 ring-white/5">
            <p className="text-xs leading-relaxed text-zinc-400">
              Advertising budget is separate and controlled directly by the
              client. Campaigns are managed through authorized access to your
              own Google Ads and Meta advertising accounts. Advertising spend
              is paid directly to the respective platforms and remains separate
              from RUVIGZA & service fee. Campaign duration and service
              scope are mutually agreed during onboarding and documented in the
              service agreement.
            </p>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}

function Process() {
  return (
    <ScrollReveal>
    <section id="process" className="process-section relative overflow-hidden bg-navy-950 py-24">
      <div className="process-grid pointer-events-none absolute inset-0 opacity-30" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-x-0 top-1/2 h-px bg-electric/20 shadow-[0_0_24px_var(--electric)]" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center md:mb-20">
          <span className="mb-4 block text-[10px] font-semibold uppercase tracking-widest text-electric">
            RUVIGZA
          </span>
          <h2 className="text-4xl font-semibold uppercase text-zinc-50 md:text-6xl">
            Our Process
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-zinc-300 md:text-lg">
            Six stages powering data-driven growth — designed for scale, precision, and measurable results.
          </p>
        </div>
        <div className="relative grid grid-cols-2 gap-x-4 gap-y-12 md:grid-cols-3 lg:grid-cols-6 lg:gap-3">
          <div className="pointer-events-none absolute left-[8%] right-[8%] top-[70px] hidden h-px bg-electric shadow-[0_0_18px_var(--electric)] lg:block" aria-hidden="true" />
          {PROCESS_STEPS.map((step, index) => {
            const Icon = step.icon;
            return (
            <Reveal key={step.number} from="up" delay={index * 90} className="h-full">
              <div className="group flex h-full flex-col items-center text-center">
                <div className="process-node relative z-10 mb-7 flex size-28 items-center justify-center rounded-full bg-navy-950 text-electric ring-1 ring-electric/80 transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-105 group-hover:bg-navy-900 md:size-32 lg:size-36">
                  <span className="absolute inset-2 rounded-full border border-electric/30 transition-transform duration-500 group-hover:rotate-45" />
                  <span className="absolute inset-[-8px] rounded-full border border-dashed border-electric/35 transition-transform duration-700 group-hover:-rotate-45" />
                  <Icon className="relative z-10 size-10 stroke-[1.5] transition-transform duration-300 group-hover:scale-110 md:size-12" />
                </div>
                <h3 className="mb-3 text-sm font-semibold uppercase text-zinc-50 md:text-base">
                  {step.number} · {step.title}
                </h3>
                <p className="max-w-[18ch] text-xs leading-relaxed text-zinc-400 md:text-sm">{step.text}</p>
              </div>
            </Reveal>
            );
          })}
        </div>
        <p className="mt-16 text-center text-[10px] font-semibold uppercase tracking-[0.3em] text-electric/60 md:mt-20">
          RUVIGZA · Scalable · Secure · Intelligent
        </p>
      </div>
    </section>
    </ScrollReveal>
  );
}

function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <ScrollReveal>
    <section id="faq" className="bg-navy-950 py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-12 text-center">
          <span className="mb-4 block text-[10px] font-semibold uppercase tracking-widest text-electric">
            FAQ
          </span>
          <h2 className="text-3xl font-medium text-zinc-50 md:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="space-y-4">
          {FAQS.map((faq, i) => (
            <div key={faq.q} className={`rounded-xl bg-navy-900 ring-1 ring-white/5 ${CARD_HOVER}`}>
              <button
                className="flex w-full items-center justify-between p-6 text-left"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
              >
                <span className="pr-4 font-medium text-zinc-100">{faq.q}</span>
                <Plus
                  className={`size-5 shrink-0 text-electric transition-transform ${
                    openIndex === i ? "rotate-45" : ""
                  }`}
                />
              </button>
              {openIndex === i && (
                <p className="px-6 pb-6 text-sm leading-relaxed text-zinc-400">{faq.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
    </ScrollReveal>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: "", business: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi RUVIGZA! I'm ${form.name}${form.business ? ` from ${form.business}` : ""}. ${form.message}`;
    window.open(`${WHATSAPP_URL}?text=${encodeURIComponent(text)}`, "_blank");
    // Clear form after sending setForm
    ({ name: "", business: "", message: "" });
  };

  return (
     <ScrollReveal>
    <section id="contact" className="border-t border-white/5 bg-navy-950 py-24">
      <div className="mx-auto grid max-w-6xl gap-16 px-6 md:grid-cols-2">
        <div className="space-y-8">
          <span className="block text-[10px] font-semibold uppercase tracking-widest text-electric">
            Get In Touch
          </span>
          <h2 className="text-3xl font-medium text-zinc-50 md:text-4xl">
            Ready to Explore Your Growth Opportunities?
          </h2>
          <p className="max-w-[48ch] leading-relaxed text-zinc-400">
            Tell us about your business and advertising goals. Let's discuss how strategic
            performance advertising can support your growth.
          </p>
          <div className="space-y-6">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4"
            >
              <div className="flex size-10 items-center justify-center rounded-full bg-navy-900 text-electric ring-1 ring-white/10">
                <MessageCircle className="size-4" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-zinc-500">WhatsApp</p>
                <p className="text-zinc-200">+91 8080193896</p>
              </div>
            </a>
            <a href={`mailto:${EMAIL}`} className="flex items-center gap-4">
              <div className="flex size-10 items-center justify-center rounded-full bg-navy-900 text-electric ring-1 ring-white/10">
                <Mail className="size-4" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-zinc-500">Email</p>
                <p className="text-zinc-200">{EMAIL}</p>
              </div>
            </a>
            <div className="flex items-center gap-4">
              <div className="flex size-10 items-center justify-center rounded-full bg-navy-900 text-electric ring-1 ring-white/10">
                <MapPin className="size-4" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-zinc-500">Location</p>
                <p className="text-zinc-200">Latur, Maharashtra, India</p>
              </div>
            </div>
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="space-y-6 rounded-2xl bg-navy-900 p-8 ring-1 ring-white/5"
        >
          <h4 className="text-lg font-medium text-zinc-100">Book a Strategy Call</h4>
          <div className="space-y-1.5">
            <label htmlFor="name" className="text-[10px] uppercase tracking-wider text-zinc-500">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full rounded-md border-0 bg-navy-950 p-3 text-sm outline-hidden ring-1 ring-white/10 transition-all focus:ring-electric"
              placeholder="Your name"
            />
          </div>
          <div className="space-y-1.5">
            <label htmlFor="business" className="text-[10px] uppercase tracking-wider text-zinc-500">
              Business Name
            </label>
            <input
              id="business"
              type="text"
              value={form.business}
              onChange={(e) => setForm({ ...form, business: e.target.value })}
              className="w-full rounded-md border-0 bg-navy-950 p-3 text-sm outline-hidden ring-1 ring-white/10 transition-all focus:ring-electric"
              placeholder="Your business"
            />
          </div>
          <div className="space-y-1.5">
            <label htmlFor="message" className="text-[10px] uppercase tracking-wider text-zinc-500">
              How can we help?
            </label>
            <textarea
              id="message"
              required
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="h-28 w-full rounded-md border-0 bg-navy-950 p-3 text-sm outline-hidden ring-1 ring-white/10 transition-all focus:ring-electric"
              placeholder="Tell us about your advertising goals..."
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-md bg-electric py-3 text-sm font-medium text-white transition-transform active:scale-98"
          >
            Send via WhatsApp
          </button>
        </form>
      </div>
    </section>
    </ScrollReveal>
  );
}

function Footer() {
  return (
    <ScrollReveal>
    <footer className="relative overflow-hidden border-t border-electric/20 bg-gradient-to-b from-navy-900 via-[#24101f] to-navy-950">
      <div className="pointer-events-none absolute -left-20 -right-20 top-0 h-px bg-gradient-to-r from-transparent via-electric/40 to-transparent" />
      <div className="pointer-events-none absolute -right-40 top-0 h-64 w-64 rounded-full bg-electric/5 blur-3xl" />
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10 md:grid-cols-3">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <img
            src={iconAsset}
            alt="RUVIGZA Digital Technologies logo"
            className="size-9 rounded-md ring-1 ring-white/10"
            loading="lazy"
            decoding="async"
            width={36}
            height={36}
            />
            <div className="leading-tight">
              <p className="text-sm font-medium text-zinc-100">RUVIGZA</p>
              <p className="text-[10px] uppercase tracking-widest text-zinc-500">
                Digital Technologies
              </p>
            </div>
          </div>
          <p className="text-sm font-medium text-zinc-300">Turn Clicks Into Customers.</p>
          <p className="text-xs text-zinc-500">
            Meta Ads • Google Ads • Campaign Strategy • Performance Optimization
          </p>
        </div>
        <div>
          <p className="mb-4 text-[10px] font-semibold uppercase tracking-widest text-zinc-500">
            Quick Links
          </p>
          <ul className="space-y-3 text-sm text-zinc-400">
            {[
              { label: "Home", href: "#home" },
              { label: "Services", href: "#services" },
              { label: "Process", href: "#process" },
              { label: "About", href: "#about" },
              { label: "Contact", href: "#contact" },
            ].map((l) => (
              <li key={l.label}>
                <a href={l.href} className="transition-colors hover:text-electric">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-4 text-[10px] font-semibold uppercase tracking-widest text-zinc-500">
            Contact
          </p>
          <ul className="space-y-3 text-sm text-zinc-400">
            <li>WhatsApp: +91 8080193896</li>
            <li>Email: {EMAIL}</li>
            <li>Location: Latur, Maharashtra, India</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5">
       <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-6 py-5 text-center md:flex-row md:justify-between md:text-left">
          <div className="space-y-1">
            <p className="text-xs font-medium text-zinc-500">
              © 2026 RUVIGZA Digital Technologies. All Rights Reserved.
            </p>
            <p className="inline-flex items-center gap-2 text-[11px] font-medium text-zinc-400">
              <Award className="size-3.5 text-electric" />
              Udyam Registered MSME (Govt. of India) | Reg. No. UDYAM-MH-16-0121440
            </p>
          </div>
          <div className="flex gap-8 text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
            <a href="/privacy" className="transition-colors hover:text-electric">
              Privacy Policy
            </a>
            <a href="/terms" className="transition-colors hover:text-electric">
              Terms &amp; Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
    </ScrollReveal>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-navy-950 font-sans text-zinc-200 selection:bg-electric/30">
      <Navbar />
      <main>
        <Hero />
        <BrandMarquee />
        <About />
        <Founder />
        <Services />
        <WhyRUVIGZA />
        <Packages />
        <Process />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex size-12 items-center justify-center rounded-full bg-electric text-white shadow-lg shadow-electric/30 transition-transform hover:scale-105"
      >
        <MessageCircle className="size-5" />
      </a>
    </div>
    
  );
}

