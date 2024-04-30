const express=require('express');
const app=express();
const dotenv=require('dotenv');
dotenv.config();
app.use(express.json());
const PORT=process.env.PORT;
let halls=[{
    name:"Normal hall",
    seats:80,
    price:40000,
    hallid:1,
    amenties:"Fans,Bright Lights",
    customerdetails:[{
        customerName: "guna",
        date: new Date("2024-04-25"),
        start: "09:30 AM",
        end: "2:00 PM",
        status: "confirmed",
      }]
},{
    name:"AC Hall",
    seats:150,
    price:60000,
    amenties:"AC,Bright Lights,Projectors",
    hallid:2,
    customerdetails:[{
        customerName: "sam",
        date: new Date("2024-04-30"),
        start: "07:00 AM",
        end: "2:30 PM",
        status: "confirmed",
      }]
},
{
    name:"Premium Hall",
    seats:200,
    price:100000,
    amenties:"Fans,Bright Lights,AC,Screen Projector,WIFI,Parking",
    hallid:3,
    customerdetails:[{
        customerName: "ravi",
        date: new Date("2024-05-03"),
        start: "06:00 AM",
        end: ":2:00 PM",
        status: "confirmed",
      }]
}
]
app.post('/createandbookhall',(req,res)=>{
    halls.push({

            name:req.body.name,
            seats:req.body.seats,
            price:req.body.price,
            amenties:req.body.amenties,
            hallid:req.body.hallid,
            customerdetails:[{
                customerName: req.body.customerdetails.customerName,
                date: req.body.customerdetails.date,
                start: req.body.customerdetails.start,
                end: req.body.customerdetails.end,
                status: req.body.customerdetails.status,
              }]

    })
})
app.get('/listcustomers',(req,res)=>{
    let customers=[];
    halls.forEach((hall)=>{
         let customerdet={name:hall.name}
         hall.customerdetails.forEach((customer)=>{
              customerdet.customerName=customer.customerName;
              customerdet.date=customer.date;
              customerdet.start=customer.start;
              customerdet.end=customer.end;
         })
   customers.push(customerdet)

        })
        res.send(customers)
})
app.get('/halls',(req,res)=>{
    res.send(halls)
})

app.listen(PORT,()=>{
    console.log("server running ")
})