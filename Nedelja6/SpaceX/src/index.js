import { launchList }  from "./components/LaunchLists";
import { selectList,getSelectedValue } from "./components/SelectList"
import { getPastLunches, getLunchesByYear, getCompanyInfo } from "./service";
import { companyName } from "./components/CompanyName";

const app = document.querySelector('#app');

const addToApp = () => {
    app.innerHTML = ''

    getCompanyInfo()
        .then(res => {
            app.appendChild(companyName(res.data))

        getPastLunches()
            .then(res =>  {
                app.appendChild(selectList(res.data))
        
            getPastLunches()
                .then(res => {
                    app.appendChild(launchList(res.data))
                }) 
            })  
        })
}
addToApp()

app.addEventListener('change', () => {
    if(getSelectedValue() == 'All') {
        addToApp()
    } 
    else {           
        app.innerHTML = `
            ${getCompanyInfo()
                .then(res => {
                    app.appendChild(companyName(res.data))
                })}
             
            ${getPastLunches()
                .then(res =>  {
                    app.appendChild(selectList(res.data))
                })}     
                
            ${getLunchesByYear(getSelectedValue())
                .then(res => {
                    app.appendChild(launchList(res.data))
            })}  
        `                              
    }             
})
