import {
  HOME_INFO,
  HOME_CAROUSE_INDEX,
  HOME_IS_LINEAR_GRADIENT,
  HOME_CATEGORY_LIST,
  ACTIVE,
} from '@store/home-store/types';

let myCategoryList = [
  {
    id: '0',
    name: '推荐',
    isFreeze: true,
  },
  {
    id: '1',
    name: 'Vip',
    isFreeze: true,
  },
];

export const HOME_INITIAL_INFO: HOME_INFO = {
  isLinearGradient: true, // 是否显示渐变导航栏
  carouseObjs: {
    carouseIndex: 0, // 轮播图滑动下标
    colors: ['#fff', '#fff', '#fff'],
  },
  myCategoryList,
};

export const homeReducer = (state = HOME_INITIAL_INFO, active: ACTIVE) => {
  switch (active.type) {
    case HOME_CAROUSE_INDEX:
      return {
        ...state,
        carouseObjs: active.payload,
      };
    case HOME_IS_LINEAR_GRADIENT:
      return {
        ...state,
        isLinearGradient: active.payload,
      };
    case HOME_CATEGORY_LIST:
      return {
        ...state,
        myCategoryList: active.payload,
      };
    default:
      return state;
  }
};
