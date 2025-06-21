import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { services } from "@/constant"

const ServiceGrid = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    className="flex items-stretch w-full"
                >
                    <Card className="w-full h-full hover:shadow-lg transition-all duration-300 border-2 hover:border-amber-200 bg-white rounded-3xl">
                        <CardHeader>
                            <div className="mb-4">
                                {service.icon}
                            </div>
                            <CardTitle className="text-xl text-slate-900">{service.title}</CardTitle>
                            <CardDescription className="text-base text-gray-600">
                                {service.description}
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2">
                                {service.features.map((feature, featureIndex) => (
                                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                                        <div className="w-2 h-2 bg-amber-600 rounded-full mr-3"></div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                </motion.div>
            ))}
        </div>
    )
}

export default ServiceGrid
