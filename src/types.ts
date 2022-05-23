export type ResponseParams = {
  status: number;
  message: string;
  success: boolean;
  data?: any;
}

export interface Item {
  id:                  string;
  site_id:             string;
  title:               string;
  seller:              Seller;
  price:               number;
  prices:              Prices;
  sale_price:          any;
  currency_id:         string;
  available_quantity:  number;
  sold_quantity:       number;
  buying_mode:         string;
  listing_type_id:     string;
  stop_time:           Date;
  condition:           string;
  permalink:           string;
  thumbnail:           string;
  thumbnail_id:        string;
  accepts_mercadopago: boolean;
  installments:        Installments;
  address:             Address;
  shipping:            Shipping;
  seller_address:      SellerAddress;
  attributes:          Attribute[];
  original_price:      any;
  category_id:         string;
  official_store_id:   any;
  domain_id:           string;
  catalog_product_id:  string;
  tags:                string[];
  catalog_listing:     boolean;
  use_thumbnail_id:    boolean;
  offer_score:         any;
  offer_share:         any;
  match_score:         any;
  winner_item_id:      any;
  melicoin:            any;
  discounts:           any;
  order_backend:       number;
}

export interface Address {
  state_id:   string;
  state_name: string;
  city_id:    any;
  city_name:  string;
}

export interface Attribute {
  name:                 string;
  values:               Value[];
  attribute_group_id:   string;
  attribute_group_name: string;
  source:               number;
  id:                   string;
  value_id:             null | string;
  value_name:           string;
  value_struct:         Struct | null;
}

export interface Struct {
  number: number;
  unit:   string;
}

export interface Value {
  id:     null | string;
  name:   string;
  struct: Struct | null;
  source: number;
}

export interface Installments {
  quantity:    number;
  amount:      number;
  rate:        number;
  currency_id: string;
}

export interface Prices {
  id:                    string;
  prices:                Price[];
  presentation:          Presentation;
  payment_method_prices: any[];
  reference_prices:      ReferencePrice[];
  purchase_discounts:    any[];
}

export interface Presentation {
  display_currency: string;
}

export interface Price {
  id:                    string;
  type:                  string;
  amount:                number;
  regular_amount:        any;
  currency_id:           string;
  last_updated:          Date;
  conditions:            Conditions;
  exchange_rate_context: string;
  metadata:              Metadata;
}

export interface Conditions {
  context_restrictions: string[];
  start_time:           Date | null;
  end_time:             Date | null;
  eligible:             boolean;
}

export interface Metadata {
}

export interface ReferencePrice {
  id:                    string;
  type:                  string;
  conditions:            Conditions;
  amount:                number;
  currency_id:           string;
  exchange_rate_context: string;
  tags:                  any[];
  last_updated:          Date;
}

export interface Seller {
  id:                 number;
  permalink:          string;
  registration_date:  Date;
  car_dealer:         boolean;
  real_estate_agency: boolean;
  tags:               string[];
  eshop:              Eshop;
  seller_reputation:  SellerReputation;
}

export interface Eshop {
  seller:           number;
  eshop_rubro:      any;
  eshop_id:         number;
  nick_name:        string;
  site_id:          string;
  eshop_logo_url:   string;
  eshop_status_id:  number;
  eshop_experience: number;
  eshop_locations:  any[];
}

export interface SellerReputation {
  power_seller_status: string;
  level_id:            string;
  metrics:             Metrics;
  transactions:        Transactions;
}

export interface Metrics {
  cancellations:         Cancellations;
  claims:                Cancellations;
  delayed_handling_time: Cancellations;
  sales:                 Sales;
}

export interface Cancellations {
  period: string;
  rate:   number;
  value:  number;
}

export interface Sales {
  period:    string;
  completed: number;
}

export interface Transactions {
  canceled:  number;
  period:    string;
  total:     number;
  ratings:   Ratings;
  completed: number;
}

export interface Ratings {
  negative: number;
  neutral:  number;
  positive: number;
}

export interface SellerAddress {
  id:           string;
  comment:      string;
  address_line: string;
  zip_code:     string;
  country:      City;
  state:        City;
  city:         City;
  latitude:     string;
  longitude:    string;
}

export interface City {
  id:   null | string;
  name: string;
}

export interface Shipping {
  free_shipping: boolean;
  mode:          string;
  tags:          string[];
  logistic_type: string;
  store_pick_up: boolean;
}

export interface AvailableFilter {
  id:     string;
  name:   string;
  type:   string;
  values: AvailableFilterValue[];
}

export interface AvailableFilterValue {
  id:      string;
  name:    string;
  results: number;
}

export interface FormattedItem {
  id: string;
  title: string;
  price: {
      amount: number;
      currency: string;
      decimals: number;
  };
  picture: string;
  condition: string;
  free_shipping: boolean;
  description?: string;
}
