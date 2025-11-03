export function formatCurrency(amount?: number): string {
  const value = amount ?? 0;
  return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}
