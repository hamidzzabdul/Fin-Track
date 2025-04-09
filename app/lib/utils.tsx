export const fetchExpenses = async () => {
  try {
    const res = await fetch("/api/expense");
    if (!res.ok) {
      const erorData = await res.json();
      throw new Error(erorData.message || "Failed to fetch expenses");
    }
    return res.json();
  } catch (error) {
    console.log("fetch error", error);
    throw new Error("network error please try again");
  }
};
export const fetchIncomes = async () => {
  try {
    const res = await fetch("/api/income");
    if (!res.ok) {
      const erorData = await res.json();
      throw new Error(erorData.message || "Failed to fetch expenses");
    }
    return res.json();
  } catch (error) {
    console.log("fetch error", error);
    throw new Error("network error please try again");
  }
};

// recent transactions
export interface Transaction {
  id: string;
  name: string;
  date: string;
  amount: number;
  emoji: string;
  type: "income" | "expense";
}
export const fetchRecentTransactions = async (limit = 8) => {
  try {
    const [expensesRes, incomeRes] = await Promise.all([
      fetch("/api/expense"),
      fetch("/api/income"),
    ]);

    if (!expensesRes.ok || !incomeRes.ok) {
      throw new Error("Failed to fetch recent transactions");
    }

    const expenses: Transaction[] = await expensesRes.json();
    const incomes: Transaction[] = await incomeRes.json();

    const typedExpenses = expenses.map((expense) => ({
      ...expense,
      type: "expense" as const,
    }));
    const typedIncomes = incomes.map((income) => ({
      ...income,
      type: "income" as const,
    }));

    const allTransactions = [...typedIncomes, ...typedExpenses]
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, limit);

    return allTransactions;
  } catch (error) {
    console.error("Error fetching transactions:", error);
    throw new Error("Failed to load recent transactions");
  }
};

export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

export const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "KSH",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};
