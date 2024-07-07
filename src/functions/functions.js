export function convertEpochToHumanTime(epochTimestamp) {
    // Create a new Date object from the epoch timestamp
    let date = new Date(epochTimestamp * 1000);
  
    // Array of month names
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  
    // Get year, month, and day
    let year = date.getFullYear();
    let month = months[date.getMonth()];
    let day = ("0" + date.getDate()).slice(-2);
  
    // Format the date and time in the desired pattern
    let humanTime = `${year}/${month}/${day}`;
    return humanTime;
  }