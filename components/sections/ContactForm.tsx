import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select"
import { Send, Loader2 } from "lucide-react"
import { useState } from "react"
import sendmail from "@/actions/sendEmail"
import toast from "react-hot-toast"

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: ""
    })

    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        try {
            await sendmail(
                formData.name,
                formData.email,
                formData.phone,
                formData.service,
                formData.message
            )
            toast.success("Message sent successfully!")

            setFormData({
                name: "",
                email: "",
                phone: "",
                service: "",
                message: ""
            })
        } catch (error) {
            toast.error("Failed to send message.")
        } finally {
            setLoading(false)
        }
    }

    const handleInputChange = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }))
    }

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
        >
            <Card className="shadow-xl bg-white rounded-3xl">
                <CardHeader>
                    <CardTitle className="text-2xl text-slate-900">Send us a Message</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="name">Full Name *</Label>
                                <Input
                                    id="name"
                                    value={formData.name}
                                    onChange={e => handleInputChange("name", e.target.value)}
                                    placeholder="Enter your full name"
                                    required
                                    className="transition-all duration-200 focus:ring-2 focus:ring-amber-500"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="email">Email Address *</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={e => handleInputChange("email", e.target.value)}
                                    placeholder="Enter your email"
                                    required
                                    className="transition-all duration-200 focus:ring-2 focus:ring-amber-500"
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="phone">Phone Number *</Label>
                                <Input
                                    id="phone"
                                    type="tel"
                                    value={formData.phone}
                                    onChange={e => handleInputChange("phone", e.target.value)}
                                    placeholder="Enter your phone number"
                                    required
                                    className="transition-all duration-200 focus:ring-2 focus:ring-amber-500"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="service">Service Required</Label>
                                <Select
                                    required
                                    value={formData.service}
                                    onValueChange={value => handleInputChange("service", value)}
                                >
                                    <SelectTrigger aria-label="select a service" className="transition-all duration-200 focus:ring-2 focus:ring-amber-500">
                                        <SelectValue placeholder="Select a service" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="custom-stitching">Custom Stitching</SelectItem>
                                        <SelectItem value="wedding-attire">Wedding Attire</SelectItem>
                                        <SelectItem value="formal-wear">Formal Wear</SelectItem>
                                        <SelectItem value="alterations">Alterations</SelectItem>
                                        <SelectItem value="express-service">Express Service</SelectItem>
                                        <SelectItem value="bulk-orders">Bulk Orders</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="message">Message</Label>
                            <Textarea
                                required
                                id="message"
                                value={formData.message}
                                onChange={e => handleInputChange("message", e.target.value)}
                                placeholder="Tell us about your requirements, fabric details, or any specific needs..."
                                rows={4}
                                className="transition-all duration-200 focus:ring-2 focus:ring-amber-500"
                            />
                        </div>

                        <motion.div whileHover={{ scale: 0.98 }} whileTap={{ scale: 0.98 }}>
                            <Button
                                type="submit"
                                size="lg"
                                className="w-full btn-gradient-secondary py-3"
                                disabled={loading}
                            >
                                {loading ? (
                                    <>
                                        <Loader2 className="animate-spin h-5 w-5 mr-2" />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <Send className="h-5 w-5 mr-2" />
                                        Send Message
                                    </>
                                )}
                            </Button>
                        </motion.div>

                        <p className="text-sm text-gray-500 text-center">
                            We'll get back to you within 24 hours. For urgent inquiries, please call us
                            directly.
                        </p>
                    </form>
                </CardContent>
            </Card>
        </motion.div>
    )
}

export default ContactForm
