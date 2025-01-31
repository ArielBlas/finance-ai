import React from "react";
import { getUserAccounts } from "@/app/actions/dashboard";
import { defaultCategories } from "@/data/categories";
import AddTransactionForm from "../_components/AddTransactionForm";

const AddTransactionPage = async () => {
  const accounts = await getUserAccounts();
  return (
    <div className="max-2-3xl mx-auto px-5">
      <h1 className="text-5xl gradient-title mb-8">Add Transaction</h1>

      <AddTransactionForm accounts={accounts} categories={defaultCategories} />
    </div>
  );
};

export default AddTransactionPage;
