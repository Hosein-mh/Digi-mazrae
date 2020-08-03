import React from 'react'
import { Root, MenuItem, MenuDesc } from './style';
import { NavLink } from 'react-router-dom';
import DashbordIcon from '../../components/icons/Dashbord.icon';
import UsersIcon from '../../components/icons/Users.icon';
import CategoriesIcon from '../../components/icons/Categories.icon';
import OrdersIcon from '../../components/icons/Orders.icon';
import ProductIcon from '../../components/icons/Products.icon';

export default function index() {
  return (
    <Root>
      <NavLink exact to="/dashbord">
        <MenuItem>
          <DashbordIcon />
          <MenuDesc>داشبورد</MenuDesc>
        </MenuItem>
      </NavLink>
      <NavLink to="/dashbord/users">
        <MenuItem>
          <UsersIcon />
          <MenuDesc>کاربران</MenuDesc>
        </MenuItem>
      </NavLink>
      <NavLink to="/dashbord/categories">
        <MenuItem>
          <CategoriesIcon />
          <MenuDesc>دسته بندی</MenuDesc>
        </MenuItem>
      </NavLink>
      <NavLink to="/dashbord/products">
        <MenuItem>
          <ProductIcon />
          <MenuDesc>محصولات</MenuDesc>
        </MenuItem>
      </NavLink>
      <NavLink to="/dashbord/orders">
        <MenuItem>
          <OrdersIcon />
          <MenuDesc>سفارشات</MenuDesc>
        </MenuItem>
      </NavLink>
    </Root>
  )
}
