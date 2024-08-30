import React from 'react';

import { ReactComponent as Img3D } from './assets/icon-3d-cube-model.svg';
import { ReactComponent as ImgAdmin } from './assets/icon-admin-globe.svg';
import { ReactComponent as ImgAnalytics } from './assets/icon-analytics.svg';
import { ReactComponent as ImgAI } from './assets/icon-brain-ia.svg';
import { ReactComponent as ImgCancel } from './assets/icon-cancel.svg';
import { ReactComponent as ImgCharacter } from './assets/icon-character.svg';
import { ReactComponent as ImgClose } from './assets/icon-close.svg';
import { ReactComponent as ImgControls } from './assets/icon-controls.svg';
import { ReactComponent as ImgCreatures } from './assets/icon-creatures-2.svg';
import { ReactComponent as ImgCredit } from './assets/icon-credit.svg';
import { ReactComponent as ImgDashboard } from './assets/icon-dashboard-2.svg';
import { ReactComponent as ImgUnknown } from './assets/icon-unknown.svg';
import { ReactComponent as ImgDevices } from './assets/icon-devices.svg';
import { ReactComponent as ImgDownload } from './assets/icon-download.svg';
import { ReactComponent as ImgFinances } from './assets/icon-finances.svg';
import { ReactComponent as ImgMovie } from './assets/icon-movie.svg';
import { ReactComponent as ImgAudio } from './assets/icon-sound-wave.svg';
import { ReactComponent as ImgVideo } from './assets/icon-video.svg';
import { ReactComponent as ImgMarketing } from './assets/icon-marketing.svg';
import { ReactComponent as ImgMessaging } from './assets/icon-messaging.svg';
import { ReactComponent as ImgGallery } from './assets/icon-gallery.svg';
import { ReactComponent as ImgGoogle } from './assets/icon-google.svg';
import { ReactComponent as ImgGraph } from './assets/icon-graphs.svg';
import { ReactComponent as ImgHome } from './assets/icon-home-outline.svg';
import { ReactComponent as ImgLegal } from './assets/icon-legal.svg';
import { ReactComponent as ImgFeatures } from './assets/icon-features.svg';
import { ReactComponent as ImgFolder } from './assets/icon-folder-minus.svg';
import { ReactComponent as ImgFolderOpen } from './assets/icon-folder-minus-open.svg';
import { ReactComponent as ImgFolderPlus } from './assets/icon-folder-plus.svg';
import { ReactComponent as ImgObjects } from './assets/icon-3D.svg';
import { ReactComponent as ImgQuests } from './assets/icon-quests-6.svg';
import { ReactComponent as ImgVehicles } from './assets/icon-vehicles.svg';
import { ReactComponent as ImgDoc } from './assets/icon-docs.svg';
import { ReactComponent as ImgDocument } from './assets/icon-document.svg';
import { ReactComponent as ImgDocumentPlus } from './assets/icon-document-plus.svg';
import { ReactComponent as ImgDialogue } from './assets/icon-dialogue.svg';
import { ReactComponent as ImgLogout } from './assets/icon-logout.svg';
import { ReactComponent as ImgLocation } from './assets/icon-location.svg';
import { ReactComponent as ImgMaintenance } from './assets/icon-maintenance.svg';
import { ReactComponent as ImgMenu } from './assets/icon-menu-circle.svg';
import { ReactComponent as ImgMountain } from './assets/icon-mountain.svg';
import { ReactComponent as ImgPricing } from './assets/icon-pricing.svg';
import { ReactComponent as ImgProjects } from './assets/icon-projects-grid.svg';
import { ReactComponent as ImgSketch } from './assets/icon-palette-3.svg';
import { ReactComponent as ImgText } from './assets/icon-text.svg';
import { ReactComponent as ImgUser } from './assets/icon-user.svg';
import { ReactComponent as ImgUsers } from './assets/icon-users.svg';
import { ReactComponent as ImgWorkspaces } from './assets/icon-workspaces-hierarchy.svg';
import { ReactComponent as ImgPreview } from './assets/icon-preview.svg';
import { ReactComponent as ImgSave } from './assets/icon-save.svg';
import { ReactComponent as ImgSettings } from './assets/icon-settings.svg';
import { ReactComponent as ImgDuplicate } from './assets/icon-duplicate.svg';
import { ReactComponent as ImgTrash } from './assets/icon-trash.svg';
import { ReactComponent as ImgEdit } from './assets/icon-edit.svg';
// import { ReactComponent as ImgMountains } from './assets/icon-mountains.svg'
import { ReactComponent as ImgUndo } from './assets/icon-undo.svg';
import { ReactComponent as ImgUndoRound } from './assets/icon-undo-round.svg';
import { ReactComponent as ImgRedo } from './assets/icon-redo.svg';
import { ReactComponent as ImgRedoRound } from './assets/icon-redo-round.svg';

export type IconName =
  '3D' |
  '3d' |
  'account' |
  'accounts' |
  'admin' |
  'ai' |
  'ai:images' |
  'ai:chats' |
  'ai:videos' |
  'ai:sounds' |
  'analytics' |
  'audio' |
  'cancel' |
  'credit' |
  'character' |
  'characters' |
  'control' |
  'controls' |
  'close' |
  'creature' |
  'creatures' |
  'logout' |
  'dashboard' |
  'dashboards' |
  'device' |
  'devices' |
  'dialogue' |
  'dialogues' |
  'doc' |
  'docs' |
  'document' |
  'documents' |
  'document-plus' |
  'download' |
  'downloads' |
  'duplicate' |
  'delete' |
  'edit' |
  'feature' |
  'features' |
  'finances' |
  'folder' |
  'folders' |
  'folder-open' |
  'folder-plus' |
  'gallery' |
  'google' |
  'graph' |
  'graphs' |
  'home' |
  'image' |
  'images' |
  'illustration' |
  'illustrations' |
  'legal' |
  'location' |
  'locations' |
  'maintenance' |
  'marketing' |
  'menu' |
  'menus' |
  'messaging' |
  'mountain' |
  'mountains' |
  'movie' |
  'movies' |
  'object' |
  'objects' |
  'preview' |
  'pricing' |
  'project' |
  'projects' |
  'segment' |
  'segments' |
  'quest' |
  'quests' |
  'save' |
  'segment' |
  'segments' |
  'setting' |
  'settings' |
  'sound' |
  'sounds' |
  'sketch' |
  'sketches' |
  'tenants' |
  'text' |
  'texts' |
  'trash' |
  'undo' |
  'undo-round' |
  'redo' |
  'redo-round' |
  'chat' |
  'chats' |
  'transport' |
  'transports' |
  'vehicle' |
  'vehicles' |
  'video' |
  'videos' |
  'workspace' |
  'workspaces' |
  'unknown' |
  'user' |
  'users'

interface CustomIconProps {
  title?: string;
  name: IconName,
  imageClass?: string,
  color?: string;
  size?: number;
  onClick?: () => void,
  DEBUG?: boolean;
}

export const Icon: React.FC<CustomIconProps> = ({
  title,
  name,
  imageClass,
  color,
  onClick,
  size = 16,
  DEBUG,
}) => {
  const getIcon = (name: IconName): React.ReactElement => {

    if (DEBUG) {
      // eslint-disable-next-line no-console
      console.log('Icon', name);
    }

    const sizeProps = {
      className: imageClass + ' transition-all duration-700 ease-in-out' + onClick ? 'cursor-pointer' : '',
      height: size,
      title: title,
      width: size,
    };
    const imageProps = {
      ...sizeProps,
      fill: color,
      onClick,
      stroke: color,
    };

    switch (name) {
      // ActionBar
      case 'save':
        return <ImgSave {...imageProps} />;
      case 'edit':
        return <ImgEdit {...imageProps} />;
      case 'preview':
        return <ImgPreview {...imageProps} />;
      case 'cancel':
        return <ImgCancel {...imageProps} fill={'transparent'} />;
      case 'duplicate':
        return <ImgDuplicate {...imageProps} />;
      case 'delete':
      case 'trash':
        return <ImgTrash {...imageProps} />;
      // Features
      case '3d':
      case '3D':
        return <Img3D {...imageProps} />;
      case 'home':
        return <ImgHome {...imageProps} />;
      case 'dashboard':
        return <ImgDashboard {...imageProps} stroke="transparent" />;
      case 'analytics':
        return <ImgAnalytics {...imageProps} />;
      case 'ai':
        return <ImgAI {...imageProps} />;
      case 'ai:sounds':
      case 'audio':
      case 'sound':
      case 'sounds':
        return <ImgAudio {...imageProps} />;
      case 'ai:videos':
      case 'video':
      case 'videos':
        return <ImgVideo {...imageProps} />;
      case 'marketing':
        return <ImgMarketing {...imageProps} />;
      case 'menu':
      case 'menus':
        return <ImgMenu {...imageProps} stroke={'transparent'} />;
      case 'messaging':
        return <ImgMessaging {...imageProps} />;
      case 'movie':
      case 'movies':
        return <ImgMovie {...imageProps} />;
      case 'ai:images':
      case 'gallery':
      case 'image':
      case 'images':
        return <ImgGallery {...imageProps} />;
      case 'google':
        return <ImgGoogle {...imageProps} stroke={'transparent'} />;
      case 'graph':
      case 'graphs':
        return <ImgGraph {...imageProps} />;
      case 'feature':
      case 'features':
        return <ImgFeatures {...imageProps} />;
      case 'finances':
        return <ImgFinances {...imageProps} fill="transparent" />;
      case 'folder':
      case 'folders':
        return <ImgFolder {...imageProps} />;
      case 'folder-open':
        return <ImgFolderOpen {...imageProps} />;
      case 'folder-plus':
        return <ImgFolderPlus {...imageProps} />;
      case 'close':
        return <ImgClose {...imageProps} stroke={color} />;
      case 'creature':
      case 'creatures':
        return <ImgCreatures {...imageProps} />;
      case 'object':
      case 'objects':
        return <ImgObjects {...imageProps} fill={`${color}66`} />;
      case 'vehicle':
      case 'vehicles':
      case 'transport':
      case 'transports':
        return <ImgVehicles {...imageProps} />;
      case 'logout':
        return <ImgLogout {...imageProps} stroke={color} fill="transparent" />;
      case 'device':
      case 'devices':
        return <ImgDevices {...imageProps} />;
      case 'doc':
      case 'docs':
        return <ImgDoc {...imageProps} stroke={color} fill="transparent" />;
      case 'document':
      case 'documents':
        return <ImgDocument {...imageProps} />;
      case 'document-plus':
        return <ImgDocumentPlus {...imageProps} />;
      case 'download':
      case 'downloads':
        return <ImgDownload {...imageProps} />;
      case 'dialogue':
      case 'dialogues':
        return <ImgDialogue {...imageProps} />;
      case 'character':
      case 'characters':
        return <ImgCharacter {...imageProps} />;
      case 'credit':
        return <ImgCredit stroke={color} fill={color} width={size} />;
      case 'control':
      case 'controls':
        return <ImgControls {...imageProps} fill={color} stroke={color} />;
      case 'legal':
        return <ImgLegal {...imageProps} />;
      case 'location':
      case 'locations':
        return <ImgLocation {...imageProps} fill={color} stroke={color} />;
      case 'maintenance':
        return <ImgMaintenance {...imageProps} />;
      case 'mountain':
        return <ImgMountain {...imageProps} fill={color} stroke={color} />;
      case 'quest':
      case 'quests':
      case 'segment':
      case 'segments':
        return <ImgQuests {...imageProps} />;
      case 'sketch':
      case 'sketches':
      case 'illustration':
      case 'illustrations':
        return <ImgSketch {...imageProps} fill={color} stroke={color} />;
      case 'pricing':
        return <ImgPricing {...imageProps} />;
      case 'project':
      case 'projects':
        return <ImgProjects {...imageProps} fill={color} stroke={color} />;
      case 'settings':
        return <ImgSettings {...imageProps} fill={color}
        />;
      case 'account':
      case 'user':
        return <ImgUser {...imageProps} fill={color} />;
      case 'users':
        return <ImgUsers {...imageProps} fill={color} />;
      case 'workspace':
      case 'workspaces':
        return <ImgWorkspaces {...imageProps} />;
      case 'admin':
        return <ImgAdmin {...imageProps} fill={color} stroke={'none'} />;
      case 'undo':
        return <ImgUndo {...imageProps} fill='transparent' stroke={color} />;
      case 'undo-round':
        return <ImgUndoRound {...imageProps} fill='transparent' stroke={color} />;
      case 'redo':
        return <ImgRedo {...imageProps} fill='transparent' stroke={color} />;
      case 'redo-round':
        return <ImgRedoRound {...imageProps} fill='transparent' stroke={color} />;
      case 'ai:chats':
      case 'text':
      case 'texts':
      case 'chat':
      case 'chats':
        return <ImgText {...imageProps} fill={color} stroke={color} />;
      default: return (
        <ImgUnknown fill={color} stroke={color} width={size} />
      );
    }
  };
  return (
    <div
      className="transition-all duration-300 ease-in-out"
      title={title}
    >
      {getIcon(name)}
    </div>
  );
};

export default Icon;