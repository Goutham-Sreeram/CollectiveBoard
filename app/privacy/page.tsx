import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Privacy Policy | Collective",
  description: "Collective privacy policy",
}

const sections = [
  {
    title: "What Collective Is",
    body: "Collective is a desktop app that works like a dock for your assets. You can keep files such as PDFs, music, images, links, and other references close at hand while you work.",
  },
  {
    title: "Local-Only Storage",
    body: "Collective does not run a server for your content. The assets you add to Collective live on your own device. We do not upload, host, sync, sell, or share your files.",
  },
  {
    title: "Information We Do Not Collect",
    body: "We do not collect the files you store in Collective, the contents of those files, your listening history, reading history, or the way you organize your dock.",
  },
  {
    title: "Your Responsibility",
    body: "Because your assets stay on your device, you are responsible for backing them up, securing your computer, and deciding what to add to Collective.",
  },
  {
    title: "Third-Party Services",
    body: "If you purchase Collective, download it, or contact us through a third-party platform, that platform may process information under its own privacy policy. Collective itself does not add a server-side account or cloud storage layer for your assets.",
  },
  {
    title: "Changes",
    body: "We may update this policy when the app changes. If Collective ever adds server-backed features, this policy will be updated to explain what changes and what data is involved.",
  },
]

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-gray-100 px-6 py-12 text-gray-900">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="inline-flex text-sm text-blue-700 transition-colors hover:text-blue-900"
        >
          Back to Collective
        </Link>

        <header className="mt-10 border-b border-gray-300 pb-8">
          <p className="mb-3 text-sm text-gray-500">Last updated: June 7, 2026</p>
          <h1
            className="text-5xl leading-none text-blue-600 md:text-7xl"
            style={{ fontFamily: "Cal Sans, sans-serif" }}
          >
            Privacy Policy
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Collective is built to keep your working assets close to you, not on our servers. This
            policy explains the simple privacy model behind the app.
          </p>
        </header>

        <div className="space-y-8 py-10">
          {sections.map((section) => (
            <section key={section.title}>
              <h2
                className="mb-3 text-2xl text-gray-900"
                style={{ fontFamily: "Cal Sans, sans-serif" }}
              >
                {section.title}
              </h2>
              <p className="text-base leading-7 text-gray-600">{section.body}</p>
            </section>
          ))}
        </div>

        <footer className="border-t border-gray-300 pt-8 text-sm leading-6 text-gray-500">
          Questions about this policy can be sent to thecollective.dev2025@gmail.com.
        </footer>
      </div>
    </main>
  )
}
