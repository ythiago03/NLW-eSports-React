
export function ListItem ({href, src, alt}) {
    return(
        <li>
            <a 
                target="_blank"
                href={href}>
                <img 
                    src={src} 
                    alt={alt} />
            </a>
        </li>    
    )
}