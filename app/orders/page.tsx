"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getOrders, deleteOrder } from '@/lib/orderStorage';
import { Order } from '@/types';

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    setOrders(getOrders());
  }, []);

  const handleDelete = (id: string) => {
    if (confirm('本当にこの発注書を削除しますか？')) {
      deleteOrder(id);
      setOrders(getOrders()); // 更新されたリストを再取得
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">発注書一覧</h1>
      {orders.length === 0 ? (
        <p>まだ発注書がありません。発注書作成ページから新しい発注書を作成してください。</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {orders.map((order) => (
            <div key={order.id} className="bg-white shadow-md rounded-lg p-4">
              <h2 className="text-xl font-semibold mb-2">{order.projectName}</h2>
              <p><strong>発注者:</strong> {order.clientName}</p>
              <p><strong>納期:</strong> {order.deliveryDate}</p>
              <p><strong>報酬:</strong> ¥{order.reward.toLocaleString()}</p>
              <div className="mt-4 flex space-x-2">
                <Link href={`/orders/${order.id}`}>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    詳細・編集
                  </button>
                </Link>
                <button
                  onClick={() => handleDelete(order.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  削除
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
