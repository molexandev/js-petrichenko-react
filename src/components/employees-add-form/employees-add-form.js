import { Component } from 'react';
import './employees-add-form.css';

class EmployeesAddForm extends Component {
   constructor(props) {
      super(props);
      this.state = {
         name: '',
         salary: '',
      };
   }

   onValueChange = (e) => {
      this.setState({
         [e.target.name]: e.target.value,
      });
   };

   //

   // Обробник відправки форми
   handleSubmit = (e) => {
      e.preventDefault();
      const { name, salary } = this.state;
      console.log('Введені дані:', { name, salary });

      this.setState({
         name: '',
         salary: '',
      });

      // Тут можна виконати будь-які інші дії, наприклад, викликати функцію додавання співробітника
   };
   //
   render() {
      const { name, salary } = this.state;

      return (
         <div className="app-add-form">
            <h3>Добавьте нового сотрудника</h3>
            <form className="add-form d-flex" onSubmit={this.handleSubmit}>
               <input
                  type="text"
                  className="form-control new-post-label"
                  placeholder="Как его зовут?"
                  onChange={this.onValueChange}
                  name="name"
                  value={name} // Прив'язка до значення в стані
               />
               <input
                  type="number"
                  className="form-control new-post-label"
                  placeholder="З/П в $?"
                  onChange={this.onValueChange}
                  name="salary"
                  value={salary} // Прив'язка до значення в стані
               />
               <button type="submit" className="btn btn-outline-light">
                  Добавить
               </button>
            </form>
         </div>
      );
   }
}

export default EmployeesAddForm;
