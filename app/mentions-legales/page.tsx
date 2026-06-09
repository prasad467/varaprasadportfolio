import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Legal Notice - Vara Prasad Palivela",
  description: "Legal information for the personal portfolio website of Vara Prasad Palivela.",
};

export default function LegalNotice() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#151515] flex flex-col">
      <Navbar />

      <div className="container mx-auto px-4 py-25 max-w-4xl flex-grow">
        <h1 className="text-4xl font-bold mb-8 text-foreground">
          Legal Notice
        </h1>

        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              1. Website Owner
            </h2>
            <p>
              This website is owned and operated by{" "}
              <strong>Vara Prasad Palivela</strong>.
              <br />
              Location: <strong>Andhra Pradesh, India</strong>
              <br />
              Email:{" "}
              <a
                href="mailto:palivelavaraprasad46@gmail.com"
                className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white underline underline-offset-2 transition-colors"
              >
                palivelavaraprasad46@gmail.com
              </a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              2. Website Purpose
            </h2>
            <p>
              This website serves as a personal portfolio to showcase my
              projects, skills, achievements, professional experience, and
              technical expertise.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              3. Intellectual Property
            </h2>
            <p>
              Unless otherwise stated, all content on this website, including
              text, graphics, logos, project descriptions, and design elements,
              is the property of Vara Prasad Palivela.
              <br />
              Unauthorized reproduction, distribution, modification, or use of
              any content without prior written permission is prohibited.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              4. Third-Party Resources
            </h2>
            <p>
              This website may use third-party libraries, frameworks, fonts,
              icons, APIs, and other resources. All trademarks, copyrights, and
              intellectual property rights belong to their respective owners.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              5. External Links
            </h2>
            <p>
              This website may contain links to third-party websites. I am not
              responsible for the content, privacy policies, or practices of
              these external websites.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              6. Privacy
            </h2>
            <p>
              Information submitted through the contact form is used solely for
              communication purposes and is not sold, rented, or shared with
              third parties except when required by law.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              7. Analytics
            </h2>
            <p>
              This website may use analytics services to understand visitor
              interactions and improve user experience. Any collected data is
              processed in accordance with applicable privacy standards.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              8. Limitation of Liability
            </h2>
            <p>
              While every effort is made to keep the information on this website
              accurate and up to date, no guarantees are made regarding the
              completeness, accuracy, reliability, or availability of the
              content provided.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              9. Contact
            </h2>
            <p>
              For any questions regarding this website, please contact:
              <br />
              <a
                href="mailto:palivelavaraprasad46@gmail.com"
                className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white underline underline-offset-2 transition-colors"
              >
                palivelavaraprasad46@gmail.com
              </a>
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
}