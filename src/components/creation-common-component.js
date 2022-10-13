export default function CreationCommonComponent({className, text}){
    return (
        <div className={className}>
            <div>
                <h1>{text}</h1>
            </div>
        </div>
    )
}