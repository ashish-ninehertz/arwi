import { motion } from 'framer-motion';

export function TermsPage() {
  return (
    <div className="min-h-screen bg-background py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-bold text-text mb-6 font-heading">
            Terms & Conditions
          </h1>
          <p className="text-text-secondary mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <div className="bg-white rounded-xl p-8 shadow-lg space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-text mb-4 font-heading">
                1. Agreement to Terms
              </h2>
              <p className="text-text-secondary">
                By accessing and using arwi's services, you agree to be bound by these Terms and Conditions. 
                If you disagree with any part of these terms, you may not access our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text mb-4 font-heading">
                2. Services
              </h2>
              <p className="text-text-secondary mb-4">
                arwi provides IT consulting and development services including but not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Web and mobile application development</li>
                <li>Cloud infrastructure solutions</li>
                <li>AI and machine learning implementations</li>
                <li>Cybersecurity services</li>
                <li>IT consulting and strategy</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text mb-4 font-heading">
                3. Intellectual Property
              </h2>
              <p className="text-text-secondary">
                All intellectual property rights in the services and materials provided by arwi remain 
                the property of arwi unless otherwise agreed in writing. Upon full payment, clients 
                receive a license to use the delivered work product.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text mb-4 font-heading">
                4. Payment Terms
              </h2>
              <p className="text-text-secondary mb-4">
                Payment terms are specified in individual project agreements. Generally:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Invoices are due within 30 days of issuance</li>
                <li>Late payments may incur interest charges</li>
                <li>Projects may be suspended for non-payment</li>
                <li>Refund policies are project-specific</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text mb-4 font-heading">
                5. Confidentiality
              </h2>
              <p className="text-text-secondary">
                Both parties agree to maintain confidentiality of proprietary information shared during 
                the course of the engagement. This obligation survives the termination of the agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text mb-4 font-heading">
                6. Limitation of Liability
              </h2>
              <p className="text-text-secondary">
                arwi shall not be liable for any indirect, incidental, special, consequential, or punitive 
                damages resulting from your use of our services. Our total liability shall not exceed the 
                amount paid for the specific service in question.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text mb-4 font-heading">
                7. Termination
              </h2>
              <p className="text-text-secondary">
                Either party may terminate the agreement with written notice as specified in the project 
                agreement. Upon termination, payment is due for all work completed to date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text mb-4 font-heading">
                8. Governing Law
              </h2>
              <p className="text-text-secondary">
                These terms shall be governed by and construed in accordance with the laws of the State 
                of California, without regard to its conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text mb-4 font-heading">
                9. Changes to Terms
              </h2>
              <p className="text-text-secondary">
                We reserve the right to modify these terms at any time. Changes will be effective 
                immediately upon posting to our website. Continued use of our services constitutes 
                acceptance of modified terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text mb-4 font-heading">
                10. Contact Information
              </h2>
              <p className="text-text-secondary">
                For questions about these Terms and Conditions, please contact us at:
              </p>
              <div className="mt-4 text-text-secondary">
                <p>Email: legal@arwi.com</p>
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
