import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

function YogaCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  const data = [
    {
      name: `Tadasana – Mountain Pose`,
      img: `https://cdn2.stylecraze.com/wp-content/uploads/2014/08/Tadasana-%E2%80%93-Mountain-Pose1.jpg`,
      description: `This is one of the simplest of asanas, which does a good job of correcting your posture. Breathing is the spirit of yoga. So, make sure to breathe as you go through with this pose.`,
      url: `https://www.youtube.com/watch?v=_tAq8VYA_Y4`
    },
    {
      name: ` Uttanasana – Standing Forward Bending Pose`,
      img: `https://cdn2.stylecraze.com/wp-content/uploads/2014/08/Uttanasana-%E2%80%93-Standing-Forward-Bend-Pose1.jpg`,
      description: `I am a very happy customer! I would recommend`,
    },
    {
      name: `Adho Mukha Svanasana – Downward Facing Dog Pose`,
      img: `https://cdn2.stylecraze.com/wp-content/uploads/2014/08/Adho-Mukha-Svanasana-%E2%80%93-Downward-Facing-Dog-Pose-2.jpg`,
      description: `I am a very happy customer! I would recommend`,
    },
    {
      name: `Virabhadrasana I – Warrior I Pose`,
      img: `https://cdn2.stylecraze.com/wp-content/uploads/2014/08/Warrior-1.jpg`,
      description: `I am a very happy customer! I would recommend`,
    },
    {
      name: `Paschimottanasana – Seated Forward Bend Pose`,
      img: `https://cdn2.stylecraze.com/wp-content/uploads/2014/08/Paschimottanasana.jpg`,
      description: `I am a very happy customer! I would recommend`,
    },
    {
      name: ` Balasana – Child’s Pose?`,
      img: `https://cdn2.stylecraze.com/wp-content/uploads/2014/08/Child-Pose.jpg`,
      description: `I am a very happy customer! I would recommend`,
    },
    {
      name: ` Baddha Konasana – Bound Angle Pose
      `,
      img: `https://cdn2.stylecraze.com/wp-content/uploads/2014/08/Baddha-Konasana.jpg`,
      description: `I am a very happy customer! I would recommend`,
    },
    {
      name: ` Ardha Pavanamuktasana – One Legged Wind Releasing Pose`,
      img: `https://cdn2.stylecraze.com/wp-content/uploads/2014/08/Ardha-Pavanamuktasana.jpg`,
      description: `I am a very happy customer! I would recommend`,
    },
    {
      name: `Bhujangasana – Cobra Pose`,
      img: `https://cdn2.stylecraze.com/wp-content/uploads/2014/08/Bhujangasana-Cobra-pose.jpg`,
      description: `I am a very happy customer! I would recommend`,
    },
    {
      name: `Shavasana – Corpse Pose`,
      img: `https://cdn2.stylecraze.com/wp-content/uploads/2014/08/10.-Shavasana.jpg`,
      description: `I am a very happy customer! I would recommend`,
    },
    {
      name: `Vrksasana`,
      img: `https://cdn2.stylecraze.com/wp-content/uploads/2014/08/A-women-performing-vrksasana.jpg`,
      description: `I am a very happy customer! I would recommend`,
    },
  ];

  return (
  <div className="w-3/4 m-auto">
      <h2 className="text-4xl font-mono font-semibold text-rose-500 mt-20 text-center">Yoga Poses for strengthening</h2>
      <div className="mt-10">
        <Slider {...settings}>
        {data.map((d, index) => (
          <div key={index} className="bg-white h-[500px] text-black rounded-xl">
            <div className="h-72 rounded-t-xl bg-pink-300 flex justify-center items-center">
              <img src={d.img} alt="" className="h-64 w-64 rounded-full"/>
            </div>
            <div className="flex flex-col justify-center items-center gap-4 p-4">
              <p className="text-xl font-semibold text-purple-950">{d.name}</p>
              <p className="text-center">{d.description}</p>
              <button className="bg-purple-300 text-purple-950 text-lg px-6 py-2 rounded-md" onClick={d.url}>How to Do?</button>
            </div>
            <iframe></iframe>
          </div>
        ))}
        </Slider>
      </div>
    </div>
  )
}

export default YogaCarousel;
