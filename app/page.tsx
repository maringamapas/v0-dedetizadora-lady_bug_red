"use client"

import { Bug, Rat, Hammer, Droplets, Bird, Phone, Clock, Shield, Sparkles } from "lucide-react"
import Image from "next/image"

export default function Page() {
  const whatsappNumber = "5544999324635"
  const whatsappLink = `https://wa.me/${whatsappNumber}`
  const whatsappWithMessage = `${whatsappLink}?text=Olá! Gostaria de solicitar um orçamento.`

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Image with fade-in animation */}
        <div className="absolute inset-0 animate-in fade-in duration-1000">
          <Image
            src="/images/img-08-hero-bg.jpg"
            alt="Profissional de dedetização aplicando tratamento"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-red-900/70"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm font-semibold text-red-400 mb-4 tracking-wider uppercase animate-in fade-in slide-in-from-bottom-4 duration-700">
              Atendimento em Maringá - PR
            </p>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
              Lady Bug Dedetizadora
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-red-400 mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
              Livre-se de Pragas com Segurança e Eficiência
            </h2>
            <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
              Dedetização profissional para residências e empresas. Produtos certificados, equipe especializada e
              resultados garantidos.
            </p>
            <a
              href={whatsappWithMessage}
              className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-700"
            >
              <Phone className="w-5 h-5" />
              (44) 99932-4635
            </a>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Nossos Serviços</h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Soluções completas para eliminar qualquer tipo de praga do seu ambiente
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Serviço 1 */}
            <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-700 dark:to-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-600">
              <div className="w-16 h-16 bg-red-600 rounded-xl flex items-center justify-center mb-6">
                <Bug className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Dedetização</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Eliminação de baratas, formigas, aranhas e outros insetos com produtos de última geração.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li>• Produtos certificados</li>
                <li>• Sem cheiro forte</li>
                <li>• Seguro para pets</li>
              </ul>
            </div>

            {/* Serviço 2 */}
            <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-700 dark:to-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-600">
              <div className="w-16 h-16 bg-red-600 rounded-xl flex items-center justify-center mb-6">
                <Rat className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Desratização</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Controle eficaz de roedores com técnicas modernas e seguras para sua família.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li>• Iscas especializadas</li>
                <li>• Monitoramento</li>
                <li>• Prevenção</li>
              </ul>
            </div>

            {/* Serviço 3 */}
            <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-700 dark:to-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-600">
              <div className="w-16 h-16 bg-red-600 rounded-xl flex items-center justify-center mb-6">
                <Hammer className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Descupinização</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Proteção completa contra cupins de solo e madeira seca, preservando seu patrimônio.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li>• Inspeção detalhada</li>
                <li>• Tratamento profundo</li>
                <li>• Garantia estendida</li>
              </ul>
            </div>

            {/* Serviço 4 */}
            <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-700 dark:to-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-600">
              <div className="w-16 h-16 bg-red-600 rounded-xl flex items-center justify-center mb-6">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Sanitização</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Desinfecção de ambientes contra vírus, bactérias e fungos para sua segurança.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li>• Ambientes seguros</li>
                <li>• Produtos aprovados</li>
                <li>• Rápida aplicação</li>
              </ul>
            </div>

            {/* Serviço 5 */}
            <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-700 dark:to-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-600">
              <div className="w-16 h-16 bg-red-600 rounded-xl flex items-center justify-center mb-6">
                <Droplets className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Limpeza de Caixa d&apos;Água</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Higienização completa para garantir água limpa e saudável para sua família.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li>• Equipe treinada</li>
                <li>• Produtos específicos</li>
                <li>• Certificado</li>
              </ul>
            </div>

            {/* Serviço 6 */}
            <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-700 dark:to-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-600">
              <div className="w-16 h-16 bg-red-600 rounded-xl flex items-center justify-center mb-6">
                <Bird className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Controle de Pombos</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Soluções humanitárias para afastar pombos e proteger sua propriedade.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li>• Métodos éticos</li>
                <li>• Instalação de barreiras</li>
                <li>• Manutenção</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Por Que Escolher a Lady Bug?
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Compromisso com qualidade, segurança e satisfação do cliente
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Certificados</h4>
              <p className="text-gray-600 dark:text-gray-300">Produtos aprovados pela ANVISA e técnicos qualificados</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Atendimento 24h</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Emergências? Estamos prontos para atender a qualquer hora
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Garantia</h4>
              <p className="text-gray-600 dark:text-gray-300">Todos os serviços com garantia de eficácia</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Eco-Friendly</h4>
              <p className="text-gray-600 dark:text-gray-300">Produtos seguros para pessoas, pets e meio ambiente</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">Não Deixe as Pragas Tomarem Conta!</h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Entre em contato agora e receba um orçamento gratuito. Atendemos toda Maringá e região.
          </p>
          <a
            href={whatsappWithMessage}
            className="inline-flex items-center gap-3 bg-white text-red-600 px-10 py-5 rounded-full font-bold text-xl shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300"
          >
            <Phone className="w-6 h-6" />
            (44) 99932-4635
          </a>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="depoimentos" className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              O Que Nossos Clientes Dizem
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Veja os depoimentos de quem confia na Lady Bug para manter seus ambientes livres de pragas
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Maria Silva",
                text: "Excelente serviço! Resolveram meu problema com formigas em apenas uma visita. Equipe profissional e educada.",
              },
              {
                name: "João Santos",
                text: "Contratei para minha empresa e fiquei muito satisfeito. Trabalho discreto e eficiente. Recomendo!",
              },
              {
                name: "Ana Costa",
                text: "Atendimento rápido e produtos sem cheiro forte. Perfeito para quem tem crianças e pets em casa.",
              },
            ].map((testimonial, i) => (
              <div key={i} className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl shadow-lg">
                <p className="text-gray-600 dark:text-gray-300 mb-4 italic">&quot;{testimonial.text}&quot;</p>
                <p className="font-bold text-gray-900 dark:text-white">— {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contato" className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center">
                  <Bug className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold">Lady Bug</h4>
                  <p className="text-sm text-gray-400">Dedetizadora</p>
                </div>
              </div>
              <p className="text-gray-400">
                Sua tranquilidade é nossa prioridade. Serviços profissionais de controle de pragas em Maringá.
              </p>
            </div>
            <div>
              <h5 className="text-lg font-bold mb-4">Contato</h5>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a href="tel:+5544999324635" className="hover:text-white transition-colors">
                    (44) 99932-4635
                  </a>
                </li>
                <li>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    WhatsApp: (44) 99932-4635
                  </a>
                </li>
                <li>Maringá - PR</li>
              </ul>
            </div>
            <div>
              <h5 className="text-lg font-bold mb-4">Horário de Atendimento</h5>
              <ul className="space-y-2 text-gray-400">
                <li>24 horas por dia</li>
                <li>7 dias por semana</li>
                <li>Atendimento emergencial</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Lady Bug Dedetizadora. Todos os direitos reservados.</p>
            <p className="mt-2">
              Criado por{" "}
              <a
                href="https://webmap.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors underline"
              >
                WebStudio
              </a>
            </p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float Button */}
      <a
        href={whatsappWithMessage}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 z-50"
      >
        <Phone className="w-8 h-8 text-white" />
      </a>
    </div>
  )
}
