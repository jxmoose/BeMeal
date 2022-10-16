import foodpic from "../2-2-2-3foodgroups_fruits_detailfeature.jpg"

import { useState, useEffect } from 'react';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}


function Post() {
    const { height, width } = useWindowDimensions();
    console.log(width)
    return (
        <div>
            <div>
                <img
                    src={foodpic}
                    height = {height * 3 / 5}
                    width = height

                >
                </img>
            </div>
            <div>
                <text>ratings</text>
            </div>
        </div>
    );
}

export default Post;