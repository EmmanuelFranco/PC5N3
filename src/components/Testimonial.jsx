export const Testimonial = ({ img, testimonial, name, position }) => {
    return (
        <div className="flex flex-col items-center text-center">
            <img className="w-[72px] rounded-full" src={img} alt="photo" />
            <p className="my-8 font-Barlow Text-Very-dark-grayish-blue px-4 max-w-[480px]">{testimonial}</p>
            <h3 className="font-Fraunces text-[18px] Text-Very-dark-desaturated-blue">{name}</h3>
            <p className="text-grayish-blue font-Barlow text-[14px]">{position}</p>
        </div>
    )
    }
    