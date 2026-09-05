'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  ArrowRight, BarChart3, BookOpen, BriefcaseBusiness, Building2, Check, ChevronDown, ChevronRight, Cloud, Code2, Globe2, GraduationCap, Headphones, Instagram, Layers3, Linkedin, LockKeyhole, Mail, Menu, MessageCircle, Network, Palette, Phone, Quote, Search, Send, ShieldCheck, Smartphone, Sparkles, Star, Target, Users, Video, X, Zap,
} from 'lucide-react'

const services = [
  { title: 'Web & Mobile App Development', icon: Code2, blurb: 'Digital products that turn complex operations into simple, delightful experiences.', detail: 'From company websites to business web apps and Android/iOS experiences, we design and build secure, scalable products around how your team actually works.' },
  { title: 'Networking Solutions', icon: Network, blurb: 'Fast, secure connectivity designed around your people and your space.', detail: 'We plan and implement LAN/WAN infrastructure, structured cabling, Wi-Fi, network security, and office network designs that keep work moving.' },
  { title: 'Cybersecurity Services', icon: ShieldCheck, blurb: 'Practical protection for your systems, people, and customer data.', detail: 'Our security audits, vulnerability assessments, firewall setup, and data protection practices help your business reduce risk without slowing down.' },
  { title: 'Cloud Computing', icon: Cloud, blurb: 'Flexible infrastructure that grows with your ambitions.', detail: 'Move confidently with cloud migration, hosting, backup, disaster recovery, and right-sized infrastructure setup for modern teams.' },
  { title: 'CCTV & Surveillance', icon: Video, blurb: 'Visibility and peace of mind for your premises.', detail: 'We install cameras, configure remote monitoring, and integrate practical security systems for offices, retail spaces, schools, and homes.' },
  { title: 'Graphic Design', icon: Palette, blurb: 'Clear visual identities that make your business memorable.', detail: 'Build a cohesive brand with logos, marketing materials, social graphics, presentations, and business collateral made for your audience.' },
  { title: 'Digital Marketing', icon: Target, blurb: 'Reach the right people with a sharper digital presence.', detail: 'We combine social media management, SEO, content marketing, and online campaigns to turn attention into meaningful business outcomes.' },
  { title: 'ICT Training', icon: GraduationCap, blurb: 'Equip your team with skills they can use immediately.', detail: 'Our corporate and institutional programs cover software skills, digital confidence, web development, networking, security, and more.' },
]

const projects = [
  { title: 'Kijiji Retail Network', category: 'Networking', outcome: 'Connected 4 branches with reliable, secure shared systems.', tone: 'bg-blue-50' },
  { title: 'AfyaCare Portal', category: 'Web Development', outcome: 'A simpler digital journey for patients and staff.', tone: 'bg-teal-50' },
  { title: 'Mwangaza Academy', category: 'ICT Training', outcome: 'Built practical digital fluency across 80 educators.', tone: 'bg-amber-50' },
  { title: 'Safari Fresh Brand', category: 'Brand & Design', outcome: 'A confident identity ready for supermarket shelves.', tone: 'bg-slate-100' },
  { title: 'Nuru HQ Security', category: 'CCTV & Security', outcome: 'Real-time visibility across a growing headquarters.', tone: 'bg-blue-50' },
  { title: 'Imara Cloud Move', category: 'Cloud', outcome: 'Reduced operational friction with resilient cloud workflows.', tone: 'bg-teal-50' },
]

const posts = [
  { category: 'Business technology', title: 'A practical guide to moving your SME to the cloud', excerpt: 'The signals that tell you it is time to modernise your infrastructure.' },
  { category: 'Cybersecurity', title: 'Five everyday habits that keep business data safer', excerpt: 'Simple, repeatable steps for teams without a dedicated security department.' },
  { category: 'Digital growth', title: 'Why your local business needs a digital front door', excerpt: 'How a clear web presence builds trust before the first conversation.' },
]

function Logo({ compact = false }: { compact?: boolean }) {
  return <Link href="/" className="flex items-center gap-3" aria-label="Manyusi Technologies home"><span className="grid size-10 place-items-center rounded-xl bg-[#2563EB] text-white shadow-lg shadow-blue-200"><span className="font-mono text-lg font-black">M</span></span><span className={compact ? 'sr-only' : 'flex flex-col leading-none'}><strong className="text-sm font-bold tracking-tight text-slate-900">MANYUSI</strong><small className="mt-1 text-[9px] font-semibold tracking-[0.22em] text-[#2563EB]">TECHNOLOGIES</small></span></Link>
}

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [swahili, setSwahili] = useState(false)
  const links = [['Home', '#home'], ['About', '#about'], ['Services', '#services'], ['Products', '#products'], ['Portfolio', '#portfolio'], ['Blog', '/blog'], ['Contact', '#contact']]
  return <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl"><div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8"><Logo /><nav className="hidden items-center gap-7 lg:flex">{links.map(([label, href]) => <Link key={label} href={href} className="text-sm font-medium text-slate-600 transition hover:text-[#2563EB]">{swahili && label === 'Contact' ? 'Wasiliana' : label}</Link>)}</nav><div className="hidden items-center gap-3 lg:flex"><button onClick={() => setSwahili(!swahili)} className="rounded-full border border-slate-200 px-3 py-2 text-xs font-bold text-slate-600 hover:border-[#2563EB]" aria-label="Toggle English and Swahili">{swahili ? 'SW' : 'EN'} <span className="text-slate-300">/</span> {swahili ? 'EN' : 'SW'}</button><Link href="#contact" className="inline-flex items-center gap-2 rounded-full bg-[#2563EB] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-200 transition hover:-translate-y-0.5 hover:bg-blue-700">{swahili ? 'Wasiliana Nasi' : 'Get a Quote'} <ArrowRight className="size-4" /></Link></div><button className="grid size-11 place-items-center rounded-xl border border-slate-200 lg:hidden" onClick={() => setOpen(!open)} aria-label="Open navigation">{open ? <X /> : <Menu />}</button></div>{open && <div className="border-t border-slate-100 bg-white px-5 py-5 lg:hidden"><nav className="flex flex-col gap-1">{links.map(([label, href]) => <Link onClick={() => setOpen(false)} key={label} href={href} className="rounded-lg px-3 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50">{label}</Link>)}<Link onClick={() => setOpen(false)} href="#contact" className="mt-2 rounded-xl bg-[#2563EB] px-4 py-3 text-center text-sm font-bold text-white">Get a Quote</Link></nav></div>}</header>
}

export function ServiceGrid() {
  const [selected, setSelected] = useState<(typeof services)[number] | null>(null)
  const SelectedIcon = selected?.icon
  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {services.map((service, index) => {
          const Icon = service.icon
          return <article key={service.title} className="group rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/50"><div className="mb-6 flex items-center justify-between"><span className="grid size-12 place-items-center rounded-xl bg-blue-50 text-[#2563EB] transition group-hover:bg-[#2563EB] group-hover:text-white"><Icon className="size-5" /></span><span className="text-xs font-bold text-slate-300">0{index + 1}</span></div><h3 className="text-lg font-bold tracking-tight text-slate-900">{service.title}</h3><p className="mt-3 text-sm leading-6 text-slate-500">{service.blurb}</p><button onClick={() => setSelected(service)} className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#2563EB]">Learn more <ChevronRight className="size-4" /></button></article>
        })}
      </div>
      {selected && <div className="fixed inset-0 z-50 grid place-items-center bg-slate-950/50 p-5" role="dialog" aria-modal="true" onClick={() => setSelected(null)}><div className="w-full max-w-lg rounded-3xl bg-white p-7 shadow-2xl" onClick={(event) => event.stopPropagation()}><div className="flex items-start justify-between gap-5"><div><span className="mb-4 inline-grid size-12 place-items-center rounded-xl bg-blue-50 text-[#2563EB]">{SelectedIcon && <SelectedIcon className="size-5" />}</span><h2 className="text-2xl font-bold text-slate-900">{selected.title}</h2></div><button onClick={() => setSelected(null)} className="rounded-full p-2 text-slate-400 hover:bg-slate-100" aria-label="Close service details"><X /></button></div><p className="mt-5 leading-7 text-slate-600">{selected.detail}</p><Link href="#contact" onClick={() => setSelected(null)} className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#2563EB] px-5 py-3 text-sm font-bold text-white">Start a conversation <ArrowRight className="size-4" /></Link></div></div>}
    </>
  )
}
export function Portfolio() { const [filter, setFilter] = useState('All'); const filters = ['All', 'Web Development', 'Networking', 'ICT Training', 'Brand & Design', 'CCTV & Security', 'Cloud']; const items = filter === 'All' ? projects : projects.filter((project) => project.category === filter); return <><div className="mb-8 flex flex-wrap gap-2">{filters.map((item) => <button key={item} onClick={() => setFilter(item)} className={`rounded-full px-4 py-2 text-xs font-bold transition ${filter === item ? 'bg-[#2563EB] text-white' : 'bg-white text-slate-500 ring-1 ring-slate-200 hover:text-[#2563EB]'}`}>{item}</button>)}</div><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{items.map((project) => <article key={project.title} className="overflow-hidden rounded-2xl border border-slate-200 bg-white"><div className={`relative flex h-44 items-end overflow-hidden ${project.tone}`}><div className="absolute inset-0 opacity-50" style={{ backgroundImage: "linear-gradient(135deg, rgba(15,44,103,.12), rgba(13,148,136,.08)), url('/mtl-projects.png')", backgroundSize: 'cover', backgroundPosition: 'center' }} /><span className="relative m-5 inline-flex rounded-full bg-white/80 px-3 py-1 text-[11px] font-bold text-[#2563EB]">{project.category}</span></div><div className="p-5"><h3 className="font-bold text-slate-900">{project.title}</h3><p className="mt-2 text-sm leading-6 text-slate-500">{project.outcome}</p></div></article>)}</div></> }

export function ContactForm() { const [sent, setSent] = useState(false); return <form onSubmit={(event) => { event.preventDefault(); setSent(true) }} className="grid gap-4 md:grid-cols-2">{sent ? <div className="md:col-span-2 rounded-2xl bg-teal-50 p-8 text-center"><span className="mx-auto grid size-12 place-items-center rounded-full bg-[#0D9488] text-white"><Check /></span><h3 className="mt-4 text-xl font-bold text-slate-900">Thank you for reaching out.</h3><p className="mt-2 text-sm text-slate-600">Our team will get back to you shortly.</p></div> : <><input required placeholder="Your name" className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#2563EB] focus:ring-4 focus:ring-blue-100" /><input required type="email" placeholder="Email address" className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#2563EB] focus:ring-4 focus:ring-blue-100" /><input placeholder="Phone / WhatsApp" className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#2563EB] focus:ring-4 focus:ring-blue-100" /><select className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-500 outline-none focus:border-[#2563EB]"><option>Service you need</option>{services.map((service) => <option key={service.title}>{service.title}</option>)}</select><textarea required placeholder="Tell us a little about your project" rows={5} className="md:col-span-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#2563EB] focus:ring-4 focus:ring-blue-100" /><button className="md:col-span-2 inline-flex items-center justify-center gap-2 rounded-xl bg-[#2563EB] px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-200 transition hover:bg-blue-700">Send enquiry <Send className="size-4" /></button></>}</form> }

export function WhatsAppButton() { return <a href="https://wa.me/255700000000" target="_blank" rel="noreferrer" className="fixed bottom-5 right-5 z-30 flex items-center gap-2 rounded-full bg-[#0D9488] px-4 py-3 text-sm font-bold text-white shadow-xl shadow-teal-200 transition hover:-translate-y-1" aria-label="Chat with Manyusi Technologies on WhatsApp"><MessageCircle className="size-5" /> <span className="hidden sm:inline">Chat on WhatsApp</span></a> }

export { services, posts, Logo }
