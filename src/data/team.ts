export interface TeamMember {
  name: string;
  specialization: string;
  slug: string;
}

export const team: TeamMember[] = [
  { name: "Ola", specialization: "Stylizacja paznokci", slug: "ola" },
  { name: "Magda", specialization: "Rzęsy i brwi", slug: "magda" },
  { name: "Kasia", specialization: "Kosmetologia", slug: "kasia" },
  { name: "Natalia", specialization: "Depilacja i pielęgnacja ciała", slug: "natalia" },
  { name: "Ewa", specialization: "Masaże i rytuały ciała", slug: "ewa" },
  { name: "Zuzia", specialization: "Makijaż i stylizacje", slug: "zuzia" },
];
