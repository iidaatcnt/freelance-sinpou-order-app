"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';
import { Order } from '@/types';

export default function CreateOrderPage() {
  const router = useRouter();
  const [order, setOrder] = useState<Order>({
    id: uuidv4(),
    projectName: '',
    clientName: '',
    deliveryDate: '',
    reward: 0,
    workDetails: '',
    paymentTerms: '',
    acceptanceCriteria: '',
    intellectualProperty: '成果物の知的財産権は、別途書面にて定める場合を除き、発注者に帰属するものとします。ただし、フリーランスが本業務遂行のために独自に開発した技術、ノウハウ、著作物等については、フリーランスに帰属するものとします。',
    confidentiality: '発注者およびフリーランスは、本業務遂行を通じて知り得た相手方の営業上、技術上その他一切の秘密情報を、相手方の書面による事前の承諾なくして第三者に開示、漏洩してはならないものとします。本契約終了後も同様とします。',
    terminationConditions: '発注者は、フリーランスが本契約に違反した場合、またはフリーランスの責めに帰すべき事由により本業務の継続が困難と判断した場合、書面による通知をもって本契約を解除できるものとします。フリーランスは、発注者が本契約に違反した場合、または発注者の責めに帰すべき事由により本業務の継続が困難と判断した場合、書面による通知をもって本契約を解除できるものとします。この場合、発注者は、フリーランスが解除日までに実施した業務に対する報酬を支払うものとします。',
    notes: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setOrder((prevOrder) => ({
      ...prevOrder,
      [name]: name === 'reward' ? parseFloat(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // ここで発注書データを保存する処理を実装（例: ローカルストレージ、APIなど）
    console.log('発注書データ:', order);
    alert('発注書が作成されました！');
    router.push('/orders'); // 発注書一覧ページにリダイレクト
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">発注書作成</h1>
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
          発注書を作成
        </button>
      </form>
    </div>
  );
}
