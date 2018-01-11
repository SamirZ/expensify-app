import { setStartDate, setEndDate, setTextFiler, sortByAmount, sortByDate } from '../../actions/filters';
import moment from 'moment';

test('should generate set start date action object', ()=>{
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

test('should generate set end date action object', ()=>{
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});

test('should generate set text filter action object with value', ()=>{
    const action = setTextFiler('Rent');
    expect(action).toEqual({
        type: 'SET_TEXT_FILER',
        text: 'Rent'   
    })
});

test('should generate set text filter action object without value', ()=>{
    const action = setTextFiler();
    expect(action).toEqual({
        type: 'SET_TEXT_FILER',
        text: ''   
    })
});

test('should generate sort by date filter action object', ()=>{
    const action = sortByDate();
    expect(action).toEqual({
        type: 'SORT_BY_DATE',
        sortBy: 'date'
    });
});

test('should generate sort by amount filter action object', ()=>{
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT',
        sortBy: 'amount'
    });
});