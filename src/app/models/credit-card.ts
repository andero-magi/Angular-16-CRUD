export interface CreditCard {
  id: number | string
  name: string
  description: string
  bankName: string
  maxCredit: number | string
  interestRate: number | string
  active: boolean
  recommendedScore: string
  annualFee: number | string
  termsAndConditions: string
  createdDate: string
  updatedDate: string
}
