class A 
{
    xyz()
    {
        console.log("parent class property")
    }
}
class B extends A 
{
    abcd()
    {
        console.log("child class property")
    }
}

let y=new B()
y.xyz()
y.abcd()
