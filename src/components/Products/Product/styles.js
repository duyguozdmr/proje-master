import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({


    root: {
        maxWidth: '100%',
        maxHeight: '100%',
        borderRadius: '200',
        height: '600px',

    },

    media: {
        height: 300,
        paddingTop: '10%',
    },

    cardActions: {
        display: 'flex',
        justifyContent: 'flex-end',
    },

    cardContent: {
        display:'flex',
        justifyContent: 'space-between',
        height: '110px',
        
    },


}));

