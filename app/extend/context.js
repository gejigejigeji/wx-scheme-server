module.exports = {
    empty(data) {
        if (data == '' || data == null ||data.length<1 ||data==undefined) {
            return true
        }else{
            return false
        }
    },
    setState(data,state=200,meg='success') {
        this.status = state;
        if (data && data.err) {
            state=this.status = 500;
            meg='error'
        }
        return {
            status:state,
            message:meg
        };
    }
};