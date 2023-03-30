import React, { useEffect, useState } from "react"
import IUser from "interfaces/IUser";
import { useNavigate } from "react-router-dom";
import { useAuth } from "hooks";
import { getData, storeData } from "db/localStorage";

import VideoJS from './VideoJS'

export default function User() {
  const navigation = useNavigate()

  const [users, setUsers] = useState<IUser[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  const { username, removeAuth } = useAuth()
  const playerRef = React.useRef(null);

  const videoJsOptions = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    html5: {
      // hls: {
      //   debug: true,
      //   overrideNative: true
      // },
      vhs: {
        overrideNative: true
      },
      nativeAudioTracks: false,
      nativeVideoTracks: false
    }, // for safari
    sources: [{
      src: 'https://playertest.longtailvideo.com/adaptive/oceans_aes/oceans_aes.m3u8',
      type: 'application/x-mpegurl',
      withCredentials: false
    }]
  };

  const handlePlayerReady = (player:any) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on('waiting', () => {
      // videojs.log('player is waiting');
    });

    player.on('dispose', () => {
      // videojs.log('player will dispose');
    });
  };


  useEffect(() => {
    if (username?.length === 0) {
      navigation(-1)
    }
  }, []) //eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    async function getUsers() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const json = await response.json();
        setUsers(json);
        storeData('kUser', JSON.stringify(json))
      } catch (error) {
        const data = getData('kUser')
        if (data) {
          const userObj: IUser[] = JSON.parse(data)
          if (userObj) {
            setUsers(userObj);
          } else {
            alert(error);
          }
        } else {
          alert(error);
        }
      } finally {
        setLoading(false);
      }
    }

    getUsers()
  }, [])

  function onLogout() {
    removeAuth()
    navigation(-1)
  }

  return (
    <div className="flex-row justify-center items-center">
      <label className="flex justify-center pt-4 text-center text-2xl text-blue-500 font-medium">
        User Page
      </label>
      <div className="flex px-4 items-center justify-between">
        <label className="flex">
          Hello: {username}
        </label>
        <div onClick={onLogout} className="inline-block p-2 justify-end text-red-500 bg-gray-200 cursor-pointer">
          Logout
        </div>
      </div>

      {
        loading && <label className="flex justify-center my-4">Loading ...</label>
      }
      <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
      {/* <div className="flex-row mt-4 px-4 pb-7">
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
      </div> */}
    </div>
  )
}