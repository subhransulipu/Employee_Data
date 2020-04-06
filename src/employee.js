import React,{Component} from 'react';
// import ReactTable from "react-table";  
import MaterialTable from "material-table";
import { forwardRef } from 'react';
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
// import "react-table/react-table.css";  


const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
  };

class Employee extends Component{
    constructor(){
        super();
        
         this.state={data:[]}
        console.log("state",this.state)
        
    }
    
    componentDidMount(){
        const url="https://corona-virus-stats.herokuapp.com/api/v1/cases/countries-search"

        fetch(url,{
            method:"GET"
        }).then(res =>res.json()).then(posts => {
          
            this.setState(
                {data:posts.data.rows}
            )
            // debugger;
            console.log( "data",posts.data.rows)
        })
    }
 
    
    render(){
        // const{data}=this.state.data;
        console.log("fafa",this.state.data)
        this.state={columns : [
            { title: 'Country',field: 'country'},
            { title: 'Country Abbreviation',field: 'country_abbreviation', headerStyle:{}},
            { title: 'Total Cases',field: 'total_cases'},
            { title: 'New Cases',field: 'new_cases'},
            { title: 'Total Deaths',field: 'total_deaths'},
            { title: 'New Deaths',field: 'new_deaths', headerStyle:{}},
            { title: 'Total Recovered',field: 'total_recovered'},
            { title: 'Active Cases',field: 'active_cases'},
            { title: 'Serious Critical',field: 'serious_critical', headerStyle:{}},
            { title: 'Cases Per Mill Pop',field: 'cases_per_mill_pop'},
            { title: 'Flag',field: 'flag'},
        ] ,}
        
           
        return(
            <div>
                <MaterialTable  
                  columns={this.state.columns} 
                  data={this.state.data}  

                  icons={tableIcons}
                  options={{  
                    pageSize: 10,
                    pageSizeOptions: [10,20,30],
                    toolbar: true,
                    paging: true,
                    actionsColumnIndex: -1,
                  }}
        // editable={{
        //   onRowAdd: newData =>
        //   new Promise((resolve,reject)=>{
        //       setTimeout(()=>{
        //           // eslint-disable-next-line no-lone-blocks
        //           {
        //         this.state.data.push(newData);
        //         this.setState({ data:this.state.data}, ()=>resolve());
        //         console.log( this.state.data)
        //         // this.setState(data)
        //       }
        //       resolve();
        //     },1000)

        //   })
        //     ,
        //   onRowUpdate: (newData, oldData) =>
        //     new Promise((resolve, reject) => {
        //       setTimeout(() => {
        //         {
        //           const index =  this.state.data.indexOf(oldData);
        //           // eslint-disable-next-line react/no-direct-mutation-state
        //           this.state.data[index] = newData;
        //           this.setState({ data : this.state.data}, () => resolve());
        //           console.log( this.state.data)
        //         }
        //         resolve()
        //       }, 1000)
        //     })
        //     ,
        //   onRowDelete: oldData =>
        //     new Promise((resolve, reject) => {
        //       setTimeout(() => {
        //         {
        //           const index =  this.state.data.indexOf(oldData);
        //           this.state.data.splice(index, 1);
        //           this.setState({ data: this.state.data }, () => resolve());
        //           console.log( this.state.data)
        //         }
        //         resolve()
        //       }, 1000)
        //     }),
        // }}
                  
                  pageSizeOptions = {[2,4, 6]}  
                  title="Employee Details"
              /> 
            </div>
            
        )
    }


}
export default Employee;