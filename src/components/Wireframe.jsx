const stroke = '#94a3b8';
const fill = '#e2e8f0';
const accent = '#005eb8';

function Dashboard() {
  return (
    <svg viewBox="0 0 280 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="8" width="264" height="164" rx="6" stroke={stroke} strokeWidth="1.5" />
      <rect x="8" y="8" width="264" height="24" rx="6" fill={fill} />
      <rect x="16" y="16" width="40" height="8" rx="2" fill={stroke} />
      <rect x="16" y="40" width="80" height="56" rx="4" stroke={stroke} strokeWidth="1.2" />
      <rect x="104" y="40" width="80" height="56" rx="4" stroke={stroke} strokeWidth="1.2" />
      <rect x="192" y="40" width="72" height="56" rx="4" stroke={stroke} strokeWidth="1.2" />
      <rect x="24" y="52" width="32" height="4" rx="2" fill={accent} />
      <rect x="24" y="60" width="56" height="3" rx="1.5" fill={fill} />
      <rect x="24" y="67" width="48" height="3" rx="1.5" fill={fill} />
      <rect x="112" y="52" width="28" height="4" rx="2" fill={accent} />
      <rect x="112" y="60" width="56" height="3" rx="1.5" fill={fill} />
      <rect x="112" y="67" width="44" height="3" rx="1.5" fill={fill} />
      <rect x="16" y="104" width="248" height="60" rx="4" stroke={stroke} strokeWidth="1.2" />
      <rect x="24" y="112" width="60" height="4" rx="2" fill={accent} />
      <rect x="24" y="122" width="232" height="3" rx="1.5" fill={fill} />
      <rect x="24" y="130" width="232" height="3" rx="1.5" fill={fill} />
      <rect x="24" y="138" width="180" height="3" rx="1.5" fill={fill} />
    </svg>
  );
}

function Portal() {
  return (
    <svg viewBox="0 0 280 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="8" width="264" height="164" rx="6" stroke={stroke} strokeWidth="1.5" />
      <rect x="8" y="8" width="56" height="164" rx="6" fill={fill} />
      <rect x="16" y="20" width="32" height="6" rx="2" fill={stroke} />
      <rect x="16" y="34" width="40" height="4" rx="2" fill={accent} />
      <rect x="16" y="44" width="36" height="3" rx="1.5" fill={stroke} />
      <rect x="16" y="52" width="38" height="3" rx="1.5" fill={stroke} />
      <rect x="16" y="60" width="32" height="3" rx="1.5" fill={stroke} />
      <rect x="72" y="16" width="192" height="20" rx="4" stroke={stroke} strokeWidth="1.2" />
      <rect x="80" y="22" width="80" height="8" rx="4" fill={fill} />
      <rect x="72" y="44" width="92" height="60" rx="4" stroke={stroke} strokeWidth="1.2" />
      <rect x="172" y="44" width="92" height="60" rx="4" stroke={stroke} strokeWidth="1.2" />
      <rect x="72" y="112" width="92" height="52" rx="4" stroke={stroke} strokeWidth="1.2" />
      <rect x="172" y="112" width="92" height="52" rx="4" stroke={stroke} strokeWidth="1.2" />
      <rect x="80" y="52" width="60" height="4" rx="2" fill={accent} />
      <rect x="80" y="60" width="76" height="3" rx="1.5" fill={fill} />
      <rect x="180" y="52" width="52" height="4" rx="2" fill={accent} />
      <rect x="180" y="60" width="76" height="3" rx="1.5" fill={fill} />
    </svg>
  );
}

function Charts() {
  return (
    <svg viewBox="0 0 280 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="8" width="264" height="164" rx="6" stroke={stroke} strokeWidth="1.5" />
      <rect x="8" y="8" width="264" height="24" rx="6" fill={fill} />
      <rect x="16" y="16" width="48" height="8" rx="2" fill={stroke} />
      <rect x="16" y="40" width="124" height="72" rx="4" stroke={stroke} strokeWidth="1.2" />
      <polyline points="24,100 48,85 72,90 96,70 120,60 132,65" stroke={accent} strokeWidth="2" fill="none" />
      <rect x="148" y="40" width="116" height="72" rx="4" stroke={stroke} strokeWidth="1.2" />
      <rect x="160" y="88" width="12" height="16" rx="2" fill={accent} opacity="0.6" />
      <rect x="178" y="76" width="12" height="28" rx="2" fill={accent} opacity="0.7" />
      <rect x="196" y="64" width="12" height="40" rx="2" fill={accent} opacity="0.8" />
      <rect x="214" y="72" width="12" height="32" rx="2" fill={accent} opacity="0.9" />
      <rect x="232" y="56" width="12" height="48" rx="2" fill={accent} />
      <rect x="16" y="120" width="56" height="44" rx="4" stroke={stroke} strokeWidth="1.2" />
      <rect x="80" y="120" width="56" height="44" rx="4" stroke={stroke} strokeWidth="1.2" />
      <rect x="144" y="120" width="56" height="44" rx="4" stroke={stroke} strokeWidth="1.2" />
      <rect x="208" y="120" width="56" height="44" rx="4" stroke={stroke} strokeWidth="1.2" />
      <rect x="24" y="128" width="32" height="10" rx="2" fill={accent} />
      <rect x="88" y="128" width="28" height="10" rx="2" fill={accent} />
      <rect x="152" y="128" width="36" height="10" rx="2" fill={accent} />
      <rect x="216" y="128" width="30" height="10" rx="2" fill={accent} />
    </svg>
  );
}

function FlowDiagram() {
  return (
    <svg viewBox="0 0 280 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="100" y="12" width="80" height="28" rx="14" stroke={accent} strokeWidth="1.5" />
      <rect x="112" y="22" width="56" height="4" rx="2" fill={accent} />
      <line x1="140" y1="40" x2="140" y2="56" stroke={stroke} strokeWidth="1.5" />
      <rect x="80" y="56" width="120" height="24" rx="4" stroke={stroke} strokeWidth="1.5" />
      <rect x="92" y="64" width="72" height="4" rx="2" fill={fill} />
      <line x1="140" y1="80" x2="140" y2="96" stroke={stroke} strokeWidth="1.5" />
      <line x1="140" y1="88" x2="60" y2="88" stroke={stroke} strokeWidth="1.5" />
      <line x1="140" y1="88" x2="220" y2="88" stroke={stroke} strokeWidth="1.5" />
      <line x1="60" y1="88" x2="60" y2="100" stroke={stroke} strokeWidth="1.5" />
      <line x1="220" y1="88" x2="220" y2="100" stroke={stroke} strokeWidth="1.5" />
      <rect x="24" y="100" width="72" height="24" rx="4" stroke={stroke} strokeWidth="1.5" />
      <rect x="36" y="108" width="48" height="4" rx="2" fill={fill} />
      <rect x="104" y="96" width="72" height="24" rx="4" stroke={accent} strokeWidth="1.5" />
      <rect x="116" y="104" width="48" height="4" rx="2" fill={accent} />
      <rect x="184" y="100" width="72" height="24" rx="4" stroke={stroke} strokeWidth="1.5" />
      <rect x="196" y="108" width="48" height="4" rx="2" fill={fill} />
      <line x1="60" y1="124" x2="60" y2="140" stroke={stroke} strokeWidth="1.5" />
      <line x1="140" y1="120" x2="140" y2="140" stroke={stroke} strokeWidth="1.5" />
      <line x1="220" y1="124" x2="220" y2="140" stroke={stroke} strokeWidth="1.5" />
      <rect x="24" y="140" width="72" height="24" rx="4" stroke={stroke} strokeWidth="1.5" />
      <rect x="104" y="140" width="72" height="24" rx="4" stroke={stroke} strokeWidth="1.5" />
      <rect x="184" y="140" width="72" height="24" rx="4" stroke={stroke} strokeWidth="1.5" />
      <rect x="36" y="148" width="48" height="4" rx="2" fill={fill} />
      <rect x="116" y="148" width="48" height="4" rx="2" fill={fill} />
      <rect x="196" y="148" width="48" height="4" rx="2" fill={fill} />
    </svg>
  );
}

function AuthScreen() {
  return (
    <svg viewBox="0 0 280 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="60" y="12" width="160" height="156" rx="8" stroke={stroke} strokeWidth="1.5" />
      <circle cx="140" cy="44" r="16" stroke={accent} strokeWidth="1.5" />
      <rect x="133" y="38" width="14" height="12" rx="2" fill="none" stroke={accent} strokeWidth="1.5" />
      <rect x="80" y="72" width="120" height="10" rx="5" stroke={stroke} strokeWidth="1.2" />
      <rect x="88" y="75" width="60" height="4" rx="2" fill={fill} />
      <rect x="80" y="90" width="120" height="10" rx="5" stroke={stroke} strokeWidth="1.2" />
      <rect x="88" y="93" width="40" height="4" rx="2" fill={fill} />
      <rect x="80" y="112" width="120" height="24" rx="4" fill={accent} />
      <rect x="112" y="120" width="56" height="6" rx="3" fill="white" />
      <rect x="100" y="148" width="80" height="3" rx="1.5" fill={fill} />
      <rect x="112" y="156" width="56" height="3" rx="1.5" fill={fill} />
    </svg>
  );
}

function DataTable() {
  return (
    <svg viewBox="0 0 280 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="8" width="264" height="164" rx="6" stroke={stroke} strokeWidth="1.5" />
      <rect x="8" y="8" width="264" height="28" rx="6" fill={fill} />
      <rect x="16" y="16" width="48" height="6" rx="2" fill={stroke} />
      <rect x="200" y="14" width="64" height="12" rx="4" stroke={stroke} strokeWidth="1.2" />
      <line x1="8" y1="44" x2="272" y2="44" stroke={stroke} strokeWidth="1" />
      <rect x="16" y="48" width="44" height="4" rx="2" fill={accent} />
      <rect x="80" y="48" width="36" height="4" rx="2" fill={accent} />
      <rect x="140" y="48" width="48" height="4" rx="2" fill={accent} />
      <rect x="220" y="48" width="36" height="4" rx="2" fill={accent} />
      <line x1="8" y1="58" x2="272" y2="58" stroke={fill} strokeWidth="1" />
      {[66, 80, 94, 108, 122, 136, 150].map((y) => (
        <g key={y}>
          <rect x="16" y={y} width={36 + Math.random() * 20} height="3" rx="1.5" fill={fill} />
          <rect x="80" y={y} width={28 + Math.random() * 16} height="3" rx="1.5" fill={fill} />
          <rect x="140" y={y} width={32 + Math.random() * 24} height="3" rx="1.5" fill={fill} />
          <rect x="220" y={y} width={24 + Math.random() * 20} height="3" rx="1.5" fill={fill} />
          <line x1="8" y1={y + 10} x2="272" y2={y + 10} stroke={fill} strokeWidth="0.5" />
        </g>
      ))}
    </svg>
  );
}

function Workflow() {
  return (
    <svg viewBox="0 0 280 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="16" y="72" width="44" height="36" rx="4" stroke={accent} strokeWidth="1.5" />
      <rect x="24" y="80" width="28" height="4" rx="2" fill={accent} />
      <rect x="24" y="88" width="20" height="3" rx="1.5" fill={fill} />
      <line x1="60" y1="90" x2="80" y2="90" stroke={stroke} strokeWidth="1.5" markerEnd="url(#arrow)" />
      <rect x="80" y="72" width="44" height="36" rx="4" stroke={stroke} strokeWidth="1.5" />
      <rect x="88" y="80" width="28" height="4" rx="2" fill={stroke} />
      <rect x="88" y="88" width="20" height="3" rx="1.5" fill={fill} />
      <line x1="124" y1="90" x2="144" y2="90" stroke={stroke} strokeWidth="1.5" />
      <rect x="144" y="72" width="44" height="36" rx="4" stroke={stroke} strokeWidth="1.5" />
      <rect x="152" y="80" width="28" height="4" rx="2" fill={stroke} />
      <rect x="152" y="88" width="20" height="3" rx="1.5" fill={fill} />
      <line x1="188" y1="90" x2="208" y2="90" stroke={stroke} strokeWidth="1.5" />
      <rect x="208" y="72" width="56" height="36" rx="4" stroke={accent} strokeWidth="1.5" fill={accent} opacity="0.1" />
      <rect x="216" y="80" width="36" height="4" rx="2" fill={accent} />
      <rect x="216" y="88" width="28" height="3" rx="1.5" fill={accent} opacity="0.5" />
      <rect x="16" y="20" width="248" height="32" rx="4" stroke={stroke} strokeWidth="1.2" />
      <circle cx="48" cy="36" r="8" fill={accent} />
      <circle cx="108" cy="36" r="8" fill={fill} stroke={stroke} strokeWidth="1" />
      <circle cx="168" cy="36" r="8" fill={fill} stroke={stroke} strokeWidth="1" />
      <circle cx="228" cy="36" r="8" fill={fill} stroke={stroke} strokeWidth="1" />
      <line x1="56" y1="36" x2="100" y2="36" stroke={stroke} strokeWidth="1.5" />
      <line x1="116" y1="36" x2="160" y2="36" stroke={stroke} strokeWidth="1.5" />
      <line x1="176" y1="36" x2="220" y2="36" stroke={stroke} strokeWidth="1.5" />
      <rect x="16" y="128" width="248" height="40" rx="4" stroke={stroke} strokeWidth="1.2" />
      <rect x="24" y="136" width="80" height="4" rx="2" fill={stroke} />
      <rect x="24" y="146" width="200" height="3" rx="1.5" fill={fill} />
      <rect x="24" y="154" width="160" height="3" rx="1.5" fill={fill} />
    </svg>
  );
}

function DocumentUpload() {
  return (
    <svg viewBox="0 0 280 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="8" width="264" height="164" rx="6" stroke={stroke} strokeWidth="1.5" />
      <rect x="8" y="8" width="264" height="24" rx="6" fill={fill} />
      <rect x="16" y="16" width="56" height="8" rx="2" fill={stroke} />
      <rect x="24" y="44" width="100" height="120" rx="4" stroke={stroke} strokeWidth="1.2" />
      <rect x="36" y="56" width="76" height="4" rx="2" fill={accent} />
      <rect x="36" y="66" width="72" height="3" rx="1.5" fill={fill} />
      <rect x="36" y="74" width="68" height="3" rx="1.5" fill={fill} />
      <rect x="36" y="82" width="60" height="3" rx="1.5" fill={fill} />
      <rect x="36" y="96" width="76" height="4" rx="2" fill={stroke} />
      <rect x="36" y="106" width="72" height="3" rx="1.5" fill={fill} />
      <rect x="36" y="114" width="64" height="3" rx="1.5" fill={fill} />
      <rect x="36" y="128" width="52" height="20" rx="4" fill={accent} />
      <rect x="44" y="136" width="36" height="4" rx="2" fill="white" />
      <rect x="148" y="44" width="112" height="80" rx="4" stroke={stroke} strokeWidth="1.2" strokeDasharray="4 3" />
      <line x1="204" y1="72" x2="204" y2="96" stroke={stroke} strokeWidth="1.5" />
      <polyline points="194,82 204,72 214,82" stroke={stroke} strokeWidth="1.5" fill="none" />
      <rect x="172" y="100" width="64" height="4" rx="2" fill={fill} />
      <rect x="148" y="136" width="112" height="28" rx="4" stroke={stroke} strokeWidth="1.2" />
      <rect x="156" y="144" width="48" height="4" rx="2" fill={accent} />
      <rect x="156" y="152" width="80" height="3" rx="1.5" fill={fill} />
    </svg>
  );
}

function CRMApproval() {
  return (
    <svg viewBox="0 0 280 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="8" width="264" height="164" rx="6" stroke={stroke} strokeWidth="1.5" />
      <rect x="8" y="8" width="264" height="28" rx="6" fill={fill} />
      <rect x="16" y="16" width="44" height="6" rx="2" fill={accent} />
      <rect x="16" y="44" width="120" height="56" rx="4" stroke={stroke} strokeWidth="1.2" />
      <rect x="24" y="52" width="64" height="5" rx="2" fill={accent} />
      <rect x="24" y="62" width="104" height="3" rx="1.5" fill={fill} />
      <rect x="24" y="70" width="88" height="3" rx="1.5" fill={fill} />
      <rect x="24" y="82" width="40" height="10" rx="4" fill={accent} />
      <rect x="72" y="82" width="40" height="10" rx="4" stroke={stroke} strokeWidth="1" />
      <rect x="144" y="44" width="120" height="56" rx="4" stroke={stroke} strokeWidth="1.2" />
      <rect x="152" y="52" width="56" height="5" rx="2" fill={stroke} />
      <circle cx="248" cy="54" r="6" stroke={accent} strokeWidth="1.5" />
      <polyline points="244,54 247,57 252,51" stroke={accent} strokeWidth="1.5" fill="none" />
      <rect x="152" y="62" width="104" height="3" rx="1.5" fill={fill} />
      <rect x="152" y="70" width="80" height="3" rx="1.5" fill={fill} />
      <rect x="16" y="108" width="248" height="56" rx="4" stroke={stroke} strokeWidth="1.2" />
      <rect x="24" y="116" width="80" height="5" rx="2" fill={stroke} />
      <rect x="24" y="128" width="232" height="3" rx="1.5" fill={fill} />
      <rect x="24" y="136" width="232" height="3" rx="1.5" fill={fill} />
      <rect x="24" y="144" width="180" height="3" rx="1.5" fill={fill} />
    </svg>
  );
}

function SearchDiscovery() {
  return (
    <svg viewBox="0 0 280 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="8" width="264" height="164" rx="6" stroke={stroke} strokeWidth="1.5" />
      <rect x="60" y="20" width="160" height="24" rx="12" stroke={accent} strokeWidth="1.5" />
      <circle cx="80" cy="32" r="6" stroke={accent} strokeWidth="1.5" />
      <rect x="92" y="29" width="80" height="5" rx="2.5" fill={fill} />
      <rect x="16" y="56" width="76" height="52" rx="4" stroke={stroke} strokeWidth="1.2" />
      <rect x="100" y="56" width="76" height="52" rx="4" stroke={stroke} strokeWidth="1.2" />
      <rect x="184" y="56" width="80" height="52" rx="4" stroke={stroke} strokeWidth="1.2" />
      <rect x="24" y="64" width="60" height="24" rx="2" fill={fill} />
      <rect x="24" y="94" width="48" height="4" rx="2" fill={stroke} />
      <rect x="108" y="64" width="60" height="24" rx="2" fill={fill} />
      <rect x="108" y="94" width="52" height="4" rx="2" fill={stroke} />
      <rect x="192" y="64" width="64" height="24" rx="2" fill={fill} />
      <rect x="192" y="94" width="44" height="4" rx="2" fill={stroke} />
      <rect x="16" y="120" width="76" height="44" rx="4" stroke={stroke} strokeWidth="1.2" />
      <rect x="100" y="120" width="76" height="44" rx="4" stroke={stroke} strokeWidth="1.2" />
      <rect x="184" y="120" width="80" height="44" rx="4" stroke={stroke} strokeWidth="1.2" />
      <rect x="24" y="128" width="60" height="20" rx="2" fill={fill} />
      <rect x="108" y="128" width="60" height="20" rx="2" fill={fill} />
      <rect x="192" y="128" width="64" height="20" rx="2" fill={fill} />
    </svg>
  );
}

function ChatMessaging() {
  return (
    <svg viewBox="0 0 280 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="60" y="8" width="160" height="164" rx="12" stroke={stroke} strokeWidth="1.5" />
      <rect x="60" y="8" width="160" height="28" rx="12" fill={fill} />
      <circle cx="80" cy="22" r="8" fill={stroke} />
      <rect x="92" y="18" width="56" height="5" rx="2.5" fill={stroke} />
      <rect x="76" y="48" width="88" height="24" rx="12" fill={fill} />
      <rect x="88" y="56" width="64" height="4" rx="2" fill={stroke} />
      <rect x="116" y="82" width="88" height="24" rx="12" fill={accent} opacity="0.15" />
      <rect x="128" y="90" width="64" height="4" rx="2" fill={accent} />
      <rect x="76" y="116" width="72" height="24" rx="12" fill={fill} />
      <rect x="88" y="124" width="48" height="4" rx="2" fill={stroke} />
      <rect x="76" y="148" width="128" height="16" rx="8" stroke={stroke} strokeWidth="1.2" />
      <rect x="88" y="153" width="60" height="4" rx="2" fill={fill} />
    </svg>
  );
}

function MobileApp() {
  return (
    <svg viewBox="0 0 280 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="92" y="4" width="96" height="172" rx="16" stroke={stroke} strokeWidth="1.5" />
      <rect x="120" y="10" width="40" height="4" rx="2" fill={fill} />
      <rect x="100" y="22" width="80" height="20" rx="4" fill={fill} />
      <rect x="108" y="28" width="48" height="6" rx="2" fill={stroke} />
      <rect x="100" y="50" width="80" height="36" rx="4" stroke={stroke} strokeWidth="1.2" />
      <rect x="108" y="58" width="52" height="4" rx="2" fill={accent} />
      <rect x="108" y="66" width="64" height="3" rx="1.5" fill={fill} />
      <rect x="108" y="74" width="40" height="3" rx="1.5" fill={fill} />
      <rect x="100" y="94" width="80" height="36" rx="4" stroke={stroke} strokeWidth="1.2" />
      <rect x="108" y="102" width="48" height="4" rx="2" fill={accent} />
      <rect x="108" y="110" width="64" height="3" rx="1.5" fill={fill} />
      <rect x="108" y="118" width="52" height="3" rx="1.5" fill={fill} />
      <rect x="100" y="138" width="80" height="28" rx="4" fill={accent} />
      <rect x="120" y="148" width="40" height="6" rx="3" fill="white" />
    </svg>
  );
}

function ModalForm() {
  return (
    <svg viewBox="0 0 280 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="8" width="264" height="164" rx="6" fill={fill} opacity="0.5" />
      <rect x="56" y="24" width="168" height="140" rx="8" stroke={stroke} strokeWidth="1.5" fill="white" />
      <rect x="200" y="32" width="16" height="16" rx="8" stroke={stroke} strokeWidth="1.2" />
      <rect x="72" y="36" width="80" height="6" rx="2" fill={accent} />
      <rect x="72" y="48" width="120" height="3" rx="1.5" fill={fill} />
      <rect x="72" y="64" width="40" height="4" rx="2" fill={stroke} />
      <rect x="72" y="72" width="136" height="14" rx="4" stroke={stroke} strokeWidth="1.2" />
      <rect x="80" y="77" width="60" height="4" rx="2" fill={fill} />
      <rect x="72" y="96" width="40" height="4" rx="2" fill={stroke} />
      <rect x="72" y="104" width="136" height="14" rx="4" stroke={stroke} strokeWidth="1.2" />
      <rect x="80" y="109" width="40" height="4" rx="2" fill={fill} />
      <rect x="72" y="130" width="136" height="24" rx="4" fill={accent} />
      <rect x="112" y="138" width="56" height="6" rx="3" fill="white" />
    </svg>
  );
}

function CheckoutFlow() {
  return (
    <svg viewBox="0 0 280 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="8" width="264" height="164" rx="6" stroke={stroke} strokeWidth="1.5" />
      <rect x="8" y="8" width="264" height="24" rx="6" fill={fill} />
      <rect x="80" y="16" width="120" height="8" rx="4" fill="white" />
      <circle cx="108" cy="20" r="4" fill={accent} />
      <circle cx="140" cy="20" r="4" stroke={accent} strokeWidth="1.5" />
      <circle cx="172" cy="20" r="4" stroke={stroke} strokeWidth="1" />
      <line x1="112" y1="20" x2="136" y2="20" stroke={accent} strokeWidth="1" />
      <line x1="144" y1="20" x2="168" y2="20" stroke={stroke} strokeWidth="1" />
      <rect x="16" y="40" width="152" height="124" rx="4" stroke={stroke} strokeWidth="1.2" />
      <rect x="24" y="48" width="80" height="5" rx="2" fill={accent} />
      <rect x="24" y="60" width="136" height="12" rx="4" stroke={stroke} strokeWidth="1" />
      <rect x="32" y="64" width="60" height="4" rx="2" fill={fill} />
      <rect x="24" y="80" width="136" height="12" rx="4" stroke={stroke} strokeWidth="1" />
      <rect x="32" y="84" width="48" height="4" rx="2" fill={fill} />
      <rect x="24" y="100" width="64" height="12" rx="4" stroke={stroke} strokeWidth="1" />
      <rect x="96" y="100" width="64" height="12" rx="4" stroke={stroke} strokeWidth="1" />
      <rect x="24" y="128" width="136" height="24" rx="4" fill={accent} />
      <rect x="64" y="136" width="56" height="6" rx="3" fill="white" />
      <rect x="176" y="40" width="88" height="68" rx="4" stroke={stroke} strokeWidth="1.2" />
      <rect x="184" y="48" width="56" height="5" rx="2" fill={stroke} />
      <rect x="184" y="60" width="72" height="3" rx="1.5" fill={fill} />
      <rect x="184" y="68" width="72" height="3" rx="1.5" fill={fill} />
      <line x1="176" y1="80" x2="264" y2="80" stroke={fill} strokeWidth="1" />
      <rect x="184" y="86" width="40" height="5" rx="2" fill={accent} />
      <rect x="236" y="86" width="20" height="5" rx="2" fill={accent} />
    </svg>
  );
}

const wireframeMap = {
  1: Dashboard,
  2: Portal,
  3: Charts,
  4: FlowDiagram,
  5: AuthScreen,
  6: DataTable,
  7: Workflow,
  8: DocumentUpload,
  9: CRMApproval,
  10: SearchDiscovery,
  11: ChatMessaging,
  12: ChatMessaging,
  13: MobileApp,
  14: ModalForm,
  15: CheckoutFlow,
};

export default function Wireframe({ projectId }) {
  const Component = wireframeMap[projectId] || Dashboard;
  return <Component />;
}
