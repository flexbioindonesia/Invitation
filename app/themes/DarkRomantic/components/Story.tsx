"use client"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { FaPeopleRobbery, FaPeoplePulling, FaHeart } from "react-icons/fa6";
function Story({data}: any) {
  const parserId = (url: any) => {
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return (match&&match[7].length==11)? match[7] : false;
}
  return (
    <div className="relative px-4 py-6 bg-white">
      <div className="shadow-sm rounded-xl overflow-hidden">
        {
          data.storyIsVideo && (
            // <video className="w-[100%] h-[200px] object-cover shadow-2xl rounded-xl" autoPlay={false} muted={true} controls={true} loop={true} src={data.storyVideoLink || "/video_contoh.mp4"}></video>
            <iframe
              width="100%"
              height="200px"
              src={`https://www.youtube.com/embed/${parserId(data?.storyVideoLink || '')}?start=103`}
              title="YouTube video player"
              allow="accelerometer;
              autoplay;
              clipboard-write;
              encrypted-media;
              gyroscope;
              picture-in-picture;
              web-share" allowFullScreen></iframe>
          )
        }
        {/* <video className="w-[100%] h-[200px] object-cover shadow-2xl rounded-xl" autoPlay={false} muted={true} controls={true} loop={true} src="https://drive.google.com/uc?export=download&id=11VTRTTkD1axra5zQ7T2pBvKaDsOz8HF0"></video> */}
      </div>
      <div className="text-center">
        <p className="text-[#D4AF37] text-xl mt-9 italic">Our Story</p>
        <p className="text-zinc-400 pt-4">{data.storyText || `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid voluptas fugiat quam iste suscipit at doloremque necessitatibus. Ipsum totam, cum velit sunt molestias ad sapiente dolor, ratione vel corporis eius.`}</p>
        {
          data.storyTimelineActive && (
            <div className="py-6">
              {
                data.sItemFirstTitle !== "" && (
                  <VerticalTimeline lineColor="#D4AF37" animate={true} layout="1-column">
                    <VerticalTimelineElement
                      visible={true}
                      className="vertical-timeline-element--work"
                      contentStyle={{ background: 'rgb(161 98 7 / 0.6)', color: '#fff' }}
                      contentArrowStyle={{ borderRight: '7px solid  rgb(161 98 7 / 0.6)' }}
                      date={data.sItemFirstYear || "2021"}
                      iconStyle={{ background: 'rgb(161 98 7)', color: '#fff' }}
                      icon={<FaHeart />}
                    >
                      <h3 className="vertical-timeline-element-title">{ data.sItemFirstTitle || `Bertemu`}</h3>
                      <p>
                        {data.sItemFirstDescription|| `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis distinctio ipsum, sit mollitia deserunt dolore ab quas vitae. Exercitationem eaque tempora nihil quaerat ipsa impedit harum non nam officiis modi?`}
                      </p>
                    </VerticalTimelineElement>
                  </VerticalTimeline>
                )
              }
              {
                data.sItemSecondTitle !== "" && (
                  <VerticalTimeline lineColor="#D4AF37" animate={true} layout="1-column">
                    <VerticalTimelineElement
                      visible={true}
                      className="vertical-timeline-element--work"
                      contentStyle={{ background: 'rgb(161 98 7 / 0.6)', color: '#fff' }}
                      contentArrowStyle={{ borderRight: '7px solid  rgb(161 98 7 / 0.6)' }}
                      date={data.sItemSecondYear || "2021"}
                      iconStyle={{ background: 'rgb(161 98 7)', color: '#fff' }}
                      icon={<FaHeart />}
                    >
                      <h3 className="vertical-timeline-element-title">{ data.sItemSecondTitle || `Bertemu`}</h3>
                      <p>
                        {data.sItemSecondDescription|| `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis distinctio ipsum, sit mollitia deserunt dolore ab quas vitae. Exercitationem eaque tempora nihil quaerat ipsa impedit harum non nam officiis modi?`}
                      </p>
                    </VerticalTimelineElement>
                  </VerticalTimeline>
                )
              }
              {
                data.sItemThirdTitle !== "" && (
                  <VerticalTimeline lineColor="#D4AF37" animate={true} layout="1-column">
                    <VerticalTimelineElement
                      visible={true}
                      className="vertical-timeline-element--work"
                      contentStyle={{ background: 'rgb(161 98 7 / 0.6)', color: '#fff' }}
                      contentArrowStyle={{ borderRight: '7px solid  rgb(161 98 7 / 0.6)' }}
                      date={data.sItemThirdYear || "2021"}
                      iconStyle={{ background: 'rgb(161 98 7)', color: '#fff' }}
                      icon={<FaHeart />}
                    >
                      <h3 className="vertical-timeline-element-title">{ data.sItemThirdTitle || `Bertemu`}</h3>
                      <p>
                        {data.sItemThirdDescription|| `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis distinctio ipsum, sit mollitia deserunt dolore ab quas vitae. Exercitationem eaque tempora nihil quaerat ipsa impedit harum non nam officiis modi?`}
                      </p>
                    </VerticalTimelineElement>
                  </VerticalTimeline>
                )
              }
            </div>
          )
        }
      </div>
    </div>
  );
}

export default Story;