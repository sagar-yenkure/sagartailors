"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Clock } from "lucide-react";
import useStoreOpenStatus from "@/hooks/useStoreOpenStatus";

const StoreInformation = () => {
    const isOpen = useStoreOpenStatus();

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
        >
            {/* Address Card */}
            <Card className="hover:shadow-lg rounded-3xl transition-shadow bg-gray-50">
                <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                        <MapPin className="h-6 w-6 text-slate-700" />
                        <span className="text-slate-900">Store Address</span>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <address className="not-italic text-gray-600 leading-relaxed">
                        Tarwadewasti, Mohammed Wadi Rd<br />
                        In front of ALKASA APARTMENTS<br />
                        Pune, Maharashtra 411060<br />
                        India
                    </address>
                </CardContent>
            </Card>

            {/* Business Hours */}
            <Card className="hover:shadow-lg transition-shadow bg-gray-50 rounded-3xl">
                <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                        <Clock className="h-6 w-6 text-amber-600" />
                        <span className="text-slate-900">Business Hours</span>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-2 text-gray-600">
                        <div className="flex justify-between">
                            <span>Monday - Saturday</span>
                            <span className="font-medium">8:00 AM - 10:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Sunday</span>
                            <span className="font-medium">10:00 AM - 10:00 PM</span>
                        </div>
                        <div className="pt-2 border-t border-gray-200">
                            <div className="flex items-center space-x-2">
                                <div className={`w-2 h-2 rounded-full ${isOpen ? "bg-green-500" : "bg-red-500"}`} />
                                <span className={`font-medium ${isOpen ? "text-green-600" : "text-red-600"}`}>
                                    {isOpen ? "Open Now" : "Closed"}
                                </span>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
};

export default StoreInformation;
