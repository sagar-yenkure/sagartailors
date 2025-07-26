import { Award, CheckCircle, Scissors } from "lucide-react"
import { motion } from "framer-motion"

const QualityPromise = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}

        >
            <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center p-6 h-full hover:shadow-lg transition-all duration-300 border-2 hover:border-amber-200 bg-white rounded-3xl">
                    <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="h-8 w-8 text-amber-600" />
                    </div>
                    <h4 className="font-semibold text-slate-900 mb-2">Expert Stitching</h4>
                    <p className="text-sm text-gray-600">Professional stitching for your premium fabrics</p>
                </div>

                <div className="text-center p-6 h-full hover:shadow-lg transition-all duration-300 border-2 hover:border-amber-200 bg-white rounded-3xl ">
                    <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Scissors className="h-8 w-8 text-amber-600" />
                    </div>
                    <h4 className="font-semibold text-slate-900 mb-2">Master Craftsmanship</h4>
                    <p className="text-sm text-gray-600">Skilled artisans with decades of experience</p>
                </div>

                <div className="text-center p-6 h-full hover:shadow-lg transition-all duration-300 border-2 hover:border-amber-200 bg-white rounded-3xl ">
                    <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Award className="h-8 w-8 text-amber-600" />
                    </div>
                    <h4 className="font-semibold text-slate-900 mb-2">Satisfaction Guarantee</h4>
                    <p className="text-sm text-gray-600">100% satisfaction or we make it right</p>
                </div>
            </div>
        </motion.div>
    )
}

export default QualityPromise