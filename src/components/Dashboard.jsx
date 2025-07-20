import { TrendingUp, TrendingDown, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../src/ui/card";
import { Button } from "../src/ui/button";

const Dashboard = () => {
  const [showBalance, setShowBalance] = useState(true);

  const balance = 18000;
  const monthlySpending = -2840.12;
  const monthlyIncome = 4200.0;

  const recentTransactions = [
    {
      id: 1,
      description: "Spotify",
      amount: -9.99,
      date: "Today",
      category: "Entertainment",
    },
    {
      id: 2,
      description: "Salary",
      amount: 4200.0,
      date: "Yesterday",
      category: "Income",
    },
    {
      id: 3,
      description: "Grocery Store",
      amount: -87.45,
      date: "Yesterday",
      category: "Food",
    },
    {
      id: 4,
      description: "Gas Station",
      amount: -45.2,
      date: "2 days ago",
      category: "Transport",
    },
    {
      id: 5,
      description: "Coffee Shop",
      amount: -12.5,
      date: "2 days ago",
      category: "Food",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Welcome back, Beteumen Ange</h1>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setShowBalance(!showBalance)}
        >
          {showBalance ? (
            <EyeOff className="h-4 w-4" />
          ) : (
            <Eye className="h-4 w-4" />
          )}
        </Button>
      </div>

      {/* Balance Card */}
      <Card className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg">
        <CardContent className="p-6">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-white/80 text-sm">Total Balance</p>
              <p className="text-3xl font-bold mt-1">
                {showBalance ? `€${balance.toLocaleString()}` : "••••••"}
              </p>
            </div>
            <div className="text-right">
              <p className="text-white/80 text-sm">This month</p>
              <div className="flex items-center gap-1 mt-1">
                {monthlySpending < 0 ? (
                  <TrendingDown className="h-4 w-4" />
                ) : (
                  <TrendingUp className="h-4 w-4" />
                )}
                <span className="text-sm">
                  €{Math.abs(monthlySpending).toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Monthly Income
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-green-500" />
              <span className="text-2xl font-bold text-green-500">
                +€{monthlyIncome.toLocaleString()}
              </span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Monthly Spending
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <TrendingDown className="h-4 w-4 text-red-500" />
              <span className="text-2xl font-bold text-red-500">
                €{Math.abs(monthlySpending).toLocaleString()}
              </span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Available to Spend
            </CardTitle>
          </CardHeader>
          <CardContent>
            <span className="text-2xl font-bold">
              €{(balance + monthlySpending).toLocaleString()}
            </span>
          </CardContent>
        </Card>
      </div>

      {/* Recent Transactions */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentTransactions.map((transaction) => (
              <div
                key={transaction.id}
                className="flex items-center justify-between p-2 hover:bg-muted/50 rounded-lg transition-colors"
              >
                <div className="flex-1">
                  <p className="font-medium">{transaction.description}</p>
                  <p className="text-sm text-muted-foreground">
                    {transaction.date} • {transaction.category}
                  </p>
                </div>
                <span
                  className={`font-semibold ${
                    transaction.amount > 0 ? "text-green-500" : "text-black"
                  }`}
                >
                  {transaction.amount > 0 ? "+" : ""}€
                  {Math.abs(transaction.amount).toFixed(2)}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
