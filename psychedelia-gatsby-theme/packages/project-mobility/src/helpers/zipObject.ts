export const zipObject =(keysArr, ValuesArr) => (
    keysArr.reduce((acc,cur, i)=> {
        return Object.assign(acc, {[cur] : ValuesArr[i]})
    }, {})
)