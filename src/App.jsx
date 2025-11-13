import React, { useState } from "react";
import { motion } from "framer-motion";
import { SiTiktok } from "react-icons/si";
import {
  Hammer,
  Ruler,
  Phone,
  Facebook,
  Mail,
  MapPin,
  Sparkles,
  Building2,
  Layers,
  Info,
  History,
  Home,
  MessageSquare,
  Instagram,
  CheckCircle2,
  ShieldCheck,
  TimerReset,
  LayoutGrid,
  Send,
  ArrowRight,
  BadgeCheck,
  Gem,
} from "lucide-react";

const PALETTE = {
  bg: "bg-emerald-950",
  card: "bg-slate-900/60",
  accent: "text-orange-400",
  accentBg: "bg-orange-500",
  soft: "text-slate-300",
  stroke: "border-slate-700",
};

const navItems = [
  { key: "inicio", label: "Inicio", icon: Home },
  { key: "trabajos", label: "Trabajos", icon: LayoutGrid },
  { key: "servicios", label: "Servicios", icon: Layers },
  { key: "materiales", label: "Materiales", icon: Gem },
  { key: "nosotros", label: "Nosotros", icon: Info },
  { key: "historia", label: "Historia", icon: History },
  { key: "contacto", label: "Contáctanos", icon: Phone },
];


const trabajosDemo = [
  {
    titulo: "Cocina en Cuarzo Blanco Ártico",
    detalle: "Tope en cuarzo con faldón en cascada y zócalo invisible.",
    img: "/images/trabajos/cocina_cuarzo.jpg",
    tag: "Cuarzo",
  },
  {
    titulo: "Isla en Granito Negro Galaxy",
    detalle: "Pulido espejo, canto biselado 45° y encastre a medida.",
    img: "/images/trabajos/isla_granito.jpg",
    tag: "Granito",
  },
  {
    titulo: "Vanitory en Porcelanato Calacatta",
    detalle: "Lavamanos sobremesada y faldón frontal 12cm.",
    img: "/images/trabajos/vanitory_porcelanato.jpg",
    tag: "Porcelanato",
  },
  {
    titulo: "Barra Daymonrock Cement",
    detalle: "Acabado mate, estilo industrial futurista.",
    img: "/images/trabajos/barra_daymonrock.jpg",
    tag: "Daymonrock",
  },
  {
    titulo: "Encimera baño en Cuarzo Arena",
    detalle: "Perforaciones a medida y rebaje para desagüe.",
    img: "/images/trabajos/encimera_banio_cuarzo.jpg",
    tag: "Cuarzo",
  },
  {
    titulo: "Cocina en Porcelanato Pietra Gray",
    detalle: "Uniones casi invisibles y protector térmico.",
    img: "/images/trabajos/cocina_porcelanato.jpg",
    tag: "Porcelanato",
  },
];

const servicios = [
  {
    title: "Diseño y Asesoría",
    desc: "Te guiamos en materiales, colores y terminaciones para un resultado a otro nivel.",
    icon: Sparkles,
  },
  {
    title: "Corte CNC y Pulido",
    desc: "Precisión milimétrica en cortes, cantos y perforaciones con maquinaria de última.",
    icon: Ruler,
  },
  {
    title: "Instalación Profesional",
    desc: "Equipo experto, sellos perfectos y garantía real sobre la obra.",
    icon: Hammer,
  },
  {
    title: "Mantenimiento y Reparación",
    desc: "Pulido, sellado y corrección de uniones para recuperar el brillo original.",
    icon: ShieldCheck,
  },
];

const materiales = [
  {
    name: "Granito",
    pros: ["Alta resistencia al calor", "Único en vetas", "Durabilidad extrema"],
  },
  { name: "Cuarzo", pros: ["Baja porosidad", "Fácil limpieza", "Paleta moderna"] },
  { name: "Porcelanato", pros: ["Ligero", "Formato XXL", "Versátil en estilos"] },
  { name: "Daymonrock", pros: ["Look industrial", "Texturas únicas", "Coste optimizado"] },
];

function Badge({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1 text-xs tracking-wide text-orange-300">
      <Sparkles className="h-3 w-3" /> {children}
    </span>
  );
}

function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="relative py-16 sm:py-20">
      <div className="pointer-events-none absolute inset-0 opacity-30 [background:radial-gradient(1200px_600px_at_80%_0%,rgba(255,122,0,0.08),transparent_60%)]" />
      <div className="mx-auto max-w-7xl px-4">
        {title && (
          <div className="mb-8">
            <Badge>{subtitle || "Granitos • Porcelanato • Cuarzo"}</Badge>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
              {title}
            </h2>
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

function Nav({ page, setPage }) {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-emerald-950/70">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
       <div className="flex items-center gap-3">
        <img
          src="/images/favicon.jpg"
          alt="Logo Granitos Decor"
          className="h-9 w-9 rounded-xl object-cover shadow-lg shadow-orange-900/40"
        />
        <div>
          <p className="text-sm uppercase tracking-widest text-slate-300">Granitos Decor</p>
          <p className="-mt-1 text-xs text-slate-400">Cocinas • Baños • Superficies</p>
        </div>
        </div>
        <nav className="hidden gap-1 md:flex">
          {navItems.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setPage(key)}
              className={`rounded-full px-4 py-2 text-sm transition hover:bg-orange-500/10 hover:text-orange-300 ${
                page === key ? "bg-orange-500/20 text-orange-200" : "text-slate-300"
              }`}
            >
              {label}
            </button>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="https://wa.me/593981469846"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-orange-500 px-4 py-2 text-sm font-semibold text-emerald-950 shadow-lg shadow-orange-900/30 transition hover:scale-[1.02]"
          >
            <Phone className="h-4 w-4 transition group-hover:translate-x-0.5" />
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero({ setPage }) {
  return (
    <Section>
      <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-emerald-900/60 via-emerald-950 to-black p-8 sm:p-12 shadow-2xl">
        <div className="absolute right-[-10%] top-[-20%] h-[420px] w-[420px] rounded-full bg-orange-500/20 blur-3xl" />
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <Badge>Arquitectura de superficies • Estilo Futurista</Badge>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Cocinas y baños <span className="text-orange-400">de otro nivel</span>
            </h1>
            <p className="mt-4 max-w-xl text-slate-300">
              Diseñamos, fabricamos e instalamos encimeras y superficies en granito, porcelanato,
              cuarzo y Daymonrock con precisión milimétrica y acabados premium.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button
                onClick={() => setPage("trabajos")}
                className="inline-flex items-center gap-2 rounded-full border border-orange-500/40 bg-orange-500/10 px-5 py-2.5 text-sm font-semibold text-orange-200 transition hover:bg-orange-500/20"
              >
                Ver trabajos <ArrowRight className="h-4 w-4" />
              </button>
              <button
                onClick={() => setPage("contacto")}
                className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:bg-slate-800/60"
              >
                Cotizar ahora <Send className="h-4 w-4" />
              </button>
            </div>
            <ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-slate-400 sm:max-w-md">
              <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-orange-400"/> Medición a domicilio</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-orange-400"/> Garantía por escrito</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-orange-400"/> Entrega puntual</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-orange-400"/> Acabado premium</li>
            </ul>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/3] w-full overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/40 shadow-xl">
              <img
                src="/images/trabajos/hero_principal.jpg"
                alt="Proyecto Granitos Decor"
                className="h-full w-full object-cover opacity-90"
              />
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3">
              {[
                "/images/trabajos/mini_1.jpg",
                "/images/trabajos/mini_2.jpg",
                "/images/trabajos/mini_3.jpg",
              ].map((src, i) => (
                <img key={i} src={src} className="h-28 w-full rounded-2xl object-cover opacity-80" />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}

function GridTrabajos() {
  return (
    <Section id="trabajos" title="Trabajos realizados" subtitle="Portafolio real de proyectos">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {trabajosDemo.map((t, idx) => (
          <motion.article
            key={idx}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className={`group overflow-hidden rounded-3xl border ${PALETTE.stroke} ${PALETTE.card} shadow-xl`}
          >
            <div className="relative">
              <img src={t.img} alt={t.titulo} className="h-56 w-full object-cover transition duration-500 group-hover:scale-[1.03]" />
              <span className="absolute left-3 top-3 rounded-full bg-emerald-900/80 px-2 py-1 text-xs text-slate-200 border border-slate-700">{t.tag}</span>
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold text-white">{t.titulo}</h3>
              <p className="mt-1 text-sm text-slate-300">{t.detalle}</p>
              <div className="mt-3 flex items-center gap-2 text-xs text-slate-400">
                <BadgeCheck className="h-4 w-4 text-orange-400" /> Calidad certificada
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

function Servicios() {
  return (
    <Section id="servicios" title="Servicios" subtitle="Diseño • Corte • Instalación">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {servicios.map((s, i) => (
          <div key={i} className={`rounded-3xl border ${PALETTE.stroke} ${PALETTE.card} p-6 shadow-xl`}>
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-orange-500/15 p-3 shadow-inner">
                <s.icon className="h-6 w-6 text-orange-400" />
              </div>
              <h3 className="text-white font-semibold">{s.title}</h3>
            </div>
            <p className="mt-3 text-sm text-slate-300">{s.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Materiales() {
  return (
    <Section id="materiales" title="Materiales" subtitle="Elegancia y resistencia">
      <div className="grid gap-6 md:grid-cols-2">
        {materiales.map((m, i) => (
          <div key={i} className={`rounded-3xl border ${PALETTE.stroke} ${PALETTE.card} p-6`}> 
            <div className="flex items-center gap-3">
              <Layers className="h-6 w-6 text-orange-400" />
              <h3 className="text-white text-lg font-semibold">{m.name}</h3>
            </div>
            <ul className="mt-3 grid gap-2 text-sm text-slate-300">
              {m.pros.map((p, j) => (
                <li key={j} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-orange-400"/> {p}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Nosotros() {
  return (
    <Section id="nosotros" title="Sobre nosotros" subtitle="Compromiso con la excelencia">
      <div className={`rounded-3xl border ${PALETTE.stroke} ${PALETTE.card} p-8`}> 
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-xl font-semibold text-white">Nuestra misión</h3>
            <p className="mt-2 text-slate-300 text-sm">
              Transformar espacios a través de superficies de alto desempeño y estética impecable,
              combinando tecnología, oficio y atención al detalle.
            </p>
            <h3 className="mt-6 text-xl font-semibold text-white">Nuestra visión</h3>
            <p className="mt-2 text-slate-300 text-sm">
              Ser la marca referente en la región en fabricación e instalación de encimeras premium,
              con un servicio que sorprenderá a nuestros clientes.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-3 text-center">
              {[
                { n: "+500", t: "m² instalados" },
                { n: "+300", t: "proyectos" },
                { n: "10+", t: "años" },
              ].map((k, i) => (
                <div key={i} className="rounded-2xl border border-slate-700 bg-slate-900/40 p-4">
                  <p className="text-2xl font-bold text-orange-400">{k.n}</p>
                  <p className="text-xs uppercase tracking-wider text-slate-400">{k.t}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900/50 to-black p-6">
            <div className="flex items-center gap-3">
              <Building2 className="h-6 w-6 text-orange-400"/>
              <h4 className="text-white font-semibold">¿Por qué elegirnos?</h4>
            </div>
            <ul className="mt-4 grid gap-3 text-sm text-slate-300">
              <li className="flex items-center gap-2"><ShieldCheck className="h-5 w-5 text-orange-400"/> Garantía por escrito</li>
              <li className="flex items-center gap-2"><TimerReset className="h-5 w-5 text-orange-400"/> Tiempos de entrega claros</li>
              <li className="flex items-center gap-2"><Ruler className="h-5 w-5 text-orange-400"/> Medición e instalación precisa</li>
              <li className="flex items-center gap-2"><Sparkles className="h-5 w-5 text-orange-400"/> Acabado premium sin compromisos</li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Historia() {
  const timeline = [
    { year: "2015", title: "Primer taller", text: "Nacimos con un sueño y una pulidora." },
    { year: "2018", title: "Maquinaria CNC", text: "Dimensión milimétrica y acabados superiores." },
    { year: "2021", title: "Expansión", text: "Nuevas alianzas y mayor capacidad." },
    { year: "2024", title: "Futuro", text: "Materiales inteligentes y procesos sostenibles." },
  ];
  return (
    <Section id="historia" title="Historia Granitos Decor" subtitle="De taller a marca referente">
      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-gradient-to-b from-orange-500/60 to-transparent" />
        <div className="ml-10 grid gap-6">
          {timeline.map((t, i) => (
            <div key={i} className={`rounded-2xl border ${PALETTE.stroke} ${PALETTE.card} p-5`}> 
              <div className="flex items-start gap-4">
                <div className="mt-1 h-3 w-3 rounded-full bg-orange-500 shadow shadow-orange-900/40" />
                <div>
                  <p className="text-sm text-orange-300">{t.year}</p>
                  <h4 className="text-white text-lg font-semibold">{t.title}</h4>
                  <p className="text-slate-300 text-sm">{t.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Contacto() {
  return (
    <Section id="contacto" title="Contáctanos" subtitle="Cotiza tu proyecto ahora">
      <div className="grid gap-6 md:grid-cols-2">
        <div className={`rounded-3xl border ${PALETTE.stroke} ${PALETTE.card} p-6`}> 
          <h3 className="text-white font-semibold">Escríbenos</h3>
          <p className="mt-2 text-sm text-slate-300">
            Cuéntanos medidas aproximadas, material y fecha objetivo. Te responderemos a la brevedad.
          </p>
          <form className="mt-4 grid gap-3" onSubmit={(e)=>e.preventDefault()}>
            <input className="rounded-xl border border-slate-700 bg-slate-900/40 px-4 py-2 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500/40" placeholder="Nombre" />
            <input className="rounded-xl border border-slate-700 bg-slate-900/40 px-4 py-2 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500/40" placeholder="Teléfono o WhatsApp" />
            <textarea rows={4} className="rounded-xl border border-slate-700 bg-slate-900/40 px-4 py-2 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500/40" placeholder="Describe tu proyecto" />
            <button type="button" className="rounded-xl bg-orange-500 px-4 py-2 text-sm font-semibold text-emerald-950 shadow-lg shadow-orange-900/30">
              Enviar
            </button>
          </form>
          <div className="mt-4 grid gap-2 text-sm text-slate-300">
            <a className="flex items-center gap-2 hover:text-orange-300" href="https://wa.me/593000000000" target="_blank" rel="noreferrer"><Phone className="h-4 w-4"/> WhatsApp</a>
            <a className="flex items-center gap-2 hover:text-orange-300" href="https://facebook.com/granitosdecor" target="_blank" rel="noreferrer"><Facebook className="h-4 w-4"/> Facebook</a>
            <p className="flex items-center gap-2"><Mail className="h-4 w-4"/> contacto@granitosdecor.com</p>
            <p className="flex items-center gap-2"><MapPin className="h-4 w-4"/> Cuenca, Ecuador</p>
          </div>
        </div>
        <div className={`rounded-3xl border ${PALETTE.stroke} ${PALETTE.card} p-6`}> 
          <h3 className="text-white font-semibold">Mapa</h3>
          <div className="mt-3 aspect-video w-full overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/40">
            <iframe
              title="Ubicación"
              className="h-full w-full"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-79.0%2C-2.9%2C-78.9%2C-2.85&layer=mapnik"
            />
          </div>
          <p className="mt-3 text-xs text-slate-400">* Ubicación referencial, actualiza con tu dirección exacta.</p>
        </div>
      </div>
    </Section>
  );
}

function CTA({ setPage }) {
  return (
    <div className="mx-auto max-w-7xl px-4 pb-16">
      <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-emerald-900/60 to-black p-8 text-center shadow-2xl">
        <div className="absolute -right-10 -top-10 h-60 w-60 rounded-full bg-orange-500/20 blur-3xl" />
        <h3 className="text-2xl font-bold text-white">¿Listo para llevar tu cocina o baño al siguiente nivel?</h3>
        <p className="mt-2 text-slate-300">Envíanos tus medidas y te asesoramos con el material perfecto.</p>
        <div className="mt-4 flex justify-center gap-3">
          <button onClick={() => setPage("contacto")} className="rounded-full bg-orange-500 px-6 py-2 text-sm font-semibold text-emerald-950 shadow-lg shadow-orange-900/30">Cotizar por WhatsApp</button>
          <button onClick={() => setPage("trabajos")} className="rounded-full border border-slate-700 px-6 py-2 text-sm font-semibold text-slate-200 hover:bg-slate-800/60">Ver portafolio</button>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-800">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-10 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <p className="text-sm uppercase tracking-widest text-slate-400">Granitos Decor</p>
          <p className="mt-2 text-sm text-slate-400">Superficies premium en granito, porcelanato, cuarzo y Daymonrock.</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Secciones</p>
          <ul className="mt-2 grid gap-2 text-sm text-slate-300">
            <li>Inicio</li>
            <li>Trabajos</li>
            <li>Servicios</li>
            <li>Materiales</li>
            <li>Nosotros</li>
            <li>Historia</li>
            <li>Contáctanos</li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Contacto</p>
          <ul className="mt-2 grid gap-2 text-sm text-slate-300">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4"/> +593981469846</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4"/> dannysarii.cornejo@gmail.com</li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4"/> Cuenca, Ecuador</li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Síguenos</p>
          <div className="mt-2 flex gap-3 text-slate-300">
            <a href="https://www.facebook.com/profile.php?id=100054983479895&sk=about&locale=es_LA" target="_blank" rel="noreferrer" className="hover:text-orange-300"><Facebook className="h-5 w-5"/></a>
            <a href="https://wa.me/593981469846" target="_blank" rel="noreferrer" className="hover:text-orange-300"><MessageSquare className="h-5 w-5"/></a>
            <a href="#" className="hover:text-orange-300"><Instagram className="h-5 w-5"/></a>
            <a
            href="https://www.tiktok.com/@leocornejo247?_t=ZM-90t5uRZlc3E&_r=1"
            target="_blank"
            rel="noreferrer"
            className="hover:text-orange-300"
            aria-label="TikTok"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-5 w-5 fill-current">
              <path d="M448,209.9c-17.6,0-34.7-1.8-51.2-5.2v131.7c0,80.3-65.1,145.4-145.4,145.4s-145.4-65.1-145.4-145.4,65.1-145.4,145.4-145.4c5.3,0,10.5,0.3,15.6,0.8v65.7c-5.1-0.7-10.3-1-15.6-1-44,0-79.6,35.6-79.6,79.6s35.6,79.6,79.6,79.6,79.6-35.6,79.6-79.6V0h65.7c0,35.8,29,64.8,64.8,64.8V209.9z"/>
            </svg>
          </a>

          </div>
        </div>
      </div>
      <div className="border-t border-slate-800 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Granitos Decor. Todos los derechos reservados.
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/593981469846"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 inline-flex items-center gap-2 rounded-full bg-orange-500 px-4 py-3 font-semibold text-emerald-950 shadow-2xl shadow-orange-900/30 transition hover:scale-105"
    >
      <Phone className="h-5 w-5"/>
      WhatsApp
    </a>
  );
}

export default function App() {
  const [page, setPage] = useState("inicio");

  return (
    <div className={`min-h-screen ${PALETTE.bg} text-slate-200`}> 
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-60 [background:radial-gradient(900px_500px_at_right_-10%,rgba(255,122,0,0.12),transparent_50%),radial-gradient(900px_500px_at_left_-10%,rgba(16,185,129,0.12),transparent_50%)]" />

      <Nav page={page} setPage={setPage} />

      {page === "inicio" && (
        <>
          <Hero setPage={setPage} />
          <GridTrabajos />
          <Servicios />
          <Materiales />
          <CTA setPage={setPage} />
        </>
      )}

      {page === "trabajos" && (
        <>
          <Section title="Portafolio" subtitle="Lo que ya hemos construido">
            <p className="max-w-3xl text-slate-300">
              Explora algunos de nuestros proyectos destacados. Si te gusta un estilo, lo adaptamos a tus medidas.
            </p>
          </Section>
          <GridTrabajos />
          <CTA setPage={setPage} />
        </>
      )}

      {page === "servicios" && (
        <>
          <Servicios />
          <CTA setPage={setPage} />
        </>
      )}

      {page === "materiales" && (
        <>
          <Materiales />
          <CTA setPage={setPage} />
        </>
      )}

      {page === "nosotros" && (
        <>
          <Nosotros />
          <CTA setPage={setPage} />
        </>
      )}

      {page === "historia" && (
        <>
          <Historia />
          <CTA setPage={setPage} />
        </>
      )}

      {page === "contacto" && (
        <>
          <Contacto />
        </>
      )}

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
