import { ratingStats } from "@/constant"
import { motion } from "framer-motion"
import { Star } from "lucide-react"
const RatingSection = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center bg-gradient-to-r from-slate-800 to-amber-600 rounded-2xl p-8 text-white"
        >
            <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-8 w-8 text-yellow-300 fill-current mx-1" />
                ))}
            </div>
            <h3 className="text-3xl font-bold mb-2">
                4.9/5 Customer Rating
            </h3>
            <p className="text-slate-100 text-lg mb-6">
                Based on 500+ customer reviews across 25+ years of service
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
                {ratingStats.map((rate, idx) => {
                    return <div key={idx} className="text-center">
                        <div className="text-2xl font-bold text-yellow-300">{rate.percentage}%</div>
                        <div className="text-sm text-slate-100">{rate.label}</div>
                    </div>
                })
                }
            </div>
        </motion.div>
    )
}

export default RatingSection