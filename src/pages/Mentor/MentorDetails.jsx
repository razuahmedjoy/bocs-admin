import React, { useEffect, useState } from "react";
import DefaultLayout from "../../layout/DefaultLayout";
import mentorAxiosInstance from "../../axiosInstance/mentorAxiosInstance";
import { useParams } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb";


import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ApartmentIcon from '@mui/icons-material/Apartment';
import SchoolIcon from '@mui/icons-material/School';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';

const MentorDetails = () => {

    const { id } = useParams();
    const [mentorDetails, setMentorDetails] = useState([]);
    const [open, setOpen] = React.useState(true);

    useEffect(() => {
        const getMentor = async () => {
            const res = await mentorAxiosInstance.get(`/details/${id}`)
            setMentorDetails(res.data.data)
        }
        getMentor()
    }, [id]);



    return (
        <DefaultLayout>
            <Breadcrumb pageName="Mentor Details" />
            <List
                className="w-screen"
                sx={{ width: '100%', bgcolor: 'background.paper' }}
                component="nav"
                aria-labelledby="nested-list-subheader" >
                <div className="flex justify-around p-4" >
                    <img className="rounded h-50 w-50" src={mentorDetails?.imgPath} alt="Mentor" />
                </div>
                <div className="flex justify-around pt-0 p-4" >
                    <p className="ml-4"><strong>Name: </strong>{mentorDetails?.name}</p>
                </div>
                <div className=" p-4 pb-0" >
                    <p className="ml-4"><strong>Expertise: </strong>{mentorDetails?.expertise}</p>
                </div>
                <div className=" p-4 pb-0" >
                    <p className="ml-4"><strong>About: </strong>{mentorDetails?.about}</p>
                </div>
                <div className=" p-4 pb-0" >
                    <p className="ml-4"><strong>Rank: </strong>{mentorDetails?.rank}</p>
                </div>
                <div className=" p-4 pb-0" >
                    <p className="ml-4"><strong>Rating: </strong>{mentorDetails?.rating}</p>
                </div>
                <div className=" p-4 pb-0" >
                    <p className="ml-4"><strong>Works: </strong></p>
                    {
                        mentorDetails?.works?.map(work => {
                            return (
                                <div key={work?.id} className="ml-16" >
                                    <strong className="block">{work?.id * 1}.</strong>
                                    <div className="ml-4 mb-4">
                                        <p><strong>Position: </strong>{work?.position}</p>
                                        <p><strong>Organization: </strong>{work?.organization}</p>
                                        <p><strong>Start: </strong>{work?.start}</p>
                                        <p><strong>End: </strong>{work?.end}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className=" p-4 pb-0" >
                    <p className="ml-4"><strong>Educations: </strong></p>
                    {
                        mentorDetails?.educations?.map(education => {
                            return (
                                <div key={education?.id} className="ml-24" >
                                    <strong className="block">{education?.id * 1}.</strong>
                                    <div className="ml-4 mb-4">
                                        <p><strong>Degree: </strong>{education?.degree}</p>
                                        <p><strong>Institution: </strong>{education?.institution}</p>
                                        <p><strong>Start: </strong>{education?.start}</p>
                                        <p><strong>End: </strong>{education?.end}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className=" p-4 pb-0" >
                    <p className="ml-4"><strong>Publications: </strong></p>
                    {
                        mentorDetails?.publications?.map(publication => {
                            return (
                                <div key={publication?.id} className="ml-24" >
                                    <strong className="block">{publication?.id * 1}.</strong>
                                    <div className="ml-4 mb-4">
                                        <p><strong>Name: </strong>{publication?.name}</p>
                                        <p><strong>URL: </strong><a href={publication?.url} target="_blank">{publication?.url}</a></p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className=" p-4 pb-0" >
                    <p className="ml-4"><strong>Awards: </strong></p>
                    {
                        mentorDetails?.awards?.map(award => {
                            return (
                                <div key={award?.id} className="ml-16" >
                                    <strong className="block">{award?.id * 1}.</strong>
                                    <div className="ml-4 mb-4">
                                        <p><strong>Name: </strong>{award?.name}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className=" p-4 pb-0" >
                    <p className="ml-4"><strong>Socials: </strong></p>
                    {
                        mentorDetails?.socials?.map(social => {
                            return (
                                <div key={social?.id} className="ml-16" >
                                    <strong className="block">{social?.id * 1}.</strong>
                                    <div className="ml-4 mb-4">
                                        <p><strong>{social?.title}: </strong><a href={social?.url} target="_blank">{social?.url}</a></p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </List>
        </DefaultLayout>
    )
}

export default MentorDetails;
