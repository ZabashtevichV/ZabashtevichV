import { Label } from 'src/components/label';
import { SvgColor } from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name: string) => (
  <SvgColor width="100%" height="100%" src={`/assets/icons/navbar/${name}.svg`} />
);

export const navData = [
  {
    title: 'Задачи',
    path: '/tasks',
    icon: icon('ic-tasks'),
    info: (
      <Label color="success" variant="inverted">
        +3
      </Label>
    ),
  },
  {
    title: 'Заявки',
    path: '/requests',
    icon: icon('ic-requests'),
    info: (
      <Label color="error" variant="inverted">
        +3
      </Label>
    ),
  },
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
    path: '/remains',
    icon: icon('ic-warehouse'),
  },
  {
    title: 'Расходники',
    path: '/costs',
    icon: icon('ic-cart'),
  },
  {
    title: 'Отгрузки',
    path: '/loads',
    icon: icon('ic-blog'),
    info: (
      <Label color="error" variant="inverted">
        +3
      </Label>
    ),
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
  {
    title: 'Создание заявок',
    path: '/create-request',
    icon: icon('ic-get'),
  },
  {
    title: 'Калькулятор',
    path: '/calculator',
    icon: icon('ic-calculator'),
  },
];
