"use client";
import { createContext, useContext, ReactNode } from 'react';

// Define the data structure for our site
interface DataContextType {
    navigation: {
        label: string;
        href: string;
    }[];

    hero: {
        title: string;
        subtitle: string;
        ctaButtons: {
            primary: { text: string; href: string };
            secondary: { text: string; href: string };
        };
    };

    whyFeatures: {
        title: string;
        subtitle: string;
        features: {
            heading: string;
            description: string;
        }[];
    };

    services: {
        title: string;
        servicesList: {
            title: string;
            description: string;
        }[];
    };

    industries: {
        title: string;
        subtitle: string;
        industriesList: string[];
    };

    about: {
        title: string;
        description: string;
        stats: string[];
        testimonials: {
            quote: string;
            author: string;
        }[];
    };

    insights: {
        title: string;
        articles: string[];
    };

    contact: {
        title: string;
        subtitle: string;
    };

    footer: {
        links: { label: string; href: string }[];
    };
}

// Site data - centralized in one place
const siteData: DataContextType = {
    navigation: [
        { label: "Services", href: "#services" },
        { label: "Industries", href: "#industries" },
        { label: "About", href: "#about" },
        { label: "Insights", href: "#insights" },
    ],

    hero: {
        title: "Accounting that scales with you.",
        subtitle: "From startups to enterprises, Prism Advisors delivers full-stack accounting, bookkeeping, and CFO advisory—so your leadership can focus on growth.",
        ctaButtons: {
            primary: { text: "Speak to an advisor", href: "#contact" },
            secondary: { text: "Explore services", href: "#services" },
        },
    },

    whyFeatures: {
        title: "Why Partner With Prism Advisors",
        subtitle: "Finance operations should be clear, timely, and dependable. We blend specialist expertise with modern automation to give you accurate numbers and actionable insight—month after month.",
        features: [
            {
                heading: "Specialist Expertise",
                description: "Experienced accountants delivering rigorous controls and timely reporting."
            },
            {
                heading: "End-to-End Operations",
                description: "Bookkeeping, AP/AR, payroll, and management reporting under one roof."
            },
            {
                heading: "Enterprise-Grade Standards",
                description: "Documented processes, audit-ready outputs, and scalable systems."
            },
        ],
    },

    services: {
        title: "Our Services",
        servicesList: [
            {
                title: "Bookkeeping & Close",
                description: "Monthly reconciliations, financial statements, and variance analysis that keep your numbers decision-ready."
            },
            {
                title: "AP / AR Operations",
                description: "Streamlined invoice capture, approval workflows, bill pay, collections, and cash application."
            },
            {
                title: "Payroll & Compliance",
                description: "End-to-end payroll operations and filings across multiple jurisdictions, synced with your HR systems."
            },
            {
                title: "Management Reporting",
                description: "Board packs, KPI scorecards, and rolling forecasts that help leadership make the right calls."
            },
            {
                title: "Systems & Automation",
                description: "ERP/GL migrations, integrations, and automated workflows (NetSuite, QuickBooks Online, and more)."
            },
            {
                title: "Audit & Diligence Readiness",
                description: "Policies, controls, documentation, and PBC management that simplify audits and fundraising."
            },
        ],
    },

    industries: {
        title: "Industries We Serve",
        subtitle: "We've built finance operations across a wide range of sectors:",
        industriesList: [
            "Professional Services",
            "E-commerce & Retail",
            "Aviation & Logistics",
            "Real Estate",
            "SaaS & Technology",
            "Healthcare",
            "Hospitality",
            "Non-profit",
        ],
    },

    about: {
        title: "Reliable numbers. Every month.",
        description: "Prism Advisors acts as an extension of your finance team. With a proven cadence, rigorous controls, and modern systems, we give leadership confidence in every decision.",
        stats: [
            "2-day average month-end close",
            "99.8% reconciliation accuracy",
            "<24h vendor onboarding",
        ],
        testimonials: [
            {
                quote: "Prism rebuilt our finance stack and gave us real-time visibility. Our board updates are now painless.",
                author: "COO, E-commerce",
            },
            {
                quote: "Clear reports, fast closes, and thoughtful forecasting—we finally feel in control.",
                author: "Founder, SaaS",
            },
        ],
    },

    insights: {
        title: "Insights & Resources",
        articles: [
            "How to accelerate your month-end close",
            "5 controls to put in place before your next audit",
            "Rolling forecasts: a CFO's playbook",
        ],
    },

    contact: {
        title: "Let's Talk",
        subtitle: "Tell us about your business and we'll design an accounting plan tailored to your needs.",
    },

    footer: {
        links: [
            { label: "Privacy", href: "#" },
            { label: "Terms", href: "#" },
            { label: "Client portal", href: "#portal" },
        ],
    },
};

// Create the context
const DataContext = createContext<DataContextType | undefined>(undefined);

// Provider component
export function DataProvider({ children }: { children: ReactNode }) {
    return (
        <DataContext.Provider value={siteData}>
            {children}
        </DataContext.Provider>
    );
}

// Custom hook to use the data context
export function useData() {
    const context = useContext(DataContext);
    if (context === undefined) {
        throw new Error('useData must be used within a DataProvider');
    }
    return context;
}