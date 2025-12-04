"use client";

import React from "react";
import {
  Check,
  X,
  ShoppingCart,
  Package,
  TrendingUp,
  Users,
  FileText,
  CreditCard,
  MessageCircle,
} from "lucide-react";

export default function KasirQuotation() {
  const packages = [
    {
      name: "PAKET BASIC",
      price: "Rp 2.500.000",
      priceNum: 2500000,
      color: "from-blue-500 to-blue-600",
      description: "Cocok untuk usaha kecil & UMKM",
      features: [
        { name: "Transaksi Penjualan", included: true, icon: ShoppingCart },
        { name: "Kelola Produk", included: true, icon: Package },
        { name: "Cetak Struk", included: true, icon: FileText },
        { name: "Laporan Penjualan Harian", included: true, icon: TrendingUp },
        { name: "Manajemen Stok", included: false, icon: Package },
        { name: "Multi User & Kasir", included: false, icon: Users },
        { name: "Laporan Keuangan Lengkap", included: false, icon: TrendingUp },
        { name: "Kelola Member/Pelanggan", included: false, icon: Users },
        { name: "Metode Pembayaran Multi", included: false, icon: CreditCard },
        { name: "Barcode Scanner", included: false, icon: ShoppingCart },
      ],
    },
    {
      name: "PAKET STANDARD",
      price: "Rp 5.000.000",
      priceNum: 5000000,
      color: "from-purple-500 to-purple-600",
      description: "Pilihan terbaik untuk toko & retail",
      popular: true,
      features: [
        { name: "Transaksi Penjualan", included: true, icon: ShoppingCart },
        { name: "Kelola Produk", included: true, icon: Package },
        { name: "Cetak Struk", included: true, icon: FileText },
        { name: "Laporan Penjualan Harian", included: true, icon: TrendingUp },
        { name: "Manajemen Stok", included: true, icon: Package },
        { name: "Multi User & Kasir", included: true, icon: Users },
        { name: "Laporan Keuangan Lengkap", included: true, icon: TrendingUp },
        { name: "Kelola Member/Pelanggan", included: true, icon: Users },
        { name: "Metode Pembayaran Multi", included: false, icon: CreditCard },
        { name: "Barcode Scanner", included: false, icon: ShoppingCart },
      ],
    },
    {
      name: "PAKET PREMIUM",
      price: "Rp 8.000.000",
      priceNum: 8000000,
      color: "from-amber-500 to-amber-600",
      description: "Solusi lengkap untuk bisnis profesional",
      features: [
        { name: "Transaksi Penjualan", included: true, icon: ShoppingCart },
        { name: "Kelola Produk", included: true, icon: Package },
        { name: "Cetak Struk", included: true, icon: FileText },
        { name: "Laporan Penjualan Harian", included: true, icon: TrendingUp },
        { name: "Manajemen Stok", included: true, icon: Package },
        { name: "Multi User & Kasir", included: true, icon: Users },
        { name: "Laporan Keuangan Lengkap", included: true, icon: TrendingUp },
        { name: "Kelola Member/Pelanggan", included: true, icon: Users },
        { name: "Metode Pembayaran Multi", included: true, icon: CreditCard },
        { name: "Barcode Scanner", included: true, icon: ShoppingCart },
      ],
    },
  ];

  const detailFeatures = [
    {
      title: "Transaksi Penjualan",
      items: [
        "Input transaksi cepat",
        "Pilih produk dengan mudah",
        "Hitung otomatis total & kembalian",
        "Diskon per item atau total",
        "Riwayat transaksi",
      ],
    },
    {
      title: "Kelola Produk",
      items: [
        "Tambah/edit/hapus produk",
        "Kategori produk",
        "Foto produk",
        "Harga & modal",
        "Stok tersedia",
      ],
    },
    {
      title: "Manajemen Stok",
      items: [
        "Tracking stok real-time",
        "Notifikasi stok menipis",
        "Riwayat pergerakan stok",
        "Stok masuk & keluar",
        "Laporan stok opname",
      ],
    },
    {
      title: "Multi User & Kasir",
      items: [
        "Banyak akun kasir",
        "Level akses berbeda",
        "Tracking per kasir",
        "Shift kerja",
        "Laporan per user",
      ],
    },
    {
      title: "Laporan Keuangan",
      items: [
        "Laporan penjualan harian/bulanan/tahunan",
        "Grafik penjualan",
        "Produk terlaris",
        "Laba/rugi",
        "Rekap pembayaran",
        "Export ke Excel/PDF",
      ],
    },
    {
      title: "Kelola Member/Pelanggan",
      items: [
        "Database pelanggan",
        "Poin member",
        "Diskon member",
        "Riwayat pembelian",
        "Program loyalitas",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <ShoppingCart className="w-12 h-12 text-amber-400" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-amber-400 to-purple-400 bg-clip-text text-transparent">
              QUOTATION
            </h1>
          </div>
          <h2 className="text-3xl font-bold mb-3">
            Aplikasi Kasir (POS System)
          </h2>
          <p className="text-slate-300 text-lg">
            Solusi digital untuk mengelola transaksi bisnis Anda
          </p>
        </div>

        {/* Packages */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className="bg-slate-800/50 backdrop-blur border-2 border-slate-700 rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl"
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    PALING POPULER
                  </span>
                </div>
              )}

              <div
                className={`bg-gradient-to-r ${pkg.color} rounded-xl p-6 mb-6 shadow-lg`}
              >
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <p className="text-4xl font-bold">{pkg.price}</p>
              </div>

              <p className="text-slate-300 mb-6 text-center">
                {pkg.description}
              </p>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3">
                    {feature.included ? (
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    ) : (
                      <X className="w-5 h-5 text-slate-600 flex-shrink-0 mt-0.5" />
                    )}
                    <span
                      className={
                        feature.included ? "text-white" : "text-slate-500"
                      }
                    >
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Detail Fitur */}
        <div className="bg-slate-800/50 backdrop-blur border-2 border-slate-700 rounded-2xl p-8 mb-8">
          <h3 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-amber-400 to-purple-400 bg-clip-text text-transparent">
            Detail Fitur Aplikasi
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {detailFeatures.map((section, idx) => (
              <div
                key={idx}
                className="bg-slate-900/50 rounded-xl p-6 border border-slate-700"
              >
                <h4 className="text-xl font-bold mb-4 text-amber-400">
                  {section.title}
                </h4>
                <ul className="space-y-2">
                  {section.items.map((item, iIdx) => (
                    <li key={iIdx} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-1" />
                      <span className="text-slate-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Features */}
        <div className="bg-slate-800/50 backdrop-blur border-2 border-slate-700 rounded-2xl p-8 mb-8">
          <h3 className="text-2xl font-bold mb-6 text-amber-400">
            Fitur Tambahan Premium
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700">
              <h4 className="font-bold mb-3 text-purple-400 flex items-center gap-2">
                <CreditCard className="w-5 h-5" />
                Metode Pembayaran Multi
              </h4>
              <ul className="space-y-2 text-slate-300">
                <li>• Cash (Tunai)</li>
                <li>• Transfer Bank</li>
                <li>• E-Wallet (GoPay, OVO, DANA)</li>
                <li>• QRIS</li>
                <li>• Split Payment</li>
              </ul>
            </div>
            <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700">
              <h4 className="font-bold mb-3 text-purple-400 flex items-center gap-2">
                <ShoppingCart className="w-5 h-5" />
                Barcode Scanner
              </h4>
              <ul className="space-y-2 text-slate-300">
                <li>• Scan barcode produk</li>
                <li>• Generate barcode otomatis</li>
                <li>• Cetak label barcode</li>
                <li>• Input transaksi lebih cepat</li>
                <li>• Support berbagai tipe barcode</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Terms */}
        <div className="bg-slate-800/50 backdrop-blur border-2 border-slate-700 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-6 text-amber-400">
            Ketentuan & Benefit
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold mb-3 text-purple-400">
                ✓ Sudah Termasuk:
              </h4>
              <ul className="space-y-2 text-slate-300">
                <li>• Instalasi & setup aplikasi</li>
                <li>• Training penggunaan sistem</li>
                <li>• Dokumentasi user manual</li>
                <li>• Free maintenance 3 bulan</li>
                <li>• Technical support via WhatsApp</li>
                <li>• Update & bug fixing</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3 text-purple-400">
                ⚡ Waktu Pengerjaan:
              </h4>
              <ul className="space-y-2 text-slate-300">
                <li>• Paket Basic: 1-2 minggu</li>
                <li>• Paket Standard: 2-3 minggu</li>
                <li>• Paket Premium: 3-4 minggu</li>
              </ul>
              <h4 className="font-bold mt-4 mb-3 text-purple-400">
                💳 Pembayaran:
              </h4>
              <ul className="space-y-2 text-slate-300">
                <li>• DP 50% sebelum pengerjaan</li>
                <li>• Pelunasan saat serah terima</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 text-slate-400">
          <p className="mb-2">Quotation ini berlaku selama 30 hari</p>
          <p className="text-sm">
            Untuk informasi lebih lanjut, silakan hubungi kami
          </p>
        </div>

        {/* Floating WhatsApp Button */}
        <a
          href="https://wa.me/6285156219612"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-8 right-8 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 z-50 flex items-center justify-center group"
        >
          <MessageCircle className="w-8 h-8" />
          <span className="absolute right-full mr-3 bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-xl">
            Hubungi Kami
          </span>
        </a>
      </div>
    </div>
  );
}
