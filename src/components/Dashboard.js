import React from 'react';
import { Card, CardContent } from './Card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import '../styles/Dashboard.css';
import 'bootstrap/dist/css/bootstrap.min.css';



const salesData = [
  { name: 'Mon', sales: 300 },
  { name: 'Tue', sales: 400 },
  { name: 'Wed', sales: 500 },
  { name: 'Thu', sales: 700 },
  { name: 'Fri', sales: 600 },
  { name: 'Sat', sales: 900 },
  { name: 'Sun', sales: 750 },
];

const Dashboard = () => {
  return (
    <div className="container-fluid">
      <div className="row g-4 mb-4">
        {[
          { label: 'Total Orders', value: '2,340' },
          { label: 'Revenue Today', value: '$12,450' },
          { label: 'Conversion Rate', value: '3.5%' },
          { label: 'Top-Selling Product', value: 'Wireless Earbuds' },
        ].map((metric, i) => (
          <div key={i} className="col-sm-6 col-lg-3">
            <Card>
              <CardContent>
                <h5 className="text-muted small mb-1">{metric.label}</h5>
                <div className="h4 fw-bold text-primary">{metric.value}</div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>

      <Card>
        <CardContent>
          <h5 className="mb-3 text-primary">📈 Weekly Sales Trend</h5>
          <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="sales" stroke="#0d6efd" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <h5 className="mb-3 text-primary">📋 Orders Table</h5>
          <div className="table-responsive">
            <table className="table table-striped table-hover">
              <thead className="table-light">
                <tr>
                  <th>Order ID</th>
                  <th>Customer</th>
                  <th>Status</th>
                  <th>Amount</th>
                  <th>Payment</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { id: 'ORD001', customer: 'Alice', status: 'Shipped', amount: '$120', method: 'Credit Card' },
                  { id: 'ORD002', customer: 'Bob', status: 'Processing', amount: '$220', method: 'UPI' },
                ].map(order => (
                  <tr key={order.id}>
                    <td>{order.id}</td>
                    <td>{order.customer}</td>
                    <td>{order.status}</td>
                    <td>{order.amount}</td>
                    <td>{order.method}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;