import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>
      
      <nav className="relative z-10 border-b-4 border-card bg-muted/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <h1 className="font-pixel text-primary drop-shadow-[0_2px_0_rgba(0,0,0,0.8)] font-black text-3xl">
                GHASTLAND
              </h1>
              <div className="hidden md:flex gap-6 text-sm">
                <a href="#" className="text-foreground hover:text-primary transition-colors font-pixel text-xs border-b-2 border-secondary pb-1">
                  Home
                </a>
                <a href="#" className="text-foreground/70 hover:text-primary transition-colors font-pixel text-xs">
                  Server Info
                </a>
                <a href="#" className="text-foreground/70 hover:text-primary transition-colors font-pixel text-xs">
                  Community
                </a>
              </div>
            </div>

          </div>
        </div>
      </nav>

      <main className="relative z-10 container mx-auto px-4 py-16">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-8 p-6 bg-primary border-4 border-primary/70 shadow-[8px_8px_0_rgba(0,0,0,0.3)] animate-pulse-glow">
            <h2 className="font-pixel md:text-6xl text-primary-foreground drop-shadow-[4px_4px_0_rgba(0,0,0,0.5)] text-sm">
              GHASTLAND
            </h2>
          </div>

          <p className="font-pixel text-xs text-muted-foreground mt-4">
            GhastLand.mineserver.xyz
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 mb-16">


          <Card className="p-6 bg-card border-4 border-card/70 shadow-[8px_8px_0_rgba(0,0,0,0.3)] hover:shadow-[12px_12px_0_rgba(0,0,0,0.4)] transition-all hover:-translate-y-1 animate-fade-in [animation-delay:150ms]">
            <div className="space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b-2 border-secondary/30">
                <div className="w-8 h-8 bg-secondary rounded flex items-center justify-center">
                  <Icon name="Sword" size={20} className="text-secondary-foreground" />
                </div>
                <h3 className="font-pixel text-sm text-foreground">Game Modes</h3>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-2 bg-muted/50 rounded">
                  <div className="text-2xl">⚔️</div>
                  <span className="font-pixel text-xs text-foreground">Survival</span>
                </div>
                <div className="flex items-center gap-3 p-2 bg-muted/50 rounded">
                  <div className="text-2xl">🏗️</div>
                  <span className="font-pixel text-xs text-foreground">Creative</span>
                </div>

                <div className="flex items-center gap-3 p-2 bg-muted/50 rounded">
                  <div className="text-2xl">🔮</div>
                  <span className="font-pixel text-xs text-foreground">Custom Mods</span>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 bg-card border-4 border-card/70 shadow-[8px_8px_0_rgba(0,0,0,0.3)] animate-fade-in [animation-delay:300ms]">
            <div className="text-center space-y-6">
              <div className="flex items-center justify-center gap-3 mb-4">

                <h3 className="font-pixel text-lg text-foreground">About GhastLand</h3>
              </div>
              

              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
                <div className="text-center">
                  <div className="text-3xl mb-2 animate-float [animation-delay:100ms]">💎</div>
                  <p className="font-pixel text-xs text-foreground/70">Custom Items</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2 animate-float [animation-delay:200ms]">🏰</div>
                  <p className="font-pixel text-xs text-foreground/70">Epic Builds</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2 animate-float [animation-delay:300ms]">🎮</div>
                  <p className="font-pixel text-xs text-foreground/70">Events</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2 animate-float [animation-delay:400ms]">👥</div>
                  <p className="font-pixel text-xs text-foreground/70">Community</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </main>

      <footer className="relative z-10 border-t-4 border-card bg-muted/50 backdrop-blur-sm mt-16 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="font-pixel text-xs text-foreground/50">
            © 2024 GhastLand Server • Made with ❤️ for Minecraft
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;