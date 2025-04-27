import { useState } from "react";
import { apiRequest } from "@/lib/queryClient";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { contactInfo, eventTypes } from "@/lib/constants";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  eventType: z.string().min(1, "Please select an event type"),
  eventDate: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      eventType: "",
      eventDate: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    try {
      await apiRequest("POST", "/api/contact", data);
      toast({
        title: "Message Sent",
        description: "Thank you for your message! We will contact you shortly.",
        variant: "default",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-in-section">
          <h2 className="font-playfair font-bold text-3xl md:text-4xl mb-4 text-primary">Let's Create Something Extraordinary</h2>
          <p className="font-montserrat text-gray-700 max-w-3xl mx-auto">
            Connect with our team to discuss your event vision
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="fade-in-section">
            <div className="mb-8">
              <h3 className="font-montserrat font-semibold text-2xl mb-6 text-primary">Contact Information</h3>
              
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-primary rounded-full p-2 mr-4 text-white">
                      <i className={item.icon}></i>
                    </div>
                    <div>
                      <h4 className="font-montserrat font-semibold mb-1">{item.title}</h4>
                      <p className="text-gray-700">{item.details}</p>
                      {item.title === "Call Us" && (
                        <a href="tel:+919785520040" className="inline-flex items-center text-primary hover:text-primary/80 mt-2 font-medium">
                          <i className="fas fa-phone-alt mr-2"></i> Call Now
                        </a>
                      )}
                      {item.title === "Email Us" && (
                        <a href="mailto:info.eventeliteindia@gmail.com" className="inline-flex items-center text-primary hover:text-primary/80 mt-2 font-medium">
                          <i className="fas fa-envelope mr-2"></i> Send Email
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="font-montserrat font-semibold text-2xl mb-6 text-primary">Connect With Us</h3>
              
              <div className="flex space-x-4">
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="bg-primary hover:bg-primary/80 text-white w-10 h-10 rounded-full flex items-center justify-center transition duration-300">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://wa.me/919785520040" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] hover:bg-[#20bd5a] text-white w-10 h-10 rounded-full flex items-center justify-center transition duration-300">
                  <i className="fab fa-whatsapp"></i>
                </a>
              </div>
              
              <div className="mt-6 bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="text-sm text-gray-700">
                  <i className="fas fa-info-circle text-primary mr-2"></i>
                  Messages sent through this form will be forwarded to our WhatsApp for faster response.
                </p>
              </div>
            </div>
          </div>
          
          <div className="fade-in-section">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="font-montserrat font-semibold text-2xl mb-6 text-primary">Send Us a Message</h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700">Your Name</FormLabel>
                          <FormControl>
                            <Input {...field} className="w-full" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700">Email Address</FormLabel>
                          <FormControl>
                            <Input {...field} type="email" className="w-full" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700">Phone Number</FormLabel>
                        <FormControl>
                          <Input {...field} type="tel" className="w-full" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="eventType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700">Event Type</FormLabel>
                        <Select 
                          onValueChange={field.onChange} 
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select event type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {eventTypes.map((type, index) => (
                              <SelectItem key={index} value={type.value}>{type.label}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="eventDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700">Tentative Event Date</FormLabel>
                        <FormControl>
                          <Input {...field} type="date" className="w-full" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700">Your Message</FormLabel>
                        <FormControl>
                          <Textarea {...field} rows={4} className="w-full" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full font-poppins bg-primary hover:bg-primary/80 text-white py-3 px-6 rounded-md transition duration-300 disabled:opacity-70"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
