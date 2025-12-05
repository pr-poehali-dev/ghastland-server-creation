import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();

  const copyServerIP = () => {
    navigator.clipboard.writeText('GhastLand.mineserver.xyz');
    toast({
      title: "IP скопирован!",
      description: "GhastLand.mineserver.xyz скопирован в буфер обмена",
    });
  };
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

          <div className="flex flex-col items-center gap-2 mt-4">
            <p className="font-pixel text-xs text-muted-foreground">
              GhastLand.mineserver.xyz
            </p>
            <Button
              onClick={copyServerIP}
              size="sm"
              className="font-pixel text-xs bg-secondary hover:bg-secondary/80 text-secondary-foreground border-2 border-secondary/70 shadow-[4px_4px_0_rgba(0,0,0,0.3)] hover:shadow-[6px_6px_0_rgba(0,0,0,0.4)] transition-all hover:-translate-y-0.5"
            >
              <Icon name="Copy" size={14} className="mr-1" />
              Копировать IP
            </Button>
          </div>
          <p className="font-pixel text-[10px] md:text-xs text-foreground/80 max-w-2xl mx-auto leading-relaxed mt-6 px-4">
            Техподдержка - <a href="https://t.me/GhastLandpredlozka_bot" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors underline break-all">GhastLandpredlozka_bot</a>
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <Card className="p-8 bg-gradient-to-br from-blue-900/40 via-card to-orange-900/40 border-4 border-blue-500/30 shadow-[8px_8px_0_rgba(0,0,0,0.3)] animate-fade-in [animation-delay:150ms]">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-4 border-orange-500/50">
                    <th className="font-pixel text-xs md:text-sm text-orange-400 p-2 md:p-4 text-left">Параметр</th>
                    <th className="font-pixel text-xs md:text-sm text-blue-400 p-2 md:p-4 text-left">Информация</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b-2 border-blue-500/20 hover:bg-blue-500/10 transition-colors">
                    <td className="font-pixel text-[10px] md:text-xs text-foreground p-2 md:p-4">Версия</td>
                    <td className="font-pixel text-[10px] md:text-xs text-orange-300 p-2 md:p-4">1.16.5</td>
                  </tr>
                  <tr className="border-b-2 border-blue-500/20 hover:bg-blue-500/10 transition-colors">
                    <td className="font-pixel text-[10px] md:text-xs text-foreground p-2 md:p-4">Режим</td>
                    <td className="font-pixel text-[10px] md:text-xs text-orange-300 p-2 md:p-4">24/7</td>
                  </tr>
                  <tr className="border-b-2 border-blue-500/20 hover:bg-blue-500/10 transition-colors">
                    <td className="font-pixel text-[10px] md:text-xs text-foreground p-2 md:p-4">Сервер</td>
                    <td className="p-2 md:p-4">
                      <a href="https://t.me/GhastLand" target="_blank" rel="noopener noreferrer" className="font-pixel text-[10px] md:text-xs text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center gap-1 md:gap-2">
                        <Icon name="Send" size={14} className="text-blue-400 flex-shrink-0" />
                        <span className="break-words">Telegram</span>
                      </a>
                    </td>
                  </tr>
                  <tr className="border-b-2 border-blue-500/20 hover:bg-blue-500/10 transition-colors">
                    <td className="font-pixel text-[10px] md:text-xs text-foreground p-2 md:p-4">ПК</td>
                    <td className="p-2 md:p-4">
                      <a href="https://tlauncher.ru/" target="_blank" rel="noopener noreferrer" className="font-pixel text-[10px] md:text-xs text-orange-400 hover:text-orange-300 transition-colors inline-flex items-center gap-1 md:gap-2">
                        <Icon name="Coffee" size={14} className="text-orange-400 flex-shrink-0" />
                        <span className="break-words">TLauncher</span>
                      </a>
                    </td>
                  </tr>
                  <tr className="hover:bg-blue-500/10 transition-colors">
                    <td className="font-pixel text-[10px] md:text-xs text-foreground p-2 md:p-4">Телефон</td>
                    <td className="p-2 md:p-4">
                      <a href="https://trashbox.ru/link/pojavlauncher-android" target="_blank" rel="noopener noreferrer" className="font-pixel text-[10px] md:text-xs text-orange-400 hover:text-orange-300 transition-colors inline-flex items-center gap-1 md:gap-2">
                        <Icon name="Smartphone" size={14} className="text-orange-400 flex-shrink-0" />
                        <span className="break-words">PojavLauncher</span>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
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

        <div className="max-w-4xl mx-auto mt-16">
          <Card className="p-8 bg-card border-4 border-card/70 shadow-[8px_8px_0_rgba(0,0,0,0.3)] animate-fade-in [animation-delay:450ms]">
            <div className="space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b-4 border-secondary/30">
                <div className="w-10 h-10 bg-secondary border-2 border-secondary/70 shadow-[4px_4px_0_rgba(0,0,0,0.3)] flex items-center justify-center">
                  <Icon name="ScrollText" size={24} className="text-secondary-foreground" />
                </div>
                <h3 className="font-pixel text-lg text-foreground drop-shadow-[2px_2px_0_rgba(0,0,0,0.3)]">Правила Сервера</h3>
              </div>
              
              <div className="p-4 md:p-6 bg-gradient-to-br from-green-900/30 via-card to-green-700/20 border-4 border-green-500/40 shadow-[8px_8px_0_rgba(0,0,0,0.3)]">
                <p className="font-pixel text-xs md:text-sm text-green-100 leading-relaxed mb-4 md:mb-6 drop-shadow-[2px_2px_0_rgba(0,0,0,0.5)]">
                  Добро пожаловать на наш политический сервер Minecraft — уникальное пространство, где вы можете погрузиться в мир политических интриг, дипломатии и стратегического мышления!
                </p>
                
                <h4 className="font-pixel text-sm md:text-base text-white mb-3 md:mb-4 drop-shadow-[2px_2px_0_rgba(0,0,0,0.5)]">Что вас ждет:</h4>
                
                <div className="space-y-3 md:space-y-4">
                  <div className="p-3 md:p-4 bg-green-950/40 border-l-4 border-green-400 shadow-[4px_4px_0_rgba(0,0,0,0.3)]">
                    <div className="flex items-start gap-2 md:gap-3">
                      <span className="font-pixel text-green-400 text-xs md:text-sm flex-shrink-0">🏛️</span>
                      <div>
                        <h5 className="font-pixel text-[10px] md:text-xs text-green-300 mb-1 md:mb-2">Политические фракции</h5>
                        <p className="font-pixel text-[10px] md:text-xs text-green-100/80 leading-relaxed">
                          Создайте или присоединитесь к одной из множества фракций, каждая из которых имеет свои уникальные цели, идеологии и стратегии. Станьте лидером своей нации или верным подданным — выбор за вами!
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 md:p-4 bg-green-950/40 border-l-4 border-green-400 shadow-[4px_4px_0_rgba(0,0,0,0.3)]">
                    <div className="flex items-start gap-2 md:gap-3">
                      <span className="font-pixel text-green-400 text-xs md:text-sm flex-shrink-0">🗳️</span>
                      <div>
                        <h5 className="font-pixel text-[10px] md:text-xs text-green-300 mb-1 md:mb-2">Выборы и голосования</h5>
                        <p className="font-pixel text-[10px] md:text-xs text-green-100/80 leading-relaxed">
                          Участвуйте в регулярных выборах, где вы сможете голосовать за своих кандидатов или баллотироваться на выборные должности. Формируйте законы и управляйте жизнью вашего государства!
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 md:p-4 bg-green-950/40 border-l-4 border-green-400 shadow-[4px_4px_0_rgba(0,0,0,0.3)]">
                    <div className="flex items-start gap-2 md:gap-3">
                      <span className="font-pixel text-green-400 text-xs md:text-sm flex-shrink-0">🤝</span>
                      <div>
                        <h5 className="font-pixel text-[10px] md:text-xs text-green-300 mb-1 md:mb-2">Дипломатия и альянсы</h5>
                        <p className="font-pixel text-[10px] md:text-xs text-green-100/80 leading-relaxed">
                          Установите дипломатические отношения с другими фракциями, заключайте альянсы или ведите войны. Используйте хитрость и стратегию, чтобы добиться своих целей.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 md:p-4 bg-green-950/40 border-l-4 border-green-400 shadow-[4px_4px_0_rgba(0,0,0,0.3)]">
                    <div className="flex items-start gap-2 md:gap-3">
                      <span className="font-pixel text-green-400 text-xs md:text-sm flex-shrink-0">💰</span>
                      <div>
                        <h5 className="font-pixel text-[10px] md:text-xs text-green-300 mb-1 md:mb-2">Экономическая система</h5>
                        <p className="font-pixel text-[10px] md:text-xs text-green-100/80 leading-relaxed">
                          Развивайте свою экономику, торгуйте ресурсами и стройте процветающие города. Экономическая мощь вашей фракции будет определять ее влияние на сервере.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 md:p-4 bg-green-950/40 border-l-4 border-green-400 shadow-[4px_4px_0_rgba(0,0,0,0.3)]">
                    <div className="flex items-start gap-2 md:gap-3">
                      <span className="font-pixel text-green-400 text-xs md:text-sm flex-shrink-0">⭐</span>
                      <div>
                        <h5 className="font-pixel text-[10px] md:text-xs text-green-300 mb-1 md:mb-2">События и квесты</h5>
                        <p className="font-pixel text-[10px] md:text-xs text-green-100/80 leading-relaxed">
                          Участвуйте в уникальных событиях и квестах, которые позволят вам заработать награды и улучшить положение вашей фракции.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 md:p-4 bg-green-950/40 border-l-4 border-green-400 shadow-[4px_4px_0_rgba(0,0,0,0.3)]">
                    <div className="flex items-start gap-2 md:gap-3">
                      <span className="font-pixel text-green-400 text-xs md:text-sm flex-shrink-0">👥</span>
                      <div>
                        <h5 className="font-pixel text-[10px] md:text-xs text-green-300 mb-1 md:mb-2">Комьюнити и взаимодействие</h5>
                        <p className="font-pixel text-[10px] md:text-xs text-green-100/80 leading-relaxed">
                          Общайтесь с другими игроками, обсуждайте стратегии и делитесь опытом. Наша дружелюбная комьюнити всегда готова помочь новичкам!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 md:mt-6 p-3 md:p-4 bg-white/10 border-2 border-white/30 shadow-[4px_4px_0_rgba(0,0,0,0.3)]">
                  <p className="font-pixel text-xs md:text-sm text-white leading-relaxed drop-shadow-[2px_2px_0_rgba(0,0,0,0.5)]">
                    <span className="text-green-300">Присоединяйтесь к нам!</span> Если вы любите политику, стратегию и хотите испытать свои навыки в управлении, наш сервер — это то, что вам нужно! Создайте свою историю в мире Minecraft, где каждое ваше решение имеет значение.
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="p-4 bg-muted/50 border-l-4 border-primary shadow-[4px_4px_0_rgba(0,0,0,0.2)]">
                  <div className="flex items-start gap-3">
                    <span className="font-pixel text-primary text-sm flex-shrink-0">1.</span>
                    <p className="font-pixel text-xs text-foreground leading-relaxed">Запрещён читерство и использование модификаций, дающих преимущество</p>
                  </div>
                </div>

                <div className="p-4 bg-muted/50 border-l-4 border-primary shadow-[4px_4px_0_rgba(0,0,0,0.2)]">
                  <div className="flex items-start gap-3">
                    <span className="font-pixel text-primary text-sm flex-shrink-0">2.</span>
                    <p className="font-pixel text-xs text-foreground leading-relaxed">Уважайте других игроков - никакого гриферства и оскорблений</p>
                  </div>
                </div>

                <div className="p-4 bg-muted/50 border-l-4 border-primary shadow-[4px_4px_0_rgba(0,0,0,0.2)]">
                  <div className="flex items-start gap-3">
                    <span className="font-pixel text-primary text-sm flex-shrink-0">3.</span>
                    <p className="font-pixel text-xs text-foreground leading-relaxed">Запрещено строить на территории других игроков без разрешения</p>
                  </div>
                </div>

                <div className="p-4 bg-muted/50 border-l-4 border-primary shadow-[4px_4px_0_rgba(0,0,0,0.2)]">
                  <div className="flex items-start gap-3">
                    <span className="font-pixel text-primary text-sm flex-shrink-0">4.</span>
                    <p className="font-pixel text-xs text-foreground leading-relaxed">Не спамьте в чате и не используйте нецензурную лексику</p>
                  </div>
                </div>

                <div className="p-4 bg-muted/50 border-l-4 border-primary shadow-[4px_4px_0_rgba(0,0,0,0.2)]">
                  <div className="flex items-start gap-3">
                    <span className="font-pixel text-primary text-sm flex-shrink-0">5.</span>
                    <p className="font-pixel text-xs text-foreground leading-relaxed">Слушайте администрацию и модераторов сервера</p>
                  </div>
                </div>

                <div className="p-4 bg-muted/50 border-l-4 border-primary shadow-[4px_4px_0_rgba(0,0,0,0.2)]">
                  <div className="flex items-start gap-3">
                    <span className="font-pixel text-primary text-sm flex-shrink-0">6.</span>
                    <p className="font-pixel text-xs text-foreground leading-relaxed">Запрещены фермы, создающие лаги на сервере</p>
                  </div>
                </div>

                <div className="p-4 bg-muted/50 border-l-4 border-primary shadow-[4px_4px_0_rgba(0,0,0,0.2)]">
                  <div className="flex items-start gap-3">
                    <span className="font-pixel text-primary text-sm flex-shrink-0">7.</span>
                    <p className="font-pixel text-xs text-foreground leading-relaxed">Не используйте баги и дюпы - сообщайте о них администрации</p>
                  </div>
                </div>

                <div className="p-4 bg-destructive/20 border-4 border-destructive shadow-[6px_6px_0_rgba(0,0,0,0.3)] mt-6">
                  <p className="font-pixel text-xs text-center text-foreground leading-relaxed">
                    ⚠️ За нарушение правил - бан! Незнание правил не освобождает от ответственности
                  </p>
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