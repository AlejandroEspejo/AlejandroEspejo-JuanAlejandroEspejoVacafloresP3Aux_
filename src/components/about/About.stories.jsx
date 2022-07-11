import About from './About'
export default {
    title: 'AlejandroEspejo/page/about',
    component: About,
    
}
const Template = args => <About  {...args}/>
export const about= Template.bind({});
/*about.args = {
    attribute: attributeUser,
    handleChange: () => handleChange('correo', 'value'),
    param: false
}*/