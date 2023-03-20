import React from 'react'
import Topbar from '../../component/Topbar';
import { topbar } from './topbartext/topbarText';
import AddIcon from '../../icons/AddIcon';

const TopbarHome = () => {
  return <Topbar text={topbar.text} icon={<AddIcon />} />;
}

export default TopbarHome
