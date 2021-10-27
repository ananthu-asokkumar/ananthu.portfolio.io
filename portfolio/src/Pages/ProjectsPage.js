import React, { useState } from 'react';
import {MainLayout, InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import Projects from '../data/Projects';
import Menu from '../Components/Menu';
import Button from '../Components/Button';

const allButtons = ['All', ...new Set(Projects.map(item => item.category))]

function ProjectsPage() {
    const [menuItem, setMenuItems] = useState(Projects);
    const [button, setButtons] = useState(allButtons);

    const filter = (button) => {

        if(button === 'All'){
            setMenuItems(Projects);
            return;
        }

        const filteredData = Projects.filter(item => item.category === button);
        setMenuItems(filteredData);
    }
    return (
        <MainLayout>
            <Title title={'Projects'} span={''} />
            <InnerLayout>

                {/* <Button filter={filter} button={button} /> */}
                <Menu menuItem={menuItem} />
            </InnerLayout>
        </MainLayout>
    )
}

export default ProjectsPage
