import { Label } from 'src/components/label';
import { SvgColor } from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name: string) => (
  <SvgColor width="100%" height="100%" src={`/assets/icons/navbar/${name}.svg`} />
);

export const navData = [
  {
    title: 'Панель',
    path: '/',
    icon: icon('ic-analytics'),
  },
  {
    title: 'Сотрудники',
    path: '/user',
    icon: icon('ic-user'),
  },
  {
    title: 'Остатки',
    path: '/warehouse',
    icon: icon('ic-warehouse'),
  },
  {
    title: 'Отгрузки',
    path: '/products',
    icon: icon('ic-cart'),
    info: (
      <Label color="error" variant="inverted">
        +3
      </Label>
    ),
  },
  {
    title: 'Блоги',
    path: '/blog',
    icon: icon('ic-blog'),
  },
  {
    title: 'Авторизация',
    path: '/sign-in',
    icon: icon('ic-lock'),
  },
  {
    title: 'Не найдено',
    path: '/404',
    icon: icon('ic-disabled'),
  },
];
