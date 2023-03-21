


export function Section (props) {
    return(
        <section>
            <div>
                    <h2>{props.title}</h2>
                    <p>{props.subTitle}</p>
                    <ul class="games-list">
                       {props.children}
                    </ul>
                </div>    
        </section>    
    )
}