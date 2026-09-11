(function () {
  const STORAGE_KEY = "unibuddySubmissions";

  const universities = [
    { id: "up", short: "UP", name: "University of the Philippines" },
    { id: "slsu", short: "SLSU", name: "Southern Luzon State University" },
    { id: "cvsu", short: "CvSU", name: "Cavite State University" },
    { id: "batsu", short: "BatStateU", name: "Batangas State University" },
    { id: "ateneo", short: "Ateneo", name: "Ateneo de Manila University" }
  ];

  const marketingPlans = [
    {
      id: "community",
      name: "Community Membership",
      price: "₱49/month",
      short: "Member",
      description: "A searchable business profile with contact details and seller-requested updates."
    },
    {
      id: "featured",
      name: "Featured Boost",
      price: "₱149/7 days",
      short: "Featured",
      description: "Priority placement and a featured badge for one promotional week."
    },
    {
      id: "growth",
      name: "Marketing Partner",
      price: "₱399/month",
      short: "Growth Partner",
      description: "Featured placement plus monthly promo copy and two social-ready campaign concepts."
    }
  ];

  const starterSubmissions = [
    {
      id: "demo-knot-note",
      universityId: "cvsu",
      marketingPlan: "community",
      businessName: "Knot & Note",
      category: "Fashion & Accessories",
      type: "Product",
      description: "Handmade crochet bookmarks and small desk companions created in limited batches.",
      price: "From ₱75",
      orderMethod: "Pre-order",
      contact: "@knotandnote.demo",
      fulfillment: "CvSU campus meetup",
      impact: "Uses made-to-order production and recyclable paper packaging.",
      status: "Pending",
      submittedAt: "2026-09-10T08:30:00.000Z",
      isDemo: true
    },
    {
      id: "demo-slidecraft",
      universityId: "ateneo",
      marketingPlan: "featured",
      businessName: "SlideCraft Student",
      category: "Creative Services",
      type: "Service",
      description: "Presentation cleanup and visual storytelling support for class reports and pitches.",
      price: "From ₱180",
      orderMethod: "Booking request",
      contact: "slidecraft.demo@example.com",
      fulfillment: "Online file delivery",
      impact: "Provides reusable slide systems that students can update for future reports.",
      status: "Pending",
      submittedAt: "2026-09-09T13:15:00.000Z",
      isDemo: true
    }
  ];

  function getUniversity(id) {
    return universities.find(university => university.id === id) || { id: "other", short: "Other", name: "Other university" };
  }

  function getMarketingPlan(id) {
    return marketingPlans.find(plan => plan.id === id) || marketingPlans[0];
  }

  function readStored() {
    const current = localStorage.getItem(STORAGE_KEY);
    if (current !== null) {
      try { return JSON.parse(current); } catch { return []; }
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(starterSubmissions));
    return [...starterSubmissions];
  }

  function saveAll(items) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    return items;
  }

  function getAll() { return readStored(); }

  function create(data) {
    const item = {
      ...data,
      id: `submission-${Date.now()}-${Math.random().toString(16).slice(2)}`,
      status: "Pending",
      submittedAt: new Date().toISOString(),
      isDemo: false
    };
    saveAll([item, ...getAll()]);
    return item;
  }

  function update(id, changes) {
    let updated;
    const items = getAll().map(item => {
      if (item.id !== id) return item;
      updated = { ...item, ...changes, updatedAt: new Date().toISOString() };
      return updated;
    });
    saveAll(items);
    return updated;
  }

  function remove(id) {
    const items = getAll().filter(item => item.id !== id);
    saveAll(items);
    return items;
  }

  function toDirectoryBusiness(item) {
    const university = getUniversity(item.universityId);
    const symbolMap = {
      "Food & Drinks": "☕",
      "Fashion & Accessories": "✿",
      "Creative Services": "◈",
      "Academic & Digital": "▤",
      "Eco & Home": "❋",
      "Personal Care": "◇"
    };
    const colorMap = {
      "Food & Drinks": "#dce9dc",
      "Fashion & Accessories": "#f5e1eb",
      "Creative Services": "#dfe5fa",
      "Academic & Digital": "#fae8c7",
      "Eco & Home": "#d8eed6",
      "Personal Care": "#eee1d8"
    };
    return {
      id: item.id,
      universityId: item.universityId,
      universityShort: university.short,
      universityName: university.name,
      marketingPlan: item.marketingPlan || "community",
      featured: ["featured", "growth"].includes(item.marketingPlan),
      name: item.businessName,
      category: item.category,
      type: item.type,
      symbol: symbolMap[item.category] || "✦",
      color: colorMap[item.category] || "#dff4e7",
      price: item.price,
      description: item.description,
      owner: "Approved student profile",
      tags: [item.type, item.orderMethod, university.short],
      fulfillment: item.fulfillment || "Contact seller for fulfillment",
      orderMethod: item.orderMethod,
      contact: item.contact,
      impact: item.impact || "This profile has not added a sustainability note yet.",
      steps: [
        `Contact the seller through ${item.contact}`,
        `Confirm the request using ${item.orderMethod.toLowerCase()}`,
        "Finalize payment and fulfillment directly with the seller"
      ]
    };
  }

  function getApprovedDirectoryItems() {
    return getAll().filter(item => item.status === "Approved").map(toDirectoryBusiness);
  }

  window.UniBuddyStore = { universities, marketingPlans, getUniversity, getMarketingPlan, getAll, create, update, remove, getApprovedDirectoryItems };
})();
