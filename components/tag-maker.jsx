export function TagMaker({tags}) {
    let counter = 0;
    return (
        tags.map(tag=> {
            counter++
            let thisCount = counter;
            let thisKey = tag + thisCount.toString();
            let langClass = 'tag ' + tag;
            return (
                <div key={thisKey} id={thisKey} className={langClass}>{tag}</div>
            )
        })
    )
}