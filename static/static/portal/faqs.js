var data=[]
d3.csv("{% static 'portal/data/File.csv' %}").then(function(datapoints){
       data=datapoints
       const iitg = data.filter(r=>  r['Institute'] === 'Indian Institute of Technology Guwahati' && r['Academic Program Name'] === 'Computer Science and Engineering (4 Years, Bachelor of Technology)' && r['Round']==6 && r['Seat Type'] == 'OPEN' && r['Gender'] == 'Gender-Neutral')
       const cr_g=[]
       const iitd = data.filter(r=>  r['Institute'] === 'Indian Institute of Technology Delhi' && r['Academic Program Name'] === 'Electrical Engineering (4 Years, Bachelor of Technology)' && r['Round']==6 && r['Seat Type'] == 'OPEN' && r['Gender'] == 'Gender-Neutral')
       const cr_d=[]
       const iitb = data.filter(r=>  r['Institute'] === 'Indian Institute of Technology Bombay' && r['Academic Program Name'] === 'Civil Engineering (4 Years, Bachelor of Technology)' && r['Round']==6 && r['Seat Type'] == 'OPEN' && r['Gender'] == 'Gender-Neutral')
       const cr_b=[]
       const iitp = data.filter(r=>  r['Institute'] === 'Indian Institute of Technology Patna' && r['Academic Program Name'] === 'Computer Science and Engineering (4 Years, Bachelor of Technology)' && r['Round']==6 && r['Seat Type'] == 'OPEN' && r['Gender'] == 'Gender-Neutral')
       const cr_p=[]
       const iitg_mnc = data.filter(r=>  r['Institute'] === 'Indian Institute of Technology Guwahati' && r['Academic Program Name'] === 'Mathematics and Computing (4 Years, Bachelor of Technology)' && r['Round']==6 && r['Seat Type'] == 'OPEN' && r['Gender'] == 'Gender-Neutral')
       const iitg_ai = data.filter(r=>  r['Institute'] === 'Indian Institute of Technology Guwahati' && r['Academic Program Name'] === 'Data Science and Artificial Intelligence (4 Years, Bachelor of Technology)' && r['Round']==6 && r['Seat Type'] == 'OPEN' && r['Gender'] == 'Gender-Neutral')
       const iitg_mech= data.filter(r=>  r['Institute'] === 'Indian Institute of Technology Guwahati' && r['Academic Program Name'] === 'Mechanical Engineering (4 Years, Bachelor of Technology)' && r['Round']==6 && r['Seat Type'] == 'OPEN' && r['Gender'] == 'Gender-Neutral')
       const iitg_eee = data.filter(r=>  r['Institute'] === 'Indian Institute of Technology Guwahati' && r['Academic Program Name'] === 'Electronics and Electrical Engineering (4 Years, Bachelor of Technology)' && r['Round']==6 && r['Seat Type'] == 'OPEN' && r['Gender'] == 'Gender-Neutral')

       const cr_g_mnc=[]
       const cr_g_ai=[]
       const cr_g_mech=[]
       const cr_g_eee=[]
       console.log(iitg.length)
       
       for(i=0;i<iitg.length;i++)
        {
            cr_g.push(iitg[i]['Closing Rank'])
            cr_d.push(iitd[i]['Closing Rank'])
            cr_b.push(iitb[i]['Closing Rank'])
            cr_p.push(iitp[i]['Closing Rank'])
            cr_g_mech.push(iitg_mech[i]['Closing Rank'])
            cr_g_eee.push(iitg_eee[i]['Closing Rank'])
            cr_g_mnc.push(iitg_mnc[i]['Closing Rank'])
        }
        
        for(i=0;i<iitg_ai.length;i++)
            {
                if(iitg_ai[i]['Year'] >='2021'){
                    cr_g_ai.push(iitg_ai[i]['Closing Rank'])
                }
                else{
                    cr_g_ai.push(0);
                } 
            }
            console.log(cr_g_ai)
        
    //    const iitd = data.filter(r=>  r['Institute'] === 'Indian Institute of Technology Delhi' && r['Academic Program Name'] === 'Electrical Engineering (4 Years, Bachelor of Technology)' && r['Round']==6 && r['Seat Type'] == 'OPEN' && r['Gender'] == 'Gender-Neutral')
    //    const cr_d=[]
    //    for(i=0;i<iitd.length;i++)
    //     {
    //         cr_d.push(iitd[i]['Closing Rank'])
    //     }
    //     const iitb = data.filter(r=>  r['Institute'] === 'Indian Institute of Technology Bombay' && r['Academic Program Name'] === 'Civil Engineering (4 Years, Bachelor of Technology)' && r['Round']==6 && r['Seat Type'] == 'OPEN' && r['Gender'] == 'Gender-Neutral')
    //     const cr_b=[]
    //     for(i=0;i<iitb.length;i++)
    //      {
    //          cr_b.push(iitb[i]['Closing Rank'])
    //      }
    //      const iitp = data.filter(r=>  r['Institute'] === 'Indian Institute of Technology Patna' && r['Academic Program Name'] === 'Computer Science and Engineering (4 Years, Bachelor of Technology)' && r['Round']==6 && r['Seat Type'] == 'OPEN' && r['Gender'] == 'Gender-Neutral')
    //      const cr_p=[]
    //      for(i=0;i<iitp.length;i++)
    //       {
    //           cr_p.push(iitp[i]['Closing Rank'])
    //       }

const line=document.getElementById('line');
const bar=document.getElementById('bar');

line.addEventListener('click',changeline);
bar.addEventListener('click',changebar);   
       


var ctx = document.getElementById('myChart').getContext('2d');
const chart = new Chart(ctx,{
    type:'bar',
    data:{
        labels: ['2016','2017','2018','2019','2020','2021','2022','2023'],
        datasets: [{ label: 'CSE in IIT Guwahati',
                     backgroundColor: 'rgb(255,99,132)',
                     data:cr_g
    },{
                    label: 'EEE in IIT Delhi',
                    backgroundColor: 'yellow',
                    data:cr_d
    },{
                    label: 'Civil in IIT Bombay',
                    backgroundColor: 'red',
                    data:cr_b

    },{            
                    label: 'CSE in IIT Patna',
                    backgroundColor: 'pink',
                    data:cr_p

    }]
    
    
}
});
function changeline(){
    const updatetype='line';
    chart.config.type=updatetype;
    chart.update();
  
}; 
function changebar(){
   const updatetype='bar';
   chart.config.type=updatetype;
   chart.update();
   
};

var ctx2 = document.getElementById('myChart2').getContext('2d');
const chart2 = new Chart(ctx2,{
    type:'bar',
    data:{
        labels: ['2016','2017','2018','2019','2020','2021','2022','2023'],
        datasets: [{ label: 'EEE IITG',
                     backgroundColor: 'rgb(255,99,132)',
                     data:cr_g_eee
    },{
                    label: 'ME IITG',
                    backgroundColor: 'yellow',
                    data:cr_g_mech
    },{
                    label: 'MNC IITG',
                    backgroundColor: 'red',
                    data:cr_g_mnc

    },{            
                    label: 'DSAI IITG',
                    backgroundColor: 'pink',
                    data:cr_g_ai

    }]
    
    
}
});
function changeline(){
    const updatetype='line';
    chart2.config.type=updatetype;
    chart2.update();
  
}; 
function changebar(){
   const updatetype='bar';
   chart2.config.type=updatetype;
   chart2.update();
   
};











});

       

       



var acc= document.querySelectorAll('.accordion');
var i;
for(i=0;i<acc.length;i++)
    {
        acc[i].addEventListener('click',function(){
            

            var pannel=this.nextElementSibling;
            if(pannel.style.display === 'block'){
                pannel.style.display = 'none';
            }
            else{
                pannel.style.display = 'block';
            }
        });
    }
