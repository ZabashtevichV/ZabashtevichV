import { AxiosResponse } from 'axios';
import { ProductItem } from 'src/api/ozon/types';
import { CheckboxTableRowType } from 'src/components/checkbox-table';

export const mapProductsResponse = (data: AxiosResponse<{ result: { items: ProductItem[] } }>) =>
  data.data.result.items.map((p) => ({
    cells: [
      { type: 'image', value: p.name, url: p.primary_image },
      { type: 'cell', value: p.min_price.split('.')[0] },
      { type: 'cell', value: p.offer_id },
      { type: 'cell', value: p.barcode },
      { type: 'icon', value: p.visible },
      { type: 'date', value: p.created_at },
    ] as unknown as CheckboxTableRowType[],
    name: p.name,
    id: p.id.toString(),
  }));

export function applyFilter({
  inputData,
  filterName,
}: {
  inputData: Array<{ cells: CheckboxTableRowType[]; name: string; id: string }>;
  filterName: string;
}) {
  if (filterName) {
    inputData = inputData.filter(
      (product) => product.name.toLowerCase().indexOf(filterName.toLowerCase()) !== -1
    );
  }

  return inputData;
}
