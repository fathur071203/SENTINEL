export type Tool = {
  id: string;
  title: string;
  description: string;
  features: string[];
  url: string;
  platform: string;
  icon: "network" | "document" | "ledger";
};

// Tambah tools baru cukup dengan menambah satu objek di sini.
export const tools: Tool[] = [
  {
    id: "sna",
    title: "SNA Interkoneksi",
    description:
      "Analisis jejaring kepemilikan dan kepengurusan untuk mendeteksi rangkap jabatan dan keterkaitan saham berbasis NIK.",
    features: ["Kepemilikan saham", "Kepengurusan", "Rangkap jabatan"],
    url: "https://pengawasan.streamlit.app/",
    platform: "Streamlit",
    icon: "network",
  },
  {
    id: "dokumen",
    title: "Tools Dokumen",
    description:
      "Pengelolaan dokumen pengawasan: pemberian watermark, pemisahan (split), konversi, hingga penguncian dokumen.",
    features: ["Watermark", "Split", "Konversi", "Kunci dokumen"],
    url: "https://toolsdokumen.streamlit.app/",
    platform: "Streamlit",
    icon: "document",
  },
  {
    id: "rekening",
    title: "Rekening Koran & Sanction List",
    description:
      "Pembacaan dan analisis transaksi rekening koran serta deteksi nama terhadap sanction list.",
    features: ["Rekening koran", "Analisis transaksi", "Sanction list"],
    url: "https://fathur071203.github.io/ToolsSanction/",
    platform: "Web",
    icon: "ledger",
  },
];
