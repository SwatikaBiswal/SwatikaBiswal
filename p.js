class Bank
{
    constructor(name1,phno,adhar,balance,pin)
    {
        this.name1=name1
        this.phno=phno
        this.adhar=adhar
        this.balance=balance
        this.pin=pin
    }

    display()
        {
            var p=Number(prompt("enter your pin :"))
            if (this.pin==p)
            {
                alert("your name is"+this.name1+"your balance is"+this.bal)
            }
            else{
                alert("incorrect pin")
            }
        }
        deposite()
        {
            var p=Number(prompt("enter your pin :"))
            if(this.pin==p)
            {
                var a=Number(prompt("enter your amount :"))
                alert("your previous amount is"+this.bal)
                this.bal=this.bal+a
                alert("your current amount is"+this.bal)
            }
            else{
                alert("incorrect pin")
            }
        }
        withdraw()
        {
            var p=Number(prompt("enter your pin :"))
            if(this.pin==p)
            {
                var a=Number(prompt("enter your amount :"))
                if(a<=this.bal)
                {
                    alert("your previous balance is"+this.bal)
                    this.bal=this.bal-a
                    alert("your current balance is"+this.bal)
                }
                else{
                    alert("incorrect pin")
                }
        

                
            }
            else{
                    ("incorrect pin")
            }
        }
        
    }
    alert("welcome to my bank")
    var n=prompt("enter your name :")
    var ph= Number(promot("enter your phno :"))
    var adh=Number(promot("enter your adhar :"))
    var b=Number(prompt("enter your balance :"))
    var pi=Number(prompt("enter your pin :"))
    
    let obj=new Bank(n,ph,adh,b,pi)
    var k=Number(prompt("enter your chioce :"))
    if (k==1)
    {
          display()
    }
    else if(k==2)
    {
        deposite()
    }
    else(k==3)
    {
        withdraw()
    }