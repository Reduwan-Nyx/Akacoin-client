import React from 'react';

const AddCard = () => {
    const handelSubmit = (e) => {
        e.preventDefault()
        const newCoin = {
            title: e.target.title.value,
            desc: e.target.desc.value,
        }

        fetch(' https://aqueous-lowlands-30928.herokuapp.com/wallet', {
            "method": "POST",
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(newCoin)
        })
            .then(res => res.json())
            .then(data => {
                e.target.reset()
            })

    }
    return (
        <div>
        <h2>ADD NEW WALLET</h2>

        <form onSubmit={handelSubmit}>
            <div class="input-group input-group-sm mt-4">
                <span class="input-group-text" id="inputGroup-sizing-sm">Wallet Title</span>
                <input name='title' type="text" class="outline-0 " aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
            </div>
            <div class="input-group input-group-sm mt-4">
                <span class="input-group-text" id="inputGroup-sizing-sm">wallet desc</span>
                <input name='desc' type="text" class="outline-0 " aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
            </div>
            <input class="btn btn-primary mt-3" type="submit" value="Submit" />
        </form>

    </div>
    );
};

export default AddCard;