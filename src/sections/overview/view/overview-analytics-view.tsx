import { _posts, _timeline } from 'src/_mock';
import { DashboardContent } from 'src/layouts/dashboard';
import { Grid2 } from '@mui/material';

import { AnalyticsNews } from '../analytics-news';
import { AnalyticsCurrentVisits } from '../analytics-current-visits';
import { AnalyticsOrderTimeline } from '../analytics-order-timeline';
import { AnalyticsWebsiteVisits } from '../analytics-website-visits';
import { AnalyticsWidgetSummary } from '../analytics-widget-summary';

// ----------------------------------------------------------------------

export function OverviewAnalyticsView() {
  return (
    <DashboardContent maxWidth="xl">
      <Grid2 container spacing={3}>
        <Grid2 size={{ xs: 12, sm: 6, md: 3 }}>
          <AnalyticsWidgetSummary
            title="Количество отгрузок"
            percent={2.6}
            total={15}
            icon={<img alt="icon" src="/assets/icons/glass/ic-glass-bag.svg" />}
            chart={{
              categories: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг'],
              series: [1, 2, 1, 2, 7, 2, 1, 2],
            }}
          />
        </Grid2>

        <Grid2 size={{ xs: 12, sm: 6, md: 3 }}>
          <AnalyticsWidgetSummary
            title="Баланс"
            percent={-0.1}
            total={1352831}
            color="success"
            icon={<img alt="icon" src="/assets/icons/glass/coin.svg" />}
            chart={{
              categories: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг'],
              series: [56, 47, 40, 62, 73, 30, 23, 54],
            }}
          />
        </Grid2>

        <Grid2 size={{ xs: 12, sm: 6, md: 3 }}>
          <AnalyticsWidgetSummary
            title="Отгружено на"
            percent={2.8}
            total={1723315}
            color="warning"
            icon={<img alt="icon" src="/assets/icons/glass/ic-glass-buy.svg" />}
            chart={{
              categories: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг'],
              series: [40, 70, 50, 28, 70, 75, 7, 64],
            }}
          />
        </Grid2>

        <Grid2 size={{ xs: 12, sm: 6, md: 3 }}>
          <AnalyticsWidgetSummary
            title="Количество брака"
            percent={3.6}
            total={234}
            color="error"
            icon={<img alt="icon" src="/assets/icons/glass/ic-glass-message.svg" />}
            chart={{
              categories: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Ибн', 'Июл', 'Авг'],
              series: [56, 30, 23, 54, 47, 40, 62, 73],
            }}
          />
        </Grid2>

        <Grid2 size={{ xs: 12, lg: 4, md: 6 }}>
          <AnalyticsCurrentVisits
            title="Отгружено на"
            chart={{
              series: [
                { label: 'Коледино', value: 3500 },
                { label: 'Хоругвино', value: 2500 },
                { label: 'Красноярск', value: 1500 },
                { label: 'Тверь', value: 500 },
              ],
            }}
          />
        </Grid2>

        <Grid2 size={{ xs: 12, lg: 8, md: 6 }}>
          <AnalyticsWebsiteVisits
            title="Соотношение к браку"
            chart={{
              categories: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен'],
              series: [
                { name: 'Всего', data: [100, 100, 22, 37, 67, 68, 37, 24, 55] },
                { name: 'Брак', data: [2, 2, 2, 3, 4, 5, 6, 7, 5] },
              ],
            }}
          />
        </Grid2>

        <Grid2 size={{ xs: 12, lg: 8, md: 6 }}>
          <AnalyticsNews title="Список завершенных отгрузок" list={_posts.slice(0, 5)} />
        </Grid2>

        <Grid2 size={{ xs: 12, lg: 4, md: 6 }}>
          <AnalyticsOrderTimeline title="Отгрузка Коледино #124" list={_timeline} />
        </Grid2>
      </Grid2>
    </DashboardContent>
  );
}
