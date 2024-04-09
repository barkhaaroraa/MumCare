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

  const redirectToLink = () => {
    window.location.href = "https://www.stylecraze.com/articles/effective-yoga-poses-for-women-over-60/";
  };

  const data = [
    {
      name: `Tadasana – Mountain Pose`,
      img: `https://cdn2.stylecraze.com/wp-content/uploads/2014/08/Tadasana-%E2%80%93-Mountain-Pose1.jpg`,
      description: `This is one of the simplest of asanas, which does a good job of correcting your posture. Breathing is the spirit of yoga. So, make sure to breathe as you go through with this pose.`,
    },
    {
      name: ` Uttanasana – Standing Forward Bending Pose`,
      img: `https://cdn2.stylecraze.com/wp-content/uploads/2014/08/Uttanasana-%E2%80%93-Standing-Forward-Bend-Pose1.jpg`,
      description: `A mild inversion pose, this is commonly used to combat osteoporosis as well as menopausei  . A gentle hamstring and hip stretching exercise, it eases your stress levels too.`,
    },
    {
      name: `Adho Mukha Svanasana – Downward Facing Dog Pose`,
      img: `https://cdn2.stylecraze.com/wp-content/uploads/2014/08/Adho-Mukha-Svanasana-%E2%80%93-Downward-Facing-Dog-Pose-2.jpg`,
      description: ` With its innumerable benefits, it can be done by you with utmost ease. However, if you find it difficult to come all the way on your fours with hips pointing to the ceiling, take the help of a table top. Along with combating your menopausal distress, it is also effective in preventing the onset of osteoporosis`,
    },
    {
      name: `Virabhadrasana I – Warrior I Pose`,
      img: `https://cdn2.stylecraze.com/wp-content/uploads/2014/08/Warrior-1.jpg`,
      description: `Strengthen your legs and hips with a standing yoga pose. Just make sure that your hips are squared to the front and not to the side. This ensures that your hips are stronger. A wholesome and holistic energizing pose, it improves your breathing potential too.`,
    },
    {
      name: `Paschimottanasana – Seated Forward Bend Pose`,
      img: `https://cdn2.stylecraze.com/wp-content/uploads/2014/08/Paschimottanasana.jpg`,
      description: `Along with helping you combat depression and stress, this pose could actually help you sleep better. It also wards off fatigue and prepares you to deal with menopausal issues in a better way`,
    },
    {
      name: ` Balasana – Child’s Pose?`,
      img: `https://cdn2.stylecraze.com/wp-content/uploads/2014/08/Child-Pose.jpg`,
      description: `Relax like a child with your forehead resting on the mat while your hands relax alongside your body. It is an essential pose advocated to induce a sense of calmness and relaxation. It is also helpful in improving your digestive system and better handling of menopausal issues. Check out what Balasana has to offer you.`,
    },
    {
      name: ` Baddha Konasana – Bound Angle Pose
      `,
      img: `https://cdn2.stylecraze.com/wp-content/uploads/2014/08/Baddha-Konasana.jpg`,
      description: `Take care of your hands, joints, legs, and back with utmost care with Baddha Konasana. This pose targets the areas of your body that are more susceptible to pains and aches. Along with strengthening your lower back, it also soothes menopausal complaints.`,
    },
    {
      name: ` Ardha Pavanamuktasana – One Legged Wind Releasing Pose`,
      img: `https://cdn2.stylecraze.com/wp-content/uploads/2014/08/Ardha-Pavanamuktasana.jpg`,
      description: `It is a powerful, yet gentle stretch offered to the mid and lower back as well as hips. The entire muscles of that region get a good massage and stretch, soothing out the nagging back ache.`,
    },
    {
      name: `Bhujangasana – Cobra Pose`,
      img: `https://cdn2.stylecraze.com/wp-content/uploads/2014/08/Bhujangasana-Cobra-pose.jpg`,
      description: `Give your back and abdominal muscles a good stretch and strengthen them with this Cobra Pose. Make sure you keep your shoulders relaxed and rolled backwards to avoid injuries. You can keep a block beneath the hands if you need additional support. `,
    },
    {
      name: `Shavasana – Corpse Pose`,
      img: `https://cdn2.stylecraze.com/wp-content/uploads/2014/08/10.-Shavasana.jpg`,
      description: `Wind up your yoga class with this simple, yet powerful yoga pose. It is not just a relaxation pose, but it allows you to create an awareness about your body and breathing pattern. `,
    },
    {
      name: `Vrksasana`,
      img: `https://cdn2.stylecraze.com/wp-content/uploads/2014/08/A-women-performing-vrksasana.jpg`,
      description: `Vrksasana, or the Tree Pose, is a standing yoga posture that enhances balance and flexibility. It primarily stretches the thighs, groins, and the chest, promoting greater flexibility in these areas. It is a wonderful pose for grounding yourself and improving your overall sense of balance and poise`,
    },
  ];

  return (
  <div className="w-3/4 m-auto">
      <h2 className="text-4xl font-semibold text-pink-600 mt-20 text-center" style={{font: 'Poppins'}}>Yoga Tips</h2>
      <div className="mt-10">
        <Slider {...settings}>
        {data.map((d, index) => (
          <div key={index} className="bg-white h-[600px] text-black rounded-xl">
            <div className="h-72 rounded-t-xl bg-gradient-to-br from-pink-200 via-pink-300 to-pink-200 flex justify-center items-center">
              <img src={d.img} alt="" className="h-64 w-64 rounded-full"/>
            </div>
            <div className="flex flex-col justify-center items-center gap-4 p-4">
              <p className="text-xl font-semibold text-purple-950">{d.name}</p>
              <p className="text-center">{d.description}</p>
              <button className="bg-purple-300 text-purple-950 text-lg px-6 py-2 rounded-md" onClick={redirectToLink}>How to Do?</button>
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
