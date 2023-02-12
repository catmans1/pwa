import React, { useEffect, useState } from "react"
import IUser from "interfaces/IUser";

export default function User() {
  const [users, setUsers] = useState<IUser[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    async function getUsers() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const json = await response.json();
        console.log(json)
        setUsers(json);
      } catch (error) {
        alert(error);
      } finally {
        setLoading(false);
      }
    }
    getUsers()
  }, [])

  return (
    <div className="flex-row justify-center items-center">
      <div className="flex-row px-4">
        <label className="flex justify-center pt-4 text-center text-2xl text-blue-500 font-medium">
          User Page
        </label>
        <div className="inline-block p-2 justify-end text-red-500 bg-gray-200 cursor-pointer">
          Logout
        </div>
      </div>

      {
        loading && <label className="flex justify-center my-4">Loading ...</label>
      }
      <div className="flex-row mt-4 px-4 pb-7">
        {
          users.map((item) => {
            return (
              <div
                key={item.id}
                className='flex-row mt-4 first:mt-0 p-2 bg-gray-200'
              >
                <label className="flex text-lg font-semibold">
                  Name: {item.name}
                </label>
                <label className="flex text-lg font-medium">
                  Email: {item.email}
                </label>
                <label className="flex text-lg font-medium">
                  Website: {item.website}
                </label>
                <label className="flex text-lg font-medium">
                  Phone: {item.phone}
                </label>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}