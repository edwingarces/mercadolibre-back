import { Response } from 'express';
import { AvailableFilter, AvailableFilterValue, FormattedItem, Item, ResponseParams } from './types';

export const createResponse = (params: ResponseParams, res: Response) => {
  const { status, message, success, data } = params;
  return res.status(status).json({
    success,
    message,
    data,
  });
};

export const sendErrorMessage = (message: string, res: Response) => {
  return res.status(400).json({
    success: false,
    message: message,
  });
};

export const getDecimals = (number: number) : number => (number.toString().split('.')[1] || '').length;

export const mapItems = ({
  id,
  title,
  price,
  currency_id,
  thumbnail,
  condition,
  shipping: {
    free_shipping
  }
}: Item): FormattedItem => ({
  id,
  title,
  price: {
    amount: price,
    currency: currency_id,
    decimals: getDecimals(price),
  },
  picture: thumbnail,
  condition,
  free_shipping,
});

export const mapAvailableFilters = (filters: AvailableFilter[]) => {
  const posibleCategories = filters.filter(({ id }: AvailableFilter) => id === 'category');
  const categoriesExist = posibleCategories.length;
  if (categoriesExist) {
    const { values: categories } = posibleCategories[0];
    const categoriesNames = categories.map(({ name }: AvailableFilterValue) => name);
    return categoriesNames;
  } else {
    return [];
  }
};
