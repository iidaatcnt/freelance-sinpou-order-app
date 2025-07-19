import { Order } from '@/types';

const STORAGE_KEY = 'freelanceOrders';

export const saveOrder = (order: Order) => {
  const orders = getOrders();
  const existingIndex = orders.findIndex((o) => o.id === order.id);
  if (existingIndex > -1) {
    orders[existingIndex] = order;
  } else {
    orders.push(order);
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(orders));
};

export const getOrders = (): Order[] => {
  if (typeof window === 'undefined') {
    return [];
  }
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
};

export const getOrderById = (id: string): Order | undefined => {
  const orders = getOrders();
  return orders.find((o) => o.id === id);
};

export const deleteOrder = (id: string) => {
  const orders = getOrders();
  const updatedOrders = orders.filter((o) => o.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedOrders));
};
