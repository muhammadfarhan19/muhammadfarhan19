"use client";

import React from "react";
import {
  Check,
  X,
  Dumbbell,
  Users,
  ShoppingCart,
  Wallet,
  ClipboardCheck,
  UserCog,
  MessageCircle,
} from "lucide-react";

export default function GymQuotation() {
  const packages = [
    {
      name: "PAKET BASIC",
      price: "Rp 3.000.000",
      priceNum: 3000000,
      color: "from-blue-500 to-blue-600",
      description: "Cocok untuk gym pemula atau skala kecil",
      features: [
        { name: "Kelola Data Member", included: true, icon: Users },
        { name: "Presensi Member", included: true, icon: ClipboardCheck },
        { name: "Laporan Member Sederhana", included: true, icon: Users },
        {
          name: "Kelola Pembelian & Penjualan",
          included: false,
          icon: ShoppingCart,
        },
        { name: "Maintenance Peralatan", included: false, icon: Dumbbell },
        { name: "Kelola Keuangan", included: false, icon: Wallet },
        { name: "Kelola Pegawai", included: false, icon: UserCog },
        { name: "Dashboard Analitik", included: false, icon: Wallet },
        { name: "Notifikasi Otomatis", included: false, icon: ClipboardCheck },
      ],
    },
    {
      name: "PAKET STANDARD",
      price: "Rp 6.000.000",
      priceNum: 6000000,
      color: "from-purple-500 to-purple-600",
      description: "Pilihan terbaik untuk gym berkembang",
      popular: true,
      features: [
        { name: "Kelola Data Member", included: true, icon: Users },
        { name: "Presensi Member", included: true, icon: ClipboardCheck },
        { name: "Laporan Member Sederhana", included: true, icon: Users },
        {
          name: "Kelola Pembelian & Penjualan",
          included: true,
          icon: ShoppingCart,
        },
        { name: "Maintenance Peralatan", included: true, icon: Dumbbell },
        { name: "Kelola Keuangan", included: true, icon: Wallet },
        { name: "Kelola Pegawai", included: false, icon: UserCog },
        { name: "Dashboard Analitik", included: false, icon: Wallet },
        { name: "Notifikasi Otomatis", included: false, icon: ClipboardCheck },
      ],
    },
    {
      name: "PAKET PREMIUM",
      price: "Rp 10.000.000",
      priceNum: 10000000,
      color: "from-amber-500 to-amber-600",
      description: "Solusi lengkap untuk gym profesional",
      features: [
        { name: "Kelola Data Member", included: true, icon: Users },
        { name: "Presensi Member", included: true, icon: ClipboardCheck },
        { name: "Laporan Member Sederhana", included: true, icon: Users },
        {
          name: "Kelola Pembelian & Penjualan",
          included: true,
          icon: ShoppingCart,
        },
        { name: "Maintenance Peralatan", included: true, icon: Dumbbell },
        { name: "Kelola Keuangan", included: true, icon: Wallet },
        { name: "Kelola Pegawai", included: true, icon: UserCog },
        { name: "Dashboard Analitik", included: true, icon: Wallet },
        { name: "Notifikasi Otomatis", included: true, icon: ClipboardCheck },
      ],
    },
  ];

  const detailFeatures = [
    {
      title: "Kelola Data Member",
      items: [
        "Registrasi member baru",
        "Update profil member",
        "Riwayat keanggotaan",
        "Masa aktif membership",
      ],
    },
    {
      title: "Presensi Member",
      items: [
        "Check-in harian",
        "Histori kehadiran",
        "Laporan absensi bulanan",
      ],
    },
    {
      title: "Kelola Pembelian & Penjualan",
      items: [
        "Penjualan minuman & suplemen",
        "Pembelian alat operasional",
        "Pembelian peralatan gym",
        "Inventori stok barang",
        "Riwayat transaksi",
      ],
    },
    {
      title: "Maintenance Peralatan",
      items: [
        "Jadwal maintenance berkala",
        "Riwayat perbaikan",
        "Status kondisi alat",
        "Reminder maintenance",
      ],
    },
    {
      title: "Kelola Keuangan",
      items: [
        "Laporan pemasukan & pengeluaran",
        "Grafik keuangan",
        "Rekap bulanan & tahunan",
        "Kategori transaksi",
      ],
    },
    {
      title: "Kelola Pegawai",
      items: [
        "Data karyawan",
        "Jadwal shift",
        "Gaji & absensi",
        "Performa staff",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Dumbbell className="w-12 h-12 text-amber-400" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-amber-400 to-purple-400 bg-clip-text text-transparent">
              QUOTATION
            </h1>
          </div>
          <h2 className="text-3xl font-bold mb-3">System Management GYM</h2>
          <p className="text-slate-300 text-lg">
            Solusi digital untuk mengelola gym Anda secara profesional
          </p>
        </div>

        {/* Packages */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className="relative bg-slate-800/50 backdrop-blur border-2 border-slate-700 rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl"
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
            Detail Fitur System
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
                <li>• Instalasi & setup system</li>
                <li>• Training penggunaan system</li>
                <li>• Dokumentasi lengkap</li>
                <li>• Free maintenance 3 bulan</li>
                <li>• Technical support via WhatsApp</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3 text-purple-400">
                ⚡ Waktu Pengerjaan:
              </h4>
              <ul className="space-y-2 text-slate-300">
                <li>• Paket Basic: 2-3 minggu</li>
                <li>• Paket Standard: 3-4 minggu</li>
                <li>• Paket Premium: 4-6 minggu</li>
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
