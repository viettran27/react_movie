import React from 'react';
import { apiConfig } from '../../api/axiosClient';
import Cast from '../../components/cast/Cast';

const CastDetail = ({ credits }) => {
    return (
        <div className='pt-12 px-7'>
            <h3 className='text-lg'>Cast & Crew</h3>
            <div className='mt-8 flex flex-col gap-4'>
                {
                    credits.map(credit => (
                        <Cast
                            key={credit.id}
                            image={apiConfig.w500Image(credit.profile_path)}
                            name={credit.name}
                            character={credit.character}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default CastDetail;