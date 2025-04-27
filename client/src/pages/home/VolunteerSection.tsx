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
import { volunteerPositions, volunteerBenefits } from "@/lib/constants";

const volunteerFormSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  position: z.string().min(1, "Please select a position"),
  experience: z.string().optional(),
});

type VolunteerFormValues = z.infer<typeof volunteerFormSchema>;

const VolunteerSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<VolunteerFormValues>({
    resolver: zodResolver(volunteerFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      position: "",
      experience: "",
    },
  });

  const onSubmit = async (data: VolunteerFormValues) => {
    setIsSubmitting(true);
    try {
      await apiRequest("POST", "/api/volunteer", data);
      toast({
        title: "Application Submitted",
        description: "Thank you for your interest in volunteering! We will review your application and get back to you soon.",
        variant: "default",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your application. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section id="volunteer" className="py-20 px-6 md:px-12 lg:px-24 bg-gradient-purple-blue text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-in-section">
          <h2 className="font-playfair font-bold text-3xl md:text-4xl mb-4">Join Our Volunteer Program</h2>
          <p className="font-montserrat max-w-3xl mx-auto">
            Gain valuable experience in event management while working alongside industry professionals
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {volunteerBenefits.map((benefit, index) => (
            <div key={index} className="bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-lg hover-scale fade-in-section">
              <div className="text-accent text-3xl mb-4">
                <i className={benefit.icon}></i>
              </div>
              <h3 className="font-montserrat font-semibold text-xl mb-3">{benefit.title}</h3>
              <p className="text-white text-opacity-90">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="fade-in-section">
            <h3 className="font-montserrat font-semibold text-2xl mb-6">Volunteer Positions</h3>
            
            <div className="space-y-4">
              {volunteerPositions.map((position, index) => (
                <div key={index} className="bg-white bg-opacity-10 backdrop-blur-sm p-4 rounded-lg flex items-start">
                  <i className={`${position.icon} mt-1 mr-4 text-accent`}></i>
                  <div>
                    <h4 className="font-montserrat font-semibold mb-1">{position.title}</h4>
                    <p className="text-sm text-white text-opacity-90">{position.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="fade-in-section">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="font-montserrat font-semibold text-2xl mb-6 text-primary">Apply to Volunteer</h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700">First Name</FormLabel>
                          <FormControl>
                            <Input {...field} className="w-full" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700">Last Name</FormLabel>
                          <FormControl>
                            <Input {...field} className="w-full" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
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
                    name="position"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700">Preferred Position</FormLabel>
                        <Select 
                          onValueChange={field.onChange} 
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a position" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {volunteerPositions.map((pos, index) => (
                              <SelectItem key={index} value={pos.value}>{pos.title}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="experience"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700">Previous Experience</FormLabel>
                        <FormControl>
                          <Textarea {...field} rows={3} className="w-full" />
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
                    {isSubmitting ? "Submitting..." : "Submit Application"}
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

export default VolunteerSection;
