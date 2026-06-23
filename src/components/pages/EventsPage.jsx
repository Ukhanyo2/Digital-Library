import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Clock } from "lucide-react";
import { useState } from "react";

const upcomingEvents = [
  {
    id: 1,
    title: "Creative Writing Workshop",
    date: "March 5, 2026",
    time: "2:00 PM - 5:00 PM",
    location: "Virtual Event",
    category: "Books",
    description: "Join bestselling authors for an interactive workshop on character development and storytelling.",
    attendees: 156,
    maxAttendees: 200,
    image: "https://images.unsplash.com/photo-1603478804503-dc909c7f5ce5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVudCUyMGNvbmZlcmVuY2UlMjBwZW9wbGV8ZW58MXx8fHwxNzcxNjg1NTYwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    link: "https://www.obama.org/visit/museum/",
  },
  {
    id: 2,
    title: "GamesBeat Summit 2026",
    date: "May 20, 2026",
    time: "9:00 AM - 5:00 PM",
    location: "Los Angeles, CA",
    category: "Games",
    description: "Gaming industry conference covering trends, AI, and business models in gaming. Network with developers and industry leaders.",
    attendees: 342,
    maxAttendees: 500,
    image: "https://images.unsplash.com/photo-1540575467063-178f50002fe5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1lIGNvbmZlcmVuY2UlMjBwZW9wbGV8ZW58MXx8fHwxNzcxNjg1NTYwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    link: "https://gameconfguide.com/",
  },
  {
    id: 3,
    title: "A Maze Berlin 2026",
    date: "May 13, 2026",
    time: "10:00 AM - 6:00 PM",
    location: "Berlin, Germany",
    category: "Games",
    description: "International event focused on arthouse games and digital art. Explore innovative game design and artistic expression.",
    attendees: 278,
    maxAttendees: 400,
    image: "https://images.unsplash.com/photo-1538481143235-c8f91865a8fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1lcyBhcnQlMjBkZXNpZ258ZW58MXx8fHwxNzcxNjg1NTYwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    link: "https://www.gamesindustry.biz/events",
  },
  {
    id: 4,
    title: "Book Launch: 'Digital Dreams'",
    date: "June 18, 2026",
    time: "7:00 PM - 9:00 PM",
    location: "City Library",
    category: "Books",
    description: "Celebrate the launch of our newest digital book with a meet-and-greet with the author.",
    attendees: 78,
    maxAttendees: 100,
    image: "https://images.unsplash.com/photo-1507842955343-583cf47c2865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rIGxhdW5jaHxlbnwxfHx8fDE3NzE2ODU1NjB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    link: "https://www.wanderlustmagazine.com/inspiration/literary-book-festivals-around-the-world/",
  },
  {
    id: 5,
    title: "Gamescom 2026",
    date: "August 24, 2026",
    time: "10:00 AM - 6:00 PM",
    location: "Cologne, Germany",
    category: "Games",
    description: "The world's largest event for computer and video games. Experience the latest releases, demos, and connect with the gaming community.",
    attendees: 412,
    maxAttendees: 800,
    image: "https://images.unsplash.com/photo-1577720643272-265f434e9b0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1lcyBleHBvfGVufDF8fHx8fDE3NzE2ODU1NjB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    link: "https://www.gamescom.global/en",
  },
  {
    id: 6,
    title: "Rio Book Biennial 2026",
    date: "September 15, 2026",
    time: "9:00 AM - 8:00 PM",
    location: "Rio de Janeiro, Brazil",
    category: "Books",
    description: "UNESCO World Book Capital event featuring high-profile international authors, panel discussions, and book signings.",
    attendees: 189,
    maxAttendees: 350,
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rIGZlc3RpdmFsfGVufDF8fHx8fDE3NzE2ODU1NjB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    link: "https://www.wanderlustmagazine.com/inspiration/literary-book-festivals-around-the-world/",
  },
];

export function Events() {
  const [selectedCategory, setSelectedCategory] = useState("All Events");

  const filteredEvents = selectedCategory === "All Events" 
    ? upcomingEvents
    : upcomingEvents.filter(event => event.category === selectedCategory);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#2a6199' }}>
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Header - Centered like Games page */}
        <div className="text-center mb-12">
          <h1 
            className="text-5xl md:text-7xl font-bold mb-4"
            style={{ 
              fontFamily: "'Playfair Display', serif",
              background: 'linear-gradient(135deg, #fff 0%, #e0f2fe 50%, #fff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 0 30px rgba(255,255,255,0.2)'
            }}
          >
            Events
          </h1>
         
        </div>

        {/* Info Box */}
        <div className="mb-8">
          <div className="p-4 rounded-lg" style={{ backgroundColor: '#1e4a7a/20', border: '2px solid #1e4a7a' }}>
            <p className="text-sm sm:text-lg text-center" style={{ color: '#ffffff' }}>
              <strong>Updates of all Books and Games related events</strong>
            </p>
            <p className="text-xs sm:text-sm mt-2 text-center" style={{ color: '#e0e0e0' }}>
              Stay informed about upcoming workshops, book launches, game releases, and community gatherings.
            </p>
          </div>
        </div>

        {/* Filter Tabs - Centered */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12">
          <Button 
            onClick={() => setSelectedCategory("All Events")}
            className={selectedCategory === "All Events" ? "text-white hover:opacity-90" : "bg-white/10 text-white hover:bg-white/20"}
            style={selectedCategory === "All Events" ? { backgroundColor: '#1e4a7a' } : { border: '2px solid #1e4a7a', backgroundColor: 'transparent', color: '#ffffff' }}
          >
            All Events
          </Button>
          <Button 
            onClick={() => setSelectedCategory("Books")}
            className={selectedCategory === "Books" ? "text-white hover:opacity-90" : "hover:bg-white/20"}
            style={selectedCategory === "Books" ? { backgroundColor: '#1e4a7a' } : { border: '2px solid #1e4a7a', backgroundColor: 'transparent', color: '#ffffff' }}
          >
            Books Events
          </Button>
          <Button 
            onClick={() => setSelectedCategory("Games")}
            className={selectedCategory === "Games" ? "text-white hover:opacity-90" : "hover:bg-white/20"}
            style={selectedCategory === "Games" ? { backgroundColor: '#1e4a7a' } : { border: '2px solid #1e4a7a', backgroundColor: 'transparent', color: '#ffffff' }}
          >
            Games Events
          </Button>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredEvents.map((event) => (
            <a href={event.link} target="_blank" rel="noopener noreferrer" key={event.id}>
              <Card className="hover:shadow-xl transition-shadow flex flex-col h-full cursor-pointer hover:border-teal-400 hover:border-2 bg-white/5 backdrop-blur-sm border-white/10">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="text-white" style={{ backgroundColor: '#1e4a7a' }}>
                      {event.category}
                    </Badge>
                    <div className="flex items-center gap-1 text-xs sm:text-sm text-white/60">
                      <Users className="w-4 h-4" />
                      <span>{event.attendees}/{event.maxAttendees}</span>
                    </div>
                  </div>
                  <CardTitle className="text-base sm:text-lg text-white">{event.title}</CardTitle>
                  <CardDescription className="text-xs sm:text-sm text-white/60">{event.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2 flex-grow">
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-white/60">
                    <Calendar className="w-4 h-4 text-white/40 flex-shrink-0" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-white/60">
                    <Clock className="w-4 h-4 text-white/40 flex-shrink-0" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-white/60">
                    <MapPin className="w-4 h-4 text-white/40 flex-shrink-0" />
                    <span>{event.location}</span>
                  </div>
                </CardContent>
                <CardFooter className="pt-4">
                  <Button 
                    onClick={(e) => {
                      e.preventDefault();
                      window.open(event.link, '_blank');
                    }}
                    className="w-full text-white hover:opacity-90 text-sm sm:text-base"
                    style={{ backgroundColor: '#1e4a7a' }}
                    disabled={event.attendees >= event.maxAttendees}
                  >
                    {event.attendees >= event.maxAttendees ? "Event Full" : "Learn More"}
                  </Button>
                </CardFooter>
              </Card>
            </a>
          ))}
        </div>

        {/* Disclaimer Section */}
        <div className="mt-16 pt-8 border-t border-white/10 mb-12">
          <div className="bg-yellow-500/10 border-l-4 border-yellow-500 p-6 rounded-r-2xl">
            <p className="text-yellow-400 text-sm font-semibold mb-2">⚠️ Disclaimer</p>
            <p className="text-white/70 text-xs leading-relaxed">
              This website provides event information, updates, and announcements from around the world for informational purposes only.
              <br /><br />
              We are not affiliated with, endorsed by, or officially connected to any event organizers, venues, brands, or companies unless clearly stated. All trademarks, logos, images, and event titles belong to their respective owners.
              <br /><br />
              While we aim to keep information accurate and updated, we cannot guarantee complete accuracy at all times. Users should verify official event details directly from the original sources.
              <br /><br />
              By using this website, you agree that the website owner is not responsible for any loss, damages, or decisions made based on the content provided here.
            </p>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="p-6 sm:p-8 rounded-lg text-center" style={{ backgroundColor: '#1e4a7a/20', border: '4px solid #1e4a7a' }}>
          <h3 className="mb-4 text-xl sm:text-2xl font-semibold text-white">Never Miss an Event</h3>
          <p className="mb-6 text-sm sm:text-base text-white/70 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive updates about upcoming events, new book releases, 
            and game launches directly in your inbox.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border-2 rounded text-sm bg-white/10 text-white placeholder-white/40"
              style={{ borderColor: '#1e4a7a' }}
            />
            <Button className="text-white hover:opacity-90 whitespace-nowrap" style={{ backgroundColor: '#1e4a7a' }}>Subscribe</Button>
          </div>
        </div>
      </div>
    </div>
  );
}