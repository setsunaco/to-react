import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
    const cardComponent = robots.map((user, i) => {
        return (
            <Card
                key={robots[i].id}
                name={robots[i].name}
                email={robots[i].email}
                username={robots[i].username}
            />
        );
    });

    return (
        <div>
            {
                robots.map((user, i) => {
                    return (
                        <Card
                            key={robots[i].id}
                            name={robots[i].name}
                            email={robots[i].email}
                            username={robots[i].username}
                        />
                    );
                })
            }
        </div>
    );
}

export default CardList;