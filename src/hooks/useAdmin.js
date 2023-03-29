import axios from "axios";
import { useEffect, useState } from "react"

const useAdmin = email => {
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    const getIsAdmin = async () => {
      if (email) {
        const { data } = await axios.get(`https://server.wathincompanyltd.com/api/user/admin/${email}`)
        setIsAdmin(data.isAdmin)
      }
    }
    getIsAdmin()

  }, [email])

  return [isAdmin];
}

export default useAdmin;