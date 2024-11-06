import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
// import Counter from '../counter/counter';

import './app.css';

class App extends Component {
   constructor(props) {
      super(props);
      this.state = {
         data: [
            {
               name: 'John C.',
               salary: 800,
               increase: false,
               rise: true,
               id: 1,
            },
            {
               name: 'Alex M.',
               salary: 3000,
               increase: false,
               rise: false,
               id: 2,
            },
            {
               name: 'Carl W.',
               salary: 5000,
               increase: false,
               rise: false,
               id: 3,
            },
            {
               name: 'Ivan P.',
               salary: 8000,
               increase: true,
               rise: false,
               id: 4,
            },
            {
               name: 'Simon P.',
               salary: 2000,
               increase: false,
               rise: false,
               id: 5,
            },
         ],
      };
   }

   deleteItem = (id) => {
      this.setState(({ data }) => {
         // const index = data.findIndex((elem) => elem.id === id);

         // solution 1
         // const before = data.slice(0, index);
         // const after = data.slice(index + 1);

         // const newArr = [...before, ...after];

         // return {
         //    data: newArr,
         // };

         // solution 2
         return {
            data: data.filter((item) => item.id !== id),
         };
      });
   };

   addEmployee = (name, salary) => {
      this.setState(({ data }) => {
         // Створюємо новий об'єкт працівника
         const newEmployee = {
            name,
            salary,
            increase: false,
            rise: false,
            id: data.length + 1, // Унікальний id для нового працівника
         };
         // Оновлюємо стан: додаємо нового працівника до існуючого масиву
         return {
            data: [...data, newEmployee],
         };
      });
   };

   onToggleProp = (id, prop) => {
      this.setState(({ data }) => ({
         data: data.map((item) => {
            if (item.id === id) {
               return { ...item, [prop]: !item[prop] };
            }
            return item;
         }),
      }));
   };

   render() {
      const employees = this.state.data.length;
      const increased = this.state.data.filter((item) => item.increase).length;

      return (
         <div className="app">
            <AppInfo employees={employees} increased={increased} />

            <div className="search-panel">
               <SearchPanel />
               <AppFilter />
            </div>

            <EmployeesList
               data={this.state.data}
               onDelete={this.deleteItem}
               onToggleProp={this.onToggleProp}
            />
            <EmployeesAddForm onAdd={this.addEmployee} />
            {/* <Counter /> */}
         </div>
      );
   }
}

export default App;
