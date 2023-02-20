export const calculateYears = (initialTime) => { 
  let diff_ms = Date.now() - initialTime.getTime();
  let age_dt = new Date(diff_ms); 

  return Math.abs(age_dt.getUTCFullYear() - 1970);
}