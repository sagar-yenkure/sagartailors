import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import { testimonials } from "@/constant"

const TestimonialsGrid = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
            {testimonials.map((testimonial, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                >
                    <Card className="h-full hover:shadow-lg transition-all duration-300 border-2 hover:border-amber-200 bg-white rounded-3xl">
                        <CardContent className="p-6">
                            <div className="flex items-center mb-4">
                                <Quote className="h-8 w-8 text-amber-600 opacity-50" />
                            </div>

                            <p className="text-gray-600 mb-6 leading-relaxed">
                                &quot;{testimonial.content}&quot;
                            </p>

                            <div className="flex items-center mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                                ))}
                            </div>

                            <div className="flex items-center">

                                <div>
                                    <h3 className="font-semibold text-slate-900">
                                        {testimonial.name}
                                    </h3>
                                    <p className="text-sm text-gray-500">
                                        {testimonial.role}
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            ))}
        </div>
    )
}

export default TestimonialsGrid