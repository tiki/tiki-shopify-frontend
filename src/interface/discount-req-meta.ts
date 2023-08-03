/*
 * Copyright (c) TIKI Inc.
 * MIT license. See LICENSE file in root directory.
 */
export interface DiscountReqMeta {
  type: 'product' | 'order';
  discountType: 'percentage' | 'amount';
  discountValue: number;
  minValue: number;
  minQty: number;
  onePerUser: boolean;
  products: Array<string>;
  collections: Array<string>;
}
