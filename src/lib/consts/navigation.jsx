import {
    MdSpaceDashboard,
    MdShoppingBag,
    MdOutlineDataset,
    MdPerson,
    MdLock,
    MdHomeRepairService
} from "react-icons/md";

const iconClasses = `h-6 w-6`

export const dashboard_sidebar_links = [

    {
        key: 'dashboard',
        label: 'Main Dashboard',
        path: '/',
        icon: <MdSpaceDashboard />
    },
    {
        key: 'nftmarketplace',
        label: 'NFT Marketplace',
        path: '/nftmarketplace',
        icon: <MdShoppingBag />
    },
    {
        key: 'datatables',
        label: 'Datatables',
        path: '/datatables', 
        icon: <MdOutlineDataset />
    },
    {
        key: 'profiles',
        label: 'Profiles',
        path: '/profiles',
        icon: <MdPerson />
    },
    {
        key: 'signin',
        label: 'Sign In',
        path: '/signin', // url
        icon: <MdLock />
    },
    {
        key: 'rtladmin',
        label: 'RTL Admin',
        path: '/rtladmin', // url
        icon: <MdHomeRepairService />
    }

]

export default dashboard_sidebar_links
