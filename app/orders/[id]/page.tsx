"use client";

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { getOrderById, saveOrder } from '@/lib/orderStorage';
import { Order } from '@/types';

export default function EditOrderPage() {
  const params = useParams();
  const router = useRouter();
  const { id } = params;
  const [order, setOrder] = useState<Order | undefined>(undefined);

  useEffect(() => {
    if (id && typeof id === 'string') {
      setOrder(getOrderById(id));
    }
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setOrder((prevOrder) => ({
      ...prevOrder!,
      [name]: name === 'reward' ? parseFloat(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (order) {
      saveOrder(order);
      alert('発注書が更新されました！');
      router.push('/orders');
    }
  };

  if (!order) {
    return <div className="text-center py-8">発注書が見つかりません。</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">発注書編集</h1>
      <form onSubmit={handleSubmit} className="space-y-6 bg-white shadow-md rounded-lg p-6">
        <div>
          <label htmlFor="projectName" className="block text-gray-700 text-sm font-bold mb-2">プロジェクト名:</label>
          <input
            type="text"
            id="projectName"
            name="projectName"
            value={order.projectName}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        <div>
          <label htmlFor="clientName" className="block text-gray-700 text-sm font-bold mb-2">発注者名:</label>
          <input
            type="text"
            id="clientName"
            name="clientName"
            value={order.clientName}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        <div>
          <label htmlFor="deliveryDate" className="block text-gray-700 text-sm font-bold mb-2">納期:</label>
          <input
            type="date"
            id="deliveryDate"
            name="deliveryDate"
            value={order.deliveryDate}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        <div>
          <label htmlFor="reward" className="block text-gray-700 text-sm font-bold mb-2">報酬:</label>
          <input
            type="number"
            id="reward"
            name="reward"
            value={order.reward}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
            min="0"
          />
        </div>

        <div>
          <label htmlFor="workDetails" className="block text-gray-700 text-sm font-bold mb-2">具体的な作業内容:</label>
          <textarea
            id="workDetails"
            name="workDetails"
            value={order.workDetails}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded h-24"
            placeholder="例: Webサイトのデザイン作成（トップページ、下層ページ3枚）、コーディング（HTML, CSS, JavaScript）、テスト、修正対応。具体的な機能や成果物の仕様を明確に記述してください。"
            required
          ></textarea>
        </div>

        <div>
          <label htmlFor="paymentTerms" className="block text-gray-700 text-sm font-bold mb-2">報酬と支払い条件:</label>
          <textarea
            id="paymentTerms"
            name="paymentTerms"
            value={order.paymentTerms}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded h-24"
            placeholder="例: 報酬総額〇〇円（税抜）。成果物納品後、フリーランスからの請求書受領後30日以内に指定口座へ振り込みにて支払う。振込手数料は発注者負担。"
            required
          ></textarea>
        </div>

        <div>
          <label htmlFor="acceptanceCriteria" className="block text-gray-700 text-sm font-bold mb-2">検収条件:</label>
          <textarea
            id="acceptanceCriteria"
            name="acceptanceCriteria"
            value={order.acceptanceCriteria}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded h-24"
            placeholder="例: 成果物納品後7営業日以内に発注者が内容を確認し、問題がなければ検収完了とする。不備があった場合は、具体的な修正内容をフリーランスに通知し、フリーランスは速やかに修正対応を行う。"
            required
          ></textarea>
        </div>

        <div>
          <label htmlFor="intellectualProperty" className="block text-gray-700 text-sm font-bold mb-2">知的財産権:</label>
          <textarea
            id="intellectualProperty"
            name="intellectualProperty"
            value={order.intellectualProperty}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded h-24"
            placeholder="成果物の知的財産権の帰属について具体的に記述してください。"
            required
          ></textarea>
        </div>

        <div>
          <label htmlFor="confidentiality" className="block text-gray-700 text-sm font-bold mb-2">秘密保持:</label>
          <textarea
            id="confidentiality"
            name="confidentiality"
            value={order.confidentiality}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded h-24"
            placeholder="秘密保持義務について具体的に記述してください。"
            required
          ></textarea>
        </div>

        <div>
          <label htmlFor="terminationConditions" className="block text-gray-700 text-sm font-bold mb-2">契約解除の条件:</label>
          <textarea
            id="terminationConditions"
            name="terminationConditions"
            value={order.terminationConditions}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded h-24"
            placeholder="一方的なキャンセルを防ぐため、契約解除の条件を明確に記述してください。"
            required
          ></textarea>
        </div>

        <div>
          <label htmlFor="notes" className="block text-gray-700 text-sm font-bold mb-2">備考:</label>
          <textarea
            id="notes"
            name="notes"
            value={order.notes}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded h-24"
            placeholder="その他、特記事項があれば記述してください。"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded-lg font-bold text-lg hover:bg-blue-700"
        >
          発注書を更新
        </button>
      </form>
    </div>
  );
}
