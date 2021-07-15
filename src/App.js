import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import MainLayout from './components/layout/MainLayout/MainLayout';
import Dashboard from './components/views/Dashboard/Dashboard';
import Login from './components/views/Login/Login';
import Waiter from './components/views/Waiter/Waiter';
import Tables from './components/views/Tables/Tables';
import Kitchen from './components/views/Kitchen/Kitchen';
import Booking from './components/views/Booking/Booking';
import NewBooking from './components/views/NewBooking/NewBooking';
import NewOrder from './components/views/NewOrder/NewOrder';
import NewEvent from './components/views/NewEvent/NewEvent';
import OrderDetails from './components/views/OrderDetails/OrderDetails';
import EventDetails from './components/views/EventDetails/EventDetails';

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={Login} />
          <Route exact path={`${process.env.PUBLIC_URL}/dashboard`} component={Dashboard} />
          <Route exact path={`${process.env.PUBLIC_URL}/waiter`} component={Waiter} />
          <Route exact path={`${process.env.PUBLIC_URL}/tables`} component={Tables} />
          <Route exact path={`${process.env.PUBLIC_URL}/kitchen`} component={Kitchen} />
          <Route exact path={`${process.env.PUBLIC_URL}/tables/booking/new`} component={NewBooking} />
          <Route exact path={`${process.env.PUBLIC_URL}/tables/booking/:id`} component={Booking} />
          <Route exact path={`${process.env.PUBLIC_URL}/tables/events/new`} component={NewEvent} />
          <Route exact path={`${process.env.PUBLIC_URL}/tables/events/:id`} component={EventDetails} />
          <Route exact path={`${process.env.PUBLIC_URL}/waiter/order/new`} component={NewOrder} />
          <Route exact path={`${process.env.PUBLIC_URL}/waiter/order/:id`} component={OrderDetails} />
        </Switch>
      </MainLayout>
    </BrowserRouter>


  );
}

export default App;
