import App from './App'
export default {
    title: 'AlejandroEspejo/Page',
    component: App,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
}
const Template = args => <App  {...args}/>
export const app= Template.bind({});
/*app.args = {
    attribute: attributeUser,
    handleChange: () => handleChange('correo', 'value'),
    param: false
}*/