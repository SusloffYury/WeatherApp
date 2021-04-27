import DaySecond from '../../constants/Time';

const EqualDate = timeApi => {
    const apiDay = new Date(timeApi * 1000).getDate();
    const today = new Date(Date.now() - DaySecond).getDate();
    return true;
}
    export default EqualDate;
