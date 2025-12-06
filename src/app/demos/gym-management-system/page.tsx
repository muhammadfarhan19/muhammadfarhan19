// @ts-nocheck

"use client";

import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Users,
  ShoppingCart,
  FileText,
  UserPlus,
  Package,
  CreditCard,
  Calendar,
  Activity,
  Menu,
  X,
  TrendingUp,
  DollarSign,
} from "lucide-react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const GymManagementSystem = () => {
  const [members, setMembers] = useState([]);
  const [products, setProducts] = useState([
    { id: 1, name: "Air Mineral", price: 5000, stock: 50 },
    { id: 2, name: "BCAA", price: 150000, stock: 20 },
    { id: 3, name: "Protein Bar", price: 25000, stock: 30 },
    { id: 4, name: "Whey Protein", price: 500000, stock: 15 },
  ]);
  const [transactions, setTransactions] = useState([]);
  const [activePage, setActivePage] = useState("dashboard");
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const packages = [
    { id: "daily", name: "Harian", price: 25000, duration: 1 },
    { id: "weekly", name: "Mingguan", price: 150000, duration: 7 },
    { id: "monthly", name: "Bulanan", price: 500000, duration: 30 },
    { id: "quarterly", name: "3 Bulan", price: 1350000, duration: 90 },
  ];

  const [newMember, setNewMember] = useState<any>({
    name: "",
    phone: "",
    address: "",
    gender: "male",
  });

  const [selectedMember, setSelectedMember] = useState<any>(null);
  const [selectedPackage, setSelectedPackage] = useState<any>(null);
  const [paymentMethod, setPaymentMethod] = useState<any>("cash");
  const [cart, setCart] = useState<any>([]);
  const [cartMember, setCartMember] = useState<any>(null);

  const showNotification = (message: any) => {
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  const handleRegisterMember = () => {
    if (!newMember.name || !newMember.phone) {
      showNotification("Nama dan nomor HP wajib diisi!");
      return;
    }

    const member: any = {
      id: `MBR${Date.now()}`,
      ...newMember,
      status: "Inactive",
      registeredDate: new Date().toISOString(),
      membershipEndDate: null,
      qrCode: `QR-${Date.now()}`,
    };

    setMembers([...members, member]);
    setNewMember({ name: "", phone: "", address: "", gender: "male" });
    showNotification(
      `Member ${member.name} berhasil didaftarkan! ID: ${member.id}`
    );
  };

  const handleActivateMembership = () => {
    if (!selectedMember || !selectedPackage) {
      showNotification("Pilih member dan paket terlebih dahulu!");
      return;
    }

    const pkg = packages.find((p) => p.id === selectedPackage);
    const member = members.find((m) => m.id === selectedMember);

    let startDate = new Date();
    if (member.status === "Active" && member.membershipEndDate) {
      startDate = new Date(member.membershipEndDate);
    }

    const endDate = new Date(startDate);
    endDate.setDate(endDate.getDate() + pkg.duration);

    const updatedMembers = members.map((m) => {
      if (m.id === selectedMember) {
        return {
          ...m,
          status: "Active",
          currentPackage: pkg.name,
          membershipStartDate: startDate.toISOString(),
          membershipEndDate: endDate.toISOString(),
        };
      }
      return m;
    });
    setMembers(updatedMembers);

    const transaction = {
      id: `TRX${Date.now()}`,
      type: "membership",
      memberId: selectedMember,
      memberName: member.name,
      description: `Aktivasi ${pkg.name}`,
      amount: pkg.price,
      paymentMethod,
      date: new Date().toISOString(),
    };
    setTransactions([...transactions, transaction]);

    showNotification(`Membership ${member.name} berhasil diaktivasi!`);
    setSelectedMember(null);
    setSelectedPackage(null);
  };

  const addToCart = (productId, quantity) => {
    const product = products.find((p) => p.id === productId);
    if (!product) return;

    if (quantity > product.stock) {
      showNotification("Stok tidak mencukupi!");
      return;
    }

    const existingItem = cart.find((item) => item.productId === productId);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.productId === productId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      );
    } else {
      setCart([
        ...cart,
        { productId, name: product.name, price: product.price, quantity },
      ]);
    }
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      showNotification("Keranjang kosong!");
      return;
    }

    const total = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    const updatedProducts = products.map((p) => {
      const cartItem = cart.find((c) => c.productId === p.id);
      if (cartItem) {
        return { ...p, stock: p.stock - cartItem.quantity };
      }
      return p;
    });
    setProducts(updatedProducts);

    const transaction = {
      id: `TRX${Date.now()}`,
      type: "product",
      memberId: cartMember,
      memberName: cartMember
        ? members.find((m) => m.id === cartMember)?.name
        : "Guest",
      items: cart,
      amount: total,
      paymentMethod,
      date: new Date().toISOString(),
    };
    setTransactions([...transactions, transaction]);

    showNotification(
      `Transaksi berhasil! Total: Rp ${total.toLocaleString("id-ID")}`
    );
    setCart([]);
    setCartMember(null);
  };

  const activeMembers = members.filter((m) => m.status === "Active").length;
  const totalRevenue = transactions.reduce((sum, t) => sum + t.amount, 0);
  const membershipRevenue = transactions
    .filter((t) => t.type === "membership")
    .reduce((sum, t) => sum + t.amount, 0);
  const productRevenue = transactions
    .filter((t) => t.type === "product")
    .reduce((sum, t) => sum + t.amount, 0);

  // Prepare chart data
  const getDailyRevenue = () => {
    const days = {};
    transactions.forEach((t) => {
      const date = new Date(t.date).toLocaleDateString("id-ID", {
        day: "2-digit",
        month: "short",
      });
      if (!days[date]) {
        days[date] = { date, membership: 0, product: 0, total: 0 };
      }
      if (t.type === "membership") {
        days[date].membership += t.amount;
      } else {
        days[date].product += t.amount;
      }
      days[date].total += t.amount;
    });
    return Object.values(days).slice(-7);
  };

  const chartData = getDailyRevenue();

  useEffect(() => {
    const checkExpired = () => {
      const now = new Date();
      const updatedMembers = members.map((m) => {
        if (
          m.membershipEndDate &&
          new Date(m.membershipEndDate) < now &&
          m.status === "Active"
        ) {
          return { ...m, status: "Expired" };
        }
        return m;
      });
      if (JSON.stringify(updatedMembers) !== JSON.stringify(members)) {
        setMembers(updatedMembers);
      }
    };
    const interval = setInterval(checkExpired, 60000);
    return () => clearInterval(interval);
  }, [members]);

  const menuItems = [
    { id: "dashboard", name: "Dashboard", icon: Activity },
    { id: "members", name: "Member", icon: Users },
    { id: "membership", name: "Membership", icon: Calendar },
    { id: "products", name: "Penjualan", icon: ShoppingCart },
    { id: "reports", name: "Laporan", icon: FileText },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {showAlert && (
        <div className="fixed top-4 right-4 z-50 animate-in slide-in-from-top">
          <Alert className="bg-green-50 border-green-200">
            <AlertDescription className="text-green-800">
              {alertMessage}
            </AlertDescription>
          </Alert>
        </div>
      )}

      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "w-64" : "w-20"
        } bg-gray-900 text-white transition-all duration-300 flex flex-col`}
      >
        <div className="p-4 flex items-center justify-between border-b border-gray-800">
          {sidebarOpen && <h1 className="text-xl font-bold">Gym Manager</h1>}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 hover:bg-gray-800 rounded-lg"
          >
            {sidebarOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => setActivePage(item.id)}
                    className={`w-full flex items-center gap-3 p-3 rounded-lg transition-colors ${
                      activePage === item.id
                        ? "bg-blue-600 text-white"
                        : "text-gray-300 hover:bg-gray-800"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    {sidebarOpen && <span>{item.name}</span>}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="p-4 border-t border-gray-800">
          {sidebarOpen && (
            <div className="text-xs text-gray-400">
              <p>Gym Management System</p>
              <p>v1.0.0</p>
            </div>
          )}
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <div className="p-8">
          {/* Dashboard */}
          {activePage === "dashboard" && (
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Dashboard</h2>
                <p className="text-gray-600">Overview sistem manajemen gym</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-gray-600">
                      Total Member
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">{members.length}</div>
                    <p className="text-xs text-gray-500 mt-1">
                      Terdaftar di sistem
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-gray-600">
                      Member Aktif
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-green-600">
                      {activeMembers}
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      Membership aktif
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-gray-600">
                      Total Transaksi
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-blue-600">
                      {transactions.length}
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      Semua transaksi
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-gray-600">
                      Total Pendapatan
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-purple-600">
                      Rp {(totalRevenue / 1000000).toFixed(1)}jt
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Keseluruhan</p>
                  </CardContent>
                </Card>
              </div>

              {/* Charts */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="w-5 h-5" />
                      Tren Pendapatan Harian
                    </CardTitle>
                    <CardDescription>
                      Pendapatan 7 hari terakhir
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {chartData.length > 0 ? (
                      <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={chartData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="date" tick={{ fontSize: 12 }} />
                          <YAxis tick={{ fontSize: 12 }} />
                          <Tooltip
                            formatter={(value) =>
                              `Rp ${value.toLocaleString("id-ID")}`
                            }
                            contentStyle={{ fontSize: 12 }}
                          />
                          <Legend />
                          <Line
                            type="monotone"
                            dataKey="total"
                            stroke="#8b5cf6"
                            strokeWidth={2}
                            name="Total"
                          />
                          <Line
                            type="monotone"
                            dataKey="membership"
                            stroke="#3b82f6"
                            strokeWidth={2}
                            name="Membership"
                          />
                          <Line
                            type="monotone"
                            dataKey="product"
                            stroke="#10b981"
                            strokeWidth={2}
                            name="Produk"
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    ) : (
                      <div className="h-[300px] flex items-center justify-center text-gray-500">
                        Belum ada data transaksi
                      </div>
                    )}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <DollarSign className="w-5 h-5" />
                      Perbandingan Pendapatan
                    </CardTitle>
                    <CardDescription>
                      Membership vs Produk (7 hari)
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {chartData.length > 0 ? (
                      <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={chartData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="date" tick={{ fontSize: 12 }} />
                          <YAxis tick={{ fontSize: 12 }} />
                          <Tooltip
                            formatter={(value) =>
                              `Rp ${value.toLocaleString("id-ID")}`
                            }
                            contentStyle={{ fontSize: 12 }}
                          />
                          <Legend />
                          <Bar
                            dataKey="membership"
                            fill="#3b82f6"
                            name="Membership"
                          />
                          <Bar dataKey="product" fill="#10b981" name="Produk" />
                        </BarChart>
                      </ResponsiveContainer>
                    ) : (
                      <div className="h-[300px] flex items-center justify-center text-gray-500">
                        Belum ada data transaksi
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Transaksi Terakhir</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {transactions
                      .slice(-5)
                      .reverse()
                      .map((t) => (
                        <div
                          key={t.id}
                          className="flex justify-between items-center p-3 bg-gray-50 rounded-lg"
                        >
                          <div>
                            <p className="font-medium">{t.memberName}</p>
                            <p className="text-sm text-gray-600">
                              {t.type === "membership"
                                ? t.description
                                : `${t.items?.length} item`}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-green-600">
                              Rp {t.amount.toLocaleString("id-ID")}
                            </p>
                            <p className="text-xs text-gray-500">
                              {new Date(t.date).toLocaleString("id-ID")}
                            </p>
                          </div>
                        </div>
                      ))}
                    {transactions.length === 0 && (
                      <p className="text-center text-gray-500 py-4">
                        Belum ada transaksi
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Members Page */}
          {activePage === "members" && (
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Manajemen Member
                </h2>
                <p className="text-gray-600">Kelola data member gym</p>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Daftar Member Baru</CardTitle>
                  <CardDescription>
                    Registrasi member baru ke sistem
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label>Nama Lengkap *</Label>
                      <Input
                        value={newMember.name}
                        onChange={(e) =>
                          setNewMember({ ...newMember, name: e.target.value })
                        }
                        placeholder="Masukkan nama lengkap"
                      />
                    </div>
                    <div>
                      <Label>Nomor HP *</Label>
                      <Input
                        value={newMember.phone}
                        onChange={(e) =>
                          setNewMember({ ...newMember, phone: e.target.value })
                        }
                        placeholder="08xxxxxxxxxx"
                      />
                    </div>
                    <div>
                      <Label>Alamat</Label>
                      <Input
                        value={newMember.address}
                        onChange={(e) =>
                          setNewMember({
                            ...newMember,
                            address: e.target.value,
                          })
                        }
                        placeholder="Alamat lengkap"
                      />
                    </div>
                    <div>
                      <Label>Jenis Kelamin</Label>
                      <Select
                        value={newMember.gender}
                        onValueChange={(v) =>
                          setNewMember({ ...newMember, gender: v })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="male">Laki-laki</SelectItem>
                          <SelectItem value="female">Perempuan</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <Button onClick={handleRegisterMember} className="w-full">
                    <UserPlus className="w-4 h-4 mr-2" />
                    Daftar Member
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Daftar Member ({members.length})</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {members.map((member) => (
                      <div
                        key={member.id}
                        className="flex justify-between items-center p-4 bg-gray-50 rounded-lg"
                      >
                        <div>
                          <p className="font-bold">{member.name}</p>
                          <p className="text-sm text-gray-600">
                            {member.id} | {member.phone}
                          </p>
                          {member.currentPackage && (
                            <p className="text-xs text-blue-600">
                              Paket: {member.currentPackage}
                            </p>
                          )}
                        </div>
                        <div className="text-right">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-medium ${
                              member.status === "Active"
                                ? "bg-green-100 text-green-800"
                                : member.status === "Expired"
                                ? "bg-red-100 text-red-800"
                                : "bg-gray-100 text-gray-800"
                            }`}
                          >
                            {member.status}
                          </span>
                          {member.membershipEndDate && (
                            <p className="text-xs text-gray-500 mt-1">
                              Berakhir:{" "}
                              {new Date(
                                member.membershipEndDate
                              ).toLocaleDateString("id-ID")}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                    {members.length === 0 && (
                      <p className="text-center text-gray-500 py-4">
                        Belum ada member terdaftar
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Membership Page */}
          {activePage === "membership" && (
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Aktivasi Membership
                </h2>
                <p className="text-gray-600">
                  Aktivasi dan perpanjangan membership member
                </p>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Aktivasi / Perpanjangan Membership</CardTitle>
                  <CardDescription>
                    Pilih member dan paket untuk aktivasi atau perpanjangan
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label>Pilih Member</Label>
                    <Select
                      value={selectedMember}
                      onValueChange={setSelectedMember}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih member" />
                      </SelectTrigger>
                      <SelectContent>
                        {members.map((m) => (
                          <SelectItem key={m.id} value={m.id}>
                            {m.name} - {m.id} ({m.status})
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label>Pilih Paket</Label>
                    <div className="grid grid-cols-2 gap-4 mt-2">
                      {packages.map((pkg) => (
                        <Card
                          key={pkg.id}
                          className={`cursor-pointer transition-all ${
                            selectedPackage === pkg.id
                              ? "ring-2 ring-blue-500"
                              : ""
                          }`}
                          onClick={() => setSelectedPackage(pkg.id)}
                        >
                          <CardHeader className="pb-2">
                            <CardTitle className="text-lg">
                              {pkg.name}
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-2xl font-bold text-blue-600">
                              Rp {pkg.price.toLocaleString("id-ID")}
                            </p>
                            <p className="text-sm text-gray-600">
                              {pkg.duration} hari
                            </p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label>Metode Pembayaran</Label>
                    <Select
                      value={paymentMethod}
                      onValueChange={setPaymentMethod}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cash">Cash</SelectItem>
                        <SelectItem value="transfer">Transfer</SelectItem>
                        <SelectItem value="qris">QRIS</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button
                    onClick={handleActivateMembership}
                    className="w-full"
                    size="lg"
                  >
                    <CreditCard className="w-4 h-4 mr-2" />
                    Proses Pembayaran
                  </Button>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Products Page */}
          {activePage === "products" && (
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Penjualan Produk
                </h2>
                <p className="text-gray-600">Kelola penjualan produk gym</p>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Penjualan Produk</CardTitle>
                  <CardDescription>
                    Pilih produk dan proses pembayaran
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label>Member (Opsional)</Label>
                    <Select value={cartMember} onValueChange={setCartMember}>
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih member atau Guest" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value={null}>Guest</SelectItem>
                        {members.map((m) => (
                          <SelectItem key={m.id} value={m.id}>
                            {m.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label>Daftar Produk</Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                      {products.map((product) => (
                        <Card key={product.id}>
                          <CardHeader className="pb-2">
                            <CardTitle className="text-base">
                              {product.name}
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="flex justify-between items-center">
                              <div>
                                <p className="text-lg font-bold text-blue-600">
                                  Rp {product.price.toLocaleString("id-ID")}
                                </p>
                                <p className="text-sm text-gray-600">
                                  Stok: {product.stock}
                                </p>
                              </div>
                              <Button
                                size="sm"
                                onClick={() => addToCart(product.id, 1)}
                                disabled={product.stock === 0}
                              >
                                Tambah
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>

                  {cart.length > 0 && (
                    <Card className="bg-blue-50">
                      <CardHeader>
                        <CardTitle>Keranjang Belanja</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        {cart.map((item, idx) => (
                          <div
                            key={idx}
                            className="flex justify-between items-center p-2 bg-white rounded"
                          >
                            <div>
                              <p className="font-medium">{item.name}</p>
                              <p className="text-sm text-gray-600">
                                {item.quantity} x Rp{" "}
                                {item.price.toLocaleString("id-ID")}
                              </p>
                            </div>
                            <p className="font-bold">
                              Rp{" "}
                              {(item.quantity * item.price).toLocaleString(
                                "id-ID"
                              )}
                            </p>
                          </div>
                        ))}
                        <div className="border-t pt-2 flex justify-between items-center">
                          <p className="text-lg font-bold">Total</p>
                          <p className="text-2xl font-bold text-blue-600">
                            Rp{" "}
                            {cart
                              .reduce(
                                (sum, item) => sum + item.price * item.quantity,
                                0
                              )
                              .toLocaleString("id-ID")}
                          </p>
                        </div>
                        <div>
                          <Label>Metode Pembayaran</Label>
                          <Select
                            value={paymentMethod}
                            onValueChange={setPaymentMethod}
                          >
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="cash">Cash</SelectItem>
                              <SelectItem value="transfer">Transfer</SelectItem>
                              <SelectItem value="qris">QRIS</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <Button
                          onClick={handleCheckout}
                          className="w-full"
                          size="lg"
                        >
                          <CreditCard className="w-4 h-4 mr-2" />
                          Bayar
                        </Button>
                      </CardContent>
                    </Card>
                  )}
                </CardContent>
              </Card>
            </div>
          )}

          {/* Reports Page */}
          {activePage === "reports" && (
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Laporan</h2>
                <p className="text-gray-600">
                  Laporan keuangan dan operasional
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm">
                      Pendapatan Membership
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold text-green-600">
                      Rp {membershipRevenue.toLocaleString("id-ID")}
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm">Pendapatan Produk</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold text-blue-600">
                      Rp {productRevenue.toLocaleString("id-ID")}
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm">Total Pendapatan</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold text-purple-600">
                      Rp {totalRevenue.toLocaleString("id-ID")}
                    </p>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Stok Produk</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {products.map((p) => (
                      <div
                        key={p.id}
                        className="flex justify-between items-center p-3 bg-gray-50 rounded-lg"
                      >
                        <div>
                          <p className="font-medium">{p.name}</p>
                          <p className="text-sm text-gray-600">
                            Rp {p.price.toLocaleString("id-ID")}
                          </p>
                        </div>
                        <div
                          className={`font-bold ${
                            p.stock < 10 ? "text-red-600" : "text-green-600"
                          }`}
                        >
                          Stok: {p.stock}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Riwayat Transaksi</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {transactions.map((t) => (
                      <div key={t.id} className="p-3 bg-gray-50 rounded-lg">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="font-bold">{t.memberName}</p>
                            <p className="text-sm text-gray-600">
                              {t.type === "membership"
                                ? t.description
                                : `Penjualan Produk (${t.items?.length} item)`}
                            </p>
                            <p className="text-xs text-gray-500 mt-1">
                              {new Date(t.date).toLocaleString("id-ID")} |{" "}
                              {t.paymentMethod.toUpperCase()}
                            </p>
                          </div>
                          <p className="font-bold text-green-600">
                            Rp {t.amount.toLocaleString("id-ID")}
                          </p>
                        </div>
                      </div>
                    ))}
                    {transactions.length === 0 && (
                      <p className="text-center text-gray-500 py-4">
                        Belum ada transaksi
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default GymManagementSystem;
