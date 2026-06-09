import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy - Vara Prasad Palivela",
  description:
    "Privacy Policy and information regarding the collection and use of personal data on this website.",
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#151515] flex flex-col">
      <Navbar />

      <div className="container mx-auto px-4 py-25 max-w-4xl flex-grow">
        <h1 className="text-4xl font-bold mb-8 text-foreground">
          Privacy Policy
        </h1>

        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            Last Updated: June 8, 2026
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              1. Information We Collect
            </h2>

            <p>
              When you use the contact form on this website, the following
              information may be collected:
            </p>

            <ul className="list-none pl-2 mt-2 space-y-2">
              <li className="before:content-['-'] before:mr-2">Name</li>
              <li className="before:content-['-'] before:mr-2">
                Email Address
              </li>
              <li className="before:content-['-'] before:mr-2">
                Message submitted through the contact form
              </li>
            </ul>

            <p className="mt-4">
              This website may also use analytics services to collect anonymous
              usage information such as pages visited, browser information,
              device type, website performance metrics, and general visitor
              statistics. This information does not directly identify users.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              2. How We Use Your Information
            </h2>

            <p>
              The information collected is used only for the following purposes:
            </p>

            <ul className="list-none pl-2 mt-2 space-y-2">
              <li className="before:content-['-'] before:mr-2">
                Responding to inquiries and messages
              </li>
              <li className="before:content-['-'] before:mr-2">
                Communicating regarding projects, opportunities, or
                collaborations
              </li>
              <li className="before:content-['-'] before:mr-2">
                Improving website performance and user experience
              </li>
              <li className="before:content-['-'] before:mr-2">
                Monitoring website usage and trends
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              3. Data Sharing
            </h2>

            <p>
              Personal information is never sold, rented, or shared with third
              parties for marketing purposes.
            </p>

            <p className="mt-4">
              Information may only be disclosed if required by applicable laws,
              regulations, or legal processes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              4. Data Retention
            </h2>

            <ul className="list-none pl-2 mt-2 space-y-2">
              <li className="before:content-['-'] before:mr-2">
                Contact form submissions may be retained for up to three years.
              </li>
              <li className="before:content-['-'] before:mr-2">
                Anonymous analytics data may be retained according to the
                policies of the analytics provider.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              5. Third-Party Services
            </h2>

            <p>
              This website may use third-party services necessary for operation
              and performance, including:
            </p>

            <ul className="list-none pl-2 mt-2 space-y-2">
              <li className="before:content-['-'] before:mr-2">
                Vercel (Hosting)
              </li>
              <li className="before:content-['-'] before:mr-2">
                Vercel Analytics
              </li>
              <li className="before:content-['-'] before:mr-2">
                Email Services
              </li>
              <li className="before:content-['-'] before:mr-2">
                Other services required for website functionality
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              6. Your Rights
            </h2>

            <p>You may request to:</p>

            <ul className="list-none pl-2 mt-2 space-y-2">
              <li className="before:content-['-'] before:mr-2">
                Access your personal information
              </li>
              <li className="before:content-['-'] before:mr-2">
                Correct inaccurate information
              </li>
              <li className="before:content-['-'] before:mr-2">
                Delete your personal information
              </li>
              <li className="before:content-['-'] before:mr-2">
                Ask questions about how your information is used
              </li>
            </ul>

            <p className="mt-4">
              To exercise these rights, please contact:
            </p>

            <a
              href="mailto:palivelavaraprasad46@gmail.com"
              className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white underline underline-offset-2 transition-colors"
            >
              palivelavaraprasad46@gmail.com
            </a>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              7. Data Security
            </h2>

            <p>
              Reasonable technical and organizational measures are implemented
              to protect personal information against unauthorized access, loss,
              misuse, or disclosure.
            </p>

            <p className="mt-4">
              However, no internet-based service can guarantee absolute
              security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              8. External Links
            </h2>

            <p>
              This website may contain links to third-party websites. I am not
              responsible for the privacy practices, content, or policies of
              external websites.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              9. Changes to This Policy
            </h2>

            <p>
              This Privacy Policy may be updated from time to time to reflect
              legal, technical, or operational changes. Any updates will be
              posted on this page along with the revised date above.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              10. Contact
            </h2>

            <p>
              If you have any questions regarding this Privacy Policy, please
              contact:
            </p>

            <a
              href="mailto:palivelavaraprasad46@gmail.com"
              className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white underline underline-offset-2 transition-colors"
            >
              palivelavaraprasad46@gmail.com
            </a>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
}