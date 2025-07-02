
const tickets = {
    '0H2AZ123': null,
    '23LA9T41': 'Verena Nardi',
}

function simpleTicketStatus(tickets, ticketId) {
    for(let ticketKey in tickets){
        if(ticketKey === ticketId){
            if(tickets[ticketKey] === null){
                return 'invalid ticket !!!'
            }else{
            return tickets[ticketKey];
            }
        }
    }
    return 'invalid ticket !!!'
}

const visitorNew = {
    name: 'Verena Nardi',
    age: 45,
    ticketId: 'H32AZ123',
    gtc: {
        signed: true,
        version: '2.1',
    },
};

const visitorOld = {
    name: 'Verena Nardi',
    age: 45,
    ticketId: 'H32AZ123',
};


function gtcVersion(visitor) {
    return visitor.gtc?.version;

}

console.log(gtcVersion(visitorOld))