import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { FaPeopleRobbery, FaPeoplePulling } from "react-icons/fa6";
function Story() {
  return (
    <div className="relative px-4 py-6 bg-white">
      <div className="shadow-sm rounded-xl overflow-hidden">
        <video className="w-[100%] h-[200px] object-cover shadow-2xl rounded-xl" autoPlay={false} muted={true} controls={true} loop={true} src="/video_contoh.mp4"></video>
        {/* <video className="w-[100%] h-[200px] object-cover shadow-2xl rounded-xl" autoPlay={false} muted={true} controls={true} loop={true} src="https://drive.google.com/uc?export=download&id=11VTRTTkD1axra5zQ7T2pBvKaDsOz8HF0"></video> */}
      </div>
      <div className="text-center">
        <p className="text-[#D4AF37] text-xl mt-9 italic">Our Story</p>
        <p className="text-zinc-400 pt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid voluptas fugiat quam iste suscipit at doloremque necessitatibus. Ipsum totam, cum velit sunt molestias ad sapiente dolor, ratione vel corporis eius.</p>
        <div className="py-6">
          <VerticalTimeline lineColor="#D4AF37" animate={true} layout="1-column">
            <VerticalTimelineElement
              visible={true}
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(161 98 7 / 0.6)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(161 98 7 / 0.6)' }}
              date="2021"
              iconStyle={{ background: 'rgb(161 98 7)', color: '#fff' }}
              icon={<FaPeopleRobbery />}
            >
              <h3 className="vertical-timeline-element-title">Bertemu</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis distinctio ipsum, sit mollitia deserunt dolore ab quas vitae. Exercitationem eaque tempora nihil quaerat ipsa impedit harum non nam officiis modi?
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              visible={true}
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(161 98 7 / 0.6)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(161 98 7 / 0.6)' }}
              date="2023"
              iconStyle={{ background: 'rgb(161 98 7)', color: '#fff' }}
              icon={<FaPeoplePulling />}
            >
              <h3 className="vertical-timeline-element-title">Menikah</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis distinctio ipsum, sit mollitia deserunt dolore ab quas vitae. Exercitationem eaque tempora nihil quaerat ipsa impedit harum non nam officiis modi?
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
}

export default Story;