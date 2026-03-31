import React, { use } from 'react';
import ToolsCard from '../ui/ToolsCard/ToolsCard';

const tagStyles = {
    'best-seller': 'bg-yellow-100 text-yellow-600',
    'popular': 'bg-purple-100 text-purple-600',
    'new': 'bg-green-100 text-green-600',
};

const periodLabel = {
    'monthly': '/Mo',
    'one-time': '/One-Time',
};

const Tools = ({ toolsPromise }) => {

    const tools = use(toolsPromise);

    return (
        <div className='mt-25 container mx-auto px-6 lg:px-0'>
            {/* Header */}
            <div className='text-center space-y-3'>
                <h2 className='text-4xl font-bold'>Premium Digital Tools</h2>
                <p className='text-sm text-black/60'>
                    Choose from our curated collection of premium digital products designed
                    <br className='hidden lg:block' />
                    to boost your productivity and creativity.
                </p>
            </div>
            {/* Grid cards for tools */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12'>
                {tools.map(tool => (
                    <ToolsCard tool={tool} tagStyles={tagStyles} periodLabel={periodLabel} />
                ))}
            </div>
        </div>
    );
};

export default Tools;