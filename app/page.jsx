'use client';

import { useState } from 'react';
import {
  Copy,
  ExternalLink,
  Eye,
  Plus,
  ReceiptText,
  Search,
  Settings,
  Share2,
  TrendingUp,
  Users,
  WalletCards,
} from 'lucide-react';

const receipts = [
  { id: '1', name: 'Website Development', client: 'Acme Ventures', amount: '₦1,250,000', paid: '₦875,000', status: 'In progress', views: 128, slug: 'website-development-8x2' },
  { id: '2', name: 'Brand Identity Package', client: 'Nova Labs', amount: '₦450,000', paid: '₦450,000', status: 'Paid', views: 74, slug: 'brand-identity-4m9' },
  { id: '3', name: 'Consulting Retainer', client: 'Orbit Systems', amount: '₦300,000', paid: '₦120,000', status: 'In progress', views: 42, slug: 'consulting-retainer-2p1' },
];

export default function Home() {
  const [q, setQ] = useState('');
  const [tab, setTab] = useState('Overview');
  const filtered = receipts.filter((r) => `${r.name}${r.client}`.toLowerCase().includes(q.toLowerCase()));

  return (
    <main>
      <header>
        <div className="brand"><span className="mark">P</span><b>PayTrace</b></div>
        <nav>
          <button className={tab === 'Overview' ? 'active' : ''} onClick={() => setTab('Overview')}>Overview</button>
          <button className={tab === 'Receipts' ? 'active' : ''} onClick={() => setTab('Receipts')}>Receipts</button>
          <button className={tab === 'Analytics' ? 'active' : ''} onClick={() => setTab('Analytics')}>Analytics</button>
        </nav>
        <div className="avatar">C</div>
      </header>

      <section className="hero">
        <div>
          <p className="eyebrow">PAYMENT TRACKING</p>
          <h1>Know exactly where<br />every payment stands.</h1>
          <p className="sub">Create branded receipts, share a live tracking link, and let clients follow payment progress in real time.</p>
          <button className="primary"><Plus size={18} /> Create receipt</button>
        </div>
        <div className="heroCard">
          <div className="ring"><span>70%</span></div>
          <div><small>LIVE PAYMENT</small><h3>Website Development</h3><p>₦875,000 <em>of</em> ₦1,250,000</p><div className="bar"><i style={{ width: '70%' }} /></div></div>
        </div>
      </section>

      <section className="stats">
        <Stat icon={<WalletCards />} label="Total tracked" value="₦2,000,000" delta="+18.4%" />
        <Stat icon={<TrendingUp />} label="Collected" value="₦1,445,000" delta="+12.8%" />
        <Stat icon={<Users />} label="Total views" value="244" delta="+31" />
      </section>

      <section className="panel">
        <div className="panelHead">
          <div><h2>{tab}</h2><p>Manage and monitor your payment receipts.</p></div>
          <div className="search"><Search size={17} /><input placeholder="Search receipts..." value={q} onChange={(e) => setQ(e.target.value)} /></div>
        </div>
        <div className="table">
          {filtered.map((r) => (
            <article className="row" key={r.id}>
              <div className="receiptIcon"><ReceiptText /></div>
              <div className="main"><b>{r.name}</b><span>{r.client}</span></div>
              <div className="money"><b>{r.paid}</b><span>of {r.amount}</span></div>
              <span className={`status ${r.status === 'Paid' ? 'paid' : 'progress'}`}>{r.status}</span>
              <span className="views"><Eye size={15} />{r.views}</span>
              <button className="iconBtn" title="Copy link" onClick={() => navigator.clipboard?.writeText(`${location.origin}/r/${r.slug}`)}><Copy size={16} /></button>
              <button className="iconBtn" title="Open receipt"><ExternalLink size={16} /></button>
            </article>
          ))}
        </div>
      </section>

      <section className="cta">
        <div><small>SHAREABLE RECEIPTS</small><h2>One link. A complete payment story.</h2><p>Give clients a clean, branded page they can check anytime without asking you for updates.</p></div>
        <button className="secondary"><Share2 size={17} /> Share a receipt</button>
      </section>

      <footer><span>© 2026 PayTrace</span><span><Settings size={15} /> Built for modern businesses</span></footer>
    </main>
  );
}

function Stat({ icon, label, value, delta }) {
  return <div className="stat"><div className="statIcon">{icon}</div><span>{label}</span><b>{value}</b><em>{delta}</em></div>;
}
