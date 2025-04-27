import { useState } from "react";
import { Link } from "wouter";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { eventTypes } from "@/lib/constants";
import { useToast } from "@/hooks/use-toast";

const calculatorSchema = z.object({
  eventType: z.string().min(1, "Please select an event type"),
  guestCount: z.string().min(1, "Please enter the number of guests"),
  eventDuration: z.string().min(1, "Please enter the event duration"),
  services: z.array(z.string()).min(1, "Please select at least one service"),
});

type CalculatorFormValues = z.infer<typeof calculatorSchema>;

const EventCalculator = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<CalculatorFormValues>({
    resolver: zodResolver(calculatorSchema),
    defaultValues: {
      eventType: "",
      guestCount: "",
      eventDuration: "",
      services: [],
    },
  });

  const onSubmit = (data: CalculatorFormValues) => {
    setIsSubmitting(true);
    setIsCalculating(true);
    
    // Simulate calculation loading
    setTimeout(() => {
      setIsCalculating(false);
      setIsSubmitting(false);
      
      toast({
        title: "Under Construction",
        description: "Our calculator is being built. Please contact us via WhatsApp at +91 9785520040 for a personalized quote.",
        variant: "default",
      });
    }, 2000);
  };

  const services = [
    { value: "venue", label: "Venue Selection" },
    { value: "catering", label: "Catering Services" },
    { value: "decor", label: "Decoration & Theme Design" },
    { value: "photography", label: "Photography & Videography" },
    { value: "entertainment", label: "Entertainment & Music" },
    { value: "coordination", label: "Event Coordination" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <a href="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-6">
              <i className="fas fa-arrow-left mr-2"></i> Back to Home
            </a>
            <h1 className="font-playfair font-bold text-3xl md:text-4xl text-primary mb-4">Event Budget Calculator</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Get an estimated cost for your event based on your requirements. Our interactive calculator helps you plan your budget efficiently.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="border-l-4 border-accent bg-amber-50 p-4 mb-8">
              <div className="flex">
                <div className="flex-shrink-0">
                  <i className="fas fa-tools text-accent"></i>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-amber-800">Under Construction</h3>
                  <div className="mt-2 text-sm text-amber-700">
                    <p>
                      Our budget calculator is currently being developed. For immediate assistance and a personalized quote, 
                      please contact us directly via <a href="https://wa.me/919785520040" className="font-medium underline">WhatsApp</a>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="guestCount"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700">Number of Guests</FormLabel>
                        <FormControl>
                          <Input {...field} type="number" min="10" placeholder="e.g., 100" className="w-full" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="eventDuration"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700">Event Duration (hours)</FormLabel>
                        <FormControl>
                          <Input {...field} type="number" min="1" placeholder="e.g., 4" className="w-full" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <fieldset>
                  <legend className="block text-sm font-medium text-gray-700 mb-2">Services Required</legend>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {services.map((service) => (
                      <div key={service.value} className="flex items-center">
                        <input
                          id={service.value}
                          type="checkbox"
                          value={service.value}
                          className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                          onChange={(e) => {
                            const currentServices = form.getValues("services") || [];
                            if (e.target.checked) {
                              form.setValue("services", [...currentServices, service.value]);
                            } else {
                              form.setValue(
                                "services",
                                currentServices.filter((value) => value !== service.value)
                              );
                            }
                          }}
                        />
                        <label htmlFor={service.value} className="ml-3 text-sm text-gray-700">
                          {service.label}
                        </label>
                      </div>
                    ))}
                  </div>
                  {form.formState.errors.services && (
                    <p className="text-sm font-medium text-destructive mt-2">
                      {form.formState.errors.services.message}
                    </p>
                  )}
                </fieldset>
                
                <div className="pt-4">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/80 text-white"
                  >
                    {isCalculating ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Calculating...
                      </span>
                    ) : (
                      "Calculate Estimate"
                    )}
                  </Button>
                </div>
              </form>
            </Form>
            
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h3 className="font-semibold text-primary mb-2">Need a Custom Quote?</h3>
              <p className="text-gray-600 text-sm">
                For a more detailed and personalized quote, please contact us directly:
              </p>
              <div className="mt-4 flex gap-4">
                <a 
                  href="https://wa.me/919785520040" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#25D366] hover:bg-[#20bd5a] focus:outline-none"
                >
                  <i className="fab fa-whatsapp mr-2"></i> WhatsApp Us
                </a>
                <a 
                  href="tel:+919785520040" 
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary/80 focus:outline-none"
                >
                  <i className="fas fa-phone-alt mr-2"></i> Call Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCalculator;