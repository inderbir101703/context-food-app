function UserInput({id,type,handleClick,children,addClasses, ...props}){
    return  <span className="control">
    <label htmlFor={id}>{children}</label>
    <input id={id} type={type} {...props}/></span>

}
export default UserInput