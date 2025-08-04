import { IconType } from 'react-icons';
import { FaFlag, FaBullseye, FaRocket, FaLaptop, FaTrophy } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { GiLightBulb } from 'react-icons/gi';
import { RiLandscapeLine } from 'react-icons/ri';

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  socialLinks: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
};

export type Milestone = {
  year: number;
  title: string;
  description: string;
  icon: IconType;
};

export type ValueCard = {
  id: string;
  title: string;
  description: string;
  icon: IconType;
  color: string;
};

export const aboutContent = {
  hero: {
    title: "Redefining Tech Retail",
    subtitle: "Where innovation meets exceptional customer experiences",
    description: "At ElectroNex, we're more than just a tech store - we're a gateway to the future of electronics. Founded in 2020, we've grown from a small startup to a leading tech retailer by focusing on quality, innovation, and customer satisfaction.",
    imageUrl: "https://plus.unsplash.com/premium_photo-1681426664478-b039637f29f1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  mission: {
    title: "Our Mission",
    content: "To democratize cutting-edge technology by making premium electronics accessible, understandable, and enjoyable for everyone. We carefully curate our products to ensure they meet our high standards for quality, innovation, and value."
  },
  team: [
    {
      id: "1",
      name: "Jamal Williams",
      role: "Founder & CEO",
      bio: "Tech enthusiast with 15+ years in electronics retail. Founded ElectroNex to revolutionize how people buy technology.",
      imageUrl: "https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      socialLinks: {
        twitter: "#",
        linkedin: "#"
      }
    },
    {
      id: "2",
      name: "Sarah Chen",
      role: "Product Director",
      bio: "Former engineer who brings technical expertise to our product selection process.",
      imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=461&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      socialLinks: {
        linkedin: "#",
        github: "#"
      }
    },
    {
      id: "3",
      name: "Alex Johnson",
      role: "Customer Experience",
      bio: "Passionate about creating seamless shopping experiences for our customers.",
      imageUrl: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      socialLinks: {
        twitter: "#"
      }
    }
  ] as TeamMember[],
  milestones: [
    {
      year: 2020,
      title: "Founded",
      description: "Launched our first store in San Francisco",
      icon: FaFlag
    },
    {
      year: 2021,
      title: "First 10,000 Customers",
      description: "Reached our first major customer milestone",
      icon: FaBullseye
    },
    {
      year: 2022,
      title: "Expansion",
      description: "Opened 3 new locations across California",
      icon: FaRocket
    },
    {
      year: 2023,
      title: "Online Platform",
      description: "Launched our e-commerce platform",
      icon: FaLaptop
    },
    {
      year: 2024,
      title: "Award",
      description: "Won Best Tech Retailer award",
      icon: FaTrophy
    }
  ] as Milestone[],
  values: [
    {
      id: "1",
      title: "Innovation",
      description: "We constantly seek the latest and most groundbreaking tech",
      icon: GiLightBulb,
      color: "from-violet-500 to-violet-700"
    },
    {
      id: "2",
      title: "Integrity",
      description: "Honest advice and transparent pricing",
      icon: RiLandscapeLine,
      color: "from-blue-500 to-blue-700"
    },
    {
      id: "3",
      title: "Community",
      description: "Building a tech enthusiast community",
      icon: FiUsers,
      color: "from-emerald-500 to-emerald-700"
    }
  ] as ValueCard[]
};