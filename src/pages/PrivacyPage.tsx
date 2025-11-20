import { motion } from 'framer-motion';

export function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-bold text-text mb-6 font-heading">
            Privacy Policy
          </h1>
          <p className="text-text-secondary mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <div className="bg-white rounded-xl p-8 shadow-lg space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-text mb-4 font-heading">
                1. Information We Collect
              </h2>
              <p className="text-text-secondary mb-4">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Name, email address, and contact information</li>
                <li>Company name and job title</li>
                <li>Project requirements and specifications</li>
                <li>Payment and billing information</li>
                <li>Communications with our team</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text mb-4 font-heading">
                2. How We Use Your Information
              </h2>
              <p className="text-text-secondary mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Send technical notices and support messages</li>
                <li>Respond to your comments and questions</li>
                <li>Send marketing communications (with your consent)</li>
                <li>Monitor and analyze trends and usage</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text mb-4 font-heading">
                3. Information Sharing
              </h2>
              <p className="text-text-secondary mb-4">
                We do not sell your personal information. We may share your information only in the following circumstances:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>With your consent or at your direction</li>
                <li>With service providers who perform services on our behalf</li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights and prevent fraud</li>
                <li>In connection with a business transaction (merger, acquisition, etc.)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text mb-4 font-heading">
                4. Data Security
              </h2>
              <p className="text-text-secondary">
                We implement appropriate technical and organizational measures to protect your personal 
                information against unauthorized access, alteration, disclosure, or destruction. However, 
                no method of transmission over the Internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text mb-4 font-heading">
                5. Data Retention
              </h2>
              <p className="text-text-secondary">
                We retain your personal information for as long as necessary to fulfill the purposes 
                outlined in this policy, unless a longer retention period is required by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text mb-4 font-heading">
                6. Your Rights
              </h2>
              <p className="text-text-secondary mb-4">
                Depending on your location, you may have the following rights:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Object to processing of your information</li>
                <li>Request data portability</li>
                <li>Withdraw consent</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text mb-4 font-heading">
                7. Cookies and Tracking
              </h2>
              <p className="text-text-secondary">
                We use cookies and similar tracking technologies to collect information about your 
                browsing activities. You can control cookies through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text mb-4 font-heading">
                8. Third-Party Services
              </h2>
              <p className="text-text-secondary">
                Our website may contain links to third-party websites. We are not responsible for the 
                privacy practices of these external sites. We encourage you to review their privacy policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text mb-4 font-heading">
                9. Children's Privacy
              </h2>
              <p className="text-text-secondary">
                Our services are not directed to children under 13. We do not knowingly collect personal 
                information from children under 13. If you believe we have collected such information, 
                please contact us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text mb-4 font-heading">
                10. Changes to This Policy
              </h2>
              <p className="text-text-secondary">
                We may update this privacy policy from time to time. We will notify you of any changes 
                by posting the new policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text mb-4 font-heading">
                11. Contact Us
              </h2>
              <p className="text-text-secondary">
                If you have questions about this privacy policy, please contact us at:
              </p>
              <div className="mt-4 text-text-secondary">
                <p>Email: privacy@arwi.com</p>
                <p>Phone: +1 (555) 123-4567</p>
                <p>Address: 123 Tech Street, Silicon Valley, CA 94025</p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
