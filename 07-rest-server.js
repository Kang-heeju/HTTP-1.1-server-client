//python flask와 비슷한 웹 프레임워크인 nodejs express를 사용해 보았다. 

const express = require("express");
const app = express();
app.use(express.json());

class MembershipHandler {
    constructor() {
        this.database = {};
    }

    //POST
    create(id, value) {
        if(this.database[id]) {
            return {[id]: "None"};
        }
        else {
            this.database[id] = value;
            return {[id]: this.database[id]};
        }
    }

    //GET
    read(id) {
        if(this.database[id]) {
            return {[id]: this.database[id]};
        }
        else {
            return {[id]: "None"};
        }
    }

    //PUT
    update(id, value) {
        if (this.database[id]) {
            this.database[id] = value;
            return {[id]: this.database[id]};
        }
        else {
            return {[id]: "None"};
        }
    }

    //DELETE
    delete(id) {
        if(this.database[id]) {
            delete this.database[id];
            return {[id]: "Removed"};
        }
        else {
            return {[id]: "None"};
        }
    }
}

const myManager = new MembershipHandler();

app.route(`/membership_api/:member_id`)
    .post((req,res) => {
        res.send(myManager.create(req.params.member_id, req.body.value));
    })

    .get((req, res) => {
        res.send(myManager.read(req.params.member_id));
    })

    .put((req, res) => {
        res.send(myManager.update(req.params.member_id, req.body.value));
    })

    .delete((req, res) => {
        res.send(myManager.delete(req.params.member_id));
    });

app.listen(3000);