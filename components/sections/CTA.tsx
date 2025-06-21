import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import Link from "next/link";

const CTA = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-16"
        >
            <div className="bg-gray-100 rounded-2xl p-8">
                <Clock className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    Need a Custom Quote?
                </h3>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                    Every project is unique. Contact us for a personalized consultation and detailed quote
                    based on your specific requirements and fabric.
                </p>
                <Link href="#contact">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn-gradient-secondary px-8 py-3 rounded-lg"
                    >
                        Get Free Consultation
                    </motion.button>
                </Link>
            </div>
        </motion.div>
    );
};

export default CTA;
