export enum ApiTypes {
  TEST = 'https://electronicqueue.3dcafe.ru/',
  PROD = 'https://electronicqueue.3dcafe.ru/'
}
export class Api {
  public static API_LINK = ApiTypes.TEST;
}
export class MainRoutes {
  public static routes = [
    { label: '', path: 'list', adminPage: false },
    { label: '', path: 'login', adminPage: true },
    { label: '', path: 'list', adminPage: false },
    { label: '', path: 'list', adminPage: false }
  ];
}
export class Status {
  public static statuses = [
    { label: 'В работе', value: 'on_work' },
    { label: 'Обработан', value: 'processed' },
    { label: 'Ожидает обработку', value: 'deprecated' },
    { label: 'Отмененный', value: 'canceled' },
    { label: 'На редактировании', value: 'on_edit'},
    { label: 'Завершен', value: 'published'}
  ];
  public static transportStatuses = [
    { label: 'Ожидает обработку', value: 'on_processing' },
    { label: 'В работе', value: 'on_work' },
    { label: 'На согласовании', value: 'on_approve' },
    { label: 'Согласовано', value: 'approved' },
    { label: 'Завершенный', value: 'finished' },
    { label: 'Отмененный', value: 'canceled' },
    { label: 'В работе', value: 'on_work_porters_ready' },
    { label: 'В работе у грузчиков', value: 'on_work_porters' },
  ];
}
export class Roles {
  public static roleList = [
    { label: 'Диспетчер склада', value: 'dispatcher' },
    { label: 'Поставщик товаров', value: 'provider' },
    { label: 'Поставщик услуг грузчиков', value: 'porterprovider' },
    { label: 'Агент', value: 'agent' },
    { label: 'Администратор', value: 'admin' },
    { label: 'Пользователь', value: 'user'},
    { label: 'Диспетчер транспорта', value: 'transport'},
    { label: 'Менеджер', value: 'manager'}
  ];
}
export class Routes {
  public static routeList = [
    { path: 'porters-orders', title: 'Заявки грузчиков', icon: 'work', line: false, access: ['porterprovider', 'admin'] },
    { path: 'orders', title: 'Заявки', icon: 'list_alt', line: false, access: ['dispatcher', 'admin'] },
    { path: 'agent-orders', title: 'История заявок', icon: 'list_alt', line: false, access: ['agent'] },
    { path: 'transport-orders', title: 'Заявки на транспорт', icon: 'directions_car', line: false, access: ['transport', 'admin'] },
    { path: 'provider-orders', title: 'Заявки поставщикам', icon: 'shopping_cart', line: false, access: ['dispatcher', 'admin']},
    { path: 'agent-orders-create', title: 'Оформить заявку', icon: 'add', line: false, access: ['agent'] },
    { path: 'products', title: 'Склад', icon: 'home', line: false, access: ['admin', 'provider', 'dispatcher'] },
    { path: 'provider-orders', title: 'Заявки на склад', icon: 'list_alt', line: false, access: ['provider'] },
    { path: 'users', title: 'Пользователи', icon: 'account_circle', line: false, access: ['admin'] },
    { path: 'product-list', title: 'Категории товаров', icon: 'format_list_bulleted', line: false, access: ['agent', 'admin'] },
    { path: 'columbar-edit', title: 'Колумбарные ниши', icon: 'format_list_bulleted', line: false, access: ['manager', 'admin'] }
  ];
}
