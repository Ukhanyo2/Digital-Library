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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="mb-8 sm:mb-12">
        <div className="p-4 mb-6 inline-block" style={{ backgroundColor: '#1e4a7a', border: '4px solid #2a6199' }}>
          <h2 className="flex items-center gap-2 m-0 text-base sm:text-lg text-white">
            <Calendar className="w-5 sm:w-6 h-5 sm:h-6" />
            Events
          </h2>
        </div>
        <div className="p-4 rounded-lg mb-6" style={{ backgroundColor: '#e8f2f9', border: '2px solid #1e4a7a' }}>
          <p className="text-sm sm:text-lg" style={{ color: '#1e4a7a' }}>
            <strong>Updates of all Books and Games related events</strong>
          </p>
          <p className="text-xs sm:text-sm mt-2" style={{ color: '#2a6199' }}>
            Stay informed about upcoming workshops, book launches, game releases, and community gatherings.
          </p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 sm:gap-4 mb-8 sm:mb-12">
        <Button 
          onClick={() => setSelectedCategory("All Events")}
          className={selectedCategory === "All Events" ? "text-white hover:opacity-90" : "bg-gray-300 text-gray-700 hover:bg-gray-400"}
          style={selectedCategory === "All Events" ? { backgroundColor: '#1e4a7a' } : {}}
        >
          All Events
        </Button>
        <Button 
          onClick={() => setSelectedCategory("Books")}
          variant={selectedCategory === "Books" ? "default" : "outline"}
          className={selectedCategory === "Books" ? "text-white hover:opacity-90" : "text-gray-700 hover:bg-gray-50"}
          style={selectedCategory === "Books" ? { backgroundColor: '#1e4a7a' } : { border: '2px solid #1e4a7a', color: '#1e4a7a' }}
        >
          Books Events
        </Button>
        <Button 
          onClick={() => setSelectedCategory("Games")}
          variant={selectedCategory === "Games" ? "default" : "outline"}
          className={selectedCategory === "Games" ? "text-white hover:opacity-90" : "text-gray-700 hover:bg-gray-50"}
          style={selectedCategory === "Games" ? { backgroundColor: '#1e4a7a' } : { border: '2px solid #1e4a7a', color: '#1e4a7a' }}
        >
          Games Events
        </Button>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {filteredEvents.map((event) => (
          <a href={event.link} target="_blank" rel="noopener noreferrer" key={event.id}>
            <Card className="hover:shadow-xl transition-shadow flex flex-col h-full cursor-pointer hover:border-blue-400 hover:border-2">
              <CardHeader className="pb-3">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-40 sm:h-48 object-cover rounded-md mb-4 hover:opacity-80 transition-opacity"
                  onError={(e) => { e.currentTarget.src = 'https://via.placeholder.com/300x200?text=No+Image'; }}
                />
                <div className="flex items-center justify-between mb-2">
                  <Badge className={event.category === "Books" ? "text-white" : "text-white"} style={{ backgroundColor: '#1e4a7a' }}>
                    {event.category}
                  </Badge>
                  <div className="flex items-center gap-1 text-xs sm:text-sm text-gray-600">
                    <Users className="w-4 h-4" />
                    <span>{event.attendees}/{event.maxAttendees}</span>
                  </div>
                </div>
                <CardTitle className="text-base sm:text-lg">{event.title}</CardTitle>
                <CardDescription className="text-xs sm:text-sm">{event.description}</CardDescription>
              </CardHeader>
            <CardContent className="space-y-2 flex-grow">
              <div className="flex items-center gap-2 text-xs sm:text-sm">
                <Calendar className="w-4 h-4 text-gray-500 flex-shrink-0" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm">
                <Clock className="w-4 h-4 text-gray-500 flex-shrink-0" />
                <span>{event.time}</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm">
                <MapPin className="w-4 h-4 text-gray-500 flex-shrink-0" />
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

      {/* Newsletter Signup */}
      <div className="p-6 sm:p-8 rounded-lg" style={{ backgroundColor: '#e8f2f9', border: '4px solid #1e4a7a' }}>
        <h3 className="mb-4 text-xl sm:text-2xl font-semibold" style={{ color: '#1e4a7a' }}>Never Miss an Event</h3>
        <p className="mb-6 text-sm sm:text-base" style={{ color: '#2a6199' }}>
          Subscribe to our newsletter to receive updates about upcoming events, new book releases, 
          and game launches directly in your inbox.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-md">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 border-2 rounded text-sm"
            style={{ borderColor: '#1e4a7a' }}
          />
          <Button className="text-white hover:opacity-90 whitespace-nowrap" style={{ backgroundColor: '#1e4a7a' }}>Subscribe</Button>
        </div>
      </div>
    </div>
  );
}