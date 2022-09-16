const sumAll = function(firstValue, secondValue)
{
    let sum=0;
    if (!Number.isInteger(firstValue) || !Number.isInteger(secondValue) || firstValue<0 || secondValue<0)
    {
        return 'ERROR';
    }
    
    else
    {
        if(firstValue<secondValue)
        {
            for(let i=firstValue; i<=secondValue; i++)
            {
                sum += i;
            }
        }
        
        else
        {!Number.isInteger(secondValue)
            for(let i=secondValue; i<=firstValue; i++)
            {
                sum += i;
            }
        }
        return sum;
    }
}


// Do not edit below this line
module.exports = sumAll;
