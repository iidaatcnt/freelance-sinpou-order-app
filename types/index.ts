export interface Order {
  id: string;
  projectName: string;
  clientName: string;
  deliveryDate: string;
  reward: number;
  workDetails: string; // 具体的な作業内容
  paymentTerms: string; // 報酬と支払い条件
  acceptanceCriteria: string; // 検収条件
  intellectualProperty: string; // 知的財産権の帰属
  confidentiality: string; // 秘密保持義務
  terminationConditions: string; // 契約解除の条件
  notes: string; // 備考
}
