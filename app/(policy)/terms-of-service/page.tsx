import Image from "next/image";
import Link from "next/link";

const TermsOfService = () => {
    return (
        <div className="max-w-3xl mx-auto px-4 py-12 text-gray-800">
            {/* Logo and Heading */}
            <div className="flex items-center gap-6 mb-8">
                <Image src={"/opengraph-image.png"} alt="New Sagar Tailors Logo" width={80} height={80} quality={100} />
                <h1 className="text-2xl md:text-3xl font-bold text-slate-800">New Sagar Tailors</h1>
            </div>

            <h2 className="text-3xl font-bold mb-6">Terms of Service</h2>

            <p className="mb-4">
                These Terms of Service govern your use of our tailoring services and website operated by
                <strong> New Sagar Tailors</strong>. By using our services, you agree to be bound by these
                terms.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-2">1. Services Offered</h3>
            <p className="mb-4">
                We offer custom tailoring services including stitching, alterations, fabric consultation,
                and bulk orders for schools, businesses, and individuals. All services are provided based on
                the measurements and preferences submitted by the customer.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-2">2. Appointments & Orders</h3>
            <p className="mb-4">
                Appointments or online orders must be confirmed via phone, in-person, or through our
                website. Once measurements are submitted, we are not liable for incorrect sizing due to
                inaccurate data provided by the customer.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-2">3. Payments</h3>
            <p className="mb-4">
                All prices are clearly stated and agreed upon before starting the service. Payments can be
                made online or in-person. For bulk orders, a partial advance may be required before work
                begins.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-2">4. Cancellation & Refunds</h3>
            <p className="mb-4">
                Since each product is custom-stitched, cancellations are only allowed within 24 hours of
                placing the order. No refunds will be issued for completed or partially completed garments.
                In case of defects, we offer free corrections within 7 days of delivery.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-2">5. Turnaround Time</h3>
            <p className="mb-4">
                Standard stitching turnaround is 2-4 business days. Urgent orders may incur an additional
                charge. Delivery times may vary based on fabric availability and order complexity.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-2">6. Use of Website</h3>
            <p className="mb-4">
                You agree not to misuse our website for fraudulent activity, hacking, or sending spam. We
                reserve the right to block or suspend access for suspicious or abusive users.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-2">7. Limitation of Liability</h3>
            <p className="mb-4">
                While we ensure quality service, we are not responsible for indirect losses, delivery
                delays, or dissatisfaction due to incorrect measurements provided by the customer.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-2">8. Changes to Terms</h3>
            <p className="mb-4">
                We reserve the right to update these Terms at any time. Changes will be posted on this page
                and take effect immediately.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-2">9. Contact Us</h3>
            <p>
                If you have any questions regarding these Terms, feel free to reach out at:
                <br />
                <span className="block mt-2">
                    <strong>New Sagar Tailors</strong><br />
                    Pune, Maharashtra, India<br />
                    Email: <Link href="mailto:sagaryenkure4@email.com" className=" text-blue-600 underline">
                        sagaryenkure4@email.com
                    </Link>
                </span>
            </p>
        </div >
    );
};

export default TermsOfService;
