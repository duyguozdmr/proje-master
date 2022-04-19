import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({


  card: {

    maxHeight: '600px',
    margin: '30px',


  },
  media: {
    height: 300,
    paddingTop: '10%',
    margin: '20px',
  },

  
  cardContent: {
    display:'flex',
    justifyContent: 'space-between',
    height: '90px',

  },

  
  cartActions: {
    display: 'flex',
    justifyContent: 'flex-end',
  },


  buttons: {
    paddingTop: '20px',
    margin: '20px',
    display: 'flex',
    height: '100%',
    alignItems: 'center',
    marginBottom: '50px',
    
  },

  remove: {
    
    alignItems: 'right',
    fontSize: '10px',

  },
}));