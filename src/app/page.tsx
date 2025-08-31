import UTMBridge from "../components/UTMBridge";
import GeoBanner from "../components/GeoBanner";
import CTALink from "../components/CTALink";

export default function Home() {
  return (
    <div className="font-sans text-white bg-black">
      <UTMBridge />

      {/* Aviso topo com localização baseada no IP */}
      <GeoBanner />


      <main>
        {/* Hero */}
        <section
          className="relative border-t-2 border-b-4 border-red-700"
          style={{
            backgroundImage: "url(/uploads/2025/02/1920x878.png)",
            backgroundSize: "cover",
            backgroundPosition: "right center",
          }}
        >
          {/* Escurece levemente apenas a metade esquerda */}
          <div className="absolute left-0 top-0 bottom-0 w-1/2 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
          {/* Vermelho sutil na direita */}
          <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-red-700/10 via-red-600/5 to-transparent" />
          {/* Vinheta inferior suave */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-black/25 to-transparent" />
          <div className="relative px-6 py-16 sm:py-24">
            <div className="max-w-6xl mx-auto">
              <div className="max-w-2xl">
                <img
                  src="/uploads/2024/10/logo-transparente.png"
                  alt="REIFLICK"
                  className="h-[112px] sm:h-[128px] w-auto mb-3 drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]"
                  loading="eager"
                />
                <h1 className="text-xl sm:text-3xl font-extrabold tracking-tight text-white mb-2 leading-tight">
                  CONTEÚDO DE QUALIDADE,
                  <br />
                  <span className="inline-block bg-red-600 text-white px-2 py-0.5 mt-1">
                    UM PREÇO QUE CABE
                  </span>
                  <br />
                  <span className="inline-block bg-red-600 text-white px-2 py-0.5 mt-1">
                    NO SEU BOLSO!
                  </span>
                </h1>
                <p className="text-sm sm:text-sm text-white/90 mb-4 max-w-xl">
                  Mais de 2000 canais por um preço que cabe no seu bolso! Com o REIFLICK, toda a sua diversão está em um só lugar.
                </p>
                <a
                  href="#planos"
                  className="cta_btn inline-flex w-full sm:w-auto items-center justify-center rounded-full bg-red-600 text-white px-5 py-2.5 font-semibold hover:bg-red-700 transition-colors shadow-[0_6px_0_0_rgba(0,0,0,0.25)]"
                >
                  QUERO ASSINAR AGORA!
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Faixa de métricas (vermelha) */}
        <section className="bg-red-800 text-white border-b-4 border-red-900">
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 px-4 sm:px-6 py-6 sm:py-8 text-center">
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold">+10000</div>
              <div className="text-xs sm:text-sm opacity-90">canais abertos e fechados</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold">+40000</div>
              <div className="text-xs sm:text-sm opacity-90">filmes e séries</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold">+7000</div>
              <div className="text-xs sm:text-sm opacity-90">novelas</div>
            </div>
          </div>
        </section>

        {/* Planos */}
        <section id="planos" className="px-6 py-16 max-w-6xl mx-auto bg-black text-white">
          <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-10">
            Escolha seu plano e assine já!
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* 3 meses */}
            <div className="rounded-xl bg-[#111] border border-neutral-800 p-0 flex flex-col overflow-hidden">
              <div className="bg-red-700 text-white text-center py-3 font-bold">PLANO REIFLICK</div>
              <div className="px-6 pt-4">
              <h3 className="text-lg font-semibold mb-1 text-red-400">PLANO 3 MESES</h3>
              <ul className="text-sm text-neutral-300 space-y-1 mb-4">
                <li>Completo</li>
                <li>Sem fidelidade</li>
                <li>Assista em 3 telas simultâneas</li>
                <li>+ de 40 mil conteúdos</li>
                <li>Canais Adultos (opcional)</li>
                <li>Qualidade SD/HD/FHD/4K</li>
                <li>Assista na Smart TV, Smartphone, TV Box e Computador</li>
                <li className="font-semibold"><span className="inline-block bg-green-600 text-white px-2 py-0.5 rounded">40% DE DESCONTO</span></li>
              </ul>
              <p className="text-sm text-neutral-400">De R$ 59,70 por apenas:</p>
              <p className="text-2xl font-bold mb-4 text-white">R$ 39,90</p>
              <CTALink
                href="https://pay.kirvano.com/17344977-6382-47de-aa1a-021740143d2d?aff=25997249-8f0f-4cd2-a1c2-023be55ede80"
                className="cta_btn mt-auto mb-6 inline-flex justify-center rounded-md bg-red-600 text-white px-4 py-2 font-semibold hover:bg-red-700 transition-colors"
                eventName="InitiateCheckout"
                eventParams={{ plan: "Trimestral Promo", price: 39.9, currency: "BRL" }}
              >
                QUERO ASSINAR AGORA!
              </CTALink>
              </div>
            </div>

            {/* 1 mês */}
            <div className="rounded-xl bg-[#111] border border-neutral-800 p-0 flex flex-col overflow-hidden">
              <div className="bg-red-700 text-white text-center py-3 font-bold">PLANO REIFLICK</div>
              <div className="px-6 pt-4">
              <h3 className="text-lg font-semibold mb-1 text-red-400">PLANO 1 MÊS</h3>
              <ul className="text-sm text-neutral-300 space-y-1 mb-4">
                <li>Completo</li>
                <li>Sem fidelidade</li>
                <li>Assista em 3 telas simultâneas</li>
                <li>+ de 40 mil conteúdos</li>
                <li>Canais Adultos (opcional)</li>
                <li>Qualidade SD/HD/FHD/4K</li>
                <li>Assista na Smart TV, Smartphone, TV Box e Computador</li>
                <li className="font-semibold"><span className="inline-block bg-green-600 text-white px-2 py-0.5 rounded">40% DE DESCONTO</span></li>
              </ul>
              <p className="text-sm text-neutral-400">De R$ 24,90 por apenas:</p>
              <p className="text-2xl font-bold mb-4 text-white">R$ 19,90</p>
              <CTALink
                href="https://pay.kirvano.com/6026d4be-6c16-4869-85e7-b49181f23523?aff=25997249-8f0f-4cd2-a1c2-023be55ede80"
                className="cta_btn mt-auto mb-6 inline-flex justify-center rounded-md bg-red-600 text-white px-4 py-2 font-semibold hover:bg-red-700 transition-colors"
                eventName="InitiateCheckout"
                eventParams={{ plan: "Mensal Promo", price: 19.9, currency: "BRL" }}
              >
                QUERO ASSINAR AGORA!
              </CTALink>
              </div>
            </div>

            {/* 1 ano */}
            <div className="rounded-xl bg-[#111] border border-neutral-800 p-0 flex flex-col overflow-hidden">
              <div className="bg-red-700 text-white text-center py-3 font-bold">PLANO REIFLICK</div>
              <div className="px-6 pt-4">
              <h3 className="text-lg font-semibold mb-1 text-red-400">PLANO 1 ANO</h3>
              <ul className="text-sm text-neutral-300 space-y-1 mb-4">
                <li>Completo</li>
                <li>Sem fidelidade</li>
                <li>Assista em 3 telas simultâneas</li>
                <li>+ de 40 mil conteúdos</li>
                <li>Canais Adultos (opcional)</li>
                <li>Qualidade SD/HD/FHD/4K</li>
                <li>Assista na Smart TV, Smartphone, TV Box e Computador</li>
                <li className="font-semibold"><span className="inline-block bg-green-600 text-white px-2 py-0.5 rounded">46% DE DESCONTO</span></li>
              </ul>
              <p className="text-sm text-neutral-400">De R$ 238,80 por apenas:</p>
              <p className="text-2xl font-bold mb-4 text-white">R$ 129,90</p>
              <CTALink
                href="https://pay.kirvano.com/10c9b8cd-0202-4e77-86fe-9c63fbe0c613?aff=25997249-8f0f-4cd2-a1c2-023be55ede80"
                className="cta_btn mt-auto mb-6 inline-flex justify-center rounded-md bg-red-600 text-white px-4 py-2 font-semibold hover:bg-red-700 transition-colors"
                eventName="InitiateCheckout"
                eventParams={{ plan: "Anual Promo", price: 129.9, currency: "BRL" }}
              >
                QUERO ASSINAR AGORA!
              </CTALink>
              </div>
            </div>

            {/* 6 meses */}
            <div className="rounded-xl bg-[#111] border border-neutral-800 p-0 flex flex-col overflow-hidden">
              <div className="bg-red-700 text-white text-center py-3 font-bold">PLANO REIFLICK</div>
              <div className="px-6 pt-4">
              <h3 className="text-lg font-semibold mb-1 text-red-400">PLANO 6 MESES</h3>
              <ul className="text-sm text-neutral-300 space-y-1 mb-4">
                <li>Completo</li>
                <li>Sem fidelidade</li>
                <li>Assista em 3 telas simultâneas</li>
                <li>+ de 40 mil conteúdos</li>
                <li>Canais Adultos (opcional)</li>
                <li>Qualidade SD/HD/FHD/4K</li>
                <li>Assista na Smart TV, Smartphone, TV Box e Computador</li>
                <li className="font-semibold"><span className="inline-block bg-green-600 text-white px-2 py-0.5 rounded">40% DE DESCONTO</span></li>
              </ul>
              <p className="text-sm text-neutral-400">De R$ 119,40 por apenas:</p>
              <p className="text-2xl font-bold mb-4 text-white">R$ 69,90</p>
              <CTALink
                href="https://pay.kirvano.com/391cb7e8-9744-49d2-84ae-7b4aef946081?aff=25997249-8f0f-4cd2-a1c2-023be55ede80"
                className="cta_btn mt-auto mb-6 inline-flex justify-center rounded-md bg-red-600 text-white px-4 py-2 font-semibold hover:bg-red-700 transition-colors"
                eventName="InitiateCheckout"
                eventParams={{ plan: "Semestral Promo", price: 69.9, currency: "BRL" }}
              >
                QUERO ASSINAR AGORA!
              </CTALink>
              </div>
            </div>
          </div>
        </section>

        {/* Benefícios */}
        <section className="px-6 py-16 bg-black text-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-10">
              Confira tudo o que você vai encontrar na plataforma
            </h2>
            <div className="grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
              {/* Dispositivos */}
              <div className="rounded-lg border border-red-800 bg-[#140b0b] p-0 overflow-hidden flex flex-col min-h-[380px] md:min-h-[480px] lg:max-w-[320px] w-full mx-auto">
                <div className="h-52 md:h-72 bg-[#1a0e0e] flex items-center justify-center">
                  <img src="/uploads/2025/01/LOGO-1.webp" alt="REIFLICK" className="h-20 md:h-28 w-auto" />
                </div>
                <div className="px-3 py-4 md:px-4 md:py-5 flex-1">
                  <h3 className="font-semibold">Disponível em Todos os Dispositivos</h3>
                  <p className="text-sm text-neutral-300 mt-1">
                    Disponível em Smart TVs, celulares, tablets, PCs e TV Box. Instalação fácil e rápida para você curtir filmes, séries e canais ao vivo sem complicação.
                  </p>
                </div>
              </div>

              {/* Filmes e Séries imperdíveis */}
              <div className="rounded-lg border border-red-800 bg-[#140b0b] p-0 overflow-hidden relative flex flex-col min-h-[380px] md:min-h-[480px] lg:max-w-[320px] w-full mx-auto">
                <div className="h-52 md:h-72 bg-cover bg-center" style={{ backgroundImage: "url(/uploads/2025/02/Sem-Titulo-1-1.png)" }} />
                <div className="px-3 py-4 md:px-4 md:py-5 flex-1">
                  <h3 className="font-semibold">Filmes e Séries imperdíveis</h3>
                  <p className="text-sm text-neutral-300 mt-1">
                    Acompanhe suas séries favoritas e encontre novas paixões. Temporadas completas e episódios atualizados para maratonar.
                  </p>
                </div>
              </div>

              {/* Esportes ao vivo */}
              <div className="rounded-lg border border-red-800 bg-[#140b0b] p-0 overflow-hidden relative flex flex-col min-h-[380px] md:min-h-[480px] lg:max-w-[320px] w-full mx-auto">
                <div className="h-52 md:h-72 bg-cover bg-center" style={{ backgroundImage: "url(/uploads/2025/02/Esportes.png)" }} />
                <div className="px-3 py-4 md:px-4 md:py-5 flex-1">
                  <h3 className="font-semibold">Esportes ao vivo</h3>
                  <p className="text-sm text-neutral-300 mt-1">
                    Não perca um só lance! Assista a eventos esportivos ao vivo, incluindo futebol, basquete, e muito mais, diretamente na sua TV.
                  </p>
                </div>
              </div>

              {/* Canais adultos em HD */}
              <div className="rounded-lg border border-red-800 bg-[#140b0b] p-0 overflow-hidden relative flex flex-col min-h-[380px] md:min-h-[480px] lg:max-w-[320px] w-full mx-auto">
                <div className="h-52 md:h-72 bg-cover bg-center" style={{ backgroundImage: "url(/uploads/2025/_18.webp)" }} />
                <div className="px-3 py-4 md:px-4 md:py-5 flex-1">
                  <h3 className="font-semibold">Canais adultos em HD</h3>
                  <p className="text-sm text-neutral-300 mt-1">
                    Conteúdo exclusivo para adultos com alta qualidade de imagem e variedade. Aproveite a programação completa e segura.
                  </p>
                </div>
              </div>

              {/* Canais infantis */}
              <div className="rounded-lg border border-red-800 bg-[#140b0b] p-0 overflow-hidden relative flex flex-col min-h-[380px] md:min-h-[480px] lg:max-w-[320px] w-full mx-auto">
                <div className="h-52 md:h-72 bg-cover bg-center" style={{ backgroundImage: "url(/uploads/2025/02/Infantis.png)" }} />
                <div className="px-3 py-4 md:px-4 md:py-5 flex-1">
                  <h3 className="font-semibold">Canais infantis</h3>
                  <p className="text-sm text-neutral-300 mt-1">
                    Diversão garantida para as crianças com canais dedicados, desenhos, filmes e programação educativa para todas as idades.
                  </p>
                </div>
              </div>

              {/* Os melhores animes */}
              <div className="rounded-lg border border-red-800 bg-[#140b0b] p-0 overflow-hidden relative flex flex-col min-h-[380px] md:min-h-[480px] lg:max-w-[320px] w-full mx-auto">
                <div className="h-52 md:h-72 bg-cover bg-center" style={{ backgroundImage: "url(/uploads/2025/02/Animes.png)" }} />
                <div className="px-3 py-4 md:px-4 md:py-5 flex-1">
                  <h3 className="font-semibold">Os melhores animes</h3>
                  <p className="text-sm text-neutral-300 mt-1">
                    Para os fãs de anime, uma seleção de títulos populares e novidades. Episódios atualizados e qualidade HD para você maratonar.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA inferior */}
            <div className="mt-10 text-center">
              <a
                href="#planos"
                className="cta_btn inline-flex w-full sm:w-auto items-center justify-center rounded-full bg-red-600 text-white px-6 py-3 font-semibold hover:bg-red-700 transition-colors"
              >
                QUERO ASSINAR AGORA!
              </a>
            </div>
          </div>
        </section>

        {/* Garantia - faixa vermelha full-width */}
        <section className="w-full bg-red-700 text-white border-y-4 border-red-800 mb-8">
          <div className="max-w-6xl mx-auto px-6 py-10">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="shrink-0">
                <img
                  src="/uploads/2025/02/7-dias.png.png"
                  alt="Garantia de 7 dias"
                  className="h-24 sm:h-28 w-auto"
                  loading="lazy"
                />
              </div>
              <div className="text-center md:text-left">
                <h2 className="text-xl sm:text-2xl font-extrabold mb-1">Você não corre nenhum risco!</h2>
                <p className="text-sm sm:text-base text-white/90 max-w-3xl">
                  É simples: ou você fica feliz com o conteúdo, ou recebe 100% do seu dinheiro de volta. Dentro de 7 dias, se decidir não continuar, basta nos contatar e faremos o reembolso sem burocracia.
                </p>
                <div className="mt-4 flex justify-center">
                  <a
                    href="#planos"
                    className="cta_btn inline-flex w-full sm:w-auto items-center justify-center rounded-md bg-black text-white px-5 py-2.5 font-semibold hover:bg-neutral-900 transition-colors"
                  >
                    QUERO ASSINAR AGORA!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dúvidas / WhatsApp - card vermelho centralizado */}
        <section className="px-6 py-10 mt-8">
          <div className="max-w-md mx-auto bg-red-800 text-white rounded-md shadow-[0_8px_0_rgba(0,0,0,0.35)] px-5 sm:px-6 py-6 text-center">
            <h3 className="text-lg sm:text-xl font-semibold mb-1">Ainda está com dúvidas sobre a REIFLICK?</h3>
            <p className="text-sm text-white/90 mb-4">Fale com nosso time agora mesmo pelo WhatsApp.</p>
            <a
              href="https://api.whatsapp.com/send/?phone=554391768151&text=Ola+vim+do+site+quero+ajuda&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="signin__button inline-flex w-full sm:w-auto items-center justify-center rounded-md bg-green-600 text-white px-5 py-2.5 font-semibold hover:bg-green-700 transition-colors"
            >
              Conversar no WhatsApp
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-foreground/10 py-6 text-center text-sm text-foreground/60">
        © {new Date().getFullYear()} REIFLICK. Todos os direitos reservados.
      </footer>
    </div>
  );
}
