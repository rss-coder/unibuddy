const businesses = [
  {
    id: "banahaw-brew-lab",
    universityId: "slsu",
    universityShort: "SLSU",
    universityName: "Southern Luzon State University",
    marketingPlan: "featured",
    featured: true,
    name: "Banahaw Brew Lab",
    category: "Food & Drinks",
    type: "Product",
    symbol: "☕",
    color: "#dce9dc",
    price: "From ₱55",
    description: "Small-batch cold brew and campus-ready coffee bottles for busy class days.",
    owner: "Student-led sample",
    tags: ["Cold brew", "Pre-order", "Bottle return"],
    fulfillment: "Pickup near the SLSU main gate",
    orderMethod: "Message to reserve, then choose a pickup window",
    contact: "@banahawbrew.demo",
    impact: "Offers a bottle-return discount to reduce single-use packaging.",
    steps: ["Send your drink and quantity", "Choose an available pickup time", "Pay on pickup or through the seller's listed method"]
  },
  {
    id: "thread-and-trinket",
    universityId: "cvsu",
    universityShort: "CvSU",
    universityName: "Cavite State University",
    name: "Thread & Trinket",
    category: "Fashion & Accessories",
    type: "Product",
    symbol: "✿",
    color: "#f5e1eb",
    price: "From ₱85",
    description: "Made-to-order beaded bracelets, phone charms, and small custom gifts.",
    owner: "Student-led sample",
    tags: ["Customized", "Made to order", "Gift-ready"],
    fulfillment: "Campus meetup or local delivery",
    orderMethod: "Message your design request and preferred colors",
    contact: "threadandtrinket@example.com",
    impact: "Produces by order to avoid excess stock and material waste.",
    steps: ["Share your item, colors, and size", "Approve the quoted design and price", "Confirm pickup or delivery after production"]
  },
  {
    id: "pixelpeak-studio",
    universityId: "up",
    universityShort: "UP",
    universityName: "University of the Philippines",
    marketingPlan: "growth",
    featured: true,
    name: "PixelPeak Studio",
    category: "Creative Services",
    type: "Service",
    symbol: "◈",
    color: "#dfe5fa",
    price: "From ₱150",
    description: "Clean pubmats, event identities, and social media kits for student organizations.",
    owner: "Student-led sample",
    tags: ["Pubmats", "Brand kits", "Digital delivery"],
    fulfillment: "Online briefing and file delivery",
    orderMethod: "Send a project brief for schedule and quotation",
    contact: "pixelpeak.demo@example.com",
    impact: "Digital-first delivery keeps revisions organized and paper-free.",
    steps: ["Send the event details and deadline", "Receive a scope, schedule, and price", "Approve the draft before final files are delivered"]
  },
  {
    id: "studysprint-prints",
    universityId: "batsu",
    universityShort: "BatStateU",
    universityName: "Batangas State University",
    name: "StudySprint Prints",
    category: "Academic & Digital",
    type: "Service",
    symbol: "▤",
    color: "#fae8c7",
    price: "From ₱3/page",
    description: "Student-friendly printing, binding, and reviewer assembly with scheduled pickup.",
    owner: "Student-led sample",
    tags: ["Printing", "Binding", "Same-day slots"],
    fulfillment: "Scheduled campus pickup",
    orderMethod: "Send files and specifications before the cutoff",
    contact: "@studysprint.demo",
    impact: "Encourages duplex printing and exact-quantity orders to reduce paper waste.",
    steps: ["Send print-ready files", "Confirm paper, color, binding, and quantity", "Receive the total and selected pickup slot"]
  },
  {
    id: "greenroom-plant-co",
    universityId: "ateneo",
    universityShort: "Ateneo",
    universityName: "Ateneo de Manila University",
    name: "GreenRoom Plant Co.",
    category: "Eco & Home",
    type: "Product",
    symbol: "❋",
    color: "#d8eed6",
    price: "From ₱70",
    description: "Easy-care propagated plants and hand-painted pots for desks and dorm spaces.",
    owner: "Student-led sample",
    tags: ["Plants", "Upcycled pots", "Care guide"],
    fulfillment: "Friday campus pickup",
    orderMethod: "Reserve from the weekly available-plant list",
    contact: "greenroom.demo@example.com",
    impact: "Uses propagated plants and repurposed containers whenever suitable.",
    steps: ["Ask for this week's available plants", "Reserve a plant and pot combination", "Collect it with a simple care guide"]
  },
  {
    id: "career-ready-peer",
    universityId: "slsu",
    universityShort: "SLSU",
    universityName: "Southern Luzon State University",
    name: "Career Ready Peer",
    category: "Academic & Digital",
    type: "Service",
    symbol: "↗",
    color: "#e6def3",
    price: "From ₱120",
    description: "Peer resume formatting, practice interviews, and presentation coaching for students.",
    owner: "Student-led sample",
    tags: ["Resume", "Mock interview", "Coaching"],
    fulfillment: "Online or CABHA-area meetup",
    orderMethod: "Book a 30- or 60-minute student session",
    contact: "@careerreadypeer.demo",
    impact: "A skills-based service with reusable digital resources and no physical inventory.",
    steps: ["Choose the support you need", "Send your preferred schedule and materials", "Confirm the session after availability is checked"]
  },
  {
    id: "maroon-munchies",
    universityId: "up",
    universityShort: "UP",
    universityName: "University of the Philippines",
    name: "Maroon Munchies",
    category: "Food & Drinks",
    type: "Product",
    symbol: "◉",
    color: "#f2dfd4",
    price: "From ₱65",
    description: "Affordable rice bowls and snack boxes prepared for campus pickup windows.",
    owner: "Student-led sample",
    tags: ["Rice bowls", "Pre-order", "Campus pickup"],
    fulfillment: "UP campus pickup",
    orderMethod: "Pre-order through the weekly menu",
    contact: "@maroonmunchies.demo",
    impact: "Uses pre-orders to manage portions and minimize unsold food.",
    steps: ["Choose from the weekly menu", "Reserve a pickup slot", "Confirm payment directly with the seller"]
  },
  {
    id: "cavite-code-co",
    universityId: "cvsu",
    universityShort: "CvSU",
    universityName: "Cavite State University",
    name: "Cavite Code Co.",
    category: "Academic & Digital",
    type: "Service",
    symbol: "⌘",
    color: "#dbecef",
    price: "From ₱250",
    description: "Simple portfolio sites, form automation, and digital setup for student projects.",
    owner: "Student-led sample",
    tags: ["Web setup", "Automation", "Digital delivery"],
    fulfillment: "Online consultation and delivery",
    orderMethod: "Send a project brief for a quotation",
    contact: "cavitecode.demo@example.com",
    impact: "Builds lightweight digital tools that reduce repetitive manual work.",
    steps: ["Describe the project and deadline", "Review the proposed scope", "Approve delivery after testing"]
  },
  {
    id: "spartan-fix",
    universityId: "batsu",
    universityShort: "BatStateU",
    universityName: "Batangas State University",
    name: "Spartan Fix",
    category: "Academic & Digital",
    type: "Service",
    symbol: "⚙",
    color: "#efdeda",
    price: "From ₱100",
    description: "Basic laptop cleanup, software setup, and student-friendly device troubleshooting.",
    owner: "Student-led sample",
    tags: ["Tech help", "Laptop setup", "Appointment"],
    fulfillment: "BatStateU campus meetup",
    orderMethod: "Book a diagnostic appointment",
    contact: "@spartanfix.demo",
    impact: "Helps extend device usability through maintenance before replacement.",
    steps: ["Describe the device issue", "Book an available meetup", "Confirm the service after diagnosis"]
  },
  {
    id: "blue-eagle-bakes",
    universityId: "ateneo",
    universityShort: "Ateneo",
    universityName: "Ateneo de Manila University",
    name: "Blue Eagle Bakes",
    category: "Food & Drinks",
    type: "Product",
    symbol: "◇",
    color: "#dce5f5",
    price: "From ₱45",
    description: "Small-batch cookies and celebration boxes for org events and study sessions.",
    owner: "Student-led sample",
    tags: ["Cookies", "Event boxes", "Pre-order"],
    fulfillment: "Ateneo campus pickup",
    orderMethod: "Reserve through the weekly order form",
    contact: "blueeaglebakes.demo@example.com",
    impact: "Bakes against confirmed orders to reduce excess ingredients and packaging.",
    steps: ["Choose an item and quantity", "Select a pickup date", "Receive confirmation from the seller"]
  }
];

const grid = document.querySelector("#businessGrid");
const searchInput = document.querySelector("#searchInput");
const categoryFilter = document.querySelector("#categoryFilter");
const typeFilter = document.querySelector("#typeFilter");
const universitySelect = document.querySelector("#universitySelect");
const categoryChips = document.querySelector("#categoryChips");
const resultsCount = document.querySelector("#resultsCount");
const resetFilters = document.querySelector("#resetFilters");
const emptyState = document.querySelector("#emptyState");
const profileDialog = document.querySelector("#profileDialog");
const profileContent = document.querySelector("#profileContent");
const submitDialog = document.querySelector("#submitDialog");
const businessForm = document.querySelector("#businessForm");
const formPreview = document.querySelector("#formPreview");
const submissionFormView = document.querySelector("#submissionFormView");
const submissionSuccess = document.querySelector("#submissionSuccess");
const submissionStatus = document.querySelector("#submissionStatus");
const pendingCount = document.querySelector("#pendingCount");
const toast = document.querySelector("#toast");

let activeCategory = "all";
let activeUniversity = localStorage.getItem("unibuddyUniversity") || "all";
let toastTimer;

const escapeHTML = (value = "") => String(value).replace(/[&<>'"]/g, character => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;"
})[character]);

function cardTemplate(business) {
  const plan = window.UniBuddyStore.getMarketingPlan(business.marketingPlan);
  return `
    <article class="business-card ${business.featured ? "featured-card" : ""}" tabindex="0" role="button" aria-label="Open ${escapeHTML(business.name)} profile" data-business-id="${business.id}" style="--card-bg:${business.color}">
      <div class="card-cover">
        <span class="card-symbol" aria-hidden="true">${business.symbol}</span>
        <div class="card-badges">${business.featured ? '<span class="featured-pill">★ Featured</span>' : ""}<span class="type-pill">${business.type}</span></div>
      </div>
      <div class="card-meta">
        <span class="category-label">${business.category}</span>
        <span class="price">${business.price}</span>
      </div>
      <h3>${business.name}</h3>
      <p>${business.description}</p>
      <div class="card-footer">
        <span><b>${business.universityShort}</b> · ${plan.short}</span>
        <strong>View →</strong>
      </div>
    </article>`;
}

function renderBusinesses() {
  const directoryBusinesses = [...businesses, ...window.UniBuddyStore.getApprovedDirectoryItems()];
  const query = searchInput.value.trim().toLowerCase();
  const type = typeFilter.value;
  const filtered = directoryBusinesses.filter(business => {
    const searchable = [business.name, business.category, business.description, business.universityName, business.universityShort, ...business.tags].join(" ").toLowerCase();
    return (!query || searchable.includes(query)) &&
      (activeUniversity === "all" || business.universityId === activeUniversity) &&
      (activeCategory === "all" || business.category === activeCategory) &&
      (type === "all" || business.type === type);
  }).sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)));

  grid.innerHTML = filtered.map(cardTemplate).join("");
  grid.hidden = filtered.length === 0;
  emptyState.hidden = filtered.length !== 0;
  const selectedUniversity = activeUniversity === "all" ? null : window.UniBuddyStore.getUniversity(activeUniversity);
  resultsCount.textContent = `${filtered.length} ${filtered.length === 1 ? "business" : "businesses"} found${selectedUniversity ? ` at ${selectedUniversity.short}` : " across all universities"}`;
  document.querySelector("#heroBusinessCount").textContent = directoryBusinesses.filter(business => activeUniversity === "all" || business.universityId === activeUniversity).length;
  document.querySelector("#snapshotContext").textContent = selectedUniversity ? `businesses ready to explore at ${selectedUniversity.short}` : "businesses ready to explore across 5 universities";
  resetFilters.hidden = !query && activeCategory === "all" && type === "all";
  document.querySelectorAll(".chip").forEach(chip => chip.classList.toggle("active", chip.dataset.category === activeCategory));
}

function setupCategories() {
  const categories = [...new Set(businesses.map(item => item.category))];
  categoryFilter.innerHTML += categories.map(category => `<option>${category}</option>`).join("");
  categoryChips.innerHTML = ["all", ...categories].map(category => `
    <button class="chip ${category === "all" ? "active" : ""}" type="button" data-category="${category}">
      ${category === "all" ? "All" : category}
    </button>`).join("");
}

function syncCategory(category) {
  activeCategory = category;
  categoryFilter.value = category;
  renderBusinesses();
}

function clearFilters() {
  searchInput.value = "";
  typeFilter.value = "all";
  syncCategory("all");
  searchInput.focus();
}

function openProfile(business) {
  const plan = window.UniBuddyStore.getMarketingPlan(business.marketingPlan);
  profileContent.innerHTML = `
    <div class="profile-cover" style="--profile-bg:${business.color}">
      <span class="profile-symbol" aria-hidden="true">${business.symbol}</span>
      <span class="type-pill">${business.featured ? "★ Featured · " : ""}${business.type} · Sample listing</span>
    </div>
    <div class="profile-body">
      <div class="profile-heading">
        <div>
          <span class="category-label">${business.category}</span>
          <h2 id="profileName">${business.name}</h2>
          <p>${business.description}</p>
        </div>
        <span class="profile-price">${business.price}</span>
      </div>
      <div class="profile-tags">${business.tags.map(tag => `<span>${tag}</span>`).join("")}</div>
      <div class="profile-details">
        <div class="detail-box"><span>University</span><strong>${business.universityName}</strong></div>
        <div class="detail-box"><span>How to order</span><strong>${business.orderMethod}</strong></div>
        <div class="detail-box"><span>Fulfillment</span><strong>${business.fulfillment}</strong></div>
        <div class="detail-box"><span>Contact</span><strong>${business.contact}</strong></div>
        <div class="detail-box"><span>Profile</span><strong>${business.owner}</strong></div>
      </div>
      <div class="impact-box"><span aria-hidden="true">♻</span><div><strong>Practical sustainability</strong>${business.impact}</div></div>
      <div class="seller-growth-box">
        <div>
          <span>Seller growth plan</span>
          <strong>${plan.name} · ${plan.price}</strong>
          <p>${plan.description}</p>
        </div>
        <button class="button button-ghost button-small" type="button" data-show-plans>Compare packages</button>
      </div>
      <div class="profile-actions">
        <button class="button button-accent" type="button" data-copy-contact="${escapeHTML(business.contact)}">Copy order contact</button>
        <button class="button button-ghost" type="button" data-toggle-order>View order steps</button>
      </div>
      <div class="order-guide" id="orderGuide" hidden>
        <span class="category-label">Simple order flow</span>
        <ol>${business.steps.map(step => `<li>${step}</li>`).join("")}</ol>
      </div>
    </div>`;
  profileDialog.showModal();
}

function showToast(message) {
  clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("show");
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2300);
}

function updatePreview() {
  const data = Object.fromEntries(new FormData(businessForm));
  const iconMap = { "Food & Drinks": "☕", "Fashion & Accessories": "✿", "Creative Services": "◈", "Academic & Digital": "▤", "Eco & Home": "❋", "Personal Care": "◇" };
  document.querySelector("#descriptionCount").textContent = (data.description || "").length;
  formPreview.innerHTML = `
    <div class="preview-card">
      <div class="preview-cover"><span aria-hidden="true">${iconMap[data.category] || "✦"}</span></div>
      <div class="preview-body">
        <span class="category-label">${escapeHTML(data.category || "Your category")} · ${escapeHTML(window.UniBuddyStore.getUniversity(data.universityId).short)}</span>
        <h3>${escapeHTML(data.businessName || "Your business name")}</h3>
        <p>${escapeHTML(data.description || "A short, specific description will help students understand what you offer.")}</p>
        <div class="preview-bottom"><strong>${escapeHTML(data.price || "Starting price")}</strong><span>${escapeHTML(window.UniBuddyStore.getMarketingPlan(data.marketingPlan).short)}</span></div>
      </div>
    </div>
    <p class="review-note"><span aria-hidden="true">◷</span> This preview will be checked before it can appear in the directory.</p>`;
}

function resetSubmissionView() {
  submissionSuccess.hidden = true;
  submissionFormView.hidden = false;
  document.querySelector(".submit-heading").hidden = false;
  businessForm.reset();
  clearFormErrors();
  updatePreview();
}

function openSubmission() {
  resetSubmissionView();
  if (activeUniversity !== "all") {
    businessForm.elements.universityId.value = activeUniversity;
    updatePreview();
  }
  submitDialog.showModal();
}

function choosePlan(planId) {
  openSubmission();
  businessForm.elements.marketingPlan.value = planId;
  updatePreview();
}

function clearFormErrors() {
  businessForm.querySelectorAll(".field.invalid").forEach(field => field.classList.remove("invalid"));
  businessForm.querySelectorAll(".error-message").forEach(message => message.textContent = "");
}

function validateForm() {
  clearFormErrors();
  let valid = true;
  businessForm.querySelectorAll("[required]").forEach(input => {
    if (input.type === "checkbox" ? !input.checked : !input.value.trim()) {
      valid = false;
      if (input.type === "checkbox") {
        document.querySelector(".consent-error").textContent = "Please confirm before submitting.";
      } else {
        const field = input.closest(".field");
        field.classList.add("invalid");
        field.querySelector(".error-message").textContent = "This field is required.";
      }
    }
  });
  return valid;
}

function getPendingSubmissions() {
  return window.UniBuddyStore.getAll().filter(item => item.status === "Pending");
}

function updatePendingStatus() {
  const pending = getPendingSubmissions();
  pendingCount.textContent = pending.length;
  submissionStatus.hidden = pending.length === 0;
}

function handleSubmit(event) {
  event.preventDefault();
  if (!validateForm()) {
    businessForm.querySelector(".invalid input, .invalid select, .invalid textarea")?.focus();
    return;
  }
  const data = Object.fromEntries(new FormData(businessForm));
  window.UniBuddyStore.create(data);
  updatePendingStatus();

  document.querySelector("#reviewCard").innerHTML = `
    <div><h3>${escapeHTML(data.businessName)}</h3><p>${escapeHTML(window.UniBuddyStore.getUniversity(data.universityId).short)} · ${escapeHTML(window.UniBuddyStore.getMarketingPlan(data.marketingPlan).name)}</p></div>
    <span class="status-pill pending">Under review</span>`;
  submissionFormView.hidden = true;
  document.querySelector(".submit-heading").hidden = true;
  submissionSuccess.hidden = false;
}

setupCategories();
universitySelect.value = window.UniBuddyStore.universities.some(item => item.id === activeUniversity) ? activeUniversity : "all";
renderBusinesses();
updatePreview();
updatePendingStatus();

searchInput.addEventListener("input", renderBusinesses);
typeFilter.addEventListener("change", renderBusinesses);
universitySelect.addEventListener("change", event => {
  activeUniversity = event.target.value;
  localStorage.setItem("unibuddyUniversity", activeUniversity);
  renderBusinesses();
});
categoryFilter.addEventListener("change", event => syncCategory(event.target.value));
categoryChips.addEventListener("click", event => {
  const chip = event.target.closest("[data-category]");
  if (chip) syncCategory(chip.dataset.category);
});
resetFilters.addEventListener("click", clearFilters);
document.querySelector("#emptyReset").addEventListener("click", clearFilters);

grid.addEventListener("click", event => {
  const card = event.target.closest("[data-business-id]");
  const directoryBusinesses = [...businesses, ...window.UniBuddyStore.getApprovedDirectoryItems()];
  if (card) openProfile(directoryBusinesses.find(business => business.id === card.dataset.businessId));
});
grid.addEventListener("keydown", event => {
  if ((event.key === "Enter" || event.key === " ") && event.target.matches("[data-business-id]")) {
    event.preventDefault();
    const directoryBusinesses = [...businesses, ...window.UniBuddyStore.getApprovedDirectoryItems()];
    openProfile(directoryBusinesses.find(business => business.id === event.target.dataset.businessId));
  }
});

document.addEventListener("keydown", event => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k" && !submitDialog.open && !profileDialog.open) {
    event.preventDefault();
    searchInput.focus();
  }
});
document.querySelectorAll("[data-open-submit]").forEach(button => button.addEventListener("click", openSubmission));
document.querySelectorAll("[data-plan-id]").forEach(button => button.addEventListener("click", () => choosePlan(button.dataset.planId)));
document.querySelectorAll("[data-close-submit]").forEach(button => button.addEventListener("click", () => submitDialog.close()));
document.querySelector("[data-close-profile]").addEventListener("click", () => profileDialog.close());
businessForm.addEventListener("input", updatePreview);
businessForm.addEventListener("change", updatePreview);
businessForm.addEventListener("submit", handleSubmit);
submissionStatus.addEventListener("click", () => {
  const pending = getPendingSubmissions();
  if (!pending.length) return;
  const latest = pending[pending.length - 1];
  document.querySelector("#reviewCard").innerHTML = `<div><h3>${escapeHTML(latest.businessName)}</h3><p>${escapeHTML(window.UniBuddyStore.getUniversity(latest.universityId).short)} · ${escapeHTML(window.UniBuddyStore.getMarketingPlan(latest.marketingPlan).name)}</p></div><span class="status-pill pending">Under review</span>`;
  submissionFormView.hidden = true;
  document.querySelector(".submit-heading").hidden = true;
  submissionSuccess.hidden = false;
  submitDialog.showModal();
});

profileContent.addEventListener("click", async event => {
  const plansButton = event.target.closest("[data-show-plans]");
  if (plansButton) {
    profileDialog.close();
    document.querySelector("#sellerPlans").scrollIntoView({ behavior: "smooth" });
  }
  const copyButton = event.target.closest("[data-copy-contact]");
  if (copyButton) {
    try {
      await navigator.clipboard.writeText(copyButton.dataset.copyContact);
      showToast("Sample contact copied");
    } catch {
      showToast(`Contact: ${copyButton.dataset.copyContact}`);
    }
  }
  const orderButton = event.target.closest("[data-toggle-order]");
  if (orderButton) {
    const guide = document.querySelector("#orderGuide");
    guide.hidden = !guide.hidden;
    orderButton.textContent = guide.hidden ? "View order steps" : "Hide order steps";
  }
});

[profileDialog, submitDialog].forEach(dialog => dialog.addEventListener("click", event => {
  if (event.target === dialog) dialog.close();
}));
