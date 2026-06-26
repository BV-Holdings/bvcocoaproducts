"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export interface InProgressCert {
  name: string;
  percent: number;
}

export interface QualityCertificationsGridProps {
  activeHeading?: string;
  activeCertifications?: string[];
  progressHeading?: string;
  inProgressCertifications?: InProgressCert[];
}

const defaultActive = [
  "Certificate of Origin",
  "Phytosanitary Certificate",
  "CoA Approval",
  "Lab Compliance Verified",
  "EUDR Validated",
  "Export License",
];

// NOTE: these remain "in progress" rather than "held" until actually confirmed/audited — do not flip to active without verification.
const defaultInProgress: InProgressCert[] = [
  { name: "Organic Certification (USDA/EU)", percent: 85 },
  { name: "ISO 22000 Food Safety", percent: 60 },
  { name: "Rainforest Alliance Audit", percent: 40 },
];

export function QualityCertificationsGrid({
  activeHeading = "Active Certifications",
  activeCertifications = defaultActive,
  progressHeading = "In Progress / Renewal",
  inProgressCertifications = defaultInProgress,
}: QualityCertificationsGridProps) {
  return (
    <section className="mx-auto max-w-container-max px-gutter py-xl">
      <div className="grid grid-cols-1 gap-xl md:grid-cols-2">
        <div>
          <div className="mb-lg flex items-center gap-sm border-b border-charcoal/10 pb-sm">
            <span className="h-3 w-3 rounded-full bg-sustainableGreen" />
            <h3 className="text-headline-md font-headline-md text-cocoaBrown">{activeHeading}</h3>
          </div>
          <ul className="grid grid-cols-1 gap-md sm:grid-cols-2">
            {activeCertifications.map((cert, i) => (
              <motion.li
                key={cert}
                className="flex items-center gap-sm rounded-lg bg-softSand p-sm"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.05, ease: "easeOut" }}
              >
                <CheckCircle2 className="h-5 w-5 shrink-0 text-sustainableGreen" />
                <span className="text-charcoal">{cert}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        <div>
          <div className="mb-lg flex items-center gap-sm border-b border-charcoal/10 pb-sm">
            <span className="h-3 w-3 rounded-full bg-terracotta" />
            <h3 className="text-headline-md font-headline-md text-cocoaBrown">{progressHeading}</h3>
          </div>
          <div className="space-y-md">
            {inProgressCertifications.map((cert, i) => (
              <motion.div
                key={cert.name}
                className="rounded-lg bg-softSand p-md"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.08, ease: "easeOut" }}
              >
                <div className="mb-xs flex items-center justify-between">
                  <span className="font-bold text-cocoaBrown">{cert.name}</span>
                  <span className="text-xs font-bold text-terracotta">{cert.percent}%</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-charcoal/10">
                  <div className="h-full rounded-full bg-terracotta" style={{ width: `${cert.percent}%` }} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
