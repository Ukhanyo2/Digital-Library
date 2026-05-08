// src/components/pages/GamesPage.jsx
import { useState } from 'react';
import { ChevronDown, ChevronUp, X, Download, Calendar, Gamepad2, Globe } from 'lucide-react';

import firstCover from '@/components/assets/first.png';
import secondCover from '@/components/assets/second.png';
import thirdCover from '@/components/assets/last.png';

export const GamesPage = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [selectedGame, setSelectedGame] = useState(null);
  const [isFlippingBack, setIsFlippingBack] = useState(false);

  const categories = [
    {
      id: 1,
      title: "Highly Anticipated & Exclusive PS5 Games 2026",
      coverImage: firstCover,
      games: [
        {
          title: "Marvel's Wolverine",
          description: "From Insomniac Games – developers of the critically acclaimed Marvel’s Spider-Man franchise, comes Marvel’s Wolverine. Discover ferocious combat and action-packed set pieces as antihero Logan searches for answers about his past in this single-player adventure, exclusively for PS5 consoles.",
          cover: firstCover,
          platform: "PS5 Exclusive",
          releaseDate: "15/9/2026 00:00 SAST",
          genre: "Action",
          publisher: "Sony Interactive Entertainment",
          downloadUrl: "https://playstation.com/games/marvels-wolverine"
        },
        {
          title: "Marathon",
          description: "From the creators of Halo and Destiny, infil into the dark sci-fi world of Tau Ceti IV: A derelict colony rife with rival Runners, hostile UESC security forces, and unpredictable environments. As you scavenge its zones for valuables with a crew or alone, tense moments of exploration break into fast-paced PvP combat where gunplay is responsive, supplies are finite, and preparation is rewarded.",
          cover: firstCover,
          platform: "PS5, PC",
          releaseDate: "Available Now",
          genre: "Action",
          publisher: "Bungie INC",
          downloadUrl: "https://playstation.com/games/marathon"
        },
        {
          title: "007: First Light",
          description: "An all-new espionage action-adventure from IO Interactive, creators of the award-winning Hitman World of Assassination. Follow the iconic James Bond as a young and reckless recruit in MI6's training programme, and discover a globe-spanning origin story with explosive gunplay, stealth, and cinematic set-pieces.",
          cover: firstCover,
          platform: "PS5, PS5 Pro Enhanced",
          releaseDate: "Available Now",
          genre: "Adventure, Action",
          publisher: "IO Interactive A/S",
          downloadUrl: "https://playstation.com/games/007-first-light"
        },
        {
          title: "Saros",
          description: "Beneath the shadow of an ominous eclipse, brave the shape-shifting world of Carcosa, a planet filled with dark secrets and otherworldly enemies in this new sci-fi action game from the creators of Returnal, coming exclusively to PS5 consoles in 2026.",
          cover: firstCover,
          platform: "PS5 Pro Enhanced",
          releaseDate: "Available Now",
          genre: "Action",
          publisher: "Sony Interactive Entertainment",
          downloadUrl: "https://playstation.com/games/saros"
        },
        {
          title: "The Blood of Dawnwalker",
          description: "The debut title of studio Rebel Wolves, The Blood of Dawnwalker is the first chapter of a brand-new role-playing saga set in 14th-century Europe. Tread the line between the realms of day and night as a vampiric Dawnwalker in a land ravaged by conflict, disease, and death.",
          cover: firstCover,
          platform: "PS5, PC",
          releaseDate: "3/9/2026 00:00 SAST",
          genre: "Adventure",
          publisher: "BANDAI NAMCO ENTERTAINMENT EUROPE",
          downloadUrl: "https://playstation.com/games/blood-of-dawnwalker"
        },
        {
          title: "Marvel Tōkon: Fighting Souls",
          description: "Assemble your team of legendary Marvel characters in the ultimate 4v4 tag team fighter. Unleash spectacular combos as Spider-Man, Captain America, Iron Man, and many more in this collaboration between PlayStation Studios, Arc System Works, and Marvel Games for PS5 consoles and PC.",
          cover: firstCover,
          platform: "PS5, Standard Edition, PS5 Pro Enhanced",
          releaseDate: "6/8/2026 03:00 PM UTC",
          genre: "Fighting",
          publisher: "Sony Interactive Entertainment",
          downloadUrl: "https://playstation.com/games/marvel-tokon"
        },
        {
          title: "Directive 8020",
          description: "The latest entry in Supermassive Games' Dark Pictures Anthology. A cinematic sci-fi horror that blends survival gameplay with narrative choices, multiple endings, and hidden paths.",
          cover: firstCover,
          platform: "PS5",
          releaseDate: "Available Now",
          genre: "Horror, Adventure",
          publisher: "Supermassive Games Ltd",
          downloadUrl: "https://playstation.com/games/directive-8020"
        },
        {
          title: "The Seven Deadly Sins: Origin",
          description: "Forge your legend in this free-to-play RPG set in the universe of the hit anime ‘The Seven Deadly Sins’. Wield an assortment of weapon types and combine characters’ abilities, enjoy fishing, cooking, and mining, and immerse yourself in this enchanting open world.",
          cover: firstCover,
          platform: "PS5, PC, Mobile",
          releaseDate: "16/3/2026",
          genre: "Adventure",
          publisher: "Netmarble Corporation",
          downloadUrl: "https://playstation.com/games/seven-deadly-sins-origin"
        }
      ]
    },
    {
      id: 2,
      title: "Early 2026 & Spring Releases",
      coverImage: secondCover,
      games: [
        {
          title: "Onimusha: Way of the Sword",
          description: "In the series’ first new mainline entry since 2006 – seize the Oni Gauntlet once more as the legendary Miyamoto Musashi, and repel the encroaching Genma threat. Battle through the corrupted fallen capital of Edo-period Kyoto, in a story that fuses exhilarating sword action and dark fantasy.",
          cover: secondCover,
          platform: "PS5",
          releaseDate: "Available Now",
          genre: "Action",
          publisher: "CE Europe Limited",
          downloadUrl: "https://playstation.com/games/onimusha-way-of-the-sword"
        },
        {
          title: "Dune: Awakening",
          description: "Explore the vast open world of Arrakis, survive against sandworms, and unravel the mystery of the missing Fremen in Dune: Awakening – a survival RPG where you can fully immerse yourself in the rich universe of Dune, either alone or together with friends.",
          cover: secondCover,
          platform: "PS5",
          releaseDate: "Release date to be determined.",
          genre: "Action",
          publisher: "Funcom Oslo AS",
          downloadUrl: "https://playstation.com/games/dune-awakening"
        },
        {
          title: "Crimson Desert",
          description: "From the creators of the hit MMORPG ‘Black Desert’ comes Crimson Desert – a new single-player action-adventure set in the beautiful, brutal continent of Pywel. Explore uncharted lands, encounter mysterious factions, and wield a variety of weapons in visceral, fast-paced combat.",
          cover: secondCover,
          platform: "PS5",
          releaseDate: "Available Now",
          genre: "Action-Adventure",
          publisher: "PEARL ABYSS",
          downloadUrl: "https://playstation.com/games/crimson-desert"
        },
        {
          title: "Nioh 3",
          description: "Experience the third instalment of the brutal, dark fantasy action-RPG series, coming February 6 to PS5 consoles and PC. Featuring Team Ninja's signature gameplay and arsenal of samurai and ninja gear, swap between styles in an instant to eliminate threats across the ages of Japanese history.",
          cover: secondCover,
          platform: "PS5",
          releaseDate: "Available Now",
          genre: "Role Playing Games, Action",
          publisher: "Koei Tecmo Europe Ltd",
          downloadUrl: "https://playstation.com/games/nioh-3"
        }
      ]
    },
    {
      id: 3,
      title: "Potential 2026 Titles (TBA)",
      coverImage: thirdCover,
      games: [
        {
          title: "Halo: Campaign Evolved",
          description: "The legendary FPS franchise lands on PlayStation, rebuilt for a new generation with four-player online co-op, new missions, weapons, vehicles, enemies and more. Experience the origin of one of gaming’s most iconic characters: the Master Chief, in this modernised yet faithful campaign remake.",
          cover: thirdCover,
          platform: "PS5, Xbox",
          releaseDate: "Available Now",
          genre: "Action",
          publisher: "Microsoft Corporation",
          downloadUrl: "https://playstation.com/games/halo-campaign-evolved"
        },
        {
          title: "Resident Evil Requiem",
          description: "In the latest entry in the iconic survival horror franchise – take on the role of Grace Ashcroft, an FBI intelligence analyst, as she returns to where it all began: Raccoon City. Featuring tense combat, puzzles, and a choice of camera perspective, Resident Evil Requiem ushers in a new era of survival horror.",
          cover: thirdCover,
          platform: "PS5",
          releaseDate: "Available Now",
          genre: "Action",
          publisher: "CE EUROPE LIMITED",
          downloadUrl: "https://playstation.com/games/resident-evil-requiem"
        },
        {
          title: "Pragmata",
          description: "Discover a unique blend of combat, real-time hacking and a rich sci-fi story in Capcom’s newest IP – Pragmata. Join protagonists Hugh and Diana as they combine their unique skills to overcome enemy threats, and navigate a near-future lunar research station inhabited by hostile Bots.",
          cover: thirdCover,
          platform: "PS5",
          releaseDate: "Available Now",
          genre: "Action",
          publisher: "Capcom",
          downloadUrl: "https://playstation.com/games/pragmata"
        }
      ]
    }
  ];

  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId);
    setIsFlippingBack(false);
  };

  const handleCloseModal = () => {
    setIsFlippingBack(true);
    setTimeout(() => {
      setActiveCategory(null);
      setSelectedGame(null);
      setIsFlippingBack(false);
    }, 500);
  };

  const handleGameClick = (game) => {
    setSelectedGame(game);
  };

  const handleCloseGameModal = () => {
    setSelectedGame(null);
  };

  const activeCategoryData = activeCategory !== null 
    ? categories.find(c => c.id === activeCategory) 
    : null;

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#2a6199' }}>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,500&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
        
        body {
          background-color: #2a6199;
          margin: 0;
          padding: 0;
        }
        
        * {
          transition: all 0.3s ease;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes flipIn {
          0% {
            transform: perspective(1000px) rotateY(90deg);
            opacity: 0;
          }
          100% {
            transform: perspective(1000px) rotateY(0deg);
            opacity: 1;
          }
        }
        
        @keyframes flipOut {
          0% {
            transform: perspective(1000px) rotateY(0deg);
            opacity: 1;
          }
          100% {
            transform: perspective(1000px) rotateY(90deg);
            opacity: 0;
          }
        }
        
        .modal-enter {
          animation: flipIn 0.5s ease-out forwards;
        }
        
        .modal-exit {
          animation: flipOut 0.5s ease-in forwards;
        }
        
        @keyframes slideUp {
          from { transform: translateY(50px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        
        .modal-content {
          animation: slideUp 0.4s ease-out;
        }
        
        .game-card {
          background: linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%);
          backdrop-filter: blur(10px);
        }
        
        .game-description {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      `}</style>

      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
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
            Games
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
            Discover the most anticipated PlayStation 5 games coming in 2026
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group cursor-pointer rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              style={{ height: '400px' }}
              onClick={() => handleCategoryClick(category.id)}
            >
              <div className="relative w-full h-full">
                <img
                  src={category.coverImage}
                  alt={category.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h2 className="text-xl font-bold text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {category.title}
                  </h2>
                  <p className="text-teal-300 text-sm flex items-center gap-2">
                    Click to view {category.games.length} games
                    <ChevronDown size={16} />
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer Section */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="bg-yellow-500/10 border-l-4 border-yellow-500 p-6 rounded-r-2xl">
            <p className="text-yellow-400 text-sm font-semibold mb-2">⚠️ Disclaimer</p>
            <p className="text-white/70 text-xs leading-relaxed">
              This website provides gaming news, updates, reviews, and entertainment content from around the world for informational purposes only.
              <br /><br />
              We are not affiliated with, endorsed by, or officially connected to any game developers, publishers, gaming brands, or companies unless clearly stated. All trademarks, logos, images, and game titles belong to their respective owners.
              <br /><br />
              While we aim to keep information accurate and updated, we cannot guarantee complete accuracy at all times. Users should verify official announcements directly from the original sources.
              <br /><br />
              By using this website, you agree that the website owner is not responsible for any loss, damages, or decisions made based on the content provided here.
            </p>
          </div>
        </div>

        <div className="text-center mt-8 pt-4 border-t border-white/10">
          <p className="text-white/40 text-xs">
            PlayStation and PS5 are registered trademarks of Sony Interactive Entertainment.
          </p>
        </div>
      </div>

      {activeCategoryData && (
        <div className={`fixed inset-0 z-50 overflow-y-auto bg-[#2a6199] backdrop-blur-lg ${isFlippingBack ? 'modal-exit' : 'modal-enter'}`}>
          <div className="min-h-screen py-8">
            <div className="sticky top-0 z-10 bg-[#2a6199] backdrop-blur-md border-b border-white/10 px-4 py-4">
              <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <button
                    onClick={handleCloseModal}
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition flex items-center gap-2"
                  >
                    <ChevronUp size={20} className="text-white" />
                    <span className="text-white text-sm hidden sm:inline">Back to Categories</span>
                  </button>
                  <h2 className="text-xl md:text-2xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {activeCategoryData.title}
                  </h2>
                </div>
                <button
                  onClick={handleCloseModal}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
                >
                  <X size={24} className="text-white" />
                </button>
              </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {activeCategoryData.games.map((game, idx) => (
                  <div
                    key={idx}
                    onClick={() => handleGameClick(game)}
                    className="game-card rounded-2xl border border-white/20 overflow-hidden 
                             hover:border-teal-400/70 transition-all duration-300 hover:-translate-y-2 cursor-pointer group"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={game.cover}
                        alt={game.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#2a6199]/80 to-transparent"></div>
                    </div>
                    <div className="p-5 bg-[#1e4a7a]/50">
                      <h3 className="font-bold text-lg text-white mb-2" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}>{game.title}</h3>
                      <p className="text-white/80 text-sm game-description mb-3" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, lineHeight: 1.5 }}>{game.description}</p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="text-xs px-2 py-1 bg-teal-500/30 text-teal-200 rounded-full font-medium">
                          {game.platform}
                        </span>
                        <span className="text-xs px-2 py-1 bg-white/20 text-white/90 rounded-full font-medium">
                          {game.releaseDate}
                        </span>
                      </div>
                      <div className="flex items-center justify-between pt-2 border-t border-white/20">
                        <span className="text-sm text-teal-300 font-medium">{game.genre}</span>
                        <button className="text-teal-300 text-sm hover:text-white transition flex items-center gap-1 font-medium">
                          Learn More <ChevronDown size={14} className="rotate-270" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {selectedGame && (
        <div className="fixed inset-0 z-[60] overflow-y-auto bg-black/95 backdrop-blur-lg modal-enter">
          <div className="min-h-screen flex items-center justify-center p-4">
            <div className="max-w-4xl w-full bg-gradient-to-br from-[#1e4a7a] to-[#2a6199] rounded-2xl border border-white/20 overflow-hidden modal-content">
              <div className="flex justify-end p-4">
                <button
                  onClick={handleCloseGameModal}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
                >
                  <X size={24} className="text-white" />
                </button>
              </div>

              <div className="p-6 md:p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="rounded-2xl overflow-hidden">
                    <img
                      src={selectedGame.cover}
                      alt={selectedGame.title}
                      className="w-full h-auto object-cover rounded-2xl"
                    />
                  </div>

                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {selectedGame.title}
                    </h2>
                    
                    <div className="space-y-4 mb-6">
                      <div className="flex items-center gap-3">
                        <Gamepad2 size={18} className="text-teal-300" />
                        <span className="text-white/80 font-medium">{selectedGame.genre}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Calendar size={18} className="text-teal-300" />
                        <span className="text-white/80">Release: {selectedGame.releaseDate}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Globe size={18} className="text-teal-300" />
                        <span className="text-white/80">{selectedGame.platform}</span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-white mb-2">About This Game</h3>
                      <p className="text-white/80 leading-relaxed">{selectedGame.description}</p>
                    </div>

                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-white mb-2">Publisher</h3>
                      <p className="text-white/80">Publisher: {selectedGame.publisher}</p>
                    </div>

                    <a
                      href={selectedGame.downloadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-teal-500 to-blue-500 
                               text-white font-bold rounded-full hover:from-teal-600 hover:to-blue-600 
                               transition-all duration-300 transform hover:-translate-y-1 shadow-2xl 
                               hover:shadow-teal-500/50 w-full justify-center text-lg"
                    >
                      <Download size={20} />
                      Download Game
                      <span className="text-xs opacity-80">via PlayStation Store</span>
                    </a>

                    <p className="text-white/30 text-xs text-center mt-4">
                      You will be redirected to PlayStation.com to complete your download
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};