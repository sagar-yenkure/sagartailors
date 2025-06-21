import Image from "next/image";
import Link from "next/link";

const PrivacyPolicy = () => {
    return (
        <div className="max-w-3xl mx-auto px-4 py-12 text-gray-800">

            {/* Logo and Title */}
            <div className="flex items-center gap-6 mb-8">
                <Image src={"/opengraph-image.png"} alt="New Sagar Tailors Logo" width={80} height={80} quality={100} />
                <h1 className="text-2xl md:text-3xl font-bold text-slate-800">New Sagar Tailors</h1>
            </div>
            <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

            <p className="mb-4">
                At New Sagar Tailors, we value your privacy and are committed to protecting your personal
                information. This Privacy Policy outlines how we collect, use, and safeguard your data when
                you visit our website or engage with our tailoring services.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
            <p className="mb-4">We may collect the following information:</p>
            <ul className="list-disc pl-6 mb-4">
                <li>Name, email address, phone number</li>
                <li>Delivery address (for online orders)</li>
                <li>Body measurements or fitting preferences</li>
                <li>Order history and service feedback</li>
                <li>Browser and device information (via cookies)</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6 mb-2">2. How We Use Your Information</h2>
            <p className="mb-4">Your data helps us:</p>
            <ul className="list-disc pl-6 mb-4">
                <li>Process orders and deliver custom clothing</li>
                <li>Communicate updates or changes to your orders</li>
                <li>Improve our services based on customer feedback</li>
                <li>Send promotional offers (with your consent)</li>
                <li>Respond to inquiries or support requests</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6 mb-2">3. Data Security</h2>
            <p className="mb-4">
                We implement appropriate technical and organizational measures to protect your data from
                unauthorized access, disclosure, or misuse.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">4. Sharing of Information</h2>
            <p className="mb-4">
                We do not sell or rent your personal data. Information may be shared only:
            </p>
            <ul className="list-disc pl-6 mb-4">
                <li>With trusted delivery or courier partners</li>
                <li>To comply with legal obligations or law enforcement</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6 mb-2">5. Cookies & Tracking</h2>
            <p className="mb-4">
                Our website may use cookies to enhance user experience and analyze site traffic. You can
                manage your cookie preferences through your browser settings.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">6. Your Rights</h2>
            <p className="mb-4">
                You have the right to access, update, or delete your personal data at any time. Simply
                contact us at <Link href="mailto:sagaryenkure4@email.com" className="text-blue-600 underline">sagaryenkure4@email.com</Link>.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">7. Updates to this Policy</h2>
            <p className="mb-4">
                We may update this policy occasionally. Please review this page periodically for the latest
                information.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">8. Contact Us</h2>
            <p>
                For any questions about this Privacy Policy or your data, reach out to us at:
                <br />
                <span className="block mt-2">
                    <strong>New Sagar Tailors</strong><br />
                    Pune, Maharashtra, India<br />
                    Phone: +91-7498012116<br />
                    Email: <Link href="mailto:sagaryenkure4@email.com" className="text-blue-600 underline">sagaryenkure4@email.com</Link>
                </span>
            </p>
        </div>
    );
};

export default PrivacyPolicy;
