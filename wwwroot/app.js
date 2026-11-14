const iconPaths = {
  grid: '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
  chart: '<path d="M3 3v18h18"/><path d="m7 14 4-4 4 3 6-7"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="10" cy="7" r="4"/><path d="M20 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
  contact: '<path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="10" cy="7" r="4"/><path d="M20 8v6m-3-3h6"/>',
  target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
  bag: '<path d="M6 7h12l1 14H5L6 7Z"/><path d="M9 7a3 3 0 0 1 6 0"/>',
  box: '<path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 8 9 5 9-5M3 8v9l9 5 9-5V8M12 13v9"/>',
  cart: '<circle cx="9" cy="20" r="1"/><circle cx="19" cy="20" r="1"/><path d="M2 3h2l2.5 12h12l3-9H5"/>',
  receipt: '<path d="M4 3v18l3-2 3 2 3-2 3 2 4-2V3l-4 2-3-2-3 2-3-2-3 2Z"/><path d="M8 9h8m-8 4h6"/>',
  wallet: '<rect x="3" y="5" width="18" height="15" rx="2"/><path d="M3 8h18m-5 5h2"/>',
  layers: '<path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5m-18 5 9 5 9-5"/>',
  folder: '<path d="M3 6a2 2 0 0 1 2-2h5l2 3h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6Z"/>',
  people: '<path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="10" cy="7" r="4"/><path d="M20 8v6m-3-3h6"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  monitor: '<rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8m-4-4v4"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18m0-18a15 15 0 0 0 0 18"/>',
  factory: '<path d="M3 21V8l6 3V8l6 3V5h6v16H3Z"/><path d="M7 16h2m4 0h2m4 0h1"/>',
  headset: '<path d="M3 13v-2a9 9 0 0 1 18 0v2"/><path d="M5 13h2v6H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2Zm14 0h-2v6h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2Zm-2 8h-4"/>',
  send: '<path d="m22 2-7 20-4-9-9-4 20-7ZM22 2 11 13"/>',
  truck: '<path d="M3 6h12v12H3z"/><path d="M15 10h4l3 4v4h-7"/><circle cx="7.5" cy="18.5" r="1.5"/><circle cx="18.5" cy="18.5" r="1.5"/>',
  file: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6m-10 5h6m-6 4h6"/>',
  settings: '<circle cx="12" cy="12" r="3"/><path d="m19.4 15 .1.1 1.4 1.1-1.4 2.4-1.7-.7a8 8 0 0 1-1.7 1l-.3 1.8h-2.8l-.3-1.8a8 8 0 0 1-1.7-1l-1.7.7-1.4-2.4 1.4-1.1a7 7 0 0 1 0-2L5.9 12l1.4-2.4 1.7.7a8 8 0 0 1 1.7-1l.3-1.8h2.8l.3 1.8a8 8 0 0 1 1.7 1l1.7-.7 1.4 2.4-1.4 1.1a7 7 0 0 1-.1 2Z"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
  command: '<path d="M9 7V5a2 2 0 1 0-2 2h10a2 2 0 1 0-2-2v14a2 2 0 1 0 2-2H7a2 2 0 1 0 2 2V7Z"/>',
  bell: '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9m-8 13h4"/>',
  message: '<path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8v.5Z"/>',
  plus: '<path d="M12 5v14m-7-7h14"/>',
  dollar: '<path d="M12 2v20m5-16H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>',
  trending: '<path d="m3 17 6-6 4 4 8-8"/><path d="M15 7h6v6"/>',
  calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 11h18"/>',
  check: '<path d="m5 12 4 4L19 6"/>',
};

const icon = (name) => `<svg viewBox="0 0 24 24" aria-hidden="true">${iconPaths[name] || iconPaths.file}</svg>`;
document.querySelectorAll("[data-icon]").forEach((node) => { node.innerHTML = icon(node.dataset.icon); });

const coreModules = [
  { name: "Contacts", icon: "contact", description: "Manage customers, suppliers, and business relationships.", primary: "Add contact", records: [
    { name: "Acme Corporation", detail: "Customer · acme.com", email: "olivia@acme.com", phone: "+1 (415) 555-0182", status: "Active", value: "$24,500", date: "Oct 28, 2026" },
    { name: "Bloom & Wild", detail: "Customer · bloomandwild.com", email: "hello@bloomandwild.com", phone: "+1 (212) 555-0104", status: "Active", value: "$18,200", date: "Oct 26, 2026" },
    { name: "Vertex Labs", detail: "Supplier · vertexlabs.io", email: "team@vertexlabs.io", phone: "+1 (415) 555-0173", status: "Active", value: "$12,800", date: "Oct 23, 2026" },
    { name: "Maison Kitsuné", detail: "Customer · maisonkitsune.fr", email: "studio@maisonkitsune.fr", phone: "+33 1 42 21 54 35", status: "Prospect", value: "$9,600", date: "Oct 20, 2026" },
    { name: "Studio Nicholson", detail: "Customer · studionicholson.com", email: "team@studionicholson.com", phone: "+44 20 7946 0281", status: "Active", value: "$8,450", date: "Oct 18, 2026" },
    { name: "Paper & Co.", detail: "Supplier · paperandco.co", email: "orders@paperandco.co", phone: "+1 (646) 555-0148", status: "Inactive", value: "$3,200", date: "Oct 12, 2026" },
  ] },
  { name: "CRM", icon: "target", description: "Turn conversations into customers with a clear, actionable pipeline.", primary: "Add lead", records: [
    { name: "Website redesign", detail: "Acme Corporation", owner: "Jamie Davis", amount: "$12,400", stage: "Proposal", status: "In progress", date: "Nov 18, 2026" },
    { name: "Brand strategy", detail: "Maison Kitsuné", owner: "Alex Morgan", amount: "$8,600", stage: "Qualified", status: "In progress", date: "Nov 22, 2026" },
    { name: "Q4 campaign", detail: "Bloom & Wild", owner: "Jamie Davis", amount: "$15,200", stage: "Negotiation", status: "In progress", date: "Nov 10, 2026" },
    { name: "Product launch", detail: "Vertex Labs", owner: "Sam Rivera", amount: "$6,800", stage: "New lead", status: "New", date: "Nov 28, 2026" },
    { name: "Content partnership", detail: "Studio Nicholson", owner: "Alex Morgan", amount: "$4,500", stage: "Won", status: "Won", date: "Nov 02, 2026" },
  ] },
  { name: "Sales", icon: "bag", description: "Create quotations, manage orders, and keep deals moving.", primary: "Create quotation", records: [
    { name: "SO-2026-084", detail: "Acme Corporation", owner: "Jamie Davis", amount: "$12,400", status: "Confirmed", date: "Oct 29, 2026" },
    { name: "QT-2026-112", detail: "Maison Kitsuné", owner: "Alex Morgan", amount: "$8,600", status: "Sent", date: "Oct 28, 2026" },
    { name: "SO-2026-083", detail: "Bloom & Wild", owner: "Jamie Davis", amount: "$15,200", status: "Processing", date: "Oct 27, 2026" },
    { name: "QT-2026-109", detail: "Vertex Labs", owner: "Sam Rivera", amount: "$6,800", status: "Draft", date: "Oct 25, 2026" },
  ] },
  { name: "Products", icon: "box", description: "Organize your products, services, categories, and pricing.", primary: "Add product", records: [
    { name: "Brand identity package", detail: "Service · Creative", sku: "SRV-001", price: "$4,800", stock: "Unlimited", status: "Active" },
    { name: "Website design", detail: "Service · Digital", sku: "SRV-002", price: "$7,200", stock: "Unlimited", status: "Active" },
    { name: "Studio hours", detail: "Service · Consulting", sku: "SRV-003", price: "$180 / hr", stock: "Unlimited", status: "Active" },
    { name: "Printed lookbook", detail: "Product · Print", sku: "PRD-014", price: "$48.00", stock: "128 units", status: "Low stock" },
    { name: "Canvas tote", detail: "Product · Merchandise", sku: "PRD-009", price: "$28.00", stock: "340 units", status: "Active" },
  ] },
  { name: "Inventory", icon: "layers", description: "Track stock, warehouses, transfers, and product movements.", primary: "Stock adjustment", records: [
    { name: "Printed lookbook", detail: "PRD-014 · Main warehouse", sku: "128 units", location: "New York", status: "Low stock", date: "Oct 30, 2026" },
    { name: "Canvas tote", detail: "PRD-009 · Main warehouse", sku: "340 units", location: "New York", status: "In stock", date: "Oct 29, 2026" },
    { name: "Sample kit", detail: "PRD-021 · West warehouse", sku: "42 units", location: "San Francisco", status: "In stock", date: "Oct 29, 2026" },
    { name: "Packaging set", detail: "PRD-018 · Main warehouse", sku: "18 units", location: "New York", status: "Low stock", date: "Oct 28, 2026" },
  ] },
  { name: "Purchasing", icon: "cart", description: "Manage supplier orders, incoming stock, and purchase tracking.", primary: "New purchase order", records: [
    { name: "PO-2026-046", detail: "Paper & Co.", owner: "Jamie Davis", amount: "$2,840", status: "Received", date: "Oct 28, 2026" },
    { name: "PO-2026-045", detail: "Vertex Labs", owner: "Sam Rivera", amount: "$6,120", status: "In transit", date: "Oct 30, 2026" },
    { name: "PO-2026-044", detail: "Studio Supply Co.", owner: "Alex Morgan", amount: "$1,460", status: "Pending", date: "Nov 02, 2026" },
    { name: "PO-2026-043", detail: "Paper & Co.", owner: "Jamie Davis", amount: "$920", status: "Received", date: "Oct 18, 2026" },
  ] },
  { name: "Invoicing", icon: "receipt", description: "Send invoices, track payments, and manage taxes and credit notes.", primary: "Create invoice", records: [
    { name: "INV-2026-108", detail: "Acme Corporation", issued: "Oct 28, 2026", due: "Nov 27, 2026", amount: "$12,400", status: "Paid" },
    { name: "INV-2026-107", detail: "Bloom & Wild", issued: "Oct 25, 2026", due: "Nov 24, 2026", amount: "$15,200", status: "Pending" },
    { name: "INV-2026-106", detail: "Maison Kitsuné", issued: "Oct 20, 2026", due: "Nov 19, 2026", amount: "$8,600", status: "Overdue" },
    { name: "INV-2026-105", detail: "Studio Nicholson", issued: "Oct 18, 2026", due: "Nov 17, 2026", amount: "$4,500", status: "Paid" },
  ] },
  { name: "ZIMRA Fiscalisation", icon: "receipt", description: "Check FDMS onboarding and fiscal invoice submission readiness.", primary: "Open invoices", records: [] },
  { name: "Accounting", icon: "wallet", description: "Stay on top of your ledger, expenses, and financial health.", primary: "Add expense", records: [
    { name: "Office rent", detail: "Facilities · Monthly", category: "Operating expenses", amount: "$3,200", status: "Paid", date: "Oct 01, 2026" },
    { name: "Adobe Creative Cloud", detail: "Software · Monthly", category: "Software & tools", amount: "$258", status: "Paid", date: "Oct 04, 2026" },
    { name: "Freelance photography", detail: "Contractor · Project", category: "Creative services", amount: "$1,450", status: "Pending", date: "Oct 27, 2026" },
    { name: "Team travel", detail: "Travel · Business trip", category: "Travel & meals", amount: "$860", status: "Paid", date: "Oct 25, 2026" },
  ] },
  { name: "Reports", icon: "chart", description: "Turn sales, inventory, and finance data into clear next steps.", primary: "Create report", records: [
    { name: "Monthly sales summary", detail: "Sales · Updated today", owner: "Jamie Davis", date: "Oct 31, 2026", status: "Ready" },
    { name: "Inventory valuation", detail: "Inventory · Updated yesterday", owner: "Sam Rivera", date: "Oct 30, 2026", status: "Ready" },
    { name: "Receivables aging", detail: "Finance · Updated Oct 28", owner: "Jamie Davis", date: "Oct 28, 2026", status: "Ready" },
    { name: "Lead conversion", detail: "CRM · Updated Oct 27", owner: "Alex Morgan", date: "Oct 27, 2026", status: "Ready" },
  ] },
  { name: "User & Access Management", icon: "users", description: "Create and manage system user accounts.", primary: "Add user", records: [] },
  { name: "Analytics", icon: "chart", description: "A closer look at the numbers moving your business forward.", primary: "Export analytics", records: [
    { name: "Revenue performance", detail: "Sales · Last 30 days", owner: "Jamie Davis", amount: "$48,290", status: "On track", date: "Oct 31, 2026" },
    { name: "Lead conversion", detail: "CRM · Last 30 days", owner: "Alex Morgan", amount: "32.8%", status: "Trending up", date: "Oct 31, 2026" },
    { name: "Average order value", detail: "Sales · Last 30 days", owner: "Jamie Davis", amount: "$2,140", status: "Trending up", date: "Oct 31, 2026" },
  ] },
];

const optionalModules = [
  { name: "Projects", icon: "folder", description: "Plan projects, assign tasks, track time, and hit every deadline.", primary: "New project" },
  { name: "Human Resources", icon: "people", description: "Bring employee records, leave, attendance, and hiring together.", primary: "Add employee" },
  { name: "Payroll", icon: "dollar", description: "Prepare payroll, payslips, and salary reports with confidence.", primary: "Run payroll" },
  { name: "Point of Sale", icon: "monitor", description: "A simple checkout for in-person orders, returns, and cash sessions.", primary: "Open register" },
  { name: "E-commerce", icon: "globe", description: "Connect your online catalog, customer accounts, and orders.", primary: "View storefront" },
  { name: "Manufacturing", icon: "factory", description: "Coordinate bills of materials, work centers, and production orders.", primary: "New production order" },
  { name: "Helpdesk", icon: "headset", description: "Keep customer support on track with tickets and service levels.", primary: "Create ticket" },
  { name: "Marketing", icon: "send", description: "Reach the right people with thoughtful campaigns and automation.", primary: "Create campaign" },
  { name: "Fleet & Assets", icon: "truck", description: "Keep vehicles, equipment, maintenance, and depreciation in view.", primary: "Add asset" },
  { name: "Documents & Approvals", icon: "file", description: "Store important files and move approvals forward with clarity.", primary: "Upload document" },
];
const assignableModules = [...coreModules, ...optionalModules]
  .filter((module) => module.name !== "User & Access Management");

let currentPage = "Dashboard";
let currentSearch = "";
let dashboardPeriod = "Last 30 days";
let dashboardCurrency = "USD";
let dashboardSnapshot = null;
let posCart = [];
let posCurrency = "USD";
let aiChatMessages = [];
let aiChatSending = false;
let aiChatGeneration = 0;
let aiChatRequestController = null;
const appSettings = {
  workspaceName: "Easy Business",
  defaultCurrency: "USD",
  dashboardPeriod: "Last 30 days",
  posCurrency: "USD",
  fontScale: "standard",
};
let settingsStorageWarning = "";
let activityReportPeriod = "daily";
let activityReportDate = new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().slice(0, 10);
let csrfToken = "";
let workspaceUser = null;
let setupRequired = false;
let setupAvailable = false;
let passwordResetToken = "";

const coreNav = document.getElementById("core-nav");
coreModules.filter((module) => module.name !== "Analytics").forEach((module) => {
  const button = document.createElement("button");
  button.className = "nav-item";
  button.dataset.page = module.name;
  button.innerHTML = `<span class="nav-icon">${icon(module.icon)}</span><span>${module.name}</span>`;
  coreNav.appendChild(button);
});
const optionalNav = document.getElementById("optional-nav");
optionalModules.forEach((module) => {
  const button = document.createElement("button");
  button.className = "nav-item";
  button.dataset.page = module.name;
  button.innerHTML = `<span class="nav-icon">${icon(module.icon)}</span><span>${module.name}</span>`;
  optionalNav.appendChild(button);
});
document.querySelectorAll("[data-page]").forEach((button) => button.addEventListener("click", () => navigate(button.dataset.page)));

const pageContent = document.getElementById("page-content");
function renderDashboard() {
  const data = dashboardSnapshot || { revenue: 0, openOpportunities: 0, outstandingInvoices: 0, activeCustomers: 0, pipelineValue: 0, revenueSeries: [], recentActivity: [], topCustomers: [] };
  const canAccessModule = (name) => workspaceUser?.role === "Administrator" || workspaceUser?.modules?.includes(name);
  const formatMoney = (value) => formatCurrency(value, dashboardCurrency);
  const stages = ["New lead", "Qualified", "Proposal", "Negotiation", "Won"].map((stage) => {
    const records = (getModule("CRM")?.records || []).filter((record) =>
      (record.stage || "").toLowerCase() === stage.toLowerCase() && (record.currency || "USD") === dashboardCurrency);
    const amount = records.reduce((sum, record) => sum + parseAmount(record.amount), 0);
    return { stage, count: records.length, amount, percent: data.pipelineValue ? Math.round(amount / data.pipelineValue * 100) : 0 };
  });
  const wonCount = stages.find((stage) => stage.stage === "Won")?.count || 0;
  const opportunityCount = stages.reduce((sum, stage) => sum + stage.count, 0);
  const winRate = opportunityCount ? Math.round(wonCount / opportunityCount * 100) : 0;
  const averageDeal = opportunityCount ? data.pipelineValue / opportunityCount : 0;
  const recent = data.recentActivity || [];
  const customers = data.topCustomers || [];
  const summaryCards = [
    canAccessModule("Sales") ? metricCard("Recorded sales", formatMoney(data.revenue), "Database total", dashboardPeriod, "dollar", "purple", "Sales") : "",
    canAccessModule("CRM") ? metricCard("Open opportunities", String(data.openOpportunities), `${(getModule("CRM")?.records || []).length} total records`, "CRM pipeline", "target", "green", "CRM") : "",
    canAccessModule("Invoicing") ? metricCard("Outstanding invoices", formatMoney(data.outstandingInvoices), `${getModule("Invoicing")?.records.filter((record) => (record.status || "").toLowerCase() !== "paid" && (record.currency || "USD") === dashboardCurrency).length || 0} unpaid`, "Invoicing", "receipt", "orange", "Invoicing") : "",
    canAccessModule("Contacts") ? metricCard("Active contacts", String(data.activeCustomers), `${getModule("Contacts")?.records.length || 0} total contacts`, "Contacts", "users", "blue", "Contacts") : "",
  ].join("");
  const salesPanel = canAccessModule("Sales") ? `
      <article class="panel sales-panel">
        <div class="panel-heading"><div><h2>Recorded sales</h2><p>Based on completed sales entered in the selected period · ${dashboardCurrency}</p></div><div class="chart-legend"><span class="legend-dot"></span> Sales</div></div>
        <div class="sales-summary"><strong>${formatMoney(data.revenue)}</strong><span>${dashboardPeriod}</span></div>
        <div class="chart-wrap">${revenueChart(data.revenueSeries || [])}</div>
      </article>` : "";
  const pipelinePanel = canAccessModule("CRM") ? `
      <article class="panel pipeline-panel">
        <div class="panel-heading"><div><h2>Sales pipeline</h2><p>${opportunityCount} opportunities · ${formatMoney(data.pipelineValue)}</p></div><button class="panel-link" data-page="CRM">View pipeline ↗</button></div>
        <div class="pipeline-list">
          ${stages.map((stage, index) => pipelineRow(stage.stage, stage.count, formatMoney(stage.amount), stage.percent, ["#9d8df2", "#7b6be9", "#5983df", "#e5aa51", "#39ae82"][index])).join("")}
        </div>
        <div class="pipeline-footer"><span>Win rate <strong>${winRate}%</strong></span><span>Avg. deal <strong>${formatMoney(averageDeal)}</strong></span></div>
      </article>` : "";
  const activityPanel = `<article class="panel"><div class="panel-heading"><div><h2>Recent activity</h2><p>Changes made in your allowed modules</p></div><button class="panel-link" id="activity-link">View all ↗</button></div><div class="activity-list">${recent.length ? recent.map(renderActivity).join("") : `<div class="empty-state"><strong>No activity yet</strong>Create a record to start your workspace history.</div>`}</div></article>`;
  const contactsPanel = canAccessModule("Contacts") ? `<article class="panel"><div class="panel-heading"><div><h2>Top contacts</h2><p>Sorted by recorded lifetime value</p></div><button class="panel-link" data-page="Contacts">View all ↗</button></div><div class="customer-list">${customers.length ? customers.map((customer, index) => customerRow(initials(customer.name), customer.name, customer.detail || "Contact", formatMoney(customer.value), ["#f0edff", "#fff1e8", "#e8f6f0", "#edf4ff", "#fff5e7"][index % 5])).join("") : `<div class="empty-state"><strong>No contacts yet</strong>Add a contact to see your customer list here.</div>`}</div></article>` : "";
  pageContent.innerHTML = `
    <div class="page-heading">
      <div><span class="eyebrow">USER DASHBOARD</span><h1>Welcome, ${escapeHtml(workspaceUser?.displayName || "there")} <span aria-hidden="true">✦</span></h1><p>Your live business activity, saved securely in your workspace.</p></div>
      <div class="heading-actions"><label class="period-control currency-control"><span>Currency</span><select id="dashboard-currency" aria-label="Dashboard currency">${currencyOptions.map(([code]) => `<option value="${code}"${dashboardCurrency === code ? " selected" : ""}>${code}</option>`).join("")}</select></label><label class="period-control">${icon("calendar")}<select id="date-range" aria-label="Dashboard date range"><option${dashboardPeriod === "Last 7 days" ? " selected" : ""}>Last 7 days</option><option${dashboardPeriod === "Last 30 days" ? " selected" : ""}>Last 30 days</option><option${dashboardPeriod === "Last 90 days" ? " selected" : ""}>Last 90 days</option></select></label><button class="button button-primary" id="create-button">${icon("plus")} Create new</button></div>
    </div>
    <section class="metric-grid" aria-label="Business summary">
      ${summaryCards || `<article class="panel empty-state"><strong>No business modules assigned</strong>Ask an administrator to grant access to the modules you need.</article>`}
    </section>
      ${(salesPanel || pipelinePanel) ? `<section class="dashboard-grid">${salesPanel}${pipelinePanel}</section>` : ""}
      <section class="lower-grid">${activityPanel}${contactsPanel}</section>`;
  bindPageButtons();
  document.getElementById("create-button").addEventListener("click", () => openCreateMenu());
  document.getElementById("date-range").addEventListener("change", (event) => {
    dashboardPeriod = event.target.value;
    refreshDashboard();
  });
  document.getElementById("dashboard-currency").addEventListener("change", (event) => {
    dashboardCurrency = event.target.value;
    refreshDashboard();
  });
  document.getElementById("activity-link").addEventListener("click", () => navigate("Activity"));
  pageContent.querySelectorAll("[data-pipeline-stage]").forEach((button) => button.addEventListener("click", () => {
    navigate("CRM");
    const search = document.getElementById("record-search");
    search.value = button.dataset.pipelineStage.toLowerCase();
    search.dispatchEvent(new Event("input", { bubbles: true }));
  }));
}
async function renderAdminDashboard() {
  let users;
  try {
    users = await apiFetch("/api/users");
  } catch (error) {
    showPageError(error.message);
    return;
  }
  const recordCount = [...coreModules, ...optionalModules]
    .filter((module) => module.name !== "User & Access Management")
    .reduce((total, module) => total + module.records.length, 0);
  pageContent.innerHTML = `<div class="page-heading"><div><span class="eyebrow">SYSTEM ADMINISTRATION</span><h1>Administrator dashboard</h1><p>Manage system access and monitor your Easy Business workspace.</p></div><div class="heading-actions"><button class="button button-primary" data-page="User & Access Management">${icon("users")} Manage users</button></div></div>
    <section class="metric-grid" aria-label="Administration summary">
      <article class="metric-card"><span class="metric-top"><span>System users</span><span class="metric-icon purple">${icon("users")}</span></span><span class="metric-value">${users.length}</span><span class="metric-foot"><span>Administrator and staff accounts</span></span></article>
      <article class="metric-card"><span class="metric-top"><span>Shared workspace records</span><span class="metric-icon blue">${icon("file")}</span></span><span class="metric-value">${recordCount}</span><span class="metric-foot"><span>Available to signed-in users</span></span></article>
    </section>
    <article class="panel admin-dashboard-panel"><div class="panel-heading"><div><h2>Choose your workspace</h2><p>Administration and day-to-day business operations have separate dashboards.</p></div></div><div class="admin-dashboard-actions"><button class="button button-primary" data-page="Business Dashboard">${icon("chart")} Open business dashboard</button><button class="button" data-page="User &amp; Access Management">${icon("users")} Add or manage users</button></div></article>`;
  bindPageButtons();
}
function metricCard(title, value, trend, foot, iconName, color, targetPage) {
  return `<button type="button" class="metric-card metric-card-link" data-page="${escapeHtml(targetPage)}" aria-label="Open ${escapeHtml(targetPage)}"><span class="metric-top"><span>${title}</span><span class="metric-icon ${color}">${icon(iconName)}</span></span><span class="metric-value">${value}</span><span class="metric-foot"><span class="metric-neutral">${trend}</span><span>${foot}</span><span class="metric-link-cue">View details ↗</span></span></button>`;
}
function pipelineRow(title, count, value, percent, color) {
  return `<button type="button" class="pipeline-row pipeline-stage" data-pipeline-stage="${escapeHtml(title)}" aria-label="View ${escapeHtml(title)} opportunities"><span class="pipeline-title"><i class="pipeline-dot" style="background:${color}"></i>${title}</span><span class="pipeline-number">${count} <span style="color:#a1a3b2;font-weight:400">· ${value}</span></span><span class="pipeline-track"><span class="pipeline-fill" style="width:${percent}%;background:${color}"></span></span></button>`;
}
function customerRow(initials, name, orders, value, color) {
  return `<button type="button" class="customer-row customer-row-button" data-page="Contacts" data-record-search="${escapeHtml(name)}"><span class="customer-avatar" style="background:${color}">${escapeHtml(initials)}</span><span class="customer-copy"><strong>${escapeHtml(name)}</strong><span>${escapeHtml(orders)}</span></span><span class="customer-value">${escapeHtml(value)}</span></button>`;
}
function revenueChart(period) {
  if (!period.length || !period.some((item) => Number(item.amount) > 0)) return `<div class="chart-empty"><span class="metric-icon purple">${icon("chart")}</span><strong>No completed sales in this period</strong><span>Mark a sales record as confirmed to start your revenue trend.</span></div>`;
  const max = Math.max(...period.map((item) => Number(item.amount)), 1);
  const points = period.map((item, index) => ({
    x: 42 + (period.length === 1 ? 299 : index * 598 / (period.length - 1)),
    y: 127 - Number(item.amount) / max * 105
  }));
  const line = points.map((point, index) => `${index ? "L" : "M"}${point.x.toFixed(1)} ${point.y.toFixed(1)}`).join(" ");
  const area = `${line} L${points[points.length - 1].x.toFixed(1)} 137 L${points[0].x.toFixed(1)} 137Z`;
  const labels = period.map((item, index) => index === 0 || index === period.length - 1 || index % Math.ceil(period.length / 5) === 0
    ? `<text x="${points[index].x.toFixed(1)}" y="162">${escapeHtml(item.label)}</text>` : "").join("");
  return `<svg viewBox="0 0 650 184" role="img" aria-label="Database-backed revenue for the selected period">
    <defs><linearGradient id="chartFill" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#8173ec" stop-opacity=".18"/><stop offset="1" stop-color="#8173ec" stop-opacity="0"/></linearGradient></defs>
    <g class="chart-grid"><line x1="42" y1="16" x2="640" y2="16"/><line x1="42" y1="53" x2="640" y2="53"/><line x1="42" y1="90" x2="640" y2="90"/><line x1="42" y1="127" x2="640" y2="127"/><text x="0" y="19">${escapeHtml(formatCompactMoney(max))}</text><text x="0" y="56">${escapeHtml(formatCompactMoney(max * .66))}</text><text x="8" y="93">${escapeHtml(formatCompactMoney(max * .33))}</text><text x="18" y="130">$0</text></g>
    <path class="chart-area" d="${area}"/><path class="chart-line" d="${line}"/>${points.map((point) => `<circle class="chart-dot" cx="${point.x.toFixed(1)}" cy="${point.y.toFixed(1)}" r="3"/>`).join("")}
    <g class="chart-label">${labels}</g></svg>`;
}
function parseAmount(value) {
  const parsed = Number(String(value || "").replace(/[^\d,.-]/g, "").replaceAll(",", ""));
  return Number.isFinite(parsed) ? parsed : 0;
}
function formatCompactMoney(value) {
  const amount = Number(value) || 0;
  const symbol = dashboardCurrency === "USD" ? "$" : `${dashboardCurrency} `;
  return amount >= 1000 ? `${symbol}${(amount / 1000).toFixed(1)}k` : `${symbol}${amount.toFixed(0)}`;
}
const currencyOptions = [
  ["USD", "USD — US dollar"],
  ["ZWL", "ZWL — Zimbabwe dollar"],
  ["ZAR", "ZAR — South African rand"],
];
function formatCurrency(value, currency) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency, maximumFractionDigits: 2 }).format(Number(value) || 0);
}
function readProductStock(product) {
  const raw = product?.stock;
  if (Number.isInteger(raw) && raw >= 0) return raw;
  const match = /^\s*(\d+)(?:\s+units?)?\s*$/i.exec(String(raw ?? ""));
  return match ? Number(match[1]) : null;
}
function initials(name) {
  return String(name || "?").trim().split(/\s+/).slice(0, 2).map((part) => part[0] || "").join("").toUpperCase();
}
function renderActivity(item) {
  const labels = {
    "record.created": "created a record in",
    "record.updated": "updated a record in",
    "record.deleted": "deleted a record from",
  };
  const label = labels[item.action] || "updated";
  const activityIcon = item.action === "record.deleted" ? "file" : item.action === "record.updated" ? "settings" : "plus";
  return `<div class="activity-item"><div class="activity-avatar">${icon(activityIcon)}</div><div class="activity-content"><strong>${escapeHtml(item.userName)}</strong> ${label} <button type="button" class="activity-target" data-page="${escapeHtml(item.module)}" data-record-search="${escapeHtml(item.recordName)}">${escapeHtml(item.recordName)}</button></div><span class="activity-time">${escapeHtml(new Date(item.createdAt).toLocaleString())}</span></div>`;
}

function moduleRecords(name) {
  return [...(coreModules.find((item) => item.name === name)?.records || optionalModules.find((item) => item.name === name)?.records || [])];
}
function getModule(name) {
  return coreModules.find((item) => item.name === name) || optionalModules.find((item) => item.name === name);
}
function statusClass(status) {
  const value = (status || "").toLowerCase();
  if (["active", "paid", "confirmed", "received", "ready", "won", "in stock", "on track", "trending up"].includes(value)) return "status-green";
  if (["pending", "sent", "processing", "in transit", "low stock", "proposal"].includes(value)) return "status-orange";
  if (["prospect", "new", "draft", "qualified", "in progress"].includes(value)) return "status-blue";
  if (["overdue", "inactive", "lost"].includes(value)) return "status-red";
  return "status-purple";
}
function recordColumns(module, records) {
  const fieldOrder = {
    Contacts: ["name", "email", "phone", "value", "currency", "status", "date"],
    CRM: ["name", "detail", "owner", "stage", "amount", "currency", "date"],
    Sales: ["name", "detail", "owner", "amount", "currency", "status", "date"],
    Products: ["name", "type", "sku", "price", "currency", "stock", "status"],
    Inventory: ["name", "sku", "location", "status", "date"],
    Purchasing: ["name", "detail", "owner", "amount", "currency", "status", "date"],
    Invoicing: ["name", "detail", "maker", "issued", "due", "amount", "currency", "status"],
    Accounting: ["name", "detail", "category", "amount", "currency", "status", "date"],
    Reports: ["name", "detail", "owner", "date", "status"],
    Analytics: ["name", "detail", "owner", "amount", "status", "date"],
    "User & Access Management": ["name", "team", "role", "permissions", "status", "date"],
  };
  const chosen = fieldOrder[module] || ["name", "detail", "owner", "amount", "status", "date"];
  return records.length ? chosen.filter((key) => records.some((record) => record[key])) : chosen;
}
function titleForKey(key) {
  return ({ name: "Name", detail: "Company / details", email: "Email", phone: "Phone", value: "Lifetime value", date: "Date", owner: "Owner", amount: "Amount", stage: "Stage", status: "Status", type: "Type", sku: "SKU", price: "Price", stock: "Stock on hand", location: "Location", issued: "Issued", due: "Due date", maker: "Invoice maker", category: "Category", team: "Team", role: "Role", permissions: "Permissions" })[key] || key;
}
function renderTable(moduleName, records) {
  const columns = recordColumns(moduleName, records);
  const rows = records.filter((row) => Object.values(row).some((value) => String(value).toLowerCase().includes(currentSearch)));
  const body = rows.length ? rows.map((row) => `<tr>${columns.map((key) => {
    const value = row[key] || "—";
    if (key === "name") return `<td><div class="cell-primary"><span class="table-avatar">${escapeHtml(initials(value))}</span>${escapeHtml(value)}</div></td>`;
    if (key === "status" || key === "stage") return `<td><span class="status-pill ${statusClass(value)}">${escapeHtml(value)}</span></td>`;
    if (["amount", "value", "price", "taxAmount"].includes(key) && value !== "—" && row.currency) return `<td>${escapeHtml(formatCurrency(parseAmount(value), row.currency))}</td>`;
    if (key === "currency" && value !== "—") return `<td>${escapeHtml(currencyOptions.find(([code]) => code === value)?.[1] || value)}</td>`;
    return `<td>${escapeHtml(value)}</td>`;
  }).join("")}<td class="row-actions">${moduleName === "Invoicing" ? `<button class="row-action row-action-print" type="button" data-print-id="${row.id}" aria-label="Print invoice ${escapeHtml(row.name)}">Print</button>` : ""}${row.kind === "pos" ? "" : `<button class="row-action" type="button" data-edit-id="${row.id}" aria-label="Edit ${escapeHtml(row.name)}">Edit</button><button class="row-action row-action-delete" type="button" data-delete-id="${row.id}" aria-label="Delete ${escapeHtml(row.name)}">Delete</button>`}</td></tr>`).join("") : `<tr><td class="table-empty" colspan="${Math.max(columns.length + 1, 1)}">${records.length ? `No records match “${escapeHtml(currentSearch)}”.` : `No ${escapeHtml(moduleName.toLowerCase())} records yet. Use “Add” to create your first record.`}</td></tr>`;
  return `<div class="table-panel"><div class="table-toolbar"><h2>${moduleName} <span style="color:#a2a4b2;font-weight:400">(${records.length})</span></h2><div class="table-toolbar-actions"><label class="table-search">${icon("search")}<input type="search" id="record-search" placeholder="Search ${moduleName.toLowerCase()}..." value="${escapeHtml(currentSearch)}" /></label><button class="button filter-button" id="filter-button">${icon("layers")} Filter</button><button class="button filter-button" id="export-button">${icon("file")} Export</button></div></div><div class="table-scroll"><table class="data-table"><thead><tr>${columns.map((key) => `<th>${titleForKey(key)}</th>`).join("")}<th>Actions</th></tr></thead><tbody>${body}</tbody></table></div><div class="table-footer"><span>Showing ${rows.length ? 1 : 0}–${rows.length} of ${records.length} records</span><div class="pagination"><button aria-label="Previous page" disabled>‹</button><button class="current">1</button><button aria-label="Next page" disabled>›</button></div></div></div>`;
}
async function renderActivityReports() {
  const today = new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().slice(0, 10);
  pageContent.innerHTML = `<div class="page-heading"><div><span class="eyebrow">ACTIVITY REPORTS</span><h1>Daily &amp; monthly activity</h1><p>Review saved business and user-management activity for your permitted modules.</p></div></div>
    <section class="panel activity-report-panel"><div class="activity-report-controls">
      <label class="form-field"><span>Report period</span><select id="activity-report-period"><option value="daily"${activityReportPeriod === "daily" ? " selected" : ""}>Daily</option><option value="monthly"${activityReportPeriod === "monthly" ? " selected" : ""}>Monthly</option></select></label>
      <label class="form-field"><span>${activityReportPeriod === "daily" ? "Report date" : "Report month"}</span><input id="activity-report-date" type="${activityReportPeriod === "daily" ? "date" : "month"}" value="${escapeHtml(activityReportPeriod === "daily" ? activityReportDate : activityReportDate.slice(0, 7))}" max="${activityReportPeriod === "daily" ? today : today.slice(0, 7)}" /></label>
      <button class="button button-primary" id="activity-report-export" type="button" disabled>${icon("file")} Export CSV</button>
    </div><div id="activity-report-content" aria-live="polite"><div class="empty-state">Loading activity report…</div></div></section>`;

  const periodSelect = document.getElementById("activity-report-period");
  const dateInput = document.getElementById("activity-report-date");
  const reportContent = document.getElementById("activity-report-content");
  const exportButton = document.getElementById("activity-report-export");
  let reportData = null;
  periodSelect.addEventListener("change", () => {
    activityReportPeriod = periodSelect.value;
    activityReportDate = activityReportPeriod === "monthly"
      ? (dateInput.value.length === 10 ? dateInput.value.slice(0, 7) : today.slice(0, 7))
      : (dateInput.value.length === 7 ? `${dateInput.value}-01` : today);
    renderActivityReports();
  });
  dateInput.addEventListener("change", () => {
    activityReportDate = dateInput.value;
    loadReport();
  });
  exportButton.addEventListener("click", () => {
    if (!reportData?.activities.length) return;
    exportRecords(`${activityReportPeriod}-activity`, reportData.activities.map((item) => ({
      time: new Date(item.createdAt).toLocaleString(),
      user: item.userName,
      action: item.action,
      module: item.module,
      subject: item.subject,
    })));
  });

  async function loadReport() {
    if (!dateInput.value) return;
    activityReportDate = dateInput.value;
    reportContent.innerHTML = `<div class="empty-state">Loading activity report…</div>`;
    exportButton.disabled = true;
    try {
      const query = new URLSearchParams({ period: activityReportPeriod, date: activityReportDate });
      reportData = await apiFetch(`/api/reports/activity?${query}`);
      const maxBucket = Math.max(...reportData.trend.map((item) => item.count), 1);
      const actionLabel = (action) => ({
        "record.created": "Created record",
        "record.updated": "Updated record",
        "record.deleted": "Deleted record",
        "user.created": "Created user",
        "user.updated": "Updated user",
        "user.modules_updated": "Changed user access",
        "user.deleted": "Deleted user",
        "auth.login": "Signed in",
        "auth.logout": "Signed out",
        "auth.password_reset": "Reset password",
      })[action] || action.replaceAll(".", " ");
      reportContent.innerHTML = `<div class="activity-report-summary" aria-label="Activity summary">
          <article class="metric-card"><span class="metric-top">Total activities</span><span class="metric-value">${reportData.totalActivities}</span><span class="metric-foot">${escapeHtml(reportData.start)}${reportData.period === "monthly" ? ` – ${escapeHtml(reportData.end)}` : ""}</span></article>
          <article class="metric-card"><span class="metric-top">Records created</span><span class="metric-value">${reportData.created}</span><span class="metric-foot">In selected period</span></article>
          <article class="metric-card"><span class="metric-top">Records updated</span><span class="metric-value">${reportData.updated}</span><span class="metric-foot">In selected period</span></article>
          <article class="metric-card"><span class="metric-top">Records deleted</span><span class="metric-value">${reportData.deleted}</span><span class="metric-foot">In selected period</span></article>
          <article class="metric-card"><span class="metric-top">User &amp; sign-in events</span><span class="metric-value">${reportData.userEvents}</span><span class="metric-foot">In selected period</span></article>
        </div>
        <article class="activity-report-trend"><div class="panel-heading"><div><h2>Activity by ${reportData.period === "daily" ? "hour" : "day"}</h2><p>${reportData.totalActivities} recorded event${reportData.totalActivities === 1 ? "" : "s"}</p></div></div>
          <div class="activity-report-bars">${reportData.trend.map((item) => `<div class="activity-report-bar-column" title="${escapeHtml(item.label)}: ${item.count} activities"><span>${item.count || ""}</span><div><i style="height:${item.count ? Math.max(item.count / maxBucket * 100, 4) : 0}%"></i></div><small>${escapeHtml(reportData.period === "daily" ? item.label.slice(0, 2) : item.label.slice(-2))}</small></div>`).join("")}</div>
        </article>
        <article class="activity-report-events"><div class="panel-heading"><div><h2>Activity log</h2><p>${reportData.activities.length} shown${reportData.totalActivities > reportData.activities.length ? ` · latest 500 of ${reportData.totalActivities}` : ""}</p></div></div>
          <div class="table-scroll"><table class="data-table"><thead><tr><th>Date &amp; time</th><th>User</th><th>Activity</th><th>Module</th><th>Record / user</th></tr></thead><tbody>${reportData.activities.length ? reportData.activities.map((item) => `<tr><td>${escapeHtml(new Date(item.createdAt).toLocaleString())}</td><td>${escapeHtml(item.userName)}</td><td>${escapeHtml(actionLabel(item.action))}</td><td>${escapeHtml(item.module)}</td><td>${escapeHtml(item.subject)}</td></tr>`).join("") : `<tr><td class="table-empty" colspan="5">No activity recorded for this period.</td></tr>`}</tbody></table></div>
        </article>`;
      exportButton.disabled = reportData.activities.length === 0;
    } catch (error) {
      reportData = null;
      reportContent.innerHTML = `<div class="empty-state"><strong>Unable to load activity report</strong>${escapeHtml(error.message)}</div>`;
    }
  }
  await loadReport();
}
function renderModule(name) {
  if (name === "User & Access Management" && workspaceUser?.role !== "Administrator") {
    showToast("Only an administrator can manage system users.");
    navigate("Dashboard");
    return;
  }
  const module = getModule(name);
  if (!module) return renderUtilityPage(name);
  if (name === "ZIMRA Fiscalisation") return renderZimra();
  if (name === "Reports") return renderActivityReports();
  if (name === "User & Access Management") return renderUserManagement();
  if (name === "Point of Sale") return renderPointOfSale();
  if (name === "Inventory") return renderInventory();
  currentSearch = "";
  const records = moduleRecords(name);
  const isOptional = optionalModules.includes(module);
  const extras = isOptional && !records.length ? `<section class="module-cards"><article class="module-card"><span class="metric-icon purple">${icon(module.icon)}</span><strong>Ready to get started</strong><span>Records for this module are saved in your local SQLite workspace.</span></article><article class="module-card"><span class="metric-icon green">${icon("check")}</span><strong>No records yet</strong><span>Create your first record when you are ready.</span></article><article class="module-card"><span class="metric-icon blue">${icon("file")}</span><strong>Export any time</strong><span>Download your saved records as a CSV file.</span></article></section>` : "";
  pageContent.innerHTML = `<div class="page-heading"><div><span class="eyebrow">${isOptional ? "CONNECTED MODULE" : "BUSINESS"}</span><h1>${name}</h1><p>${module.description}</p></div><div class="heading-actions"><button class="button" id="module-export">${icon("file")} Export</button><button class="button button-primary" id="module-create">${icon("plus")} ${module.primary}</button></div></div>${extras}${renderTable(name, records)}`;
  document.getElementById("module-create").addEventListener("click", () => openRecordDialog(name, module.primary));
  document.getElementById("module-export").addEventListener("click", () => exportRecords(name, records));
  bindTableEvents(name, records);
}
async function renderPointOfSale() {
  const dependencies = ["Products", "Inventory", "Sales", "Invoicing"];
  const missing = dependencies.filter((name) => workspaceUser?.role !== "Administrator" && !workspaceUser?.modules?.includes(name));
  if (missing.length) {
    pageContent.innerHTML = `<div class="page-heading"><div><span class="eyebrow">CONNECTED MODULE</span><h1>Point of Sale</h1><p>Checkout updates stock, sales, and invoices as one transaction.</p></div></div><article class="panel empty-state"><strong>More module access is required</strong>Ask an administrator to assign ${escapeHtml(missing.join(", "))} so sales can update inventory and create invoices.</article>`;
    return;
  }
  const products = moduleRecords("Products").filter((product) =>
    readProductStock(product) !== null && parseAmount(product.price) >= 0 &&
    (product.type || "Product").toLowerCase() === "product");
  pageContent.innerHTML = `<div class="page-heading"><div><span class="eyebrow">CONNECTED MODULE</span><h1>Point of Sale</h1><p>Check out customers, print receipts, and keep product stock, sales, and invoices in sync.</p></div><div class="heading-actions"><button class="button button-primary" data-page="Products">${icon("plus")} Add product</button></div></div>
    <div class="pos-layout"><section class="panel pos-catalog"><div class="panel-heading"><div><h2>Product catalog</h2><p>Select items available in the register currency.</p></div><label class="period-control currency-control"><span>Currency</span><select id="pos-currency" aria-label="Point of Sale currency">${currencyOptions.map(([code, label]) => `<option value="${code}"${posCurrency === code ? " selected" : ""}>${label}</option>`).join("")}</select></label></div>
      <div class="pos-product-grid">${products.filter((product) => (product.currency || "USD") === posCurrency).map((product) => `<article class="pos-product-card"><div class="pos-product-card-top"><span class="metric-icon purple">${icon("box")}</span><span class="${readProductStock(product) > 0 ? "pos-stock-available" : "pos-stock-empty"}">${readProductStock(product)} in stock</span></div><strong>${escapeHtml(product.name)}</strong><span>${escapeHtml(product.sku || "No SKU")}</span><div class="pos-product-card-bottom"><b>${escapeHtml(formatCurrency(parseAmount(product.price), posCurrency))}</b><button type="button" class="button button-primary" data-pos-add="${product.id}"${readProductStock(product) <= 0 ? " disabled" : ""}>Add</button></div></article>`).join("") || `<div class="empty-state pos-empty"><strong>${products.length ? "No products in this currency" : "Add products to start selling"}</strong>${products.length ? "Choose another currency or update a product price." : "Create a product with a price and opening stock, or receive stock in Inventory."}<button class="button button-primary" data-page="Products">${icon("plus")} Add product</button></div>`}</div>
    </section>
    <aside class="panel pos-checkout"><div class="panel-heading"><div><h2>Current sale</h2><p>${posCart.length} item type${posCart.length === 1 ? "" : "s"}</p></div><button type="button" class="row-action" id="pos-clear" ${posCart.length ? "" : "disabled"}>Clear</button></div>
      <div class="pos-cart-items">${posCart.length ? posCart.map((item) => `<div class="pos-cart-item"><div><strong>${escapeHtml(item.name)}</strong><span>${escapeHtml(formatCurrency(item.unitPrice, posCurrency))} each · ${item.stock} in stock</span></div><label class="pos-quantity"><span class="sr-only">Quantity of ${escapeHtml(item.name)}</span><input type="number" min="1" max="${item.stock}" step="1" value="${item.quantity}" data-pos-quantity="${item.productId}" /></label><button type="button" class="row-action row-action-delete" data-pos-remove="${item.productId}" aria-label="Remove ${escapeHtml(item.name)}">×</button></div>`).join("") : `<div class="pos-cart-empty">Your cart is empty. Add a product to begin.</div>`}</div>
      <form id="pos-checkout-form" class="pos-checkout-form"><label class="form-field"><span>Customer</span><input name="customer" maxlength="200" placeholder="Walk-in customer" required /></label><label class="form-field"><span>Payment method</span><select name="paymentMethod"><option>Cash</option><option>Card</option><option>Mobile money</option><option>Other</option></select></label><div class="pos-total"><span>Total</span><strong>${escapeHtml(formatCurrency(posCart.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0), posCurrency))}</strong></div><button type="submit" class="button button-primary pos-checkout-button"${posCart.length ? "" : " disabled"}>${icon("receipt")} Complete sale &amp; print receipt</button></form>
    </aside></div>
    <section class="panel pos-sales-history"><div class="panel-heading"><div><h2>Recent sales &amp; returns</h2><p>Return items to add their quantities back into stock.</p></div></div><div id="pos-sales-list"><div class="empty-state">Loading recent sales…</div></div></section>`;
  bindPageButtons();
  document.getElementById("pos-currency").addEventListener("change", (event) => {
    posCurrency = event.target.value;
    posCart = posCart.filter((item) => item.currency === posCurrency);
    renderPointOfSale();
  });
  pageContent.querySelectorAll("[data-pos-add]").forEach((button) => button.addEventListener("click", () => {
    const product = products.find((item) => String(item.id) === button.dataset.posAdd);
    if (!product) return;
    const existing = posCart.find((item) => item.productId === product.id);
    if (existing) {
      if (existing.quantity >= readProductStock(product)) return showToast(`Only ${product.stock} units of ${product.name} are in stock.`);
      existing.quantity += 1;
    } else {
      posCart.push({ productId: product.id, name: product.name, sku: product.sku || "", quantity: 1, unitPrice: parseAmount(product.price), stock: readProductStock(product), currency: posCurrency });
    }
    renderPointOfSale();
  }));
  document.getElementById("pos-clear").addEventListener("click", () => { posCart = []; renderPointOfSale(); });
  pageContent.querySelectorAll("[data-pos-remove]").forEach((button) => button.addEventListener("click", () => {
    posCart = posCart.filter((item) => String(item.productId) !== button.dataset.posRemove);
    renderPointOfSale();
  }));
  pageContent.querySelectorAll("[data-pos-quantity]").forEach((input) => input.addEventListener("change", () => {
    const item = posCart.find((entry) => String(entry.productId) === input.dataset.posQuantity);
    const quantity = Number(input.value);
    if (!item || !Number.isInteger(quantity) || quantity < 1 || quantity > item.stock) {
      showToast(`Enter a whole quantity from 1 to ${item?.stock || 0}.`);
      return renderPointOfSale();
    }
    item.quantity = quantity;
    renderPointOfSale();
  }));
  document.getElementById("pos-checkout-form").addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!posCart.length) return;
    const printWindow = window.open("about:blank", "_blank");
    try {
      const formData = new FormData(event.currentTarget);
      const receipt = await apiFetch("/api/pos/checkout", {
        method: "POST",
        body: JSON.stringify({
          customer: formData.get("customer"),
          paymentMethod: formData.get("paymentMethod"),
          currency: posCurrency,
          items: posCart.map(({ productId, quantity }) => ({ productId, quantity }))
        })
      });
      posCart = [];
      await loadWorkspaceRecords();
      const sales = await apiFetch("/api/pos/sales");
      renderPointOfSale();
      renderPosSales(sales);
      await refreshDashboard();
      if (printWindow) writePrintDocument(printWindow, "receipt", renderReceiptPrint(receipt));
      showToast(printWindow ? "Sale completed. Stock and invoice have been updated." : "Sale completed. Use Print receipt in recent sales if the print window was blocked.");
    } catch (error) {
      printWindow?.close();
      showToast(error.message || "Unable to complete sale.");
    }
  });
  try {
    renderPosSales(await apiFetch("/api/pos/sales"));
  } catch (error) {
    document.getElementById("pos-sales-list").innerHTML = `<div class="empty-state"><strong>Unable to load sales history</strong>${escapeHtml(error.message)}</div>`;
  }
}
function renderPosSales(sales) {
  const target = document.getElementById("pos-sales-list");
  if (!target) return;
  target.innerHTML = sales.length ? `<div class="pos-sales-list">${sales.map((sale) => `<article class="pos-sale-card"><div class="pos-sale-heading"><div><strong>${escapeHtml(sale.name)}</strong><span>${escapeHtml(sale.customer)} · ${escapeHtml(new Date(sale.createdAt).toLocaleString())}</span></div><div><b>${escapeHtml(formatCurrency(sale.total, sale.currency))}</b><span class="status-pill ${statusClass(sale.status)}">${escapeHtml(sale.status)}</span><button type="button" class="button pos-return-button" data-print-sale="${sale.id}">${icon("receipt")} Print receipt</button></div></div><div class="pos-sale-items">${sale.items.map((item) => `<div class="pos-sale-item"><span>${escapeHtml(item.name)} · ${item.quantity} sold, ${item.returnedQuantity} returned</span>${item.quantity > item.returnedQuantity ? `<button type="button" class="button pos-return-button" data-return-sale="${sale.id}" data-return-product="${item.productId}" data-return-max="${item.quantity - item.returnedQuantity}">Return item</button>` : `<span class="pos-returned-label">Fully returned</span>`}</div>`).join("")}</div></article>`).join("")}</div>` : `<div class="empty-state">No POS sales have been recorded yet.</div>`;
  target.querySelectorAll("[data-print-sale]").forEach((button) => button.addEventListener("click", () => {
    const sale = sales.find((item) => String(item.id) === button.dataset.printSale);
    if (sale) printSavedReceipt(sale);
  }));
  target.querySelectorAll("[data-return-sale]").forEach((button) => button.addEventListener("click", async () => {
    const max = Number(button.dataset.returnMax);
    const quantity = Number(window.prompt(`How many units should be returned? (1–${max})`, "1"));
    if (!Number.isInteger(quantity) || quantity < 1 || quantity > max) {
      if (quantity) showToast(`Enter a whole quantity from 1 to ${max}.`);
      return;
    }
    try {
      await apiFetch("/api/pos/return", {
        method: "POST",
        body: JSON.stringify({ saleId: Number(button.dataset.returnSale), items: [{ productId: Number(button.dataset.returnProduct), quantity }] })
      });
      await loadWorkspaceRecords();
      renderPointOfSale();
      await refreshDashboard();
      showToast(`${quantity} unit${quantity === 1 ? "" : "s"} returned to stock.`);
    } catch (error) {
      showToast(error.message || "Unable to process this return.");
    }
  }));
}
function printSavedReceipt(sale) {
  const printWindow = window.open("about:blank", "_blank");
  if (!printWindow) return showToast("Allow pop-ups to print this receipt.");
  const receipt = {
    ...sale,
    total: sale.grossTotal ?? sale.total,
    issued: sale.issued || new Date(sale.createdAt).toLocaleString()
  };
  writePrintDocument(printWindow, `Receipt ${sale.name}`, renderReceiptPrint(receipt));
}
function renderReceiptPrint(receipt) {
  const rows = receipt.items.map((item) => `<tr><td>${escapeHtml(item.name)}${item.sku ? `<small>${escapeHtml(item.sku)}</small>` : ""}</td><td>${item.quantity}</td><td>${escapeHtml(formatCurrency(item.unitPrice, receipt.currency))}</td><td>${escapeHtml(formatCurrency(item.unitPrice * item.quantity, receipt.currency))}</td></tr>`).join("");
  return `<main class="print-document receipt-print"><header class="print-brand"><span class="print-brand-mark">EB</span><div><h1>Easy Business</h1><p>Sales receipt</p></div><strong>PAID</strong></header><section class="print-document-meta"><div><span>Receipt</span><strong>${escapeHtml(receipt.name)}</strong></div><div><span>Invoice number</span><strong>${escapeHtml(receipt.invoiceNumber)}</strong></div><div><span>Date</span><strong>${escapeHtml(receipt.issued)}</strong></div><div><span>Cashier</span><strong>${escapeHtml(receipt.maker)}</strong></div><div><span>Customer</span><strong>${escapeHtml(receipt.customer)}</strong></div><div><span>Payment</span><strong>${escapeHtml(receipt.paymentMethod)}</strong></div></section><table class="print-items"><thead><tr><th>Item</th><th>Qty</th><th>Unit price</th><th>Total</th></tr></thead><tbody>${rows}</tbody></table><section class="print-total"><span>Total paid</span><strong>${escapeHtml(formatCurrency(receipt.total, receipt.currency))}</strong></section><footer class="print-thanks">Thank you for your business.</footer></main>`;
}
function printInvoice(record) {
  let items = [];
  if (record.itemDetails) {
    try {
      const parsed = JSON.parse(record.itemDetails);
      if (!Array.isArray(parsed)) throw new TypeError("Invoice item details must be a list.");
      items = parsed;
    } catch (error) {
      console.error("Unable to read invoice line items.", error);
      showToast("Invoice line details could not be read. The invoice total is still available.");
    }
  }
  if (!items.length) items = [{
    name: record.description || record.itemSummary || record.detail || "Services",
    quantity: 1,
    unitPrice: parseAmount(record.amount)
  }];
  const subtotal = parseAmount(record.amount);
  const tax = parseAmount(record.taxAmount);
  const total = record.total === undefined ? subtotal + tax : parseAmount(record.total);
  const rows = items.map((item) => `<tr><td>${escapeHtml(item.name || "Item")}${item.sku ? `<small>${escapeHtml(item.sku)}</small>` : ""}</td><td>${escapeHtml(String(item.quantity || 1))}</td><td>${escapeHtml(formatCurrency(parseAmount(item.unitPrice), record.currency || "USD"))}</td><td>${escapeHtml(formatCurrency(parseAmount(item.unitPrice) * Number(item.quantity || 1), record.currency || "USD"))}</td></tr>`).join("");
  const html = `<main class="print-document invoice-print"><header class="print-brand"><span class="print-brand-mark">EB</span><div><h1>Easy Business</h1><p>INVOICE</p></div><strong>${escapeHtml(record.status || "DRAFT").toUpperCase()}</strong></header><section class="print-document-meta"><div><span>Invoice number</span><strong>${escapeHtml(record.name)}</strong></div><div><span>Invoice maker</span><strong>${escapeHtml(record.maker || "—")}</strong></div><div><span>Issue date</span><strong>${escapeHtml(record.issued || "—")}</strong></div><div><span>Due date</span><strong>${escapeHtml(record.due || "—")}</strong></div><div><span>Bill to</span><strong>${escapeHtml(record.detail || "—")}</strong></div><div><span>Currency</span><strong>${escapeHtml(record.currency || "USD")}</strong></div></section><table class="print-items"><thead><tr><th>Item / service</th><th>Qty</th><th>Unit price</th><th>Amount</th></tr></thead><tbody>${rows}</tbody></table><section class="print-totals"><div><span>Subtotal</span><strong>${escapeHtml(formatCurrency(subtotal, record.currency || "USD"))}</strong></div><div><span>Tax</span><strong>${escapeHtml(formatCurrency(tax, record.currency || "USD"))}</strong></div><div class="print-grand-total"><span>Total due</span><strong>${escapeHtml(formatCurrency(total, record.currency || "USD"))}</strong></div></section><footer class="print-thanks">Thank you for your business.</footer></main>`;
  const printWindow = window.open("about:blank", "_blank");
  if (!printWindow) return showToast("Allow pop-ups to print this invoice.");
  writePrintDocument(printWindow, `Invoice ${record.name}`, html);
}
function writePrintDocument(printWindow, title, content) {
  printWindow.document.open();
  printWindow.document.write(`<!doctype html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${escapeHtml(title)}</title><link rel="stylesheet" href="${window.location.origin}/styles.css"></head><body>${content}</body></html>`);
  printWindow.document.close();
  printWindow.focus();
  window.setTimeout(() => printWindow.print(), 250);
}
async function renderInventory() {
  const products = moduleRecords("Products").filter((item) => item.type !== "Service");
  const movements = moduleRecords("Inventory");
  const productOptions = products.map((product) => `<option value="${product.id}">${escapeHtml(product.name)} · ${escapeHtml(String(product.stock ?? "Not tracked"))} in stock</option>`).join("");
  pageContent.innerHTML = `<div class="page-heading"><div><span class="eyebrow">CONNECTED MODULE</span><h1>Inventory</h1><p>Receive stock, issue adjustments, and review stock changes from sales and returns.</p></div><div class="heading-actions"><button class="button button-primary" data-page="Products">${icon("plus")} Add a product</button></div></div>
    <div class="inventory-layout">    <section class="panel inventory-adjust-panel"><div class="panel-heading"><div><h2>Update stock</h2><p>Receipts increase stock; issues cannot take it below zero.</p></div></div>${products.length ? `<form id="inventory-adjust-form" class="inventory-adjust-form"><label class="form-field"><span>Product</span><select name="productId" required>${productOptions}</select></label><label class="form-field"><span>Action</span><select name="direction"><option value="Receive">Receive stock</option><option value="Issue">Issue stock</option></select></label><label class="form-field"><span>Quantity</span><input name="quantity" type="number" min="1" step="1" required /></label><label class="form-field"><span>Note</span><input name="note" maxlength="200" placeholder="Purchase or adjustment reference" /></label><button class="button button-primary" type="submit">${icon("check")} Save stock movement</button></form>` : `<div class="empty-state"><strong>No products to stock yet</strong>Add a product first, then receive its opening stock here.</div>`}</section>
      <section class="panel inventory-level-panel"><div class="panel-heading"><div><h2>Current stock</h2><p>Live product balances, updated by sales and returns.</p></div></div><div class="inventory-level-list">${products.length ? products.map((product) => `<div class="inventory-level-row"><span class="metric-icon purple">${icon("box")}</span><div><strong>${escapeHtml(product.name)}</strong><span>${escapeHtml(product.sku || "No SKU")}</span></div><b>${escapeHtml(String(product.stock ?? "Not tracked"))}</b></div>`).join("") : `<div class="empty-state">Add products to begin tracking stock.</div>`}</div></section></div>
    <section class="panel inventory-movements"><div class="panel-heading"><div><h2>Stock movements</h2><p>Manual adjustments, completed sales, and returns.</p></div></div><div class="table-scroll"><table class="data-table"><thead><tr><th>Product</th><th>Movement</th><th>Quantity</th><th>Balance after</th><th>Details</th><th>Date</th></tr></thead><tbody>${movements.length ? movements.map((item) => `<tr><td>${escapeHtml(item.name)}</td><td><span class="status-pill ${item.movement === "Return" || item.movement === "Receive" ? "status-green" : "status-orange"}">${escapeHtml(item.movement || "Adjustment")}</span></td><td>${escapeHtml(String(item.quantity ?? "—"))}</td><td>${escapeHtml(String(item.stockAfter ?? "—"))}</td><td>${escapeHtml(item.detail || "")}</td><td>${escapeHtml(item.date || "")}</td></tr>`).join("") : `<tr><td class="table-empty" colspan="6">No stock movements recorded yet.</td></tr>`}</tbody></table></div></section>`;
  bindPageButtons();
  const form = document.getElementById("inventory-adjust-form");
  if (form) form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const values = new FormData(form);
    try {
      await apiFetch("/api/inventory/adjust", {
        method: "POST",
        body: JSON.stringify({ productId: Number(values.get("productId")), direction: values.get("direction"), quantity: Number(values.get("quantity")), note: values.get("note") })
      });
      await loadWorkspaceRecords();
      renderInventory();
      showToast("Stock balance updated.");
    } catch (error) {
      showToast(error.message || "Unable to update stock.");
    }
  });
}
async function renderUserManagement() {
  let users;
  try {
    users = await apiFetch("/api/users");
  } catch (error) {
    showPageError(error.message);
    return;
  }
  const moduleChoices = renderModuleChoices([]);
  pageContent.innerHTML = `<div class="page-heading"><div><span class="eyebrow">ADMINISTRATOR ONLY</span><h1>User &amp; Access Management</h1><p>Assign each staff member only the business modules they need. You can update access at any time.</p></div></div>
    <article class="panel admin-user-panel"><div class="panel-heading"><div><h2>Add a system user</h2><p>New users start with no business-module access. Select the modules they need below.</p></div></div>
      <form class="admin-user-form" id="create-user-form">
        <label class="form-field"><span>Full name</span><input name="displayName" autocomplete="name" maxlength="80" required /></label>
        <label class="form-field"><span>Work email</span><input name="email" type="email" autocomplete="email" maxlength="254" required /></label>
        <label class="form-field"><span>Company role / job title</span><input name="companyRole" autocomplete="organization-title" maxlength="80" placeholder="e.g. Sales Manager" required /></label>
        <label class="form-field"><span>Initial password</span><input name="password" type="password" autocomplete="new-password" minlength="12" maxlength="256" required /></label>
        <fieldset class="module-access-field"><legend>Allowed modules</legend>${moduleChoices}</fieldset>
        <button class="button button-primary" type="submit">${icon("plus")} Add user</button>
      </form>
    </article>
    <article class="panel admin-user-panel" id="system-users-panel"><div class="panel-heading"><div><h2>System users</h2><p>${users.length} account${users.length === 1 ? "" : "s"} · company role describes their position; module access controls which business data they can use.</p></div></div>
      <div class="table-scroll"><table class="data-table"><thead><tr><th>Name</th><th>Email</th><th>Company role / job title</th><th>System access</th><th>Allowed modules</th><th>Access settings</th><th>Actions</th></tr></thead><tbody>${users.map((user) => `<tr><td><div class="cell-primary"><span class="table-avatar">${escapeHtml(initials(user.displayName))}</span>${escapeHtml(user.displayName)}</div></td><td>${escapeHtml(user.email)}</td><td>${escapeHtml(user.companyRole || "Staff")}</td><td><span class="status-pill ${user.role === "Administrator" ? "status-purple" : "status-blue"}">${escapeHtml(user.role)}</span></td><td>${user.role === "Administrator" ? "All modules" : user.modules.length ? escapeHtml(user.modules.join(", ")) : "No business modules"}</td><td>${user.role === "Administrator" ? "Full access" : `<button class="row-action" type="button" data-manage-modules="${user.id}">Manage modules</button>`}</td><td>${user.role === "User" ? `<button class="row-action row-action-delete" type="button" data-delete-user="${user.id}">Delete user</button>` : "Protected"}</td></tr>`).join("")}</tbody></table></div>
      <div id="module-access-editor" hidden></div>
    </article>`;
  document.getElementById("create-user-form").addEventListener("submit", async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const button = form.querySelector('button[type="submit"]');
    const values = new FormData(form);
    button.disabled = true;
    try {
      await apiFetch("/api/users", {
        method: "POST",
        body: JSON.stringify({
          displayName: values.get("displayName"),
          email: values.get("email"),
          companyRole: values.get("companyRole"),
          password: values.get("password"),
          modules: [...form.querySelectorAll('input[name="modules"]:checked')].map((input) => input.value),
        }),
      });
      await renderUserManagement();
      showToast("System user added");
    } catch (error) {
      showToast(error.message || "Unable to add user.");
    } finally {
      button.disabled = false;
    }
  });
  pageContent.querySelectorAll("[data-manage-modules]").forEach((button) => {
    button.addEventListener("click", () => {
      const user = users.find((item) => String(item.id) === button.dataset.manageModules);
      if (user) renderModuleAccessEditor(user);
    });
  });
  pageContent.querySelectorAll("[data-delete-user]").forEach((button) => {
    button.addEventListener("click", async () => {
      const user = users.find((item) => String(item.id) === button.dataset.deleteUser);
      if (!user || !window.confirm(`Delete ${user.displayName} (${user.email})? Their account and records they own will be permanently deleted.`)) return;
      button.disabled = true;
      try {
        await apiFetch(`/api/users/${user.id}`, { method: "DELETE" });
        await renderUserManagement();
        showToast("System user deleted");
      } catch (error) {
        button.disabled = false;
        showToast(error.message || "Unable to delete user.");
      }
    });
  });
}
function renderModuleChoices(selectedModules) {
  const selected = new Set(selectedModules);
  return `<div class="module-access-options">${assignableModules.map((module) => `<label class="module-access-option"><input type="checkbox" name="modules" value="${escapeHtml(module.name)}"${selected.has(module.name) ? " checked" : ""} /><span>${escapeHtml(module.name)}</span></label>`).join("")}</div>`;
}
function renderModuleAccessEditor(user) {
  const editor = document.getElementById("module-access-editor");
  editor.hidden = false;
  editor.innerHTML = `<form class="module-access-editor" id="module-access-form"><div><h3>Module access for ${escapeHtml(user.displayName)}</h3><p>Select only the modules this user is permitted to view and update.</p></div>${renderModuleChoices(user.modules || [])}<div class="admin-dashboard-actions"><button class="button button-primary" type="submit">Save module access</button><button class="button" id="cancel-module-access" type="button">Cancel</button></div></form>`;
  editor.scrollIntoView({ behavior: "smooth", block: "nearest" });
  document.getElementById("cancel-module-access").addEventListener("click", () => { editor.hidden = true; editor.replaceChildren(); });
  document.getElementById("module-access-form").addEventListener("submit", async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const saveButton = form.querySelector('button[type="submit"]');
    const modules = [...form.querySelectorAll('input[name="modules"]:checked')].map((input) => input.value);
    saveButton.disabled = true;
    try {
      await apiFetch(`/api/users/${user.id}/modules`, { method: "PUT", body: JSON.stringify({ modules }) });
      await renderUserManagement();
      showToast("User module access updated");
    } catch (error) {
      showToast(error.message || "Unable to update module access.");
    } finally {
      saveButton.disabled = false;
    }
  });
}
async function renderZimra() {
  let status;
  let submissions;
  try {
    [status, submissions] = await Promise.all([
      apiFetch("/api/integrations/zimra"),
      apiFetch("/api/integrations/zimra/submissions")
    ]);
  } catch (error) {
    return showPageError(error.message);
  }
  const checks = [
    ["Official FDMS API endpoint", status.endpointConfigured],
    ["ZIMRA-issued fiscal device certificate", status.deviceCertificateConfigured],
    ["Device registration and sandbox validation", status.deviceIdConfigured],
  ];
  pageContent.innerHTML = `<div class="page-heading"><div><span class="eyebrow">TAX COMPLIANCE</span><h1>ZIMRA Fiscalisation</h1><p>${escapeHtml(getModule("ZIMRA Fiscalisation").description)}</p></div><div class="heading-actions"><button class="button" data-page="Invoicing">${icon("receipt")} View invoices</button></div></div>
    <article class="panel" style="max-width:850px"><div class="panel-heading"><div><h2>FDMS integration readiness</h2><p>Fiscal submissions remain disabled until ZIMRA onboarding is complete.</p></div><span class="status-pill status-orange">Awaiting onboarding</span></div>
    <div class="integration-status"><span class="integration-status-icon">!</span><div><h3>No fiscal data has been sent to ZIMRA</h3><p>${escapeHtml(status.message)}</p><div class="integration-checklist">${checks.map(([label, configured]) => `<span>${label}<strong>${configured ? "Configured" : "Required"}</strong></span>`).join("")}</div></div></div>
    <div class="panel-heading" style="margin-top:24px"><div><h2>Submission history</h2><p>Confirmed FDMS responses will appear here after the official interface is configured.</p></div></div>
    ${submissions.length ? `<div class="activity-list">${submissions.map((item) => `<div class="activity-item"><span class="activity-avatar">${icon("receipt")}</span><div class="activity-content"><strong>Invoice #${escapeHtml(item.invoiceId)}</strong> · ${escapeHtml(item.status)}</div><span class="activity-time">${escapeHtml(new Date(item.createdAt).toLocaleString())}</span></div>`).join("")}</div>` : `<div class="empty-state"><strong>No submissions recorded</strong>Invoices are not automatically fiscalised. Do not treat this workspace as ZIMRA-compliant until onboarding and the approved FDMS integration have been completed.</div>`}
    </article>`;
  bindPageButtons();
}
function showPageError(message) {
  pageContent.innerHTML = `<div class="empty-state"><strong>Unable to load this page</strong>${escapeHtml(message)}</div>`;
}
function renderUtilityPage(name) {
  if (name === "Activity") {
    const records = dashboardSnapshot?.recentActivity || [];
    pageContent.innerHTML = `<div class="page-heading"><div><span class="eyebrow">WORKSPACE</span><h1>Recent activity</h1><p>Updates from across your team and business.</p></div><div class="heading-actions"><button class="button button-primary" data-page="Dashboard">Back to dashboard</button></div></div><article class="panel" style="max-width:800px"><div class="panel-heading"><div><h2>Latest updates</h2><p>Changes made in this workspace.</p></div></div><div class="utility-list">${records.length ? records.map(renderActivity).join("") : `<div class="empty-state"><strong>No activity yet</strong>New records and updates will appear here.</div>`}</div></article>`;
    bindPageButtons();
    return;
  }
  if (name === "Settings") {
    renderSettings();
    return;
  }
  pageContent.innerHTML = `<div class="page-heading"><div><span class="eyebrow">EASY BUSINESS</span><h1>${name}</h1><p>Shortcuts to help you move around Easy Business faster.</p></div></div><article class="panel" style="max-width:700px"><div class="panel-heading"><div><h2>Quick reference</h2><p>A few useful shortcuts to keep things moving.</p></div></div><div class="shortcut-list"><span>Search anything <kbd>⌘ K</kbd></span><span>Create a new record <kbd>⌘ N</kbd></span><span>Open notifications <kbd>⌘ I</kbd></span></div></article>`;
}
function renderSettings() {
  const canAccessModule = (module) => workspaceUser?.role === "Administrator" || workspaceUser?.modules?.includes(module);
  const links = [
    ["Point of Sale", "Open register", canAccessModule("Point of Sale")],
    ["Products", "Manage products", canAccessModule("Products")],
    ["Inventory", "Manage stock", canAccessModule("Inventory")],
    ["Invoicing", "Manage invoices", canAccessModule("Invoicing")],
    ["ZIMRA Fiscalisation", "Integration status", canAccessModule("ZIMRA Fiscalisation")],
    ["User & Access Management", "Manage team", workspaceUser?.role === "Administrator"],
  ].filter(([, , available]) => available);
  pageContent.innerHTML = `<div class="page-heading"><div><span class="eyebrow">WORKSPACE PREFERENCES</span><h1>Settings</h1><p>Set your local workspace display and choose defaults for dashboards and checkout.</p></div><div class="heading-actions"><span class="settings-saved-state" id="settings-saved-state" role="status" aria-live="polite"></span></div></div>
    ${settingsStorageWarning ? `<div class="settings-warning" role="alert">${escapeHtml(settingsStorageWarning)}</div>` : ""}
    <form class="settings-layout" id="settings-form">
      <section class="panel settings-card"><div class="settings-card-heading"><span class="settings-icon">${icon("grid")}</span><div><h2>Workspace</h2><p>Choose the name shown in this browser. Business records remain in the local database.</p></div></div>
        <label class="form-field settings-field"><span>Workspace display name <small>Saved in this browser</small></span><input name="workspaceName" maxlength="60" value="${escapeHtml(appSettings.workspaceName)}" required /></label>
        <div class="settings-readonly"><span>Signed-in account</span><strong>${escapeHtml(workspaceUser?.displayName || "—")}</strong><span>Work email</span><strong>${escapeHtml(workspaceUser?.email || "—")}</strong></div>
      </section>
      <section class="panel settings-card"><div class="settings-card-heading"><span class="settings-icon">${icon("settings")}</span><div><h2>Business defaults</h2><p>Choose default values; individual records keep their own currency.</p></div></div>
        <label class="form-field settings-field"><span>Default currency</span><select name="defaultCurrency">${currencyOptions.map(([code, label]) => `<option value="${code}"${appSettings.defaultCurrency === code ? " selected" : ""}>${label}</option>`).join("")}</select></label>
        <label class="form-field settings-field"><span>Default dashboard period</span><select name="dashboardPeriod">${["Last 7 days", "Last 30 days", "Last 90 days"].map((period) => `<option${appSettings.dashboardPeriod === period ? " selected" : ""}>${period}</option>`).join("")}</select></label>
        <label class="form-field settings-field"><span>Point of Sale currency</span><select name="posCurrency">${currencyOptions.map(([code, label]) => `<option value="${code}"${appSettings.posCurrency === code ? " selected" : ""}>${label}</option>`).join("")}</select></label>
      </section>
      <section class="panel settings-card"><div class="settings-card-heading"><span class="settings-icon">${icon("monitor")}</span><div><h2>Display</h2><p>Adjust interface text for comfortable reading.</p></div></div>
        <label class="form-field settings-field"><span>Text size</span><select name="fontScale"><option value="standard"${appSettings.fontScale === "standard" ? " selected" : ""}>Standard</option><option value="large"${appSettings.fontScale === "large" ? " selected" : ""}>Large</option></select></label>
        <div class="settings-preview"><strong>Preview</strong><span>Easy Business keeps your workspace clear and easy to read.</span></div>
      </section>
      <section class="panel settings-card"><div class="settings-card-heading"><span class="settings-icon">${icon("check")}</span><div><h2>System status</h2><p>Local app and data storage information.</p></div></div>
        <div class="settings-status-list"><div><span>Application</span><strong class="settings-status-good">Running</strong></div><div><span>Database</span><strong>SQLite on this computer</strong></div><div><span>Network access</span><strong>Local computer only</strong></div><div><span>API connection</span><strong id="settings-api-status">Checking…</strong></div><div><span>AI assistant</span><strong id="settings-ai-status">Checking…</strong></div><div><span>Fiscalisation</span><strong>Not connected</strong></div></div>
      </section>
      <section class="panel settings-card settings-account-card"><div class="settings-card-heading"><span class="settings-icon">${icon("users")}</span><div><h2>Account &amp; connected modules</h2><p>Your access is managed by the workspace administrator.</p></div></div>
        <div class="settings-readonly"><span>Company role</span><strong>${escapeHtml(workspaceUser?.companyRole || "—")}</strong><span>System access</span><strong>${escapeHtml(workspaceUser?.role || "—")}</strong><span>Available modules</span><strong>${workspaceUser?.role === "Administrator" ? "All modules" : `${workspaceUser?.modules?.length || 0} assigned`}</strong></div>
        <div class="settings-quick-links">${links.map(([module, label]) => `<button type="button" class="button settings-module-link" data-page="${escapeHtml(module)}">${icon(getModule(module)?.icon || "file")} ${escapeHtml(label)}</button>`).join("")}</div>
      </section>
      <div class="settings-actions"><button type="button" class="button" id="settings-reset">Restore defaults</button><button type="submit" class="button button-primary">${icon("check")} Save settings</button></div>
    </form>`;
  bindPageButtons();
  document.getElementById("settings-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const values = new FormData(event.currentTarget);
    const next = {
      workspaceName: String(values.get("workspaceName") || "").trim(),
      defaultCurrency: String(values.get("defaultCurrency") || ""),
      dashboardPeriod: String(values.get("dashboardPeriod") || ""),
      posCurrency: String(values.get("posCurrency") || ""),
      fontScale: String(values.get("fontScale") || ""),
    };
    if (!next.workspaceName || next.workspaceName.length > 60 ||
        !currencyOptions.some(([code]) => code === next.defaultCurrency) ||
        !currencyOptions.some(([code]) => code === next.posCurrency) ||
        !["Last 7 days", "Last 30 days", "Last 90 days"].includes(next.dashboardPeriod) ||
        !["standard", "large"].includes(next.fontScale)) {
      showToast("Check the workspace name and settings, then try again.");
      return;
    }
    try {
      localStorage.setItem(getSettingsStorageKey(), JSON.stringify(next));
    } catch (error) {
      console.error("Unable to save workspace settings to this browser.", error);
      showToast("Settings could not be saved in this browser. Check browser storage permissions and try again.");
      return;
    }
    Object.assign(appSettings, next);
    dashboardCurrency = next.defaultCurrency;
    dashboardPeriod = next.dashboardPeriod;
    posCurrency = next.posCurrency;
    applySettingsToShell();
    document.getElementById("settings-saved-state").textContent = "Saved";
    settingsStorageWarning = "";
    document.querySelector(".settings-warning")?.remove();
    showToast("Settings saved in this browser.");
  });
  document.getElementById("settings-reset").addEventListener("click", () => {
    Object.assign(appSettings, {
      workspaceName: "Easy Business",
      defaultCurrency: "USD",
      dashboardPeriod: "Last 30 days",
      posCurrency: "USD",
      fontScale: "standard",
    });
    const form = document.getElementById("settings-form");
    form.elements.namedItem("workspaceName").value = appSettings.workspaceName;
    form.elements.namedItem("defaultCurrency").value = appSettings.defaultCurrency;
    form.elements.namedItem("dashboardPeriod").value = appSettings.dashboardPeriod;
    form.elements.namedItem("posCurrency").value = appSettings.posCurrency;
    form.elements.namedItem("fontScale").value = appSettings.fontScale;
    dashboardCurrency = appSettings.defaultCurrency;
    dashboardPeriod = appSettings.dashboardPeriod;
    posCurrency = appSettings.posCurrency;
    try {
      localStorage.setItem(getSettingsStorageKey(), JSON.stringify(appSettings));
    } catch (error) {
      console.error("Unable to restore workspace defaults in this browser.", error);
      showToast("Defaults were applied for this session but could not be saved in this browser.");
      applySettingsToShell();
      return;
    }
    applySettingsToShell();
    document.getElementById("settings-saved-state").textContent = "Defaults restored";
    settingsStorageWarning = "";
    document.querySelector(".settings-warning")?.remove();
    showToast("Default settings restored.");
  });
  apiFetch("/api/health").then((status) => {
    const element = document.getElementById("settings-api-status");
    if (!element) return;
    element.textContent = status.status === "ok" ? "Connected" : "Unavailable";
    element.classList.toggle("settings-status-good", status.status === "ok");
  }).catch((error) => {
    const element = document.getElementById("settings-api-status");
    if (element) {
      element.textContent = "Unavailable";
      element.classList.remove("settings-status-good");
      element.title = error.message || "Unable to contact the application API.";
    }
  });
  apiFetch("/api/ai/status").then((status) => {
    const element = document.getElementById("settings-ai-status");
    if (!element) return;
    element.textContent = status.status === "ready"
      ? `Ready · ${status.model}`
      : status.status === "model_missing" ? `Model not installed · ${status.model}` : "Ollama not running";
    element.classList.toggle("settings-status-good", status.status === "ready");
    element.title = status.message || "";
  }).catch((error) => {
    const element = document.getElementById("settings-ai-status");
    if (!element) return;
    element.textContent = "Unavailable";
    element.title = error.message || "Unable to check local AI status.";
  });
}
function getSettingsStorageKey() {
  const account = String(workspaceUser?.email || "workspace").trim().toLowerCase();
  return `easybusiness.settings.${encodeURIComponent(account)}`;
}
function loadAppSettings() {
  settingsStorageWarning = "";
  try {
    const stored = localStorage.getItem(getSettingsStorageKey());
    if (stored) {
      const parsed = JSON.parse(stored);
      if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) throw new TypeError("Saved settings must be an object.");
      if (typeof parsed.workspaceName === "string" && parsed.workspaceName.trim() && parsed.workspaceName.length <= 60)
        appSettings.workspaceName = parsed.workspaceName.trim();
      if (currencyOptions.some(([code]) => code === parsed.defaultCurrency)) appSettings.defaultCurrency = parsed.defaultCurrency;
      if (["Last 7 days", "Last 30 days", "Last 90 days"].includes(parsed.dashboardPeriod)) appSettings.dashboardPeriod = parsed.dashboardPeriod;
      if (currencyOptions.some(([code]) => code === parsed.posCurrency)) appSettings.posCurrency = parsed.posCurrency;
      if (["standard", "large"].includes(parsed.fontScale)) appSettings.fontScale = parsed.fontScale;
    }
  } catch (error) {
    settingsStorageWarning = "Saved settings could not be read from this browser. Defaults are active; check browser storage permissions before saving.";
    console.error("Unable to read workspace settings from this browser.", error);
  }
  dashboardCurrency = appSettings.defaultCurrency;
  dashboardPeriod = appSettings.dashboardPeriod;
  posCurrency = appSettings.posCurrency;
  applySettingsToShell();
}
function applySettingsToShell() {
  document.getElementById("workspace-name").textContent = appSettings.workspaceName;
  document.querySelector(".workspace-avatar").textContent = initials(appSettings.workspaceName).slice(0, 1) || "E";
  document.body.dataset.fontScale = appSettings.fontScale;
}
function navigate(name) {
  const module = getModule(name);
  if (module && name !== "User & Access Management" &&
      workspaceUser?.role !== "Administrator" && !workspaceUser?.modules?.includes(name)) {
    showToast("You do not have access to that module. Ask an administrator to update your access.");
    name = "Dashboard";
  }
  if (name === "User & Access Management" && workspaceUser?.role !== "Administrator") {
    showToast("Only an administrator can manage system users.");
    name = "Dashboard";
  }
  currentPage = name;
  document.getElementById("breadcrumb-current").textContent = name === "Dashboard" && workspaceUser?.role === "Administrator" ? "Admin Dashboard" : name;
  document.querySelectorAll(".side-nav .nav-item").forEach((item) => item.classList.toggle("active", item.dataset.page === name));
  document.getElementById("sidebar").classList.remove("open");
  if (name === "Dashboard" && workspaceUser?.role === "Administrator") renderAdminDashboard();
  else if (name === "Dashboard" || name === "Business Dashboard") refreshDashboard();
  else renderModule(name);
}
function bindPageButtons() {
  pageContent.querySelectorAll("[data-page]").forEach((button) => button.addEventListener("click", () => {
    navigate(button.dataset.page);
    if (button.dataset.recordSearch) {
      const search = document.getElementById("record-search");
      if (search) {
        search.value = button.dataset.recordSearch;
        search.dispatchEvent(new Event("input", { bubbles: true }));
      }
    }
  }));
}
function bindTableEvents(moduleName, records) {
  const search = document.getElementById("record-search");
  search.addEventListener("input", () => {
    currentSearch = search.value.trim().toLowerCase();
    const cursorPosition = search.selectionStart;
    const table = pageContent.querySelector(".table-panel");
    const wrapper = document.createElement("div");
    wrapper.innerHTML = renderTable(moduleName, records);
    table.replaceWith(wrapper.firstElementChild);
    const replacement = document.getElementById("record-search");
    replacement.focus();
    replacement.setSelectionRange(cursorPosition, cursorPosition);
    bindTableEvents(moduleName, records);
  });
  document.getElementById("filter-button").addEventListener("click", () => showToast("All records are currently shown"));
  document.getElementById("export-button").addEventListener("click", () => exportRecords(moduleName, records));
  pageContent.querySelectorAll("[data-edit-id]").forEach((button) => button.addEventListener("click", () => {
    const record = records.find((item) => String(item.id) === button.dataset.editId);
    if (record) openRecordDialog(moduleName, `Edit ${moduleName.replace(/s$/, "").toLowerCase()}`, record);
  }));
  pageContent.querySelectorAll("[data-print-id]").forEach((button) => button.addEventListener("click", () => {
    const record = records.find((item) => String(item.id) === button.dataset.printId);
    if (record) printInvoice(record);
  }));
  pageContent.querySelectorAll("[data-delete-id]").forEach((button) => button.addEventListener("click", async () => {
    const record = records.find((item) => String(item.id) === button.dataset.deleteId);
    if (!record || !window.confirm(`Delete “${record.name}”? This cannot be undone.`)) return;
    try {
      await apiFetch(`/api/modules/${encodeURIComponent(moduleName)}/${record.id}`, { method: "DELETE" });
      const module = getModule(moduleName);
      module.records = module.records.filter((item) => item.id !== record.id);
      renderModule(moduleName);
      await refreshDashboard();
      showToast("Record deleted");
    } catch (error) {
      showToast(error.message || "Unable to delete record.");
    }
  }));
}
function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
}
function showToast(message) {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<span class="toast-check">✓</span><span>${escapeHtml(message)}</span>`;
  document.getElementById("toast-region").appendChild(toast);
  window.setTimeout(() => toast.remove(), 3200);
}
function renderAiChatMessages() {
  const container = document.getElementById("ai-chat-messages");
  container.replaceChildren();
  if (!aiChatMessages.length) {
    const welcome = document.createElement("div");
    welcome.className = "ai-chat-welcome";
    welcome.textContent = "Hi! Ask me about your business records, stock, sales, or invoices.";
    container.appendChild(welcome);
  }
  aiChatMessages.forEach((message) => {
    const bubble = document.createElement("div");
    bubble.className = `ai-chat-message ${message.role}`;
    bubble.textContent = message.content;
    container.appendChild(bubble);
  });
  if (aiChatSending) {
    const waiting = document.createElement("div");
    waiting.className = "ai-chat-message assistant ai-chat-thinking";
    waiting.textContent = "Thinking…";
    container.appendChild(waiting);
  }
  container.scrollTop = container.scrollHeight;
}
function resetAiChatSession() {
  aiChatGeneration++;
  aiChatRequestController?.abort();
  aiChatRequestController = null;
  aiChatMessages = [];
  aiChatSending = false;
  document.getElementById("ai-chat-input").value = "";
  document.getElementById("ai-chat-input").disabled = false;
  document.getElementById("ai-chat-send").disabled = false;
  document.getElementById("ai-chat-error").hidden = true;
  renderAiChatMessages();
}
async function loadAiChatStatus() {
  const generation = aiChatGeneration;
  const statusElement = document.getElementById("ai-chat-model-status");
  try {
    const status = await apiFetch("/api/ai/status");
    if (generation !== aiChatGeneration) return;
    const setupMessage = document.getElementById("ai-chat-setup");
    statusElement.textContent = status.status === "ready"
      ? `Ready · ${status.model}`
      : status.status === "model_missing" ? `Model not installed · ${status.model}` : "Ollama not running";
    statusElement.title = status.message;
    statusElement.classList.toggle("ready", status.status === "ready");
    setupMessage.textContent = status.message || "";
    setupMessage.hidden = status.status === "ready";
  } catch (error) {
    if (generation !== aiChatGeneration) return;
    statusElement.textContent = "AI status unavailable";
    statusElement.title = error.message || "Unable to check local AI status.";
    const setupMessage = document.getElementById("ai-chat-setup");
    setupMessage.textContent = error.message || "Unable to check local AI status. Try again.";
    setupMessage.hidden = false;
  }
}
function setAiChatOpen(open) {
  const panel = document.getElementById("ai-chat-panel");
  panel.hidden = !open;
  document.getElementById("ai-chat-launcher").setAttribute("aria-expanded", String(open));
  if (!open) return;
  document.getElementById("ai-chat-input").focus();
  loadAiChatStatus();
}
async function sendAiChatMessage(event) {
  event.preventDefault();
  if (aiChatSending) return;
  const input = document.getElementById("ai-chat-input");
  const content = input.value.trim();
  if (!content) return;

  aiChatMessages.push({ role: "user", content });
  aiChatMessages = aiChatMessages.slice(-24);
  input.value = "";
  document.getElementById("ai-chat-error").hidden = true;
  aiChatSending = true;
  document.getElementById("ai-chat-send").disabled = true;
  input.disabled = true;
  renderAiChatMessages();
  const generation = aiChatGeneration;
  const controller = new AbortController();
  aiChatRequestController = controller;
  const messages = aiChatMessages.slice(-12);
  let totalLength = messages.reduce((total, message) => total + message.content.length, 0);
  while (totalLength > 16000 && messages.length > 1) {
    totalLength -= messages.shift().content.length;
  }
  try {
    const response = await apiFetch("/api/ai/chat", {
      method: "POST",
      body: JSON.stringify({ messages }),
      signal: controller.signal
    });
    if (generation !== aiChatGeneration) return;
    if (typeof response.reply !== "string" || !response.reply.trim())
      throw new Error("The local AI returned an empty reply. Try again.");
    aiChatMessages.push({ role: "assistant", content: response.reply.trim() });
    aiChatMessages = aiChatMessages.slice(-24);
  } catch (error) {
    if (generation !== aiChatGeneration) return;
    const errorElement = document.getElementById("ai-chat-error");
    errorElement.textContent = error.message || "The assistant could not answer. Check Ollama and try again.";
    errorElement.hidden = false;
  } finally {
    if (generation !== aiChatGeneration) return;
    aiChatRequestController = null;
    aiChatSending = false;
    document.getElementById("ai-chat-send").disabled = false;
    input.disabled = false;
    renderAiChatMessages();
    input.focus();
  }
}
async function apiFetch(url, options = {}) {
  const headers = new Headers(options.headers || {});
  if (options.body) headers.set("Content-Type", "application/json");
  if (options.method && !["GET", "HEAD"].includes(options.method.toUpperCase()) && csrfToken) headers.set("X-CSRF-Token", csrfToken);
  const response = await fetch(url, { ...options, headers, credentials: "same-origin" });
  const body = response.status === 204 ? null : await response.json().catch(() => null);
  if (!response.ok) {
    if (response.status === 401 && !url.startsWith("/api/auth/")) showAuth(setupRequired, "Your session expired. Please sign in again.");
    if (response.status === 401 && url.endsWith("/login")) throw new Error("Email or password is incorrect.");
    throw new Error(body?.message || `Request failed (${response.status}).`);
  }
  return body;
}
async function loadWorkspaceRecords() {
  const recordsByModule = await apiFetch("/api/records");
  [...coreModules, ...optionalModules].forEach((module) => {
    const records = recordsByModule[module.name] || [];
    module.records = records.map((record) => ({ ...record.payload, id: record.id, createdAt: record.createdAt, updatedAt: record.updatedAt }));
  });
}
async function refreshDashboard() {
  try {
    const days = { "Last 7 days": 7, "Last 30 days": 30, "Last 90 days": 90 }[dashboardPeriod];
    dashboardSnapshot = await apiFetch(`/api/dashboard?days=${days}&currency=${encodeURIComponent(dashboardCurrency)}`);
    if (currentPage === "Business Dashboard" || (currentPage === "Dashboard" && workspaceUser?.role !== "Administrator")) renderDashboard();
  } catch (error) {
    showToast(error.message || "Unable to load dashboard data.");
  }
}
function setAuthMode(firstRun, error = "") {
  setupRequired = firstRun;
  document.getElementById("auth-form").hidden = false;
  document.getElementById("auth-reset-request-form").hidden = true;
  document.getElementById("auth-reset-complete-form").hidden = true;
  document.getElementById("auth-forgot").hidden = firstRun;
  document.getElementById("auth-switch").hidden = false;
  const nameField = document.getElementById("auth-name-field");
  const companyRoleField = document.getElementById("auth-company-role-field");
  const confirmField = document.getElementById("auth-confirm-field");
  nameField.hidden = !firstRun;
  companyRoleField.hidden = !firstRun;
  confirmField.hidden = !firstRun;
  nameField.querySelector("input").required = firstRun;
  companyRoleField.querySelector("input").required = firstRun;
  confirmField.querySelector("input").required = firstRun;
  document.querySelector('[name="password"]').autocomplete = firstRun ? "new-password" : "current-password";
  document.getElementById("auth-eyebrow").textContent = firstRun ? "SET UP YOUR PRIVATE WORKSPACE" : "YOUR BUSINESS, BEAUTIFULLY IN SYNC";
  document.getElementById("auth-title").textContent = firstRun ? "Create your admin account" : "Welcome back";
  document.getElementById("auth-description").textContent = firstRun
    ? "This first account is the workspace administrator. Account setup can only be completed once."
    : "Sign in to your private business workspace.";
  document.getElementById("auth-submit").textContent = firstRun ? "Create administrator" : "Sign in";
  const authSwitch = document.getElementById("auth-switch");
  authSwitch.innerHTML = firstRun
    ? 'Already have an account? <button type="button" class="button auth-mode-switch" id="auth-mode-switch">Sign in</button>'
    : setupAvailable
      ? 'Need to create the administrator account? <button type="button" class="button auth-mode-switch" id="auth-mode-switch">Create account</button>'
      : "";
  const errorNode = document.getElementById("auth-error");
  errorNode.textContent = error;
  errorNode.hidden = !error;
  errorNode.classList.remove("auth-success");
  document.getElementById("auth-screen").hidden = false;
  document.getElementById("app-shell").hidden = true;
}
function showPasswordResetRequest() {
  document.getElementById("auth-form").hidden = true;
  document.getElementById("auth-reset-request-form").hidden = false;
  document.getElementById("auth-reset-complete-form").hidden = true;
  document.getElementById("auth-forgot").hidden = true;
  document.getElementById("auth-switch").hidden = true;
  document.getElementById("auth-title").textContent = "Reset your password";
  document.getElementById("auth-description").textContent = "Enter the email address linked to your account and we’ll send a secure reset link.";
  document.getElementById("auth-reset-request-message").hidden = true;
  document.querySelector('[name="resetEmail"]').value = document.querySelector('#auth-form [name="email"]').value;
  document.querySelector('[name="resetEmail"]').focus();
}
function showPasswordResetComplete() {
  document.getElementById("auth-form").hidden = true;
  document.getElementById("auth-reset-request-form").hidden = true;
  document.getElementById("auth-reset-complete-form").hidden = false;
  document.getElementById("auth-forgot").hidden = true;
  document.getElementById("auth-switch").hidden = true;
  document.getElementById("auth-title").textContent = "Choose a new password";
  document.getElementById("auth-description").textContent = "Use at least 12 characters. This reset link can only be used once.";
  document.getElementById("auth-reset-complete-message").hidden = true;
  document.querySelector('#auth-reset-complete-form [name="newPassword"]').focus();
}
function clearPasswordResetToken() {
  passwordResetToken = "";
  window.history.replaceState(null, "", `${window.location.pathname}${window.location.hash}`);
}
function updateProfile(user) {
  workspaceUser = user;
  const shortName = initials(user.displayName);
  document.getElementById("topbar-user-name").textContent = user.displayName;
  document.querySelector(".mini-avatar").textContent = shortName;
  document.getElementById("sidebar-user-name").textContent = user.displayName;
  document.getElementById("sidebar-user-role").textContent = user.companyRole || user.role;
  document.getElementById("sidebar-user-role").title = `${user.companyRole || user.role} · ${user.role} access`;
  document.getElementById("sidebar-user-avatar").textContent = shortName;
  const userManagementLink = coreNav.querySelector('[data-page="User & Access Management"]');
  if (userManagementLink) userManagementLink.hidden = user.role !== "Administrator";
  const canAccessModule = (name) => user.role === "Administrator" || user.modules?.includes(name);
  [...coreNav.querySelectorAll(".nav-item"), ...optionalNav.querySelectorAll(".nav-item")]
    .forEach((item) => { item.hidden = !canAccessModule(item.dataset.page); });
  document.getElementById("optional-toggle").hidden = !optionalModules.some((module) => canAccessModule(module.name));
  document.getElementById("analytics-nav").hidden = !canAccessModule("Analytics");
  document.getElementById("business-nav-label").hidden =
    user.role !== "Administrator" && !assignableModules.some((module) => module.name !== "Analytics" && user.modules?.includes(module.name));
}
async function enterWorkspace(user, token) {
  resetAiChatSession();
  setAiChatOpen(false);
  csrfToken = token;
  updateProfile(user);
  loadAppSettings();
  await loadWorkspaceRecords();
  const days = { "Last 7 days": 7, "Last 30 days": 30, "Last 90 days": 90 }[dashboardPeriod];
  dashboardSnapshot = await apiFetch(`/api/dashboard?days=${days}&currency=${encodeURIComponent(dashboardCurrency)}`);
  document.getElementById("auth-screen").hidden = true;
  document.getElementById("app-shell").hidden = false;
  if (settingsStorageWarning) showToast(settingsStorageWarning);
  currentPage = "Dashboard";
  navigate("Dashboard");
}
async function startApplication() {
  try {
    const resetToken = new URLSearchParams(window.location.search).get("reset_token");
    if (resetToken) {
      passwordResetToken = resetToken;
      window.history.replaceState(null, "", `${window.location.pathname}${window.location.hash}`);
      setAuthMode(false);
      showPasswordResetComplete();
      return;
    }
    const status = await apiFetch("/api/auth/setup-status");
    setupAvailable = status.setupRequired;
    setupRequired = setupAvailable;
    const session = await apiFetch("/api/auth/session");
    if (session.authenticated) {
      await enterWorkspace(session.user, session.csrfToken);
      return;
    }
    setAuthMode(setupRequired);
  } catch (error) {
    setAuthMode(true, "The Easy Business server is not available. Start the local app with the provided run task and refresh.");
    document.getElementById("auth-submit").disabled = true;
    console.error("Unable to reach the Easy Business API.", error);
  }
}
document.getElementById("auth-switch").addEventListener("click", (event) => {
  if (event.target.id !== "auth-mode-switch") return;
  setAuthMode(!setupRequired);
  document.querySelector('[name="password"]').value = "";
});
document.getElementById("auth-forgot-button").addEventListener("click", showPasswordResetRequest);
document.getElementById("auth-reset-request-back").addEventListener("click", () => setAuthMode(false));
document.getElementById("auth-reset-complete-back").addEventListener("click", () => {
  clearPasswordResetToken();
  setAuthMode(false);
});
function exportRecords(moduleName, records) {
  if (!records.length) return showToast(`There are no ${moduleName.toLowerCase()} records to export`);
  const keys = [...new Set(records.flatMap((record) => Object.keys(record)))];
  const csvField = (value) => {
    const text = String(value ?? "");
    const safeText = /^[\t\r ]*[=+\-@]/.test(text) ? `'${text}` : text;
    return `"${safeText.replaceAll('"', '""')}"`;
  };
  const csv = [keys.map(csvField).join(","), ...records.map((record) => keys.map((key) => csvField(record[key])).join(","))].join("\r\n");
  const url = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8" }));
  const link = document.createElement("a");
  link.href = url;
  link.download = `${moduleName.toLowerCase().replaceAll(/[^a-z0-9]+/g, "-")}-export.csv`;
  link.click();
  URL.revokeObjectURL(url);
  showToast(`${moduleName} exported as CSV`);
}
function openCreateMenu() {
  const modules = [...coreModules.filter((module) => !["Analytics", "ZIMRA Fiscalisation", "User & Access Management"].includes(module.name)), ...optionalModules.filter((item) => item.records)];
  const availableModules = modules.filter((module) => workspaceUser?.role === "Administrator" || workspaceUser?.modules?.includes(module.name));
  document.getElementById("dialog-title").textContent = "Create something new";
  document.getElementById("dialog-submit-label").textContent = "Continue";
  if (!availableModules.length) {
    showToast("Ask an administrator to assign you a business module before creating records.");
    return;
  }
  document.getElementById("dialog-fields").innerHTML = `<div class="form-field full"><label for="create-module">Choose a module</label><select id="create-module" name="module">${availableModules.map((module) => `<option value="${escapeHtml(module.name)}">${escapeHtml(module.name)}</option>`).join("")}</select></div>`;
  dialogBackdrop.hidden = false;
  document.getElementById("create-module").focus();
  document.getElementById("record-form").onsubmit = (event) => {
    event.preventDefault();
    const module = getModule(new FormData(event.currentTarget).get("module"));
    if (!module) return;
    if (currentPage !== module.name) navigate(module.name);
    openRecordDialog(module.name, module.primary);
  };
}
const dialogBackdrop = document.getElementById("modal-backdrop");
function openRecordDialog(moduleName, action, existingRecord = null) {
  const singular = ({ Contacts: "contact", CRM: "lead", Sales: "quotation", Products: "product", Inventory: "stock adjustment", Purchasing: "purchase order", Invoicing: "invoice", Accounting: "expense", Reports: "report", Analytics: "report", "User & Access Management": "team member" })[moduleName] || moduleName.replace(/s$/, "").toLowerCase();
  const fieldSets = {
    Contacts: [["name", "Contact name", "text"], ["email", "Email address", "email"], ["phone", "Phone number", "tel"], ["detail", "Company / type", "text"], ["value", "Lifetime value", "number"], ["currency", "Currency", "select"]],
    CRM: [["name", "Opportunity name", "text"], ["detail", "Company", "text"], ["amount", "Estimated value", "number"], ["currency", "Currency", "select"], ["owner", "Owner", "text"], ["stage", "Pipeline stage", "text"]],
    Sales: [["name", "Order / quotation number", "text"], ["detail", "Customer", "text"], ["amount", "Total amount", "number"], ["currency", "Currency", "select"], ["owner", "Owner", "text"], ["status", "Order status", "text"]],
    Products: [["name", "Product or service name", "text"], ["type", "Catalog type", "select"], ["sku", "SKU", "text"], ["price", "Unit price", "number"], ["currency", "Currency", "select"], ["stock", "Opening stock quantity", "number"]],
    Invoicing: [["name", "Invoice number", "text"], ["detail", "Customer", "text"], ["maker", "Invoice maker", "text"], ["description", "Item / service description", "text"], ["amount", "Amount before tax", "number"], ["taxRate", "Tax rate (%)", "number"], ["taxAmount", "Tax amount", "number"], ["currency", "Currency", "select"], ["issued", "Issue date", "date"], ["due", "Due date", "date"], ["status", "Invoice status", "text"]],
    Purchasing: [["name", "Purchase order number", "text"], ["detail", "Supplier", "text"], ["amount", "Total amount", "number"], ["currency", "Currency", "select"], ["date", "Order date", "date"]],
    Accounting: [["name", "Expense name", "text"], ["category", "Category", "text"], ["amount", "Amount", "number"], ["currency", "Currency", "select"], ["date", "Date", "date"]],
    "User & Access Management": [["name", "Full name", "text"], ["detail", "Email address", "email"], ["role", "Role", "text"], ["team", "Team", "text"], ["permissions", "Permissions", "text"]],
  };
  let fields = fieldSets[moduleName] || [["name", `${singular[0].toUpperCase()}${singular.slice(1)} name`, "text"], ["detail", "Details", "text"], ["owner", "Owner", "text"], ["date", "Date", "date"]];
  if (fields.some(([key]) => ["amount", "value", "price"].includes(key)) && !fields.some(([key]) => key === "currency"))
    fields = [...fields, ["currency", "Currency", "select"]];
  document.getElementById("dialog-title").textContent = action;
  document.getElementById("dialog-submit-label").textContent = `Create ${singular}`;
  document.getElementById("dialog-fields").innerHTML = fields.map(([key, label, type], index) => {
      const today = new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().slice(0, 10);
      const generatedInvoiceNumber = `INV-${today.replaceAll("-", "")}-${Math.random().toString(36).slice(2, 6).toUpperCase()}`;
      const fieldValue = key === "stock" && moduleName === "Products" && existingRecord
        ? (readProductStock(existingRecord) ?? "")
        : existingRecord?.[key] ?? (
        key === "status" ? "Draft" :
        key === "currency" ? "USD" :
        key === "type" ? "Product" :
        key === "stock" ? (moduleName === "Products" ? "0" : "") :
        key === "maker" ? (moduleName === "Invoicing" ? workspaceUser?.displayName || "" : "") :
        key === "issued" ? today :
        key === "name" && moduleName === "Invoicing" ? generatedInvoiceNumber : ""
      );
      const control = type === "select" && key === "currency"
        ? `<select id="field-${key}" name="${key}">${currencyOptions.map(([code, currencyLabel]) => `<option value="${code}"${fieldValue === code ? " selected" : ""}>${currencyLabel}</option>`).join("")}</select>`
        : type === "select" && key === "type"
          ? `<select id="field-${key}" name="${key}"><option value="Product"${fieldValue === "Product" ? " selected" : ""}>Stocked product</option><option value="Service"${fieldValue === "Service" ? " selected" : ""}>Service (no stock)</option></select>`
          : `<input id="field-${key}" name="${key}" type="${type}" value="${escapeHtml(fieldValue)}" placeholder="${type === "date" ? "" : `Enter ${label.toLowerCase()}`}" ${key === "stock" ? 'min="0" step="1"' : type === "number" ? 'min="0" step="0.01"' : ""} ${index === 0 || key === "maker" && moduleName === "Invoicing" || key === "price" && moduleName === "Products" || key === "stock" && moduleName === "Products" && fieldValue !== "" ? "required" : ""} />`;
      return `<div class="form-field${fields.length === 1 || index === fields.length - 1 && fields.length % 2 !== 0 ? " full" : ""}"><label for="field-${key}">${label}</label>${control}</div>`;
    }).join("");
    dialogBackdrop.hidden = false;
    document.getElementById("field-name").focus();
    if (moduleName === "Products") {
      const typeSelect = document.getElementById("field-type");
      const stockInput = document.getElementById("field-stock");
      const currentStock = existingRecord ? readProductStock(existingRecord) : null;
      const stockIsManagedByInventory = existingRecord && currentStock !== null;
      if (stockIsManagedByInventory)
        document.querySelector('label[for="field-stock"]').textContent = "Stock on hand (adjust in Inventory)";
      const syncStockRequirement = () => {
        stockInput.required = typeSelect.value === "Product" && !stockIsManagedByInventory;
        stockInput.disabled = typeSelect.value === "Service" || Boolean(stockIsManagedByInventory);
        if (typeSelect.value === "Service") stockInput.value = "";
        else if (!stockInput.value && !stockIsManagedByInventory) stockInput.value = "0";
      };
      typeSelect.addEventListener("change", syncStockRequirement);
      syncStockRequirement();
    }
  document.getElementById("record-form").onsubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const record = existingRecord
      ? Object.fromEntries(Object.entries(existingRecord).filter(([key]) => !["id", "createdAt", "updatedAt"].includes(key)))
      : {};
    for (const [key, value] of formData.entries()) if (value !== "") record[key] = value;
    if (moduleName === "Products") {
      if (record.type === "Service") delete record.stock;
      else if (formData.get("stock") !== null) record.stock = Number(formData.get("stock"));
    }
    if (!record.status && moduleName !== "CRM") record.status = ["Invoicing", "Sales"].includes(moduleName) ? "Draft" : "New";
    if (moduleName === "CRM" && !record.stage) record.stage = "New lead";
    try {
      const targetModule = getModule(moduleName);
      if (existingRecord) {
        await apiFetch(`/api/modules/${encodeURIComponent(moduleName)}/${existingRecord.id}`, { method: "PUT", body: JSON.stringify(record) });
        const index = targetModule.records.findIndex((item) => item.id === existingRecord.id);
        if (index >= 0) targetModule.records[index] = { ...record, id: existingRecord.id, updatedAt: new Date().toISOString() };
      } else {
        const created = await apiFetch(`/api/modules/${encodeURIComponent(moduleName)}`, { method: "POST", body: JSON.stringify(record) });
        targetModule.records.unshift({ ...created.payload, id: created.id, createdAt: created.createdAt, updatedAt: created.updatedAt });
      }
      dialogBackdrop.hidden = true;
      if (currentPage === moduleName) {
        currentSearch = "";
        renderModule(moduleName);
      }
      await refreshDashboard();
      showToast(existingRecord ? "Record updated" : `${singular[0].toUpperCase()}${singular.slice(1)} created`);
    } catch (error) {
      showToast(error.message || "Unable to save record.");
    }
  };
}
function closeDialog() {
  dialogBackdrop.hidden = true;
  document.getElementById("record-form").reset();
}
document.getElementById("dialog-close").addEventListener("click", closeDialog);
document.getElementById("dialog-cancel").addEventListener("click", closeDialog);
dialogBackdrop.addEventListener("click", (event) => { if (event.target === dialogBackdrop) closeDialog(); });
document.addEventListener("keydown", (event) => {
  const modifier = event.metaKey || event.ctrlKey;
  if (modifier && event.key.toLowerCase() === "k") {
    event.preventDefault();
    document.getElementById("global-search").focus();
  } else if (modifier && event.key.toLowerCase() === "n") {
    event.preventDefault();
    if (currentPage === "Dashboard") openCreateMenu();
    else {
      const module = getModule(currentPage);
      if (module && !["ZIMRA Fiscalisation", "User & Access Management"].includes(currentPage)) openRecordDialog(currentPage, module.primary);
    }
  } else if (event.key === "Escape") {
    closeDialog();
    helpBackdrop.hidden = true;
    document.getElementById("sidebar").classList.remove("open");
  }
});
const globalSearch = document.getElementById("global-search");
const globalSearchResults = document.getElementById("global-search-results");
function getGlobalSearchMatches(query) {
  const modules = [...coreModules, ...optionalModules].filter((module) =>
    (module.name !== "User & Access Management" || workspaceUser?.role === "Administrator") &&
    (workspaceUser?.role === "Administrator" || workspaceUser?.modules?.includes(module.name)));
  const moduleMatches = modules.filter((module) => module.name.toLowerCase().includes(query))
    .slice(0, 3)
    .map((module) => ({ module, label: module.name, detail: module.description, type: "Module", recordName: "" }));
  const recordMatches = modules.flatMap((module) => (module.records || [])
    .filter((record) => Object.values(record).some((value) => String(value).toLowerCase().includes(query)))
    .map((record) => ({ module, label: record.name, detail: record.detail || record.email || record.role || module.name, type: module.name, recordName: record.name })))
    .slice(0, 5);
  return [...moduleMatches, ...recordMatches].slice(0, 7);
}
function updateGlobalSearchResults() {
  const query = globalSearch.value.trim().toLowerCase();
  globalSearchResults.replaceChildren();
  if (!query) {
    globalSearchResults.hidden = true;
    globalSearch.setAttribute("aria-expanded", "false");
    return;
  }
  const matches = getGlobalSearchMatches(query);
  if (!matches.length) {
    globalSearchResults.innerHTML = `<div class="search-no-results">No matches found. Try a module or customer name.</div>`;
  } else {
    globalSearchResults.innerHTML = `<div class="search-results-label">Quick results</div>${matches.map((match, index) => `<button type="button" role="option" class="search-result" data-result-index="${index}" data-module="${escapeHtml(match.module.name)}" data-record-name="${escapeHtml(match.recordName)}"><span class="search-result-icon">${icon(match.module.icon)}</span><span class="search-result-copy"><strong>${escapeHtml(match.label)}</strong><span>${escapeHtml(match.detail)}</span></span><span class="search-result-tag">${escapeHtml(match.type)}</span></button>`).join("")}`;
    globalSearchResults.querySelectorAll(".search-result").forEach((button) => button.addEventListener("click", () => {
      navigate(button.dataset.module);
      globalSearch.value = "";
      updateGlobalSearchResults();
      if (button.dataset.recordName) {
        const search = document.getElementById("record-search");
        if (search) {
          search.value = button.dataset.recordName;
          search.dispatchEvent(new Event("input", { bubbles: true }));
        }
      }
    }));
  }
  globalSearchResults.hidden = false;
  globalSearch.setAttribute("aria-expanded", "true");
}
globalSearch.addEventListener("input", updateGlobalSearchResults);
globalSearch.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    globalSearchResults.hidden = true;
    globalSearch.setAttribute("aria-expanded", "false");
    return;
  }
  if (event.key === "ArrowDown" && !globalSearchResults.hidden) {
    event.preventDefault();
    globalSearchResults.querySelector(".search-result")?.focus();
    return;
  }
  if (event.key !== "Enter") return;
  const firstResult = globalSearchResults.querySelector(".search-result");
  if (firstResult) firstResult.click();
  else if (globalSearch.value.trim()) showToast(`No results found for “${globalSearch.value.trim()}”`);
});
globalSearch.addEventListener("focus", updateGlobalSearchResults);
globalSearchResults.addEventListener("keydown", (event) => {
  const results = [...globalSearchResults.querySelectorAll(".search-result")];
  const currentIndex = results.indexOf(document.activeElement);
  if (event.key === "ArrowDown" || event.key === "ArrowUp") {
    event.preventDefault();
    const direction = event.key === "ArrowDown" ? 1 : -1;
    const nextIndex = (currentIndex + direction + results.length) % results.length;
    results[nextIndex]?.focus();
  } else if (event.key === "Escape") {
    globalSearchResults.hidden = true;
    globalSearch.setAttribute("aria-expanded", "false");
    globalSearch.focus();
  }
});
document.addEventListener("click", (event) => {
  if (!event.target.closest(".global-search-wrap")) {
    globalSearchResults.hidden = true;
    globalSearch.setAttribute("aria-expanded", "false");
  }
});
document.getElementById("notification-button").addEventListener("click", () => showToast("You’re all caught up — no new notifications"));
document.getElementById("shortcut-button").addEventListener("click", () => navigate("Shortcuts"));
document.getElementById("mobile-menu").addEventListener("click", () => document.getElementById("sidebar").classList.toggle("open"));
document.getElementById("sidebar-backdrop").addEventListener("click", () => document.getElementById("sidebar").classList.remove("open"));
document.getElementById("optional-toggle").addEventListener("click", () => {
  optionalNav.classList.toggle("collapsed");
  document.getElementById("optional-toggle").classList.toggle("collapsed");
  document.getElementById("optional-toggle").setAttribute("aria-expanded", String(!optionalNav.classList.contains("collapsed")));
});
const helpBackdrop = document.getElementById("help-backdrop");
document.getElementById("help-button").addEventListener("click", () => {
  helpBackdrop.hidden = false;
  document.getElementById("help-dialog-close").focus();
});
document.getElementById("help-dialog-close").addEventListener("click", () => { helpBackdrop.hidden = true; });
helpBackdrop.addEventListener("click", (event) => {
  if (event.target === helpBackdrop) helpBackdrop.hidden = true;
});
document.getElementById("ai-chat-launcher").addEventListener("click", () => {
  setAiChatOpen(document.getElementById("ai-chat-panel").hidden);
});
document.getElementById("ai-chat-close").addEventListener("click", () => setAiChatOpen(false));
document.getElementById("ai-chat-clear").addEventListener("click", () => {
  resetAiChatSession();
  loadAiChatStatus();
  document.getElementById("ai-chat-input").focus();
});
document.getElementById("ai-chat-form").addEventListener("submit", sendAiChatMessage);
document.getElementById("ai-chat-input").addEventListener("keydown", (event) => {
  if ((event.ctrlKey || event.metaKey) && event.key === "Enter") {
    event.preventDefault();
    document.getElementById("ai-chat-form").requestSubmit();
  }
});
document.querySelector(".workspace-more").addEventListener("click", () => showToast("You’re in the Easy Business workspace"));
document.getElementById("logout-button").addEventListener("click", async () => {
  try {
    await apiFetch("/api/auth/logout", { method: "POST" });
    csrfToken = "";
    workspaceUser = null;
    dashboardSnapshot = null;
    resetAiChatSession();
    setAiChatOpen(false);
    renderAiChatMessages();
    setAuthMode(false);
    document.getElementById("auth-form").reset();
  } catch (error) {
    showToast(error.message || "Unable to sign out.");
  }
});
document.querySelector(".topbar-profile").addEventListener("click", () => navigate(workspaceUser?.role === "Administrator" ? "User & Access Management" : "Settings"));

document.getElementById("auth-reset-request-form").addEventListener("submit", async (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const submit = document.getElementById("auth-reset-request-submit");
  const message = document.getElementById("auth-reset-request-message");
  message.hidden = true;
  message.classList.remove("auth-error");
  submit.disabled = true;
  try {
    const response = await apiFetch("/api/auth/password-reset/request", {
      method: "POST",
      body: JSON.stringify({ email: new FormData(form).get("resetEmail") })
    });
    message.textContent = response.message;
    message.hidden = false;
  } catch (error) {
    message.textContent = error.message || "Unable to send a password reset email.";
    message.classList.add("auth-error");
    message.hidden = false;
  } finally {
    submit.disabled = false;
  }
});
document.getElementById("auth-reset-complete-form").addEventListener("submit", async (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const values = new FormData(form);
  const password = String(values.get("newPassword") || "");
  const confirmation = String(values.get("confirmNewPassword") || "");
  const message = document.getElementById("auth-reset-complete-message");
  const submit = document.getElementById("auth-reset-complete-submit");
  message.classList.remove("auth-success");
  message.classList.add("auth-error");
  message.hidden = true;
  if (password !== confirmation) {
    message.textContent = "The passwords do not match.";
    message.hidden = false;
    return;
  }
  submit.disabled = true;
  try {
    await apiFetch("/api/auth/password-reset/complete", {
      method: "POST",
      body: JSON.stringify({ token: passwordResetToken, password })
    });
    clearPasswordResetToken();
    form.reset();
    setAuthMode(false, "Your password was reset. Sign in with your new password.");
    document.getElementById("auth-error").classList.add("auth-success");
  } catch (error) {
    message.textContent = error.message || "Unable to reset your password.";
    message.hidden = false;
  } finally {
    submit.disabled = false;
  }
});
document.getElementById("auth-form").addEventListener("submit", async (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const values = new FormData(form);
  const password = String(values.get("password") || "");
  const confirmPassword = String(values.get("confirmPassword") || "");
  if (setupRequired && password !== confirmPassword) {
    setAuthMode(true, "The passwords do not match.");
    return;
  }
  const request = setupRequired
    ? { displayName: values.get("displayName"), companyRole: values.get("companyRole"), email: values.get("email"), password }
    : { email: values.get("email"), password };
  const button = document.getElementById("auth-submit");
  button.disabled = true;
  button.textContent = setupRequired ? "Creating account…" : "Signing in…";
  try {
    const response = await apiFetch(setupRequired ? "/api/auth/setup" : "/api/auth/login", {
      method: "POST",
      body: JSON.stringify(request)
    });
    await enterWorkspace(response.user, response.csrfToken);
    form.reset();
  } catch (error) {
    setAuthMode(setupRequired, error.message || "Unable to sign in.");
  } finally {
    button.disabled = false;
    button.textContent = setupRequired ? "Create administrator" : "Sign in";
  }
});

startApplication();
