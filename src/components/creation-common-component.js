export default function CreationCommonComponent({className, text}){
    return (
        <div className={`${className}`}>
            <div className="overlay">
                <h1>{text}</h1>
            </div>
        </div>
    )
}