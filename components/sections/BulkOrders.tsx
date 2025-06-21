import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

const BulkOrders = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=60 height=60 viewBox=0 0 60 60 xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%23ffffff\\' fill-opacity=\\'0.03\\'%3E%3Cpath d=\\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\\'/\\%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] rounded-3xl"></div>

      <div className="relative p-6 md:p-12 text-center text-white">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="inline-flex items-center justify-center w-20 h-20 bg-amber-600/20 backdrop-blur-sm rounded-full mb-8"
        >
          <Sparkles className="h-10 w-10 text-amber-400" />
        </motion.div>

        <h3 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
          Bulk Orders
        </h3>

        <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Special pricing for organizations, schools, and businesses.
          Same premium quality, better value.
        </p>

        <Link href="#contact">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button size="lg" className="bg-white text-slate-900 hover:bg-gray-100 font-bold px-10 py-4 rounded-full text-lg shadow-xl">
              Request Bulk Quote
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </motion.div>
        </Link>
      </div>
    </motion.div>
  );
};

export default BulkOrders;
