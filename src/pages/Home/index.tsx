import React, { useState } from "react"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigation = useNavigate()

  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [errorUsername, setErrorUsername] = useState<string>('')
  const [errorPassword, setErrorPassword] = useState<string>('')

  function onHandleSubmit() {
    setErrorUsername('')
    setErrorPassword('')
    if (username.length === 0) {
      setErrorUsername('Please input username')
      return
    }
    if (password.length === 0) {
      setErrorPassword('Please input password')
      return
    }

    navigation('myCourse')
  }

  return (
    <div className="flex justify-center items-center">
      <div className="inline-flex flex-col p-5 mt-5 rounded-md shadow-md bg-gray-200">
        <label className="text-center text-blue-500 font-medium">
          Login Page
        </label>
        <form onSubmit={() => { }} className="flex flex-col mt-4">
          <label>Username</label>
          <input
            type='text'
            className="border border-gray-300 bg-transparent w-72 px-2 py-1 mt-2"
            placeholder="Input Username"
            value={username}
            onChange={event => setUsername(event.target.value)}
          />
          <label className=" text-red-500 font-normal text-sm h-5">{errorUsername}</label>
          <label className="mt-1">Password</label>
          <input
            type='password'
            autoComplete=''
            className="border border-gray-300 bg-transparent w-72 px-2 py-1 mt-2"
            placeholder="Input Password"
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
          <label className=" text-red-500 font-normal text-sm h-5">{errorPassword}</label>
          <div
            onClick={onHandleSubmit}
            className="inline-block mt-5 text-white text-center font-semibold rounded-md bg-blue-500 py-2 cursor-pointer"
          >
            <label className="cursor-pointer">
              Login
            </label>
          </div>
        </form>
      </div>
    </div>
  )
}