import { useQuery } from '@apollo/client';
import  { useEffect, useState } from 'react'
import { useAuthUser, useIsAuthenticated, useSignOut } from 'react-auth-kit';
import { GET_ROLE } from './Auth';
import img1 from "/img/user.png";


function useNav() {
    const auth = useAuthUser();
    const signout = useSignOut();
    const [logged, setLogged] = useState(false);
    const [idx, setIdx] = useState();
    const [img, setImg] = useState();
    const [role, setRole] = useState();
    const isAuthenticated = useIsAuthenticated();
    const { data} = useQuery(GET_ROLE, {
      variables: { id: idx },
    });
  
    
    useEffect(() => {
      if ((isAuthenticated, auth())) {
        setLogged(true);
        setImg("img/undraw_profile.svg");
        setIdx(auth().id);
        // console.log(idx)
      } else {
        setLogged(false);
        setImg(img1);
      }
      if (logged && data) {
        setRole(
          data.usersPermissionsUser.data.attributes.role.data.attributes.type,
        );
      }
    }, [auth, isAuthenticated, logged, data, idx]);
  
    const logout = () => {
      setLogged(false);
      signout();
    };
  

  return {logout,logged,idx,img,role,data,auth}
}

export default useNav