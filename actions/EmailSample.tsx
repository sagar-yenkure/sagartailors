
export const ContactUsEmail = ({ email, message, name, phone, service }: {
    name: string,
    email: string,
    message: string,
    phone: string,
    service: string,
}) => {

    return (
        <div className="max-w-xl mx-auto bg-white border border-gray-200 rounded-xl p-6 font-sans">
            <h1 className="text-2xl font-bold text-gray-800">Thank You for Connecting!</h1>

            <p className="text-base text-gray-700 mt-4">Dear {name},</p>

            <p className="text-base text-gray-700 mt-2">
                Thank you for reaching out to <strong>New Sagar Tailors</strong>. We've received your inquiry and
                our team will get back to you shortly.
            </p>

            <p className="text-base text-gray-700 mt-4">
                Below is a summary of your submitted details:
            </p>

            <div className="mt-4 text-sm text-gray-800 border rounded-md bg-gray-50 p-4">
                <p><strong>Name:</strong> {name}</p>
                <p><strong>Email:</strong> {email}</p>
                <p><strong>Phone:</strong> {phone}</p>
                <p><strong>Service Interested In:</strong> {service}</p>
                <p><strong>Message:</strong><br />{message}</p>
            </div>

            <p className="text-sm text-gray-500 mt-6">— Team New Sagar Tailors</p>
        </div>
    );
};
