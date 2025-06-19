import { features } from '@/constant'
import { motion } from "framer-motion"

const FeatureGrid = () => {
    return (
        <div className="grid md:grid-cols-2 gap-8 mb-20">
            {features.map((feature, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-6 p-6 h-full hover:shadow-lg transition-all duration-300 border-2 hover:border-amber-200 bg-white rounded-3xl "
                >
                    <div className="flex-shrink-0">
                        {feature.icon}
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">
                            {feature.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            {feature.description}
                        </p>
                    </div>
                </motion.div>
            ))}
        </div>
    )
}

export default FeatureGrid