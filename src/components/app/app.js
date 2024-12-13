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
               salary: 500,
               increase: false,
               rise: false,
               id: 3,
            },
            {
               name: 'Ivan P.',
               salary: 8000,
               increase: true,
               rise: true,
               id: 4,
            },
            {
               name: 'Stepan B.',
               salary: 2000,
               increase: false,
               rise: false,
               id: 5,
            },
         ],
         term: '',
         filter: '',
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

   searchEmp = (items, term) => {
      if (term.length === 0) {
         return items;
      }

      return items.filter((item) => {
         return item.name.indexOf(term) > -1;
      });
   };

   onUpdateSearch = (term) => {
      this.setState({ term });
   };

   filterPost = (items, filter) => {
      switch (filter) {
         case 'rise':
            return items.filter((item) => item.rise);
         case 'moreThen1000':
            return items.filter((item) => item.salary > 1000);
         default:
            return items;
      }
   };

   onFilterSelect = (filter) => {
      this.setState({ filter });
   };

   render() {
      const { data, term, filter } = this.state;
      const visibleData = this.filterPost(this.searchEmp(data, term), filter);
      const employees = this.state.data.length;
      const increased = this.state.data.filter((item) => item.increase).length;

      return (
         <div className="app">
            <AppInfo employees={employees} increased={increased} />

            <div className="search-panel">
               <SearchPanel onUpdateSearch={this.onUpdateSearch} />
               <AppFilter
                  filter={filter}
                  onFilterSelect={this.onFilterSelect}
               />
            </div>

            <EmployeesList
               data={visibleData}
               onDelete={this.deleteItem}
               onToggleProp={this.onToggleProp}
               ifSalaryIsMore={this.ifSalaryIsMore}
            />
            <EmployeesAddForm onAdd={this.addEmployee} />
            {/* <Counter /> */}
         </div>
      );
   }
}

export default App;
