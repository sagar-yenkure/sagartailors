import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

import { Phone, Mail, MessageSquare, MapPin } from "lucide-react"
import Link from "next/link"
import { Info } from "@/constant"
const ContactInformation = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-5"
        >
            <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">
                    Contact Information
                </h3>
            </div>

            {/* Phone */}
            <Card className="hover:shadow-lg transition-shadow bg-white rounded-3xl">
                <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                        <div className="bg-slate-100 p-3 rounded-full">
                            <Phone className="h-6 w-6 text-slate-700" />
                        </div>
                        <div>
                            <h4 className="font-semibold text-slate-900">Phone</h4>
                            <p className="text-gray-600">+91-{Info.number}</p>
                            <p className="text-sm text-gray-500">Mon-Sat, 08AM-10PM</p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Email */}
            <Card className="hover:shadow-lg transition-shadow bg-white rounded-3xl">
                <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                        <div className="bg-amber-100 p-3 rounded-full">
                            <Mail className="h-6 w-6 text-amber-600" />
                        </div>
                        <div>
                            <h4 className="font-semibold text-slate-900">Email</h4>
                            <p className="text-gray-600">sagaryenkure4@gmail.com</p>
                            <p className="text-sm text-gray-500">24/7 Response</p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Address */}
            <Card className="hover:shadow-lg transition-shadow bg-white rounded-3xl">
                <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                        <div className="bg-slate-100 p-3 rounded-full">
                            <MapPin className="h-6 w-6 text-slate-700" />
                        </div>
                        <div>
                            <h4 className="font-semibold text-slate-900">Address</h4>
                            Tarwadewasti, Mohammed Wadi Rd<br />
                            Pune, Maharashtra 411060<br />
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="space-y-3">
                <Link
                    href={`tel:+91${Info.number}`}
                    className="block"
                >
                    <Button className="w-full btn-gradient-primary py-2 rounded-3xl">
                        <Phone className="h-4 w-4 mr-2" />
                        Call Now
                    </Button>
                </Link>

                <Link
                    href={`https://wa.me/${Info.number}`}
                    className="block"
                >
                    <Button variant="outline" className="w-full btn-gradient-success rounded-3xl">
                        <MessageSquare className="h-4 w-4 mr-2" />
                        WhatsApp
                    </Button>
                </Link>
            </div>
        </motion.div>
    )
}

export default ContactInformation