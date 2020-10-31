import React from 'react'
import axios from 'axios'

export const AppContext=React.createContext()

class AppContextProvider extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={
            isAuth:false,
            email:"",
            password:"",
            token:"",
            cart:[],
            tv:[],
            mobile:[]
        }   
    
    }

    getData=async()=>{      

        try{
            let res= await axios.get("http://localhost:3004/tv")            
            
            let resp=await axios.get(" http://localhost:3004/mobile")
            
            this.setState({tv:res.data,
                        mobile:resp.data})
        }
        catch(err){
            console.log(err)
        }
        
    }
    componentDidMount()
    {
        this.getData()
    }
    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }

    handleSubmit=async(e)=>{
        e.preventDefault()
        const {email,password}=this.state
        await axios.post("https://reqres.in/api/login",{
            "email":email,
            "password":password
        }).then(res=>this.setState({token:res.data.token,
                                    isAuth:true}))
    }

    handleCart=async(url)=>{
        let res=await axios.get("http://localhost:3004"+url)
        const {data}=res
        this.setState({cart:[...this.state.cart,data]})
        alert("Item Added to cart")

    }
  render()
  {
      const {tv,mobile,cart,email,password,token,isAuth}=this.state
      const {handleCart,handleChange,handleSubmit}=this
      const value={tv,mobile,cart,email,password,token,handleCart,handleChange,handleSubmit,isAuth}
      return(
          <AppContext.Provider value={value}>
              {this.props.children}
          </AppContext.Provider>
      )
  }
}

export default AppContextProvider