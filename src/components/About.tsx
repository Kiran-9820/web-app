// components/About.tsx
import React from 'react';
import '../App.css';
import satellite from '../satellite.jpg'
import roadmap from '../roadmap.jpg'
import terrain from '../terrain.jpg'
import hybrid from '../hybrid.jpg'
const About: React.FC = () => {
  return  <div className="about-page">
            <nav className="about-nav">Maps</nav>
            <div className="about-content">
            <div className="div-roadmap">
                <div className="roadmap">Roadmap</div>
                <div className="img-con"><img className="roadmap-image" src={roadmap}></img>
                <div className="roadmap-content">
                A road map, route map, or street map is a map that primarily displays roads and transport links rather than natural geographical information. It is a type of navigational map that commonly includes political boundaries and labels, making it also a type of political map.
                </div>
              </div></div>
              <div className="div-satellite">
                <div className="satellite">Satellite</div>
                <div className="img-con"><img className="satellite-image" src={satellite}></img>
                <div className="satellite-content">
                Satellite view is a "top-down" or bird's-eye view; most of the high-resolution imagery of cities is aerial photography taken from aircraft flying at 800 to 1,500 feet (240 to 460 m), while most other imagery is from satellites.They can show us how much a city has changed, how well our crops are growing, where a fire is burning.
                </div>
              </div></div>
              <div className="div-terrain">
                <div className="terrain">Terrain</div>
                <div className="img-con"><img className="terrain-image" src={terrain}></img>
                <div className="terrain-content">
                A terrain map is a type of map that focuses on the physical features of the land, such as mountains, valleys, and rivers. Unlike traditional maps, which often prioritize political boundaries or man-made landmarks, terrain maps highlight the natural features that make each region unique.
                </div>
              </div></div>
              
              <div className="div-hybrid">
                <div className="hybrid">Hybrid</div>
              <div className="img-con"><img className="hybrid-image" src={hybrid}></img>
                <div className="hybrid-content"> "Hybrid" map refers to a map that combines both satellite imagery and road maps. It overlays street names and other features on top of satellite imagery, providing a hybrid view that includes details from both sources. Users can see the actual terrain, landmarks, and structures from the satellite imagery.</div></div>
              </div>
            </div>
          </div>;
};

export default About;
