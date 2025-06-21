import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { catalogueItems } from "@/constant"
import { Sparkles } from "lucide-react"
import Image from "next/image"

const CatalogueGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-20">
      {catalogueItems.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: index * 0.15 }}
          viewport={{ once: true }}
          whileHover={{ y: -12 }}
          className="group cursor-pointer"
        >
          <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white overflow-hidden rounded-3xl">
            {/* Image Container */}
            <div className="relative overflow-hidden rounded-t-3xl">
              <div className="aspect-[4/3] overflow-hidden">
                <Image
                  fill
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Price Badge */}
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-sm font-bold text-slate-900">{item.price}</span>
              </div>

              {/* Hover Content */}
              <div className="absolute bottom-4 left-4 right-4 transform translate-y-8 group-hover:translate-y-0 transition-all duration-500 opacity-0 group-hover:opacity-100">
                <div className="flex flex-wrap gap-2">
                  {item.features.map((feature, idx) => (
                    <span key={idx} className="bg-white/20 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Content */}
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-2xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors duration-300">
                  {item.name}
                </h3>
                <Sparkles className="h-5 w-5 text-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {item.description}
              </p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}

export default CatalogueGrid