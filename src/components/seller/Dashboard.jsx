import React from 'react';
import {
  Package,
  ShoppingCart,
  DollarSign,
  TrendingUp,
  TrendingDown,
  Eye,
  Plus
} from 'lucide-react';
import { useSeller } from '../../context/SellerContext';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const { store, products = [], orders = [] } = useSeller();

  const totalRevenue = orders.reduce((sum, order) => sum + order.total, 0);
  const pendingOrders = orders.filter(order => order.status === 'pending').length;

  const stats = [
    {
      name: 'Total Products',
      value: products.length,
      icon: Package,
      change: '+12%',
      changeType: 'positive'
    },
    {
      name: 'Pending Orders',
      value: pendingOrders,
      icon: ShoppingCart,
      change: '+5%',
      changeType: 'positive'
    },
    {
      name: 'Total Revenue',
      value: `${totalRevenue.toFixed(2)}/-`,
      icon: DollarSign,
      change: '-3%',
      changeType: 'negative'
    },
    {
      name: 'Store Views',
      value: '1,234',
      icon: Eye,
      change: '+8%',
      changeType: 'positive'
    }
  ];

  const recentOrders = orders.slice(0, 5);

  return (
    <div className="space-y-10 p-4 md:p-6 lg:p-8 bg-blue-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-semibold text-blue-800">Dashboard</h1>
          <p className="text-blue-600">Welcome back, {store?.name || 'Seller'}!</p>
        </div>
        <Link
          to="/seller/products"
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Product
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const TrendIcon = stat.changeType === 'positive' ? TrendingUp : TrendingDown;
          const trendColor =
            stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600';

          return (
            <div
              key={stat.name}
              className="bg-white border border-blue-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-blue-600 font-medium">{stat.name}</p>
                  <p className="text-2xl font-bold text-blue-900 mt-1">{stat.value}</p>
                </div>
                <div className="bg-blue-100 text-blue-700 p-3 rounded-xl">
                  <stat.icon className="h-6 w-6" />
                </div>
              </div>
              <div className="mt-4 flex items-center text-sm">
                <TrendIcon className={`h-4 w-4 mr-1 ${trendColor}`} />
                <span className={`font-semibold ${trendColor}`}>{stat.change}</span>
                <span className="text-gray-400 ml-1">from last month</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Orders */}
      <div className="bg-white border border-blue-100 rounded-2xl shadow-sm">
        <div className="px-6 py-4 border-b border-blue-100 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-blue-800">Recent Orders</h2>
          <Link
            to="/seller/orders"
            className="text-sm text-blue-600 hover:underline"
          >
            View all
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-blue-100 text-sm text-blue-800">
            <thead className="bg-blue-50 text-blue-600 text-xs uppercase tracking-wide">
              <tr>
                <th className="px-6 py-3 text-left">Order ID</th>
                <th className="px-6 py-3 text-left">Customer</th>
                <th className="px-6 py-3 text-left">Total</th>
                <th className="px-6 py-3 text-left">Status</th>
                <th className="px-6 py-3 text-left">Date</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-blue-50">
              {recentOrders.map((order) => (
                <tr key={order.id} className="hover:bg-blue-50 transition">
                  <td className="px-6 py-4 font-medium">#{order.id}</td>
                  <td className="px-6 py-4">{order.customerName}</td>
                  <td className="px-6 py-4">{order.total.toFixed(2)}/-</td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                        order.status === 'pending'
                          ? 'bg-yellow-100 text-yellow-800'
                          : order.status === 'confirmed'
                          ? 'bg-blue-100 text-blue-800'
                          : order.status === 'shipped'
                          ? 'bg-purple-100 text-purple-800'
                          : order.status === 'delivered'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-500">
                    {new Date(order.createdAt).toLocaleDateString('en-IN', {
                      day: '2-digit',
                      month: 'short',
                      year: 'numeric'
                    })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
