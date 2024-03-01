export function formatDate(date) {

    if (!date) {
        return null
    }
    let formattedDate;
    if (date.year) {
        formattedDate = date.year
    } else {return null}
    
    if (date.month) {
        formattedDate = date.month + '/' + formattedDate
    
    } 
    if (date.day) {
        formattedDate = date.day + '/' + formattedDate
    
    }
    
    return formattedDate
    
    
    }
   export function getFullDate(e) {
    
        let fullDate;
        const firstDate = formatDate(e.starts_at)
        const secondDate = formatDate(e.ends_at)
        
        if (!firstDate && !secondDate ) {
            fullDate = null
        } else if ((!firstDate && secondDate) || (firstDate && !secondDate)) {
            firstDate ? fullDate = firstDate : fullDate = secondDate
        } else {
            fullDate = firstDate + ' to ' + secondDate
        }
        return fullDate
    }