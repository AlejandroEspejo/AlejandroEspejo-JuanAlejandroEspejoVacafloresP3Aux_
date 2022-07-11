import Home from './Home'
export default {
    title: 'AlejandroEspejo/page',
    component: Home,
    
}
const Template = args => <Home  {...args}/>
export const home= Template.bind({});
/*home.args = {
    attribute: attributeUser,
    handleChange: () => handleChange('correo', 'value'),
    param: false
}*/