
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Form, FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { useForm } from "react-hook-form";

interface TourCardProps {
  title: string;
  description: string;
  image: string;
  price: string;
  duration: string;
  highlights: string[];
  times?: string;
  operatorLogo?: string;
}

const TourCard = ({ 
  title, 
  description, 
  image, 
  price, 
  duration, 
  highlights,
  times,
  operatorLogo
}: TourCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [bookingDialogOpen, setBookingDialogOpen] = useState(false);
  
  // Define form for booking
  const form = useForm({
    defaultValues: {
      date: undefined as Date | undefined,
      guests: 1
    }
  });

  const handleBookNow = () => {
    setBookingDialogOpen(true);
  };
  
  const submitBooking = (values: { date: Date | undefined; guests: number }) => {
    // Format the date 
    const formattedDate = values.date ? format(values.date, 'MMMM d, yyyy') : 'flexible';
    
    // Create WhatsApp message
    const message = `Hello! I would like to book the ${title} tour for ${values.guests} guest${values.guests > 1 ? 's' : ''} on ${formattedDate}. Price: ${price}, Duration: ${duration}. Please confirm availability.`;
    
    // Encode message for WhatsApp URL
    const encodedMessage = encodeURIComponent(message);
    
    // Open WhatsApp with the pre-filled message
    window.open(`https://wa.me/50661500559?text=${encodedMessage}`, '_blank');
    
    // Close the dialog
    setBookingDialogOpen(false);
  };
  
  // Determine if this is the Rio Habana night walk
  const isRioHabanaNightWalk = title.toLowerCase().includes('rio habana');

  return (
    <div 
      className="group relative overflow-hidden rounded-xl shadow-md transition-all duration-500 ease-in-out h-full flex flex-col bg-white"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image container with blur-up loading */}
      <div 
        className={`relative w-full aspect-[4/3] overflow-hidden ${!imageLoaded ? 'blur-load' : 'loaded'}`}
        style={{ backgroundImage: `url(${image}?blur=30&w=50)` }}
      >
        <img 
          src={image} 
          alt={title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
          onLoad={() => setImageLoaded(true)}
        />
        
        {/* Price badge */}
        <div className="absolute top-4 right-4 bg-sloth-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-md z-10">
          {price}
        </div>
        
        {/* Duration badge */}
        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm text-jungle-800 px-3 py-1 rounded-full text-sm font-medium shadow-md z-10">
          {duration}
        </div>
      </div>
      
      {/* Content */}
      <div className="flex-1 p-5">
        <h3 className="text-xl font-display font-semibold text-jungle-800 mb-2 group-hover:text-jungle-600 transition-colors">
          {title}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        
        {times && (
          <div className="bg-jungle-50 rounded-lg p-3 mb-4">
            <p className="text-sm text-jungle-800 font-medium">
              <span className="text-jungle-600 mr-2">⏰</span> 
              {times}
            </p>
          </div>
        )}
        
        <div className="hidden group-hover:block animate-fade-in">
          <h4 className="font-medium text-jungle-700 text-sm mb-2">Highlights:</h4>
          <ul className="space-y-1">
            {highlights.map((highlight, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                <svg className="h-4 w-4 text-jungle-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Tour operator attribution */}
        <div className="mt-4 flex items-center gap-2">
          {operatorLogo && (
            <img 
              src={operatorLogo} 
              alt={isRioHabanaNightWalk ? "Rio Habana Night Walk" : "Arenal Jungle Tours"} 
              className="h-5 w-auto object-contain"
            />
          )}
          <p className="italic text-xs text-jungle-600">
            {isRioHabanaNightWalk ? (
              "Provided by Rio Habana Night Walk via Top Tours Costa Rica"
            ) : (
              "Operated by Arenal Jungle Tours via Top Tours Costa Rica"
            )}
          </p>
        </div>
      </div>
      
      {/* Book button */}
      <div className="p-5 pt-0 mt-auto">
        <button 
          onClick={handleBookNow}
          className="w-full py-3 bg-jungle-500 hover:bg-jungle-600 text-white rounded-lg transition-colors shadow-sm font-medium"
        >
          Book This Tour
        </button>
      </div>

      {/* Booking Dialog */}
      <Dialog open={bookingDialogOpen} onOpenChange={setBookingDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Book {title}</DialogTitle>
          </DialogHeader>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(submitBooking)} className="space-y-4">
              {/* Date picker */}
              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Select Date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          initialFocus
                          disabled={(date) => date < new Date()}
                          className="p-3 pointer-events-auto"
                        />
                      </PopoverContent>
                    </Popover>
                  </FormItem>
                )}
              />
              
              {/* Number of guests */}
              <FormField
                control={form.control}
                name="guests"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Number of Guests</FormLabel>
                    <div className="flex items-center">
                      <Users className="mr-2 h-4 w-4 text-jungle-500" />
                      <FormControl>
                        <Input
                          type="number"
                          min="1"
                          max="20"
                          {...field}
                          onChange={e => field.onChange(parseInt(e.target.value) || 1)}
                        />
                      </FormControl>
                    </div>
                  </FormItem>
                )}
              />
              
              <DialogFooter className="sm:justify-end">
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={() => setBookingDialogOpen(false)}
                >
                  Cancel
                </Button>
                <Button type="submit">
                  Continue to WhatsApp
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default TourCard;
