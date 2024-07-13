import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'

const RightSideNavbar = () => {
    return (

        <div className="p-4">
            <div className="space-y-2 py-4">
                <h2 className="text-2xl">
                    Login With
                </h2>
                <button className="btn w-full btn-outline btn-info ">
                    <FaGoogle></FaGoogle>
                    Login With Google
                </button>
                <button className="btn w-full btn-outline  ">
                    <FaGithub></FaGithub>
                    Login With Github
                </button>
            </div>
            <div className="py-4">
                <h2 className="text-2xl mb-2 ">
                    Find Us On
                </h2>
                <a className="flex items-center gap-2 border rounded-t-lg p-2" href="">
                    <FaFacebook></FaFacebook>
                    Facbook
                </a>
                <a className="flex items-center gap-2 border-x  p-2" href="">
                    <FaTwitter></FaTwitter>
                    Twitter
                </a>
                <a className="flex items-center gap-2 border rounded-b-lg p-2" href="">
                    <FaInstagram></FaInstagram>
                    Instragram
                </a>



            </div>
            <div className="p-2 py-4 bg-gray-100 ">
                <h2 className="text-2xl mb-2 ">
                    Q-zone
                </h2>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />



            </div>
        </div>
    );
};

export default RightSideNavbar;