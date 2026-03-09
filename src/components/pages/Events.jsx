import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../ui/card";
import { Button } from "../../ui/button";
import { Badge } from "../../ui/badge";
import { Calendar, MapPin, Users, Clock } from "lucide-react";

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
  },
  {
    id: 2,
    title: "Game Design Symposium 2026",
    date: "March 12, 2026",
    time: "10:00 AM - 6:00 PM",
    location: "Convention Center, Downtown",
    category: "Games",
    description: "Explore the latest trends in game design, meet industry leaders, and play exclusive game demos.",
    attendees: 342,
    maxAttendees: 500,
    image: "https://images.unsplash.com/photo-1603478804503-dc909c7f5ce5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVudCUyMGNvbmZlcmVuY2UlMjBwZW9wbGV8ZW58MXx8fHwxNzcxNjg1NTYwfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 3,
    title: "Book Launch: 'Digital Dreams'",
    date: "March 18, 2026",
    time: "7:00 PM - 9:00 PM",
    location: "City Library",
    category: "Books",
    description: "Celebrate the launch of our newest digital book with a meet-and-greet with the author.",
    attendees: 78,
    maxAttendees: 100,
    image: "https://images.unsplash.com/photo-1603478804503-dc909c7f5ce5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVudCUyMGNvbmZlcmVuY2UlMjBwZW9wbGV8ZW58MXx8fHwxNzcxNjg1NTYwfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 4,
    title: "Indie Game Showcase",
    date: "March 25, 2026",
    time: "3:00 PM - 8:00 PM",
    location: "Virtual Event",
    category: "Games",
    description: "Discover innovative indie games from upcoming developers and vote for your favorites.",
    attendees: 215,
    maxAttendees: 300,
    image: "https://images.unsplash.com/photo-1603478804503-dc909c7f5ce5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVudCUyMGNvbmZlcmVuY2UlMjBwZW9wbGV8ZW58MXx8fHwxNzcxNjg1NTYwfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 5,
    title: "Literary Festival",
    date: "April 2, 2026",
    time: "9:00 AM - 6:00 PM",
    location: "Central Park Pavilion",
    category: "Books",
    description: "A full day of readings, panel discussions, and book signings with renowned authors.",
    attendees: 412,
    maxAttendees: 600,
    image: "https://images.unsplash.com/photo-1603478804503-dc909c7f5ce5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVudCUyMGNvbmZlcmVuY2UlMjBwZW9wbGV8ZW58MXx8fHwxNzcxNjg1NTYwfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 6,
    title: "Gamification in Education Summit",
    date: "April 10, 2026",
    time: "1:00 PM - 5:00 PM",
    location: "Virtual Event",
    category: "Games",
    description: "Learn how games are transforming education with presentations from educators and game developers.",
    attendees: 189,
    maxAttendees: 250,
    image: "https://images.unsplash.com/photo-1603478804503-dc909c7f5ce5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVudCUyMGNvbmZlcmVuY2UlMjBwZW9wbGV8ZW58MXx8fHwxNzcxNjg1NTYwfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

export function Events() {
  const handleRegister = (eventTitle) => {
    alert(`Registering for: ${eventTitle}`);
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <div className="bg-yellow-300 border-4 border-yellow-500 p-4 mb-6 inline-block">
          <h2 className="flex items-center gap-2 m-0">
            <Calendar className="w-6 h-6" />
            Events
          </h2>
        </div>
        <div className="bg-yellow-100 border-2 border-yellow-400 p-4 rounded-lg mb-6">
          <p className="text-lg">
            <strong>Updates of all Books and Games related events</strong>
          </p>
          <p className="text-sm mt-2">
            Stay informed about upcoming workshops, book launches, game releases, and community gatherings.
          </p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-4 mb-8">
        <Button className="bg-yellow-500 hover:bg-yellow-600">All Events</Button>
        <Button variant="outline" className="border-orange-400 text-orange-700 hover:bg-orange-50">
          Books Events
        </Button>
        <Button variant="outline" className="border-pink-400 text-pink-700 hover:bg-pink-50">
          Games Events
        </Button>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {upcomingEvents.map((event) => (
          <Card key={event.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-cover rounded-md mb-4"
                onError={(e) => { e.currentTarget.src = 'https://via.placeholder.com/300x200?text=No+Image'; }}
              />
              <div className="flex items-center justify-between mb-2">
                <Badge className={event.category === "Books" ? "bg-orange-500" : "bg-pink-500"}>
                  {event.category}
                </Badge>
                <div className="flex items-center gap-1 text-sm text-gray-600">
                  <Users className="w-4 h-4" />
                  <span>{event.attendees}/{event.maxAttendees}</span>
                </div>
              </div>
              <CardTitle>{event.title}</CardTitle>
              <CardDescription>{event.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="w-4 h-4 text-gray-500" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Clock className="w-4 h-4 text-gray-500" />
                <span>{event.time}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="w-4 h-4 text-gray-500" />
                <span>{event.location}</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button 
                onClick={() => handleRegister(event.title)}
                className="w-full bg-yellow-500 hover:bg-yellow-600"
                disabled={event.attendees >= event.maxAttendees}
              >
                {event.attendees >= event.maxAttendees ? "Event Full" : "Register Now"}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Newsletter Signup */}
      <div className="mt-12 bg-yellow-50 border-4 border-yellow-300 p-8 rounded-lg">
        <h3 className="mb-4">Never Miss an Event</h3>
        <p className="mb-6">
          Subscribe to our newsletter to receive updates about upcoming events, new book releases, 
          and game launches directly in your inbox.
        </p>
        <div className="flex gap-4 max-w-md">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 border-2 border-yellow-400 rounded"
          />
          <Button className="bg-yellow-500 hover:bg-yellow-600">Subscribe</Button>
        </div>
      </div>
    </div>
  );
}
