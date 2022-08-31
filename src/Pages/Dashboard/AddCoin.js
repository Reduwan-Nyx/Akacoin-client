import React from 'react';

const AddCoin = () => {
    const handelSubmit = (e) => {
        e.preventDefault()
        const newCoin = {
            name: e.target.name.value,
            img: e.target.link.value,
        }

        fetch(' https://aqueous-lowlands-30928.herokuapp.com/coin', {
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
            <h3>Add new coin</h3>
            <form onSubmit={handelSubmit}>
                <div class="input-group input-group-sm mt-4">
                    <span class="input-group-text" id="inputGroup-sizing-sm">Coin Name</span>
                    <input name='name' type="text" class="outline-0 " aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                </div>
                <div class="input-group input-group-sm mt-4">
                    <span class="input-group-text" id="inputGroup-sizing-sm">Image Link</span>
                    <input name='link' type="text" class="outline-0 " aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                </div>
                <input class="btn btn-primary mt-3" type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default AddCoin;